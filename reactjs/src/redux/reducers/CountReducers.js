
let initialState = {count:0, timer:1000}
function CountReducer(state = initialState, action){
    switch(action.type){
        case 'INC':
            return {...state, count:state.count +1}
    }
}

export default CountReducer;