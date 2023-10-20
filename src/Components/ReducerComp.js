import React, { useReducer } from 'react'
import { View, Text } from 'react-native'
import ColorChangers from './ColorChangers'
import ColorSquare from './ColorSquare'

const changeAmout = 10;

const reducer = (state, action) => {
    switch (action.type) {
        case 'red': {
            return (state.red + action.paylod > 255 || state.red + action.paylod < 0) ? state : { ...state, red: state.red + action.paylod };
        }
        case 'green': {
            return (state.green + action.paylod > 255 || state.green + action.paylod < 0) ? state : { ...state, green: state.green + action.paylod };
        }
        case 'blue': {
            return (state.blue + action.paylod > 255 || state.blue + action.paylod < 0) ? state : { ...state, blue: state.blue + action.paylod };
        }
        default: {
            return state;
        }
    }
}

const ReducerComp = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;
    const color = `rgb(${red}, ${green}, ${blue})`;

    return (
        <View>
            <ColorChangers color='Red'
                increseColor={() => dispatch({ type: 'red', paylod: changeAmout })}
                decreaseColor={() => dispatch({ type: 'red', paylod: -1 * changeAmout })}
            />
            <ColorChangers color='Green'
                increseColor={() => dispatch({ type: 'green', paylod: changeAmout })}
                decreaseColor={() => dispatch({ type: 'green', paylod: -1 * changeAmout })}
            />
            <ColorChangers color='Blue'
                increseColor={() => dispatch({ type: 'blue', paylod: changeAmout })}
                decreaseColor={() => dispatch({ type: 'blue', paylod: -1 * changeAmout })}
            />
            <ColorSquare bgColor={color} />
        </View>
    )
}

export default ReducerComp