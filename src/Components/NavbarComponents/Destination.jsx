import React from "react";
import { Box, Center, Flex, Icon } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  MdLandscape,
  MdNaturePeople,
  MdTerrain,
  Md17Mp,
  MdLocationCity,
} from "react-icons/md";

const Destination = ({ setShowMenu }) => {
  return (
    <Box
      bg="#fff"
      border="1px solid #0d8377"
      borderRadius="8px"
      p="30px 50px"
      mx="auto"
      position="absolute"
      top={80}
      right={10}
      zIndex={15}
      onMouseLeave={() => {
        setShowMenu(false);
      }}
    >
      <Flex justifyContent="center" gap={60}>
        <Flex direction="column">
          <Flex
            alignItems="center"
            mb="10px"
            gap={10}
            p={10}
            _hover={{
              cursor: "pointer",
              bgColor: "#eae9e9",
              bgColor: "#00ffe555",
              borderRadius: "10px",
            }}
          >
            <Icon as={FaMapMarkerAlt} color="#0d8377" />
            <span>Assam</span>
          </Flex>
          <Flex
            alignItems="center"
            mb="10px"
            gap={10}
            p={10}
            _hover={{
              cursor: "pointer",
              bgColor: "#eae9e9",
              bgColor: "#00ffe555",
              borderRadius: "10px",
            }}
          >
            <Icon as={MdLandscape} color="#0d8377" />
            <span>Arunachal</span>
          </Flex>
          <Flex
            alignItems="center"
            mb="10px"
            gap={10}
            p={10}
            _hover={{
              cursor: "pointer",
              bgColor: "#eae9e9",
              bgColor: "#00ffe555",
              borderRadius: "10px",
            }}
          >
            <Icon as={MdNaturePeople} color="#0d8377" />
            <span>Nagaland</span>
          </Flex>
          <Flex
            alignItems="center"
            gap={10}
            p={10}
            _hover={{
              cursor: "pointer",
              bgColor: "#eae9e9",
              bgColor: "#00ffe555",
              borderRadius: "10px",
            }}
          >
            <Icon as={MdTerrain} color="#0d8377" />
            <span>Uttarakhand</span>
          </Flex>
        </Flex>

        <Flex direction="column">
          <Flex
            alignItems="center"
            mb="10px"
            gap={10}
            p={10}
            _hover={{
              cursor: "pointer",
              bgColor: "#eae9e9",
              bgColor: "#00ffe555",
              borderRadius: "10px",
            }}
          >
            <Icon as={Md17Mp} color="#0d8377" />
            <span>Meghalaya</span>
          </Flex>
          <Flex
            alignItems="center"
            gap={10}
            p={10}
            _hover={{
              cursor: "pointer",
              bgColor: "#eae9e9",
              bgColor: "#00ffe555",
              borderRadius: "10px",
            }}
          >
            <Icon as={MdLocationCity} color="#0d8377" />
            <span>City</span>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Destination;
