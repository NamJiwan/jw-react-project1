import styled from 'styled-components';
import Header from './Header';
import MainImage from './MainImage';
import { GlobalStyles } from './styles';
import Profile from './Profile';
import Portfolio from './Portfolio';

const HeaderSlyder=styled.div`
  width:100%;
  height:100px;
  position:relative;
  justify-content: center;
  div{
    width:1000px;
    margin:0 auto;
    position:absolute;
    height:100px;
    transform:translate(-50%, -50%);
    top:50%;
    left:50%;
    text-align:center;
  }
  
`

function App() {
  return (
    <>
      {/* CSS 초기화 */}
      <GlobalStyles />
      
      {/* 상단 메뉴 */}
      <Header/>

      <HeaderSlyder><div>슬라이더 이미지</div></HeaderSlyder>
      {/*메인 이미지 */}
      <MainImage/>

      {/*메인 프로파일  */}
      <Profile />
      <Portfolio />
    </>
  );
}

export default App;
