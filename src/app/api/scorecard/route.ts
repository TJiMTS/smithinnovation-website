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
    const { name, email, company, firmSize, sector, answers, result } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Build the row for Supabase
    const row: Record<string, unknown> = {
      name,
      email,
      company: company || null,
      firm_size: firmSize || null,
      sector: sector || null,
      total_score: result.totalScore,
      tier: result.tier,
    };

    // Add individual category scores
    for (const cat of result.categoryScores) {
      row[`${cat.id}_score`] = cat.score;
    }

    // Add individual question answers (q1 through q25)
    for (let i = 1; i <= 25; i++) {
      row[`q${i}`] = answers[i] || null;
    }

    const { error: dbError } = await supabase
      .from("scorecard_submissions")
      .insert([row]);

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json(
        { error: "Failed to save submission." },
        { status: 500 }
      );
    }

    // Send emails via Edge Function (fire and forget)
    fetch(SUPABASE_FUNCTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({
        type: "scorecard",
        data: {
          name,
          email,
          company,
          firmSize,
          sector,
          totalScore: result.totalScore,
          tier: result.tier,
          tierLabel: result.tierLabel,
          categoryScores: result.categoryScores,
          recommendations: result.recommendations,
        },
      }),
    }).catch((err) => console.error("Email Edge Function error:", err));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Scorecard API error:", err);
    return NextResponse.json(
      { error: "Failed to process submission." },
      { status: 500 }
    );
  }
}
