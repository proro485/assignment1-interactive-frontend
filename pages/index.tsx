import { useQueries } from "@tanstack/react-query";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import AuthorsList from "../components/AuthorsList";
import BooksList from "../components/BooksList";
import MagazinesList from "../components/MagazineList";
import Search from "../components/Search";

const Home: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [queryType, setQueryType] = useState("email");

  const [sortByTitle, setSortByTitle] = useState(false);

  const queries = ["authors", "books", "magazines"];

  const [authorsQuery, booksQuery, magazinesQuery] = useQueries({
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

  useEffect(() => {
    if (!sortByTitle) {
      booksQuery.refetch();
      magazinesQuery.refetch();
    }
  }, [sortByTitle]);

  return (
    <div>
      <Search
        query={searchQuery}
        setQuery={setSearchQuery}
        queryType={queryType}
        setQueryType={setQueryType}
        sortByTitle={sortByTitle}
        setSortByTitle={setSortByTitle}
      />
      {!searchQuery.length && !authorsQuery.isLoading && (
        <AuthorsList authors={authorsQuery.data.data} />
      )}
      {!booksQuery.isLoading && (
        <BooksList
          type={queryType}
          query={searchQuery}
          sortByTitle={sortByTitle}
          books={booksQuery.data.data}
        />
      )}

      {!magazinesQuery.isLoading && (
        <MagazinesList
          type={queryType}
          query={searchQuery}
          sortByTitle={sortByTitle}
          magazines={magazinesQuery.data.data}
        />
      )}
    </div>
  );
};

export default Home;
