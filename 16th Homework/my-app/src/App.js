import "./App.css";
import Nav from "./Nav/Nav";
import Info from "./Info/Info";
import PhotoContainer from "./PhotoContainer/PhotoContainer";
import SectionContainer from "./SectionContainer/SectionContainer";
import ArticleContainer from "./ArticleContainer/ArticleContainer";
import ImagesContainer from "./ImagesContainer/ImagesContainer";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Info></Info>
      <PhotoContainer></PhotoContainer>
      <SectionContainer></SectionContainer>
      <ArticleContainer></ArticleContainer>
      <ImagesContainer></ImagesContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
