CREATE TABLE IF NOT EXISTS "cartTable" (
	"cart_id" serial PRIMARY KEY NOT NULL,
	"user_id" varchar(255) NOT NULL,
	"product_name" varchar(256) NOT NULL,
	"product_id" varchar(255) NOT NULL,
	"product_type" varchar(100) NOT NULL,
	"product_image_url" text NOT NULL,
	"product_quantity" integer NOT NULL,
	"product_price" integer NOT NULL
);
