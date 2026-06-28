import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const progress = await prisma.progress.findMany();
  return NextResponse.json(progress);
}

export async function POST(req: NextRequest) {
  const { weekNum, completed, note } = await req.json();

  const record = await prisma.progress.upsert({
    where: { weekNum },
    update: {
      completed,
      note,
      completedAt: completed ? new Date() : null,
    },
    create: {
      weekNum,
      completed,
      note,
      completedAt: completed ? new Date() : null,
    },
  });

  // Update streak
  const today = new Date().toISOString().split("T")[0];
  const streak = await prisma.streak.findUnique({ where: { id: 1 } });

  if (completed) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
    const newCurrent =
      streak?.lastActiveDate === today
        ? streak.current
        : streak?.lastActiveDate === yesterday
        ? (streak?.current ?? 0) + 1
        : 1;

    await prisma.streak.upsert({
      where: { id: 1 },
      update: {
        current: newCurrent,
        longest: Math.max(newCurrent, streak?.longest ?? 0),
        lastActiveDate: today,
      },
      create: { id: 1, current: 1, longest: 1, lastActiveDate: today },
    });
  }

  return NextResponse.json(record);
}
