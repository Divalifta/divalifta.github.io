import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

const MAIN_COLOR = "#ccd6f6";
const NAV_BG = "#0a192f";

const NavBar = () => {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: "blur(10px)",
        backgroundColor: NAV_BG,
        px: 2,
      }}
    >
      <Toolbar disableGutters sx={{ justifyContent: "space-between", width: "100%" }}>
        {/* Left Side: Brand + Social Icons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ fontWeight: "bold", fontSize: "1.3rem", mx: 1, color: MAIN_COLOR }}>
            Divalifta
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Tooltip title="Email">
              <IconButton
                href="mailto:divaalifta@outlook.com"
                sx={{ color: MAIN_COLOR }}
              >
                <EmailIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="GitHub">
              <IconButton
                href="https://github.com/divalifta"
                target="_blank"
                rel="noopener"
                sx={{ color: MAIN_COLOR }}
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Write Me">
              <IconButton
                href="https://medium.com/@divaac56"
                sx={{ color: MAIN_COLOR }}
              >
                <EditNoteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="TikTok">
              <IconButton
                href="https://www.tiktok.com/@divalifta"
                target="_blank"
                rel="noopener"
                sx={{ color: MAIN_COLOR }}
              >
                <FontAwesomeIcon icon={faTiktok} />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        {/* Right Side: Navigation Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            href="#intro"
            sx={{
              color: MAIN_COLOR,
              fontWeight: "bold",
              "&:hover": { color: "#b0c4de" },
            }}
          >
            Home
          </Button>
          <Button
            href="#about"
            sx={{
              color: MAIN_COLOR,
              fontWeight: "bold",
              "&:hover": { color: "#b0c4de" },
            }}
          >
            About
          </Button>
          <Button
            href="#projects"
            sx={{
              color: MAIN_COLOR,
              fontWeight: "bold",
              "&:hover": { color: "#b0c4de" },
            }}
          >
            Projects
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
