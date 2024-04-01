import {
	Box,
	Button,
	Card,
	CardBody,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useDisclosure,
	useToast,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddFarmerProps } from "../types/Farmers";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { addFarmer } from "../services/addFarmer";
import { useMutation } from "@tanstack/react-query";
import useFailedToast from "../hooks/useFailedToast";
import { AxiosError } from "axios";
import { ArrowBackIcon } from "@chakra-ui/icons";

function AddFarmerPage() {
	const toast = useToast();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const navigate = useNavigate();

	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<AddFarmerProps>();

	const renderFailedToast = useFailedToast();

	const mutation = useMutation({
		mutationFn: addFarmer,
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
									Farmer Added Successfully
								</Text>
							</Flex>
							<Flex direction="column" gap={1}>
								<Text>You have successfully added a new farmer</Text>
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

	const onSubmit: SubmitHandler<AddFarmerProps> = (values) => {
		reset();
		onClose();
		mutation.mutate(values);
	};

	const handleClickBack = () => {
		navigate("/");
	};

	return (
		<Flex direction="column" gap={3}>
			<Flex alignItems="center" gap={["12px", "12px", 0, 0]}>
				<ArrowBackIcon
					display={["flex", "flex", "none", "none"]}
					width="24px"
					height="24px"
					onClick={handleClickBack}
				/>
				<Text fontSize="xl" fontWeight="600">
					Add Farmer
				</Text>
			</Flex>
			<Flex
				direction="column"
				justifyContent="space-between"
				minH={["100vh", "100vh", "initial", "initial"]}
			>
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
										borderColor={errors.name ? "#E53348" : "#E6E6E6"}
									/>
									{errors.name && (
										<Text
											color="#E53348"
											mb={2}
											fontWeight="600"
										>{`${errors.name.message}`}</Text>
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
										borderColor={errors.idCardNumber ? "#E53348" : "#E6E6E6"}
									/>
									{errors.idCardNumber && (
										<Text
											color="#E53348"
											mb={2}
											fontWeight="600"
										>{`${errors.idCardNumber.message}`}</Text>
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
										borderColor={errors.birthDate ? "#E53348" : "#E6E6E6"}
									/>
									{errors.birthDate && (
										<Text
											color="#E53348"
											mb={2}
											fontWeight="600"
										>{`${errors.birthDate.message}`}</Text>
									)}
								</Box>
							</FormControl>
							<Flex
								justifyContent="flex-end"
								mt={10}
								display={["none", "none", "flex", "flex"]}
							>
								<Button
									backgroundColor="#00371D"
									color="#CCEE24"
									px="16px"
									py="10px"
									borderRadius="8px"
									_hover={{ bg: "#00371D" }}
									onClick={onOpen}
								>
									Add Farmer
								</Button>
							</Flex>
							<Modal isOpen={isOpen} onClose={onClose} isCentered>
								<ModalOverlay />
								<ModalContent backgroundColor="#EDEFE3">
									<ModalHeader>Add Farmer</ModalHeader>
									<ModalCloseButton />
									<ModalBody>
										<Text>
											Please make sure there are no mistakes and typos when
											filling the information.
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
											Yes, Add
										</Button>
									</ModalFooter>
								</ModalContent>
							</Modal>
						</form>
					</CardBody>
				</Card>
				<Button
					backgroundColor="#00371D"
					color="#CCEE24"
					px="16px"
					py="10px"
					borderRadius="8px"
					_hover={{ bg: "#00371D" }}
					onClick={onOpen}
					display={["flex", "flex", "none", "none"]}
					width="100%"
				>
					Add Farmer
				</Button>
			</Flex>
		</Flex>
	);
}

export default AddFarmerPage;
