const ChapterValidator = require('./src/validation/validator.js');
const fs = require('fs');
const validator = new ChapterValidator();
const content = fs.readFileSync('./docs/mobile-robot-navigation.mdx', 'utf8');
const result = validator.generateReport(content);
console.log('Validation Report:', JSON.stringify(result, null, 2));

// Also validate the sample chapter to make sure it still works
const sampleContent = fs.readFileSync('./src/templates/chapter/sample-chapter.mdx', 'utf8');
const sampleResult = validator.generateReport(sampleContent);
console.log('Sample Chapter Validation Report:', JSON.stringify(sampleResult, null, 2));