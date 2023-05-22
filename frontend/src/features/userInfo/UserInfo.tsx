// hooks
import useFetchUser from "./hooks/useFetchUser";
import useFetchUserRestrictions from "./hooks/useFetchUserRestrictions";

// styles
import "./userInfo.scss";

// components
import { FETCH_ERROR } from "./constants";
import PurchaseList from "./components/purchaseList/PurchaseList";

function UserInfo() {
  const {
    response: userResponse,
    loading: userLoading,
    error: userError,
  } = useFetchUser();
  const { response: restrictionsResponse, loading: restrictionsLoading } =
    useFetchUserRestrictions(userResponse.userId);
  const { name, surname, level, profileImage, userId } = userResponse;

  if (userLoading) return <p className="profile-card box">loading</p>;
  if (userError && !userLoading) {
    return <p className="profile-card warning-text">{FETCH_ERROR}</p>;
  }

  const restrictionMessage = restrictionsLoading
    ? "loading..."
    : restrictionsResponse.map((restriction) => {
        const className = restriction.type === "warning" ? "warning-text" : "";
        return (
          <span key={restriction.message} className={className}>
            {restriction.message}.{" "}
          </span>
        );
      });

  return (
    <>
      <div className="profile-card">
        <img src={profileImage} alt={name} className="profile-card__image" />
        <div className="profile-card__details">
          <h3 className="profile-card__name">
            {name} {surname}
          </h3>
          <p className="profile-card__level">Nivel: {level}</p>
          <p className="profile-card__level">
            Restricciones: <i>{restrictionMessage}</i>
          </p>
        </div>
      </div>
      <PurchaseList userId={userId} itemsPerPage={3} />
    </>
  );
}

export default UserInfo;
