import { INCRASE_COUNT, DECRASE_COUNT } from "../constants";

export const counter = (state = {count:0}, {type}) => {
    switch(type) {
        case INCRASE_COUNT: return {...state,count:state.count + 1}
        case DECRASE_COUNT: return {...state,count:state.count - 1}
        default: return state
    }
};
