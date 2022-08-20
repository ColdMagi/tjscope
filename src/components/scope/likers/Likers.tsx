import type { Osnova } from "types/osnova";
import Table from "./Table";

interface Props {
  likers: Osnova.Likers.Likers;
}

function Likers({ likers }: Props) {
  return (
    <>
      <Table likers={likers} />
    </>
  );
}

export default Likers;
