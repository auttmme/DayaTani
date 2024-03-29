import { Center, Flex, Text } from "@chakra-ui/react";
import { SidebarWrapper } from "./styles";

function Sidebar() {
	return (
		<SidebarWrapper>
			<Center>
				<img
					src="/images/DayaTaniLogo.svg"
					alt="logo"
					width={124}
					height="auto"
				/>
			</Center>
			<Flex flexDirection="column" marginTop={6} marginLeft="3px" gap={6}>
				<Flex flexDirection="row" gap="8px">
					<img src="/images/UserIcon.svg" alt="famers" width={16} height={16} />
					<Text color="#4D4F47">Farmers</Text>
				</Flex>
				<Flex flexDirection="row" gap="8px">
					<img
						src="/images/VirusIcon.svg"
						alt="crop detection"
						width={16}
						height={16}
					/>
					<Text color="#4D4F47">Crop Detection</Text>
				</Flex>
				<Flex flexDirection="row" gap="8px">
					<img
						src="/images/LeavesIcon.svg"
						alt="crop images"
						width={16}
						height={16}
					/>
					<Text color="#4D4F47">Crop Images</Text>
				</Flex>
				<Flex flexDirection="row" gap="8px">
					<img src="/images/BotIcon.svg" alt="chatbot" width={16} height={16} />
					<Text color="#4D4F47">ChatBot</Text>
				</Flex>
				<Flex flexDirection="row" gap="8px">
					<img
						src="/images/AssetsIcon.svg"
						alt="assets"
						width={16}
						height={16}
					/>
					<Text color="#4D4F47">Assets</Text>
				</Flex>
			</Flex>
		</SidebarWrapper>
	);
}

export default Sidebar;
