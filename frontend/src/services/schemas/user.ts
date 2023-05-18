import { JSONSchemaType } from "ajv";
import { IUserResponse } from "../models/userResponses";

const userSchema: JSONSchemaType<IUserResponse> = {
  type: "object",
  properties: {
    user_id: { type: "integer" },
    name: { type: "string" },
    surname: { type: "string" },
    level: { type: "string" },
    profile_image: { type: "string" },
  },
  required: ["user_id", "name", "surname", "level", "profile_image"],
};

export { userSchema };
