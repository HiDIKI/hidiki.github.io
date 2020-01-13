(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{225:function(t,a,s){"use strict";s.r(a);var r=s(0),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"spring-boot-스프링-부트-시작하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-스프링-부트-시작하기"}},[t._v("#")]),t._v(" * Spring Boot (스프링 부트) 시작하기")]),t._v(" "),s("Author",{attrs:{name:"Hidekuma"}}),t._v(" "),s("h2",{attrs:{id:"_1-ide-선택하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-ide-선택하기"}},[t._v("#")]),t._v(" 1. IDE 선택하기")]),t._v(" "),s("h3",{attrs:{id:"spring-tool-suite-4-sts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spring-tool-suite-4-sts"}},[t._v("#")]),t._v(" Spring Tool Suite 4(STS)")]),t._v(" "),s("p",[t._v("오픈소스 IDE로 줄여서 "),s("code",[t._v("STS")]),t._v("라고도 한다. "),s("a",{attrs:{href:"https://spring.io/tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("다운로드 경로"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"intelij"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#intelij"}},[t._v("#")]),t._v(" InteliJ")]),t._v(" "),s("p",[t._v("최강의 툴로 손 꼽히지만, 유료이다.")]),t._v(" "),s("h2",{attrs:{id:"_2-스프링-프로젝트-생성하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-스프링-프로젝트-생성하기"}},[t._v("#")]),t._v(" 2. 스프링 프로젝트 생성하기")]),t._v(" "),s("h3",{attrs:{id:"직접-생성하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#직접-생성하기"}},[t._v("#")]),t._v(" 직접 생성하기")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://start.spring.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring initializer"),s("OutboundLink")],1),t._v("에서 여러가지 선택된 값과 의존성을 설정하여, 스프링 부트 프로젝트를 생성 및 zip 파일로 다운로드 받을 수 있다.")]),t._v(" "),s("h3",{attrs:{id:"sts에서-스프링-부트-프로젝트-생성하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sts에서-스프링-부트-프로젝트-생성하기"}},[t._v("#")]),t._v(" STS에서 스프링 부트 프로젝트 생성하기")]),t._v(" "),s("p",[t._v("IDE에서는 상기 링크에서 내려받은 zip을 풀고 build.gradle을 읽어서 프로젝트 정의된 의존성 라이브러리를 추가를 자동화 해준다.")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("STS")]),t._v(" 실행.")]),t._v(" "),s("li",[t._v("메뉴의 "),s("code",[t._v("File > New > Spring Starter Project")]),t._v(" 선택.")]),t._v(" "),s("li",[s("code",[t._v("Service URL")]),t._v("은 기본으로 "),s("code",[t._v("https://start.spring.io")]),t._v("를 가르키나, 회사나 개인의 저장소가 있다면 변경.")]),t._v(" "),s("li",[t._v("의존성 정의 후 완료.\n"),s("ul",[s("li",[t._v("java 2.x")]),t._v(" "),s("li",[t._v("gradle")]),t._v(" "),s("li",[t._v("web")]),t._v(" "),s("li",[t._v("jpa")]),t._v(" "),s("li",[t._v("lombok")]),t._v(" "),s("li",[t._v("{database}")])])])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("스프링 부트의 버전")]),t._v(" "),s("p",[t._v("버전에 따라 제공하는 라이브러리 버전이 다르다. 스부트 2.0이 출시된지 약 1년이 지났는데, "),s("U",[t._v("2019/08/01 부터 스부트 1에 대한 업데이트는 없을 것")]),t._v("이라고 하니 다들 2.x대를 선택하는 것이 좋다.")],1),t._v(" "),s("ul",[s("li",[t._v("Spring Boot 1.5 = Spring Framework 4.3 기반")]),t._v(" "),s("li",[t._v("Spring Boot >= 2.0 = Spring Framework 5.0 기반")])])]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("STS에서 lombok을 인식하지 못할 경우")]),t._v(" "),s("p",[t._v("InteliJ의 경우는 플러그인 설치하면 되나,  STS의 경우는 다르다. 해결법은 "),s("a",{attrs:{href:"/java/sts-with-lombok"}},[t._v("해당 링크")]),t._v("를 참고한다.")])]),t._v(" "),s("h2",{attrs:{id:"_3-빌드하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-빌드하기"}},[t._v("#")]),t._v(" 3. 빌드하기")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ ./gradlew clean build "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# MacOS")]),t._v("\n$ ./gradle.bat clean build "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Windows")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h2",{attrs:{id:"_4-jar-파일-실행하기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-jar-파일-실행하기"}},[t._v("#")]),t._v(" 4. jar 파일 실행하기")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ java -jar ./build/libs/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("project-name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("-0.0.1-SNAPSHOT.jar\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("스부트 배너바꾸기")]),t._v(" "),s("p",[s("code",[t._v("./src/main/resources")]),t._v("에 "),s("code",[t._v("banner.txt")]),t._v("를 추가하면, 커스텀이 가능하다.")])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);