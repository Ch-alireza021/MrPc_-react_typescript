import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../../../services"

const AdminProducts = () => {
  const {data}=useQuery({
    queryKey:['adminProducts'],
    queryFn:async()=>await getProducts()
  })
  console.log({data})
  return (
    <div>AdminProducts</div>
  )
}

export default AdminProducts