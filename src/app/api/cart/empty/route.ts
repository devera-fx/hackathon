import { db } from "@/lib/db/drizzle";
import { cartTable } from "@/lib/db/schema/script";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  const userId = request.headers.get("authorization");

  if (userId) {
    try {
      await db.delete(cartTable);
      return NextResponse.json({ response: "success" }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ response: "failed" }, { status: 500 });
    }
  } else {
    return NextResponse.json({ response: "failed" }, { status: 500 });
  }
}
