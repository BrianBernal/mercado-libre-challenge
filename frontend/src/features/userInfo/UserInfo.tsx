// hooks
import { useGetUser } from "../../hooks/useServices";

// styles
import "./userInfo.scss";

function UserInfo() {
  const { response, loading, error } = useGetUser();
  const { name, surname, level, profile_image } = response;

  if (loading) return <p>loading</p>;
  if (error && !loading) return <p>Error loading data</p>;

  return (
    <div className="user-container box">
      <img
        className="user-container__user-img"
        src={profile_image}
        alt="Profile Image"
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
