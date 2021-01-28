
import "./Home.css";
import DropDown from "./DropDown";
import BackGroundVid from "./BackGroundVid";
import ButtonGroup from "./ButtonGroup";
import SearchBar from "./SearchBar";

function Home() {
 
  return (
    <div className="App">


      <main>
      <BackGroundVid className="backgroundVid" />

        <DropDown />
        
        <div id="buffer"></div>
        <h1
          style={{
            overflow: "hidden",
          }}
          id="main-title"
        >
          Lorry App
        </h1>

          <SearchBar/>
          
          <ButtonGroup/>
        
        <footer>
          <ul>
            <li>On call technician</li>
            <li>SOS number</li>
          </ul>
        </footer>
      </main>
    </div>
  );
}



export default Home;
