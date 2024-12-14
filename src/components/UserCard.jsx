// eslint-disable-next-line react/prop-types
const UserCard = ({ user }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      {/* //Todo build upload profile picture feature */}
      <figure>
        <img src={photoUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {firstName} {lastName}
        </h2>
        <p>{age + " " + gender}</p>
        <p>{about}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary">Ignore</button>
          <button className="btn btn-primary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
