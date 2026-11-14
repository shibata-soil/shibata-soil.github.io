// 一緒に研究している（してきた）学生のデータ。手で編集する。
// students.html が読み込んで「一緒に研究している学生たち」の節を組み立てる。
//
// 1人分の書き方：
//   grade : 学年（D3 / M2 / M1 / B4 …）。在学生のみ
//   name  : 名前。表示そのまま（留学生はローマ字でも片仮名でも）
//   field : 調査地を一語〜二語（新潟 / ベトナム / タイ北部 …）。空欄 "" なら「調査地」の黄色い付箋が出る
//   theme : 研究テーマ（一行）
//   pub   : 論文の著者名表記。data.js（researchmap）の著者欄とつき合わせて、該当する論文を自動で載せる。
//           英語は「Kawakami, Y.」のように姓・イニシャル、日本語は「河上優那」のように空白なし。複数書いてよい
//
// 卒業生（alumni）は grade の代わりに
//   degree : 学位（博士 / 修士 / 学士）
//   years  : 在籍期間（"2022–2024"）
//   now    : 現在の所属・仕事（任意。本人の了解を得てから）
//
// 在学生は学年の高い順（D → M → B）、同じ学年のなかは50音順（留学生は片仮名読みで）。卒業生は新しい順に並べて書く。

window.PEOPLE = {
  current: [
    {grade:"D3", name:"Nguyen Thi Huyen Dieu", field:"ベトナム",
     theme:"ベトナム中部高原のコーヒー園においてコーヒーハスクの施用が窒素・リン動態に及ぼす影響",
     pub:["Nguyen, T. H. D."]},

    {grade:"D3", name:"Mengi Johari", field:"タンザニア",
     theme:"タンザニア北西部のバナナホームガーデンにおける炭素および養分循環の定量評価",
     pub:["Mengi, J."]},

    {grade:"M2", name:"Ahmad Farhan bin Hadtimin", field:"丹後",
     theme:"慣行農法および有機農法下の砂質造成地における総窒素形態変化速度の評価",
     pub:["Hadtimin, A. F."]},

    {grade:"M2", name:"Xu Tianjin", field:"東北タイ",
     theme:"東北タイにおいて土地利用の違いが土壌断面特性に及ぼす影響",
     pub:["Xu, T."]},

    {grade:"M1", name:"亀村 侑汰", field:"滋賀 / 奈良 / 京都",
     theme:"茶園における長期無施肥が炭素および窒素循環に及ぼす影響 ―慣行栽培および有機栽培との比較―",
     pub:["Kamemura, U.", "亀村侑汰"]},

    {grade:"M1", name:"河上 優那", field:"新潟",
     theme:"新潟県胎内川扇状地の水田における下層土可給態ケイ酸の籾品質指標としての有効性",
     pub:["Kawakami, Y.", "河上優那"]},

    {grade:"M1", name:"多田 哲也", field:"亀岡 / 宇治",
     theme:"長期無施肥水田における窒素収支の定量化",
     pub:["Tada, T.", "多田哲也"]},

    {grade:"M1", name:"永田 和樹", field:"フィリピン",
     theme:"IRRIの長期連用試験における水稲の窒素多施用がN・P・K吸収に及ぼす影響",
     pub:["Nagata, K.", "永田和樹"]},

    {grade:"B4", name:"藤井 雄生", field:"タイ",
     theme:"北タイの森林や樹園地における溶存有機物と根の分泌物の比較",
     pub:["Fujii, Y.", "藤井雄生"]},

    {grade:"B4", name:"宮崎 稜央", field:"学内圃場",
     theme:"無施肥・慣行水田土壌における13C、15N標識イネ残渣の有機物画分移行過程の比較",
     pub:["Miyazaki, R.", "宮崎稜央"]},
  ],

  // 卒業生。新しい順（修了年の新しい順、同じ年は在籍の長い人から）。now は本人の了解を得てから書く
  alumni: [
    {degree:"修士・博士", years:"2019–2026", name:"Wang Zixiao", field:"比叡山",
     theme:"温帯酸性森林土壌における有機物の質とその窒素循環への潜在的影響の評価",
     pub:["Wang, Z."]},
    {degree:"学部・修士", years:"2023–2026", name:"石田 早侑梨", field:"ベトナム",
     theme:"ベトナム中部高原の熱帯林土壌におけるNO₃⁻フラックスの制御要因の解析",
     pub:["Ishida, S.", "石田早侑梨"]},
    {degree:"修士", years:"2024–2026", name:"内藤 勇魚", field:"カメルーン",
     theme:"カメルーン東部森林帯のオキシソルにおいて二次植生が窒素の形態変化に与える影響 ―総硝化速度および硝酸総消費速度に着目して",
     pub:["Naito, I.", "内藤勇魚"]},
    {degree:"修士", years:"2022–2025", name:"礒崎 佳世", field:"タンザニア / インドネシア / 室内",
     theme:"熱帯火山灰土壌におけるリン可給性に影響する土壌特性",
     pub:["Isozaki, K.", "礒崎佳世"]},
    {degree:"修士", years:"2023–2025", name:"Anden Siti Fatimah", field:"丹後",
     theme:"農耕地土壌に添加された有機物の質がその無機化過程および微生物バイオマスに与える影響",
     pub:["Anden, S. F."]},
    {degree:"修士", years:"2023–2025", name:"浅沼 瑠菜", field:"新潟県胎内市",
     theme:"新潟県下越地域におけるカントリーエレベーターの籾計量システムを利用した水田土壌特性、籾・茎葉養分、玄米品質の関係の解明",
     pub:["Asanuma, L.", "浅沼瑠菜"]},
    {degree:"修士", years:"2020–2024", name:"城野 沙織", field:"ベトナム",
     theme:"ベトナム中部高地の天然熱帯林および隣接するアカシア人工林における養分フラックスパターンに対する土壌タイプの影響",
     pub:["Johno, S.", "城野沙織"]},
    {degree:"博士", years:"2021–2024", name:"Bui Ngoc Tan", field:"京都市修学院 / 温室",
     theme:"メタン発酵消化液の利用が異なる土壌条件において作物と窒素の消長に与える影響",
     pub:["Bui, N. T."]},
    {degree:"修士", years:"2021–2024", name:"Susu Adi Sivoki Oripa", field:"奄美大島",
     theme:"Measurement of above-ground biomass of mangrove species (Bruguiera gymnorrhiza and Kandelia obovata) in Amami-Oshima, Japan",
     pub:["Susu, A. S. O."]},
    {degree:"修士", years:"2022–2024", name:"Afifa Karima", field:"丹後半島",
     theme:"京都北部上世屋の広域テフラの影響を受けた里山景観における土地利用履歴と土壌特性の関係",
     pub:["Afifa, K."]},
    {degree:"修士", years:"2022–2024", name:"飯田 赳人", field:"東京都檜原村 / 温室",
     theme:"在来ダイズ品種「スズノ」の生育と窒素同化に対する土壌の影響",
     pub:["Iida, T.", "飯田赳人"]},
    {degree:"修士", years:"2022–2024", name:"Soeun Vira", field:"カンボジア",
     theme:"粘土鉱物学に基づいたカンボジア耕地の土壌肥沃度評価",
     pub:["Soeun, V."]},
    {degree:"学部", years:"2023–2024", name:"大道 樹", field:"東京都檜原村",
     theme:"東京都檜原村における在来品種・鑾野大豆の優れた窒素固定能が一作期中の土壌炭素窒素動態に及ぼす影響",
     pub:["Omichi, I.", "大道樹"]},
    {degree:"修士・博士", years:"2014–2023", name:"渡邉 伸一", field:"マレーシア / インドネシア / カメルーン",
     theme:"熱帯林生態系の養分循環におけるO層の役割",
     pub:["Watanabe, S.", "渡邉伸一"]},
    {degree:"修士", years:"2021–2023", name:"藁科 拓実", field:"丹後半島",
     theme:"京都北部丹後半島の一筆の棚田におけるカチオン動態およびメタンフラックスの空間的変動",
     pub:["Warashina, T.", "藁科拓実"]},
    {degree:"修士", years:"2020–2022", name:"Wahyuningsih Gendro Indri", field:"京丹後 / 温室",
     theme:"Rice husk biochar application as a mitigation strategy for nitrous oxide and methane emission in sandy paddy soil",
     pub:["Wahyuningsih, G. I."]},
    {degree:"修士", years:"2020–2022", name:"Noun Sopheak", field:"タイ",
     theme:"Evaluation of soil fertility status in Northeast Thailand",
     pub:["Noun, S."]},
    {degree:"修士", years:"2020–2022", name:"奥岡 曹太朗", field:"東京都檜原村 / 室内",
     theme:"土壌微生物の基質利用特性に基づく土壌養分環境の評価 ―日本の中山間地斜面畑における事例",
     pub:["Okuoka, S.", "奥岡曹太朗"]},
    {degree:"修士", years:"2020–2022", name:"川勝 来夢", field:"東京都檜原村",
     theme:"山間地域の傾斜畑において施肥の有無が土壌中の物質動態に及ぼす影響 ―東京都檜原村における小麦及びダイズの栽培事例",
     pub:["Kawakatsu, R.", "川勝来夢"]},
    {degree:"修士", years:"2020–2022", name:"Waraningtyas Indira", field:"京都 / 室内",
     theme:"土性を異にする土壌において施用する有機物の質が炭素および窒素の無機化に及ぼす影響",
     pub:["Waraningtyas, I."]},
    {degree:"学部", years:"2021–2022", name:"井上 碧水", field:"丹後半島",
     theme:"丹後半島における里山の土地利用変遷がフジの分布や土壌の化学的特性に与える影響",
     pub:["Inoue, T.", "井上碧水"]},
    {degree:"修士", years:"2019–2021", name:"Yao Yao", field:"京都市修学院",
     theme:"京都水田土壌における窒素収支 ―化学肥料施用とメタン発酵消化液施用の比較",
     pub:["Yao, Y."]},
    {degree:"博士", years:"2016–2019", name:"Le Dinh Huy", field:"ベトナム",
     theme:"ベトナム中部地方の傾斜農地における水食プロセス ―トゥアティエンフエ省アルオイ県の事例研究",
     pub:["Le, D. H."]},
    {degree:"学部・修士", years:"2015–2018", name:"野中 瞳", field:"カメルーン",
     theme:"カメルーン南東部の森林開墾後のカカオ畑における養分フラックス",
     pub:["Nonaka, H.", "野中瞳"]},
    {degree:"修士", years:"2015–2017", name:"Sangsompaisarn Napakod", field:"タイ",
     theme:"タイ国北部の焼畑移動農耕の異なる土地利用ステージにおける総窒素形態変化速度",
     pub:["Sangsompaisarn, N."]},
    {degree:"修士", years:"2015–2017", name:"浜口 由紀子", field:"カメルーン",
     theme:"カメルーン熱帯林における土壌微生物の基質利用特性に基づく土壌養分環境の評価",
     pub:["Hamaguchi, Y.", "浜口由紀子"]},
    {degree:"学部", years:"2016–2017", name:"奥村 嘉之", field:"温室",
     theme:"黒ボク土と褐色低地土を用いたトウモロコシ栽培において、溶出タイプの異なる被覆肥料の有効性を窒素溶脱と吸収効率に着目して検証する",
     pub:["Okumura, Y.", "奥村嘉之"]},
  ],
};
