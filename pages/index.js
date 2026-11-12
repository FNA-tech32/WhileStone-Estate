import Link from "next/link";
import Image from "next/image";
import {
  Flex,
  Box,
  Text,
  Button,
  Heading,
  HStack,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { FiPhone, FiPhoneCall, FiMail } from "react-icons/fi";

import Property from "../components/Property";
import { baseUrl, fetchApi } from "../utils/fetchApi";

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt={title1} />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
        {desc1}
        <br />
        {desc2}
      </Text>
      <Link href={linkName} passHref>
        <Button fontSize="xl" colorScheme="blue">
          {buttonText}
        </Button>
      </Link>
    </Box>
  </Flex>
);

export default function Home({ propertiesForSale = [], propertiesForRent = [] }) {
  return (
    <Box>
      <Banner
        purpose="RENT A HOME WITH WHILESTONE ESTATE"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore from Apartments, builder floors, villas"
        desc2="and more with WhileStone Estate"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap" justifyContent="center">
        {propertiesForRent?.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>

      <Banner
        purpose="BUY A HOME WITH WHILESTONE ESTATE"
        title1="Find, Buy & Own Your"
        title2="Dream Home"
        desc1="Explore from Apartments, land, builder floors,"
        desc2="villas and more with WhileStone Estate"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <Flex flexWrap="wrap" justifyContent="center">
        {propertiesForSale?.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>

      {/* WhileStone Estate Direct Inquiry CTA */}
      <Box
        m={{ base: "6", md: "10" }}
        p={{ base: "6", md: "10" }}
        bg="blue.600"
        color="white"
        borderRadius="2xl"
        textAlign="center"
      >
        <Heading size="lg" mb="3">
          Have Questions About a Property?
        </Heading>
        <Text fontSize="md" maxW="600px" mx="auto" mb="6" opacity="0.95">
          Speak with a WhileStone Estate advisor today. Reach us via our primary hotline,
          alternative phone number, or online consultation form.
        </Text>
        <Stack
          direction={{ base: "column", sm: "row" }}
          spacing="4"
          justify="center"
          align="center"
          mb="6"
        >
          <HStack
            as="a"
            href="tel:+18005550199"
            bg="whiteAlpha.200"
            px="4"
            py="2"
            borderRadius="md"
            _hover={{ bg: "whiteAlpha.300" }}
          >
            <Icon as={FiPhone} />
            <Text fontSize="sm" fontWeight="bold">
              Call: +1 (800) 555-0199
            </Text>
          </HStack>
          <HStack
            as="a"
            href="tel:+18005550144"
            bg="whiteAlpha.200"
            px="4"
            py="2"
            borderRadius="md"
            _hover={{ bg: "whiteAlpha.300" }}
          >
            <Icon as={FiPhoneCall} />
            <Text fontSize="sm" fontWeight="bold">
              Alt: +1 (800) 555-0144
            </Text>
          </HStack>
          <HStack
            as="a"
            href="mailto:info@whilestone-estate.com"
            bg="whiteAlpha.200"
            px="4"
            py="2"
            borderRadius="md"
            _hover={{ bg: "whiteAlpha.300" }}
          >
            <Icon as={FiMail} />
            <Text fontSize="sm" fontWeight="bold">
              info@whilestone-estate.com
            </Text>
          </HStack>
        </Stack>
        <Link href="/contact" passHref>
          <Button bg="white" color="blue.600" size="lg" _hover={{ bg: "gray.100" }}>
            Contact WhileStone Estate
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

// Nextjs default function
export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits || [],
      propertiesForRent: propertyForRent?.hits || [],
    },
  };
}
