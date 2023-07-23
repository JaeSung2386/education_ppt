import { Heading, Text } from "spectacle";

const SLIDE_BG_COLOR = "#edf2fb";
const HEADER_COLOR = "#2f3e46";
const HEADER_SIZE = "36px";
const TEXT_COLOR = "#354f52"
const TEXT_HILGHLIGHT_COLOR = "#5fa8d3";

export const WelcomePage = ({
  caption,
  caption2,
  title,
  title2,
  title3,
  subtitle,
}) => (
  <>
    <Heading margin="0px" fontSize="h1" color={TEXT_HILGHLIGHT_COLOR}>
      {caption}
    </Heading>
    {caption2 && (
      <Heading margin="0px" fontSize={36} fontWeight={400} fontStyle={"italic"}>
        {caption2}
      </Heading>
    )}
    <Heading margin="0px 32px" color={HEADER_COLOR} fontSize="h3">
      {title}
    </Heading>
    {title2 && (
      <Heading margin="0px 32px" color={HEADER_COLOR} fontSize="h3">
        {title2}
      </Heading>
    )}
    {title3 && (
      <Heading margin="0px 32px" color={HEADER_COLOR} fontSize="h3">
        {title3}
      </Heading>
    )}
    {subtitle && (
      <Text margin="0px 32px" color=" gray" fontSize="42px">
        {subtitle}
      </Text>
    )}
  </>
);
