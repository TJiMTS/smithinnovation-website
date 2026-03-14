"use client";

import { useEffect } from "react";

export default function BodyMode() {
  useEffect(() => {
    document.body.classList.add("mission-control-mode");
    return () => document.body.classList.remove("mission-control-mode");
  }, []);

  return null;
}
