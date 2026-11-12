import React from "react";
import Link from "next/link";
import {
  Box,
  Flex,
  Text,
  SimpleGrid,
  Stack,
  Divider,
  HStack,
  Icon,
} from "@chakra-ui/react";
import {
  FiPhone,
  FiPhoneCall,
  FiMail,
  FiMapPin,
  FiClock,
} from "react-icons/fi";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="gray.50"
      color="gray.700"
      borderTop="1px"
      borderColor="gray.200"
      mt="12"
      pt="10"
      pb="6"
      px={{ base: "4", md: "8" }}
    >
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="8" mb="8">
        {/* Brand Section */}
        <Stack spacing="3">
          <Text fontSize="2xl" fontWeight="bold" color="blue.500">
            WhileStone Estate
          </Text>
          <Text fontSize="sm" color="gray.600" lineHeight="tall">
            WhileStone Estate is your premier property partner, offering a curated
            portfolio of rental homes, prime apartments, and luxury villas. We
            connect you with the best residential and commercial spaces.
          </Text>
        </Stack>

        {/* Quick Links */}
        <Stack spacing="3">
          <Text fontSize="md" fontWeight="bold" color="gray.800" textTransform="uppercase">
            Quick Links
          </Text>
          <Stack spacing="2" fontSize="sm">
            <Link href="/" passHref>
              <Text as="a" cursor="pointer" _hover={{ color: "blue.500" }}>
                Home
              </Text>
            </Link>
            <Link href="/search" passHref>
              <Text as="a" cursor="pointer" _hover={{ color: "blue.500" }}>
                Search Properties
              </Text>
            </Link>
            <Link href="/search?purpose=for-sale" passHref>
              <Text as="a" cursor="pointer" _hover={{ color: "blue.500" }}>
                Buy Property
              </Text>
            </Link>
            <Link href="/search?purpose=for-rent" passHref>
              <Text as="a" cursor="pointer" _hover={{ color: "blue.500" }}>
                Rent Property
              </Text>
            </Link>
            <Link href="/contact" passHref>
              <Text as="a" cursor="pointer" _hover={{ color: "blue.500" }}>
                Contact & Support
              </Text>
            </Link>
          </Stack>
        </Stack>

        {/* Primary Contact Details */}
        <Stack spacing="3">
          <Text fontSize="md" fontWeight="bold" color="gray.800" textTransform="uppercase">
            Contact Details
          </Text>
          <Stack spacing="2" fontSize="sm" color="gray.600">
            <HStack align="flex-start" spacing="2">
              <Icon as={FiPhone} color="blue.500" mt="1" />
              <Box>
                <Text fontWeight="medium" color="gray.800">Primary Phone:</Text>
                <Text as="a" href="tel:+18005550199" _hover={{ color: "blue.500" }}>
                  +1 (800) 555-0199
                </Text>
              </Box>
            </HStack>

            <HStack align="flex-start" spacing="2">
              <Icon as={FiMail} color="blue.500" mt="1" />
              <Box>
                <Text fontWeight="medium" color="gray.800">Primary Email:</Text>
                <Text as="a" href="mailto:info@whilestone-estate.com" _hover={{ color: "blue.500" }}>
                  info@whilestone-estate.com
                </Text>
              </Box>
            </HStack>

            <HStack align="flex-start" spacing="2">
              <Icon as={FiMapPin} color="blue.500" mt="1" />
              <Box>
                <Text fontWeight="medium" color="gray.800">Headquarters:</Text>
                <Text>100 WhileStone Blvd, Suite 400, Beverly Hills, CA 90210</Text>
              </Box>
            </HStack>
          </Stack>
        </Stack>

        {/* Alternative Contact Details */}
        <Stack spacing="3">
          <Text fontSize="md" fontWeight="bold" color="gray.800" textTransform="uppercase">
            Alternative Details
          </Text>
          <Stack spacing="2" fontSize="sm" color="gray.600">
            <HStack align="flex-start" spacing="2">
              <Icon as={FiPhoneCall} color="green.500" mt="1" />
              <Box>
                <Text fontWeight="medium" color="gray.800">Alternative Phone / Hotline:</Text>
                <Text as="a" href="tel:+18005550144" _hover={{ color: "blue.500" }}>
                  +1 (800) 555-0144
                </Text>
                <Text fontSize="xs" color="gray.500">WhatsApp: +1 (555) 987-6543</Text>
              </Box>
            </HStack>

            <HStack align="flex-start" spacing="2">
              <Icon as={FiMail} color="green.500" mt="1" />
              <Box>
                <Text fontWeight="medium" color="gray.800">Alternative / Support Email:</Text>
                <Text as="a" href="mailto:support@whilestone-estate.com" _hover={{ color: "blue.500" }}>
                  support@whilestone-estate.com
                </Text>
              </Box>
            </HStack>

            <HStack align="flex-start" spacing="2">
              <Icon as={FiClock} color="blue.500" mt="1" />
              <Box>
                <Text fontWeight="medium" color="gray.800">Working Hours:</Text>
                <Text>Mon - Fri: 8:30 AM - 6:30 PM</Text>
                <Text>Sat: 10:00 AM - 4:00 PM</Text>
              </Box>
            </HStack>
          </Stack>
        </Stack>
      </SimpleGrid>

      <Divider borderColor="gray.200" mb="6" />

      {/* Copyright Bar */}
      <Flex
        direction={{ base: "column", sm: "row" }}
        justify="space-between"
        align="center"
        fontSize="xs"
        color="gray.500"
        gap="2"
      >
        <Text>© {new Date().getFullYear()} WhileStone Estate, Inc. All rights reserved.</Text>
        <HStack spacing="4">
          <Link href="/contact" passHref>
            <Text as="a" cursor="pointer" _hover={{ color: "blue.500" }}>
              Inquiries
            </Text>
          </Link>
          <Text>•</Text>
          <Link href="/search" passHref>
            <Text as="a" cursor="pointer" _hover={{ color: "blue.500" }}>
              Listings
            </Text>
          </Link>
          <Text>•</Text>
          <Text>Privacy Policy</Text>
          <Text>•</Text>
          <Text>Terms of Service</Text>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;
