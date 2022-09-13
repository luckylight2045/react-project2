import './Feature.css'

export default function Feature(props) {
    return(
        <div className="box-container">
            <div className="box-content">
                <div className="i-container">
                    <i className={props.icon}></i>
                </div>
                <h1>{props.title}</h1>
                <p>
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان</p>

            </div>
        </div>
    )
}