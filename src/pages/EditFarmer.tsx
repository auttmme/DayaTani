import {
	useDisclosure,
	Flex,
	Card,
	CardBody,
	FormControl,
	FormLabel,
	Input,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Box,
	Text,
	useToast,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FarmersProps } from "../types/Farmers";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailFarmer } from "../services/getDetailFarmer";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { editFarmer } from "../services/editFarmer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import useFailedToast from "../hooks/useFailedToast";
import { AxiosError } from "axios";

function EditFarmerPage() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const navigate = useNavigate();
	const toast = useToast();

	const { id } = useParams();

	const { data: detailFarmer } = useQuery({
		queryKey: ["GetDetailFarmer"],
		queryFn: () => getDetailFarmer(Number(id)),
	});

	const {
		handleSubmit,
		register,
		formState: { isSubmitting },
	} = useForm<FarmersProps>();

	const [name, setName] = useState("");
	const [idCardNumber, setIdCardNumber] = useState("");
	const [birthDate, setBirthDate] = useState("");

	const renderFailedToast = useFailedToast();

	const mutation = useMutation({
		mutationFn: editFarmer,
		onSuccess: () => {
			navigate("/");
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
									Edit Farmer Successfully
								</Text>
							</Flex>
							<Flex direction="column" gap={1}>
								<Text>
									The farmer has been successfully Edited from the system
								</Text>
							</Flex>
						</CardBody>
					</Card>
				),
			});
		},
		onError: (e: AxiosError) => {
			renderFailedToast(e?.response?.status ?? 0);
		},
	});

	const onSubmit: SubmitHandler<FarmersProps> = () => {
		onClose();
		mutation.mutate({
			id: Number(id),
			name: name,
			idCardNumber: idCardNumber,
			birthDate: birthDate,
		});
	};

	useEffect(() => {
		if (detailFarmer) {
			setName(detailFarmer.name);
			setIdCardNumber(detailFarmer.idCardNumber);
			setBirthDate(detailFarmer.birthDate);
		}
	}, [detailFarmer]);

	return (
		<Flex direction="column" gap={3}>
			<Text fontSize="xl" fontWeight="600">
				Edit Farmer
			</Text>
			<Card
				borderRadius="24px"
				width={{ base: "100%", md: "100%", lg: "100%", xl: "50%" }}
			>
				<CardBody>
					<form>
						<FormControl>
							<Box>
								<FormLabel fontSize="large" fontWeight="600">
									Farmer Name
								</FormLabel>
								<Input
									id="name"
									type="text"
									placeholder="Enter Name"
									{...register("name", {
										required: "Please fill in this field",
									})}
									borderColor={!name ? "#E53348" : "#E6E6E6"}
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
								{!name && (
									<Text color="#E53348" mb={2} fontWeight="600">
										Please fill in this field
									</Text>
								)}
							</Box>
							<Box my={6}>
								<FormLabel fontSize="large" fontWeight="600">
									ID Card Number
								</FormLabel>
								<Input
									id="idCardNumber"
									type="text"
									placeholder="Enter ID Card Number"
									{...register("idCardNumber", {
										required: "Please fill in this field",
									})}
									borderColor={!idCardNumber ? "#E53348" : "#E6E6E6"}
									value={idCardNumber}
									onChange={(e) => setIdCardNumber(e.target.value)}
								/>
								{!idCardNumber && (
									<Text color="#E53348" mb={2} fontWeight="600">
										Please fill in this field
									</Text>
								)}
							</Box>
							<Box>
								<FormLabel fontSize="large" fontWeight="600">
									Birthdate
								</FormLabel>
								<Input
									id="birthDate"
									type="date"
									placeholder="Enter Birthdate"
									{...register("birthDate", {
										required: "Please fill in this field",
									})}
									borderColor={!birthDate ? "#E53348" : "#E6E6E6"}
									value={birthDate}
									onChange={(e) => setBirthDate(e.target.value)}
								/>
								{!birthDate && (
									<Text color="#E53348" mb={2} fontWeight="600">
										Please fill in this field
									</Text>
								)}
							</Box>
						</FormControl>
						<Flex justifyContent="flex-end" mt={10}>
							<Button
								backgroundColor="#00371D"
								color="#CCEE24"
								px="16px"
								py="10px"
								borderRadius="8px"
								_hover={{ bg: "#00371D" }}
								onClick={onOpen}
							>
								Save Edit
							</Button>
						</Flex>
						<Modal isOpen={isOpen} onClose={onClose} isCentered>
							<ModalOverlay />
							<ModalContent backgroundColor="#EDEFE3">
								<ModalHeader>Edit Farmer</ModalHeader>
								<ModalCloseButton />
								<ModalBody>
									<Text>
										Please make sure there are no mistakes and typos when
										Editing the information.
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
										backgroundColor="#00371D"
										color="#CCEE24"
										px="16px"
										py="10px"
										borderRadius="8px"
										_hover={{ bg: "#00371D" }}
										isLoading={isSubmitting}
										type="submit"
										onClick={handleSubmit(onSubmit)}
									>
										Yes, Edit
									</Button>
								</ModalFooter>
							</ModalContent>
						</Modal>
					</form>
				</CardBody>
			</Card>
		</Flex>
	);
}

export default EditFarmerPage;
