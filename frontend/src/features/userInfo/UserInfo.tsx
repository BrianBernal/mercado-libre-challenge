// hooks
import useFetchUser from "./useGetUser";

// styles
import "./userInfo.scss";

// components
import PurchasesList from "./purchaseList/PurchaseList";
import { FETCH_ERROR } from "./constants";

function UserInfo() {
  const { response, loading, error } = useFetchUser();
  const { name, surname, level, profileImage, userId } = response;

  if (loading) return <p className="profile-card box">loading</p>;
  if (error && !loading) {
    return <p className="profile-card warning-text">{FETCH_ERROR}</p>;
  }

  return (
    <>
      <div className="profile-card">
        <img src={profileImage} alt={name} className="profile-card__image" />
        <div className="profile-card__details">
          <h3 className="profile-card__name">
            {name} {surname}
          </h3>
          <p className="profile-card__level">Nivel: {level}</p>
        </div>
      </div>
      <PurchasesList userId={userId} />
    </>
  );
}

export default UserInfo;
