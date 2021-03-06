import React, {Component} from 'react';


export default class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = {term: ''}
    }

    onInputChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <form className="imput-group">
                <input 
                placeholder = "Choose city..."
                className = "form-control"
                value = {this.state.term}
                onChange = {this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }

} 