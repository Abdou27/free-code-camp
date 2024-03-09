import React from "react";
import ReactDOM from "react-dom/client";

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div><h1>My First React Component!</h1></div>
    }
}

ReactDOM.render(<MyComponent></MyComponent>, document.getElementById('challenge-node'));