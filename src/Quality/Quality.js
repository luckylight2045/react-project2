import './Quality.css'



export default function Quality({icon}) {
    return(
        <div className="quality">
            <i className={icon}></i>
            <span>لورم ایپسوم</span>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و</p>
        </div>
    )
}

Quality.defaultProps = {
    icon:'bi bi-gift'
}


