import React, { Component } from "react";

class Tasks extends Component {

render() {
    return (
        <div className="Tasks">
            <div className="header">
                <form>
                    <input placeholder="enter task"></input>
                    <button type="submit">add</button>
                </form>
            </div>
        </div>
    );
}
}

export default Tasks;