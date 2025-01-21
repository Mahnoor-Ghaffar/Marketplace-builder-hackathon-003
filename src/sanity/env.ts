// export const apiVersion =
//   process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-05'

// export const dataset = assertValue(
//   process.env.NEXT_PUBLIC_SANITY_DATASET || "production" ,
//   'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
// )

// export const projectId = assertValue(
//   process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "mnsj2f8c",
//   'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
// )

// function assertValue<T>(v: T | undefined, errorMessage: string): T {
//   if (v === undefined) {
//     throw new Error(errorMessage)
//   }

//   return v
// }


// env.ts
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-05";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "mnsj2f8c",
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

export const apiToken = assertValue(
  process.env.SANITY_API_TOKEN,
  "Missing environment variable: SANITY_API_TOKEN"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined || v === null) {
    throw new Error(errorMessage);
  }
  return v;
}

