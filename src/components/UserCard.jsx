// eslint-disable-next-line react/prop-types
const UserCard = ({ user }) => {
  // eslint-disable-next-line react/prop-types
  const { firstName, lastName, photoUrl, age, gender, about, skills } = user;

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
          <button className="btn btn-secondary">Ignore</button>
          <button className="btn btn-primary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
