import { useQueries } from "@tanstack/react-query";
import { NextPage } from "next";
import { useState } from "react";
import AuthorsList from "../components/AuthorsList";
import BooksList from "../components/BooksList";
import MagazinesList from "../components/MagazineList";
import Search from "../components/Search";

const Home: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [queryType, setQueryType] = useState("email");

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

  return (
    <div>
      <Search
        query={searchQuery}
        setQuery={setSearchQuery}
        queryType={queryType}
        setQueryType={setQueryType}
      />
      {!searchQuery.length && !authorsQuery.isLoading && (
        <AuthorsList authors={authorsQuery.data.data} />
      )}
      {!booksQuery.isLoading && (
        <BooksList
          type={queryType}
          query={searchQuery}
          books={booksQuery.data.data}
        />
      )}

      {!magazinesQuery.isLoading && (
        <MagazinesList
          type={queryType}
          query={searchQuery}
          magazines={magazinesQuery.data.data}
        />
      )}
    </div>
  );
};

export default Home;
