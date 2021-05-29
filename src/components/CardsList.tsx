import React from 'react';
import Cards from '../components/Cards'; // imports Cards.js

const CardsList = ({ robots }) => {

return (
        <div className="pa3">
            {robots.map((robot, index) => { // loops robot array list from /src/robots.js
                return ( // comma added as code changed to multi-line
                    <Cards 
                        //key={index} 
                        id={robot.id} 
                        name={robot.name} 
                        email={robot.email} 
                    />
                );
                }
            )}
        </div>
    );
}

export default CardsList;