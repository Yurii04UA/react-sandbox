import { Component } from "react";
import "./count.css";
class Apps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  countINC = () => {
    if (this.state.count < 50) {
      this.setState(state => {
        return { count: state.count + 1 };
      });
    }
  };
  countDEC = () => {
    this.setState((state) => {
      if (state.count > -50) {
        return { count: state.count - 1 };
      }
    });
  };

  countRES = () => {
    this.setState((state) => {
      return { count: 0 };
    });
  };

  countRND = () => {
    this.setState((state) => ({
      count: +(Math.random() * (50 - -50) + -50).toFixed(0),
    }));
  };

  // Используйте только стрелочную форму методов
  // Почему? Подробный ответ будет в следующем уроке

  render() {
    return (
      <div className="app">
        <div className="counter">{this.state.count}</div>
        <div className="controls">
          <button onClick={this.countINC}>INC</button>
          <button onClick={this.countDEC}>DEC</button>
          <button onClick={this.countRND}>RND</button>
          <button onClick={this.countRES}>RESET</button>
        </div>
      </div>
    );
  }
}

// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов

export default Apps;
