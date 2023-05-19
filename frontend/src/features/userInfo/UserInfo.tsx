// hooks
import useFetchUser from "./useGetUser";

// styles
import "./userInfo.scss";

// components
import PurchasesList from "./purchaseList/PurchaseList";
import { FETCH_ERROR, PROFILE_ALT_TEXT } from "./constants";

function UserInfo() {
  const { response, loading, error } = useFetchUser();
  const { name, surname, level, profileImage, userId } = response;

  if (loading) return <p className="user-container box">loading</p>;
  if (error && !loading) {
    return <p className="user-container box warning-text">{FETCH_ERROR}</p>;
  }

  return (
    <div>
      <div className="user-container box">
        <img
          className="user-container__user-img"
          src={profileImage}
          alt={PROFILE_ALT_TEXT}
        />
        <p className="user-container__user-text">
          {name} {surname}
        </p>
        <p>
          Categoría: <b>{level}</b>
        </p>
      </div>
      <PurchasesList userId={userId} />
    </div>
  );
}

export default UserInfo;
