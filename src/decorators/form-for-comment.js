import React, {Component} from 'react';

export default class FormComments extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      message: '',
    };
  }

  render() {
    return (
      <form action="#">
        <h2>Добавить комментарий</h2>
        <input
          type="text"
          placeholder="Имя пользователя"
          onChange={this.Change('name', 10)}
          maxLength="20"
          value={this.state.name}
        />
        <br/>
        <textarea id="" cols="30"
                  placeholder="Сообщение"
                  maxLength={100}
                  rows="10"
                  onChange={this.Change('message', 30)}
                  value={this.state.message}
        ></textarea>
        <input type="submit" onClick={this.reset} onSubmit={this.reset} value={'Добавить комментарий'}/>
      </form>
    );
  }

  reset = (e) => {
    e.preventDefault();
    console.log(1);
    console.log(this.state);
    this.setState({
      name: '',
      message: '',
    });
  }

  Change = (form, minLength) => {
    return (e) => {
      if (e.target.value.length < minLength) {
        e.target.style.border = '1px solid red';
        this.setState({
          [form]: e.target.value
        });
      }
      else {
        e.target.style.border = '1px solid grey';
        this.setState({
          [form]: e.target.value
        });
      }
    };
  };
};