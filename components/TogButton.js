import { IconButton } from '@chakra-ui/button';
import { MoonIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react';

const TogButton = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			<header className="bg-dark d-flex justify-content-end">
				<IconButton
					backgroundColor="teal"
					icon={<MoonIcon />}
					onClick={toggleColorMode}
					m={3}
				>
					Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
				</IconButton>
			</header>
		</>
	);
};
export default TogButton;
