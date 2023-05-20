import { JSONSchemaType } from "ajv";
import {
  IUserResponse,
  TUserRestrictionsResponse,
} from "../models/userResponses";

const userSchema: JSONSchemaType<IUserResponse> = {
  type: "object",
  properties: {
    user_id: { type: ["number", "string"] },
    name: { type: "string" },
    surname: { type: "string" },
    level: { type: "string" },
    profile_image: { type: "string" },
  },
  required: ["user_id", "name", "surname", "level", "profile_image"],
};

const userRestrictionsSchema: JSONSchemaType<TUserRestrictionsResponse> = {
  type: "array",
  items: {
    type: "object",
    properties: {
      type: { type: "string" },
      message: { type: "string" },
    },
    required: ["message", "type"],
  },
};

export { userSchema, userRestrictionsSchema };
