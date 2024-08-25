import { useQuery } from "@tanstack/react-query";
import { HoverReveal, Loading } from "../../../../components";
import { generalGetWithId } from "../../../../services";


// CASName ==> category and subcategory name
export const CASName = (props: { URL: string; id: string }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [props.id],
    queryFn: async () => await generalGetWithId(props.URL, props.id),
  });
  if (isLoading) return <Loading />;
  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }
  const name =
    props.URL === "categories"
      ? data?.data?.category.name
      : data?.data?.subcategory.name;
  return <HoverReveal>{name}</HoverReveal>;
};

 
