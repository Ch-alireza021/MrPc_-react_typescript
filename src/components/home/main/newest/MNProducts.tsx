// --------------------------------------

import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../../loading";
import { getProducts } from "../../../../services";
import { MPSwiper } from "../swiper";

// MNProducts ==> main newest products
export const MNProducts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["MNProducts"],
    queryFn: async () =>
      await getProducts({
        order: "desc",
        orderBy: "createdAt",
        page: 1,
        rowsPerPage: 10,
      }),
  });
  const MNProductsData = data?.data?.products;
  const title='جدیدترین محصولات'
  if (isLoading) return <Loading />;
  return (
    <>
      <MPSwiper {...{MNProductsData,title}} />
    </>
  );
};
