import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroContainer} style={{gridTemplateColumns: '1fr'}}>
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            Physical AI & Humanoid Robotics
          </Heading>
          <p className={styles.heroSubtitle}>
            A complete guide to building intelligent humanoid robots using ROS 2, Digital Twins, NVIDIA Isaac, and Vision-Language-Action systems.
          </p>
          <div className={styles.heroButtons}>
            <Link className={styles.btnPrimary} to="/docs/intro">
              Start Learning
            </Link>
            <Link className={styles.btnSecondary} to="#modules">
              Explore Modules
            </Link>
          </div>
        </div>
        <div className={styles.heroImageWrapper}>
          <img
      src={require('@site/static/img/pixel-robot.png').default}
      alt="Robot"
      className={styles.heroRobot}
    />
        </div>
      </div>
    </header>
  );
}

function ModuleCard({ title, subtitle, description, link }) {
  return (
    <div className={styles.moduleCard}>
      <div className={styles.moduleContent}>
        <h3 className={styles.moduleTitle}>{title}</h3>
        <p className={styles.moduleSubtitle}>{subtitle}</p>
        <p className={styles.moduleDescription}>{description}</p>
        <Link to={link} className={styles.moduleButton}>
          Read More
        </Link>
      </div>
    </div>
  );
}

function ModulesSection() {
  const modules = [
    {
      title: 'The Robotic Nervous System',
      subtitle: 'ROS 2 & Real-Time Control',
      description: 'Master ROS 2, the industry-standard framework for robot control. Learn nodes, topics, services, and the complete communication architecture that powers every modern robot.',
      link: '/docs/category/module-1--the-robotic-nervous-system-ros-2',
    },
    {
      title: 'The Digital Twin',
      subtitle: 'Gazebo & Unity Simulation',
      description: 'Create photorealistic simulations of your robot in Gazebo and Unity. Master physics simulation, sensor modeling, and the complete pipeline from digital twin to real-world deployment.',
      link: '/docs/category/module-2--the-digital-twin-gazebo--unity',
    },
    {
      title: 'The AI-Robot Brain',
      subtitle: 'NVIDIA Isaac & GPU Acceleration',
      description: 'Implement advanced perception and control using NVIDIA Isaac. Harness GPU acceleration for real-time AI inference, computer vision, and autonomous decision-making.',
      link: '/docs/category/module-3--the-ai-robot-brain-nvidia-isaac',
    },
    {
      title: 'Vision-Language-Action',
      subtitle: 'Multimodal AI & Robot Control',
      description: 'Build robots that understand language and visual input. Implement VLA systems that translate human commands into precise robot actions through advanced multimodal AI.',
      link: '/docs/category/module-4--vision-language-action-vla',
    },
  ];

  return (
    <section className={styles.modulesSection} id="modules">
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>The Four Pillars of Intelligent Robotics</h2>
          <p className={styles.sectionSubtitle}>
            Learn the complete system architecture for building advanced autonomous humanoid robots.
          </p>
        </div>
        <div className={styles.modulesGrid}>
          {modules.map((module, idx) => (
            <ModuleCard key={idx} {...module} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyThisBookSection() {
  const benefits = [
    {
      title: 'Hands-on Engineering Focus',
      subtitle: 'Real code, real projects, real robots',
      description: 'Skip the theory-only approach. Every chapter includes complete, runnable code examples and practical exercises with actual robotic hardware and simulators.',
    },
    {
      title: 'Complete Control Pipeline',
      subtitle: 'From motor commands to autonomous decision-making',
      description: 'Understand the full stack from low-level motor control through ROS 2 communication to high-level AI-driven perception and decision-making systems.',
    },
    {
      title: 'Simulation + AI Integration',
      subtitle: 'Digital twins, physics simulation, AI perception',
      description: 'Master both simulation environments (Gazebo, Unity) and modern AI frameworks (NVIDIA Isaac) to create robots that bridge the reality gap.',
    },
    {
      title: 'Beginner to Advanced',
      subtitle: 'Start simple, scale to production-grade systems',
      description: 'Begin with ROS 2 basics and progress to advanced autonomous systems. Each module builds on previous knowledge with clear learning paths.',
    },
  ];

  return (
    <section className={styles.whySection}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why This Textbook?</h2>
          <p className={styles.sectionSubtitle}>
            The most comprehensive guide to building intelligent humanoid robots from scratch.
          </p>
        </div>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, idx) => (
            <div key={idx} className={styles.benefitCard}>
              <div className={styles.benefitCheckmark}>✓</div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitSubtitle}>{benefit.subtitle}</p>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <h3 className={styles.footerTitle}>Physical AI & Humanoid Robotics</h3>
        <p className={styles.footerSubtitle}>A Complete Guide to Building Intelligent Robots</p>
        <nav className={styles.footerNav}>
          <Link to="/">Home</Link>
          <Link to="/docs/intro">Modules</Link>
          <a href="https://github.com/Anum-2017/Physical-AI-Humanoid-Robotics-Textbook" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A complete guide to building intelligent humanoid robots using ROS 2, Digital Twins, NVIDIA Isaac, and Vision-Language-Action systems.">
      <HomepageHeader />
      <main>
        <ModulesSection />
        <WhyThisBookSection />
      </main>
      <Footer />
    </Layout>
  );
}
