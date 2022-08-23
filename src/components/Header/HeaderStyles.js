import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  position: fixed;
  z-index: 999;
  height: 100px;
  background-color: #171717;
  box-shadow: 0px 20px 50px 5px #171717;
  padding: 0 48px;
  
  @media only screen and (max-width: 912px) {
    padding: 0 4.5rem !important;
  }
  @media only screen and (max-width: 414px) {
    padding: 0 1.5rem !important;
  }
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 60px);
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: transparent;
    color: #ddbb85;
    transform: scale(1.2);
    cursor: pointer;
  }
  @media only screen and (max-width: 912px) {
    display: none;
  }
`;

export const NavMenu = styled.div`
  width: max-content;
  @media only screen and (max-width: 912px) {
    display: none;
  }
  ul {
    li {
      display: inline-block;
      a {
        color: white;
        transition: 0.3s;
        &:hover {
          color: #ddbb85;
        }
      }
      &:not(:last-child) {
        margin-right: 4rem;
      }
    }
  }
`;

export const HamberburgerMenu = styled.div`
  z-index: 99999;
  display: none;
  @media only screen and (max-width: 912px) {
    display: inline-block;
  }
`;

export const SideNav = styled.div`
  position: fixed;
  right: 0;
  min-width: 100%;
  height: 100%;
  background: #171717;
  z-index: 999;
  margin-top: 100px;
`;

export const SideNavList = styled.ul`
  margin-top: 100px;
  li {
    font-size: 4rem;
    margin-bottom: 3rem;
    a {
      color: white;
      transition: 0.3s;
      &:hover {
        color: #ddbb85;
      }
    }
  }
`;