// Complete the Index page component here
// Use chakra-ui
import { Box, VStack, HStack, IconButton, Input, Text, Avatar, Divider, useColorModeValue, extendTheme, ChakraProvider } from "@chakra-ui/react";
import { FaPaperPlane, FaSmile } from "react-icons/fa";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.50",
      },
    },
  },
});

const messages = [
  { id: 1, text: "Hey! How's it going?", sender: "John", time: "10:30 AM", isUser: false },
  { id: 2, text: "Hi! All good, how about you?", sender: "You", time: "10:31 AM", isUser: true },
  { id: 3, text: "Great! Working on a new project. Need to catch up soon!", sender: "John", time: "10:32 AM", isUser: false },
  { id: 4, text: "Definitely! Let's arrange a meeting for next week.", sender: "You", time: "10:33 AM", isUser: true },
];

const Index = () => {
  const bg = useColorModeValue("white", "gray.700");

  return (
    <ChakraProvider theme={theme}>
      <Box maxW="400px" mx="auto" h="95vh" bg={bg} boxShadow="md" borderRadius="lg">
        <VStack h="full">
          <Box w="full" p={4} bg="blue.500" color="white" borderTopRadius="lg">
            <Text fontSize="lg" fontWeight="bold">
              Chat with John
            </Text>
          </Box>
          <VStack flex={1} p={4} overflowY="auto" spacing={4}>
            {messages.map((message) => (
              <HStack key={message.id} alignSelf={message.isUser ? "flex-end" : "flex-start"} maxW="70%">
                {!message.isUser && <Avatar size="sm" name={message.sender} />}
                <VStack align={message.isUser ? "flex-end" : "flex-start"}>
                  <Box p={3} bg={message.isUser ? "blue.100" : "gray.100"} borderRadius="lg">
                    <Text>{message.text}</Text>
                  </Box>
                  <Text fontSize="xs" color="gray.500">
                    {message.time}
                  </Text>
                </VStack>
                {message.isUser && <Avatar size="sm" name={message.sender} />}
              </HStack>
            ))}
          </VStack>
          <Divider />
          <HStack p={3}>
            <IconButton icon={<FaSmile />} variant="ghost" aria-label="Add emoji" />
            <Input placeholder="Type a message..." flex={1} />
            <IconButton icon={<FaPaperPlane />} colorScheme="blue" aria-label="Send message" />
          </HStack>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
