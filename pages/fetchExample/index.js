import { useState } from "react";
import styles from "./index.module.css";
export default function FetchTesting() {
  const [users, setUsers] = useState([]);
  const [createUserRes, setCreateUserRes] = useState({});

  function handleGetUsers() {
    async function fetchWrapper() {
      try {
        let res = await fetch("https://reqres.in/api/users");
        if (!res.ok) {
          throw new Error(`Bad request error code: ${res.status}`);
        }
        res = await res.json();
        console.log("handleGetUsers", res);
        setUsers(res.data);
      } catch (e) {
        console.log("Failed to fetch:" + e);
        // throw new Error("Failed to fetch:" + e);
      }
    }
    fetchWrapper();
  }

  function handleCreate() {
    async function helper() {
      try {
        let res = await fetch("https://reqres.in/api/users", {
          method: "POST",
          body: JSON.stringify({ name: "morpheus", job: "leader" }),
          headers: { "Content-Type": "application/json" },
        });
        if (!res.ok) {
          console.log(`Bad status code: ${res.status}`);
          return;
        }
        res = await res.json();
        console.log("handleCreate", res);
      } catch (error) {
        console.log("failed to create a user");
      }
    }
    helper();
  }

  return (
    <div className={styles.fetchContainer}>
      <p>
        We use an simple endpoint to make fetch calls to: https://reqres.in/api{" "}
      </p>
      <hr></hr>
      <br></br>
      <h2>Get users: https://reqres.in/api/users</h2>
      <div>
        <button onClick={handleGetUsers}>Get users</button>
        {users.map((user, i) => {
          return <div key={i}>{user.first_name}</div>;
        })}
      </div>
      <hr></hr>
      <br></br>

      <div>
        <button onClick={handleCreate}>Create a user</button>
      </div>
      <div>
        {/* <form>
          <label>
            UserId:
            <input type="text" name="name"></input>
          </label>
          <input type="submit" value="Submit"></input>
        </form> */}

        {/* <form onSubmit={handleSubmit}> */}
        <form>
          <label>
            UserId:
            <input></input>
          </label>
        </form>
      </div>
    </div>
  );
}
