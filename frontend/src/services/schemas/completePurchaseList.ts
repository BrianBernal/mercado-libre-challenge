import { JSONSchemaType } from "ajv";
import { ICompleteShipmentResponse } from "../models/completePurchasesResponse";

const completePurchaseListSchema: JSONSchemaType<ICompleteShipmentResponse> = {
  type: "object",
  properties: {
    data: {
      type: "array",
      items: {
        type: "object",
        properties: {
          purchase_id: { type: ["number", "string"] },
          title: { type: "string" },
          amount: { type: "number" },
          date: { type: "string" },
          image: { type: "string" },
          transaction: {
            type: "object",
            properties: {
              shipment_id: { type: ["number", "string"] },
              status: { type: "string" },
            },
            required: ["shipment_id", "status"],
          },
          cost: {
            type: "object",
            properties: {
              currency: { type: "string" },
              total: { type: "number" },
            },
            required: ["currency", "currency"],
          },
          payment: {
            type: "object",
            properties: {
              transaction_id: { type: ["number", "string"] },
              status: { type: "string" },
            },
            required: ["status", "transaction_id"],
          },
          seller: {
            type: "object",
            properties: {
              id: { type: ["number", "string"] },
              nickname: { type: "string" },
            },
            required: ["id", "nickname"],
          },
        },
        required: [
          "amount",
          "cost",
          "date",
          "image",
          "payment",
          "purchase_id",
          "seller",
          "title",
          "transaction",
        ],
      },
    },
    limit: { type: "integer" },
    offset: { type: "integer" },
    total: { type: "integer" },
  },
  required: ["data", "limit", "offset", "total"],
};

export { completePurchaseListSchema };
