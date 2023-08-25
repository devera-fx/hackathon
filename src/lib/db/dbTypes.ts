import { InferModel } from "drizzle-orm";
import { cartTable } from "./schema/script";

export type cartItem = InferModel<typeof cartTable>;
export type newcartItem = InferModel<typeof cartTable, "insert">;