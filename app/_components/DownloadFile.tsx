// import styles from "./Footer.module.css";
import * as React from "react";
import { useEffect, useState, useRef } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";
import { PersonalInfo } from "@/lib/interfaces";

export default function DownloadFile({ resume }: PersonalInfo) {
  return (
    <>
      <Tooltip
        className="tooltip"
        title="Download Resume"
        placement="top"
        arrow
      >
        <a href={resume} target="_blank">
          <IconButton className="tooltipButton">
            <DownloadIcon sx={{ color: "#eeeeee" }} />
          </IconButton>
        </a>
      </Tooltip>
    </>
  );
}
