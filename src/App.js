import "./App.scss";
import AssembleTourContainer from "./components/AssembleTourContainer";
import ChooseTourContainer from "./components/ChooseTourContainer";
import CTAContainer from "./components/CTAContainer";
import FeedbackContainer from "./components/FeedbackContainer";
import FooterContainer from "./components/FooterContainer";
import HeaderContainer from "./components/HeaderContainer";
import HistoryContainer from "./components/HistoryContainer";
import PhotoContainer from "./components/PhotoContainer";

function App() {
  return (
    <div className='wrapper'>
      <HeaderContainer />
      <main>
        <ChooseTourContainer />
        <AssembleTourContainer />
        <FeedbackContainer />
        <PhotoContainer />
        <HistoryContainer />
      </main>
      <footer>
        <CTAContainer />
        <FooterContainer />
      </footer>
    </div>
  );
}

export default App;
