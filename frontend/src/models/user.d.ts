interface IUser {
  userId: string;
  name: string;
  surname: string;
  level: string;
  profileImage: string;
}

type TUserRestrictions = {
  type: string;
  message: string;
}[];

export type { IUser, TUserRestrictions };
