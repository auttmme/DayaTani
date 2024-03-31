import { GetFarmersProps } from "../types/Farmers";

import axios from "axios";

export const getFarmerList = async (limit: number, offset: number) => {
	try {
		const res = await axios.get<GetFarmersProps>(
			`http://localhost:3000/farmers?limit=${limit}&offset=${offset}`
		);
		return res.data.farmers;
	} catch (err) {
		throw new Error(err as string);
	}
};
