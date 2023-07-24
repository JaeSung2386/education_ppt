import {
  Deck,
  Slide,
  Heading,
  Text,
  FlexBox,
  Box,
  FullScreen,
  Progress,
  Notes,
  UnorderedList,
  ListItem,
  Grid,
  Image,
  Stepper,
  Link,
  CodeSpan,
  Appear,
} from "spectacle";
import { WelcomePage } from "../../common";

import ui_update_01 from "../../../img/ui_update_01.png";
import ui_update_02 from "../../../img/ui_update_02.png";
import ui_update_03 from "../../../img/ui_update_03.png";

const SLIDE_BG_COLOR = "white"; //"#edf2fb";
const HEADER_COLOR = "#2f3e46";
const HEADER_SIZE = "40px";
const TEXT_COLOR = "#354f52";
const TEXT_HILGHLIGHT_COLOR = "#5fa8d3";

const SourceLink = ({ text, url, desc }) => (
  <>
    <Text fontSize={30}>
      {text} <br />{" "}
      <Link fontSize={24} href={url} color="gray">
        {desc}
      </Link>
    </Text>
  </>
);

export default function Chromium() {
  return (
    <>
      {/* Start - OK */}
      <Slide backgroundColor={SLIDE_BG_COLOR}>
        <FlexBox height="100%" flexDirection="column">
          <WelcomePage
            caption={"웹 브라우저 렌더링 (part 1)"}
            title={"1. 크로미움(Chromium)"}
            title2={"2. 렌더링 동작 과정"}
          />
        </FlexBox>
      </Slide>

      {/* 렌더링이란? - OK */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
          알아볼 내용
        </Heading>
        <UnorderedList fontSize="24px" color={TEXT_COLOR}>
          <Appear elementNum={0}>
            <ListItem>
              <CodeSpan fontSize="28px">렌더링이란?</CodeSpan>
            </ListItem>
          </Appear>
          <UnorderedList fontSize="20px" color={TEXT_COLOR}>
            <Appear elementNum={1}>
              <ListItem fontSize={26}>
                <CodeSpan fontSize="26px">
                  HTML, CSS, JavaScript 등 개발자가 작성한 문서가 브라우저에서
                  출력되는 과정
                </CodeSpan>
              </ListItem>
            </Appear>
          </UnorderedList>
          <Appear elementNum={2}>
            <ListItem paddingTop={15}>
              <CodeSpan fontSize="28px">
                Front-End 개발자가 가질 수 있는 의문점
              </CodeSpan>
            </ListItem>
          </Appear>
          <UnorderedList fontSize="20px" color={TEXT_COLOR}>
            <Appear elementNum={3}>
              <ListItem fontSize={26}>주체가 어떻게 되는가?</ListItem>
            </Appear>
            <Appear elementNum={4}>
              <ListItem fontSize={26}>어떻게 해석하는가?</ListItem>
            </Appear>
            <Appear elementNum={5}>
              <ListItem fontSize={26}>UI가 변경되면 어떻게 되는가?</ListItem>
            </Appear>
            <Appear elementNum={6}>
              <ListItem fontSize={26}>
                Virtual DOM을 사용하는 이유가 무엇일까?(다음 발표때...)
              </ListItem>
            </Appear>
            <Appear elementNum={7}>
              <ListItem fontSize={26}>
                서버사이드 렌더링은 서버에서 렌더링하는가?(다다음 발표때...)
              </ListItem>
            </Appear>
          </UnorderedList>
        </UnorderedList>
      </Slide>

      {/* 크로미움 표지 - OK */}
      <Slide backgroundColor={SLIDE_BG_COLOR}>
        <FlexBox height="100%" flexDirection="column">
          <WelcomePage
            caption={"크로미움(Chromium)"}
            title={"1. 크로미움이란?"}
            title2={"2. 크로미움 기반의 웹 브라우저"}
          />
        </FlexBox>
      </Slide>

      {/* 크로미움이란? - OK */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
          크로미움이란?
        </Heading>
        <Grid gridTemplateColumns="1.2fr 0.8fr">
          <Box>
            <UnorderedList fontSize="24px" color={TEXT_COLOR}>
              <Appear elementNum={0}>
                <ListItem>
                  <CodeSpan fontSize="28px">
                    구글에서 진행한 오픈소스 웹 브라우저 프로젝트
                  </CodeSpan>
                </ListItem>
              </Appear>
              <UnorderedList fontSize="20px" color={TEXT_COLOR}>
                <Appear elementNum={1}>
                  <ListItem fontSize={26}>2008년 9월 2일 출시</ListItem>
                </Appear>
                <Appear elementNum={2}>
                  <ListItem fontSize={26}>
                    구글 직원 외 프로젝트 참여가능
                  </ListItem>
                </Appear>
                <Appear elementNum={3}>
                  <ListItem fontSize={26}>
                    2019년 마이크로소프트 프로젝트 참여 및 투자
                  </ListItem>
                </Appear>
              </UnorderedList>
              <Appear elementNum={4}>
                <ListItem paddingTop={15}>
                  <CodeSpan fontSize="28px">프로젝트의 목적</CodeSpan>
                </ListItem>
              </Appear>
              <UnorderedList fontSize="20px" color={TEXT_COLOR}>
                <Appear elementNum={5}>
                  <ListItem fontSize={26}>웹 브라우저의 발전</ListItem>
                </Appear>
                <Appear elementNum={6}>
                  <ListItem fontSize={26}>웹 브라우저의 표준화</ListItem>
                </Appear>
              </UnorderedList>
              <Appear elementNum={7}>
                <ListItem paddingTop={15}>
                  <CodeSpan fontSize="28px">엔진</CodeSpan>
                </ListItem>
              </Appear>
              <UnorderedList fontSize="20px" color={TEXT_COLOR}>
                <Appear elementNum={8}>
                  <ListItem fontSize={26}>
                    웹 브라우저 엔진: Webkit → Blink(2015 ~)
                  </ListItem>
                </Appear>
                <Appear elementNum={9}>
                  <ListItem fontSize={26}>JS 엔진: V8</ListItem>
                </Appear>
              </UnorderedList>
            </UnorderedList>
          </Box>
          <FlexBox
            flexDirection="column"
            paddingTop={50}
            key="pic-fps"
            flex={1}
          >
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Chromium_Logo.svg/240px-Chromium_Logo.svg.png"
              }
              width={400}
            />
          </FlexBox>
        </Grid>
      </Slide>

      {/* 크로미움 기반의 웹 브라우저 - OK */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
          웹 브라우저의 엔진
        </Heading>
        <UnorderedList fontSize="24px" color={TEXT_COLOR}>
          <Appear elementNum={0}>
            <ListItem>
              <CodeSpan fontSize="28px">크롬(Chrome)</CodeSpan>
            </ListItem>
            <UnorderedList fontSize="20px" color={TEXT_COLOR}>
              <ListItem fontSize={26}>
                <CodeSpan fontSize="26px">
                  웹 브라우저 엔진: Blink(iOS는 Webkit), JS 엔진: V8
                </CodeSpan>
              </ListItem>
            </UnorderedList>
          </Appear>
          <Appear elementNum={1}>
            <ListItem paddingTop={15}>
              <CodeSpan fontSize="28px">
                마이크로소프트 엣지(Microsoft Edge)
              </CodeSpan>
            </ListItem>
            <UnorderedList fontSize="20px" color={TEXT_COLOR}>
              <ListItem fontSize={26}>
                <CodeSpan fontSize="26px">
                  웹 브라우저 엔진: Blink(iOS는 Webkit), JS 엔진: Chakra
                </CodeSpan>
              </ListItem>
            </UnorderedList>
          </Appear>
          <Appear elementNum={2}>
            <ListItem paddingTop={15}>
              <CodeSpan fontSize="28px">삼성 인터넷, 네이버 웨일</CodeSpan>
            </ListItem>
            <UnorderedList fontSize="20px" color={TEXT_COLOR}>
              <ListItem fontSize={26}>
                <CodeSpan fontSize="26px">
                  웹 브라우저 엔진: Blink, JS 엔진: V8
                </CodeSpan>
              </ListItem>
            </UnorderedList>
          </Appear>
          <Appear elementNum={3}>
            <ListItem paddingTop={15}>
              <CodeSpan fontSize="28px">사파리(Safari)</CodeSpan>
            </ListItem>
            <UnorderedList fontSize="20px" color={TEXT_COLOR}>
              <ListItem fontSize={26}>
                <CodeSpan fontSize="26px">
                  웹 브라우저 엔진: Webkit, JS 엔진: JavaScriptCore
                </CodeSpan>
              </ListItem>
            </UnorderedList>
          </Appear>
          <Appear elementNum={4}>
            <ListItem paddingTop={15}>
              <CodeSpan fontSize="28px">파이어폭스(Firefox)</CodeSpan>
            </ListItem>
            <UnorderedList fontSize="20px" color={TEXT_COLOR}>
              <ListItem fontSize={26}>
                <CodeSpan fontSize="26px">
                  웹 브라우저 엔진: Gecko(iOS는 Webkit), JS 엔진: Spidermonkey
                </CodeSpan>
              </ListItem>
            </UnorderedList>
          </Appear>
        </UnorderedList>
      </Slide>

      {/* 웹 브라우저 렌더링 표지 - OK */}
      <Slide backgroundColor={SLIDE_BG_COLOR}>
        <FlexBox height="100%" flexDirection="column">
          <WelcomePage
            caption={"렌더링 동작 과정"}
            title={"1. 렌더링 엔진의 동작 과정"}
            title2={"2. UI가 업데이트 되는 경우"}
          />
        </FlexBox>
      </Slide>

      {/* Critical Rendering Path - OK */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
          Critical Rendering Path
        </Heading>
        <UnorderedList fontSize="24px" color={TEXT_COLOR}>
          <Appear elementNum={0}>
            <ListItem>
              <CodeSpan fontSize="26px">
                브라우저가 HTML, CSS, Javascript를 화면에 픽셀로 변화하는 일련의
                단계
              </CodeSpan>
            </ListItem>
            <Image src={"https://i.stack.imgur.com/PWEik.png"} width={1200} />
          </Appear>
          <Appear elementNum={1}>
            <ListItem>
              <CodeSpan fontSize="26px">
                Layout(Reflow): Render Tree의 노드들을 배치하고 크기를 계산
              </CodeSpan>
            </ListItem>
          </Appear>
          <Appear elementNum={2}>
            <ListItem>
              <CodeSpan fontSize="26px">
                Paint(Repaint): 화면에 배치된 노드를 픽셀로 그려지는 과정
              </CodeSpan>
            </ListItem>
          </Appear>
        </UnorderedList>
      </Slide>

      {/* Webkit, Gecko 렌더링 과정 - OK */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
          Webkit, Gecko 렌더링 과정
        </Heading>
        <Grid gridTemplateColumns="1fr 1fr">
          <Box>
            <UnorderedList fontSize="24px" color={TEXT_COLOR}>
              <ListItem>
                <CodeSpan fontSize="28px">Webkit</CodeSpan>
              </ListItem>
              <Image
                src={
                  "https://d2.naver.com/content/images/2015/06/helloworld-59361-3.png"
                }
                width={600}
              />
            </UnorderedList>
          </Box>
          <UnorderedList fontSize="24px" color={TEXT_COLOR}>
            <ListItem>
              <CodeSpan fontSize="28px">Gecko</CodeSpan>
            </ListItem>
            <Image
              src={
                "https://d2.naver.com/content/images/2015/06/helloworld-59361-4.png"
              }
              width={600}
            />
          </UnorderedList>
        </Grid>
        <UnorderedList fontSize="24px" color={TEXT_COLOR}>
          <Appear elementNum={0}>
            <ListItem>
              <CodeSpan fontSize="26px">
                Webkit: HTML, CSS 파싱이 동시에 수행된다.
              </CodeSpan>
            </ListItem>
          </Appear>
          <Appear elementNum={1}>
            <ListItem>
              <CodeSpan fontSize="26px">
                Gecko: HTML 파싱 후 CSS를 파싱한다.
              </CodeSpan>
            </ListItem>
          </Appear>
          <Appear elementNum={2}>
            <ListItem>
              <CodeSpan fontSize="26px">
                렌더링 엔진마다 사용하는 용어가 다르다.
              </CodeSpan>
            </ListItem>
          </Appear>
        </UnorderedList>
      </Slide>

      {/* 웹 브라우저에 URL을 입력하면? */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
          웹 브라우저에 URL을 입력하면?
        </Heading>
        <UnorderedList fontSize="24px" color={TEXT_COLOR}>
          <Appear elementNum={0}>
            <ListItem>
              <CodeSpan fontSize="26px">
                가장 먼저 HTML 파일을 전달받는다.
              </CodeSpan>
            </ListItem>
          </Appear>
        </UnorderedList>
        {/* <Grid gridTemplateColumns="1fr 2fr">
          <FlexBox
            alignItems="flex-start"
            flexDirection="column"
            marginLeft={50}
          >
            <Text style={{ fontSize: "32px", color: { TEXT_COLOR } }}>
              <Appear elementNum={1}>CSR</Appear>
            </Text>
            <Text style={{ fontSize: "32px", color: { TEXT_COLOR } }}>
              <Appear elementNum={3}>SSR</Appear>
            </Text>
          </FlexBox>
          <Stepper
            defaultValue={[]}
            values={[
              [
                "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
                400,
              ],
              [
                "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
                400,
              ],
              [
                "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
                400,
              ],
              [
                "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
                400,
              ],
              [
                "https://d2.naver.com/content/images/2015/06/helloworld-59361-4.png",
                500,
              ],
            ]}
          >
            {(value, step) => (
              <Appear>
                <Image
                  src={value && value[0]}
                  width={(value && value[1]) || 400}
                />
              </Appear>
            )}
          </Stepper>
        </Grid> */}
      </Slide>

      {/* DOM Tree 생성 과정 */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
          DOM Tree 생성 과정
        </Heading>
      </Slide>

      {/* CSSOM Tree 생성 과정 */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
          CSSOM Tree 생성 과정
        </Heading>
      </Slide>

      {/* Layout(Reflow) */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
          Layout(Reflow)
        </Heading>
      </Slide>

      {/* Paint(Repaint) */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
          Paint(Repaint)
        </Heading>
      </Slide>

      {/* Composition */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
          Composition
        </Heading>
      </Slide>

      {/* Layout > Paint > Composite - OK */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
          사용자에 의해 UI가 변경되는 경우
        </Heading>
        <Heading margin="0px" fontSize={"30px"} color={HEADER_COLOR}>
          JavaScript 코드에 의해 UI가 변경되어{" "}
          <span style={{ color: "red" }}>Layout 과정이 발생</span>
          하는 경우
        </Heading>
        <UnorderedList fontSize="24px" color={TEXT_COLOR}>
          <Image src={ui_update_01} width={1200} />
          <Appear elementNum={0}>
            <ListItem>
              <CodeSpan fontSize="26px">
                새로운 HTML 요소가 추가되거나 기존 요소가 삭제되는 경우
              </CodeSpan>
            </ListItem>
          </Appear>
          <Appear elementNum={1}>
            <ListItem>
              <CodeSpan fontSize="26px">
                요소의 크기나 위치가 변경되는 경우
              </CodeSpan>
            </ListItem>
          </Appear>
          <Appear elementNum={2}>
            <ListItem>
              <CodeSpan fontSize="26px">
                웹 브라우저의 크기가 변경되는 경우(반응형 웹)
              </CodeSpan>
            </ListItem>
          </Appear>
        </UnorderedList>
      </Slide>

      {/* Paint > Composite */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
          사용자에 의해 UI가 변경되는 경우
        </Heading>
        <Heading margin="0px" fontSize={"30px"} color={HEADER_COLOR}>
          JavaScript 코드에 의해 UI가 변경되었지만,{" "}
          <span style={{ color: "red" }}>Layout 과정을 생략</span>
          하는 경우
        </Heading>
        <UnorderedList fontSize="24px" color={TEXT_COLOR}>
          <Image src={ui_update_02} width={1200} />
          {/* <Appear elementNum={1}>
            <ListItem>
              <CodeSpan fontSize="26px">
                새로운 HTML 요소가 추가되거나 기존 요소가 삭제되는 경우
              </CodeSpan>
            </ListItem>
          </Appear>
          <Appear elementNum={2}>
            <ListItem>
              <CodeSpan fontSize="26px">
                HTML 요소의 크기나 위치가 변경되는 경우
              </CodeSpan>
            </ListItem>
          </Appear>
          <Appear elementNum={3}>
            <ListItem>
              <CodeSpan fontSize="26px">
                웹 브라우저의 크기가 변경되는 경우(반응형 웹)
              </CodeSpan>
            </ListItem>
          </Appear> */}
        </UnorderedList>
      </Slide>

      {/* Composite - OK */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
          사용자에 의해 UI가 변경되는 경우
        </Heading>
        <Heading margin="0px" fontSize={"30px"} color={HEADER_COLOR}>
          JavaScript 코드에 의해 UI가 변경되었지만,{" "}
          <span style={{ color: "red" }}>Layout, Paint 과정을 생략</span>
          하는 경우
        </Heading>
        <UnorderedList fontSize="24px" color={TEXT_COLOR}>
          <Image src={ui_update_03} width={1200} />
          <Appear elementNum={0}>
            <ListItem>
              <CodeSpan fontSize="26px">CSS 특정 속성이 변경되는 경우</CodeSpan>
            </ListItem>
          </Appear>
          <UnorderedList fontSize="20px" color={TEXT_COLOR}>
            <Appear elementNum={1}>
              <ListItem fontSize={26}>
                transform, opacity, will-change, z-index 등...
              </ListItem>
            </Appear>
          </UnorderedList>
          <Appear elementNum={2}>
            <ListItem>
              <CodeSpan fontSize="26px">주의사항!</CodeSpan>
            </ListItem>
            <UnorderedList fontSize="20px" color={TEXT_COLOR}>
              <ListItem fontSize={26}>
                웹 브라우저 렌더링마다 다르게 동작한다.
              </ListItem>
              <Appear elementNum={3}>
                <ListItem fontSize={26}>opacity 속성</ListItem>
                <UnorderedList fontSize="20px" color={TEXT_COLOR}>
                  <ListItem fontSize={26}>
                    Blink에서 paint와 composite 발생
                  </ListItem>
                  <ListItem fontSize={26}>Gecko에서 composite만 발생</ListItem>
                </UnorderedList>
              </Appear>
            </UnorderedList>
          </Appear>
        </UnorderedList>
      </Slide>

      {/* 참고자료 - OK */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
          참고자료
        </Heading>
        <UnorderedList fontSize="24px" color={TEXT_COLOR}>
          <ListItem>
            <CodeSpan fontSize="28px">블로그(Blog)</CodeSpan>
          </ListItem>
          <UnorderedList fontSize="20px" color={TEXT_COLOR}>
            <ListItem fontSize={26}>
              <Link
                href="https://d2.naver.com/helloworld/59361"
                fontSize={26}
                color={TEXT_HILGHLIGHT_COLOR}
              >
                Naver 개발자 문서 - 브라우저는 어떻게 동작하는가?
              </Link>
            </ListItem>
            <ListItem fontSize={26}>
              <Link
                href="https://m.blog.naver.com/erke2000/222275488556"
                fontSize={26}
                color={TEXT_HILGHLIGHT_COLOR}
              >
                Naver 블로그 - 크로미움 프로젝트 The Chromium Projects 크롬의
                원조 오픈소스 브라우저
              </Link>
            </ListItem>
            <ListItem fontSize={26}>
              <Link
                href="https://www.itworld.co.kr/news/171849"
                fontSize={26}
                color={TEXT_HILGHLIGHT_COLOR}
              >
                ITWorld Korea - “크롬도 엣지도 모두 한 뿌리” 구글 크로미움
                브라우저의 정체
              </Link>
            </ListItem>
          </UnorderedList>
          <ListItem paddingTop={20}>
            <CodeSpan fontSize="28px">유튜브(Youtube)</CodeSpan>
          </ListItem>
          <UnorderedList fontSize="20px" color={TEXT_COLOR}>
            <ListItem>
              <Link
                href="https://www.youtube.com/watch?v=sJ14cWjrNis"
                fontSize={26}
                color={TEXT_HILGHLIGHT_COLOR}
              >
                우아한테크 - [10분 테코톡] ☕️ 체프의 브라우저 렌더링
              </Link>
            </ListItem>
            <ListItem fontSize={26}>
              <Link
                href="https://www.youtube.com/watch?v=FQHNg9gCWpg"
                fontSize={26}
                color={TEXT_HILGHLIGHT_COLOR}
              >
                아프리카도서관 - 웹 브라우저의 동작 순서(6분 순삭)
              </Link>
            </ListItem>
            <ListItem fontSize={26}>
              <Link
                href="https://www.youtube.com/watch?v=z1Jj7Xg-TkU"
                fontSize={26}
                color={TEXT_HILGHLIGHT_COLOR}
              >
                제주코딩베이스캠프 - 브라우저는 어떻게 화면을
                렌더링할까?(프론트엔드 개발 지망생이라면 필수 시청!!)
              </Link>
            </ListItem>
          </UnorderedList>
        </UnorderedList>
      </Slide>

      {/* End - OK */}
      <Slide backgroundColor={SLIDE_BG_COLOR}>
        <FlexBox height="100%" flexDirection="column">
          <WelcomePage caption={"감사합니다."} />
        </FlexBox>
      </Slide>
    </>
  );
}
