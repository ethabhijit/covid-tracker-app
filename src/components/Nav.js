import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import BrandLogo from "../images/Logo.svg";
import CountryLogo from "../images/india.svg";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 50,
    marginTop: 5
  },
  country_icon: {
    width: 30,
    float: "right",
    marginTop: 5,
  },
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <>
      <Container>
        <img src={BrandLogo} className={classes.logo} alt="Logo" />
        <img src={CountryLogo} className={classes.country_icon} alt="country logo" />
      </Container>
    </>
  );
};

export default Nav;