import MagazineCard, { Magazine } from "./MagazineCard";

type Props = {
  magazines: Magazine[];
  type: string;
  query: string;
  sortByTitle: boolean;
};

const MagazinesList = ({ magazines, type, query, sortByTitle }: Props) => {
  if (sortByTitle) {
    magazines.sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <div className="my-10 mx-28">
      <div className="mb-5 text-3xl font-bold">Magazines</div>
      <div className="flex flex-wrap justify-center">
        {magazines.map((magazine, index) => {
          let condition = true;

          if (query.length) {
            condition =
              (type === "isbn" && magazine.isbn.includes(query)) ||
              (type === "email" && magazine.authors.includes(query));
          }

          return condition && <MagazineCard {...magazine} key={index} />;
        })}
      </div>
    </div>
  );
};

export default MagazinesList;
