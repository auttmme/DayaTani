import { Flex, Text, Button } from "@chakra-ui/react";
import FarmerList from "../components/FarmerList";

function FarmListPage() {
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
				>
					Add Farmer
				</Button>
			</Flex>
			<FarmerList />
		</Flex>
	);
}

export default FarmListPage;
