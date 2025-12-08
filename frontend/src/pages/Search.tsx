import { useSearchContext } from "../contexts/SearchContext";

export default function Search() {
  const search = useSearchContext();
  console.log(search);

  return <>Search Page</>;
}
