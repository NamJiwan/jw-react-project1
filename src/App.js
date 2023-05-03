import Header from './Header';
import MainImage from './MainImage';
import { GlobalStyles } from './styles';



function App() {
  return (
    <>
      {/* CSS 초기화 */}
      <GlobalStyles />
      
      {/* 상단 메뉴 */}
      <Header/>
      {/*메인 이미지 */}
      <MainImage/>
    </>
  );
}

export default App;
