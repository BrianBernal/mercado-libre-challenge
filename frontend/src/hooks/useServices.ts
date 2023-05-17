// types

// hooks
import useFetchService from "./useFetchService";

// services
import { userService } from "../services/backendServices";

const { fetchUser } = userService;

function useGetUser() {
  const initialState = {
    user_id: 0,
    name: "",
    surname: "",
    level: "",
    profile_image: "",
  };
  return useFetchService(fetchUser, { defaultResponse: initialState });
}

export { useGetUser };
