import { SET_LYRICS } from '../constants';

const initialState = { text: '' };

export default function reducer(prevState = initialState, action) {
    switch (action.type) {
        case SET_LYRICS:
            return Object.assign({}, prevState, { text: action.lyric })
        default:
            return prevState;

    }



}

// Two things to note: 
//   1. We use Object.assign to maintain immutability.
//      Since our state only has one key on it, it doesn't matter much, but what if we added more?
//   2. If we receive an action that doesn't have a type we recognize, we return the previous state