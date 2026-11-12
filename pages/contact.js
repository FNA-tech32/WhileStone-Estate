import React, { useState } from "react";
import Head from "next/head";
import {
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Select,
  Icon,
  HStack,
  VStack,
  Badge,
  useToast,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import {
  FiPhone,
  FiPhoneCall,
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
  FiCheckCircle,
  FiMessageSquare,
} from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "buying",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Inquiry Received",
        description:
          "Thank you for reaching out to WhileStone Estate. Our team will contact you shortly.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }, 800);
  };

  return (
    <>
      <Head>
        <title>Contact Us | WhileStone Estate</title>
        <meta
          name="description"
          content="Get in touch with WhileStone Estate. View our primary and alternative contact details, phone numbers, email addresses, and office locations."
        />
      </Head>

      <Box p={{ base: "4", md: "8" }} maxWidth="1200px" margin="auto">
        {/* Page Header */}
        <Box textAlign="center" py="8" px="4">
          <Badge colorScheme="blue" fontSize="sm" px="3" py="1" borderRadius="full" mb="3">
            WhileStone Estate Support & Advisory
          </Badge>
          <Heading as="h1" size="2xl" color="gray.800" mb="4">
            Get in Touch With WhileStone Estate
          </Heading>
          <Text fontSize="lg" color="gray.600" maxWidth="750px" margin="auto">
            Whether you are looking to purchase your dream home, find a premium rental,
            or speak to an estate advisor, connect with us through our primary or
            alternative communication channels.
          </Text>
        </Box>

        {/* Contact Cards Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="6" mb="12">
          {/* Card 1: Primary Details */}
          <Box
            p="6"
            bg="white"
            borderRadius="xl"
            border="1px"
            borderColor="blue.100"
            shadow="sm"
            _hover={{ shadow: "md" }}
            transition="all 0.2s"
          >
            <HStack mb="4">
              <Flex
                w="12"
                h="12"
                align="center"
                justify="center"
                borderRadius="lg"
                bg="blue.50"
                color="blue.500"
              >
                <Icon as={FiPhone} boxSize="6" />
              </Flex>
              <Box>
                <Heading size="md" color="gray.800">
                  Primary Contacts
                </Heading>
                <Text fontSize="xs" color="blue.600" fontWeight="bold">
                  DIRECT LINE
                </Text>
              </Box>
            </HStack>
            <Stack spacing="3" fontSize="sm" color="gray.600">
              <Box>
                <Text fontWeight="semibold" color="gray.700">
                  Customer Hotline:
                </Text>
                <Text
                  as="a"
                  href="tel:+18005550199"
                  color="blue.500"
                  fontWeight="medium"
                  _hover={{ textDecoration: "underline" }}
                >
                  +1 (800) 555-0199
                </Text>
              </Box>
              <Box>
                <Text fontWeight="semibold" color="gray.700">
                  Primary Email:
                </Text>
                <Text
                  as="a"
                  href="mailto:info@whilestone-estate.com"
                  color="blue.500"
                  fontWeight="medium"
                  _hover={{ textDecoration: "underline" }}
                >
                  info@whilestone-estate.com
                </Text>
              </Box>
              <Box>
                <Text fontWeight="semibold" color="gray.700">
                  Main Headquarters:
                </Text>
                <Text>
                  100 WhileStone Boulevard, Suite 400, Beverly Hills, CA 90210
                </Text>
              </Box>
            </Stack>
          </Box>

          {/* Card 2: Alternative Details */}
          <Box
            p="6"
            bg="white"
            borderRadius="xl"
            border="1px"
            borderColor="green.100"
            shadow="sm"
            _hover={{ shadow: "md" }}
            transition="all 0.2s"
          >
            <HStack mb="4">
              <Flex
                w="12"
                h="12"
                align="center"
                justify="center"
                borderRadius="lg"
                bg="green.50"
                color="green.500"
              >
                <Icon as={FiPhoneCall} boxSize="6" />
              </Flex>
              <Box>
                <Heading size="md" color="gray.800">
                  Alternative Details
                </Heading>
                <Text fontSize="xs" color="green.600" fontWeight="bold">
                  BACKUP & 24/7 SUPPORT
                </Text>
              </Box>
            </HStack>
            <Stack spacing="3" fontSize="sm" color="gray.600">
              <Box>
                <Text fontWeight="semibold" color="gray.700">
                  Alternative Phone:
                </Text>
                <Text
                  as="a"
                  href="tel:+18005550144"
                  color="green.600"
                  fontWeight="medium"
                  _hover={{ textDecoration: "underline" }}
                >
                  +1 (800) 555-0144
                </Text>
              </Box>
              <Box>
                <Text fontWeight="semibold" color="gray.700">
                  Alternative Email:
                </Text>
                <Text
                  as="a"
                  href="mailto:support@whilestone-estate.com"
                  color="green.600"
                  fontWeight="medium"
                  _hover={{ textDecoration: "underline" }}
                >
                  support@whilestone-estate.com
                </Text>
              </Box>
              <Box>
                <Text fontWeight="semibold" color="gray.700">
                  Alternative Office / East Coast Branch:
                </Text>
                <Text>
                  742 Evergreen Terrace, Financial District, New York, NY 10001
                </Text>
              </Box>
            </Stack>
          </Box>

          {/* Card 3: Instant Chat & Hours */}
          <Box
            p="6"
            bg="white"
            borderRadius="xl"
            border="1px"
            borderColor="purple.100"
            shadow="sm"
            _hover={{ shadow: "md" }}
            transition="all 0.2s"
          >
            <HStack mb="4">
              <Flex
                w="12"
                h="12"
                align="center"
                justify="center"
                borderRadius="lg"
                bg="purple.50"
                color="purple.500"
              >
                <Icon as={FiClock} boxSize="6" />
              </Flex>
              <Box>
                <Heading size="md" color="gray.800">
                  Hours & WhatsApp
                </Heading>
                <Text fontSize="xs" color="purple.600" fontWeight="bold">
                  RAPID ASSISTANCE
                </Text>
              </Box>
            </HStack>
            <Stack spacing="3" fontSize="sm" color="gray.600">
              <Box>
                <HStack color="green.600" mb="1">
                  <Icon as={BsWhatsapp} />
                  <Text fontWeight="semibold">WhatsApp Concierge:</Text>
                </HStack>
                <Text
                  as="a"
                  href="https://wa.me/15559876543"
                  target="_blank"
                  rel="noreferrer"
                  color="blue.500"
                  fontWeight="medium"
                  _hover={{ textDecoration: "underline" }}
                >
                  +1 (555) 987-6543
                </Text>
              </Box>
              <Box>
                <Text fontWeight="semibold" color="gray.700">
                  Monday – Friday:
                </Text>
                <Text>8:30 AM – 6:30 PM (EST / PST)</Text>
              </Box>
              <Box>
                <Text fontWeight="semibold" color="gray.700">
                  Saturday:
                </Text>
                <Text>10:00 AM – 4:00 PM</Text>
              </Box>
              <Box>
                <Text fontWeight="semibold" color="gray.700">
                  Sunday:
                </Text>
                <Text>By Appointment / 24/7 Digital Concierge</Text>
              </Box>
            </Stack>
          </Box>
        </SimpleGrid>

        {/* Contact Form & Information Split */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="10" mb="12">
          {/* Inquiry Form */}
          <Box
            p={{ base: "6", md: "8" }}
            bg="white"
            borderRadius="2xl"
            border="1px"
            borderColor="gray.200"
            shadow="md"
          >
            <Heading size="lg" mb="2" color="gray.800">
              Send an Inquiry
            </Heading>
            <Text color="gray.600" mb="6" fontSize="sm">
              Fill out the form below and an official WhileStone Estate property advisor
              will follow up with tailored assistance.
            </Text>

            {submitted ? (
              <Alert
                status="success"
                variant="subtle"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                borderRadius="xl"
                p="8"
              >
                <AlertIcon boxSize="40px" mr={0} />
                <AlertTitle mt={4} mb={1} fontSize="lg">
                  Thank You for Contacting WhileStone Estate!
                </AlertTitle>
                <AlertDescription maxWidth="sm" color="gray.600" fontSize="sm">
                  Your message has been safely logged. An estate agent will reach out via
                  your specified contact method within 2 to 4 business hours.
                </AlertDescription>
                <Button
                  mt="6"
                  size="sm"
                  colorScheme="blue"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      purpose: "buying",
                      message: "",
                    });
                  }}
                >
                  Send Another Message
                </Button>
              </Alert>
            ) : (
              <form onSubmit={handleSubmit}>
                <VStack spacing="4">
                  <FormControl isRequired>
                    <FormLabel fontSize="sm" fontWeight="semibold">
                      Your Name
                    </FormLabel>
                    <Input
                      name="name"
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={handleChange}
                      focusBorderColor="blue.500"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel fontSize="sm" fontWeight="semibold">
                      Email Address
                    </FormLabel>
                    <Input
                      type="email"
                      name="email"
                      placeholder="e.g. eleanor@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      focusBorderColor="blue.500"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel fontSize="sm" fontWeight="semibold">
                      Phone Number (Primary or Alternative)
                    </FormLabel>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="e.g. +1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      focusBorderColor="blue.500"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel fontSize="sm" fontWeight="semibold">
                      Inquiry Purpose
                    </FormLabel>
                    <Select
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      focusBorderColor="blue.500"
                    >
                      <option value="buying">Looking to Buy Property</option>
                      <option value="renting">Looking to Rent Home / Apartment</option>
                      <option value="selling">Selling / Property Listing</option>
                      <option value="valuation">Property Valuation & Advisory</option>
                      <option value="general">Alternative Inquiry / Customer Support</option>
                    </Select>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel fontSize="sm" fontWeight="semibold">
                      Message & Requirements
                    </FormLabel>
                    <Textarea
                      name="message"
                      rows={4}
                      placeholder="Share details regarding your preferred location, budget, number of bedrooms, or special requests..."
                      value={formData.message}
                      onChange={handleChange}
                      focusBorderColor="blue.500"
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    colorScheme="blue"
                    size="lg"
                    width="full"
                    leftIcon={<FiSend />}
                    isLoading={isSubmitting}
                    loadingText="Sending Inquiry..."
                  >
                    Submit Inquiry to WhileStone Estate
                  </Button>
                </VStack>
              </form>
            )}
          </Box>

          {/* Additional Estate Information & Guarantees */}
          <VStack spacing="6" align="stretch" justify="center">
            <Box p="6" bg="blue.50" borderRadius="2xl" border="1px" borderColor="blue.100">
              <HStack align="flex-start" spacing="4">
                <Icon as={FiCheckCircle} color="blue.500" boxSize="6" mt="1" />
                <Box>
                  <Heading size="md" color="blue.900" mb="1">
                    Verified Listings & Trusted Agents
                  </Heading>
                  <Text fontSize="sm" color="blue.800">
                    At WhileStone Estate, every listed home and apartment is verified for
                    authenticity, clear titles, and accurate photos before publication.
                  </Text>
                </Box>
              </HStack>
            </Box>

            <Box p="6" bg="green.50" borderRadius="2xl" border="1px" borderColor="green.100">
              <HStack align="flex-start" spacing="4">
                <Icon as={FiPhoneCall} color="green.600" boxSize="6" mt="1" />
                <Box>
                  <Heading size="md" color="green.900" mb="1">
                    Alternative Support Guarantee
                  </Heading>
                  <Text fontSize="sm" color="green.800">
                    If our primary phone lines are engaged, our dedicated alternative line (
                    <strong>+1 800 555-0144</strong>) and WhatsApp concierge are always
                    on standby to ensure you never miss an opportunity.
                  </Text>
                </Box>
              </HStack>
            </Box>

            <Box p="6" bg="gray.50" borderRadius="2xl" border="1px" borderColor="gray.200">
              <HStack align="flex-start" spacing="4">
                <Icon as={FiMessageSquare} color="gray.600" boxSize="6" mt="1" />
                <Box>
                  <Heading size="md" color="gray.800" mb="1">
                    Tailored Consultations
                  </Heading>
                  <Text fontSize="sm" color="gray.600">
                    Schedule a private in-person viewing or virtual video walkthrough
                    at your convenience with our licensed WhileStone Estate realtors.
                  </Text>
                </Box>
              </HStack>
            </Box>
          </VStack>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Contact;

