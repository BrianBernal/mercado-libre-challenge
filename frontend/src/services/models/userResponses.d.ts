interface IUserResponse {
  user_id: number;
  name: string;
  surname: string;
  level: string;
  profile_image: string;
}

interface IUserRestrictionsResponse {
  type: string;
  message: string;
}

export type { IUserResponse, IUserRestrictionsResponse };
