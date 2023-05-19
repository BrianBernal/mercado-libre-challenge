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
    <div>
      <p># {purchaseId}</p>
      <p>{imageSrc}</p>
      <p>{date}</p>
      <p>Vendedor: {sellerName}</p>
      <p>{cost}</p>
      <p>Cantidad: {quantity}</p>
      <p>Estado del pago: {shipmentId}</p>
      <p>Estado del envío: {paymentId}</p>
    </div>
  );
}

export default PurchaseDetail;
