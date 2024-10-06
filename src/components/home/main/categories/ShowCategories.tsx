import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../../loading";
import { generalGet } from "../../../../services";
import { MPSwiper } from "../swiper";
import { URL_PRODUCT } from "../../../../config";

// MNProducts ==> main newest products
export const ShowCategories = ({ id, name }: { id: string; name: string }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["MNProducts" + id],
    queryFn: async () =>
      await generalGet(`${URL_PRODUCT}?category=${id}&limit=10`),
  });
  const MNProductsData = data?.data?.products;
  const title = name;
  if (isLoading) return <Loading />;
  return (
    <>{MNProductsData?.length ? <MPSwiper {...{ MNProductsData, title }} />:''}</>
  );
};
