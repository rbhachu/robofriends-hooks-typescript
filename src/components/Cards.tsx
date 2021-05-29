import React from 'react';

//deconstructed using props constant
const Cards = ({ id, name, email }) => { // avoids adding props.x to all vars
    return(
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img className="br-100  dib ba b--black-05 bg-dark-blue" src={`https://robohash.org/${id}?size=200x200`} width="200" height="200" alt={name} title={name} />
                <div>
                    <h2 className='f4 b helvetica black'>{name}</h2>
                    <p className="f6 underline helvetica black">{email}</p>
                </div>
        </div>
    )
}

export default Cards