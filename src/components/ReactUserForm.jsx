import React from 'react';
import FormToGetInput from './FormToGetInput';
import FormToDisplayFields from './FormToDisplayFields';
import './ReactUserForm.css';
 
class ReactUserForm extends React.Component {
    constructor() {
        super();
        this.state = {
            fullName: 'Shaurya',
            email: 'abc@xyz.com',
            contactNumber: '1234567890',
            details: '',
            displayForm: false,
            selectedColor:'white',
            hasCheckBoxSelected: false,
            selectedDate: new Date(),
            gender: 'Male'
        }
    }

    handleChangeEvent = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    
    handleDateChangeEvent = (date) => {
        this.setState({selectedDate: date});
    }

    handleSubmitEvent = (event) => {
        const newState = {...this.state};
        newState['details'] = `I am ${this.state.fullName}. My email id is ${this.state.email}. My contact number is ${this.state.contactNumber}.`;
        this.setState(newState);
        this.setState({displayForm: true});
        event.preventDefault();
    }

    render(){
        return(
            <React.Fragment>
                <div className="registration-form">
                    <h1>Welcome to React Form</h1>
                    <br/>
                    <FormToGetInput
                        formInputs={this.state}
                        handleChangeEvent={this.handleChangeEvent}
                        handleSubmitEvent={this.handleSubmitEvent}
                        handleDateChangeEvent={this.handleDateChangeEvent} />
                </div>
                {
                    (this.state.displayForm) &&
                    <div className="display-form" style={{backgroundColor: this.state.selectedColor}}>
                        <h1>Display Form</h1>
                        <FormToDisplayFields displayData={this.state}/>
                    </div>
                }
            </React.Fragment>
        );
    }

    componentDidMount(){
        const newState = {...this.state};
        newState['details'] = `I am ${this.state.fullName}. My email id is ${this.state.email}. My contact number is ${this.state.contactNumber}.`;
        this.setState(newState);
    }
}

export default ReactUserForm;