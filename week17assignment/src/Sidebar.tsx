import { useState } from "react";

type SidebarProps = {
  addBlankSlide: (text: string, story: string, image: string, resetInputs: () => void) => void;
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
};

export default function Sidebar({ addBlankSlide, isExpanded, setIsExpanded }: SidebarProps) {
  const [newSlideText, setNewSlideText] = useState("");
  const [newSlideStory, setNewSlideStory] = useState("");
  const [newSlideImage, setNewSlideImage] = useState("");

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  const resetInputs = () => {
    setNewSlideText("");
    setNewSlideStory("");
    setNewSlideImage("");
  };

  return (
    <div style={{ display: "flex" }}>
      {isExpanded ? (
        <div
          className="border-black border-end border-5 bg-transparent p-2 d-flex flex-column"
          style={{ width: "20vw", maxWidth: "20vw" }}
        >
          <form style={{ width: "100%" }}>
            <input
              className="w-75 m-2 border border-black border-5 p-2 bg-light bg-opacity-25 font-weight-bold"
              type="text"
              placeholder="Slide Text"
              value={newSlideText}
              onChange={(e) => setNewSlideText(e.target.value)}
            />
            <input
              className="w-75 m-2 border border-black border-5 p-2 bg-light bg-opacity-25 font-weight-bold"
              type="text"
              placeholder="Slide Story"
              value={newSlideStory}
              onChange={(e) => setNewSlideStory(e.target.value)}
            />
            <input
              className="w-75 m-2 border border-black border-5 p-2 bg-light bg-opacity-25 font-weight-bold"
              type="text"
              placeholder="Image URL"
              value={newSlideImage}
              onChange={(e) => setNewSlideImage(e.target.value)}
            />
            <button
              className="btn btn-primary mt-2 border border-black border-5 w-75"
              onClick={(e) => {
                e.preventDefault();
                addBlankSlide(newSlideText, newSlideStory, newSlideImage, resetInputs);
              }}
            >
              Enter
            </button>
          </form>
          <h1 className="mt-3">Please excuse our dust</h1>
        </div>
      ) : null}
      <button
        className="btn btn-primary p-2 border-3 border-black"
        onClick={handleButtonClick}
      >
        {isExpanded ? "<" : ">"}
      </button>
    </div>
  );
}