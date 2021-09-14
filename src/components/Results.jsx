import React from 'react'

const Results = (props) => {

    return ( 
        <div>
                <article>
                    <h3>{props.title}</h3>
                    <p>{props.artist}</p>
                </article>
        </div>
     );
}
 
export default Results;