class DisplayMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messages: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }

    // Add handleChange() and submitMessage() methods here
    handleChange(event) {
        this.setState(state => ({
            ...state,
            input: event.target.value,
        }));
    }

    submitMessage() {
        this.setState(state => ({
            input: '',
            messages: [...state.messages, state.input]
        }));
    }

    render() {
        return (
            <div>
                <h2>Type in a new Message:</h2>
                { /* Render an input, button, and ul below this line */}
                <input type="text" onChange={this.handleChange} value={this.state.input} />
                <button onClick={this.submitMessage}></button>
                <ul>{this.state.messages.map((m, i) => <li key={i + m}>{m}</li>)}</ul>
                { /* Change code above this line */}
            </div>
        );
    }
};