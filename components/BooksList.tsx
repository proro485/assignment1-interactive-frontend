import BookCard, { Book } from "./BookCard";

type Props = {
  books: Book[];
  type: string;
  query: string;
  sortByTitle: boolean;
};

const BooksList = ({ books, type, query, sortByTitle }: Props) => {
  if (sortByTitle) {
    books.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <div className="my-10">
      <div className="mx-28 mb-5 text-3xl font-bold">Books</div>
      <div className="flex flex-wrap justify-center">
        {books.map((book, index) => {
          let condition = true;

          if (query.length) {
            condition =
              (type === "isbn" && book.isbn.includes(query)) ||
              (type === "email" && book.authors.includes(query));
          }

          return condition && <BookCard {...book} key={index} />;
        })}
      </div>
    </div>
  );
};

export default BooksList;
