import Navbar from "./component/Navbar";
import Header from './component/Header';
import Design from './component/Design';
import Footer from "./component/Footer";
import Pricing from "./component/Pricing";
import Section from "./component/Section";


function App() {
  return (
    <div style={{maxWidth:'90%',margin:'auto', backgroundColor:'white', marginTop:'20px'}}>
      <Navbar></Navbar>
      <Header></Header>
      <Design></Design>
      <Pricing></Pricing>
      <Section></Section>
      <Footer></Footer>
    </div>
  );
}

export default App;
