import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services";

export const GetUser = ({ id }: { id: string }) => {
  const { data } = useQuery({
    queryKey: [`user${id}`],
    queryFn: async () => await getUser({ id }),
  });
  console.log(data);
  return <div>{`${data?.firstname}  ${data?.lastname}`}</div>;
};
