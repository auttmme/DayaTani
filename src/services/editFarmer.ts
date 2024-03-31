import axios from "axios";
import { FarmersProps } from "../types/Farmers";
import { MutationFunction } from "@tanstack/react-query";

export const editFarmer: MutationFunction<void, FarmersProps> = async (
	postData
) => {
	return axios.put(`http://localhost:3000/farmers/${postData.id}`, postData);
};
