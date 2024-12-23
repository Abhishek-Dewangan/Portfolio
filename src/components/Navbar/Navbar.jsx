import React, { useContext, useState } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import Fade from "react-reveal/Fade";
import { IoMenuSharp, IoHomeSharp } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import { BsFillGearFill } from "react-icons/bs";
import { MdPhone } from "react-icons/md";
import { FaUser, FaFolderOpen } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@mui/material/Drawer";
import { AiOutlineClose } from "react-icons/ai";

import "./Navbar.css";
import { ThemeContext } from "../../contexts/ThemeContext";

function Navbar() {
  const { theme, setHandleDrawer } = useContext(ThemeContext);
  console.log(theme);

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    setHandleDrawer();
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setHandleDrawer();
  };

  const useStyles = makeStyles((t) => ({
    navMenu: {
      fontSize: "2.5rem",
      color: theme.tertiary,
      cursor: "pointer",
      transform: "translateY(-10px)",
      transition: "color 0.3s",
      "&:hover": {
        color: theme.primary,
      },
      [t.breakpoints.down("sm")]: {
        fontSize: "2.5rem",
      },
      [t.breakpoints.down("xs")]: {
        fontSize: "2rem",
      },
    },
    MuiDrawer: {
      padding: "0em 1.8em",
      width: "14em",
      fontFamily: " var(--primaryFont)",
      fontStyle: " normal",
      fontWeight: " normal",
      fontSize: " 24px",
      background: theme.secondary,
      overflow: "hidden",
      borderTopRightRadius: "40px",
      borderBottomRightRadius: "40px",
      [t.breakpoints.down("sm")]: {
        width: "12em",
      },
    },
    closebtnIcon: {
      fontSize: "2rem",
      fontWeight: "bold",
      cursor: "pointer",
      color: theme.primary,
      position: "absolute",
      right: 30,
      top: 20,
      transition: "color 0.2s",
      "&:hover": {
        color: theme.tertiary,
      },
      [t.breakpoints.down("sm")]: {
        right: 20,
        top: 20,
      },
    },
    drawerItem: {
      margin: "5px auto",
      borderRadius: "78.8418px",
      // background: theme.secondary,
      color: "white",
      width: "100%",
      height: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      padding: "0 30px",
      transition: "background-color 0.2s, color 0.2s",
      "&:hover": {
        color: theme.primary,
      },
      [t.breakpoints.down("sm")]: {
        width: "100%",
        padding: "0 25px",
        height: "55px",
      },
    },
    drawerLinks: {
      fontFamily: "var(--primaryFont)",
      width: "50%",
      fontSize: "1rem",
      fontWeight: 600,
      [t.breakpoints.down("sm")]: {
        fontSize: "1.125rem",
      },
    },
    drawerIcon: {
      fontSize: "1.2rem",
      [t.breakpoints.down("sm")]: {
        fontSize: "1.385rem",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className="navbar">
      <div className="navLink--container">
        <Fade left>
          <NavLink to="/#" smooth={true} spy="true" duration={2000}>
            <div className={classes.drawerItem}>
              <IoHomeSharp className={classes.drawerIcon} />
              <span className={classes.drawerLinks}>Home</span>
            </div>
          </NavLink>
        </Fade>

        <Fade left>
          <NavLink to="/#about" smooth={true} spy="true" duration={2000}>
            <div className={classes.drawerItem}>
              <FaUser className={classes.drawerIcon} />
              <span className={classes.drawerLinks}>About</span>
            </div>
          </NavLink>
        </Fade>

        <Fade left>
          <NavLink to="/#experience" smooth={true} spy="true" duration={2000}>
            <div className={classes.drawerItem}>
              <HiDocumentText className={classes.drawerIcon} />
              <span className={classes.drawerLinks}>Experience</span>
            </div>
          </NavLink>
        </Fade>

        <Fade left>
          <NavLink to="/#resume" smooth={true} spy="true" duration={2000}>
            <div className={classes.drawerItem}>
              <HiDocumentText className={classes.drawerIcon} />
              <span className={classes.drawerLinks}>Education</span>
            </div>
          </NavLink>
        </Fade>

        <Fade left>
          <NavLink to="/#skill" smooth={true} spy="true" duration={2000}>
            <div className={classes.drawerItem}>
              <HiDocumentText className={classes.drawerIcon} />
              <span className={classes.drawerLinks}>Skills</span>
            </div>
          </NavLink>
        </Fade>

        <Fade left>
          <NavLink to="/#projects" smooth={true} spy="true" duration={2000}>
            <div className={classes.drawerItem}>
              <FaFolderOpen className={classes.drawerIcon} />
              <span className={classes.drawerLinks}>Projects</span>
            </div>
          </NavLink>
        </Fade>

        <Fade left>
          <NavLink to="/#services" smooth={true} spy="true" duration={2000}>
            <div className={classes.drawerItem}>
              <BsFillGearFill className={classes.drawerIcon} />
              <span className={classes.drawerLinks}>Hobbies</span>
            </div>
          </NavLink>
        </Fade>

        <Fade left>
          <NavLink to="/#contacts" smooth={true} spy="true" duration={2000}>
            <div className={classes.drawerItem}>
              <MdPhone className={classes.drawerIcon} />
              <span className={classes.drawerLinks}>Contact</span>
            </div>
          </NavLink>
        </Fade>
      </div>
    </div>
  );
}

export default Navbar;
