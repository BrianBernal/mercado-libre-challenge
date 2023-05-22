// libraries
import "@testing-library/jest-dom";
import { cleanup, render, waitFor } from "@testing-library/react";

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

  it("should show default error when itemsPerPage prop is negative number", async () => {
    purchasesMockFetch(5);
    const { getByText } = render(<PurchaseList itemsPerPage={-1} userId="1" />);
    await waitFor(() => {
      expect(getByText(DEFAULT_ERROR)).toBeInTheDocument();
    });
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
