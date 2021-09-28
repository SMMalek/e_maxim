import React from 'react'
import {InnerPageContainer, PageContainer} from "../../components/pageContainer";
import {TopSection} from "./topSection";
import {Navbar} from "../../components/navbar";
import styled from "styled-components";
import {deviceSize} from "../../components/responsive";
import {Service} from "./service";
import {SpecialistAd} from "../../components/specialistAd";
import {Marginer} from "../../components/marginer";
import {Footer} from "../../components/footer";
import {useMediaQuery} from "react-responsive/src";

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;




`;

export function HomePage() {

    const isMobile = useMediaQuery({maxWidth: deviceSize.mobile});

    return (
        <PageContainer>
            <TopSection>
                <Navbar useTransparent/>
            </TopSection>
            <Marginer direction="vertical" margin="2em"/>
            <InnerPageContainer>
                <ContentContainer id="lservices">
                    <Service/>
                </ContentContainer>
                <Marginer direction="vertical" margin="3em"/>
                <SpecialistAd />
                {!isMobile &&
                < Marginer direction="vertical" margin="3em"/>
                }
            </InnerPageContainer>
            <Footer/>
        </PageContainer>
    );
}


