import React from "react"
import styled from "styled-components";
import {Marginer} from "../marginer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";
import "../../images/thumbnails/114-a.jpg"

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 300px;
  min-height: 250px;
  background-color: white;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  margin: 0.5em;
  margin: 1.3em;
`;

const TopContainer = styled.div`
  width: 100%;
`;

const ServiceThumbnail = styled.div`
  width: 100%;
  height: 11em;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  padding: 15px 14px;
`;

const BottomContainer = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(15, 15, 15, 0.19);
  align-items: center;
`;

const Title = styled.h2`
  font-size: 19px;
  margin: 0;
  font-weight: 500;
  color: black;
  text-align: left;
`;

const SpecialistName = styled.h4`
  margin: 0;
  color: rgba(150, 150, 150, 1);
  font-size: 12px;
  font-weight: 400;
`;

const RatingContainer = styled.div`
  display: flex;
  color: #EBE204;
  align-items: center;
  margin-left: 1em;
  padding-bottom: 0.3em;
`;

const RatingStar = styled.div`
  color: #EBE204;
`;
const RatingNumber = styled.div`
  color: #EBE204;
  font-size: 1em;
  padding-top: 3px;
  padding-left: 2px;
  font-weight: lighter;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1em;
`;
const PriceText = styled.div`
  margin-left: 3px;
  color: #2A9D8F;
  font-weight: 500;
`;

const StartingAt = styled.h6`
  margin: 0;
  //padding-top: 5px;
  color: rgba(162, 162, 162, 0.9);
  font-weight: 40;
`;


export function ServiceCard(props) {
    const {
        thumbnailUrl,
        specialist,
        id,
        title,
        rate,
        rating
    } = props;

    return (
        <CardContainer>
            <TopContainer>
                <ServiceThumbnail>
                    <img src={thumbnailUrl} alt={title}/>
                </ServiceThumbnail>
            </TopContainer>
            <ContentContainer>
                <Title>
                    {title}
                </Title>
                <Marginer direction="vertical" margin={10}/>
                <SpecialistName>
                    {specialist.fullName}
                </SpecialistName>
            </ContentContainer>
            <BottomContainer>
                <RatingContainer>
                    <RatingStar>
                        <FontAwesomeIcon icon={faStar} size="xs"/>
                    </RatingStar>
                    <RatingNumber>
                        {rating}
                    </RatingNumber>
                </RatingContainer>
                <PriceContainer>
                    <StartingAt>
                        STARTING AT
                    </StartingAt>
                    <PriceText>
                        ${rate}/hr
                    </PriceText>
                </PriceContainer>
            </BottomContainer>
        </CardContainer>
    )
}
