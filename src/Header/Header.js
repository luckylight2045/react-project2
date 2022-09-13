import './Header.css'
import Navbar from './Navbar/Navbar.js'
import HeaderContent from './HeaderContent/HeaderContent.js'

export default function Header() {
    return(
        <div className="header">
            <Navbar></Navbar>
            <HeaderContent></HeaderContent>
        </div>
    )
}