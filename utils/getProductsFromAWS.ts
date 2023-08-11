export const getProductsFromAWS = async () => {
  const res = await fetch(process.env.AWS_GET_ALL_PRODUCTS as string, {
    cache: "no-store",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
