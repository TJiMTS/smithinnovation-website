"use client";

import { useEffect, useState } from "react";
import { DocumentEntry } from "@/components/mission-control/types";

function formatDate(value: string) {
  return new Date(value).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" });
}
function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  return `${(kb / 1024).toFixed(1)} MB`;
}

export default function DocsClient({ docs }: { docs: DocumentEntry[] }) {
  const [docQuery, setDocQuery] = useState("");
  const [selectedDoc, setSelectedDoc] = useState<string | null>(docs[0]?.name ?? null);
  const [docContent, setDocContent] = useState("");
  const [docLoading, setDocLoading] = useState(false);

  const filteredDocs = docs.filter((doc) => doc.name.toLowerCase().includes(docQuery.trim().toLowerCase()));

  useEffect(() => {
    if (!selectedDoc) return;
    setDocLoading(true);
    fetch(`/api/mission-control/doc?name=${encodeURIComponent(selectedDoc)}`)
      .then(async (response) => {
        if (!response.ok) throw new Error("Could not load document preview.");
        const payload = (await response.json()) as { content: string };
        setDocContent(payload.content);
      })
      .catch((err: Error) => setDocContent(`Failed to load document: ${err.message}`))
      .finally(() => setDocLoading(false));
  }, [selectedDoc]);

  return (
    <section className="rounded-[28px] border border-white/10 bg-white/5 p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80">Docs</p>
          <h2 className="mt-2 text-2xl font-semibold">SIS source documents</h2>
        </div>
        <input value={docQuery} onChange={(e) => setDocQuery(e.target.value)} placeholder="Search docs..." className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 lg:max-w-xs" />
      </div>
      <div className="mt-6 grid gap-4 xl:grid-cols-[380px_1fr]">
        <div className="max-h-[680px] space-y-3 overflow-auto pr-1">
          {filteredDocs.map((doc) => (
            <button key={doc.name} onClick={() => setSelectedDoc(doc.name)} className={`w-full rounded-[22px] border p-4 text-left transition ${selectedDoc === doc.name ? "border-amber-400/40 bg-amber-400/10" : "border-white/8 bg-black/20 hover:border-white/20"}`}>
              <p className="font-medium">{doc.name}</p>
              <div className="mt-2 flex flex-wrap gap-3 text-xs text-white/45">
                <span>{formatDate(doc.modifiedAt)}</span>
                <span>{formatBytes(doc.size)}</span>
              </div>
            </button>
          ))}
        </div>
        <div className="min-h-[680px] rounded-[24px] border border-white/8 bg-black/20 p-5">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className="text-lg font-medium">{selectedDoc ?? "Select a document"}</h3>
            {docLoading && <span className="text-sm text-white/40">Loading…</span>}
          </div>
          <pre className="max-h-[610px] overflow-auto whitespace-pre-wrap rounded-[18px] bg-[#05070b] p-4 font-mono text-xs leading-6 text-white/80">{selectedDoc ? docContent : "Pick a document from the left to preview it."}</pre>
        </div>
      </div>
    </section>
  );
}
