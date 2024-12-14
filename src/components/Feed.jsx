import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const feedData = async () => {
    if (feed) return;
    try {
      const res = await axios.get(
        BASE_URL + "feed",

        { withCredentials: true }
      );
      dispatch(addFeed(res?.data?.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    feedData();
  }, []);
  console.log(feed);
  return (
    feed && (
      <div className="flex justify-center">
        <UserCard user={feed[0]} />
      </div>
    )
  );
};

export default Feed;
