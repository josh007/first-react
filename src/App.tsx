//import { ProductList } from "./components/ProductList";
import userService, { User } from "./services/user-service";
import useUsers from "./hooks/useUsers";

function App() {
  const { users, error, setUsers, setError } = useUsers();

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    userService
      .delete(user.id)
      .then(() => setUsers(users.filter((u) => u.id !== user.id)))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Josh" };
    userService
      .add(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    userService
      .update(user)
      .then(() =>
        setUsers(
          users.map((u) =>
            u.id === user.id ? { ...user, name: user.name + "!!!" } : u
          )
        )
      )
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      {/* <select
        name=""
        id=""
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} /> */}

      <button className="btn btn-primary" onClick={() => addUser()}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <button
              className="btn btn-outline-secondary"
              onClick={() => updateUser(user)}
            >
              Update
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
