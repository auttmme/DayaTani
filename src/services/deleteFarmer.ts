import axios from "axios";

export const deleteFarmer = async (id: number) => {
	return axios.delete(`http://localhost:3000/farmers/${id}`);
};
