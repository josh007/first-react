import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    userService
      .getAll<User>()
      .then((res) => setUsers(res.data))
      .catch((err) => setError(err.message));
  }, []);

  return { users, error, setUsers, setError };
};

export default useUsers;
