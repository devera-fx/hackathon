import { newcartItem } from "@/lib/db/dbTypes";
import { db } from "@/lib/db/drizzle";
import { cartTable } from "@/lib/db/schema/script";
import { SanityClient, createClient } from "next-sanity";
import { NextRequest, NextResponse } from "next/server";
import { urlForImage } from "../../../../sanity/lib/image";
import { asc, eq, sql } from "drizzle-orm";

const client: SanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "v2023-07-12",
  useCdn: false,
});

export async function POST(request: NextRequest) {
  let body = await request.json();
  const userId = request.headers.get("authorization");
  if (body && userId) {
    const res =
      await client.fetch(`*[_type == "product" && _id=="${body.product_id}"]{
      name,
      description,
      price,
      image,
      
    }`);
    const cartItem: newcartItem = {
      user_id: userId,
      product_name: res[0].name,
      product_id: body.product_id,
      product_type: res[0].description,
      product_image_url: urlForImage(res[0].image[0]).url(),
      product_quantity: body.quantity,
      product_price: res[0].price,
    };
    try {
      const response = await db.insert(cartTable).values(cartItem).returning();
      return NextResponse.json(response, { status: 200 });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ error: false }, { status: 500 });
    }
  } else {
    return NextResponse.json({ error: false }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const userId = request.headers.get("authorization");
  if (userId) {
    const user_id = userId;
    try {
      const result = await db
        .select()
        .from(cartTable)
        .where(eq(cartTable.user_id, user_id))
        .orderBy(asc(cartTable.product_name));
      return NextResponse.json(result, { status: 200 });
    } catch (error) {
      return NextResponse.json([], { status: 500 });
    }
  } else {
    return NextResponse.json([], { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  const userId = request.headers.get("authorization");
  const cartId = request.headers.get("cartId");

  if (userId && cartId) {
    try {
      await db
        .delete(cartTable)
        .where(
          sql`${cartTable.cart_id} = ${cartId} AND ${cartTable.user_id} = ${userId}`
        );
      return NextResponse.json({ response: "success" }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ response: "failed" }, { status: 500 });
    }
  } else {
    return NextResponse.json({ response: "failed" }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  const userId = request.headers.get("authorization");
  if (userId) {
    const user_id = userId;
    try {
      const result = await db
        .select({
          price: sql<number>`sum("cartTable".product_quantity * "cartTable".product_price)`,
          quant: sql<number>`sum("cartTable".product_quantity)`,
        })
        .from(cartTable)
        .where(eq(cartTable.user_id, user_id));

      return NextResponse.json(result, { status: 200 });
    } catch (error) {
      console.log(error);

      return NextResponse.json([{ price: 0, quant: 0 }], { status: 500 });
    }
  } else {
    return NextResponse.json([{ price: 0, quant: 0 }], { status: 200 });
  }
}
