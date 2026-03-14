import { execFile } from "child_process";
import { promisify } from "util";
import { NextResponse } from "next/server";

const execFileAsync = promisify(execFile);
const WORKSPACE_ROOT = "/Users/tjsmith/.openclaw/workspace";

export const runtime = "nodejs";

export async function GET() {
  try {
    const { stdout } = await execFileAsync("openclaw", ["system", "heartbeat", "last"], {
      cwd: WORKSPACE_ROOT,
      timeout: 15000,
      maxBuffer: 1024 * 1024,
    });

    const jsonMatch = stdout.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return NextResponse.json({ lastChecked: null, status: "unknown", preview: null });
    }

    const parsed = JSON.parse(jsonMatch[0]) as {
      ts?: number;
      status?: string;
      preview?: string;
    };

    return NextResponse.json({
      lastChecked: parsed.ts ? new Date(parsed.ts).toISOString() : null,
      status: parsed.status ?? "unknown",
      preview: parsed.preview ?? null,
    });
  } catch {
    return NextResponse.json({ lastChecked: null, status: "unavailable", preview: null });
  }
}
