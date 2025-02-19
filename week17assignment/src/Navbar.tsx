import NavBarButton from "./NavBarButtons";
import Music from "./assets/music-solid.svg";
import Movies from "./assets/film-solid.svg";
import Games from "./assets/gamepad-solid.svg";
import Background from "./assets/background.svg";
import TextColor from "./assets/fill-solid.svg";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

type NavbarProps = {
  changeBackgroundImage: () => void
  updateslideFontColor: ( color: string, id?: number,) =>  void
  selectedSlide?: {id: number, text: string, image: string, fontColor: string}
}

export default function Navbar({ changeBackgroundImage, updateslideFontColor, selectedSlide }: NavbarProps) {
  const [isBackgroundModalOpen, setIsBackgroundModalOpen] = useState(false);
  const [isTextColorModalOpen, setTextColorModalOpen] = useState(false);

  const handleCloseBackgroundModal = () => setIsBackgroundModalOpen(false);
  const handleCloseTextColorModal = () => setTextColorModalOpen(false);

  return (
    <div className="bg-transparent p-3 border border-black border-5 d-flex justify-content-center w-100">
      <div className="bg-transparent p-3 d-flex justify-content-center w-75">
        <Link to="/"><NavBarButton icon={Movies} onClick={() => {}} /></Link> {/*added links to the existing buttons*/}
        <Link to="/music"><NavBarButton icon={Music} onClick={() => {}} /></Link>
        <Link to="/games"><NavBarButton icon={Games} onClick={() => {}} /></Link>
      </div>
      <div className="bg-transparent p-3 border-5 d-flex justify-content-left w-50">
        <NavBarButton icon={Background} onClick={() => setIsBackgroundModalOpen(true)} />
        {/* Added Modals for changing background and font coloring*/}
        <Modal show={isBackgroundModalOpen} onHide={handleCloseBackgroundModal}>
          <Modal.Header>
            <Modal.Title>Change Background</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Please choose a new background <br />
            <div>
              <Button onClick={changeBackgroundImage}>
                Cycle Image
              </Button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleCloseBackgroundModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCloseBackgroundModal}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <NavBarButton icon={TextColor} onClick={() => setTextColorModalOpen(true)} />

        <Modal show={isTextColorModalOpen} onHide={handleCloseTextColorModal}>
          <Modal.Header>
            <Modal.Title>Change Text Color</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Choose a new text color: <br />
            <Button variant={selectedSlide?.fontColor === "red" ? "danger" : "outline-danger"} onClick={() => updateslideFontColor("red", selectedSlide?.id)}>Red</Button>
            <Button variant={selectedSlide?.fontColor === "blue" ? "primary" : "outline-primary"} onClick={() => updateslideFontColor("blue",selectedSlide?.id)} >Blue</Button>
            <Button variant={selectedSlide?.fontColor === "orange" ? "warning" : "outline-warning"} onClick={() => updateslideFontColor( "orange", selectedSlide?.id)}>Orange</Button>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleCloseTextColorModal}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}