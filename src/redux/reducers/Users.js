import { FETCHED_USERS, GET_USER, GET_USERS, FETCHED_USER } from "redux/constants/Users"

const initState = {
  users: {
    loading: false,
    error: null,
    success: false,
    data: []
  },

  user: {
    loading: false,
    error: null,
    data: null,
    success: false,
  }
}

const user = (state = initState, action) => {
  switch (action.type) {
    case FETCHED_USERS:
      return {
        ...state,
        users: {
          ...state.users,
          loading: true
        },
      }

    case GET_USERS:
      return {
        ...state,
        users: {
          loading: false,
          errro: null,
          data: [...action.payload]
        }
      }
    case FETCHED_USER:
      return {
        ...state,
        user: {
          ...state.user,
          loading: true,
        },
      }
    case GET_USER:
      return {
        ...state,
        user: {
          loading: false,
          error: null,
          success: true,
          data: action.payload // можно получить юзера из массива в user.data перебирая через Array.filter()
        }
      }

    default:
      return state;
  }
}

export default user