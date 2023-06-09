const { lstatSync, readdirSync, copyFileSync, writeFileSync, mkdirSync } = require("fs");
const { dirname } = require("path");

const out_dir = ".vercel/output";
const project_dist = "dist/sap-store-6.x";

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

function createISRFunction(name, group) {
  const fn_dir = `${out_dir}/functions/isr-${name}.func`;
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
    `${out_dir}/functions/isr-${name}.prerender-config.json`,
    JSON.stringify({
      // for this example we hardcoding the revalidation interval to 60 seconds
      expiration: 60,
      group,
      allowQuery: ["__pathname"],
      passQuery: true,
    })
  );
}

// Create a static folder in the Vercel output folder for browser assets
mkdirSync(`${out_dir}/static`, { recursive: true });
// Copy all browser assets to the static Vercel folder
copyFiles(`${project_dist}/browser`, `${out_dir}/static`);

createSSRFunction();
createISRFunction("electronics-home", 1);

// Write a config file for Vercel build output
write(
  `${out_dir}/config.json`,
  JSON.stringify({
    version: 6,
    routes: [
      // Specify that ISR should be used for the electronics home page
      {
        src: "/electronics-spa/en/USD/product/358639/DSC-N1/$",
        dest: "/isr?__pathname=/electronics-spa/en/USD/product/358639/DSC-N1"
      },
      // Specify that SSR should be used for all other pages
      { 
        src: "/.*", 
        dest: "/ssr" 
      }
    ],
  })
);