import { useState } from 'react'
import { Button, Box, Wrap, WrapItem, ButtonGroup, Stack } from "@chakra-ui/react";
import './App.css'

function App() {
  return (
    <>
      <Stack direction="column">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          py={12}
          bgImage="url('https://bit.ly/2Z4KKcF')"
          bgPosition="center"
          bgRepeat="no-repeat"
          mb={2}
        >
          <ButtonGroup gap="4">
            <Button colorScheme="whiteAlpha">WhiteAlpha</Button>
            <Button colorScheme="blackAlpha">BlackAlpha</Button>
          </ButtonGroup>
        </Box>

        <Wrap spacing={4}>
          <WrapItem>
            <Button colorScheme="gray">Gray</Button>
          </WrapItem>
        </Wrap>
      </Stack>
    </>
  );
}

export default App
