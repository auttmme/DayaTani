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
	Spinner,
	useDisclosure,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useToast,
	Card,
	CardBody,
	Flex,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleInfo,
	faEllipsisVertical,
	faEye,
	faPen,
	faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getFarmerList } from "../../services/getFarmerList";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import { deleteFarmer } from "../../services/deleteFarmer";
import { FarmersProps } from "../../types/Farmers";

function FarmerList() {
	const toast = useToast();
	const navigate = useNavigate();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const [limit, setLimit] = useState(10);
	const [offset, setOffset] = useState(0);
	const [farmerData, setFarmerData] = useState<FarmersProps>();

	const handleLoadMore = useCallback(() => {
		setLimit((prevLimit) => prevLimit + 10);
		setOffset((prevOffset) => prevOffset);
	}, [limit]);

	const {
		data: farmerList,
		refetch,
		isFetching,
	} = useQuery({
		queryKey: ["GetFarmerList", limit, offset],
		queryFn: () => getFarmerList(limit, offset),
	});

	const mutation = useMutation({
		mutationFn: deleteFarmer,
		onSuccess: () => {
			refetch();
			toast({
				position: "top-right",
				render: () => (
					<Card
						color="#2A5707"
						py="12px"
						px="16px"
						bg="#E7F6DB"
						border="1px solid #214405"
						borderRadius="10px"
					>
						<CardBody padding={0}>
							<Flex alignItems="center" gap="6px">
								<FontAwesomeIcon
									icon={faCircleInfo}
									color="#2A5707"
									width="16px"
									height="16px"
								/>
								<Text fontWeight="600" fontSize="medium">
									Farmer Deleted Successfully
								</Text>
							</Flex>
							<Flex direction="column" gap={1}>
								<Text>
									The farmer has been successfully deleted from the system
								</Text>
							</Flex>
						</CardBody>
					</Card>
				),
			});
		},
		onError: () => {
			toast({
				position: "top-right",
				render: () => (
					<Card
						color="#B42318"
						py="12px"
						px="16px"
						bg="#FEE4E2"
						border="1px solid #912018"
						borderRadius="10px"
					>
						<CardBody padding={0}>
							<Flex alignItems="center" gap="6px">
								<FontAwesomeIcon
									icon={faCircleInfo}
									color="#B42318"
									width="16px"
									height="16px"
								/>
								<Text fontWeight="600" fontSize="medium">
									Error Title
								</Text>
							</Flex>
							<Flex direction="column" gap={1}>
								<Text>This is an error message</Text>
							</Flex>
						</CardBody>
					</Card>
				),
			});
		},
	});

	const handleDelete = () => {
		if (farmerData?.id !== undefined) {
			mutation.mutate(farmerData?.id);
			onClose();
		}
	};

	return (
		<>
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
							onClick={() => {
								handleLoadMore();
								refetch();
							}}
						>
							{isFetching ? <Spinner /> : "Load More"}
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
						{farmerList?.map((farmer, index) => (
							<Tr key={index}>
								<Td textAlign="center">{index + 1}</Td>
								<Td textAlign="center">{farmer.name}</Td>
								<Td textAlign="center">{farmer.idCardNumber}</Td>
								<Td textAlign="center">{farmer.birthDate}</Td>
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
												onClick={() => navigate(`/detail-farmer/${farmer.id}`)}
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
												onClick={() => navigate(`/edit-farmer/${farmer.id}`)}
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
												onClick={() => {
													setFarmerData(farmer);
													onOpen();
												}}
											>
												Delete
											</MenuItem>
										</MenuList>
									</Menu>
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
			<Modal isOpen={isOpen} onClose={onClose} isCentered key={farmerData?.id}>
				<ModalOverlay />
				<ModalContent backgroundColor="#EDEFE3">
					<ModalHeader>Delete Farmer</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text>
							Please make sure there are no mistakes and typos when filling the
							information.Are you sure you want to delete{" "}
							<span style={{ fontWeight: 700 }}>{farmerData?.name}</span>? This
							action cannot be undone
						</Text>
					</ModalBody>
					<ModalFooter>
						<Button
							variant="outline"
							color="#00371D"
							borderColor="#00371D"
							_hover={{ bg: "transparent" }}
							borderRadius="8px"
							px="16px"
							py="10px"
							mr={3}
							onClick={onClose}
						>
							No, Decline
						</Button>
						<Button
							backgroundColor="#E53348"
							color="#FEFDF8"
							px="16px"
							py="10px"
							borderRadius="8px"
							_hover={{ bg: "#E53348" }}
							type="submit"
							onClick={handleDelete}
						>
							Yes, Delete
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

export default FarmerList;
