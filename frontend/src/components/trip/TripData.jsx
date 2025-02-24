import "../../styles/TripStyles.css";

function TripData(props) {
  return (
    <div className="t-card">
       <div className="trip-image">
        <img alt="trip-image1" src={props.image}/>
       </div>
       <h4>{props.heading}</h4>
       <p>{props.text}</p>
    </div>
  );
}

export default TripData;