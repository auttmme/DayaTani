import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import { Box, Flex } from "@chakra-ui/react";
import Topbar from "./Topbar";
import { ChildrenWrapper } from "./styles";

function Layout({ children }: { children: ReactNode }) {
	return (
		<Flex>
			<Box display={["none", "none", "flex", "flex"]}>
				<Sidebar />
			</Box>
			<ChildrenWrapper>
				<Topbar />
				<div>{children}</div>
			</ChildrenWrapper>
		</Flex>
	);
}

export default Layout;
