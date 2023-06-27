const { lstatSync, readdirSync, copyFileSync, writeFileSync, mkdirSync } = require("fs");
const { dirname } = require("path");

const out_dir = ".vercel/output";
const project_dist = "dist/sap-store-6.x";

const isrPages = [
  {
    id: "home",
    route: "/electronics-spa/en/USD/",
    fallbackHTML: "../static/index.html",
  },
  {
    id: "nv10",
    route: "/electronics-spa/en/USD/product/553637/NV10",
    fallbackHTML: "../static/product/553637/NV10/index.html",
  },
  {
    id: "dsc-n1",
    route: "/electronics-spa/en/USD/product/358639/DSC-N1",
    fallbackHTML: "../static/product/358639/DSC-N1/index.html",
  }
]

function write(file, data) {
  try {
    mkdirSync(dirname(file), { recursive: true });
  } catch {}

  writeFileSync(file, data);
}

function copyFiles(source, target) {
  const files = readdirSync(source);
  for (const file of files) {
    const curSource = `${source}/${file}`;
    if (lstatSync(curSource).isDirectory()) {
      mkdirSync(`${target}/${file}`, { recursive: true });
      copyFiles(curSource, `${target}/${file}`);
    } else {
      copyFileSync(curSource, `${target}/${file}`);
    }
  }
}

function createSSRFunction() {
  const fn_dir = `${out_dir}/functions/ssr.func`;
  write(
    `${fn_dir}/.vc-config.json`,
    JSON.stringify({
      runtime: "nodejs18.x",
      handler: "index.js",
      launcherType: "Nodejs",
    })
  );

  copyFiles(`${project_dist}/server`, fn_dir);

  write(`${fn_dir}/index.js`, `module.exports = require("./main.js").app();`);

  // static files also need to be copied to the function dir because the server runtime uses them
  mkdirSync(`${fn_dir}/${project_dist}/browser`, { recursive: true });
  copyFiles(`${project_dist}/browser`, `${fn_dir}/${project_dist}/browser`);
}

function createISRFunction(name, group, fallback) {
  const fn_dir = `${out_dir}/functions/${name}.func`;
  write(
    `${fn_dir}/.vc-config.json`,
    JSON.stringify({
      runtime: "nodejs18.x",
      handler: "index.js",
      launcherType: "Nodejs",
    })
  );

  copyFiles(`${project_dist}/server`, fn_dir);

  write(`${fn_dir}/index.js`, `module.exports = require("./main.js").app();`);

  // static files also need to be copied to the function dir because the server runtime uses them
  mkdirSync(`${fn_dir}/${project_dist}/browser`, { recursive: true });
  copyFiles(`${project_dist}/browser`, `${fn_dir}/${project_dist}/browser`);

  // Create prerender config json file
  write(
    `${out_dir}/functions/${name}.prerender-config.json`,
    JSON.stringify({
      // for this example we hardcoding the revalidation interval to 60 seconds
      expiration: 60,
      group,
      allowQuery: ["__pathname"],
      passQuery: true,
      fallback,
    })
  );
}

// Create a static folder in the Vercel output folder for browser assets
mkdirSync(`${out_dir}/static`, { recursive: true });
// Copy all browser assets to the static Vercel folder
copyFiles(`${project_dist}/browser`, `${out_dir}/static`);

createSSRFunction();

isrPages.forEach((page, i) => {
  createISRFunction(`isr-func-${page.id}`, ++i, page.fallbackHTML);
});
// createISRFunction("electronics-home-page", 1, "../static/index.html");
// createISRFunction("electronics-detail-page-nv10", 2, "../static/product/553637/NV10/index.html");
// createISRFunction("electronics-detail-page-dsc-n1", 3, "../static/product/358639/DSC-N1/index.html");
// createISRFunction("electronics-home-page", 2);

// Write a config file for Vercel build output
write(
  `${out_dir}/config.json`,
  JSON.stringify({
    version: 10,
    routes: [
      // Specify that SSR should be used for all other pages
      { 
        src: "/.*", 
        dest: "/ssr" 
      },
      // Specify the ISR routes
      ...isrPages.map(page => {
        return {
            src: `${page.route}$`,
            dest: `/isr-func-${page.id}?__pathname=${page.route}`
        }
      })
    ],
  })
);