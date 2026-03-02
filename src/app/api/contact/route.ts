import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const SUPABASE_FUNCTION_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-email`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, interest, message } = body;

    if (!name || !email || !interest) {
      return NextResponse.json(
        { error: "Name, email, and interest are required." },
        { status: 400 }
      );
    }

    // Save to Supabase
    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert([{ name, email, company, phone, interest, message }]);

    if (dbError) {
      console.error("Supabase insert error:", dbError);
    }

    // Send emails via Edge Function (fire and forget)
    fetch(SUPABASE_FUNCTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({
        type: "contact",
        data: { name, email, company, phone, interest, message },
      }),
    }).catch((err) => console.error("Email Edge Function error:", err));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process submission." },
      { status: 500 }
    );
  }
}
