import React from 'react'
import ReactDOM from 'react-dom'
import FillerText from './FillerText'


export default class RegistrationForm extends React.Component {
  render(){
    return(
      <form>
        <input type="text"></input>
        <input type="password"></input>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export const hello = "hello"
