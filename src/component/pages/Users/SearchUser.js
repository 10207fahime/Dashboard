export function SearchUser({ setShowModal }) {
  return (
    <>
      <div class="input-group rounded w-25">
        <input
          type="search"
          class="form-control rounded"
          placeholder="filter by username"
          aria-label="Search"
          aria-describedby="search-addon"
          //   onChange={(e) => handleSearchInput(e.target.value)}
        />
      </div>
      <div class="input-group rounded w-25 d-flex justify-content-center">
        <botton
          type="button"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Add user"
          onClick={() => setShowModal(true)}
        >
          <i
            className="bi bi-plus-lg"
            style={{ fontSize: "2rem", color: "#797d85" }}
          ></i>
        </botton>
      </div>
    </>
  );
}
