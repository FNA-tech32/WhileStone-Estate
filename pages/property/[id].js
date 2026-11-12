import Link from "next/link";
import {
  Box,
  Flex,
  Text,
  Avatar,
  Button,
  SimpleGrid,
  HStack,
  Icon,
  Badge,
} from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { FiPhone, FiPhoneCall, FiMail, FiSend } from "react-icons/fi";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import ImageScrollbar from "../../components/ImageScrollbar";
import millify from "millify";

const PropertyDetails = ({ propertyDetails = {} }) => {
  const {
    price = 0,
    rentFrequency,
    rooms = 0,
    title = "WhileStone Estate Property",
    baths = 0,
    area = 0,
    agency,
    isVerified = false,
    description = "",
    type = "Apartment",
    purpose = "for-rent",
    furnishingStatus,
    amenities = [],
    photos = [],
  } = propertyDetails || {};

  return (
    <Box maxWidth="1000px" margin="auto" p="4">
      {photos && photos.length > 0 && <ImageScrollbar data={photos} />}
      <Box w="full" p="6">
        <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Box paddingRight="3" color="green.400">
              {isVerified && <GoVerified />}
            </Box>
            <Text fontWeight="bold" fontSize="lg">
              AED {millify(price)}
              {rentFrequency && `/${rentFrequency}`}
            </Text>
          </Flex>
          <Box>
            <Avatar size="sm" src={agency?.logo?.url} />
          </Box>
        </Flex>
        {/* For Rooms */}
        <Flex
          alignItems="center"
          p="1"
          justifyContent="space-between"
          w="250px"
          color="blue.400"
        >
          {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
          <BsGridFill />
        </Flex>
        {/* For title and description */}
        <Box marginTop="2">
          <Text fontSize="lg" marginBottom="2" fontWeight="bold">
            {title}
          </Text>
          <Text lineHeight="2" color="gray.600">
            {description}
          </Text>
        </Box>
        <Flex
          flexWrap="wrap"
          textTransform="uppercase"
          justifyContent="space-between"
        >
          <Flex
            justifyContent="space-between"
            w="400px"
            borderBottom="1px"
            borderColor="gray.100"
            p="3"
          >
            <Text>Type</Text>
            <Text fontWeight="bold">{type}</Text>
          </Flex>
          <Flex
            justifyContent="space-between"
            w="400px"
            borderBottom="1px"
            borderColor="gray.100"
            p="3"
          >
            <Text>Purpose</Text>
            <Text fontWeight="bold">{purpose}</Text>
          </Flex>
          {furnishingStatus && (
            <Flex
              justifyContent="space-between"
              w="400px"
              borderBottom="1px"
              borderColor="gray.100"
              p="3"
            >
              <Text>Furnishing Status</Text>
              <Text fontWeight="bold">{furnishingStatus}</Text>
            </Flex>
          )}
        </Flex>
        {/* Amenities */}
        <Box>
          {amenities && amenities.length > 0 && (
            <Text fontSize="2xl" fontWeight="black" marginTop="5">
              Amenities
            </Text>
          )}
          <Flex flexWrap="wrap">
            {amenities?.map((item, idx) =>
              item.amenities?.map((amenity, aIdx) => (
                <Text
                  fontWeight="bold"
                  color="blue.400"
                  fontSize="l"
                  p="2"
                  bg="gray.200"
                  m="1"
                  borderRadius="5"
                  key={amenity.text || `${idx}-${aIdx}`}
                >
                  {amenity.text}
                </Text>
              ))
            )}
          </Flex>
        </Box>

        {/* Property Inquiry & WhileStone Estate Contact Card */}
        <Box
          mt="10"
          p="6"
          bg="blue.50"
          borderRadius="xl"
          border="1px"
          borderColor="blue.100"
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align={{ base: "flex-start", md: "center" }}
            mb="4"
            gap="2"
          >
            <Box>
              <Badge colorScheme="blue" mb="1">
                WhileStone Estate Advisory
              </Badge>
              <Text fontSize="xl" fontWeight="bold" color="blue.900">
                Interested in this Property?
              </Text>
              <Text fontSize="sm" color="gray.600">
                Speak directly with a WhileStone Estate advisor to schedule a tour or inquire.
              </Text>
            </Box>
            <Link href="/contact" passHref>
              <Button colorScheme="blue" leftIcon={<FiSend />} size="md">
                Send Property Inquiry
              </Button>
            </Link>
          </Flex>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing="4"
            pt="3"
            borderTop="1px"
            borderColor="blue.100"
          >
            <HStack spacing="3">
              <Icon as={FiPhone} color="blue.600" boxSize="5" />
              <Box>
                <Text fontSize="xs" fontWeight="bold" color="gray.600">
                  Primary Hotline:
                </Text>
                <Text
                  as="a"
                  href="tel:+18005550199"
                  fontSize="sm"
                  fontWeight="semibold"
                  color="blue.600"
                >
                  +1 (800) 555-0199
                </Text>
              </Box>
            </HStack>

            <HStack spacing="3">
              <Icon as={FiPhoneCall} color="green.600" boxSize="5" />
              <Box>
                <Text fontSize="xs" fontWeight="bold" color="gray.600">
                  Alternative Phone:
                </Text>
                <Text
                  as="a"
                  href="tel:+18005550144"
                  fontSize="sm"
                  fontWeight="semibold"
                  color="green.600"
                >
                  +1 (800) 555-0144
                </Text>
              </Box>
            </HStack>

            <HStack spacing="3">
              <Icon as={FiMail} color="blue.600" boxSize="5" />
              <Box>
                <Text fontSize="xs" fontWeight="bold" color="gray.600">
                  Email Inquiries:
                </Text>
                <Text
                  as="a"
                  href="mailto:info@whilestone-estate.com"
                  fontSize="sm"
                  fontWeight="semibold"
                  color="blue.600"
                >
                  info@whilestone-estate.com
                </Text>
              </Box>
            </HStack>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data || null,
    },
  };
}
