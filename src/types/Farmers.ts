export interface FarmersProps {
	id: number;
	name: string;
	idCardNumber: string;
	birthDate: string;
}

export interface GetFarmersProps {
	farmers: FarmersProps[];
}

export interface AddFarmerProps {
	name: string;
	idCardNumber: string;
	birthDate: string;
}
