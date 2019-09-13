import {createStore} from "redux";

//Redux state 
const initialState = {
    name: "",
    address: "",
    city: "",
    state: "",
    zipcode: 0,
    image: "",
    houses: [],
    newListing: []
};

//Action types
export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const UPDATE_CITY = "UPDATE_CITY";
export const UPDATE_STATE = "UPDATE_STATE";
export const UPDATE_ZIPCODE = "UPDATE_ZIPCODE";
export const UPDATE_IMAGE = "UPDATE_IMAGE";
export const ADD_LISTING = "ADD_LISTING";
export const ADD_HOUSES = "ADD_HOUSES";

function reducer(state=initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case ADD_HOUSES:
            const newHouses = [...state.houses, payload];
            return {...state, houses: newHouses};
        default: 
            return state;
    }
}

export default createStore(reducer);