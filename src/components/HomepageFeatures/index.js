import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '对口计算机',
    imgTitle: '河北对口计算机交流群',
    imageSrc: '/img/qun_duikou.jpg',
    description: (
      <>
        {/* <ul className={styles.articleList}>
          <li>
            <a href="/blog/2026-hebei-danzhao-baokao">2026年河北高职单招报考须知发布</a>
          </li>
          
        </ul> */}
      </>
    ),
  },
  {
    title: '九类十类职测',
    imgTitle: '河北九类十类职测交流群',
    imageSrc: '/img/qun_danzhao.jpg',
    description: (
      <>
        
      </>
    ),
  },
  {
    title: '对口单招',
    imgTitle: '河北对口单招交流群',
    imageSrc: '/img/qun_dkdz.jpg',
    description: (
      <>
        
      </>
    ),
  },
];

function Feature({imgTitle,imageSrc, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img
          className={styles.featureSvg}
          src={imageSrc}
          alt={title}
        />
        <h4>{imgTitle}</h4>
      </div> 
      <div className="text--left padding-horiz--md">
        <Heading as="h3"></Heading>
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
