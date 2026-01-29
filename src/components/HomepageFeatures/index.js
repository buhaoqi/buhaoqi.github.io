import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '考点速记',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        梳理教材全部核心知识点，化繁为简、条理清晰，帮你快速吃透考点，告别盲目刷题，备考效率翻倍。
      </>
    ),
  },
  {
    title: '专项训练',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        聚焦中职高考高频题型，配套针对性练习题强化训练，学练结合，快速掌握解题技巧，夯实应试能力。
      </>
    ),
  },
  {
    title: '高效备考',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        界面简洁易用，知识点与练习题精准对应，随时随地查漏补缺，助力中职学子高效备战，轻松冲刺理想院校。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
