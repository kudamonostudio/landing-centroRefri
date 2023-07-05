import { OurServicesCards, OurServicesContainer, OurServicesContent, ServicesTitle } from "./OurServices.styled";
import { AppContainer } from "../../App";
import OurServicesCard from "../OurServicesCard/OurServicesCard";
import { Fade } from "react-awesome-reveal";

function OurServices() {
  return (
    <OurServicesContainer>
      <AppContainer>
        <OurServicesContent>
        <Fade direction="up" fraction={0.2} triggerOnce={true}>
          <ServicesTitle>
              <h2>Nuestros Servicios</h2>
              <hr />
          </ServicesTitle>
          </Fade>
          <Fade direction="up" fraction={0.2} triggerOnce={true}>
          <OurServicesCards>
          <OurServicesCard title="Instalación, mantenimiento y reparación de aires acondicionados" icon="https://www.svgrepo.com/show/278913/air-conditioner-air-conditioning.svg"/>
          <OurServicesCard title="Servicio integral de refrigeración para empresas" icon="https://www.svgrepo.com/show/520959/snow.svg"/>
          </OurServicesCards>
          </Fade>
        </OurServicesContent>
      </AppContainer>
    </OurServicesContainer>
  );
}

export default OurServices;
