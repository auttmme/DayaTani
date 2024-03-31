import axios from "axios";
import { AddFarmerProps } from "../types/Farmers";
import { MutationFunction } from "@tanstack/react-query";

export const addFarmer: MutationFunction<void, AddFarmerProps> = async (
	postData
) => {
	return axios.post("http://localhost:3000/farmers", postData);
};
