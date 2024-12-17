import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";

const Profile = () => {
  //todo show profile and update profile
  const user = useSelector((store) => store.user);
  return (
    user && (
      <div>
        <EditProfile user={user} />
      </div>
    )
  );
};

export default Profile;
