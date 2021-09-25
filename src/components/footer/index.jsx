import React from "react";
import styled from "styled-components";
import {BrandLogo} from "../brandLogo";
import {faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons/faFacebookF";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {deviceSize} from "../responsive";
import {useMediaQuery} from "react-responsive/src";

const FooterContainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);

  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin: auto;
  }
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1em;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em 0 0 4em;

  &:not(:last-of-type) {
    margin-right: 3%;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 1em;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);
  padding: 0 10px;
`;

const RightBottomContainer = styled.div`
  display: flex;
`;

const LeftBottomContainer = styled.div`
  display: flex;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 8px;
  color: black;
  font-weight: 600;
  font-size: 20px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 17px;
  }

`;

const FLink = styled.a`
  text-decoration: none;
  color: #6F6F6F;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-bottom: 7px;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 12px;
  }
`;

const PrivacyText = styled.h6`
  color: #828282;
  font-size: 11px;
  margin-top: 2.8em;
  margin-left: 10px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 8px;
  }

`;

const SocialIconF = styled.div`
  color: #8a8a8a;
  font-size: 20px;
  cursor: pointer;
  transition: background-color, 500ms ease-in-out;

  &:not(:last-of-type) {
    margin-right: 10px;

  }

  &:hover {
    color: #385898;
  }
`;

const SocialIconT = styled.div`
  color: #8a8a8a;
  font-size: 20px;
  cursor: pointer;
  transition: background-color, 500ms ease-in-out;

  &:not(:last-of-type) {
    margin-right: 10px;

  }

  &:hover {
    color: #5da9dd;
  }
`;

export function Footer(props) {

    const isMobile = useMediaQuery({maxWidth: deviceSize.mobile});

    return (
        <FooterContainer>
            <TopContainer>
                <ContentContainer>
                    <Title>Categories</Title>
                    <FLink>Car Repair</FLink>
                    <FLink>Fixing automobiles</FLink>
                    <FLink>Painting motors</FLink>
                    <FLink>Sand grinding</FLink>
                    <FLink>Land measuring</FLink>
                    <FLink>Home lifting</FLink>
                    <FLink>Light optimizing</FLink>
                </ContentContainer>
                <ContentContainer>
                    <Title>Access</Title>
                    <FLink>Login</FLink>
                    <FLink>Join</FLink>
                    <FLink>Login as specialist</FLink>
                    <FLink>Upvote</FLink>
                </ContentContainer>
            </TopContainer>
            <BottomContainer>
                <LeftBottomContainer>
                    <BrandLogo hideLogo color="#8A8A8A" textSize={isMobile ? 14 : 16} fontWeight={800}/>
                    <PrivacyText>&#x00AE;All Rights Reserved, 2020</PrivacyText>
                </LeftBottomContainer>
                <RightBottomContainer>
                    <SocialIconF>
                        <FontAwesomeIcon icon={faFacebookF}/>
                    </SocialIconF>
                    <SocialIconT>
                        <FontAwesomeIcon icon={faTwitter}/>
                    </SocialIconT>
                </RightBottomContainer>
            </BottomContainer>
        </FooterContainer>
    )
}
