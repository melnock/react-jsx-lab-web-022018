import React from 'react'
import ReactDOM from 'react-dom'
import RegistrationForm from './RegistrationForm'
import FillerText from './FillerText'


export default class Webpage extends React.Component {
  render(){
    return(
      <div>
        <h1> The world&#x27;s coolest webpage </h1>
        <FillerText/>
        <FillerText/>
      </div>
    )
  }
}
