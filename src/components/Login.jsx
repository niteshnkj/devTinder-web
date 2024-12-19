import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
//todo use a better component design for this part
//todo add confirm password input in signup page
const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [isSignupForm, setIsignupForm] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      navigate("/");
      console.log(res);
    } catch (error) {
      setError(error.response.data);
    }
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          firstName,
          lastName,
          emailId,
          password,
        },
        { withCredentials: true }
      );

      dispatch(addUser(res.data.data));
      navigate("/profile");
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <div className="flex justify-center  ">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              {isSignupForm ? "Signup Now !" : "Login now!"}
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form
              className="card-body"
              onSubmit={isSignupForm ? handleSignUp : handleLogin}
            >
              {isSignupForm && (
                <>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">First Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="input input-bordered"
                      required
                      value={firstName}
                      onChange={(e) => {
                        const value = e.target.value;
                        const capitalizedValue =
                          value.charAt(0).toUpperCase() +
                          value.slice(1).toLowerCase();
                        setFirstName(capitalizedValue);
                      }}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Last Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="input input-bordered"
                      required
                      value={lastName}
                      onChange={(e) => {
                        const value = e.target.value;
                        const capitalizedValue =
                          value.charAt(0).toUpperCase() +
                          value.slice(1).toLowerCase();
                        setLastName(capitalizedValue);
                      }}
                    />
                  </div>
                </>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                  value={emailId.toLowerCase()}
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              {error && (
                <p className="text-red-500 font-bold">Error: {error}</p>
              )}
              <div className="form-control mt-6">
                <button className="btn btn-primary">
                  {isSignupForm ? "Sign Up" : "Log In"}
                </button>
              </div>
              <div
                className="flex justify-center items-center cursor-pointer"
                onClick={() => setIsignupForm((prev) => !prev)}
              >
                {isSignupForm ? (
                  <p className="text-center my-5">
                    Already have an account? LogIn Now
                  </p>
                ) : (
                  <p className="text-center my-5">
                    Don&apos;t have an account? SignUp now
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
