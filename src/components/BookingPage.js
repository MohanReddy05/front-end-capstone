import React from "react";
import BookingForm from "./BookingForm";
function BookingPage(props) {
    return (
        <BookingForm
            availableTime={props.availableTime}
            dispatch={props.dispatch}
            submitForm={props.submitForm}
        />
    );
}

export default BookingPage;
