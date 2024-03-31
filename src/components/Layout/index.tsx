import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import { Box, Flex } from "@chakra-ui/react";
import Topbar from "./Topbar";
import { ChildrenWrapper } from "./styles";
import { HamburgerIcon } from "@chakra-ui/icons";

function Layout({ children }: { children: ReactNode }) {
	return (
		<Flex>
			<Box display={["none", "none", "flex", "flex"]}>
				<Sidebar />
			</Box>
			<HamburgerIcon display={["flex", "flex", "none", "none"]} />
			<ChildrenWrapper>
				<Topbar />
				<div>{children}</div>
			</ChildrenWrapper>
		</Flex>
	);
}

export default Layout;
