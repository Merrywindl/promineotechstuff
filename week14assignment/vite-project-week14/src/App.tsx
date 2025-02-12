import ListField from "./ListField";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SlideView from "./SlideView";



export default function () {
  return (
  <div className="d-flex flex-column vh-100 ">
    <Navbar/>
    <ListField/>
    <div className="d-flex flex-grow-1">    
    <Sidebar/>
      
      <SlideView/>
    
    
    </div>
    
  </div>)
}