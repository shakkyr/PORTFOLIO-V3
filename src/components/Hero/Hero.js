import React from 'react';
// import Image from 'next/image'
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        Hi I'M <br />
        Shadi Rada <br />
        Welcome To <br />
         My Personal Portfolio
      </SectionTitle>
      <SectionText>
        A fullstack Web develober
      </SectionText>
      <div  style={{borderRadius:"20px",width:"30%", height:"40%"}}>

      <img src='/images/profilephoto.jpg' alt='user' layout='responsive' width="300px" height="300px" />
      </div>
      <br />
      <br />
      <br />

      <Button onClick={() => window.location = "mailto:shakkyr@gmail.com"}> Contact Me</Button>
    </LeftSection>
  </Section>
  </>
);

export default Hero;

