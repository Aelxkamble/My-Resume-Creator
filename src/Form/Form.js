import React from "react";
import Layout from "../Components/Layout/Layout";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import LockIcon from "@mui/icons-material/Lock";
import FaceIcon from "@mui/icons-material/Face";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import Login from "./Login";
import SignUp from "./Signup";


const Form = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Layout>
      <Paper elevation={12} style={{ padding: "20% " }}>
        {checked ? (
          <Chip
            icon={<LockIcon />}
            label="Login"
            color="primary"
            variant="outlined"
          />
        ) : (
          <Chip
            icon={<FaceIcon />}
            label="SignUp"
            color="primary"
            variant="outlined"
          />
        )}

        <br />
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <br />
        {checked ? <Login /> : <SignUp/>}
      </Paper>
    </Layout>
  );
};

export default Form;
