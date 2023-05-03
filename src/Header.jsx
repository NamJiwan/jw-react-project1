
import Logo from './logo.png';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const GlobalNav = styled.div`
  width: 1000px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SmallNav = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    padding: 0 15px;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
`;
export default function Header() {
  return (
    <Container>
      <GlobalNav>
        <div>
          <img src={Logo} width="60px" alt="logo" />
        </div>
        <SmallNav>
          <div>스토어</div>
          <div>Mac</div>
          <div>iPad</div>
          <div>iPhone</div>
          <div>Watch</div>
          <div>airPods</div>
          <div>TV 및 홈</div>
          <div>엔터테인먼트</div>
          <div>액세서리</div>
          <div>고객지원</div>
          <div></div>
          <div></div>
        </SmallNav>
      </GlobalNav>
    </Container>
  );
}
