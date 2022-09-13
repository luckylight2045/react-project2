import './Content.css'
import propTypes from 'prop-types'

export default function Content(props) {
    return(
        <div className="info-container">
            <img src="rocket.png" alt="" />
            <p>{props.text}</p>
        </div>
    )
}

Content.propTypes = {
   text:propTypes.oneOfType([
    propTypes.number,
    propTypes.string
   ])
}