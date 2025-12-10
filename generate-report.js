const ChapterValidator = require('./src/validation/validator.js');
const ReportGenerator = require('./src/validation/report-generator.js');
const fs = require('fs');

// Create validator and report generator instances
const validator = new ChapterValidator();
const reportGen = new ReportGenerator();

// Read the sample chapter content
const content = fs.readFileSync('./src/templates/chapter/sample-chapter.mdx', 'utf8');

// Generate validation result
const validationResult = validator.generateReport(content);

// Generate the validation report
const report = reportGen.generateReport(validationResult, 'sample-chapter.mdx');

// Save the report
reportGen.saveReport(report, './src/validation/sample-chapter-validation-report.md');