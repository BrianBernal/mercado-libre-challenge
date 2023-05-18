// components
import { useGetPurchases } from "../../../hooks/serviceHooks";

function PurchasesList({ userId }: { userId: string }) {
  const { response, loading, error } = useGetPurchases({
    userId: userId,
    limit: 2,
    page: 1,
  });
  console.log(response, loading, error);
  return <div>list</div>;
}
export default PurchasesList;
