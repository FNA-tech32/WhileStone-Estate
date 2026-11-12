import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { Flex, Box, Text, Icon, Button } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';

import Property from '../components/Property';
import SearchFilters from '../components/SearchFilters';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import noresult from '../assets/images/noresult.svg';

const Search = ({ properties = [] }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  const purposeTitle =
    router.query.purpose === 'for-sale'
      ? 'For Sale'
      : router.query.purpose === 'for-rent'
      ? 'For Rent'
      : router.query.purpose || 'Available';

  return (
    <Box>
      <Flex
        onClick={() => setSearchFilters(!searchFilters)}
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="3"
        fontWeight="bold"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
        _hover={{ bg: "gray.200" }}
        transition="background-color 0.2s"
      >
        <Text>Search WhileStone Estate Properties By Filters</Text>
        <Icon paddingLeft="2" w="7" h="6" as={BsFilter} />
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize="2xl" p="4" fontWeight="bold" color="gray.800">
        WhileStone Estate Listings: {purposeTitle}
      </Text>
      <Flex flexWrap="wrap" justifyContent="center">
        {properties?.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      {(!properties || properties.length === 0) && (
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          marginTop="8"
          marginBottom="12"
          p="6"
        >
          <Image src={noresult} alt="No property found" />
          <Text fontSize="xl" fontWeight="semibold" marginTop="4" color="gray.700">
            No Properties Found Matching Criteria
          </Text>
          <Text fontSize="sm" color="gray.500" mt="1" maxW="400px" textAlign="center">
            Looking for a specific property or off-market listing? Contact WhileStone Estate
            directly and our brokers will source it for you.
          </Text>
          <Link href="/contact" passHref>
            <Button
              mt="4"
              colorScheme="blue"
              size="md"
              leftIcon={<FiPhoneCall />}
            >
              Contact WhileStone Estate Support
            </Button>
          </Link>
        </Flex>
      )}
    </Box>
  );
};

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const roomsMin = query.roomsMin || '0';
  const bathsMin = query.bathsMin || '0';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000';
  const locationExternalIDs = query.locationExternalIDs || '5002';
  const categoryExternalID = query.categoryExternalID || '4';

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits || [],
    },
  };
}

export default Search;
