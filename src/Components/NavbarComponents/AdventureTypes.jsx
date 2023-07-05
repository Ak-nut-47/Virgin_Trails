import React from "react";
import { Box, Center, Flex, Icon } from "@chakra-ui/react";
import {
  FaHiking,
  FaCampground,
  FaMountain,
  FaSchool,
  FaBus,
  FaTree,
  FaChalkboardTeacher,
  FaMapMarkedAlt,
  FaUserFriends,
  FaGlobe,
} from "react-icons/fa";
import { GiUndergroundCave } from "react-icons/gi";

const AdventureTypes = ({ setShowMenu }) => {
  return (
    <Flex
      bg="#fff"
      border="1px solid #0d8377"
      borderRadius="8px"
      p="30px 50px"
      mx="auto"
      position={"absolute"}
      top={80}
      right={100}
      zIndex={15}
      onMouseLeave={() => {
        setShowMenu(false);
      }}
    >
      <Flex justifyContent="space-between" gap={60}>
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
            <Icon as={FaHiking} color="#0d8377" />
            <span>Group Expeditions</span>
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
            <Icon as={FaCampground} color="#0d8377" />
            <span>Educational Outings</span>
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
            <Icon as={FaMountain} color="#0d8377" />
            <span>Outdoor Learning</span>
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
            <Icon as={FaSchool} color="#0d8377" />
            <span>Adventure Retreats</span>
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
            <Icon as={FaBus} color="#0d8377" />
            <span>Field Trips</span>
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
            <Icon as={FaTree} color="#0d8377" />
            <span>Nature Camps</span>
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
            <Icon as={FaChalkboardTeacher} color="#0d8377" />
            <span>Experiential Education</span>
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
            <Icon as={FaMapMarkedAlt} color="#0d8377" />
            <span>Wilderness Excursions</span>
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
            <Icon as={FaUserFriends} color="#0d8377" />
            <span>Educational Adventures</span>
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
            <Icon as={FaGlobe} color="#0d8377" />
            <span>Outdoor Explorations</span>
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
            <Icon as={GiUndergroundCave} color="#0d8377" />
            <span>Cave Exploration</span>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AdventureTypes;
