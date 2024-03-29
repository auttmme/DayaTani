import { extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/urbanist";

const config = {
	initialColorMode: "light",
	useSystemColorMode: false,
	styles: {
		global: {
			body: {
				bg: "#EDEFE3",
			},
		},
	},
	fonts: {
		heading: `'Urbanist', sans-serif`,
		body: `'Urbanist', sans-serif`,
	},
};

const customTheme = extendTheme(config);

export default customTheme;
