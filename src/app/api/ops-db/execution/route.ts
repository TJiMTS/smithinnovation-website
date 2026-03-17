import { NextResponse } from "next/server";
import { getExecutionSelection } from "@/lib/ops-execution";

export const runtime = "nodejs";

export async function GET() {
  try {
    const selection = await getExecutionSelection();
    return NextResponse.json(selection);
  } catch (error) {
    console.error("ops-db execution route error", error);
    return NextResponse.json({ error: "Failed to load execution selection" }, { status: 500 });
  }
}
