import React from "react";

import "../App.css";

export function encrypt(text){
  var out =''
  var ofset = 3
  for (let i in text){
    let code = text.charCodeAt(i);
    code = code + ofset;
    out += String.fromCharCode(code)
  }
  return (out)
  
}

export class AddTask extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      note: '',
    }
  }
  
  render () {
    const { onAdd } = this.props;
    console.log(this.state.note.length)
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onAdd(encrypt(this.state.note));
          this.setState({
            note: '',
          })
        }}
      >
        <input
          className   = "add-task"
          type        = "text"
          placeholder = "Write and encrypt smth"
          value       = { this.state.note }
          onChange    = {({ target: { value } }) => this.setState({
            note: value
          })}
          required
          autoFocus
        />
      </form>
    )
    
  }

}

