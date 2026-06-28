import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const streak = await prisma.streak.findUnique({ where: { id: 1 } });
  return NextResponse.json(streak ?? { current: 0, longest: 0, lastActiveDate: null });
}
