import React from 'react';
import clsx from 'clsx';
import styles from './GlossaryLink.module.css';

// Glossary terms database
const glossaryTerms = {
  'Physical AI': {
    definition: 'Artificial Intelligence that is grounded in physical reality, interacting with the world through sensors and actuators.',
    link: '/docs/glossary#physical-ai'
  },
  'Embodied Intelligence': {
    definition: 'Intelligence that emerges from the interaction between an agent and its physical environment.',
    link: '/docs/glossary#embodied-intelligence'
  },
  'Simulation-to-Reality Gap': {
    definition: 'The differences between robot behaviors in simulation vs. real-world environments that must be bridged during development.',
    link: '/docs/glossary#simulation-to-reality-gap'
  },
  'ROS 2': {
    definition: 'Robot Operating System 2, a flexible framework for writing robot software.',
    link: '/docs/glossary#ros2'
  },
  'Gazebo': {
    definition: 'A robotics simulation environment that provides physics simulation, 3D rendering, and sensor simulation.',
    link: '/docs/glossary#gazebo'
  },
  'Isaac Sim': {
    definition: 'NVIDIA\'s next-generation simulation application for robotics.',
    link: '/docs/glossary#isaac-sim'
  },
  'VLA': {
    definition: 'Vision-Language-Action models that integrate visual, linguistic, and motor capabilities.',
    link: '/docs/glossary#vla'
  }
};

const GlossaryLink = ({ term, children }) => {
  const termData = glossaryTerms[term] || { definition: `Term: ${term}`, link: '#' };
  const displayText = children || term;

  return (
    <span className={styles.glossaryLink}>
      <a href={termData.link} title={termData.definition} className={styles.termLink}>
        {displayText}
      </a>
      <span className={clsx('tooltip', styles.tooltip)}>
        {termData.definition}
      </span>
    </span>
  );
};

export default GlossaryLink;