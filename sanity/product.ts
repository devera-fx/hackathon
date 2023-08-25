import { defineType, defineField } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "Product Name",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: any) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "size",
      type: "array",
      title: "Sizes",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "quantity",
      title: "Quantity",
      type: "number",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alternative text",
              type: "text",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "details",
      title: "Product Details",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "care",
      title: "Care",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
