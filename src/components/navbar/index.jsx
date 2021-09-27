import React from "react"
import styled from "styled-components";
import {BrandLogo} from "../brandLogo";
import {Button} from "../button";
import {Marginer} from "../marginer";
import {Link} from "react-router-dom";
import {useMediaQuery} from "react-responsive/src";
import {deviceSize} from "../responsive";

const NavbarContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({useTransparent}) => useTransparent ? "transparent" : "#874450"};

  @media screen and (max-width: ${deviceSize.mobile}px) {
    justify-content: space-between;
  }
`;

const AccessibilityContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const AnchorLink = styled.a`
  font-size: 14px;
  color: #fdfdfe;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  padding: 0 2em 0 0.8em;
  transition: all 500ms ease-in-out;

  &:hover {
    filter: contrast(0.6);
  }
`;

const Seperator = styled.div`
  height: 38%;
  width: 1px;
  background-color: white;
`;

const HLink = styled(Link)`
  text-decoration: none;
`;

export function Navbar(props) {
    const {useTransparent} = props;

    const isMobile = useMediaQuery({maxWidth: deviceSize.mobile});


    return (
        <NavbarContainer useTransparent={useTransparent}>
            <HLink to="/">
                <BrandLogo textSize={19} logoSize={65} fontWeight="350"/>
            </HLink>
            <AccessibilityContainer>
                {!isMobile &&
                <AnchorLink>
                    Services
                </AnchorLink>}
                {!isMobile &&
                <Marginer direction="horizontal" margin={0}/>
                }
                {!isMobile &&
                <Seperator/>
                }
                <Marginer direction="horizontal" margin={13}/>
                <Link to='/customer/access/signup'>
                    <Button size={12} padd="4px 10px">
                        Register
                    </Button>
                </Link>
                <Marginer direction="horizontal" margin={0}/>
                <AnchorLink>
                    About
                </AnchorLink>
            </AccessibilityContainer>
        </NavbarContainer>
    )
}
