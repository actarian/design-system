
const fs = require('fs');
const path = require('path');

function isSvg(filename) {
  return filename && filename.indexOf('.svg') !== -1;
}

async function rebuildIcons(directory, filename = null) {
  // console.log('rebuildIcons', filename);
  if (!isSvg(filename)) {
    return;
  }
  if (filename === null || fs.existsSync(path.join(directory, filename))) {
    fs.readdir(directory, async (err, files) => {
      const indexTs = files.filter(x => isSvg(x)).map(file => {
        const className = camelize(file.replace('.svg', ''));
        // console.log(file, className);
        return `export { default as ${className} } from './${file}';`;
      }).join('\n');
      // console.log(indexTs);
      await fsWrite(path.join(directory, 'index.ts'), indexTs);
    });
  }
}

async function fsWrite(pathname, data, encoding = 'utf8') {
  try {
    await fs.promises.writeFile(pathname, data, encoding);
  } catch (error) {
    console.log('fsWrite', error, pathname);
  }
}

async function BuildAndWatch(directory) {
  console.log('BuildAndWatch');
  await rebuildIcons(directory);
  fs.watch(directory, { interval: 2000 }, async (eventType, filename) => { // (current, previous) => {}
    await rebuildIcons(directory, filename);
  });
}

function camelize(text) {
  return text.replace(/(^[a-z])|-([a-z0-9])/gi, ($0, $1, $2) => $2 ? $2.toUpperCase() : $1.toUpperCase());
}

BuildAndWatch('@icons');
