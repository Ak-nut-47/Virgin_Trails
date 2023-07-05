
import './App.css';
import PixelatingImage from './Components/LandingPageComponents/PixelatingImage';
import Destination from './Components/NavbarComponents/Destination';

import SwiperCarousel from './Components/SwiperCarousel/SwiperCarousel';
import Navbar from './Pages/Navbar';
import Test from './Pages/Test';





function App() {
  return (
    <div className="App" >

      {/* <PixelatingImage /> */}

      <Navbar />

      <SwiperCarousel />

      <Test />
    </div>
  );
}

export default App;
