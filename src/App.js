import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./Header.js";
import Weather from "./Weather.js";
import Footer from "./Footer.js";

export default function App(props) {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Weather defaultCity="Paris" />
      </div>
      <Footer />
    </div>
  );
}
