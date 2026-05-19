import { NextResponse } from "next/server";
import { homeData } from "@/lib/homeData";

export function GET() {
  return NextResponse.json(homeData);
}
