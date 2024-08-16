import { useState, useRef, useEffect } from "react";
import styles from "./index.module.css";
export default function FetchTesting() {
  const [users, setUsers] = useState([]);
  const [createUserRes, setCreateUserRes] = useState({});
  const [createUserResp, setCreateUserResp] = useState({});
  const nameRef = useRef("");
  const jobRef = useRef("");

  // Setting input fields on first mount
  useEffect(() => {
    nameRef.current.value = "Ali";
    jobRef.current.value = "Engineer";
  }, []);

  // Making GET to get all users
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

  // Making POST to create a user
  function handleCreate(e, body) {
    // Passed in body from component

    // The handler function cannot be async.
    // So we have a helper function to allow us to make async calls
    async function helper() {
      e.preventDefault(); // Stop the form from refreshing the page
      try {
        let res = await fetch("https://reqres.in/api/users", {
          method: "POST",
          body: JSON.stringify(body),
          headers: { "Content-Type": "application/json" },
        });
        if (!res.ok) {
          console.log(`Bad status code: ${res.status}`);
          return;
        }
        res = await res.json();
        console.log("handleCreate succeded with reponse: ", res);
        setCreateUserResp(res);
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
      <p>
        We use useRef's and html{` <form></form>`} elements to create the
        ability to submit information to the backend api's
      </p>
      <hr></hr>
      <br></br>
      <h2>GET to get all users: https://reqres.in/api/users</h2>
      <div>
        <button onClick={handleGetUsers}>Get users</button>
        <br></br>
        <br></br>
        <h3>{users.length > 0 ? "Users:" : ""}</h3>
        {users.map((user, i) => {
          return <div key={i}>{user.first_name}</div>;
        })}
      </div>
      <br></br>

      <hr></hr>
      <br></br>
      <h2>POST to create user: https://reqres.in/api/users</h2>

      <div>
        <form
          onSubmit={(e) => {
            const body = {
              name: nameRef.current.value,
              job: jobRef.current.value,
            };

            handleCreate(e, body); //  Can pass any additional arguments this way (like we did with the body)
          }}
        >
          <label for="fname">First Name:</label>
          <input
            name="fname"
            id="fname"
            ref={nameRef}
            type="text"
            // value="John"
          ></input>
          <br></br>
          <label for="job">Job:</label>
          <input
            name="job"
            id="job"
            ref={jobRef}
            type="text"
            // value="Engineer"
          ></input>
          <br></br>

          <input type="submit" value="Create a user"></input>
        </form>
        <div>
          Response from creating a user:{" "}
          {/* https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object is more efficent */}
          {Object.keys(createUserResp).length != 0
            ? JSON.stringify(createUserResp)
            : 'Waiting on "Create a user" button to be clicked...'}
        </div>
      </div>
    </div>
  );
}
