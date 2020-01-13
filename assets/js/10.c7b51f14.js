(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{217:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mysql-스토리지-엔진"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-스토리지-엔진"}},[t._v("#")]),t._v(" * MySQL 스토리지 엔진")]),t._v(" "),a("Author",{attrs:{name:"Hidekuma"}}),t._v(" "),a("blockquote",[a("p",[t._v("많은 스토리지 엔진 중, 대표적인 엔진 두 가지에 대해 비교를 해보기로 한다.")])]),t._v(" "),a("h2",{attrs:{id:"도커로-mysql띄우기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#도커로-mysql띄우기"}},[t._v("#")]),t._v(" 도커로 MySQL띄우기")]),t._v(" "),a("p",[t._v("MySQL을 직접 만지면서 공부하고 싶다면, 도커로 띄우는걸 추천한다.")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ docker run --name mysql -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MYSQL_ROOT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),t._v(" -d mysql\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 띄워지고 나면,")]),t._v("\n$ docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it mysql /bin/bash\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 컨테이너 안으로 진입 후")]),t._v("\n$ root@b70dd00594fc:/"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mysql -p")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1234 입력")]),t._v("\nEnter password:\n\nWelcome to the MySQL monitor.  Commands end with "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" or "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("g.\nYour MySQL connection "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" is "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("\nServer version: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.0")]),t._v(".15 MySQL Community Server - GPL\n\nCopyright "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v(", Oracle and/or its affiliates. All rights reserved.\n\nOracle is a registered trademark of Oracle Corporation and/or its\naffiliates. Other names may be trademarks of their respective\nowners.\n\nType "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'help;'")]),t._v(" or "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\h'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" help. Type "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\c"}},[t._v("\\c")]),t._v("'")]),t._v(" to "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),t._v(" the current input statement.\n\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# MySQL 접속완료")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br")])]),a("h2",{attrs:{id:"스토리지-엔진의-종류"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#스토리지-엔진의-종류"}},[t._v("#")]),t._v(" 스토리지 엔진의 종류")]),t._v(" "),a("p",[t._v("이제부터 설명할 두 엔진 외의 종류는 하기 커맨드로 조회 가능하다.")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("show")]),t._v(" ENGINES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--------------------+---------+----------------------------------------------------------------+--------------+------+------------+")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Engine")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Support "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Comment")]),t._v("                                                        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Transactions")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" XA   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Savepoints "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--------------------+---------+----------------------------------------------------------------+--------------+------+------------+")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" FEDERATED          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NO")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Federated MySQL storage "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("engine")]),t._v("                                 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" MEMORY             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Hash")]),t._v(" based"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stored "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" memory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" useful "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("temporary")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tables")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NO")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NO")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NO")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("InnoDB")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Supports "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("transactions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("row")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("level")]),t._v(" locking"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreign")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("keys")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" PERFORMANCE_SCHEMA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Performance "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Schema")]),t._v("                                             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NO")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NO")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NO")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" MyISAM             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" MyISAM storage "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("engine")]),t._v("                                          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NO")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NO")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NO")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" MRG_MYISAM         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Collection "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" identical MyISAM "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("tables")]),t._v("                          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NO")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NO")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NO")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" BLACKHOLE          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dev"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" storage "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("engine")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("anything you "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("write")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" it disappears"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NO")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NO")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NO")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" CSV                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" CSV storage "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("engine")]),t._v("                                             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NO")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NO")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NO")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" ARCHIVE            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Archive storage "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("engine")]),t._v("                                         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NO")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NO")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NO")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--------------------+---------+----------------------------------------------------------------+--------------+------+------------+")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"스토리지-엔진이란"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#스토리지-엔진이란"}},[t._v("#")]),t._v(" 스토리지 엔진이란?")]),t._v(" "),a("p",[t._v("DB에 데이터를 CRUD(Create, Read, Update, Delete)하는 데 사용하는 기본 컴포넌트라고 생각하면 된다.\nMySQL의 스토리지 엔진은 DBMS 고유의 사용자 인터페이스를 이용하는 방법과 포트번호를 통해 하는 방법을 제공한다. 따라서, 사용자가 내장된 엔진과 상호작용을 할 수 있는 자신만의 인터페이스를 포함한다.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("DB내의 다중 엔진을 지원하나, Locking 수준이 다르거나 할 경우 오류가 발생할 수 있기 때문에 권장하진 않는다.")])]),t._v(" "),a("h2",{attrs:{id:"myisam"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#myisam"}},[t._v("#")]),t._v(" MyISAM")]),t._v(" "),a("h3",{attrs:{id:"myisam-장점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#myisam-장점"}},[t._v("#")]),t._v(" MyISAM 장점")]),t._v(" "),a("ul",[a("li",[t._v("구조가 단순해, 속도 빠르다.")]),t._v(" "),a("li",[t._v("특히 읽기(READ)작업에 효과적이다. (테이블락)")]),t._v(" "),a("li",[t._v("Full-text 검색이 가능하다.")])]),t._v(" "),a("h3",{attrs:{id:"myisam-단점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#myisam-단점"}},[t._v("#")]),t._v(" MyISAM 단점")]),t._v(" "),a("ul",[a("li",[t._v("테이블락으로 쓰기작업이 느림.")]),t._v(" "),a("li",[t._v("데이터 무결성이 보장되지 않는다.")])]),t._v(" "),a("h3",{attrs:{id:"myisam-쓰임새"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#myisam-쓰임새"}},[t._v("#")]),t._v(" MyISAM 쓰임새")]),t._v(" "),a("ul",[a("li",[t._v("데이터 웨어하우스")]),t._v(" "),a("li",[t._v("로그정보")]),t._v(" "),a("li",[t._v("OLAP")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("MyISAM의 각 테이블 별 파일")]),t._v(" "),a("p",[t._v("*.frm : 테이블 정의 파일, *.MYD : 테이블 데이터 파일, *.MYI : 테이블 인덱스 파일")])]),t._v(" "),a("h2",{attrs:{id:"innodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#innodb"}},[t._v("#")]),t._v(" InnoDB")]),t._v(" "),a("h3",{attrs:{id:"innodb-장점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#innodb-장점"}},[t._v("#")]),t._v(" InnoDB 장점")]),t._v(" "),a("ul",[a("li",[t._v("로우락으로 쓰기작업에 탁월하다.")]),t._v(" "),a("li",[t._v("데이터 무결성 보장(트랜잭션, 외래키, 제약조건, 동시성 등) - ACID")])]),t._v(" "),a("h3",{attrs:{id:"innodb-단점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#innodb-단점"}},[t._v("#")]),t._v(" InnoDB 단점")]),t._v(" "),a("ul",[a("li",[t._v("많은 기능을 있어, 설계에 시간이 많이 든다.")]),t._v(" "),a("li",[t._v("MyISAM에 비해 1~2배 큰 파일을 사용.")]),t._v(" "),a("li",[t._v("기능이 많은 만큼, 컴퓨템 자원을 많이 사용한다.")])]),t._v(" "),a("h3",{attrs:{id:"innodb-쓰임새"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#innodb-쓰임새"}},[t._v("#")]),t._v(" InnoDB 쓰임새")]),t._v(" "),a("ul",[a("li",[t._v("유저정보, 빌링과 같이 무결성이 보장되어야 하는 경우")]),t._v(" "),a("li",[t._v("데이터 갱신이 잦은 애플리케이션")]),t._v(" "),a("li",[t._v("OLTP")])]),t._v(" "),a("h2",{attrs:{id:"myisam-innodb-비교정리"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#myisam-innodb-비교정리"}},[t._v("#")]),t._v(" MyISAM, InnoDB 비교정리")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("구분")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("MyISAM")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("InnoDB")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Transactions")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("NO")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("YES")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Default 버전")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("5.5 이전")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("5.5 이후")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Data 저장 제한")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("NO(논리/물리적 제한은 YES)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Space당 64TB")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("관리개념")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Index - MySQL, Data - OS 캐싱")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Index, Data - table space개념")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Data 압축")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("YES")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("NO")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("구조복잡성")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("단순")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("복잡,헤비")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("FK")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("NO")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("YES")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Locking")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Table level")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Row level")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Recovery")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("나쁨")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("좋음")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Index")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("B-Tree, R-tree, Full-text Index")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("B-Tree, Clustered")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Index memory caching")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("YES")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("YES")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("CPU core")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("영향없음")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("비례하여 성능상승")])])])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);