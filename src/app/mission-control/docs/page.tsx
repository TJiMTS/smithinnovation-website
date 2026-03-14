import MissionControlShell from "@/components/mission-control/mission-control-shell";
import DocsClient from "@/components/mission-control/docs-client";
import { getMissionControlData } from "@/lib/mission-control";

export default async function MissionControlDocsPage() {
  const data = await getMissionControlData();

  return (
    <MissionControlShell title="Docs" subtitle="Search and preview SIS source documents">
      <DocsClient docs={data.docs} />
    </MissionControlShell>
  );
}
