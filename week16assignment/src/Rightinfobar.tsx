import { useState } from "react"


type InfoBarProps = {
    slide?: {id: number, text: string, image: string, story: string, fontColor: string}
}


export default function Rightinfobar({slide} : InfoBarProps) {
    const [isExpanded, setIsExpanded] = useState(false)

    const handleButtonClick = () => {
        setIsExpanded(!isExpanded)
        
    }

    return (
        <>
            {isExpanded ? (
                <div className=" border-black border-end border-5 bg-transparent p-5 d-flex flex-column vh-100 max w-75">
                    
                    <h1>Please excuse our dust</h1>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <h2 style={{color: slide?.fontColor}}>{slide?.story} </h2>                    
                        </div>
                    
                    </div>
            )   : null}
            <button className="btn btn-primary p-2 border-3 border-black" onClick={handleButtonClick}>{isExpanded ? ">" : "<"}</button>
        </>
    )
    
}
