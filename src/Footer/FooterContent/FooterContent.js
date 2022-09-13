import './FooterContent.css'


export default function FooterContent({title, text1, text2, text3, text4}) {
    return(
        <div className="items">
            <h6>{title}</h6>
            <li><a href="#">{text1}</a></li>
            <li><a href="#">{text2}</a></li>
            <li><a href="#">{text3}</a></li>
            <li><a href="#">{text4}</a></li>
        </div>
    )
}