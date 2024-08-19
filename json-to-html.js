const fs = require('fs');
const path = require('path');

const inputFolder = '_content';
const outputFolder = 'dist';

function findHtmlFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
  
    list.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
  
      if (stat && stat.isDirectory()) {
        results = results.concat(findHtmlFiles(filePath));
      } else if (file.endsWith('.html')) {
        results.push(filePath);
      }
    });
  
    return results;
  }

function loadJson(filePath) {
  const absolutePath = path.join(__dirname, inputFolder, filePath);
  return JSON.parse(fs.readFileSync(absolutePath, 'utf-8'));
}

function getValueFromJson(json, jsonPath) {
  return jsonPath.split('.').reduce((acc, part) => acc && acc[part], json);
}

function replacePlaceholders(htmlContent) {
  return htmlContent.replace(/{{\s*(.*?)\s*}}/g, (match, p1) => {
    const [jsonFileName, jsonKeyPath] = p1.split('.').map(str => str.trim());
    const jsonData = loadJson(`${jsonFileName}.json`);
    return getValueFromJson(jsonData, jsonKeyPath) || match;
  });
}

const distDir = path.join(__dirname, outputFolder);

const htmlFiles = findHtmlFiles(distDir);

htmlFiles.forEach(htmlFilePath => {
  let htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');

  htmlContent = replacePlaceholders(htmlContent);

  fs.writeFileSync(htmlFilePath, htmlContent, 'utf-8');
  console.log(`HTML updated: ${htmlFilePath}`);
});