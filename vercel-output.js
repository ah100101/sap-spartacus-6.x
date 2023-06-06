const { readdirSync, copyFileSync, writeFileSync, mkdirSync } = require("fs");
const { dirname } = require("path");

/**
 * @param {string} file
 * @param {string} data
 */
function write(file, data) {
  try {
    mkdirSync(dirname(file), { recursive: true });
  } catch {}

  writeFileSync(file, data);
}

const out_dir = ".vercel/output";
const project_dist = "dist/sap-store-6x";

// Create a static folder in the Vercel output folder for browser assets
mkdirSync(`${out_dir}/static`, { recursive: true });
// Copy all browser assets to the static Vercel folder
const static_files = readdirSync(`${project_dist}/browser`);
for (const file of static_files) {
  copyFileSync(`${project_dist}/browser/${file}`, `${out_dir}/static/${file}`);
}

// Create a serverless function that will run the server runtime
const fn_dir = `${out_dir}/functions/ssr.func`;
// Write the config file for the server runtime
write(
  `${fn_dir}/.vc-config.json`,
  JSON.stringify({
    runtime: "nodejs18.x",
    handler: "index.js",
    launcherType: "Nodejs",
  })
);
// Copy the main Spartacus bundle file to the serverless function directory
copyFileSync(`${project_dist}/server/main.js`, `${fn_dir}/main.js`);
// Create an index.js file that will run the serverless application
write(`${fn_dir}/index.js`, `module.exports = require("./main.js").app();`);

// Since the serverless application relies on static files, create a function directory for them
mkdirSync(`${fn_dir}/${project_dist}/browser`, { recursive: true });
// Copy all the browser assets to the serverless function directory
for (const file of static_files) {
  copyFileSync(
    `${project_dist}/browser/${file}`,
    `${fn_dir}/${project_dist}/browser/${file}`
  );
}

// Write a config file for Vercel build output
write(
  `${out_dir}/config.json`,
  JSON.stringify({
    version: 3,
    // For now, we only have an SSR function to run
    routes: [{ src: "/.*", dest: "/ssr" }],
  })
);