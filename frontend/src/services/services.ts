// models

// utils
import { SERVICE_URL, fetchJsonFromBackend } from "./httpUtils";

// ARTICLE SERVICES
function fetchUser() {
  return fetchJsonFromBackend(SERVICE_URL.users);
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
