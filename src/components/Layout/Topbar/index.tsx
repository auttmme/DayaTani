import { ArrowBackIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
	Circle,
	Drawer,
	DrawerContent,
	DrawerOverlay,
	Flex,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AvatarWrapper } from "./styles";
import Sidebar from "../Sidebar";

function Topbar() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const location = useLocation();

	const [isVisible, setIsVisible] = useState(false);

	const navigate = useNavigate();

	const handleBack = () => {
		navigate("/");
	};

	useEffect(() => {
		if (location.pathname !== "/") {
			setIsVisible(true);
		}

		return () => setIsVisible(false);
	}, [location.pathname]);

	return (
		<>
			<Flex justifyContent="space-between" alignItems="center" mb="12px">
				{isVisible && (
					<Circle
						bg="#FEFDF8"
						size="40px"
						color="#22231F"
						cursor="pointer"
						display={["none", "none", "flex", "flex"]}
					>
						<ArrowBackIcon onClick={handleBack} />
					</Circle>
				)}
				<HamburgerIcon
					display={["flex", "flex", "none", "none"]}
					onClick={onOpen}
					width="24px"
					height="24px"
				/>
				<Flex
					gap={3}
					alignItems="center"
					justifyContent="flex-end"
					width="100%"
				>
					<AvatarWrapper src="images/Avatar.jpg" />
					<Text
						color="#2B2D29"
						fontWeight="600"
						display={["none", "none", "flex", "flex"]}
					>
						Ahmad Irfandi
					</Text>
				</Flex>
			</Flex>
			<Drawer
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				variant="secondary"
				size="menu"
			>
				<DrawerOverlay />
				<DrawerContent background="#EDEFE3">
					<Sidebar />
				</DrawerContent>
			</Drawer>
		</>
	);
}

export default Topbar;
