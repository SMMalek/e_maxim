import React from 'react'
import styled from "styled-components";
import {BrandLogo} from "../brandLogo";
import {Marginer} from "../marginer";
import PurpleImg from "../../images/115-pop.png"
import {useMediaQuery} from "react-responsive/src";
import {deviceSize} from "../responsive";

const SpecialistAdContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  background-color: #874450;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: 600px;
    margin: auto;
  }

`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    flex-direction: column;
    margin: auto;
    
  }

`;

const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 5em;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin: auto;
    justify-content: center;
    align-items: center;
  }

`;

const Slogan = styled.h2`
  margin: 0;
  font-size: 28px;
  color: white;
  font-weight: 700;
  line-height: 1.3;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    text-align: center;
    font-size: 30px;
    font-weight: 300;
  }


`;

const StandOutImage = styled.div`
  width: 20em;
  height: 20em;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 18em;
    height: 20em;
  }
`;

export function SpecialistAd() {

    const isMobile = useMediaQuery({maxWidth: deviceSize.mobile});

    return (
        <SpecialistAdContainer id="labout">
            <ContentContainer>
                <SloganContainer>
                    <BrandLogo logoSize={isMobile ? 45 : 70} textSize={isMobile ? 18 : 25}/>
                    <Marginer direction="vertical" margin={1}/>
                    <SloganContainer>
                        <Slogan>You are with the one</Slogan>
                        <Slogan>who have circles</Slogan>
                        <Slogan>Service to offer!</Slogan>
                    </SloganContainer>
                </SloganContainer>
                <Marginer direction="vertical" margin={20}/>
                <StandOutImage>
                    <img src={PurpleImg} alt="Offer service if you can"/>
                </StandOutImage>
            </ContentContainer>
        </SpecialistAdContainer>
    )
}
