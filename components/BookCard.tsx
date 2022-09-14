export type Book = {
  title: string;
  authors: string;
  description: string;
  isbn: string;
};

const BookCard = ({ title, authors, description, isbn }: Book) => {
  return (
    <div className="card m-3 w-1/5 bg-neutral shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-white">{title}</h2>
        <div className="mt-2 space-y-1">
          <p>Authors : {authors.split(",").join(", ")}</p>
          <p>ISBN : {isbn}</p>
          <p>Description : {description.split(" ").splice(1, 30).join(" ")}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
