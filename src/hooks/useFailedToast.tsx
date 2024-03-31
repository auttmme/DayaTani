import { Card, CardBody, Flex, useToast, Text } from "@chakra-ui/react";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function useFailedToast() {
	const toast = useToast();

	const renderFailedToast = (response: number) => {
		let title = "";
		let desc = "";

		switch (response) {
			case 400:
				title = "Oops! Wrong Input";
				desc =
					"It seems there's a problem with your request. Please review and try again.";
				break;
			case 401:
				title = "Unauthorized Access.";
				desc =
					"Oops! You're not authorized for this. Check your credentials or contact support.";
				break;
			case 500:
				(title = "Internal Server Error."),
					(desc =
						"Something went wrong on our end. Our team is on it. Please try again later.");
				break;
			case 404:
				(title = "Page Not Found"),
					(desc =
						"Looks like we've hit a dead end. Time to retrace our digital footsteps!");
				break;
			case 409:
				title = "Oops! There's a Conflict Here";
				desc =
					"It seems the data you entered is already registered in our database. Please double-check or contact us if you need further assistance";
				break;
		}

		return toast({
			position: "top",
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
								{title}
							</Text>
						</Flex>
						<Flex direction="column" gap={1}>
							<Text>{desc}</Text>
						</Flex>
					</CardBody>
				</Card>
			),
		});
	};

	return renderFailedToast;
}

export default useFailedToast;
