import React, { Component } from "react";

class Education extends Component {
    render() {
        return <section>
            <div>
                School Name:
                <input className = 'school'></input>
            </div>
            <div>
                Major
                <input className = 'major'></input>
            </div>
            <div>
                Degree:
                <input className= 'degree'></input>
            </div>
        </section>
    }
}

export { Education }