import {
  CompaniesClientsContactUsButton,
  CompaniesClientsContactUsContainer,
  CompaniesClientsContainer,
  CompaniesClientsLogos,
  CompaniesClientsTitle,
} from "./CompaniesClients.styled";
import Arrow from "../../../public/arrow.svg";

function CompaniesClients() {
  const whatsappCall = () => window.open("http://wa.me/+59898187709");

  return (
    <CompaniesClientsContainer>
      <CompaniesClientsTitle>
        <h2>Empresas que confían en nosotros</h2>
        <hr />
      </CompaniesClientsTitle>
      <CompaniesClientsLogos>
        <img src="https://www.svgrepo.com/show/340721/no-image.svg" alt="" />
        <img src="https://www.svgrepo.com/show/340721/no-image.svg" alt="" />
        <img src="https://www.svgrepo.com/show/340721/no-image.svg" alt="" />
        <img src="https://www.svgrepo.com/show/340721/no-image.svg" alt="" />
      </CompaniesClientsLogos>
      <CompaniesClientsContactUsContainer>
      <CompaniesClientsContactUsButton onClick={whatsappCall}>
        <p>Contacta con nosotros</p>
        <img src={Arrow} />
      </CompaniesClientsContactUsButton>
      </CompaniesClientsContactUsContainer>
      
    </CompaniesClientsContainer>
  );
}

export default CompaniesClients;
