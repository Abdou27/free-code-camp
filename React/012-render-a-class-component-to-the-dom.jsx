import ReactDOM from "react-dom/client";

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                {/* Change code below this line */}
                <Fruits></Fruits>
                <Vegetables></Vegetables>
                {/* Change code above this line */}
            </div>
        );
    }
};

// Change code below this line
ReactDOM.render(<TypesOfFood></TypesOfFood>, document.getElementById('challenge-node'));