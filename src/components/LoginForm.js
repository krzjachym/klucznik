import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameBorderColor, setUsernameBorderColor] = useState("default");
  const [passwordBorderColor, setPasswordBorderColor] = useState("default");
  const [usernameValid, setUsernameValid] = useState(true);

  const validateUsername = (username) => {
    if (username === "") {
      return false;
    } else {
      return true;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //validate username
    setUsernameValid(validateUsername(username));
    //validate password
    if (password === "") {
      setPasswordBorderColor("solid red");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          style={{ border: usernameValid ? "default" : "solid red" }}
          onChange={(e) => setUsername(e.target.value)}
        />
        {usernameValid ? "" : <p>username invalid</p>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          style={{ border: passwordBorderColor }}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <input type="submit" value="Log In" />
    </form>
  );
};

export default LoginForm;
