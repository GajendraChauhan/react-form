import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class FormToGetInput extends React.Component {
    render(){
        const colors = ['White', 'Violet', 'Indigo', 'Blue', 'Green', 'Yellow', 'Orange', 'Red']
        const {
            formInputs: {
            fullName,
            email,
            contactNumber,
            details,
            selectedColor,
            hasCheckBoxSelected,
            selectedDate,
            gender
        },
        handleChangeEvent,
        handleSubmitEvent,
        handleDateChangeEvent
    } = this.props;
        
        return(
            <form onSubmit={handleSubmitEvent} autoComplete="off">
                <div>
                    <label htmlFor="fullName">Full Name</label><br/>
                    <input type="text" id="fullName" name="fullName" value={fullName} onChange={handleChangeEvent} /><br/>
                </div>
                <div>
                    <label htmlFor="email">Email</label><br/>
                    <input type="text" id="email" name="email" value={email} onChange={handleChangeEvent} /><br/>
                </div>
                <div>
                    <label htmlFor="contactNumber">Contact Number</label><br/>
                    <input type="text" id="contactNumber" name="contactNumber" value={contactNumber} onChange={handleChangeEvent} /><br/>
                </div>
                <div>
                    <label htmlFor="details">About Me</label><br/>
                    <textarea type="text" id="details" name="details" rows="5" cols="40" value={details} onChange={handleChangeEvent} /><br/>
                </div>
                <label htmlFor="chooseColor">Choose a color:</label><br/>
                <select id="colors" name="selectedColor" value={selectedColor} onChange={handleChangeEvent}>
                    {
                        colors.map((color, index)=>{
                            return <option key={index} value={color}>{color}</option>
                        })
                    }
                </select>
                <br/>
                <label>Select the checkbox :&nbsp;&nbsp;
                    <input type="checkbox" name="hasCheckBoxSelected" checked={hasCheckBoxSelected} onChange={handleChangeEvent} />
                </label>
                <br/>
                <label htmlFor="date">Select a date :&nbsp;&nbsp;</label>
                <DatePicker name="selectedDate"
                    isClearable
                    placeholderText="Please fill the date!"
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    dateFormat="dd/MM/yyyy"
                    selected={selectedDate}
                    onChange={handleDateChangeEvent} /><br/>
                <label htmlFor="gender">Gender :&nbsp;&nbsp;</label>
                <input type="radio" value="Male" name="gender" checked={gender==="Male"} onChange={handleChangeEvent} /> Male&nbsp;&nbsp;
                <input type="radio" value="Female" name="gender" checked={gender==="Female"} onChange={handleChangeEvent} /> Female
                <button type="submit" value="submit">Submit Form</button>
            </form>
        );
    }
}

export default FormToGetInput;