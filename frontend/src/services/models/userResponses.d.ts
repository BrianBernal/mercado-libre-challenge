interface IUserResponse {
  user_id: number | string;
  name: string;
  surname: string;
  level: string;
  profile_image: string;
}

type TUserRestrictionsResponse = {
  type: string;
  message: string;
}[];

export type { IUserResponse, TUserRestrictionsResponse };
