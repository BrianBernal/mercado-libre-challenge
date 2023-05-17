// types

// hooks
import useFetchService from "./useFetchService";

// services
import { userService } from "../services/services";

const { fetchUser } = userService;

function useGetUser() {
  return useFetchService(fetchUser);
}

export { useGetUser };
