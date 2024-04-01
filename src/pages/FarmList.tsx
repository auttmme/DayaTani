import { Flex, Text, Button, Box } from "@chakra-ui/react";
import FarmerList from "../components/FarmerList";
import { useNavigate } from "react-router-dom";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FarmListPage() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/add-farmer");
	};

	return (
		<Flex flexDirection="column" gap={3}>
			<Flex justifyContent="space-between" alignItems="center">
				<Text fontWeight="600" fontSize="xl">
					Farmer List
				</Text>
				<Button
					backgroundColor="#00371D"
					color="#CCEE24"
					px="16px"
					py="10px"
					borderRadius="8px"
					_hover={{ bg: "#00371D" }}
					onClick={handleClick}
					display={["none", "none", "block", "block"]}
				>
					Add Farmer
				</Button>
				<Box display={["block", "block", "none", "none"]}>
					<FontAwesomeIcon
						icon={faUserPlus}
						onClick={handleClick}
						color="#00371D"
						width="24px"
						height="24px"
					/>
				</Box>
			</Flex>
			<FarmerList />
		</Flex>
	);
}

export default FarmListPage;
