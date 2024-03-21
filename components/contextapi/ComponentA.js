import React, { createContext } from 'react'
import ComponentB from './ComponentB'

const BioData = createContext([]);

const ComponentA = () => {
    return (
        <BioData.Provider value={[{name: "Mike", age: 31, gender: "Male"}]}>
            <ComponentB />
        </BioData.Provider>
    )
}

export default ComponentA
export { BioData };
