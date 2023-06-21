
import './App.css';
import PixelatingImage from './Components/LandingPageComponents/PixelatingImage';
import SwiperCarousel from './Components/SwiperCarousel/SwiperCarousel';

function App() {
  return (
    <div className="App" >

      <div style={{ display: "flex", maxWidth: "30%" }}> <PixelatingImage /></div>


      <SwiperCarousel />

    </div>
  );
}

export default App;
