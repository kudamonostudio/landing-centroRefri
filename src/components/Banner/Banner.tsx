import {
  BannerContainer,
  BannerImage,
  BannerText,
  BannerTextContent,
  BannerTextContactUsButton,
  BannerTextContactUsContainer,
  BannerTextContactUsIconsAndNumber,
} from "./Banner.styled";
import Arrow from "../../../public/arrow.svg";
import Phone from "../../../public/phone-call.svg";
import Whatsapp from "../../../public/whatsapp.svg";
import { BannerTextIcon } from "./Banner.styled";
import { Fade } from "react-awesome-reveal";

const whatsappCall = () => window.open("http://wa.me/+59898187709");

function Banner() {
  return (
    <BannerContainer>
      <BannerImage>
        <img
          src="https://www.acondi.es/wp-content/uploads/2023/03/¿Que-acondicionadores-de-aire-funcionan-con-Coolbot-And-How-To.jpg"
          alt=""
        />
      </BannerImage>
      <BannerTextContent>
        <BannerText>
          <Fade
            direction="left"
            fraction={0.2}
            triggerOnce={true}
            cascade={true}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h1>
              Somos una empresa duraznense dedicada a la refrigeración familiar
              y comercial
            </h1>
            <p>
              Desde 2015 brindamos soluciones en la climatización de su hogar
            </p>
            <BannerTextContactUsContainer>
              <BannerTextContactUsButton onClick={whatsappCall}>
                <p>Contacta con nosotros</p>
                <img src={Arrow} />
              </BannerTextContactUsButton>
              <BannerTextContactUsIconsAndNumber>
                <BannerTextIcon>
                  <img src={Phone} onClick={whatsappCall} />
                </BannerTextIcon>
                <BannerTextIcon>
                  <img src={Whatsapp} onClick={whatsappCall} />
                </BannerTextIcon>
                <p className="banner-text-phone-number" onClick={whatsappCall}>098 187 709</p>
              </BannerTextContactUsIconsAndNumber>
            </BannerTextContactUsContainer>
          </Fade>
        </BannerText>
      </BannerTextContent>
    </BannerContainer>
  );
}

export default Banner;
