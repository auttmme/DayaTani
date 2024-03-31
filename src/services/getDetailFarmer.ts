import { FarmersProps } from "../types/Farmers";

import axios from "axios";

export const getDetailFarmer = async (id: number) => {
	try {
		const res = await axios.get<FarmersProps>(
			`http://localhost:3000/farmers/${id}`
		);
		return res.data;
	} catch (err) {
		throw new Error(err as string);
	}
};
