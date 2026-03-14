import { NextRequest, NextResponse } from "next/server";
import { readAllowedDocument } from "@/lib/mission-control";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const name = request.nextUrl.searchParams.get("name");

  if (!name) {
    return NextResponse.json({ error: "Missing document name." }, { status: 400 });
  }

  try {
    const content = await readAllowedDocument(name);
    return NextResponse.json({ name, content });
  } catch (error) {
    console.error("Mission control doc error", error);
    return NextResponse.json(
      { error: "Unable to load document." },
      { status: 400 }
    );
  }
}
