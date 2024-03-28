import Footer from "../COMPONENTS/Footer/Footer";
import HomeguestList from "../COMPONENTS/Propertylist/HomeguestList";
import { Propertylist } from "../COMPONENTS/Propertylist/Propertylist";
import Featured from "../COMPONENTS/featured/Featured";
import Header from "../COMPONENTS/header/Header";
import Navbar from "../COMPONENTS/navbarr/Navbar";
import "./homepage.css";
export default function Homepage() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <div className="homecontainer">
        <Featured></Featured>
        <h1 className="hometitle">Browse by property</h1>
        <Propertylist></Propertylist>
        <h1 className="hometitle">Home Guests</h1>
        <div className="homeguestlists">
          <HomeguestList></HomeguestList>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
}
