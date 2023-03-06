import { Component } from "react";
import "./App.css";

export default class AppClass extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className="main">
        <h2>Kalvium Gallery</h2>
        <div className="container">
          {data.map((image) => (
            <img
              key={image.id}
              src={image.img}
              alt={`Elephant ${image.id}`}
              className="image"
            />
          ))}
        </div>
      </div>
    );
  }
}
