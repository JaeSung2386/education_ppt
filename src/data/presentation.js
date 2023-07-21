export const presentations = [
  {
    id: "A001",
    title: "Web Browser Rendering",
    path: "web-browser-rendering",
    subId: "B001",
    isSubPart: true,
  },
  {
    id: "A002",
    title: "Redux-Saga 꼭 써야하나?",
    path: "",
    isSubPart: false,
  },
  {
    id: "A003",
    title: "NoSQL을 사용하는 이유",
    path: "",
    isSubPart: false,
  },
];

export const subPresentations = {
  B001: {
    parts: [
      {
        id: "B001-001",
        title: "크로미움(Chrominum)",
        path: "chrominum",
      },
      {
        id: "B001-002",
        title: "웹 브라우저 렌더링",
        path: "web-rendering",
      },
      {
        id: "B001-003",
        title: "CSR, SSR, SSG",
        path: "rendering-type",
      },
      {
        id: "B001-004",
        title: "Virtual DOM?",
        path: "virtual-dom",
      },
      {
        id: "B001-005",
        title: "React Hook",
        path: "react-hook",
      },
    ],
  },
};
