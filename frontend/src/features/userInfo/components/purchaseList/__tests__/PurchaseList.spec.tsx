// libraries
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";

// components
import { DEFAULT_ERROR } from "../hooks/useFetchPurchaseList";
import PurchaseList from "../PurchaseList";

// mock api
import { purchasesMockFetch } from "./purchasesMockFetch";
import { fetchMocker } from "@/setupTest/setupVitest";
import { resetBackendFetchMock } from "@/setupTest/resetBackendFetchMock";

afterEach(() => {
  resetBackendFetchMock();
});

describe("<PurchaseList /> happy paths", () => {
  it("should render purchase list component", () => {
    purchasesMockFetch(4);
    render(<PurchaseList userId="1" itemsPerPage={4} />);
  });

  it("should show correct message when there is no shipments yet.", async () => {
    purchasesMockFetch(0);
    const { getByText, queryByText } = render(
      <PurchaseList itemsPerPage={10} userId="1" />
    );
    await waitFor(() => {
      expect(getByText("Aun no tienes compras.")).toBeInTheDocument();
    });
    expect(queryByText("Ver detalle")).toBeNull();

    fetchMocker.resetMocks();
  });

  it("should show default error when itemsPerPage prop is negative number.", async () => {
    purchasesMockFetch(5);
    const { getByText } = render(<PurchaseList itemsPerPage={-1} userId="1" />);
    await waitFor(() => {
      expect(getByText(DEFAULT_ERROR)).toBeInTheDocument();
    });
  });

  it("should render as many rows as indicated in the itemsPerPage prop.", async () => {
    for (let i = 1; i <= 10; i++) {
      purchasesMockFetch(i);
      const { getAllByText } = render(
        <PurchaseList itemsPerPage={i} userId="1" />
      );
      await waitFor(() => {
        expect(getAllByText("Ver detalle")).toHaveLength(i);
      });

      fetchMocker.resetMocks();
      cleanup();
    }
  });

  it("should open detail panel of the corresponding shipment row", async () => {
    const ITEMS_PER_PAGE = 4;
    const shipmentsListResponse = purchasesMockFetch(ITEMS_PER_PAGE);
    const { getAllByText, getByText } = render(
      <PurchaseList userId="1" itemsPerPage={ITEMS_PER_PAGE} />
    );
    let rowButtons: HTMLElement[] = [];
    await waitFor(() => {
      expect(getAllByText("Ver detalle")).toHaveLength(ITEMS_PER_PAGE);
    });
    rowButtons = getAllByText("Ver detalle");
    for (let i = 1; i < ITEMS_PER_PAGE; i++) {
      fireEvent.click(rowButtons[i]);
      await waitFor(() => {
        expect(getByText("X")).toBeInTheDocument();
        expect(
          getByText(
            `Vendedor: ${shipmentsListResponse.data[i].seller.nickname}`
          )
        ).toBeInTheDocument();
      });
      fireEvent.click(getByText("X"));
    }
  });
});

describe("<PurchaseList /> UNhappy paths", () => {
  it("should render default error", async () => {
    fetchMocker.mockReject();
    const { getByText } = render(<PurchaseList itemsPerPage={1} userId="1" />);
    await waitFor(() => {
      expect(getByText(DEFAULT_ERROR)).toBeInTheDocument();
    });
  });
});
