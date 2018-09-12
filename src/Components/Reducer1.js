import { alertConstant } from './conastant';

function alert (state={}, action){
    switch(action.type) {

        case alertConstant.SUCCESS :
        return {
            type : 'alert-success',
            payload : action.meassage
        };
        case alertConstant.ERROR :
        return {
            type : 'alert-danger',
            payload : action.meassage
        };
        case alertConstant.CLEAR :
        return {};
        default:
        return state;


    }
}

export {alert as alert};