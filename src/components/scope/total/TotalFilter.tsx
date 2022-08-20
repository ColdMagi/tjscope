import type { Osnova } from "types/osnova";
import TotalTable from "./TotalTable";

interface Props {
  likers: Osnova.Likers.Likers;
}

function TotalFilter({ likers }: Props) {
  return (
    <>
      <TotalTable likers={likers} />
    </>
  );
}

export default TotalFilter;
