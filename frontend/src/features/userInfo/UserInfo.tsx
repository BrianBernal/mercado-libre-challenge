// hooks
import { useGetUser } from "../../hooks/serviceHooks";

// styles
import "./userInfo.scss";

const PROFILE_ALT_TEXT = "Profile Image";
const FETCH_ERROR = "No se ha cargado el usuario.";

function UserInfo() {
  const { response, loading, error } = useGetUser();
  const { name, surname, level, profileImage } = response;

  if (loading) return <p className="user-container box">loading</p>;
  if (error && !loading) {
    return <p className="user-container box warning-text">{FETCH_ERROR}</p>;
  }

  return (
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
  );
}

export default UserInfo;
export { PROFILE_ALT_TEXT, FETCH_ERROR };
