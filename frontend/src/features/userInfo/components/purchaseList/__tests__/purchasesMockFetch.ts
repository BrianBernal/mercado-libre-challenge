// services
import { BACKEND_BASE_URL, SERVICE_URL } from "@/services/httpUtils";
import { fetchMocker } from "@/setupTest/setupVitest";

// models
import { ICompleteShipmentResponse } from "@/services/models/completePurchasesResponse";

const purchases: ICompleteShipmentResponse = {
  total: 10,
  offset: 0,
  limit: 10,
  data: [
    {
      purchase_id: 300200,
      title: "Celular LG K40",
      cost: {
        total: 105000,
        currency: "ARS",
      },
      amount: 3,
      date: "2022-07-25T10:23:18.000-03:00",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_969645-MLA46877067884_072021-V.webp",
      seller: {
        id: 4010,
        nickname: "FAROCUDR19",
      },
      transaction: {
        shipment_id: 1000010200,
        status: "cancelled",
      },
      payment: {
        transaction_id: 7010200,
        status: "rejected",
      },
    },
    {
      purchase_id: 300199,
      title: "Apple iPhone 13 Pro Max 2565gb-incluye Cargador -1 Año Gtia.",
      cost: {
        total: 629999.99,
        currency: "ARS",
      },
      amount: 1,
      date: "2022-07-25T10:03:18.000-03:00",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_753104-MLA47778455981_102021-V.webp",
      seller: {
        id: 4009,
        nickname: "ELECTROMIAMI123",
      },
      transaction: {
        shipment_id: 1000010199,
        status: "cancelled",
      },
      payment: {
        transaction_id: 7010199,
        status: "cancelled",
      },
    },
    {
      purchase_id: 300198,
      title: "Celular Xiaomi Mi A1 Rojo Dual Sim 64 Gb 4 Gb Ram + Liberado",
      cost: {
        total: 45998,
        currency: "ARS",
      },
      amount: 2,
      date: "2022-07-20T08:10:27.000-03:00",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_774489-MLA49425273867_032022-V.webp",
      seller: {
        id: 4008,
        nickname: "ABC_MAC",
      },
      transaction: {
        shipment_id: 1000010198,
        status: "delivered",
      },
      payment: {
        transaction_id: 7010198,
        status: "completed",
      },
    },
    {
      purchase_id: 300197,
      title: "Samsung Galaxy J7 Prime 32gb Celular Refabricado Liberado",
      cost: {
        total: 69999.99,
        currency: "ARS",
      },
      amount: 1,
      date: "2022-07-19T12:17:47.000-03:00",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_972544-MLA44403030842_122020-V.webp",
      seller: {
        id: 4007,
        nickname: "AIR-VISION",
      },
      transaction: {
        shipment_id: 1000010197,
        status: "delivered",
      },
      payment: {
        transaction_id: 7010197,
        status: "completed",
      },
    },
    {
      purchase_id: 300196,
      title: "Celular Samsung Galaxy J7 Pro 32gb 3gb Ram Refabricado Rosa",
      cost: {
        total: 34999.89,
        currency: "ARS",
      },
      amount: 1,
      date: "2022-07-19T10:28:59.000-03:00",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_976643-MLA49667022507_042022-V.webp",
      seller: {
        id: 4007,
        nickname: "AIR-VISION",
      },
      transaction: {
        shipment_id: 1000010196,
        status: "delivered",
      },
      payment: {
        transaction_id: 7010196,
        status: "completed",
      },
    },
    {
      purchase_id: 300195,
      title: "Samsung Galaxy S8 Sm-g950f Refabricado Outlet 64gb 4gb Ram",
      cost: {
        total: 44999.99,
        currency: "ARS",
      },
      amount: 1,
      date: "2022-07-01T01:52:10.000-03:00",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_634516-MLA31352746382_072019-V.webp",
      seller: {
        id: 4007,
        nickname: "AIR-VISION",
      },
      transaction: {
        shipment_id: 1000010195,
        status: "cancelled",
      },
      payment: {
        transaction_id: 7010195,
        status: "cancelled",
      },
    },
    {
      purchase_id: 300194,
      title:
        "Xiaomi Redmi Note 10 Pro (Global) Dual SIM 128 GB gris ónix 6 GB RAM",
      cost: {
        total: 114999.99,
        currency: "ARS",
      },
      amount: 1,
      date: "2022-06-28T05:15:47.000-03:00",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_689330-MLA50263507908_062022-V.webp",
      seller: {
        id: 4008,
        nickname: "ABC_MAC",
      },
      transaction: {
        shipment_id: 1000010194,
        status: "delivered",
      },
      payment: {
        transaction_id: 7010194,
        status: "completed",
      },
    },
    {
      purchase_id: 300193,
      title: "Celular Samsung Galaxy A51 128gb Refabricado Liberado",
      cost: {
        total: 109999.99,
        currency: "ARS",
      },
      amount: 1,
      date: "2022-05-15T12:11:10.000-03:00",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_720907-MLA46771068666_072021-V.webp",
      seller: {
        id: 4007,
        nickname: "AIR-VISION",
      },
      transaction: {
        shipment_id: 1000010193,
        status: "cancelled",
      },
      payment: {
        transaction_id: 7010193,
        status: "rejected",
      },
    },
    {
      purchase_id: 300192,
      title: "Celular Samsung Galaxy S9 Plus 64gb 6gb Ram Refabricado",
      cost: {
        total: 99999.99,
        currency: "ARS",
      },
      amount: 1,
      date: "2022-05-12T15:20:41.000-03:00",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_653155-MLA31643083447_072019-V.webp",
      seller: {
        id: 4007,
        nickname: "AIR-VISION",
      },
      transaction: {
        shipment_id: 1000010192,
        status: "cancelled",
      },
      payment: {
        transaction_id: 7010192,
        status: "rejected",
      },
    },
    {
      purchase_id: 300191,
      title: "Samsung Galaxy S20 FE 128 GB cloud navy 6 GB RAM",
      cost: {
        total: 155500,
        currency: "ARS",
      },
      amount: 1,
      date: "2022-04-23T13:31:43.000-03:00",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_995741-MLA47861036467_102021-V.webp",
      seller: {
        id: 4006,
        nickname: "JUEGOSSTATION",
      },
      transaction: {
        shipment_id: 1000010191,
        status: "delivered",
      },
      payment: {
        transaction_id: 7010191,
        status: "completed",
      },
    },
  ],
};

function purchasesMockFetch(itemsPerPage: number) {
  let response = {
    data: [] as typeof purchases.data,
    limit: 0,
    offset: 0,
    total: 0,
  };
  if (purchases.data.length >= itemsPerPage && itemsPerPage >= 0) {
    response = {
      ...purchases,
      data: purchases.data.slice(0, itemsPerPage),
    };
  }

  fetchMocker.mockIf(BACKEND_BASE_URL, (req) => {
    console.log("mocked url:", req.url);

    if (
      req.url.match(new RegExp(SERVICE_URL.purchases)) &&
      req.method === "GET"
    ) {
      if (itemsPerPage > purchases.data.length && itemsPerPage > 0) {
        return { status: 400 };
      }
      console.log("successful response");

      return JSON.stringify(response);
    } else {
      return {
        status: 404,
        body: "Not Found",
      };
    }
  });

  fetchMocker.doMock();
  fetchMocker.enableMocks();
  return response;
}

export { purchasesMockFetch };
