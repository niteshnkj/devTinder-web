/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";
import UserCard from "./UserCard";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "");
  const [photoUrl, setphotoUrl] = useState(user.photoUrl || "");
  const [about, setAbout] = useState(user.about || "");
  const [skills, setSkills] = useState(user.skills || "");
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();
  const updateProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        BASE_URL + "profile/edit",
        { firstName, lastName, photoUrl, age, gender, about, skills },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      //todo set better error message
      setError(error.response.data);
    }
  };
  //todo fix css of this file
  return (
    <div>
      <div className="flex justify-center gap-20 my-10">
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body justify-center">
            <h2 className="card-title">Edit Profile</h2>
            <div className="card bg-base-100 w-96 flex gap-4">
              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">First Name:</span>
                </div>
                <input
                  type="text"
                  placeholder="firstName"
                  className="input input-bordered w-full max-w-xs"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">Last Name:</span>
                </div>
                <input
                  type="text"
                  placeholder="LastName"
                  className="input input-bordered w-full max-w-xs"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">photoUrl:</span>
                </div>
                {/* //Todo upload profile picture */}
                <input
                  type="text"
                  placeholder="photoUrl"
                  className="input input-bordered w-full max-w-xs"
                  value={photoUrl}
                  onChange={(e) => setphotoUrl(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">Your skills:</span>
                </div>
                {/* //Todo take an array of skills and send it to backend use select option for skills */}
                <input
                  type="text"
                  placeholder="Skills"
                  className="input input-bordered w-full max-w-xs"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">Your Age:</span>
                </div>
                <input
                  type="text"
                  placeholder="age"
                  className="input input-bordered w-full max-w-xs"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">Your Gender:</span>
                </div>
                <select
                  className="select select-bordered w-full max-w-xs"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option disabled selected>
                    {(gender && user.gender) || "select your gender"}
                  </option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                  <option value="others">others</option>
                </select>
              </label>
              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">About:</span>
                </div>
                <textarea
                  className="textarea textarea-ghost"
                  placeholder="Write about yourself."
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                ></textarea>
              </label>
              {error && (
                <p className="text-red-500 font-bold">Error: {error}</p>
              )}
            </div>
            <div className="card-actions justify-center">
              <button className="btn btn-primary" onClick={updateProfile}>
                save profile
              </button>
            </div>
          </div>
        </div>
        <div>
          <UserCard
            user={{ firstName, lastName, photoUrl, age, gender, about, skills }}
          />
        </div>
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile Saved Sucessfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
