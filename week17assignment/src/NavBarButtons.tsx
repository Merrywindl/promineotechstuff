

type NavbarButtonProps = {
    icon: string, 
    onClick: () => void
    
}

export default function ({icon, onClick} : NavbarButtonProps) {

    
    return <div className="btn btn-outline-info me-2"
                onClick={onClick}
                >
                    <img src={icon} style={{width: "2rem", height: "40px"} }/>
                    </div>
}