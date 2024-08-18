import React, { Component } from "react";

export default class button extends Component {
    showAlert(msg){
        alert(msg)
    }

    onclickButtonOK = () => {
        this.showAlert('Hello')
    }

    render() {
        return(
            <div style={{textAlign: 'center', marginTop: 20}}>
              <button onClick={this.onclickButtonOK}>OK</button>
            </div>
        )
    }
}


/*export default class MyComp extends Component {
    getDate(){
        const dayNames =['Sunday','Monday','tuesday','Wednesday','Thursday','Friday','Saturday']
        const monthNames =['January','February','March','April','May','June','July','August','September','October','November','December']
        const date = new Date()
        const weekDay = dayNames[date.getDay()]
        const day =date.getDate()
        const month =monthNames[date.getMonth()]
        const year = date.getFullYear()
        return `${weekDay} ${day} ${month} ${year}`
    }
    render(){
        return<div>{this.getDate()}</div>
    }
}
*/