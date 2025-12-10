// tests/unit/validation/validator.test.js
const ChapterValidator = require('../../../src/validation/validator');

describe('ChapterValidator', () => {
  let validator;

  beforeEach(() => {
    validator = new ChapterValidator();
  });

  test('should validate a compliant chapter', () => {
    const compliantChapter = `---
title: Test Chapter
description: A test chapter
---

# Test Chapter

## Introduction
Content here.

## Core Concepts
Content here.

## Technical Deep Dive
Content here.

## Hands-On Walkthrough
Content here.

## Simulation vs. Real-World
Content here.

## Summary
Content here.

## Glossary/Key Terms
Content here.

## Compliance Check
Physical AI compliance.

## Inter-Module Coherence

This chapter maintains inter-module coherence by:
- Using consistent terminology with other chapters (ROS → Gazebo → Isaac → VLA stack)
- Following the same structure and organization as other modules
- Building on concepts introduced in previous chapters
- Preparing students for concepts in future chapters
`;
    const result = validator.validateChapter(compliantChapter);
    expect(result.isValid).toBe(true);
    expect(result.errors.length).toBe(0);
  });

  test('should detect missing required sections', () => {
    const incompleteChapter = `---
title: Test Chapter
description: A test chapter
---

# Test Chapter

## Introduction
Content here.

## Summary
Content here.
`;
    const result = validator.validateChapter(incompleteChapter);
    expect(result.isValid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
    expect(result.errors).toContain('Missing required section: Core Concepts');
  });

  test('should validate schema compliance', () => {
    const compliantChapter = `---
title: Test Chapter
description: A test chapter
---

# Test Chapter

## Introduction
Content here.

## Core Concepts
Content here.

## Technical Deep Dive
Content here.

## Hands-On Walkthrough
Content here.

## Simulation vs. Real-World
Content here.

## Summary
Content here.

## Glossary/Key Terms
Content here.

## Compliance Check
Physical AI compliance.

## Inter-Module Coherence

This chapter maintains inter-module coherence by:
- Using consistent terminology with other chapters (ROS → Gazebo → Isaac → VLA stack)
- Following the same structure and organization as other modules
- Building on concepts introduced in previous chapters
- Preparing students for concepts in future chapters
`;
    const result = validator.validateStructureWithSchema(compliantChapter);
    expect(result.length).toBe(0);
  });

  test('should detect inter-module coherence issues', () => {
    const chapterWithoutCoherence = `---
title: Test Chapter
description: A test chapter
---

# Test Chapter

## Introduction
Content here.

## Core Concepts
Content here.

## Technical Deep Dive
Content here.

## Hands-On Walkthrough
Content here.

## Simulation vs. Real-World
Content here.

## Summary
Content here.

## Glossary/Key Terms
Content here.

## Compliance Check
Physical AI compliance.
`;
    const result = validator.validateInterModuleCoherence(chapterWithoutCoherence);
    expect(result.length).toBeGreaterThan(0);
    expect(result).toContain('Missing discussion of inter-module coherence with other chapters');
  });
});