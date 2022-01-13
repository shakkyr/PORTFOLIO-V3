import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+97252-653-8500">+97252-653-8500</LinkItem>
        </LinkColumn>
      <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:shakkyr@gmail.com">
            shakkyr@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Serving with Confidence</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/shakkyr'>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/shadi-rada/'>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://www.facebook.com/shadi.rada.5'>
        <AiFillFacebook size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://www.instagram.com/shadirada/'>
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
