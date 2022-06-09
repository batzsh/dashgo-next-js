import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Henrique Balmant</Text>
          <Text color='gray.300' fontSize='small'>
            henrique.balmant@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size='md'
        name='Henrique Balmant'
        src='https://github.com/henbalmant.png'
      />
    </Flex>
  );
}
