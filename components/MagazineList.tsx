import MagazineCard, { Magazine } from "./MagazineCard";

type Props = {
  magazines: Magazine[];
};

const MagazinesList = ({ magazines }: Props) => {
  return (
    <div className="my-10 mx-28">
      <div className="mb-5 text-3xl font-bold">Magazines</div>
      <div className="flex flex-wrap justify-center">
        {magazines.map((magazine, index) => {
          return <MagazineCard {...magazine} key={index} />;
        })}
      </div>
    </div>
  );
};

export default MagazinesList;
