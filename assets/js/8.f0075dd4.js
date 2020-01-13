(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{215:function(s,t,a){"use strict";a.r(t);var n=a(0),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"binary-search-이진탐색-알고리즘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binary-search-이진탐색-알고리즘"}},[s._v("#")]),s._v(" * Binary search : 이진탐색 알고리즘")]),s._v(" "),a("Author",{attrs:{name:"Wabi"}}),s._v(" "),a("p",[s._v("이진 탐색은 1~100 사이의 숫자 중 특정 숫자를 찾는다고 가정하였을 때, 1부터 탐색을 시작하는 것"),a("code",[s._v("(단순 탐색:simple search)")]),s._v("이 아닌, 중간 부터 시작하는 탐색이다.")]),s._v(" "),a("h3",{attrs:{id:"예시-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#예시-1"}},[s._v("#")]),s._v(" 예시 1)")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("준비된 배열 : [1, ... , 50, ... , 100]\n(1부터 100까지의 자연수)\n\n찾는 수 : 78\n(찾는 수를 'X' 라고 지칭)\n\n단순탐색의 경우\n단순 탐색은 1부터 차례대로 78숫자가 올때까지 78번의 탐색을 시도한다.\n\n이진탐색의 경우\n1~100 사이 배열 중 가운데 50 부터 탐색을 시작\nX (찾고자 하는 수) = 78 이므로,\n\n탐색 첫번째,\nX는 가운데 수 50 보다 크다 그러므로 50보다 작은 수는 제외\n(탐색배열이 51 부터 100 까지로 줄었다.)\n(51 ~ 100의 가운데 수 75)\n\n탐색 두번째,\nX는 가운데 수 75 보다 크다 그러므로 75보다 작은 수는 제외\n(탐색배열이 76 부터 100 까지로 줄었다.)\n(76 ~ 100의 가운데 수 88)\n\n탐색 세번째,\nX는 가운데 수 88 보다 작다 그러므로 88보다 큰 수는 제외\n(탐색배열이 76 부터 87 까지로 줄었다.)\n(76 ~ 87의 가운데 수 81)\n\n탐색 네번째,\nX는 가운데 수 81 보다 작다 그러므로 81보다 큰 수는 제외\n(탐색배열이 76 부터 80 까지로 줄었다.)\n(76 ~ 80의 가운데 수 78)\n\n탐색 다섯번째,\nX는 가운데 수 78과 일치한다. = 탐색 종료\n\n이진 탐색은 5번의 탐색을 하였다.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br")])]),a("p",[s._v("한 번의 탐색으로 남은 수의 "),a("code",[s._v("절반씩 제외")]),s._v("를 시킬 수 있다."),a("br"),s._v("\nn개의 원소를 가진 리스트(배열)에 이진탐색을 적용하면 최대 log"),a("sub",[s._v("2")]),s._v(" n 번 으로 답을 찾을 수 있다."),a("br"),s._v("\n리스트의 숫자가 1024개가 있다면 log"),a("sub",[s._v("2")]),s._v(" 1024 = 10 이므로, 10번의 탐색 안에 답을 찾을 수 있다.")]),s._v(" "),a("h3",{attrs:{id:"예시-2-python3-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#예시-2-python3-code"}},[s._v("#")]),s._v(" 예시 2) Python3 code")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("binary_search")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    low "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    high "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" low "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" high"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        mid "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("low "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" high"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# // : 나눗셈 값의 숫자가 소숫점일 경우, 소숫점을 버린 정수를 반환합니다. (floor division)")]),s._v("\n        chk "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" chk "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" target "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 찾는 숫자를 찾음")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" mid\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" chk "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" target "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 찾는 숫자가 체크한 숫자보다 작다.")]),s._v("\n            high "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mid "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 찾는 숫자가 체크한 숫자보다 크다.")]),s._v("\n            low "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mid "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 찾는 숫자가 배열에 없다.")]),s._v("\n\ntest_list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("binary_search"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("test_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4, 인덱스 4 = 5")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("binary_search"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("test_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# None 배열 내에 11이라는 숫자는 없다.")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("극단적으로 엄청 많은 숫자를 담은 배열로 가정하자면, 400억개의 숫자를 가진 배열 중 마지막 Idx 400억 숫자를 찾을때 단순 탐색은 400억번 탐색을 하지만 이진 탐색은 35번의 탐색으로 숫자를 찾을 수 있다.")]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"이진탐색-알고리즘-요약"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#이진탐색-알고리즘-요약"}},[s._v("#")]),s._v(" 이진탐색 알고리즘 요약")]),s._v(" "),a("ul",[a("li",[s._v("이진탐색은 단순탐색보다 훨씬 빠르다. ( 처리속도 : log"),a("sub",[s._v("2")]),s._v(" n 이 n 보다 빠르다. )")]),s._v(" "),a("li",[s._v("이진 탐색 알고리즘은 정렬된 데이터가 아니면 적용이 불가능하다.")])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);