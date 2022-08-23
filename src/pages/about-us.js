import Head from 'next/head';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Contact from '../components/Contact/Contact';
import Hero from '../components/Hero/Hero';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import favicon from "../images/favicon.png";
import About from "../components/About/About";

const AboutUsPage = () => {
  return (
    <>
      <Head>
        <title>Omniral Media LLC - About Us</title>
        <link href={favicon.src} rel="icon" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <About />
      </Layout>
    </>
  );
};

export default AboutUsPage;
