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
  CodePane,
  Link,
  CodeSpan,
  Appear
} from "spectacle";
import { WelcomePage } from "../../common"

const SLIDE_BG_COLOR = "#edf2fb";
const HEADER_COLOR = "#2f3e46";
const HEADER_SIZE = "36px";
const TEXT_COLOR = "#354f52"
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
            title3={"3. CSR, SSR, SSG"}
          />
        </FlexBox>
      </Slide>

      {/* 렌더링이란? - OK*/}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>알아볼 내용</Heading>
        <UnorderedList fontSize="24px" color={TEXT_COLOR}>
          <Appear elementNum={0}>
            <ListItem>
              <CodeSpan fontSize="28px">렌더링이란?</CodeSpan>
            </ListItem>
          </Appear>
          <UnorderedList fontSize="20px" color={TEXT_COLOR}>
            <Appear elementNum={1}>
              <ListItem fontSize={26}>
                <CodeSpan fontSize="26px">HTML, CSS, JavaScript 등 개발자가 작성한 문서가 브라우저에서 출력되는 과정</CodeSpan>
              </ListItem>
            </Appear>
          </UnorderedList>
          <Appear elementNum={2}>
            <ListItem>
              <CodeSpan fontSize="28px">Front-End 개발자가 가질 수 있는 의문점</CodeSpan>
            </ListItem>
          </Appear>
          <UnorderedList fontSize="20px" color={TEXT_COLOR}>
            <Appear elementNum={3}>
              <ListItem fontSize={26}>
                주체가 어떻게 되는가?
              </ListItem>
            </Appear>
            <Appear elementNum={4}>
              <ListItem fontSize={26}>
                어떻게 해석하는가?
              </ListItem>
            </Appear>
            <Appear elementNum={5}>
              <ListItem fontSize={26}>
                서버사이드 렌더링은 서버에서 렌더링하는가?
              </ListItem>
            </Appear>
            <Appear elementNum={6}>
              <ListItem fontSize={26}>
                Virtual DOM을 사용하는 이유가 무엇일까?(다음 발표때...)
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
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>크로미움이란?</Heading>
        <Grid gridTemplateColumns="1.2fr 0.8fr">
          <Box>
            <UnorderedList fontSize="24px" color={TEXT_COLOR}>
              <Appear elementNum={0}>
                <ListItem>
                  <CodeSpan fontSize="28px">구글에서 진행한 오픈소스 웹 브라우저 프로젝트</CodeSpan>
                </ListItem>
              </Appear>
              <UnorderedList fontSize="20px" color={TEXT_COLOR}>
                <Appear elementNum={1}>
                  <ListItem fontSize={26}>
                    구글 직원 외 프로젝트 참여가능
                  </ListItem>
                </Appear>
                <Appear elementNum={2}>
                  <ListItem fontSize={26}>
                    2019년부터 마이크로소프트에서 프로젝트 투자 및 참여
                  </ListItem>
                </Appear>
              </UnorderedList>
              <Appear elementNum={3}>
                <ListItem>
                  <CodeSpan fontSize="28px">2008년 9월 2일 출시</CodeSpan>
                </ListItem>
              </Appear>
              <Appear elementNum={4}>
                <ListItem>
                  <CodeSpan fontSize="28px">프로젝트의 목적</CodeSpan>
                </ListItem>
              </Appear>
              <UnorderedList fontSize="20px" color={TEXT_COLOR}>
                <Appear elementNum={5}>
                  <ListItem fontSize={26}>
                    웹 브라우저의 발전
                  </ListItem>
                </Appear>
                <Appear elementNum={6}>
                  <ListItem fontSize={26}>
                    웹 브라우저의 표준화
                  </ListItem>
                </Appear>
              </UnorderedList>
              <Appear elementNum={7}>
                <ListItem>
                  <CodeSpan fontSize="28px">엔진</CodeSpan>
                </ListItem>
              </Appear>
              <UnorderedList fontSize="20px" color={TEXT_COLOR}>
                <Appear elementNum={8}>
                  <ListItem fontSize={26}>
                    웹 브라우저 엔진:  Webkit → Blink(2015 ~)
                  </ListItem>
                </Appear>
                <Appear elementNum={9}>
                  <ListItem fontSize={26}>
                    JS 엔진: V8
                  </ListItem>
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

      {/* 크로미움 기반의 웹 브라우저 */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>크로미움 기반의 웹 브라우저</Heading>
        <UnorderedList fontSize="24px" color={TEXT_COLOR}>
          <Appear elementNum={0}>
            <ListItem>
              <CodeSpan fontSize="26px">Introduction to Graphs</CodeSpan>
            </ListItem>
          </Appear>
          <Appear elementNum={1}>
            <ListItem>
              <CodeSpan fontSize="26px">Why Graph Database ?</CodeSpan>
            </ListItem>
          </Appear>
        </UnorderedList>
      </Slide>

      {/* 웹 브라우저 렌더링 표지 - OK*/}
      <Slide backgroundColor={SLIDE_BG_COLOR}>
        <FlexBox height="100%" flexDirection="column">
          <WelcomePage
            caption={"렌더링 동작 과정"}
            title={"1. 렌더링 엔진의 동작 과정"}
            title2={"2. UI가 업데이트 되는 경우"}
            title3={"3. 렌더링 엔진의 차이점"}
          />
        </FlexBox>
      </Slide>

      {/* 웹 브라우저 렌더링 */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>Web Browser Rendering</Heading>
        <UnorderedList fontSize="24px" color={TEXT_COLOR}>
          <Appear elementNum={0}>
            <ListItem>
              <CodeSpan fontSize="26px">Introduction to Graphs</CodeSpan>
            </ListItem>
          </Appear>
        </UnorderedList>
      </Slide>

      {/* CSR */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>CSR(Client-Side-Rendering)</Heading>
        <UnorderedList fontSize="24px" color={TEXT_COLOR}>
          <Appear elementNum={0}>
            <ListItem>
              <CodeSpan fontSize="26px">Introduction to Graphs</CodeSpan>
            </ListItem>
          </Appear>
        </UnorderedList>
      </Slide>

      {/* SSR */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>SSR(Server-Side-Rendering)</Heading>
        <UnorderedList fontSize="24px" color={TEXT_COLOR}>
          <Appear elementNum={0}>
            <ListItem>
              <CodeSpan fontSize="26px">Introduction to Graphs</CodeSpan>
            </ListItem>
          </Appear>
        </UnorderedList>
      </Slide>

      {/* SSG */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>SSG(Static-Site-Generation)</Heading>
        <UnorderedList fontSize="24px" color={TEXT_COLOR}>
          <Appear elementNum={0}>
            <ListItem>
              <CodeSpan fontSize="26px">Introduction to Graphs</CodeSpan>
            </ListItem>
          </Appear>
        </UnorderedList>
      </Slide>

      {/* 참고자료 - OK */}
      <Slide backgroundColor={SLIDE_BG_COLOR} transitionEffect="slide">
        <Heading color={HEADER_COLOR} fontSize={HEADER_SIZE}>참고자료</Heading>
        <UnorderedList fontSize="24px" color={TEXT_COLOR}>
          <ListItem>
            <CodeSpan fontSize="28px">블로그(Blog)</CodeSpan>
          </ListItem>
          <UnorderedList fontSize="20px" color={TEXT_COLOR}>
            <ListItem fontSize={26}>
              <Link href="https://d2.naver.com/helloworld/59361" fontSize={26} color={TEXT_HILGHLIGHT_COLOR}>
                Naver 개발자 문서 - 브라우저는 어떻게 동작하는가?
              </Link>
            </ListItem>
            <ListItem fontSize={26}>
              <Link href="https://m.blog.naver.com/erke2000/222275488556" fontSize={26} color={TEXT_HILGHLIGHT_COLOR}>
                Naver 블로그 - 크로미움 프로젝트 The Chromium Projects 크롬의 원조 오픈소스 브라우저
              </Link>
            </ListItem>
            <ListItem fontSize={26}>
              <Link href="https://www.itworld.co.kr/news/171849" fontSize={26} color={TEXT_HILGHLIGHT_COLOR}>
                ITWorld Korea - “크롬도 엣지도 모두 한 뿌리” 구글 크로미움 브라우저의 정체
              </Link>
            </ListItem>
          </UnorderedList>
          <ListItem>
            <CodeSpan fontSize="28px">유튜브(Youtube)</CodeSpan>
          </ListItem>
          <UnorderedList fontSize="20px" color={TEXT_COLOR}>
            <ListItem>
              <Link href="https://www.youtube.com/watch?v=sJ14cWjrNis" fontSize={26} color={TEXT_HILGHLIGHT_COLOR}>
                우아한테크 - [10분 테코톡] ☕️ 체프의 브라우저 렌더링
              </Link>
            </ListItem>
            <ListItem fontSize={26}>
              <Link href="https://www.youtube.com/watch?v=FQHNg9gCWpg" fontSize={26} color={TEXT_HILGHLIGHT_COLOR}>
                아프리카도서관 - 웹 브라우저의 동작 순서(6분 순삭)
              </Link>
            </ListItem>
            <ListItem fontSize={26}>
              <Link href="https://www.youtube.com/watch?v=z1Jj7Xg-TkU" fontSize={26} color={TEXT_HILGHLIGHT_COLOR}>
                제주코딩베이스캠프 - 브라우저는 어떻게 화면을 렌더링할까?(프론트엔드 개발 지망생이라면 필수 시청!!)
              </Link>
            </ListItem>
          </UnorderedList>
        </UnorderedList>
      </Slide>

      {/* End - OK */}
      <Slide backgroundColor={SLIDE_BG_COLOR}>
        <FlexBox height="100%" flexDirection="column">
          <WelcomePage
            caption={"감사합니다."}
          />
        </FlexBox>
      </Slide>
    </>
  );
}
