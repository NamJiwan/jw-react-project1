import Header from './Header';
import MainImage from './MainImage';
import { GlobalStyles } from './styles';
import styled from 'styled-components';

const slyderImage=styled.div`
  width:1000px;
  height:100px;
`

function App() {
  return (
    <>
      {/* CSS 초기화 */}
      <GlobalStyles />
      
      {/* 상단 메뉴 */}
      <Header/>
      <slyderImage>슬라이더 이미지</slyderImage>
      {/*메인 이미지 */}
      <MainImage/>
    </>
  );
}

export default App;
