import Link from 'next/link';
import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import Logo from '../../images/logo.png';
import { Container, Div1, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container style={{ maxWidth: '1060px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color:"white" }}>
    <Div1>
      <Link href="/">
        <a>
          <img src={Logo.src} alt="Omniral Media LLC" width="200" />
        </a>
      </Link>
    </Div1>
    <Div1>
      <SocialIcons href="https://www.linkedin.com/company/omniral-media-llc/" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div1>
  </Container>
);

export default Header;
