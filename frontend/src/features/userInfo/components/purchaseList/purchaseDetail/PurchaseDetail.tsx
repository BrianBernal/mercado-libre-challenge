// hooks
import { useFetchPaymentStatus } from "./hooks/useFetchPaymentState";
import { useFetchShipmentStatus } from "./hooks/useFetchShipmentStatus";

// styles
import "./purchaseDetail.scss";

interface IPurchaseDetail {
  purchaseId: string;
  imageSrc: string;
  date: string;
  sellerName: string;
  cost: string;
  quantity: number;
  shipmentId: string;
  transactionId: string;
}
function PurchaseDetail({
  purchaseId,
  imageSrc,
  date,
  sellerName,
  cost,
  quantity,
  shipmentId,
  transactionId,
}: IPurchaseDetail) {
  const { response: shipmentStatusResponse, loading: shipmentStatusLoading } =
    useFetchShipmentStatus(shipmentId);

  const { response: paymentStatusResponse, loading: paymentStatusLoading } =
    useFetchPaymentStatus(transactionId);

  const shipmentMessage = shipmentStatusLoading
    ? "loading..."
    : shipmentStatusResponse.status;

  const paymentMessage = paymentStatusLoading
    ? "loading..."
    : paymentStatusResponse.status;

  return (
    <div className="card">
      <div className="card__content">
        <img className="card__image" src={imageSrc} alt="Product Image" />
        <div className="card__details">
          <div className="card__header">
            <h3 className="card__title">{sellerName}</h3>
            <p className="card__purchase-id">ID: {purchaseId}</p>
          </div>
          <div className="card__info">
            <p className="card__date">Fecha: {date}</p>
            <p className="card__cost">Costo: {cost}</p>
            <p className="card__quantity">Cantidad: {quantity}</p>
          </div>
          <div className="card__footer">
            <p className="card__shipment-id">
              Estado del envío: {shipmentMessage}
            </p>
            <p className="card__payment-id">
              Estado del pago: {paymentMessage}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseDetail;
