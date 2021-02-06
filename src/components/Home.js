
import "./Home.css";
import DropDown from "./DropDown";
import BackGroundVid from "./BackGroundVid";
import ButtonGroup from "./ButtonGroup";
import SearchBar from "./SearchBar";

function Home() {
 
// GrundAppen visas här. De komponenter som utgör framsidan av appen importeras och 
// läggs i ordning i HTML-dokumentet nedan


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
              height: 250,
            }}></div>

              <SearchBar/>
              
              <ButtonGroup style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}/>
            

          </main>
          <footer
          style={{
            height: 50,
            backgroundColor: 'grey',
            zIndex: 1,
            position: 'relative',
          }}>

          </footer>
    </>
  );
}



export default Home;
