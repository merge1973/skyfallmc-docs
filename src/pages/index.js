import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from '../css/index.module.css';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
      <ThemedImage
        alt="Docusaurus themed image"
        width="50%"
        sources={{
          light: useBaseUrl('/img/logo.svg'),
          dark: useBaseUrl('/img/logodark.svg'),
        }}
      />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <a href="/docs"><button className={clsx(styles.button)}>View the Docs →</button></a>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Documentation for the SkyfallMC Minecraft Server">
      <HomepageHeader />
    </Layout>
  );
}
