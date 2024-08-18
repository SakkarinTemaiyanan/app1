import React from 'react'
import Button  from './class-components'
import { Calculator2 } from './calculator'
import { EventData2 } from './event-data'

export default function App() {
  return(
    <>
      <h2><center>react-class-comp-arrow-function</center></h2>
      <Button/>
      <h2><center>react-calculator</center></h2>
      <Calculator2/>
      <h2><center>react_event-data</center></h2>
      <EventData2/>
    </>
  )
}



/*
function App(){
  return(
    <>
      <Header/>
      <p><center><Calendar/></center></p>
      <Content/>
      <Footer/>
    </>
  )
  
}
export default App;
*/