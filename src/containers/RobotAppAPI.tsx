import React, { useState, useEffect } from 'react';
import CardsList from '../components/CardsList';
import SearchBox from '../components/SearchBox';

function App() {

// react hooks, using states with destructuring and custom states with functions
const [robots, setRobots] = useState([]) // initial state starts as empty object
const [searchfield, setSearchfield] = useState('') // initial state starts empty as empty string

    // hooks using effect
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users') // get api list
            .then(response => response.json()) // convert list into useable formart aka json
            .then(users => {setRobots(users)}); // get users from api list/show users on search change
            //console.log(robots, searchfield) // show current states   
    },[]) // only re-run useEffect hook onload? as '[]' defines as empty array, which is the same as stating componentDidMount?

    const onSearchChange = (event) => { // changed into a variable for react hooks
        setSearchfield(event.target.value) // react hook method
    }

    const filteredRobots = robots.filter(robot => { // filter robots state
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    //console.log(robots, searchfield) // show current states

    return (
        <>
            { !robots.length ? 
                <div className='tc'>
                    <header>
                        <h1 className='f1 fw2 light-blue'>Loading...</h1>
                    </header>
                </div>
            :
                <div className='tc'>
                    <header>
                        <h1 className='f1 fw2 light-blue'>RoboFriends</h1>
                    </header>
                    <section>
                        <SearchBox searchChange={onSearchChange}/>
                            <CardsList robots={filteredRobots} /> 
                    </section>
                </div>
            }
        </>
    )
}

export default App;