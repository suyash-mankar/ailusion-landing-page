import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavbarComp from "./components/navbar/navbarComp";
import Page1 from "./pages/page1/page1";
import Page2 from "./pages/page2/page2";
import Page3 from "./pages/page3/page3";
import Page4 from "./pages/page4/page4";
import Page5 from "./pages/page5/page5";
import Page6 from "./pages/page6/page6";
import Page7 from "./pages/page7/page7";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Footer />
    </div>
  );
}

export default App;
