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
  paymentId: string;
}
function PurchaseDetail({
  purchaseId,
  imageSrc,
  date,
  sellerName,
  cost,
  quantity,
  shipmentId,
  paymentId,
}: IPurchaseDetail) {
  return (
    <div className="card">
      <div className="card__content">
        <img className="card__image" src={imageSrc} alt="Product Image" />
        <div className="card__details">
          <div className="card__header">
            <h3 className="card__title">{sellerName}</h3>
            <p className="card__purchase-id">Purchase ID: {purchaseId}</p>
          </div>
          <div className="card__info">
            <p className="card__date">Date: {date}</p>
            <p className="card__cost">Cost: {cost}</p>
            <p className="card__quantity">Quantity: {quantity}</p>
          </div>
          <div className="card__footer">
            <p className="card__shipment-id">Shipment ID: {shipmentId}</p>
            <p className="card__payment-id">Payment ID: {paymentId}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseDetail;
