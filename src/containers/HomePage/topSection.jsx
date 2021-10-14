import React from 'react'
import styled from "styled-components";
import TopSectionBackgroundImg from '../../images/112-bg.jpg'
import TheBestSpecialistImg from '../../images/112-map.png'
import {BrandLogo} from "../../components/brandLogo";
import {Marginer} from "../../components/marginer/index"
import {Button} from "../../components/button/index"
import {useMediaQuery} from "react-responsive/src";
import {deviceSize} from "../../components/responsive";


const TopSectionContainer = styled.div`
  width: 100%;
  height: 827px;
  background: url(${TopSectionBackgroundImg}) no-repeat;
  background-position: 0px -50px;
  background-size: cover;


  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: 700px;  
    background-position: 50% 0;

  }
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(169, 58, 145, 0.4);
  display: flex;
  flex-direction: column;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    background-color: rgba(169, 58, 145, 0.3);
  }


`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    justify-content: center;
  }

`;

const StandoutImg = styled.div`
  width: 35em;
  height: 20em;

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const SloganText = styled.h3`
  margin: 0;
  line-height: 1.4;
  color: white;
  font-weight: 500;
  font-size: 30px;
  align-self: center;

`


export function TopSection(props) {
    const {children} = props;

    const isMobile = useMediaQuery({maxWidth: deviceSize.mobile});

    return (
        <TopSectionContainer>
            <BackgroundFilter>
                {children}
                <TopSectionInnerContainer>
                    <LogoContainer>
                        <BrandLogo logoSize={isMobile ? 90 : 140} textSize={isMobile ? 25 : 45} fontWeight={600}/>
                        <Marginer direction="vertical" margin={10}/>
                        <SloganText>Where ever you are!</SloganText>
                        <SloganText>Find plates</SloganText>
                        <Marginer direction="vertical" margin={20}/>
                        <Button>Get Now</Button>
                    </LogoContainer>
                    {!isMobile && (
                        <StandoutImg>
                            <img src={TheBestSpecialistImg} alt="best in your field"/>
                        </StandoutImg>
                    )}
                </TopSectionInnerContainer>
            </BackgroundFilter>
        </TopSectionContainer>
    )
}
