import './Navbar.css'


export default function Navbar() {
    return(
        <div className="nav-container">
            <div className="nav-logo">
                <img src="fox-logo.png" alt="" />
            </div>
            <div className="navbar">
                <li className="item">خانه</li>
                <li className="item">درباره</li>
                <li className="item">ویژگی ها</li>
                <li className="item">تصاویر</li>
                <li className="item">تیم</li>
                <li className="item">اخبار</li>
                <li className="item">تماس</li>
            </div>
            <div className="nav-sign disabled">
                <div className="nav-sign-item"></div>
                <div className="nav-sign-item"></div>
                <div className="nav-sign-item"></div>
            </div>
        </div>
    )
}