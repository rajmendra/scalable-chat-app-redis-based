"use client";
import { useState } from "react";
import { useSocket } from "../context/SocketProvider";
import classes from "./page.module.css";

export default function Page() {
  const { sendMessage, messages } = useSocket();
  const [message, setMessage] = useState("");

  return (
    <div className={classes["container"]}>
      <div className={classes["input-container"]}>
        <input
          onChange={(e) => setMessage(e.target.value)}
          className={classes["input-style"]}
          placeholder="Message..."
        />
        <button
          onClick={(e) => sendMessage(message)}
          className={classes["button-style"]}
        >
          Send
        </button>
      </div>
      <div>
        {messages.map((e) => (
          <li>{e}</li>
        ))}
      </div>
    </div>
  );
}