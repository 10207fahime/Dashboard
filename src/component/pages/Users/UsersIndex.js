import { UsersTable } from "./UsersTable";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export function UserIndex() {
  const [users, setUsers] = useState([]);
  const [isUsersLoading, setUsersLoading] = useState(false);
  useEffect(() => {
    setUsersLoading(true);
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
  }, []);
  return <UsersTable users={users} setUsers={setUsers} />;
}
