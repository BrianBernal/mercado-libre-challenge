// components
import { useGetPurchases } from "../../hooks/serviceHooks";

function PurchasesList() {
  const { response, loading, error } = useGetPurchases({ userId: "1" });
  console.log(response, loading, error);
  return <div>list</div>;
}
export default PurchasesList;
