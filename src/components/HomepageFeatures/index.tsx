import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import {
  FeatureItem,
  FeatureList,
  QuickStartList,
  RecommendedList,
  GettingInfoList,
} from "./home.constant";

function Feature({ title, Svg, url }: FeatureItem) {
  return (
    <Link href={url} className={styles.home_content_card_link}>
      <div className={styles.home_content_card_box}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <p>{title}</p>
        </div>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.home_content}>
          <h1 className={styles.home_content_heading}>
            Welcome to the Cloudmydc PaaS Documentation
          </h1>
          <p>
            Learn about Cloudmydc Application Platform features, supported
            technologies, architecture, pricing model, and other specifics. Find
            out how to manage your accounts, create environments with
            preferrable topology and share them with the team, deploy
            applications of various programming languages with zero code change,
            automatically scale resources based on the load, and other
            possibilities available within the platform.
          </p>
        </div>
        <div className={styles.home_content_card_center_container}>
          <div className={styles.home_content_card_container}>
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
        <div className={styles.home_frontbottom_menu_center_container}>
          <div className={styles.home_frontbottom_menu_container}>
            <div className={styles.home_frontbottom_menu_card}>
              <h3 className={styles.home_frontbottom_menu_card_heading}>
                Quick Start
              </h3>
              {QuickStartList.map((item, idx) => {
                return (
                  <div key={idx} className={styles.home_frontbottom_menu_li}>
                    <Link href={item.url}>{item.title}</Link>
                  </div>
                );
              })}
            </div>
            <div className={styles.home_frontbottom_menu_card}>
              <h3 className={styles.home_frontbottom_menu_card_heading}>
                Recommended
              </h3>
              {RecommendedList.map((item, idx) => {
                return (
                  <div key={idx} className={styles.home_frontbottom_menu_li}>
                    <Link href={item.url}>{item.title}</Link>
                  </div>
                );
              })}
            </div>
            <div className={styles.home_frontbottom_menu_card}>
              <h3 className={styles.home_frontbottom_menu_card_heading}>
                Getting Info
              </h3>
              {GettingInfoList.map((item, idx) => {
                return (
                  <div key={idx} className={styles.home_frontbottom_menu_li}>
                    <Link href={item.url}>{item.title}</Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
