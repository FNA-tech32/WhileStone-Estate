import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
  HStack,
  Text,
} from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey, FiPhoneCall } from "react-icons/fi";

const Navbar = () => (
  <Flex
    p="4"
    borderBottom="1px"
    borderColor="gray.100"
    alignItems="center"
    bg="white"
    position="sticky"
    top="0"
    zIndex="10"
    boxShadow="sm"
  >
    <Box fontSize={["2xl", "3xl"]} color="blue.500" fontWeight="extrabold" letterSpacing="tight">
      <Link href="/" passHref>
        <Text as="span" cursor="pointer" _hover={{ color: "blue.600" }}>
          WhileStone Estate
        </Text>
      </Link>
    </Box>
    <Spacer />
    <HStack spacing="4">
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FcMenu />}
          variant="outline"
          borderColor="gray.200"
          aria-label="Toggle navigation menu"
          _hover={{ bg: "gray.50" }}
        />
        <MenuList shadow="lg" borderColor="gray.100">
          <Link href="/" passHref>
            <MenuItem icon={<FcHome fontSize="1.2rem" />}>Home</MenuItem>
          </Link>
          <Link href="/search" passHref>
            <MenuItem icon={<BsSearch color="#3182ce" />}>Search Properties</MenuItem>
          </Link>
          <Link href="/search?purpose=for-sale" passHref>
            <MenuItem icon={<FcAbout fontSize="1.2rem" />}>Buy Property</MenuItem>
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
            <MenuItem icon={<FiKey color="#3182ce" />}>Rent Property</MenuItem>
          </Link>
          <Link href="/contact" passHref>
            <MenuItem icon={<FiPhoneCall color="#38a169" />}>Contact Us</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </HStack>
  </Flex>
);

export default Navbar;
