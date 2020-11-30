import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import QtyPicker from "./components/qtyPicker/qtyPicker"


function App() {
  return (
    <div className="App">

      <Navbar></Navbar>

      <h1>
        Hello React!!
      </h1>

      <QtyPicker></QtyPicker>

     <Footer></Footer>
    </div>
  );
}

export default App;
