import { styled } from "styled-components";
import { ServicesTitle } from "../OurServices/OurServices.styled";

export const AirConditionerContainer = styled.div`
  position: relative;
  padding: 2rem 2rem 0;
  img {
    width: 100%;
  }
`;

export const AirConditionerHeader = styled.div`
  width: 100%;
  margin-top: 1rem;
  @media (min-width: 767px) {
    width: initial;
    img{
      width: 20rem;
      height: 100%;
    height: -webkit-fill-available;
    object-fit: cover;
    object-position: -115px;
    }
  }
  @media (min-width: 1074px) {
    width: initial;
    img{
      width: 30rem;
      object-position: initial;
    }
  }
`;

export const AirConditionerText = styled.div``;

export const AirConditionerTitle = styled(ServicesTitle)`
  h3 {
    color: #000073;
  }
  margin-top: 1rem;
  padding: initial;
`;

export const AirConditionerTextList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0;
  p{
    margin-top: 0.2rem;
  }
  @media (min-width: 767px) {
    padding: 2rem;
  }
`;

export const AirConditionerContent = styled.div`
  @media (min-width: 767px) {
    display: flex;
    margin-top: 1rem;
    width: 100%;
  }
`