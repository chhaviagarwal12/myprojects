import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import Navigation from './Components/Navigation'
import Header from './Components/HomePage/Header'
import Footer from './Components/Footer'
import { createPortal } from 'react-dom'


class App extends React.Component{
  componentDidMount(){
    window.addEventListener('onload',()=>{
      window.localStorage.clear()
      
      })
  }
render(){
  return(
    <div className='ui grid'>
      <div className='row' id="top-row">
      <Header/>
      </div>
      <div className='row' id="center-row">
      <div className='ui container'>
       <Navigation/> 
      </div>
      </div>
      
      <div className='row' id="bottom-row">
     
      <Footer/>
      </div>
    </div>
    
  ) 
}




}
export default App