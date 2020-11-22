import React from 'react'
import VocabController from './VocabController'

// create context
const AppContext = React.createContext();

// create provider component
export const AppProvider = (props) => {

    const vocabController = VocabController();

    const value = {
        vocabController
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext;

