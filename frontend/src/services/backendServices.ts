// models
import { IUserResponse } from "./models/userResponses";

// utils
import { SERVICE_URL, fetchJsonFromBackend } from "./httpUtils";
import { userAdapter } from "./adapters";
import { IUser } from "../models/user";

// ARTICLE SERVICES
function fetchUser(): Promise<IUser> {
  return fetchJsonFromBackend<IUserResponse>(SERVICE_URL.users).then(
    userAdapter
  );
}

const userService = {
  fetchUser,
};

export { userService };
