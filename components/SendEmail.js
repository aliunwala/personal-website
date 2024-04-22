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

export default function SendEmail(props) {
  // Nice compact example of useState/useEffect/useRef
  // https://stackoverflow.com/questions/58831750/how-to-add-event-in-react-functional-component
  const [tooltipTitle, setTooltipTitle] = useState("Copy Email");
  const email = "aliunwalajobsearch@gmail.com";
  const innerRef = useRef(null);

  useEffect(() => {
    // let tooltip = document.querySelector(".tooltip");
    // let tooltip = document.getElementById("");
    const tooltip = innerRef.current;

    if (tooltip !== undefined && tooltip !== null) {
      tooltip.addEventListener("click", function (event) {
        copyTextToClipboard(email);
        setTooltipTitle("Copied");
      });

      tooltip.addEventListener("mouseleave", function (event) {
        setTooltipTitle("Copy Email");
      });
    }
    // https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
    let fallbackCopyTextToClipboard = function (text) {
      let textArea = document.createElement("textarea");
      textArea.value = text;

      // Avoid scrolling to bottom
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.position = "fixed";

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        let successful = document.execCommand("copy");
        let msg = successful ? "successful" : "unsuccessful";
        console.log("Fallback: Copying text command was " + msg);
      } catch (err) {
        console.error("Fallback: Oops, unable to copy", err);
      }

      document.body.removeChild(textArea);
    };

    let copyTextToClipboard = function (text) {
      if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
      }
      navigator.clipboard.writeText(text).then(
        function () {
          console.log("Async: Copying to clipboard was successful!");
        },
        function (err) {
          console.error("Async: Could not copy text: ", err);
        }
      );
    };
  });

  return (
    <>
      <Tooltip
        className={"tooltip" + " " + props.className}
        ref={innerRef}
        // className={props.toolTipClass + " " + props.className}
        // className="tooltip"
        title={tooltipTitle}
        // title="HI"
        placement="top"
        arrow
        // style={{ padding: "4px" }}
        slotProps={{
          popper: {
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [0, -14],
                },
              },
            ],
          },
        }}
      >
        <IconButton>
          <EmailIcon sx={{ color: "#eeeeee" }} />
        </IconButton>
      </Tooltip>
    </>
  );
}
