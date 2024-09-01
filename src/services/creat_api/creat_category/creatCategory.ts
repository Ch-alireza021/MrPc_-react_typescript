import { api } from "../../interceptors";

export const creatCat = async (categoryName: string) => {
  try {
    const resCat = await api.post("/categories", {
      name: categoryName,
    });
    if (resCat.status === 201) {
      console.log("Category added successfully!", resCat);
      return resCat?.data?.data?.category?._id;
    } else return "failed";
  } catch (error) {
    console.error("Error adding category:", error);
    return "failed";
  }
};
