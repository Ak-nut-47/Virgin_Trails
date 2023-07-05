import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoMdGlobe } from "react-icons/io";
import { FaHiking } from "react-icons/fa";
import { BiPhone } from "react-icons/bi";
import logo from "../assets/Logo/virginTrails.png";
import AdventureTypes from "../Components/NavbarComponents/AdventureTypes";
import ContactOptions from "../Components/NavbarComponents/ContactOptions";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Flex
        fontFamily={"poppins"}
        color={"white"}
        bgColor={"#0d8377"}
        p={"10px 0px"}
        position={"fixed"}
        top={0}
        left={0}
        zIndex={2}
        w="100%"
        box-shadow="rgba(0, 0, 0, 0.2) 0px 18px 50px -10px"
        h={50}
        onMouseEnter={() => setShowMenu(false)}
      >
        <Flex w={"50%"}>
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Image src={logo} alt="" ml={20} boxSize="80px" />
          </Flex>
        </Flex>
        <Flex
          w={"50%"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={15}
        >
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            gap={5}
            p={"5px 7px"}
            borderRadius={10}
            _hover={{ backgroundColor: "#005747", cursor: "pointer" }}
            // onMouseLeave={() => setShowMenu(false)}
            padding={"7px 10px"}
          >
            <span> Destinations</span> <Icon as={IoMdGlobe} />
          </Flex>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            gap={5}
            p={"5px 7px"}
            borderRadius={10}
            _hover={{ backgroundColor: "#005747", cursor: "pointer" }}
            onMouseEnter={() => {
              setShowMenu("adventuretype");
            }}
            bgColor={
              showMenu == "adventuretype"
                ? "#005747"
                : showMenu == "contactoptions"
                ? "#0d8377"
                : null
            }
            padding={"7px 10px"}
            // onClick={() => {
            //   if (showMenu !== false) {
            //     setShowMenu(false);
            //   }
            // }}
          >
            <span>Adventure Styles</span> <Icon as={FaHiking} />
          </Flex>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            gap={5}
            p={"5px 7px"}
            borderRadius={10}
            bgColor={
              showMenu == "adventuretype"
                ? "#0d8377"
                : showMenu == "contactoptions"
                ? "#005747"
                : null
            }
            _hover={{ backgroundColor: "#005747", cursor: "pointer" }}
            padding={"7px 10px"}
            onMouseEnter={() => {
              setShowMenu("contactoptions");
            }}
            // onClick={() => {
            //   if (showMenu !== false) {
            //     setShowMenu(false);
            //   }
            // }}
          >
            <span>Contact</span> <Icon as={BiPhone} />
          </Flex>
        </Flex>
      </Flex>
      // -----------------------------
      {showMenu === "adventuretype" ? (
        <AdventureTypes setShowMenu={setShowMenu} />
      ) : showMenu === "contactoptions" ? (
        <ContactOptions setShowMenu={setShowMenu} />
      ) : null}
    </>
  );
};

export default Navbar;
