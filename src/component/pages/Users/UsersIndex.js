import { UsersTable } from "./UsersTable";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { SearchUser } from "./SearchUser";
import { CreateUser } from "./CreateUser";
import { Skeleton } from "antd";
import { Skeletons } from "./Skeletons";

export function UserIndex() {
  const [users, setUsers] = useState([]);
  const [isUsersLoading, setUsersLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [values, setValues] = useState({
    id: "",
    name: "",
    country: "",
    age: "",
  });
  useEffect(() => {
    setUsersLoading(true);
    setTimeout(() => {
      axios
        .get("./mock.json")
        .then(({ data }) => {
          console.log({
            data,
          });

          setUsers(data);
        })
        .catch((e) => {
          console.log("error", e);
        })
        .finally(() => {
          setUsersLoading(false);
        });
    }, 20000);
  }, []);
  console.log(values, "fff");
  function handleCancel() {
    setShowModal(false);
    setValues({ id: "", name: "", country: "", age: "" });
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
              values={values}
              setValues={setValues}
              handleCancel={handleCancel}
            />
          </div>

          <UsersTable users={users} setUsers={setUsers} />
        </>
      )}
    </>
  );
}
