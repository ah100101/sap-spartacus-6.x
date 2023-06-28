const { lstatSync, readdirSync, copyFileSync, writeFileSync, mkdirSync } = require("fs");
const { dirname } = require("path");

const OUT_DIR = ".vercel/output";
const PROJECT_DIST = "dist/sap-store-6.x";

const ssgPages = [
  {
    route: "/electronics-spa/en/USD/product/1934398/HDR-XR105E$",
    staticHTML: "/product/1934398/HDR-XR105E/index.html",
  },  
  {
    route: "/electronics-spa/en/USD/product/1986316/LEGRIA%20HF%20S100",
    staticHTML: "/product/1986316/LEGRIA%20HF%20S100/index.html",
  },
  {
    route: "/electronics-spa/en/USD/product/1432722/Gigashot%20K80H",
    staticHTML: "/product/1432722/Gigashot%20K80H/index.html",
  },
  {
    route: "/electronics-spa/en/USD/product/1776948/Camileo%20S10%20EU",
    staticHTML: "/product/1776948/Camileo%20S10%20EU/index.html",
  },
  {
    route: "/electronics-spa/en/USD/product/1934406/HDR-CX105E%20%20Red",
    staticHTML: "/product/1934406/HDR-CX105E%20%20Red/index.html",
  },
  {
    route: "/electronics-spa/en/USD/product/1776947/Camileo%20H20%20EU",
    staticHTML: "/product/1776947/Camileo%20H20%20EU/index.html",
  }
]

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
  const fn_dir = `${OUT_DIR}/functions/ssr.func`;
  write(
    `${fn_dir}/.vc-config.json`,
    JSON.stringify({
      runtime: "nodejs18.x",
      handler: "index.js",
      launcherType: "Nodejs",
    })
  );

  copyFiles(`${PROJECT_DIST}/server`, fn_dir);

  write(`${fn_dir}/index.js`, `module.exports = require("./main.js").app();`);

  // static files also need to be copied to the function dir because the server runtime uses them
  mkdirSync(`${fn_dir}/${PROJECT_DIST}/browser`, { recursive: true });
  copyFiles(`${PROJECT_DIST}/browser`, `${fn_dir}/${PROJECT_DIST}/browser`);
}

function createISRFunction(name, group, fallback) {
  const funcDir = `${OUT_DIR}/functions/${name}.func`;
  write(
    `${funcDir}/.vc-config.json`,
    JSON.stringify({
      runtime: "nodejs18.x",
      handler: "index.js",
      launcherType: "Nodejs",
    })
  );

  copyFiles(`${PROJECT_DIST}/server`, funcDir);

  write(`${funcDir}/index.js`, `module.exports = require("./main.js").app();`);

  // static files also need to be copied to the function dir because the server runtime uses them
  mkdirSync(`${funcDir}/${PROJECT_DIST}/browser`, { recursive: true });
  copyFiles(`${PROJECT_DIST}/browser`, `${funcDir}/${PROJECT_DIST}/browser`);

  // Create prerender config json file
  write(
    `${OUT_DIR}/functions/${name}.prerender-config.json`,
    JSON.stringify({
      // For this example, we are hardcoding the revalidation interval to 60 seconds
      expiration: 60,
      group,
      allowQuery: ["__pathname"],
      passQuery: true,
      fallback,
    })
  );
}

// Create a static folder in the Vercel output folder for browser assets
mkdirSync(`${OUT_DIR}/static`, { recursive: true });
// Copy all browser assets to the static Vercel folder
copyFiles(`${PROJECT_DIST}/browser`, `${OUT_DIR}/static`);

createSSRFunction();

isrPages.forEach((page, i) => {
  createISRFunction(`isr-func-${page.id}`, ++i, page.fallbackHTML);
});

// Write a config file for Vercel build output
write(
  `${OUT_DIR}/config.json`,
  JSON.stringify({
    version: 10,
    routes: [
      ...ssgPages.map(page => {
        return {
          src: `${page.route}$`,
          dest: page.staticHTML,
        }
      }),
      ...isrPages.map(page => {
        return {
          src: `${page.route}$`,
          dest: `/isr-func-${page.id}?__pathname=${page.route}`
        }
      }),
      // Specify that SSR should be used for all other pages
      { 
        src: "/.*", 
        dest: "/ssr" 
      },
    ],
  })
);
