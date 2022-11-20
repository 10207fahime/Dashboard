import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { Delete_user, Update_user } from "./../../../store/Users/action";
import { useState } from "react";

export function UsersTable({ handleDelete }) {
  const [editUser, setEditUser] = useState();
  const [updateValue, setUpdateValue] = useState({
    name: "",
    age: "",
    country: "",
  });
  const tableHeader = ["#", "نام", "سن", "محل سکونت", "عملیات"];
  const dispatch = useDispatch();
  const filteredUsers = useSelector((state) => state.users.filteredUsers);
  return (
    <div className="d-flex p-2 justify-content-between table-style">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            {tableHeader.map((item) => (
              <th>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((row, index) => {
            return (
              <tr key={`${row.id}_${index}`}>
                <th scope="row">{index + 1}</th>
                {row.id === editUser ? (
                  <>
                    <td>
                      <input
                        type="text"
                        className="w-100 form-control"
                        onChange={(e) =>
                          setUpdateValue({
                            ...updateValue,
                            name: e.target.value,
                          })
                        }
                        defaultValue={row.name}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="w-100 form-control"
                        onChange={(e) =>
                          setUpdateValue({
                            ...updateValue,
                            age: Number(e.target.value),
                          })
                        }
                        defaultValue={row.age}
                      />{" "}
                    </td>
                    <td>
                      <input
                        type="text"
                        className="w-100 form-control"
                        onChange={(e) =>
                          setUpdateValue({
                            ...updateValue,
                            country: e.target.value,
                          })
                        }
                        defaultValue={row.country}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-outline-success  btn-sm"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="ذخیره"
                        onClick={() => {
                          dispatch(Update_user(row.id, updateValue));
                          setEditUser({ name: "", age: "", country: "" });
                        }}
                      >
                        {" "}
                        <i class="bi bi-save"></i>
                      </button>
                      <button
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="لغو"
                        className="btn btn-outline-danger btn-sm"
                        type="button"
                        onClick={() =>
                          setEditUser({
                            name: row.name,
                            age: row.age,
                            country: row.country,
                          })
                        }
                      >
                        {" "}
                        <i class="bi bi-x-circle"></i>
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{row.name}</td>
                    <td>{row.age}</td>
                    <td>{row.country}</td>

                    <td>
                      <button
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="ویرایش"
                        className="btn btn-sm btn-outline-primary "
                        onClick={() => setEditUser(row.id)}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger "
                        onClick={() => handleDelete(row.id)}
                        // onClick={() => dispatch(Delete_user(row.id))}
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="حذف"
                      >
                        {" "}
                        <i className="bi bi-trash3-fill"></i>
                      </button>
                    </td>
                  </>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
