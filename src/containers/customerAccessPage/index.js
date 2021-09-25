import React from "react"
import {InnerPageContainer} from "../../components/pageContainer";
import {PageContainer} from "../../components/pageContainer";
import {Navbar} from "../../components/navbar";
import {Footer} from "../../components/footer";
import {AccountBox} from "../../components/accountBox";
import styled from "styled-components";
import {useParams} from "react-router-dom";

const StyledInnerContainer = styled(InnerPageContainer)`
  margin: 0;
  min-height: 80vh;
  
`;
export function CustomerAccessPage (props) {
    const { action } = useParams()

    console.log("Action: ", action);


    return (
        <PageContainer>
            <Navbar/>
            <StyledInnerContainer>
                <AccountBox initialActive={action} />
            </StyledInnerContainer>
            <Footer />
        </PageContainer>
    )
}
