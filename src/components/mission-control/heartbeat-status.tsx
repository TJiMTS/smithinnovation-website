"use client";

import { useEffect, useState } from "react";

function formatLastChecked(value: string | null) {
  if (!value) return "Checking…";
  return new Date(value).toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default function HeartbeatStatus() {
  const [lastChecked, setLastChecked] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("checking");

  useEffect(() => {
    fetch("/api/mission-control/heartbeat-last")
      .then(async (response) => {
        if (!response.ok) throw new Error("Failed to load heartbeat status.");
        const payload = (await response.json()) as {
          lastChecked: string | null;
          status: string;
        };
        setLastChecked(payload.lastChecked);
        setStatus(payload.status);
      })
      .catch(() => {
        setLastChecked(null);
        setStatus("unavailable");
      });
  }, []);

  return (
    <>
      <div className="rounded-2xl bg-white/5 p-4">
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">Last ran</p>
        <p className="mt-2 text-sm font-medium text-white">{formatLastChecked(lastChecked)}</p>
      </div>
      <div className="rounded-2xl bg-white/5 p-4">
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">Last result</p>
        <p className="mt-2 text-base font-medium capitalize text-white">{status}</p>
      </div>
    </>
  );
}
