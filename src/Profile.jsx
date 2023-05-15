import React from "react";
import styled from "styled-components";

const Container=styled.div`
    width:100%;
    height:100vh;
    background: rgb(125,125,125,0.2);
    display:flex;
    justify-content:center;
    padding:64px 0;
`
const InnerContainer=styled.div`
    width:1000px;
    height:400px;

    
    
`
const GridContainer=styled.div`
    display:grid;
    hight:200px;
    gap:32px;
    grid-template-columns:1fr 1fr 1fr
`
const MainBox=styled.div`
    background:white;
    height:400px;
    border-radius: 32px 0 32px 32px;
    padding:32px;

    &:hover{
        background:red;
    }
`
const BoxTitle=styled.h1`

`

export default function Profile(){
    return (
        <Container>
            {/* 1000px 중앙정렬해줄 부모 */}
            <InnerContainer>
                {/* 그리드 랩 할거 */}
                <GridContainer>
                    {/* 박스 */}
                    <MainBox>
                        <div>
                            <img src='' alt="" />
                            <p><h3>임차인입니다</h3></p>
                        </div>
                        <div></div>
                        <div>
                            <BoxTitle><strong>허위매물 제로</strong></BoxTitle>
                            <p><h3>진수조사 기반 압도적</h3></p>
                            <p><h3>질과 양의 매물을 제공합니다.</h3></p>
                        </div>
                        <div>사무실 구하기 {'>'}</div>
                    </MainBox>
                    <MainBox>2</MainBox>
                    <MainBox>3</MainBox>
                    
                </GridContainer>
            </InnerContainer>
        </Container>
    )
}
