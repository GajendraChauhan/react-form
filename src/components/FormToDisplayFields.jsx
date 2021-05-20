import React from 'react';
import moment from 'moment';

class FormToDisplayFields extends React.Component {
    render(){
        
        const { displayData: 
            {
                fullName,
                email,
                contactNumber,
                details,
                selectedColor,
                hasCheckBoxSelected,
                selectedDate,
                gender
            }
        } = this.props;

        return(
            <React.Fragment>
                {
                    (fullName) && 
                    <React.Fragment>
                        <label htmlFor="fullName"><b>Full Name : </b></label>
                        <label htmlFor="fullName">{fullName}</label><br/>
                    </React.Fragment>
                }
                {
                    (email) &&
                    <React.Fragment>
                        <label htmlFor="email"><b>Email : </b></label>
                        <label htmlFor="email">{email}</label><br/>
                    </React.Fragment>
                }
                {
                    (gender) &&
                    <React.Fragment>
                        <label htmlFor="gender"><b>Gender : </b></label>
                        <label htmlFor="gender">{gender}</label><br/>
                    </React.Fragment>
                }
                {
                    (contactNumber) &&
                    <React.Fragment>
                        <label htmlFor="contactNumber"><b>Contact Number : </b></label>
                        <label htmlFor="contactNumber">{contactNumber}</label><br/>
                    </React.Fragment>
                }
                {
                    (details) &&
                    <React.Fragment>
                        <label htmlFor="details"><b>About me : </b></label>
                        <label htmlFor="details">{details}</label><br/>
                    </React.Fragment>
                }
                <label htmlFor="selectedColor"><b>Color Selection : </b></label>
                <label htmlFor="selectedColor">You have selected <b><u>{selectedColor}</u></b> color</label><br/>
                <label htmlFor="selectedColor"><b>Checkbox Status : </b></label>
                {
                    (hasCheckBoxSelected) ?
                    <React.Fragment>
                        You have <b><u>selected</u></b> the checkbox
                    </React.Fragment>
                    : <React.Fragment>
                        You have <b><u>not selected</u></b> the checkbox
                    </React.Fragment>
                }
                {
                    (selectedDate) &&
                    <div>
                        <label htmlFor="selectedColor"><b>Selected Date : </b></label>
                        <label htmlFor="birthDate">You have selected <b>{moment(selectedDate).format("DD/MM/YYYY")}</b> date</label><br/>
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default FormToDisplayFields;