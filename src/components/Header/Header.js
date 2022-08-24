import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import {AiFillLinkedin, AiOutlineBars} from 'react-icons/ai';
import Logo from '../../images/logo.png';
import {Container, Div1, HamberburgerMenu, NavMenu, SocialIcons} from './HeaderStyles';
import { Spin as Hamburger } from 'hamburger-react'
import {MobileHeader} from "./MobileHeader";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const disableScroll = () => {
    if (isOpen) {
      document.body.style.overflow = 'scroll';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }

  const closeSideNav = () => {
    document.body.style.overflow = 'scroll';
    setOpen(false);
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Container style={null}>
          <Div1 style={{ zIndex: 99999}}>
            <Link href="/">
              <a>
                <img src={Logo.src} alt="Omniral Media LLC" width="200" />
              </a>
            </Link>
          </Div1>
          <NavMenu>
            <ul>
              <li>
                <Link
                  href="/what-we-offer"
                  onClick={() => { closeSideNav() }}
                >
                  What We Offer
                </Link>
              </li>
              <li>
                <Link href="/managed-services" onClick={() => { closeSideNav() }}>
                  Managed Services
                </Link>
              </li>
              <li>
                <Link href="/about-us" onClick={() => { closeSideNav() }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/start-a-project" onClick={() => { closeSideNav() }}>
                  Start a Project
                </Link>
              </li>
            </ul>
          </NavMenu>
          <Div1>
            <SocialIcons href="https://www.linkedin.com/company/omniral-media-llc/" target="_blank">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
          </Div1>
          <HamberburgerMenu onClick={() => { disableScroll() }}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </HamberburgerMenu>
        </Container>
        <MobileHeader isOpen={isOpen} />
      </div>
    </>
  )
};

export default Header;
