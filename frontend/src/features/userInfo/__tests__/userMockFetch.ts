// services
import { BACKEND_BASE_URL, SERVICE_URL } from "@/services/httpUtils";
import { fetchMocker } from "@/setupTest/setupVitest";

// models
import { IUserResponse } from "@/services/models/userResponses";

const userResponseMock: IUserResponse = {
  user_id: 1,
  name: "Brian",
  surname: "Bernal",
  level: "Senior Frontend",
  profile_image: "https://avatars.githubusercontent.com/u/32085186?v=4",
};

function userMockFetch() {
  fetchMocker.mockIf(BACKEND_BASE_URL, (req) => {
    console.log("mocked url:", req.url);

    if (req.url.endsWith(SERVICE_URL.users) && req.method === "GET") {
      return JSON.stringify(userResponseMock);
    } else {
      return {
        status: 404,
        body: "Not Found",
      };
    }
  });
  fetchMocker.doMock();
  fetchMocker.enableMocks();
  return userResponseMock;
}

export { userMockFetch };
