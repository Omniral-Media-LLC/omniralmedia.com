import React from 'react';
import {Container, SideNav, SideNavList} from "./HeaderStyles";
import Link from "next/link";

export const MobileHeader = ({ isOpen }) => {
  if (isOpen === false) return null;
  return (
    <>
      <SideNav>
        <Container style={{ maxWidth: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '100px' }}>
          <SideNavList>
            <li>
              <Link
                href="/what-we-offer"
                style={
                  (typeof window !== 'undefined') && window.location.pathname === '/what-we-offer'
                    ? (
                      {
                        color: '#ddbb85'
                      }
                    ) : (
                      {
                        color: 'black'
                      }
                    )
                }
              >
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