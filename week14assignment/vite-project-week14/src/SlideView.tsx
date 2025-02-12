import SlideThumbnail from "./SlideThumbnail"
import thumbnailImage from "./assets/Suzume.jpg"
import thumbnailImage2 from "./assets/weatheringwithyou.jpg"
import thumbnailImage3 from "./assets/yourname.jpg"
import thumbnailImage4 from "./assets/COMING-SOON-.jpg"

const testSlides = [
    {
        id:0,        
        text: "Suzume",
        image: thumbnailImage

    },
    {
        id:1,        
        text:"Weathering With You",
        image: thumbnailImage2

    },
    {
        id:2,        
        text:"Your Name",
        image: thumbnailImage3

    },
    {
        id:3,        
        text:"Coming Soon",
        image: thumbnailImage4
    },
    {
        id:4,        
        text:"Coming Soon",
        image: thumbnailImage4
    },
    {
        id:5,        
        text:"Coming Soon",
        image: thumbnailImage4
    }
    

]

export default function () {
    return (
    <div className="border-end border-black border-5  max w-100 d-flex mr-sm-auto  bg-light bg-opacity-25 flex-wrap">
        { testSlides.map( s => <SlideThumbnail key={s.id}slide ={s}/> )}
        
        </div>
    )
}