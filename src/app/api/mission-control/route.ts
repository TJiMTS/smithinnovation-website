import { NextResponse } from "next/server";
import { getMissionControlData } from "@/lib/mission-control";

export const runtime = "nodejs";

export async function GET() {
  try {
    const data = await getMissionControlData();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Mission control API error", error);
    return NextResponse.json(
      { error: "Failed to load mission control data." },
      { status: 500 }
    );
  }
}
