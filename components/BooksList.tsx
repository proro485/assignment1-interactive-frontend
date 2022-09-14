import BookCard, { Book } from "./BookCard";

type Props = {
  books: Book[];
};

const BooksList = ({ books }: Props) => {
  return (
    <div className="my-10">
      <div className="mx-28 mb-5 text-3xl font-bold">Books</div>
      <div className="flex flex-wrap justify-center">
        {books.map((book, index) => {
          return <BookCard {...book} key={index} />;
        })}
      </div>
    </div>
  );
};

export default BooksList;
