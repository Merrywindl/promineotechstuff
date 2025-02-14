import { useEffect, useState } from "react";
import ListField from "./ListField";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SlideView from "./SlideView";
import Rightinfobar from "./Rightinfobar";
import thumbnailImage from "./assets/Suzume.jpg";
import thumbnailImage2 from "./assets/weatheringwithyou.jpg";
import thumbnailImage3 from "./assets/yourname.jpg";
import thumbnailImage4 from "./assets/COMING-SOON-.jpg";


//my data//
const testSlides = [
  {
    id: 0,
    text: "Suzume",
    image: thumbnailImage,
    story: "abc",
    fontColor: "Black"
  },
  {
    id: 1,
    text: "Weathering With You",
    image: thumbnailImage2,
    story: "def",
    fontColor: "Black"
  },
  {
    id: 2,
    text: "Your Name",
    image: thumbnailImage3,
    story: "ghi",
    fontColor: "Black"
  },
  {
    id: 3,
    text: "Coming Soon",
    image: thumbnailImage4,
    story: "jkl",
    fontColor: "Black"
  },
  {
    id: 4,
    text: "Coming Soon",
    image: thumbnailImage4,
    story: "mno",
    fontColor: "Black"
  },
  {
    id: 5,
    text: "Coming Soon",
    image: thumbnailImage4,
    story: "pqr",
    fontColor: "Black"
  }
];

export default function App() {
  // Array of background images can add more in future used urls
  const backgroundImages = [
    "https://images8.alphacoders.com/131/thumb-1920-1310791.png",
    "https://images6.alphacoders.com/134/thumb-1920-1346530.jpeg",
  ];

  const [slides, setSlides] = useState(testSlides);
  const [selectedSlideId, setSelectedSlideId] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeBackgroundImage = (url: string) => {
    document.body.style.backgroundImage = `url(${url})`;
    document.body.style.backgroundAttachment = 'fixed';
  };

  // Set the initial background image when the app loads this was an interesting find
  useEffect(() => {
    changeBackgroundImage(backgroundImages[0]);
  }, []);

  const handleImageCycle = () => {
    const nextIndex = (currentIndex + 1) % backgroundImages.length; //this cycles through the url images with the % indicating to loop around
    setCurrentIndex(nextIndex);
    changeBackgroundImage(backgroundImages[nextIndex]);
  };

  // Applying the background image to the body
  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImages[currentIndex]})`; //sets where to find image
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed'
  }, [currentIndex]);

  const selectedSlide = slides.find((s) => s.id === selectedSlideId);

  const addBlankSlide = () => {
    const blankSlide = {
      id: slides.length > 0 ? slides[slides.length - 1].id + 1 : 0, 
      text: "Coming Soon",
      image: thumbnailImage4,
      story: "pqr",
      fontColor: "Black"
    };

    setSlides([...slides, blankSlide]);
  }

  const deleteSlide = (idToDelete: number) => {
    setSlides( slides.filter(s => s.id !==idToDelete) ) //delete slide 
  }

  const updateslideFontColor = ( newColor: string, idToUpdate?: number) => {
    setSlides(slides.map(slide => (
      slide.id !== idToUpdate ? slide : {
        ...slide,
        fontColor: newColor
      }
    )))
  }

  return (
    <div className="d-flex flex-column vh-100">
      <Navbar selectedSlide={selectedSlide}changeBackgroundImage={handleImageCycle} updateslideFontColor={updateslideFontColor}/>
      <ListField />
      <div className="d-flex flex-grow-1">
        <Sidebar addBlankSlide={addBlankSlide} />
        <SlideView slides={slides} deleteSlide={deleteSlide}selectedSlideId={selectedSlideId} setSelectedSlideId={setSelectedSlideId} /> {/* Use slides here */}
        <Rightinfobar slide={selectedSlide} />
      </div>
    </div>
  )
}