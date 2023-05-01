import React from "react";

class GOT extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      name: null,
      family: null,
      title: null,
      img: null,
    };
  }

  randomCharacter() {
    const randomNumber = Math.round(Math.random() * 53);
    const url = `https://thronesapi.com/api/v2/Characters/${randomNumber}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          loaded: true,
          name: data.fullName,
          family: data.family,
          title: data.title,
          img: data.imageUrl,
        });
      });
  }

  render() {
    return (
      <div>
        <div>Which Got Character are you?</div>
        {this.state.loaded && (
          <div>
            <img src={this.state.img} />
            <h1>{this.state.name}</h1>
            <p>{this.state.family}</p>
            <p>{this.state.title}</p>
          </div>
        )}
        <button
          type="button"
          onClick={() => this.randomCharacter()}
          className="btn"
        >
          Roll for a Characters
        </button>
      </div>
    );
  }
}

export default GOT;
