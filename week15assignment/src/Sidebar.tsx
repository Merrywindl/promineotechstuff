import { useState } from "react"



type SidebarProps = {
    addBlankSlide: () => void
}

export default function Sidebar({addBlankSlide} : SidebarProps) {
    const [isExpanded, setIsExpanded] = useState(true)

    const handleButtonClick = () => {
        setIsExpanded(!isExpanded)
        
    }

    return (
        <>{/*expanding left side pane also may get removed in future iterations*/}
            {isExpanded ? (
                <div className=" border-black border-end border-5 bg-transparent p-5 d-flex flex-column vh-100rem  max w-10rem">
                    <div>
                        <form>
                            <input  className="max w-100 border border-black border border-5 p-2 bg-light bg-opacity-25 font-weight-bold" type="text" id="inputID" placeholder="Coming Soon"/>                               
                        </form>
                        <form>
                        <input className="max w-100 border border-black border border-5 p-2 bg-light bg-opacity-25 font-weight-bold" type="text" id="inputID" placeholder="Coming Soon"/>
                        </form>
                        <form>
                            <input className="max w-100 border border-black border border-5 p-2 bg-light bg-opacity-25 font-weight-bold" type="text" id="inputID" placeholder="Coming Soon"/>
                        </form>
                        
                        <button className="btn btn-primary border border-black border-5 w-200rem" onClick={addBlankSlide}>
                            Enter</button>
                        
                    </div>
                    <h1>Please excuse our dust</h1>
                    
                    </div>
            )   : null}
            <button className="btn btn-primary p-2 border-3 border-black" onClick={handleButtonClick}>{isExpanded ? "<" : ">"}</button>
        </>
    )
    
}
