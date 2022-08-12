import { useSearchParams } from "react-router-dom";
import { getTargetId } from "utils/common";

function Scope() {
  const [searchParams] = useSearchParams();
  const id = getTargetId(searchParams.get("id") || "");

  return <>{id}</>;
}

export default Scope;
