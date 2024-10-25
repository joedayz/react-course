import React, {useState} from 'react';

// const list = [
//     {id:1, name: 'The beach'},
//     {id:2, name: 'The mountains'},
//     {id:3, name: 'Vibrant cities'},
//     {id:4, name: 'Roughing it'},
//     {id:5, name: 'Ultimate survival'},
// ];

const list2 = [
    'Abel',
    'agutierrez',
    'CG',
    'Vibrant cities',
    'The beach'
];


const list1 = [
    'The beach',
    'The mountains',
    'Vibrant cities',
    'Roughing it',
    'Ultimate survival'
];

const UltimateHolidayList = () => {

    const [list, setList] = useState(list1);

    const onClickHandler = () => {
        setList(list===list1? list2: list1);
    };

    const displayList = list.map((item, index) => (
        <>
        <li >
            <label htmlFor={`item-${index}`}>{item}</label>
            <input id={`item-${index}`}/>
        </li>
        </>
    ));
    return (
        <section>
            <h1>Holiday Destinations</h1>
            <ul>{displayList}</ul>
            <button onClick={onClickHandler}>Switch</button>
        </section>
    );
};

export default UltimateHolidayList;
