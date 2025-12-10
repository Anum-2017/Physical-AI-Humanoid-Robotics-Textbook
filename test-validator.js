const ChapterValidator = require('./src/validation/validator.js');
const fs = require('fs');
const validator = new ChapterValidator();
const content = fs.readFileSync('./src/templates/chapter/sample-chapter.mdx', 'utf8');
const result = validator.generateReport(content);
console.log('Validation Report:', JSON.stringify(result, null, 2));