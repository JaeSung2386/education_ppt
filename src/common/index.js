import { Heading, Text } from "spectacle";

export const WelcomePage = ({
  caption,
  caption2,
  title,
  title2,
  title3,
  subtitle,
}) => (
  <>
    <Heading margin="0px" fontSize="h1">
      {caption}
    </Heading>
    {caption2 && (
      <Heading margin="0px" fontSize={36} fontWeight={400} fontStyle={"italic"}>
        {caption2}
      </Heading>
    )}
    <Heading margin="0px 32px" color="primary" fontSize="h3">
      {title}
    </Heading>
    {title2 && (
      <Heading margin="0px 32px" color="primary" fontSize="h3">
        {title2}
      </Heading>
    )}
    {title3 && (
      <Heading margin="0px 32px" color="primary" fontSize="h3">
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
