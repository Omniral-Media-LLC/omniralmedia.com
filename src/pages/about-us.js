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
import logo from "../images/logo.png";

const AboutUsPage = () => {
  return (
    <>
      <Head>
        <title>Omniral Media LLC - About Us</title>
        <link href={favicon.src} rel="icon" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="At Omniral Media, we strive to uncomplicate the world of technology by solving business challenges with custom web-based solutions. We are a full-service custom software development firm, providing technological expertise for your digital needs & dreams. We develop tailored content managed websites and maintenance plans to fit any digital project." />
        <meta property="og:description" content="At Omniral Media, we strive to uncomplicate the world of technology by solving business challenges with custom web-based solutions. We are a full-service custom software development firm, providing technological expertise for your digital needs & dreams. We develop tailored content managed websites and maintenance plans to fit any digital project." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://omniralmedia.com/about-us" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Omniral Media LLC | web design & development" />
        <meta property="og:url" content="https://omniralmedia.com/about-us" />
        <meta property="og:site_name" content="Omniral Media LLC" />
        <meta property="article:publisher" content="https://www.facebook.com/OmniralMediaLLC" />
        <meta property="og:image" content={logo.src} />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1200" />
        <meta name="twitter:image" content={logo.src} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@OmniralMediaLLC" />
        <meta name="twitter:site" content="@OmniralMediaLLC" />
      </Head>
      <Layout>
        <About />
      </Layout>
    </>
  );
};

export default AboutUsPage;
