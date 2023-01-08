import Navbar from "./component/Navbar";
import Header from './component/Header';
import Design from './component/Design';
import Footer from "./component/Footer";


function App() {
  return (
    <div style={{maxWidth:'90%',margin:'auto', backgroundColor:'white', marginTop:'20px'}}>
      <Navbar></Navbar>
      <Header></Header>
      <Design></Design>
      <Footer></Footer>
    </div>
  );
}

export default App;
