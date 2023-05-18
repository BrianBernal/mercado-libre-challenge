// components
import PurchasesList from "../../features/purchasesList/PurchasesList";
import UserInfo from "../../features/userInfo/UserInfo";

function Profile() {
  return (
    <div className="container">
      <UserInfo />
      <PurchasesList />
    </div>
  );
}
export default Profile;
