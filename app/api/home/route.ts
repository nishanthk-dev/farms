import { NextResponse } from "next/server";
import { homeData } from "@/lib/homeData";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json(homeData);
}
