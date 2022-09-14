export type Author = {
  email: string;
  firstname: string;
  lastname: string;
};

const AuthorCard = ({ email, firstname, lastname }: Author) => {
  return (
    <div className="card m-3 w-1/4 bg-neutral shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-white">
          {firstname} {lastname}
        </h2>
        <div className="mt-2">
          <p>Email : {email}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
