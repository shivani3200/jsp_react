function CountReducer(state, action) {
  switch (action.type) {
    case "INCBY1":
      return { count: state.count + 1 };
    case "INCBY2":
      return { count: state.count + 2 };
    case "INCBY5":
      return { count: state.count + 5 };
    case "INCBY10":
      return { count: state.count + 10 };
    case 'INCBY':
        return {
            count:state.count + action.payload
        }
    case 'RESET':
      return {count:0}
    default:
      return state;
  }
}

export default CountReducer;