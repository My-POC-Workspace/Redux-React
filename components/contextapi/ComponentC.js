import React, { useContext } from 'react'
import { BioData } from './ComponentA'

// const ComponentC = () => {
//     const bioData = useContext(BioData);
//     return (
// <h1>
//     In Component C -- {bioData.map((data) => data.name)} <br/>
//     In Component C -- {bioData.map((data) => data.age)} <br/>
//     In Component C -- {bioData.map((data) => data.gender)} 
// </h1>
//     )
// }

const ComponentC = () => {
    return (
        <BioData.Consumer>
            {
                bioData => (
                    <h1>
                        In Component C -- {bioData.map((data) => data.name)} <br />
                        In Component C -- {bioData.map((data) => data.age)} <br />
                        In Component C -- {bioData.map((data) => data.gender)}
                    </h1>
                )
            }
        </BioData.Consumer>
    )
}

export default ComponentC

