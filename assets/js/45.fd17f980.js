(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{252:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"pep-8-스타일-가이드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pep-8-스타일-가이드"}},[s._v("#")]),s._v(" * PEP 8 스타일 가이드")]),s._v(" "),a("Author",{attrs:{name:"Hidekuma"}}),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://www.python.org/dev/peps/pep-0008/",target:"_blank",rel:"noopener noreferrer"}},[s._v("파이썬 개선 제안서(Python Enhancement Proposal) #8"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("간단하게 파이썬 코드 스타일 가이드라고 생각하면 된다.")]),s._v(" "),a("h2",{attrs:{id:"기대할-수-있는-효과"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#기대할-수-있는-효과"}},[s._v("#")]),s._v(" 기대할 수 있는 효과")]),s._v(" "),a("ol",[a("li",[s._v("일관성 있는 스타일은 유지보수를 용이하게 한다.")]),s._v(" "),a("li",[s._v("가독성이 높아진다.")]),s._v(" "),a("li",[s._v("다른 커뮤니티에 속한 다른 프로그래머와도 협업이 용이하다.")])]),s._v(" "),a("h2",{attrs:{id:"꼭-알아두면-좋을-포인트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#꼭-알아두면-좋을-포인트"}},[s._v("#")]),s._v(" 꼭 알아두면 좋을 포인트")]),s._v(" "),a("h3",{attrs:{id:"_1-스페이스"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-스페이스"}},[s._v("#")]),s._v(" 1. 스페이스")]),s._v(" "),a("ul",[a("li",[s._v("스페이스(탭X)로 들여쓰기")]),s._v(" "),a("li",[s._v("문법적으로 의미 있는 들여쓰기는 스페이스 4개")]),s._v(" "),a("li",[s._v("한 줄의 길이 79자 이하")]),s._v(" "),a("li",[s._v("함수와 클래스는 빈 줄 2개로, 메서드는 1개로 구분")]),s._v(" "),a("li",[s._v("변수 할당 앞뒤에 스페이스 하나만 사용")])]),s._v(" "),a("h3",{attrs:{id:"_2-네이밍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-네이밍"}},[s._v("#")]),s._v(" 2. 네이밍")]),s._v(" "),a("ul",[a("li",[s._v("함수, 변수, 속성은 "),a("code",[s._v("lowercase_underscore")])]),s._v(" "),a("li",[s._v("protected는 "),a("code",[s._v("_leading_underscore")])]),s._v(" "),a("li",[s._v("private는 "),a("code",[s._v("__double_leading_underscore")])]),s._v(" "),a("li",[s._v("클래스와 예외는 "),a("code",[s._v("CapitalizedWord")])]),s._v(" "),a("li",[s._v("상수는 "),a("code",[s._v("ALL_CAPS")])])]),s._v(" "),a("h3",{attrs:{id:"_3-표현식-문장"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-표현식-문장"}},[s._v("#")]),s._v(" 3. 표현식 / 문장")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""\n< import의 순서 >\n1. 표준 라이브러리 모듈\n2. 서드파티 모듈\n3. 그 외 커스텀모듈\n4. 이 하위는 알파벳 순\n"""')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. import는 항상 파일의 맨 위에")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" os\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. import는 명시적으로")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" bar "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OK")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OK")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" foo "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# X")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3. 긍정표현식의 부정보다는 비교부정")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("is")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OK")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("is")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# X")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4. [] 와 '' 등의 빈 값은 파이썬에서 암시적으로 False")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" somelist "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# OK")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("somelist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# X")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 5. if, for 와 같은 문은 여러 줄로 나눠 명료하게")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("h3",{attrs:{id:"_4-도구"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-도구"}},[s._v("#")]),s._v(" 4. 도구")]),s._v(" "),a("ul",[a("li",[s._v("pylint")]),s._v(" "),a("li",[s._v("autopep8")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ pip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pylint autopep8\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])],1)}),[],!1,null,null,null);t.default=e.exports}}]);