

type SlideThumbnailProps = {
    slide: {id: number, text: string, image: string}
    isSelected: boolean
    onSelected: (id: number) => void
    deleteSlide: (id:number) => void
}

export default function SlideThumbnail({slide, onSelected,deleteSlide,  isSelected} : SlideThumbnailProps  ) {

    

    return (
        
        <div  className="vstack g-3 p-3 d-flex align-items-center ">
            <span className="fw-bolder text-center align-self-center">{slide.text}</span>
            <img src={slide.image} width={'100rem'} height={'100rem'} onClick={() => onSelected(slide.id)} 
            className={`border border-primary border-5  ${isSelected ? 'rounded-5' : 'border-0'} ${isSelected ? '' : 'bg-transparent'}`} />
            <button className="bg-danger rounded-5 text-success" style={{ width: '6rem' }}  onClick={() => deleteSlide(slide.id)}>Delete</button>
        </div>
        
    )
}