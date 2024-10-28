import React, { useState } from "react";

function BookingForm(props) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [occasion, setOccasion] = useState("");
    const [guest, setGuest] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    };

    const handleDateChange = (e) => {
        setDate(e);
        props.dispatch(e);
    };

    const availableTime = [
        "09:00",
        "10:00",
        "11:00",
        "01:00",
        "02:00",
        "03:00",
        "04:00",
    ];

    return (
        <section className="booking-form">
            <form onSubmit={handleSubmit}>
                <div>
                    {" "}
                    {/*booking date*/}
                    <label htmlFor="book-date">Choose Date</label>
                    <input
                        id="book-date"
                        type="date"
                        value={date}
                        onChange={(e) => handleDateChange(e.target.value)}
                        required
                    ></input>
                </div>
                {/* booking time */}
                <div>
                    <label htmlFor="book-time">Choose time</label>
                    <select
                        id="book-time"
                        value={time}
                        onChange={(e) => handleDateChange(e.target.value)}
                        required
                    >
                        <option>Select a time</option>
                        {availableTime.map((availableTime) => {
                            return (
                                <option key={availableTime}>
                                    {availableTime}
                                </option>
                            );
                        })}
                    </select>
                </div>
                {/* Number of Guests */}
                <div>
                    <label htmlFor="book-guests">Number of Guests:</label>
                    <input
                        type="number"
                        id="book-guests"
                        min={1}
                        placeholder="1"
                        onChange={(e) => setGuest(e.target.value)}
                        required
                    />
                </div>
                {/* Occasion */}
                <div>
                    <label htmlFor="book-occasion">Occasion:</label>
                    <select
                        name=""
                        id="book-occasion"
                        onChange={(e) => setOccasion(e.target.value)}
                        required
                    >
                        <option value="">Birthday</option>
                        <option value="">Anniversary</option>
                    </select>
                </div>
                {/* Reservation Button */}
                <div className="reservation-button" onClick={handleSubmit}>
                    <button>Make Your Reservation</button>
                </div>
            </form>
        </section>
    );
}

export default BookingForm;
