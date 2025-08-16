import {
  Box,
  Button,
  HStack,
  Heading,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoDiamondOutline, IoDocument } from "react-icons/io5";
import { PiHamburgerFill } from "react-icons/pi";
import { TbBriefcaseFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import TransitionWrapper from "./Transition";

import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";

import resume from "../src/assets/resume/arvind_resume.pdf";
import axios from "axios";
import { Bounce, toast } from "react-toastify";

const Header = () => {
  // const [isLiked, setIsLiked] = useState(false);
  // const [likes, setLikes] = useState(0);

  // useEffect(() => {
  //   const checkLike = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://portfolio-server-jyzo.onrender.com/is-liked`
  //       );
  //       console.log(response.data);
  //       setIsLiked(response.data.isLiked);
  //     } catch (error) {
  //       console.error("Error posting like:", error);
  //     }
  //   };

  //   checkLike();
  // }, [isLiked]);

  // const postLike = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://portfolio-server-jyzo.onrender.com/like`
  //     );
  //     setIsLiked(true);
  //     setLikes(response.data.likes);
  //     toast.success(response.data.message, {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "dark",
  //       transition: Bounce,
  //     });
  //   } catch (error) {
  //     console.error("Error posting like:", error);
  //   }
  // };

  // const postDislike = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://portfolio-server-jyzo.onrender.com/dislike`
  //     );
  //     setIsLiked(false);
  //     setLikes(response.data.likes);
  //     toast.error(response.data.message, {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "dark",
  //       transition: Bounce,
  //     });
  //   } catch (error) {
  //     console.error("Error posting dislike:", error);
  //   }
  // };

  // const handleLikeAndDislike = (isLiked) => {
  //   if (isLiked) postDislike();
  //   else postLike();
  // };

  return (
    <TransitionWrapper>
      <HStack
        p={3}
        justifyContent={"space-between"}
        alignItems={"center"}
        borderBottom={"1px solid rgb(54, 54, 54)"}
      >
        <Link to={"/"}>
          <HStack>
            <IoDiamondOutline color="gold" size={"18"} />
            <Heading fontFamily={"Sofia"} fontSize={["1rem", "md", "xl", "xl"]}>
              Arvind Kumar
            </Heading>
          </HStack>
        </Link>
        <HStack display={["none", "flex", "flex", "flex"]} gap={2}>
          {/* <Button
            onClick={() => handleLikeAndDislike(isLiked)}
            variant={""}
            size={["xs", "sm", "sm", "sm"]}
          >
            <HStack alignItems={"center"} justifyContent={"center"}>
              <Box>
                {isLiked ? (
                  <FcLike size={"18"} />
                ) : (
                  <FcLikePlaceholder size={"18"} />
                )}
              </Box>
              <Text>{likes}</Text>
            </HStack>
          </Button> */}
          <a
            href="mailto:dev.arvindofficial@gmail.com?subject=Hiring%20Inquiry&body=Hello%20Arvind,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20project%20opportunity%20with%20you."
            rel="noopener noreferrer"
          >
            <Button
              background="purple.100"
              color="white"
              size={["xs", "sm", "sm", "sm"]}
              _hover={{ backgroundColor: "purple.200" }}
              gap={2}
            >
              Hire Me <TbBriefcaseFilled />
            </Button>
          </a>

          <Text as={"a"} href={resume} type="image/pdf">
            <Button size={["xs", "sm", "sm", "sm"]} gap={1}>
              Resume <IoDocument />
            </Button>
          </Text>
        </HStack>

        <HStack display={["flex", "none", "none", "none"]} gap={1}>
          {/* <Button
            onClick={() => handleLikeAndDislike(isLiked)}
            variant={""}
            size={["xs", "sm", "sm", "sm"]}
          >
            <HStack
              right={4}
              position={"relative"}
              gap={1}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box>
                {isLiked ? (
                  <FcLike size={"18"} />
                ) : (
                  <FcLikePlaceholder size={"18"} />
                )}
              </Box>
              <Text>{likes}</Text>
            </HStack>
          </Button> */}
          <Menu>
            <MenuButton
              right={2}
              size={"sm"}
              as={IconButton}
              aria-label="Options"
              icon={<PiHamburgerFill size={"16"} />}
              variant={"ghost"}
              bg={"#5141ff"}
              color={"white"}
              _hover={{ color: "black", bg: "white" }}
              _active={{ color: "black", bg: "white" }}
            />
            <MenuList bg={"#25282c"} border={"none"}>
              <MenuItem
                width={"full"}
                borderRadius={"md"}
                _hover={{ bg: "#5141ff", color: "white" }}
                bg={"#25282c"}
              >
                <Link
                  style={{ width: "100%" }}
                  to="mailto:deependraparmar1@gmail.com"
                  target="_blank"
                >
                  <HStack>
                    <Text fontSize={"sm"}>Hire Me</Text>
                    <TbBriefcaseFilled />
                  </HStack>
                </Link>
              </MenuItem>
              <MenuItem
                width={"full"}
                borderRadius={"md"}
                _hover={{ bg: "#5141ff", color: "white" }}
                bg={"#25282c"}
              >
                <Text
                  as={"a"}
                  style={{ width: "100%" }}
                  href={resume}
                  type="image/pdf"
                  target="_blank"
                >
                  <HStack>
                    <Text fontSize={"sm"}>Resume</Text>
                    <IoDocument />
                  </HStack>
                </Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </HStack>
    </TransitionWrapper>
  );
};

export default Header;
