import React from "react";

export default function FormBootstrap() {
    return(
        <div className= "mt-3 mx-auto p-3" style={{width: '400px', background: '#cee'}}>
            <form>
                <div className="from-group mb-3">
                    <label htmlFor= "login">Email</label>
                    <input type= "text" id= "login" className="from-control"/>
                </div>
                <div className="from-group mb-3">
                    <label htmlFor= "pswd">Password</label>
                    <input type= "password" id= "pswd" name= "pswd" className= "form-control"/>
                </div>
                <div className="from-group mb-4">
                    <label htmlFor= "select1">Select</label>
                    <select id= "select1" name= "select1" className= "form-select">
                        <option value="1">Item1</option>
                        <option value="2">Item2</option>
                        <option value="3">Item3</option>
                    </select>
                </div>
                <button className="btn btn-primary">OK</button>
            </form>
        </div>
        
        
    )
}