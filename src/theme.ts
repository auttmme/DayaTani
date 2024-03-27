import { extendTheme } from "@chakra-ui/react";

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
};

const customTheme = extendTheme(config);

console.log(customTheme.styles.global.body);

export default customTheme;
