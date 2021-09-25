import React from "react";
import styled from "styled-components";
import LogoImg from "../../images/113-logot.png"

const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.div`
  width: ${({size}) => size ? size + "px" : "3em"};
  height: ${({size}) => size ? size + "px" : "3em"};

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoTitle = styled.h2`
  margin: 0;
  font-size: ${({size}) => size ? size + "px" : "15px"};
  color: ${({ color }) => color ? color : "#faf494"};
  text-underline: #61dafb;
  font-weight: ${({weight}) => weight ? weight : "normal"};
  margin-left: 5px;
`


export function BrandLogo(props) {
    const {logoSize, textSize, fontWeight, color, hideLogo} = props;

    return (
        <BrandLogoContainer>
            {!hideLogo && <LogoImage size={logoSize}>
                <img src={LogoImg} alt="Just a Logo"/>
            </LogoImage>}
            <LogoTitle size={textSize} weight={fontWeight} color={color}>
                Maxim El Daught
            </LogoTitle>
        </BrandLogoContainer>
    )
}
