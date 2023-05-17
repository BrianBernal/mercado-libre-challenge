import { IUserResponse } from "./models/userResponses";

function userAdapter(dataResponse: IUserResponse) {
  const { level, name, profile_image, surname, user_id } = dataResponse;
  try {
    const adaptedData = { level, name, profile_image, surname, user_id };
    return adaptedData;
  } catch (error) {
    throw Error("Error adapting the api response");
  }
}

export { userAdapter };
