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
  CodePane,
  Quote,
} from "spectacle";
import { WelcomePage } from "../../common";

import ui_update_01 from "../../../img/ui_update_01.png";
import ui_update_02 from "../../../img/ui_update_02.png";
import ui_update_03 from "../../../img/ui_update_03.png";

import convert_01 from "../../../img/convert_01.png";
import convert_02 from "../../../img/convert_02.png";

import laptop from "../../../img/laptop.png";
import macbook_001 from "../../../img/macbook_001.png";
import macbook_002 from "../../../img/macbook_002.png";

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
                    경쟁사 개발자도 프로젝트 참여가능
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
                    <span style={{ color: "red" }}>웹 브라우저 엔진:</span>{" "}
                    Webkit → (2015 ~ 현재)Blink
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

      {/* 웹 브라우저 엔진 - OK */}
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
                  웹 브라우저 엔진:{" "}
                  <span style={{ color: TEXT_HILGHLIGHT_COLOR }}>Blink</span>
                  (iOS는 Webkit), JS 엔진: V8
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
                  웹 브라우저 엔진:{" "}
                  <span style={{ color: TEXT_HILGHLIGHT_COLOR }}>Blink</span>
                  (iOS는 Webkit), JS 엔진: Chakra
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
                  웹 브라우저 엔진:{" "}
                  <span style={{ color: TEXT_HILGHLIGHT_COLOR }}>Blink</span>,
                  JS 엔진: V8
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

      {/* Critical Rendering Path - OK */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
          Critical Rendering Path
        </Heading>
        <UnorderedList fontSize="24px" color={TEXT_COLOR}>
          <Appear elementNum={0}>
            <ListItem>
              <CodeSpan fontSize="26px">
                브라우저가 HTML, CSS, JavaScript를 화면에 픽셀로 변화하는 일련의
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
                Paint(Repaint): 화면에 배치된 노드를 픽셀로 변환되는 과정
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
                width={550}
              />
            </UnorderedList>
          </Box>
          <Box>
            <UnorderedList fontSize="24px" color={TEXT_COLOR}>
              <ListItem>
                <CodeSpan fontSize="28px">Gecko</CodeSpan>
              </ListItem>
              <Image
                src={
                  "https://d2.naver.com/content/images/2015/06/helloworld-59361-4.png"
                }
                width={550}
              />
            </UnorderedList>
          </Box>
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

      {/* DOM Tree 생성 과정 */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
          DOM Tree 생성 과정
        </Heading>
        <FlexBox height="100%" flexDirection="column">
          <Heading margin="0px" fontSize="150px">
            <Image
              src={
                "https://miro.medium.com/v2/resize:fit:720/format:webp/1*EU3XjJvJ8kg2kHUTWdMQVw.png"
              }
              width={1000}
            />
          </Heading>
        </FlexBox>
      </Slide>

      {/* CSSOM Tree 생성 과정 */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
          CSSOM Tree 생성
        </Heading>
        <Heading margin="0px" fontSize={"30px"} color={HEADER_COLOR}>
          DOM Tree 생성 과정과 동일하다.
        </Heading>
        <Grid gridTemplateColumns="1fr 1fr">
          <Box>
            <CodePane language="css" showLineNumbers={false}>{`
body {
  font-size: 16px;
}

body > p {
  font-weight: bold;
}

body > span {
  color: red;
}

body img {
  float: right;
}

body > p > span {
  display: none;
}
        `}</CodePane>
          </Box>
          <Box marginTop={"auto"} marginBottom={"auto"}>
            <Image
              src={
                "https://miro.medium.com/v2/resize:fit:640/format:webp/1*HxOuFyj7vIkdb3ZvzR6MVA.png"
              }
              width={600}
            />
          </Box>
        </Grid>
      </Slide>

      {/* Render Tree 생성 과정 */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
          Render Tree 생성
        </Heading>
        <Heading margin="0px" fontSize={"30px"} color={HEADER_COLOR}>
          <span style={{ color: "red" }}>화면에 표시</span>
          되는 노드들이 Render Tree에 포함된다.
        </Heading>
        <Heading margin={0}>
          <Image
            src={
              "https://miro.medium.com/v2/resize:fit:720/format:webp/1*FXGPMAFT3lXjMupFQOY4jg.png"
            }
            width={900}
          />
        </Heading>
      </Slide>

      {/* Layout(Reflow) - OK */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
          Layout(Reflow)
        </Heading>
        <Heading margin="0px" fontSize={"30px"} color={HEADER_COLOR}>
          Render Tree의 노드를 <span style={{ color: "red" }}>화면에 배치</span>
          하고 <span style={{ color: "red" }}>크기를 계산</span>한다.
        </Heading>
        <Grid gridTemplateColumns="1fr 1fr">
          <Box margin={"auto"} position={"relative"} bottom={50}>
            <Image
              src={
                "https://www.moonkorea.dev/_next/image?url=%2Fassets%2Fmarkdown-image%2FBrowser-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EB%A0%8C%EB%8D%94%EB%A7%81%2Frender-tree.png&w=1920&q=75"
              }
              width={550}
              height={250}
            />
          </Box>
          <Box margin={"auto"} position={"relative"} bottom={50}>
            <Image src={macbook_001} width={550} />
          </Box>
        </Grid>
      </Slide>

      {/* Paint(Repaint) - OK */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
          Paint(Repaint)
        </Heading>
        <Heading margin="0px" fontSize={"30px"} color={HEADER_COLOR}>
          화면에 배치된 노드가{" "}
          <span style={{ color: "red" }}>픽셀로 변환되는 과정</span>이다.
        </Heading>
        <Grid gridTemplateColumns="1fr 1fr">
          <Box margin={"auto"} position={"relative"} bottom={50}>
            <Image
              src={
                "https://www.moonkorea.dev/_next/image?url=%2Fassets%2Fmarkdown-image%2FBrowser-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EB%A0%8C%EB%8D%94%EB%A7%81%2Frender-tree.png&w=1920&q=75"
              }
              width={550}
              height={250}
            />
          </Box>
          <Box margin={"auto"} position={"relative"} bottom={50}>
            <Image src={macbook_002} width={550} />
          </Box>
        </Grid>
      </Slide>

      {/* Composition */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
          Composition
        </Heading>
        <Heading margin="0px" fontSize={"30px"} color={HEADER_COLOR}>
          픽셀로 변환된 레이어를 <span style={{ color: "red" }}>GPU</span>가{" "}
          <span style={{ color: "red" }}>화면에 표시</span>하는 단계다.
        </Heading>
        <Heading margin={"auto"}>
          <Image src={macbook_002} width={700} height={600} />
        </Heading>
      </Slide>

      {/* Layout > Paint > Composite - OK */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
          Layout → Paint → Composite
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

      {/* Paint > Composite - OK */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
          Paint → Composite
        </Heading>
        <Heading margin="0px" fontSize={"30px"} color={HEADER_COLOR}>
          JavaScript 코드에 의해 UI가 변경되었지만,{" "}
          <span style={{ color: "red" }}>Layout 과정을 생략</span>
          하는 경우
        </Heading>
        <UnorderedList fontSize="24px" color={TEXT_COLOR}>
          <Image src={ui_update_02} width={1200} />
          <Appear elementNum={1}>
            <ListItem>
              <CodeSpan fontSize="26px">
                CSS 속성이 변경되었으나 위치, 크기는 변경되지 않은 경우
              </CodeSpan>
            </ListItem>
          </Appear>
          <Appear elementNum={2}>
            <ListItem>
              <CodeSpan fontSize="26px">
                이미지 변환, 투명도 조정, 텍스트 색상이 변경되는 경우
              </CodeSpan>
            </ListItem>
          </Appear>
        </UnorderedList>
      </Slide>

      {/* Composite - OK */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>
          Composite
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
                    Blink에서 Paint, Composite 발생
                  </ListItem>
                  <ListItem fontSize={26}>Gecko에서 Composite만 발생</ListItem>
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
