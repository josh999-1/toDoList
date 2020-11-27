import React from "react";
import './App.css';

class App extends React.Component{

  state={
    inputText: "",
    list: [],
    delete: this.delete.bind(this),
  }
  
  handleInput = (event) => {
    this.setState({inputText: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      list: [...this.state.list, this.state.inputText],
      inputText: "",
    })
    console.log("submit")
  }
  delete(id){
    this.setState(prevState => ({
      list: prevState.list.filter(item => item != id)
    }))
  }

  render(){
    return(
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInput}
            type="text"
            value={this.state.inputText}
          />
          <button type="submit">Add Task</button>
        </form>

        <div>
          {this.state.list.map((item) => {
            return <li onClick={this.delete.bind(this, item)}>{item}</li>
          })}
        </div>
      </div>
    )
  }
}
export default App;
