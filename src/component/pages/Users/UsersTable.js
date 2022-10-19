import "./style.css";

export function UsersTable({ users, setUsers }) {
  return (
    <div className="d-flex p-2 justify-content-between table-style">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">نام</th>
            <th scope="col">سن</th>
            <th scope="col">کشور</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((row, index) => {
            return (
              <tr key={`${row.id}_${index}`}>
                <th scope="row">{index + 1}</th>

                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.country}</td>

                <td>
                  <button
                    className="btn btn-sm btn-outline-danger "
                    // onClick={() => handleDeleteTask(row.id)}
                  >
                    {" "}
                    <i class="bi bi-trash3-fill"></i>
                  </button>
                  <button
                    className="btn btn-sm btn-outline-primary "
                    // onClick={() => handleToggleIsdone(row.id)}
                  >
                    <i class="bi bi-pencil-square"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
