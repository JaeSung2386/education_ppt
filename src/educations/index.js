import {
  Appear,
  Box,
  CodeSpan,
  Deck,
  FlexBox,
  FullScreen,
  Grid,
  Heading,
  Image,
  ListItem,
  Progress,
  Slide,
  Stepper,
  Text,
  UnorderedList,
} from 'spectacle';

import Chrominum from "./render/part001_Chrominum";

const HEADER_COLOR = "#2f3e46";

function template() {
  return (
    <FlexBox
      justifyContent="space-between"
      position="absolute"
      bottom={0}
      width={1}
    >
      <Box padding="0 1em">
        <FullScreen color={HEADER_COLOR} />
      </Box>
      <Box padding="1em">
        <Progress color={HEADER_COLOR} />
      </Box>
    </FlexBox>
  )
}

const theme = {
  fonts: {
    header: 'Roboto, "Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: 'Lobster, "Open Sans Condensed", Helvetica, Arial, sans-serif'
  }
}

export default function Render() {
  return (
    <Deck template={template} theme={theme} transitionEffect="fade">
      <Chrominum />
    </Deck>
  )
}