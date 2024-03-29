import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import { Flex } from "@chakra-ui/react";
import Topbar from "./Topbar";
import { ChildrenWrapper } from "./styles";

function Layout({ children }: { children: ReactNode }) {
	return (
		<Flex>
			<Sidebar />
			<ChildrenWrapper>
				<Topbar />
				<div>{children}</div>
			</ChildrenWrapper>
		</Flex>
	);
}

export default Layout;
