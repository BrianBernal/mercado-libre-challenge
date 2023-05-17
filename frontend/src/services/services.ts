// models

// utils
import { IUserResponse } from "../models/user";
import { SERVICE_URL, fetchJsonFromBackend } from "./httpUtils";

// ARTICLE SERVICES
function fetchUser() {
  return fetchJsonFromBackend<IUserResponse>(SERVICE_URL.users);
}

const userService = {
  fetchUser,
};

// const orderService = {
//   fetchOrders,
//   fetchNewOrder,
//   fetchEditOrder,
// };

export { userService };
