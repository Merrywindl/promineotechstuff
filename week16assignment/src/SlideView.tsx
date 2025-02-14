import SlideThumbnail from "./SlideThumbnail"




type SidebarProps = {
        slides: Array<{id: number, text: string, image: string}>
        selectedSlideId: number
        setSelectedSlideId: (newValue: number) => void
        deleteSlide: (id:number) => void
    }

export default function SlideView({slides, selectedSlideId, deleteSlide, setSelectedSlideId} : SidebarProps) {
    
    

    

    const handleSlideClick = (id: number) => {
        setSelectedSlideId(id)
        
    }


    return (
    <div style={{ maxHeight: '80rem',overflowY: 'scroll', height: '50rem' }} className="border-end border-black border-5  max w-100 d-flex mr-sm-auto  bg-light bg-opacity-25 flex-wrap ">
        { slides.map( s => <SlideThumbnail key={s.id}slide ={s} onSelected={handleSlideClick} isSelected={s.id === selectedSlideId}
        deleteSlide={deleteSlide}
        /> )}
        
        
        </div>
    )
}