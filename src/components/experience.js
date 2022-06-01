import React, { Component } from "react";

class Experience extends Component {
    render() {
        return <section>
            <div>
                Company Name:
                <input className = 'company'></input>
            </div>
            <div>
                Title:
                <input className = 'title'></input>
            </div>
            <div>
                Year:
                <input className = 'years'></input>
            </div>
        </section>
    }
}

export { Experience }