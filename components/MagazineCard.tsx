export type Magazine = {
  title: string;
  isbn: string;
  authors: string;
  publishedAt: string;
};

const MagazineCard = ({ title, isbn, authors, publishedAt }: Magazine) => {
  return (
    <div className="card m-3 w-1/4 bg-neutral shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-white">{title}</h2>
        <div className="mt-2 space-y-1">
          <p>Authors : {authors.split(",").join(", ")}</p>
          <p>ISBN : {isbn}</p>
          <p>Published : {publishedAt}</p>
        </div>
      </div>
    </div>
  );
};

export default MagazineCard;
