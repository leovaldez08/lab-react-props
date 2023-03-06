import "./App.css";

function App(props) {
  const imageData = props.data;
  return (
    <div className="main">
      <h1>Kalvium Gallery</h1>
      <div className="container">
        {imageData.map((image) => (
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

export default App;
