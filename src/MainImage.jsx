import styled from 'styled-components';


const ContainerImage = styled.div`
  width: 100%;
  height: 80vh;
  overflow: hidden;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.6);
  }
`;
const MainImages = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-posotion: center;
`;
const MainTitle = styled.div`
  width:1000px;
  position: absolute;
  transform:translate(-50%, -50%);
  top: 50%;
  left: 50%;
  font-weight:900;
  font-size:90px;
  color: black;
  z-index: 99;
`;
const SubTitle=styled.div`
  padding-left:10px;
  font-size:48px;
  margin-top:20px;
  color:rgba(0,0,0,0.7)
`

export default function MainImage() {
  return (
    <ContainerImage>
      <MainImages
        src="https://images.unsplash.com/photo-1682695796497-31a44224d6d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="메인이미지"
      />
      <MainTitle>
        <div>영진직업전문학교</div>
        <SubTitle>최고의 수업</SubTitle>
      </MainTitle>
      

    </ContainerImage>
  );
}
