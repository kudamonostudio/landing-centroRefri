import { styled } from "styled-components";

export const NavbarContent = styled.div`
  max-width: 1080px;
  height: 6rem;
  margin: 0 auto;
  img {
    width: 11rem;
    height: auto;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    gap: 1rem;
    padding: 0.8rem;
  }
`;

export const  NavbarContainer = styled.div`
  background: white;

` 

export const NavbarLinks = styled.div`
  height: max-content;
  margin-right: 4rem;
  ul {
    list-style: none;
    display: flex;
    gap: 3rem;
    font-size: 1.1rem;
    li{
        cursor: pointer;
    }
    li:hover{
      color: #000073;
      font-weight: 600;
      font-size: 1.1rem;
    }
  }
  @media (max-width: 930px) {
    display: none;
  }
`;

export const NavbarHamburguer = styled.div`
padding: 0 1rem;
    height: 100%;
  img{
    width: 2.5rem;
    filter: invert(6%) sepia(89%) saturate(7493%) hue-rotate(230deg) brightness(96%) contrast(106%);
  }
  display: none;
  @media (max-width: 930px) {
    display: flex;
  }
`
