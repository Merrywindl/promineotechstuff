import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListField from "./ListField";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SlideView from "./SlideView";
import Rightinfobar from "./Rightinfobar";
import Music from "./pages/Music";
import Games from "./pages/Games";
import Footer from "./Footer";

export default function App() {
  const [slides, setSlides] = useState([]);
  const [selectedSlideId, setSelectedSlideId] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const backgroundImages = [
    "https://images8.alphacoders.com/131/thumb-1920-1310791.png", // Background image URLs//
    "https://images6.alphacoders.com/134/thumb-1920-1346530.jpeg",
  ];

  useEffect(() => {
    fetch("https://67b390cb392f4aa94fa7a91e.mockapi.io/slides") // Fetching data from the API//
      .then(response => response.json())
      .then(data => setSlides(data));
  }, []);

  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImages[currentIndex]})`;// Changing the background image//
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
  }, [currentIndex]);

  const changeBackgroundImage = (url: string) => {
    document.body.style.backgroundImage = `url(${url})`;
    document.body.style.backgroundAttachment = 'fixed';
  };

  const handleImageCycle = () => {
    const nextIndex = (currentIndex + 1) % backgroundImages.length;// function to cycle through the background images//
    setCurrentIndex(nextIndex);
    changeBackgroundImage(backgroundImages[nextIndex]);
  };

  const selectedSlide = slides.find((s) => s.id === selectedSlideId);

  const addBlankSlide = (text: string, story: string, image: string, resetInputs: () => void) => {
    const blankSlide = {
      id: slides.length > 0 ? slides[slides.length - 1].id + 1 : 0,
      text: text || "Coming Soon", //default text if no text is given//
      image: image || "https://i.imgur.com/v2LWZrn.jpg", //deaful image URL if no url is given//
      story: story || "This is a story", //default story if no story is given//
      fontColor: "Black" //default font color //
    };

    fetch("https://67b390cb392f4aa94fa7a91e.mockapi.io/slides", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(blankSlide)
    })
    .then(response => response.json())
    .then(newSlide => {
      setSlides([...slides, newSlide]);
      resetInputs();
      setIsSidebarExpanded(false);
    });
  };

  const deleteSlide = (idToDelete: number) => {
    fetch(`https://67b390cb392f4aa94fa7a91e.mockapi.io/slides/${idToDelete}`, {
      method: "DELETE"
    })
    .then(() => {
      setSlides(slides.filter(s => s.id !== idToDelete));
    });
  };

  const updateslideFontColor = (newColor: string, idToUpdate?: number) => {
    const updatedSlide = slides.find(slide => slide.id === idToUpdate);
    if (updatedSlide) {{/* function to update the font color of the slide*/}
      updatedSlide.fontColor = newColor;
      fetch(`https://67b390cb392f4aa94fa7a91e.mockapi.io/slides/${idToUpdate}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedSlide)
      })
      .then(response => response.json())
      .then(() => {
        setSlides(slides.map(slide => (
          slide.id !== idToUpdate ? slide : updatedSlide
        )));
      });
    }
  };

  return (
    <Router> {/* Router for navigation*/}
      <div className="d-flex flex-column vh-100">
        <Navbar selectedSlide={selectedSlide} changeBackgroundImage={handleImageCycle} updateslideFontColor={updateslideFontColor}/>
        <Routes>
          <Route path="/" element={<MoviesPage slides={slides} selectedSlide={selectedSlide} addBlankSlide={addBlankSlide} deleteSlide={deleteSlide} updateslideFontColor={updateslideFontColor} isSidebarExpanded={isSidebarExpanded} setIsSidebarExpanded={setIsSidebarExpanded} setSelectedSlideId={setSelectedSlideId} />} />
          <Route path="/music" element={<Music />} />
          <Route path="/games" element={<Games />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function MoviesPage({ slides, selectedSlide, addBlankSlide, deleteSlide, updateslideFontColor, isSidebarExpanded, setIsSidebarExpanded, setSelectedSlideId }) {
  return (
    <>
      <ListField />
      <div className="d-flex flex-grow-1">
        <Sidebar addBlankSlide={addBlankSlide} isExpanded={isSidebarExpanded} setIsExpanded={setIsSidebarExpanded} />
        <SlideView slides={slides} deleteSlide={deleteSlide} selectedSlideId={selectedSlide?.id} setSelectedSlideId={setSelectedSlideId} />
        <Rightinfobar slide={selectedSlide} />
      </div>
    </>
  );
}