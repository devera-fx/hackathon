import { SanityClient, createClient } from "next-sanity";
import { NextRequest, NextResponse } from "next/server";

const client: SanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "v2023-07-12",
    useCdn: false
});

export async function GET (request: NextRequest) {

    try {
        let response = await client.fetch(`*[_type == 'product']`)
        // console.log(response);
        return NextResponse.json(response)
    } catch (error) {
        console.log((error as {message: string}).message);
        return NextResponse.json({Error: error})
    }
}