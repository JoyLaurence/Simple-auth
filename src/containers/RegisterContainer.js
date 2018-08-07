import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

import LoginForm from "../components/LoginForm";

const LoginContainer = () => (
  <div
    style={{
      width: "70%",
      margin: "0 auto"
    }}
  >
    <LoginForm isLogin="true">
      {(
        { email, password, emailError, passwordError },
        handleOnChange,
        handleOnSubmit
      ) => (
        <React.Fragment>
          <h3 style={{ margin: "0" }}>Login</h3>
          <form
            style={{
              display: "flex",
              flexFlow: "nowrap column",
              alignItems: "center"
            }}
            onSubmit={handleOnSubmit}
            autoComplete="off"
          >
            <TextField
              autoComplete="off"
              name="email"
              hintText="Email"
              floatingLabelText="Email"
              value={email}
              onChange={handleOnChange}
              errorText={emailError}
              floatingLabelFixed
            />
            <TextField
              autoComplete="off"
              name="password"
              type="password"
              hintText="Password"
              floatingLabelText="Password"
              value={password}
              onChange={handleOnChange}
              errorText={passwordError}
              floatingLabelFixed
            />
            <br />
            <RaisedButton primary label="Register" />
          </form>
        </React.Fragment>
      )}
    </LoginForm>
  </div>
);

export default LoginContainer;