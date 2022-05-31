import React, { Component } from "react";
//name phone email

class GeneralInfo extends Component {
    render() {
        return <section className = 'generalInfo'>
            <div>Name:
                <input className = 'name'></input>
            </div>
            <div>Phone:
                <input className = 'phone'></input>
            </div>
            <div>Email:
                <input className = 'email'></input>
            </div>

        </section>;
    }
}

export { GeneralInfo };