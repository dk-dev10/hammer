import { GET_USERS, FETCHED_USERS, FETCHED_USER,GET_USER } from "../constants/Users";

export function fetchedUsers() {
  return {
    type: FETCHED_USERS,
  }
}

export function fetchedUser(id) {
  return {
    type: FETCHED_USER,
    payload: id
  }
}
export function getUsers(users) {
  return {
    type: GET_USERS,
    payload: users
  };
}
export function getUser(user) {
  return {
    type: GET_USER,
    payload: user
  };
}