import Fuse from "fuse.js";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { Filter_user } from "../../../store/Users/action";
export function SearchUser({ setShowModal }) {
  const user = useSelector((state) => state.users.users);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const filterOptions = {
    isCaseSensitive: false,
    includeMatches: true,
    keys: ["name", "age", "country"],
  };
  console.log(searchText, "jhjh");
  const fuse = new Fuse(user, filterOptions);
  useEffect(() => {
    const newFilteredList = fuse.search(searchText).map((node) => node.item);
    console.log(newFilteredList, "kk");
    dispatch(Filter_user(newFilteredList));
  }, [searchText]);
  return (
    <>
      <div className="input-group rounded w-25">
        <input
          type="search"
          className="form-control rounded"
          placeholder="جست و جو.."
          aria-label="Search"
          aria-describedby="search-addon"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="input-group rounded w-25 d-flex justify-content-center">
        <button
          type="button"
          className="btn "
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Add user"
          onClick={() => setShowModal(true)}
        >
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>
    </>
  );
}
