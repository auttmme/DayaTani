import { ArrowBackIcon } from "@chakra-ui/icons";
import { Circle, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AvatarWrapper } from "./styles";

function Topbar() {
	const location = useLocation();
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (location.pathname !== "/") {
			setIsVisible(true);
		}
	}, []);

	return (
		<Flex justifyContent="space-between" alignItems="center" mb="12px">
			{isVisible && (
				<Circle bg="#FEFDF8" size="40px" color="#22231F" cursor="pointer">
					<ArrowBackIcon />
				</Circle>
			)}
			<Flex gap={3} alignItems="center" justifyContent="flex-end" width="100%">
				<AvatarWrapper src="images/Avatar.jpg" />
				<Text color="#2B2D29" fontWeight="600">
					Ahmad Irfandi
				</Text>
			</Flex>
		</Flex>
	);
}

export default Topbar;
