import { createClient } from "next-sanity";

const client = createClient({
    projectId: "mnsj2f8c",
    dataset: "production",
    useCdn: true,
    apiVersion: "2025-01-05"
})

export async function sanityFetch({query, params = {}} :{query: string ,params?:any}) {
    return await client.fetch(query,params)
}