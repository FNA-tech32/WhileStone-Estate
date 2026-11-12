// Navbar, content, footer layout wrapper
import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>WhileStone Estate | Luxury Properties, Rentals & Real Estate</title>
      <meta
        name="description"
        content="WhileStone Estate - Discover luxury rental homes, properties for sale, villas, and apartments with advanced search, interactive filters, and verified listings."
      />
      <meta
        name="keywords"
        content="WhileStone Estate, real estate, luxury homes, apartments for rent, buy villa, property search, estate agency"
      />
      <meta property="og:title" content="WhileStone Estate | Luxury Properties & Real Estate" />
      <meta
        property="og:description"
        content="Explore premier rental homes, residential apartments, and luxury villas with WhileStone Estate."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Box maxWidth="1280px" m="auto" minHeight="100vh" display="flex" flexDirection="column">
      <header>
        <Navbar />
      </header>
      <Box as="main" flex="1">
        {children}
      </Box>
      <footer>
        <Footer />
      </footer>
    </Box>
  </>
);

export default Layout;
