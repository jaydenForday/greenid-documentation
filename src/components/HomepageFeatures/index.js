import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Welcome to greenID Documentation",
    Svg: require("@site/static/img/undraw_file_searching_re_3evy.svg").default,
    description: (
      <>
        Here you will find everything you need to integrate greenID into your
        platform, as well as instruction for users of greenID after
        implementation.
      </>
    ),
    size: { width: '255px', height: '255px' },
  },
  {
    title: "Comprehensive guidance",
    Svg: require("@site/static/img/undraw_navigator_a479.svg").default,
    description: (
      <>
        Find instructions on embedding greenID using API or SDK options.
        Verification results can be retrieved via those channels and/or via a
        web-based administrator interface.
      </>
    ),
    size: { width: '378px', height: '223px'},
  },
  {
    title: "Not a greenID customer?",
    Img: require("@site/static/img/GBG_home_page_image.png").default,
    description: (
      <>
        If you are interested in using greenID in your organisation, visit{" "}
        <a
          href="https://www.gbg-greenid.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.gbg-greenid.com
        </a>
      </>
    ),
    size: { width: '281px', height: '281px' },
  },
];

function Feature({ Svg, Img, title, description, size }) {
  return (
    <div className={clsx("col col--4")}>
      <div className={clsx("text--center", styles.featureImageContainer)}>
        {Svg && <Svg style={size} role="img" />}
        {Img && <img src={Img} style={size} alt={title} />}
      </div>
      <div className={clsx("text--center padding-horiz--md", styles.featureContent)}>
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

