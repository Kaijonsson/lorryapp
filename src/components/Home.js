
import "./Home.css";
import DropDown from "./DropDown";
import BackGroundVid from "./BackGroundVid";
import ButtonGroup from "./ButtonGroup";
import SearchBar from "./SearchBar";

function Home() {
 



  return (
    <>
      <div>
        <BackGroundVid className="backgroundVid" />
      </div>
          <main style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              color: 'white',
              textAlign: 'center',
              zIndex: 1,
              minHeight: '100%',
              minWidth: '100%',
              position: 'relative',
              overflowY: 'hidden',
          }}>

              

            <DropDown />
            
            <div style={{
              height: 150,
            }}></div>
            <h1
              style={{
                overflow: "hidden",
                padding: 20,
              }}
              id="main-title"
            >
              Lorry App
            </h1>

              <SearchBar/>
              
              <ButtonGroup style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}/>
            

          </main>
    </>
  );
}



export default Home;
