import './Member.css';



export default function Member({image, name, job, detail}){
    return(
        <div className="member">
            <img src={image} alt="" />
            <h3 className="name">{name}</h3>
            <h3 className="job">{job}</h3>
            <div className="details">{detail}</div>
        </div>
    )
}