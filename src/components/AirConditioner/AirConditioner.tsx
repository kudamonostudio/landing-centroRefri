import IntegralServiceTextListCard from "../IntegralServices/IntegralServiceTextListCard/IntegralServiceTextListCard";
import {
  AirConditionerContainer,
  AirConditionerContent,
  AirConditionerHeader,
  AirConditionerText,
  AirConditionerTextList,
  AirConditionerTitle,
} from "./AirConditioner.styled";
import { Fade } from "react-awesome-reveal";

function AirConditioner() {
  return (
    <AirConditionerContainer>
      <AirConditionerText>
        <AirConditionerTitle>
          <small>Aires Acondicionados</small>
          <h3>
            Instalación, mantenimiento y reparación de aires acondicionados
          </h3>
          <hr />
        </AirConditionerTitle>
        <AirConditionerContent>
        <AirConditionerHeader>
        <img src="https://livethecharmedlife.com/wp-content/uploads/2021/06/jpg.jpg" />
      </AirConditionerHeader>
        <AirConditionerTextList>
        <Fade direction="left" fraction={0.2} triggerOnce={true} cascade={true}>

          <IntegralServiceTextListCard
            icon="https://www.svgrepo.com/show/521479/arrow-next-small.svg"
            text="Garantía en instalaciones de aires acondicionados ON/OFF e Inverter."
          />
          <IntegralServiceTextListCard
            icon="https://www.svgrepo.com/show/521479/arrow-next-small.svg"
            text="Mantenimientos periódicos."
          />
          <IntegralServiceTextListCard
            icon="https://www.svgrepo.com/show/521479/arrow-next-small.svg"
            text="Reparación de placas electrónicas y demás componentes de las unidades."
          />

          <IntegralServiceTextListCard
            icon="https://www.svgrepo.com/show/521479/arrow-next-small.svg"
            text="Carga de refrigerantes"
          />
          </Fade>
        </AirConditionerTextList>
        </AirConditionerContent>
      </AirConditionerText>
    </AirConditionerContainer>
  );
}

export default AirConditioner;
