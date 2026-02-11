// src/components/Main/images.ts
import me from '../../images/me.png';
import realme from '../../images/realme.png';
import code from '../../images/code.png';
import html from '../../images/html.png';
import project01 from '../../images/project01.png';
import project02 from '../../images/project02.png';
import project03 from '../../images/project03.png';
import project04 from '../../images/project04.png';
import b_logo_01 from '../../images/b_logo_01.png';
import b_logo_02 from '../../images/b_logo_02.png';
import b_logo_03 from '../../images/b_logo_03.png';
import b_logo_04 from '../../images/clovirtualfashion_md.png';

export const mainImage = {
  me, realme, code, html, 
  project01, project02, project03, project04,
  b_logo_01, b_logo_02, b_logo_03, b_logo_04
};

export const projectList = [
  {
    description: "마블러스디자이너 \n웹 서비스 입니다.",
    link: "https://marvelousdesigner.com/",
    linkText: "웹사이트 방문",
    src: project04,
    alt: "project04"
  },
  {
    description: "그룹 화상채팅을 할 수 있는\n웹서비스입니다.",
    link: "https://www.videos-conf.com/",
    linkText: "웹사이트 방문",
    src: project01,
    alt: "project01"
  },
  {
    description: "비트코인 마진 거래소\n웹서비스입니다.",
    link: "https://www.youtube.com/watch?v=Y0NS99Dzczc&feature=youtu.be",
    linkText: "유튜브 영상보기",
    src: project02,
    alt: "project02"
  },
  {
    description: "AIbot 대쉬보드\n웹서비스입니다.",
    link: "",
    linkText: "",
    src: project03,
    alt: "project03"
  }
];

export const companyLogos = [
  { src: b_logo_04, alt: "클로버추얼패션_마블러스디자이너" },
  { src: b_logo_01, alt: "뉴럴비씨" },
  { src: b_logo_03, alt: "아이파트너즈" },
  { src: b_logo_02, alt: "조인스엠" }
];