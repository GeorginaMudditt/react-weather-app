import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Search from "./Search.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Search Engine</h1>
        <Search />
        <Footer />
      </div>
    </div>
  );
}
