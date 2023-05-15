import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  diplay: flex;
  justify-content: center;
  padding: 128px;
`;
const InnerContainer = styled.div`
  width: 1000px;
  height: 200px;
`;
const BoxTitle = styled.div`
  font-size: 32px;
  font-weight: 600px;
  padding: 12px 0;
`;
const BoxSubTitle = styled.div`
  font-size: 24px;
  color: rgba(0, 0, 0, 0.6);
  padding: 12px 0;
`;
const ImageContents = styled.div`
  margin: 16px 0;
  padding: 64px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 300px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;
const ContentsText = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const ContentButton = styled.div`
  width: 200px;
  height: 40px;
  border-radius: 50px;
  background: red;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;      
export default function Portfolio() {
  return (
    <Container>
      {/* 1000px중앙정렬 */}
      <InnerContainer>
        <div>
          <BoxTitle>온 · 오프 라인언제 어디서든</BoxTitle>
          <BoxSubTitle>
            간편하고 빠르게 매매/임대차 정보와 투자 인사이트를 받아보세요.
          </BoxSubTitle>
        </div>

        {Array(4)
          .fill('')
          .map((_, i) => (
            <ImageContents>
              <ContentsText>
                <div>카카오비즈채널</div>
                <div>선별된 스마트한 핵심 투자 정보를 받아보세요.</div>
                <div>
                  <div>주기석으로 업데이트 되는 공실률 정보</div>
                  <div>최근 시세 정보에 기반한 투자 인사이트</div>
                  <div>시시각각 변동되는 정보 정책과 규제 소식</div>
                </div>
              </ContentsText>
              <ButtonContainer>
                <ContentButton>채널 바로가기</ContentButton>
              </ButtonContainer>
            </ImageContents>
          ))}
      </InnerContainer>
    </Container>
  );
}
