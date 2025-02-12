
export default function SlideThumbnail({slide} : {slide: {text: string, image: string}} ) {
    return (
        
        <div className="vstack g-3 p-3 d-flex">
            <span className="fw-bolder text-center align-self-center">{slide.text}</span>
            <img src={slide.image} width={250} height={250} onClick={() => alert(`Selected: ${slide.text}`)}  className="d-flex align-self-center"/>
        </div>
        
    )
}