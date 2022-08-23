import React from 'react';
import {Container, SideNav, SideNavList} from "./HeaderStyles";
import Link from "next/link";

export const MobileHeader = ({ isOpen }) => {
  if (isOpen === false) return null;
  return (
    <>
      <SideNav>
        <Container style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color:"white", marginTop: '100px' }}>
          <SideNavList>
            <li>
              <Link href="/what-we-offer">
                What We Offer
              </Link>
            </li>
            <li>
              <Link href="/managed-services">
                Managed Services
              </Link>
            </li>
            <li>
              <Link href="/about-us">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/start-a-project">
                Start a Project
              </Link>
            </li>
          </SideNavList>
        </Container>
      </SideNav>
    </>
  )
};