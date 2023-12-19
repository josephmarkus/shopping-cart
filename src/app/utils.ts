export const sanitisePrice = (price: string) => {
  const woSymbol = price.replace("£", "");
  return Number(woSymbol);
};

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(price);
