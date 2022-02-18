import "./App.css";
import { Component } from "react";
import Apps from "./components/count/count";
// const WhoAmI = ({ name, surname, link }) => {    //// FUNCTION COMPONENT
//   return (
// <div>
//   <h1>
//     My nane is {name()}, surname - {surname}{" "}
//   </h1>
//   <a href={link}>My profile</a>
// </div>
//   );
// };

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 29,
      text: "Sometext",
      position: "",
    };
    // this.nextYear = this.nextYear.bind(this)  /// 
  }
  nextYear = () => {
    this.setState((state) => ({ years: state.years + 1 }));
  };

  commitInput = (e, color) => {
    console.log(color);
    this.setState({ position: e.target.value });
  };

  render() {
    const { name, surname, link } = this.props;
    const {position,years} = this.state;
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>
          My nane is {name}, surname - {surname}, age - {years}, position - {position}
        </h1>
        <a href={link}>My profile</a>
        <form>
          <span>enter something</span>
          <input type="text" onChange={(e) => this.commitInput(e, 'some color')} />
        </form>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      {/* <Apps  /> */}
      <WhoAmI
        name="Yurii"
        surname="Paraka"
        link={"https://github.com/Yurii04UA/react-sandbox"}
      />
      <WhoAmI
        name="Alex"
        surname="Paraka"
        link={"https://github.com/Yurii04UA/react-sandbox"}
      />
    </div>
  );
}

export default App;
