import AuthorCard, { Author } from "./AuthorCard";

type Props = {
  authors: Author[];
};

const AuthorsList = ({ authors }: Props) => {
  return (
    <div className="my-10 mx-28">
      <div className="mb-5 text-3xl font-bold">Authors</div>
      <div className="flex flex-wrap justify-center">
        {authors.map((author, index) => {
          return <AuthorCard {...author} key={index} />;
        })}
      </div>
    </div>
  );
};

export default AuthorsList;
