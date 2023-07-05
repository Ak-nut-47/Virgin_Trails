import React from "react";
import { Box, Center, Flex, Icon } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { SiFacebook, SiInstagram } from "react-icons/si";

const ContactOptions = ({ setShowMenu }) => {
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
              //   border: "1px solid #005747",
              borderRadius: "10px",
            }}
          >
            <Icon as={FaPhone} color="#0d8377" />
            <span>Phone</span>
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
              //   border: "1px solid #005747",
              borderRadius: "10px",
            }}
          >
            <Icon as={FaEnvelope} color="#0d8377" />
            <span>Email</span>
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
              //   border: "1px solid #005747",
              borderRadius: "10px",
            }}
          >
            <Icon as={FaWhatsapp} color="#0d8377" />
            <span>WhatsApp</span>
          </Flex>
          <Flex
            alignItems="center"
            gap={10}
            p={10}
            _hover={{
              cursor: "pointer",
              bgColor: "#eae9e9",
              bgColor: "#00ffe555",
              //   border: "1px solid #005747",
              borderRadius: "10px",
            }}
          >
            <Icon as={FaLinkedin} color="#0d8377" />
            <span>LinkedIn</span>
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
              //   border: "1px solid #005747",
              borderRadius: "10px",
            }}
          >
            <Icon as={SiFacebook} color="#0d8377" />
            <span>Facebook</span>
          </Flex>
          <Flex
            alignItems="center"
            gap={10}
            p={10}
            _hover={{
              cursor: "pointer",
              bgColor: "#eae9e9",
              bgColor: "#00ffe555",
              //   border: "1px solid #005747",
              borderRadius: "10px",
            }}
          >
            <Icon as={SiInstagram} color="#0d8377" />
            <span>Instagram</span>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ContactOptions;
