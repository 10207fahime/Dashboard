import { UsersTable } from "./UsersTable";
import { useState } from "react";
import { useEffect } from "react";
import { SearchUser } from "./SearchUser";
import { CreateUser } from "./CreateUser";
import { Skeletons } from "./Skeletons";
import { useSelector } from "react-redux";
import { DeleteModal } from "./DeleteModal";

export function UserIndex() {
  const user = useSelector((state) => state.users.users);
  const [users, setUsers] = useState([]);
  const [isUsersLoading, setUsersLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [values, setValues] = useState({
    id: `${user.length + 1}`,
    name: "",
    age: "",
    country: "",
  });
  useEffect(() => {
    setTimeout(() => {
      setUsersLoading(false);
    }, 2000);
  }, []);
  console.log(user, "fff");
  function handleCancel() {
    setShowModal(false);
    setValues({ id: "", name: "", age: "", country: "" });
  }
  function handleCancelDeleteModal() {
    setDeleteModal(false);
  }
  function handleDelete(id) {
    setDeleteModal(true);
    setDeleteId(id);
  }
  return (
    <>
      {isUsersLoading ? (
        <Skeletons />
      ) : (
        <>
          <div className="row d-flex justify-content-between">
            <SearchUser setShowModal={setShowModal} />
            <CreateUser
              showModal={showModal}
              setShowModal={setShowModal}
              values={values}
              setValues={setValues}
              handleCancel={handleCancel}
            />
          </div>

          <UsersTable
            users={users}
            setUsers={setUsers}
            setDeleteModal={setDeleteModal}
            handleDelete={handleDelete}
          />
          <DeleteModal
            deleteModal={deleteModal}
            setDeleteModal={setDeleteModal}
            handleCancelDeleteModal={handleCancelDeleteModal}
            deleteId={deleteId}
          />
        </>
      )}
    </>
  );
}
