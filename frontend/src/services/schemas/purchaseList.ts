import { JSONSchemaType } from "ajv";
import { IPurchaseResponse } from "../models/purchasesResponse";

const purchaseListSchema: JSONSchemaType<IPurchaseResponse> = {
  type: "object",
  properties: {
    data: {
      type: "array",
      items: {
        type: "object",
        properties: {
          purchase_id: { type: "number" },
          title: { type: "string" },
          amount: { type: "number" },
          date: { type: "string" },
          image: { type: "string" },
          transaction_id: { type: "number" },
          shipment_id: { type: "integer" },
          cost: {
            type: "object",
            properties: {
              total: { type: "number" },
              currency: { type: "string" },
            },
            required: ["total", "currency"],
          },
          seller: {
            type: "object",
            properties: {
              id: { type: "number" },
              nickname: { type: "string" },
            },
            required: ["id", "nickname"],
          },
        },
        required: [
          "amount",
          "date",
          "image",
          "purchase_id",
          "seller",
          "shipment_id",
          "title",
          "transaction_id",
        ],
      },
    },
    limit: { type: "integer" },
    offset: { type: "integer" },
    total: { type: "integer" },
  },
  required: ["total", "offset", "limit", "data"],
};

export { purchaseListSchema };
