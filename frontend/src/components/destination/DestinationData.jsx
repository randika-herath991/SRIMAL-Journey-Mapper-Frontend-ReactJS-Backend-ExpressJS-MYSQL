import { Component } from "react";
import "../../styles/DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="description-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>

        <div className="description-image">
          <img alt="first-image" src={this.props.firstImage} />
          <img alt="first-image" src={this.props.secondImage} />
        </div>
      </div>
    );
  }
}

export default DestinationData;
