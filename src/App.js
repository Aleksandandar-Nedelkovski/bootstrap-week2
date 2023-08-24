import Footer from "./Footer";
import Carousel from "./Carousel";
import Details from "./Details";
import NavBar from "./Navbar";
import Testimonials from "./Testimonials";
import "./styles.css";
import Reserve from "./Reserve";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Carousel />
        <div className="container">
          <Details />
          <Reserve />
          <Testimonials />
          <Footer />
        </div>
      </main>
    </div>
  );
}
