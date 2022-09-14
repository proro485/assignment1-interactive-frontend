import { useQueries } from "@tanstack/react-query";
import { NextPage } from "next";
import AuthorsList from "../components/AuthorsList";
import BooksList from "../components/BooksList";
import MagazinesList from "../components/MagazineList";

const Home: NextPage = () => {
  const queries = ["authors", "books", "magazines"];

  const dataQueries = useQueries({
    queries: queries.map((query) => {
      return {
        queryKey: [query],
        queryFn: async () => {
          const response = await fetch(`/api/${query}`);
          return response.json();
        },
      };
    }),
  });

  const [authorsQuery, booksQuery, magazinesQuery] = dataQueries;

  return (
    <div>
      {!authorsQuery.isLoading && (
        <AuthorsList authors={authorsQuery.data.data} />
      )}
      {!booksQuery.isLoading && <BooksList books={booksQuery.data.data} />}

      {!magazinesQuery.isLoading && (
        <MagazinesList magazines={magazinesQuery.data.data} />
      )}
    </div>
  );
};

export default Home;
