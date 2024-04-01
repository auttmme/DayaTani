import { Center, Flex, Text } from "@chakra-ui/react";
import { SidebarWrapper } from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SidebarMenuProps } from "../../../types/SidebarMenu";

function Sidebar() {
	const navigate = useNavigate();
	const [selectedMenu, setSelectedMenu] = useState("farmers");

	const handleClick = (menu: string) => {
		setSelectedMenu(menu);
		navigate("/");
	};

	return (
		<SidebarWrapper>
			<Center onClick={() => handleClick("farmers")} cursor="pointer">
				<img
					src="/images/DayaTaniLogo.svg"
					alt="logo"
					width={124}
					height="auto"
				/>
			</Center>
			<Flex flexDirection="column" marginTop={6} marginLeft="3px" gap={6}>
				<MenuItem
					icon="/images/UserIcon.svg"
					text="Farmers"
					menu="farmers"
					selectedMenu={selectedMenu}
					onClick={() => handleClick("farmers")}
				/>
				<MenuItem
					icon="/images/VirusIcon.svg"
					text="Crop Detection"
					menu="cropDetection"
					selectedMenu={selectedMenu}
					onClick={() => handleClick("cropDetection")}
				/>
				<MenuItem
					icon="/images/LeavesIcon.svg"
					text="Crop Images"
					menu="cropImages"
					selectedMenu={selectedMenu}
					onClick={() => handleClick("cropImages")}
				/>
				<MenuItem
					icon="/images/BotIcon.svg"
					text="ChatBot"
					menu="chatBot"
					selectedMenu={selectedMenu}
					onClick={() => handleClick("chatBot")}
				/>
				<MenuItem
					icon="/images/AssetsIcon.svg"
					text="Assets"
					menu="assets"
					selectedMenu={selectedMenu}
					onClick={() => handleClick("assets")}
				/>
			</Flex>
		</SidebarWrapper>
	);
}

function MenuItem({
	icon,
	text,
	menu,
	selectedMenu,
	onClick,
}: SidebarMenuProps) {
	const isSelected = selectedMenu === menu;

	return (
		<Flex
			flexDirection="row"
			gap="8px"
			borderLeft={isSelected ? "3px solid #00713B" : ""}
			onClick={onClick}
			cursor="pointer"
			px={2}
			py={1}
		>
			<img src={icon} alt={text} width={16} height={16} />
			<Text color="#4D4F47">{text}</Text>
		</Flex>
	);
}

export default Sidebar;
