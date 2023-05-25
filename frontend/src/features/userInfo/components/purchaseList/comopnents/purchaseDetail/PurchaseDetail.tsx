// styles
import "./purchaseDetail.scss";

interface IPurchaseDetail {
  purchaseId: string;
  imageSrc: string;
  date: string;
  sellerName: string;
  cost: string;
  quantity: number;
  shipmentStatus: string;
  paymentStatus: string;
}
function PurchaseDetail({
  purchaseId,
  imageSrc,
  date,
  sellerName,
  cost,
  quantity,
  shipmentStatus,
  paymentStatus,
}: IPurchaseDetail) {
  return (
    <div className="card">
      <div className="card__content">
        <img className="card__image" src={imageSrc} alt="Product Image" />
        <div className="card__details">
          <div className="card__header">
            <h3 className="card__title">Vendedor: {sellerName}</h3>
            <p className="card__purchase-id">ID: {purchaseId}</p>
          </div>
          <div className="card__info">
            <p className="card__date">Fecha: {date}</p>
            <p className="card__cost">Costo: {cost}</p>
            <p className="card__quantity">Cantidad: {quantity}</p>
          </div>
          <div className="card__footer">
            <p className="card__shipment-id">
              Estado del envío: {shipmentStatus}
            </p>
            <p className="card__payment-id">Estado del pago: {paymentStatus}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseDetail;
