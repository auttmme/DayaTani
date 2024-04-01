import {
	Box,
	Card,
	CardBody,
	Flex,
	FormLabel,
	Input,
	Text,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailFarmer } from "../services/getDetailFarmer";
import { useQuery } from "@tanstack/react-query";
import { ArrowBackIcon } from "@chakra-ui/icons";

function DetailFarmerPage() {
	const { id } = useParams();
	const navigate = useNavigate();

	const { data: detailFarmer } = useQuery({
		queryKey: ["GetDetailFarmer"],
		queryFn: () => getDetailFarmer(Number(id)),
	});

	const handleClickBack = () => {
		navigate("/");
	};

	return (
		<Flex direction="column" gap={3}>
			<Flex alignItems="center" gap={["12px", "12px", 0, 0]}>
				<ArrowBackIcon
					display={["flex", "flex", "none", "none"]}
					width="24px"
					height="24px"
					onClick={handleClickBack}
				/>
				<Text fontSize="xl" fontWeight="600">
					Detail Farmer
				</Text>
			</Flex>
			<Card
				borderRadius="24px"
				width={{ base: "100%", md: "100%", lg: "100%", xl: "50%" }}
			>
				<CardBody>
					<Box>
						<FormLabel fontSize="large" fontWeight="600">
							Farmer Name
						</FormLabel>
						<Input
							id="name"
							type="text"
							placeholder="Enter Name"
							color="#191D23"
							value={detailFarmer?.name}
							readOnly
						/>
					</Box>
					<Box my={6}>
						<FormLabel fontSize="large" fontWeight="600">
							ID Card Number
						</FormLabel>
						<Input
							id="idCardNumber"
							type="text"
							value={detailFarmer?.idCardNumber}
							readOnly
						/>
					</Box>
					<Box>
						<FormLabel fontSize="large" fontWeight="600">
							Birthdate
						</FormLabel>
						<Input
							id="birthDate"
							type="date"
							placeholder="Enter Birthdate"
							value={detailFarmer?.birthDate}
							readOnly
						/>
					</Box>
				</CardBody>
			</Card>
		</Flex>
	);
}

export default DetailFarmerPage;
