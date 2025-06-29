import Card from "../Components/Home/Card";
import SectionFour from "../Components/Inventory/SectionFour";
import SectionThree from "../Components/Inventory/SectionThree";
import Footer from "../Components/Home/Footer";

function InventoryPage() {
  return (
    <>
    
    <div id='newar' ><p>NEW ARRIVALS & INVENTORY </p></div>
      <hr id='line' ></hr>
      <div className='cards' >
        <div id='cardOne' ><Card/></div>
        <div id='cardOne' ><Card/></div>
        <div id='cardOne' ><Card/></div>
        <div id='cardOne' ><Card/></div>
      </div>
      <div className='cards' >
        <div id='cardOne' ><Card/></div>
        <div id='cardOne' ><Card/></div>
        <div id='cardOne' ><Card/></div>
        <div id='cardOne' ><Card/></div>
      </div>
      <div className='cards' >
        <div id='cardOne' ><Card/></div>
        <div id='cardOne' ><Card/></div>
        <div id='cardOne' ><Card/></div>
        <div id='cardOne' ><Card/></div>
      </div>
      <SectionThree/>
      <SectionFour/>
      <Footer/>
    </>
  );
}

export default InventoryPage;
