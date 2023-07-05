import { styled } from "styled-components";
import { ServicesTitle } from "../OurServices/OurServices.styled";
import {
  BannerTextContactUsButton,
  BannerTextContactUsContainer,
} from "../Banner/Banner.styled";

export const CompaniesClientsContainer = styled.div`
  padding: 3rem;
  img {
    width: 3rem;
    filter: invert(100%) sepia(16%) saturate(45%) hue-rotate(315deg)
      brightness(88%) contrast(86%);
  }
`;
export const CompaniesClientsTitle = styled(ServicesTitle)`
  padding: 0 0 1rem 0;
  h2 {
    color: #00007c;
  }
`;

export const CompaniesClientsLogos = styled(ServicesTitle)`
  display: flex;
  flex-direction: inherit;
  width: 100%;
  padding: 2rem 0 0;
  justify-content: center;
  gap: 1rem;
`;

export const CompaniesClientsContactUsContainer = styled(BannerTextContactUsContainer)`
  justify-content: center;
  margin-top: 4rem;
  img {
    filter: invert(100%) sepia(13%) saturate(7458%) hue-rotate(182deg)
      brightness(112%) contrast(96%);
  }
`;

export const CompaniesClientsContactUsButton = styled(BannerTextContactUsButton)`
  padding: 1rem 2.4rem;
  p {
    font-size: 1rem;
  }
`;
