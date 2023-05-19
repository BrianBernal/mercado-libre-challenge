// styles
import "./rowItem.scss";

interface IRowItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
  date: Date;
  imageUrl: string;
  detailAction: (id: string) => void;
}

function RowItem({
  id,
  name,
  price,
  quantity,
  date,
  imageUrl,
  detailAction,
}: IRowItem) {
  const buttonHandler = () => {
    detailAction(id);
  };

  return (
    <div className="row-item">
      <div className="row-item__image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="row-item__details">
        <div className="row-item__title">{name}</div>
        <div className="row-item__price">{price}</div>
        <div className="row-item__date">{date.toLocaleString()}</div>
        <div className="row-item__quantity">Cantidad: {quantity}</div>
        <button className="row-item__button" onClick={buttonHandler}>
          See Detail
        </button>
      </div>
    </div>
  );
}
export default RowItem;
