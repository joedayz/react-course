import React, {useState} from "react";

const list = [
    {id: 1, name: 'The beach', topDestination: true},
    {id: 2, name: 'The mountains', topDestination: false},
    {id: 3, name: 'Vibrant cities', topDestination: true},
    {id: 4, name: 'Roughing it', topDestination: false},
    {id: 5, name: 'Ultimate survival', topDestination: false},
]

const JoeDayzHolidayList = () => {

    const [showAll, setShowAll] = useState(true);

    return (
        <section>
            <h1>JoeDayz Holiday Destination</h1>
            {list.filter(item => (showAll ? true : item.topDestination)).map(item => <li
                key={item.id.toString()}>{item.name}</li>
            )}
            <button type="button" onClick={() => setShowAll(true)}>Show All</button>
            <button type="button" onClick={() => setShowAll(false)}>Show only top destination</button>
        </section>
    );
}

export default JoeDayzHolidayList;
