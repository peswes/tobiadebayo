const fs = require('fs');
const glob = require('glob');
const { PurgeCSS } = require('purgecss');

const cssFiles = glob.sync('**/*.css', { ignore: 'node_modules/**' });
const htmlFiles = glob.sync('**/*.html', { ignore: 'node_modules/**' });

async function findUnusedSelectors() {
  for (const cssFile of cssFiles) {
    console.log(`\nChecking ${cssFile}...`);
    const purgeCSSResult = await new PurgeCSS().purge({
      content: htmlFiles,
      css: [cssFile],
    });

    if (!purgeCSSResult || !purgeCSSResult.length) {
      console.log(`No results for ${cssFile}. It may be empty or not processed.`);
      continue;
    }

    const unused = purgeCSSResult[0].rejected;
    if (unused && unused.length > 0) {
      console.log(`Unused selectors in ${cssFile}:`);
      unused.forEach(sel => console.log(sel));
    } else {
      console.log(`No unused selectors found in ${cssFile}`);
    }
  }
}

findUnusedSelectors();