import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Button,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	MenuDivider,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEllipsisVertical,
	faEye,
	faPen,
	faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

function FarmerList() {
	return (
		<TableContainer backgroundColor="#FEFDF8" borderRadius="24px">
			<Table variant="simple">
				<TableCaption>
					<Button
						variant="outline"
						color="#00371D"
						borderColor="#00371D"
						_hover={{ bg: "transparent" }}
						borderRadius="8px"
						px="16px"
						py="10px"
					>
						Load More
					</Button>
				</TableCaption>
				<Thead>
					<Tr>
						<Th textAlign="center">No</Th>
						<Th textAlign="center">Farmer Name</Th>
						<Th textAlign="center">ID Card Number</Th>
						<Th textAlign="center">Birthdate</Th>
						<Th textAlign="center">Action</Th>
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						<Td textAlign="center">1</Td>
						<Td textAlign="center">millimetres (mm)</Td>
						<Td textAlign="center">25.4</Td>
						<Td textAlign="center">millimetres (mm)</Td>
						<Td textAlign="center" cursor="pointer">
							<Menu>
								<MenuButton
									as={IconButton}
									aria-label="Options"
									icon={
										<FontAwesomeIcon
											icon={faEllipsisVertical}
											color="#74766A"
										/>
									}
									variant="ghost"
									isRound
									_hover={{ bg: "#EDEFE3" }}
								/>
								<MenuList rounded="12px" backgroundColor="#FEFDF8">
									<MenuItem
										icon={
											<FontAwesomeIcon
												icon={faEye}
												color="#000000"
												width="24px"
												height="24px"
											/>
										}
									>
										View
									</MenuItem>
									<MenuDivider color="#E1E3D4" />
									<MenuItem
										icon={
											<FontAwesomeIcon
												icon={faPen}
												color="#4D4F47"
												width="24px"
												height="24px"
											/>
										}
									>
										Edit
									</MenuItem>
									<MenuDivider />
									<MenuItem
										icon={
											<FontAwesomeIcon
												icon={faTrashCan}
												color="#E53348"
												width="24px"
												height="24px"
											/>
										}
										color="#B42318"
									>
										Delete
									</MenuItem>
								</MenuList>
							</Menu>
						</Td>
					</Tr>
				</Tbody>
			</Table>
		</TableContainer>
	);
}

export default FarmerList;
