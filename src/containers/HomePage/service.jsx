import React from "react"
import styled from "styled-components";
import axios from 'axios';
import {useEffect} from "react";
import {useState} from "react";
import {ServiceCard} from "../../components/serviceCard";
import {Button} from "../../components/button";
import {Marginer} from "../../components/marginer";
import {InnerPageContainer} from "../../components/pageContainer";
import {deviceSize} from "../../components/responsive";

const ServiceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;


`;

const Title = styled.h1`
  font-weight: 500;
  color: black;
  margin-left: 1em;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin: auto;
    font-size: 23px;
  }

`;

const ServiceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 6.2em 0 6.2em;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    max-width: 75%;
    margin: auto;
  }


`;

const WarningText = styled.h3`
  color: rgba(100, 100, 100);
  font-weight: 500;
`;

const ViewMoreButton = styled(Button)`
  background-color: #f2f2f2;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
  color: #959595;
  font-size: 14px;

  &:hover {
    background-color: #f2f2f2;
    filter: contrast(0.8);
  }
`;

const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center

`;

const wait = (num) => new Promise((rs) => setTimeout(rs, num));

export function Service(props) {
    const [offeredServices, setServices] = useState([]);

    const [isLoading, setLoading] = useState(false);

    const isServicesEmpty = !offeredServices || (offeredServices && offeredServices.length === 0);

    const fetchServices = async () => {
        setLoading(true);
        await (5000);

        // const response = await axios.get(`http://localhost:9000/services`).catch((err) => {
              const response = await axios.get(`https://api.npoint.io/bf86e98aae4ba7c91e31/services`).catch((err) => {
            console.log("Error", err)
        });

        await wait(3000);

        if (response) {
            setServices(response.data);
        }
        setLoading(false);
    };

    useEffect(() => {
        const promise = fetchServices();
    }, []);

    return (
        <ServiceContainer>
            <Title>
                Most recent services and more
            </Title>
            <ServiceWrapper>
                {isServicesEmpty && !isLoading && (
                    <WarningText>No Services Yet</WarningText>
                )}
                {isLoading && (
                    <WarningText>Loading...</WarningText>
                )}
                {!isServicesEmpty && !isLoading && offeredServices.map((service, idx) => (
                    <ServiceCard key={idx} {...service}/>
                ))}
            </ServiceWrapper>
            <Marginer direction="vertical" margin="2em"/>
            <BottomContainer>
                {!isServicesEmpty && !isLoading && (
                    <ViewMoreButton>
                        View More
                    </ViewMoreButton>
                )}
            </BottomContainer>
        </ServiceContainer>
    )
}
