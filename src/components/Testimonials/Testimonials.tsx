import { ServicesTitle } from "../OurServices/OurServices.styled";
import {
  TestimonialsCardsContainer,
  TestimonialsContainer,
} from "./Testimonials.styled";
import TestimonialsCard from "../TestimonialsCard/TestimonialsCard";
import { AppContainer } from "../../App";
import { Fade } from "react-awesome-reveal";

function Testimonials() {
  return (
    <TestimonialsContainer>
      <AppContainer>
        <ServicesTitle>
          <p>
            <small>Testimonios</small>
          </p>
          <h2>Lo que dicen nuestros clientes</h2>
          <hr />
        </ServicesTitle>
        <TestimonialsCardsContainer>
          <Fade direction="up" fraction={0.2} triggerOnce={true} cascade={true} className="fade">
            <TestimonialsCard
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, et consectetur adipisicing elit"
              }
              name="Lorem Ipsum"
              img="https://www.tvbeurope.com/wp-content/uploads/2023/07/Sonny-Sandel-726x807.png"
            />
            <TestimonialsCard
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, et consectetur adipisicing elit"
              }
              name="Lorem Ipsum"
              img="https://variety.com/wp-content/uploads/2016/01/linda-yaccarino.jpg?w=1000&h=563&crop=1"
            />
            <TestimonialsCard
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, et consectetur adipisicing elit"
              }
              name="Lorem Ipsum"
              img="https://quickbooks.intuit.com/oidam/intuit/sbseg/en_us/accountants/web/images/natalie-bruns-moving-to-online-video-dtm-qbo-us-en-desktop@2x.jpg"
            />
          </Fade>
        </TestimonialsCardsContainer>
      </AppContainer>
    </TestimonialsContainer>
  );
}

export default Testimonials;
