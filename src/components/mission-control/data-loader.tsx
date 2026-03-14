"use client";

import { useEffect, useMemo, useState } from "react";
import { MissionControlData } from "@/components/mission-control/types";

export function useMissionControlData() {
  const [data, setData] = useState<MissionControlData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/mission-control")
      .then(async (response) => {
        if (!response.ok) throw new Error("Could not load mission control data.");
        const payload = (await response.json()) as MissionControlData;
        setData(payload);
      })
      .catch((err: Error) => setError(err.message));
  }, []);

  return { data, error };
}

export function LoadingCard() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white/70">
      Loading mission control...
    </section>
  );
}

export function ErrorCard({ error }: { error: string }) {
  return (
    <section className="rounded-3xl border border-red-400/30 bg-red-500/10 p-6 text-red-100">
      {error}
    </section>
  );
}

export function useFilteredDocs(data: MissionControlData | null, query: string) {
  return useMemo(() => {
    if (!data) return [];
    const lowered = query.trim().toLowerCase();
    if (!lowered) return data.docs;
    return data.docs.filter((doc) => doc.name.toLowerCase().includes(lowered));
  }, [data, query]);
}
