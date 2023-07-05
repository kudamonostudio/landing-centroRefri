import IntegralServiceTextListCard from "./IntegralServiceTextListCard/IntegralServiceTextListCard";
import {
  IntegralServiceContainer,
  IntegralServiceHeader,
  IntegralServiceText,
  IntegralServiceTextList,
  IntegralServiceTitle,
} from "./IntegralServices.styled";
import { Fade } from "react-awesome-reveal";

function IntegralServices() {
  return (
    <IntegralServiceContainer>
      <IntegralServiceText>
        <IntegralServiceTitle>
          <small>Servicio Integral</small>
          <h3>Servicio integral de refrigeración para empresas</h3>
          <hr />
        </IntegralServiceTitle>
        <IntegralServiceHeader className="service-header-mobile">
        <img src="https://dis-rostov.ru/site/files/site_page/92/92/holodilni_kameri_4.jpg" />
        
      </IntegralServiceHeader>
        <IntegralServiceHeader className="service-header-desktop">
          <img src="https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/357708304_1020762265789288_2035961104805137380_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=WC0co170BFwAX-9YjBC&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfDnFy21D0VuHzfG9J0fR7vLUJP1vLg85rsJLiRHS1uJWQ&oe=64AF25C4" />
          <img src="https://dis-rostov.ru/site/files/site_page/92/92/holodilni_kameri_4.jpg" />
        </IntegralServiceHeader>
        <IntegralServiceTextList>
        <Fade direction="left" fraction={0.2} triggerOnce={true} cascade={true}>
          
          <IntegralServiceTextListCard
            icon="https://www.svgrepo.com/show/521479/arrow-next-small.svg"
            text="Ofrecemos planes para empresas en el mantenimiento y reparación de
              todos sus equipos de refrigeración."
          />
          <IntegralServiceTextListCard
            icon="https://www.svgrepo.com/show/521479/arrow-next-small.svg"
            text="Guardia y monitoreo las 24 horas."
          />
          <IntegralServiceTextListCard
            icon="https://www.svgrepo.com/show/521479/arrow-next-small.svg"
            text="Respuesta inmediata."
          />
          </Fade>
        </IntegralServiceTextList>
      </IntegralServiceText>
      <img src="https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/357708304_1020762265789288_2035961104805137380_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=WC0co170BFwAX-9YjBC&_nc_ht=scontent.fmvd3-1.fna&oh=00_AfDnFy21D0VuHzfG9J0fR7vLUJP1vLg85rsJLiRHS1uJWQ&oe=64AF25C4" className="service-footer-mobile"/>
    </IntegralServiceContainer>
  );
}

export default IntegralServices;
