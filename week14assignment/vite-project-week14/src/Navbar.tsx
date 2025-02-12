import NavBarButton from "./NavBarButtons";
import Music from "./assets/music-solid.svg";
import Movies from "./assets/film-solid.svg";
import Games from "./assets/gamepad-solid.svg";




export default function () {
    return (
    <div className="bg-transparent p-3  border border-black border border-5 p-3 d-flex justify-content-center w-100">
        <NavBarButton icon={Movies} onClick={() => alert("Coming Soon")}/>
        <NavBarButton icon={Music} onClick={() => alert("Coming Soon")}/>        
        <NavBarButton icon={Games} onClick={() => alert("Coming Soon")}/>
        </div>)
}