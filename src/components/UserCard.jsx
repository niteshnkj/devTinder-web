import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utils/feedSlice";

// eslint-disable-next-line react/prop-types
const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line react/prop-types
  const { _id, firstName, lastName, photoUrl, age, gender, about, skills } =
    user;
  const handleConnectionRequest = async (status, id) => {
    try {
      await axios.post(
        BASE_URL + "/request/send/" + status + "/" + id,
        {},
        { withCredentials: true }
      );
      dispatch(removeFeed(_id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      {/* //Todo build upload profile picture feature */}
      <figure>
        <img src={photoUrl} alt="photoUrl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {firstName} {lastName}
        </h2>
        {skills && <p>{skills}</p>}
        {age && gender && <p>{age + " " + gender}</p>}
        <p>{about}</p>
        <div className="card-actions justify-center my-4">
          <button
            className="btn btn-secondary"
            onClick={() => handleConnectionRequest("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleConnectionRequest("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
