import COLORS from './colors'
export default (state, action) => {
    switch (action.type) {
      case "SET_CATEGORY":
        return {...state, category: action.value}
      case "SET_DIFFICULTY":
        return {...state, difficulty: action.value}
      case "SET_RESPONSE": 
        return { ...state, questionData: action.value, bgcolor: COLORS.new}
      case "SET_BGCOLOR":
        return { ...state, bgcolor: action.value}
      default:
        return state
    }
  }