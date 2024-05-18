import React from "react";

const Practice = () => {
    //we have objects with property inside an array
    const array = [
        {
            question: 'what is your name?',
            options: ['saurabh', 'Ram', 'Ravi', 'Bali'],
        },
        {
            question: 'What is your city?',
            options: ['Mumbai', 'Dehradun', 'Pune', 'Madhyapredesh'],
        },
    ];

    return (
        <>
            {/* accessing the property of an object inside array */}
            <h3>{array[1].question}</h3>
        </>
    );
}

export default Practice;
