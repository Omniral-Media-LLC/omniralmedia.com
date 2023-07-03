import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import LogoWhite from "../../images/logo_white.png";
import Link from "next/link";


const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn style={{ width: '20%'}}>
          <img src={LogoWhite.src} alt="Omniral Media LLC" width="100%" />
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem>
            <Link href="mailto:info@omniralmedia.com">
              info@omniralmedia.com
            </Link>
          </LinkItem>
          <LinkTitle>Phone Number</LinkTitle>
          <LinkItem>
            <Link href="tel:612-757-4334">
              612-757-4334
            </Link>
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Links</LinkTitle>
          <LinkItem>
            <ul>
              <li style={{ display: 'inline-block', marginRight: '2.5rem' }}>
                <Link href="what-we-offer">
                  What We Offer
                </Link>
              </li>
              <li style={{ display: 'inline-block', marginRight: '2.5rem' }}>
                <Link href="/managed-services">
                  Managed Services
                </Link>
              </li>
              <li style={{ display: 'inline-block', marginRight: '2.5rem' }}>
                <Link href="/about-us">
                  About Us
                </Link>
              </li>
              <li style={{ display: 'inline-block', marginRight: '2.5rem' }}>
                <Link href="/start-a-project">
                  Start a Project
                </Link>
              </li>
            </ul>
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>© 2022 Omniral Media LLC. All rights reserved.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://www.linkedin.com/company/omniral-media-llc/" target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
