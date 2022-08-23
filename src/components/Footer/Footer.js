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
        <Link href="/">
          <a>
            <img src={LogoWhite.src} alt="Omniral Media LLC" width="100%" />
          </a>
        </Link>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:info@omniralmedia.com">
            info@omniralmedia.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Phone</LinkTitle>
          <LinkItem href="tel:612-322-0124">
            612.111.1111
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>© 2022 Omniral Media LLC. All rights reserved.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://www.linkedin.com/in/cameron-scott-b3b304149/" target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
