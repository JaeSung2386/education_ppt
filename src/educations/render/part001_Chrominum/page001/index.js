import { Slide, FlexBox } from "spectacle";
import { WelcomePage } from "../../../../common";

export default function Page001() {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <WelcomePage
          caption={"Rendering on the Web (part 1)"}
          title={"1. 크로미움(Chromium)"}
          title2={"2. 렌더링 엔진(Rendering Engine)"}
          title3={"3. 웹 브라우저(Web Browser)"}
        />
      </FlexBox>
    </Slide>
  );
}
