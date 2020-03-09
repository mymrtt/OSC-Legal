export const newUser = {
  type: "NEW_USER"
};

const initialState = {
  users: [{}]
};
const SignUpReducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_USER":
      return { ...state, users: state.users };
    default:
      return state;
  }
};

export default SignUpReducer;
