import { integer, pgTable, serial, varchar, text } from "drizzle-orm/pg-core";

export const cartTable = pgTable("cartTable", {
  cart_id: serial("cart_id").primaryKey(),
  user_id: varchar("user_id", { length: 255 }).notNull(),
  product_name: varchar("product_name", { length: 256 }).notNull(),
  product_id: varchar("product_id", { length: 255 }).notNull(),
  product_type: varchar("product_type", { length: 100 }).notNull(),
  product_image_url: text("product_image_url").notNull(),
  product_quantity: integer("product_quantity").notNull(),
  product_price: integer("product_price").notNull(),
});
