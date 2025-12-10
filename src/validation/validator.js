// Content validation framework for Physical AI & Humanoid Robotics textbook
// Validates chapter structure and compliance with Physical AI constitution

const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');
const chapterSchema = require('./chapter-schema.json');

class ChapterValidator {
  constructor() {
    this.requiredSections = [
      'Introduction',
      'Core Concepts',
      'Technical Deep Dive',
      'Hands-On Walkthrough',
      'Simulation or Real-World Example',
      'Summary',
      'Glossary/Key Terms'
    ];

    this.constitutionRequirements = [
      'Embodied Intelligence principles',
      'Simulation-to-Reality progressive learning',
      'Multi-Platform Technical Standards',
      'Academic Rigor with Practical Application',
      'Progressive Learning Structure'
    ];

    // Initialize AJV for schema validation
    this.ajv = new Ajv();
    this.validateSchema = this.ajv.compile(chapterSchema);
  }

  // Validate chapter structure using schema
  validateStructureWithSchema(content) {
    // Extract sections from content to create a schema-compliant object
    const chapterObject = this.extractChapterStructure(content);
    const valid = this.validateSchema(chapterObject);

    if (!valid) {
      return this.validateSchema.errors.map(error =>
        `Schema validation error: ${error.instancePath || 'root'} ${error.message}`
      );
    }

    return [];
  }

  // Extract chapter structure from MDX content
  extractChapterStructure(content) {
    const titleMatch = content.match(/title:\s*(.+)/);
    const descriptionMatch = content.match(/description:\s*(.+)/);

    const title = titleMatch ? titleMatch[1].trim() : '';
    const description = descriptionMatch ? descriptionMatch[1].trim() : '';

    // Extract sections using headings
    const sections = [];

    // Define section patterns
    const sectionPatterns = [
      { id: 'introduction', title: 'Introduction', pattern: /## Introduction[\s\S]*?(?=## \w|$)/ },
      { id: 'core-concepts', title: 'Core Concepts', pattern: /## Core Concepts[\s\S]*?(?=## \w|$)/ },
      { id: 'technical-deep-dive', title: 'Technical Deep Dive', pattern: /## Technical Deep Dive[\s\S]*?(?=## \w|$)/ },
      { id: 'hands-on', title: 'Hands-On Walkthrough', pattern: /## Hands-On Walkthrough[\s\S]*?(?=## \w|$)/ },
      { id: 'simulation-real-world', title: 'Simulation or Real-World Example', pattern: /## Simulation vs. Real-World|Simulation or Real-World Example[\s\S]*?(?=## \w|$)/ },
      { id: 'summary', title: 'Summary', pattern: /## Summary[\s\S]*?(?=## \w|$)/ },
      { id: 'glossary', title: 'Glossary/Key Terms', pattern: /## Glossary\/Key Terms[\s\S]*?(?=## Compliance Check|$)/ }
    ];

    sectionPatterns.forEach(pattern => {
      const match = content.match(pattern.pattern);
      if (match) {
        // Extract compliance info
        const compliance = {
          embodied_intelligence: content.includes('Embodied Intelligence'),
          simulation_to_reality: content.includes('Simulation-to-Reality'),
          robotics_standards: this.extractRoboticsStandards(content)
        };

        sections.push({
          id: pattern.id,
          title: pattern.title,
          content: match[0],
          compliance: compliance
        });
      }
    });

    return {
      title,
      description,
      sections
    };
  }

  // Extract robotics standards from content
  extractRoboticsStandards(content) {
    const standards = ['ROS 2', 'Gazebo', 'URDF', 'Isaac Sim', 'Nav2', 'VLA'];
    return standards.filter(standard => content.includes(standard));
  }

  // Validate chapter structure (legacy method)
  validateStructure(content) {
    const errors = [];

    // Check for required sections
    this.requiredSections.forEach(section => {
      const pattern = new RegExp(`##\\s+(${section}|${section.replace(/ or .*/, '')})`, 'i');
      if (!pattern.test(content)) {
        errors.push(`Missing required section: ${section}`);
      }
    });

    return errors;
  }

  // Validate compliance with Physical AI constitution
  validateConstitution(content) {
    const errors = [];

    // Check for compliance with constitution requirements
    this.constitutionRequirements.forEach(requirement => {
      if (!content.toLowerCase().includes(requirement.toLowerCase())) {
        errors.push(`Missing compliance with: ${requirement}`);
      }
    });

    return errors;
  }

  // Validate Docusaurus MDX compliance
  validateMDX(content) {
    const errors = [];

    // Check for proper frontmatter
    if (!content.includes('---')) {
      errors.push('Missing frontmatter (---)');
    }

    // Check for title
    if (!content.match(/title:\s*.+/)) {
      errors.push('Missing title in frontmatter');
    }

    return errors;
  }

  // Validate robotics standards compliance
  validateRoboticsStandards(content) {
    const errors = [];

    const standards = ['ROS 2', 'Gazebo', 'URDF', 'Isaac Sim', 'Nav2'];
    const foundStandards = standards.filter(standard =>
      content.includes(standard)
    );

    if (foundStandards.length === 0) {
      errors.push('No robotics standards mentioned (ROS 2, Gazebo, URDF, Isaac Sim, Nav2)');
    }

    return errors;
  }

  // Validate inter-module coherence requirements
  validateInterModuleCoherence(content) {
    const errors = [];

    // Check for consistent terminology across modules
    const terminologyChecks = [
      { term: 'ROS → Gazebo → Isaac → VLA stack', required: true },
      { term: 'Physical AI', required: true },
      { term: 'Embodied Intelligence', required: true },
      { term: 'Simulation-to-Reality', required: true }
    ];

    terminologyChecks.forEach(check => {
      const found = content.includes(check.term);
      if (check.required && !found) {
        errors.push(`Missing required terminology: ${check.term}`);
      }
    });

    // Check for consistency with other modules
    if (!content.includes('inter-module coherence')) {
      errors.push('Missing discussion of inter-module coherence with other chapters');
    }

    return errors;
  }

  // Complete validation
  validateChapter(content) {
    const structureErrors = this.validateStructure(content);
    const constitutionErrors = this.validateConstitution(content);
    const mdxErrors = this.validateMDX(content);
    const roboticsErrors = this.validateRoboticsStandards(content);
    const coherenceErrors = this.validateInterModuleCoherence(content);

    // Schema validation errors
    const schemaErrors = this.validateStructureWithSchema(content);

    return {
      isValid: (
        structureErrors.length === 0 &&
        constitutionErrors.length === 0 &&
        mdxErrors.length === 0 &&
        roboticsErrors.length === 0 &&
        schemaErrors.length === 0 &&
        coherenceErrors.length === 0
      ),
      errors: [
        ...structureErrors,
        ...constitutionErrors,
        ...mdxErrors,
        ...roboticsErrors,
        ...schemaErrors,
        ...coherenceErrors
      ]
    };
  }

  // Generate validation report
  generateReport(content) {
    const result = this.validateChapter(content);

    return {
      timestamp: new Date().toISOString(),
      isValid: result.isValid,
      errors: result.errors,
      compliance: {
        structure: this.validateStructure(content).length === 0,
        constitution: this.validateConstitution(content).length === 0,
        mdx: this.validateMDX(content).length === 0,
        robotics: this.validateRoboticsStandards(content).length === 0,
        schema: this.validateStructureWithSchema(content).length === 0,
        coherence: this.validateInterModuleCoherence(content).length === 0
      }
    };
  }
}

// Export the validator
module.exports = ChapterValidator;