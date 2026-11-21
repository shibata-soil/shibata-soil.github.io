// ニュースデータ（index.html と news.html で共有）
// date: "YYYY.MM.DD", category: カテゴリ, title: 一覧タイトル（※リンクやHTMLタグは入れない。Homeでは行全体がリンクになるため）, slug: ASCII識別子(省略時は連番)
// category「フィールド」の記事は Home の右列・News ページの「フィールド」タブに分かれて表示される（isField を参照）
// body: 展開時の本文(省略可), photos: 画像パス配列(省略可), captions: キャプション配列(省略可), links: [{label,url}](省略可)
window.NEWS = [
  {date:"2026.11.21",category:"お知らせ",slug:"kinki-kyogikai",title:"近畿土壌肥料研究協議会に参加（大阪）",
   body:'11/20、大阪。近畿6府県の農業現場の課題について情報を交換する会です。日々、生産現場と深く関わっている方々のお話を聞くこと、そしてそういう方々と交流を持つことは、現場のリアリティを知るうえでも大事だと感じています。ケイ酸関係での新たなつながりや、昔まったく別の場所でお会いした方との思いがけない再会もあり、今後の新たな展開につながっていきそうな出会いもあって、参加してすごくよかったです！',
   photos:["img/news/2026-11-21-kinki-kyogikai/01.jpg"],
   captions:["会場の大阪産業創造館にて"]},
  {date:"2026.11.17",category:"お知らせ",slug:"tada-luzon",title:"多田君がフィリピン・ルソン島の水田調査へ旅立ちました！",
   body:'11/17、多田君がフィリピン・ルソン島へ、水田土壌調査の後半戦に旅立ちました。2週間ほどの滞在です。IRRIでインターン中の永田君と一緒に頑張って！フィリピンの田んぼを満喫してきてちょうだい。'},
  {date:"2026.11.13",category:"フィールド",slug:"luzon-sampling",title:"フィリピン・ルソン島中部の水田で土壌を採取してきました！",
   body:'11/2–12、フィリピンで水田土壌調査をしてきました！フィリピンいちのコメどころ・ヌエバエシハ州です。乾季で田んぼに水はなく、野帳が隠れてしまうほど深い亀裂に感動しました。バーティソル地帯だそう。裏作でスイカやカボチャなどが植えられているところが多かったです。',
   photos:["img/news/2026-11-13-luzon-sampling/01.jpg","img/news/2026-11-13-luzon-sampling/02.jpg","img/news/2026-11-13-luzon-sampling/03.jpg","img/news/2026-11-13-luzon-sampling/04.jpg","img/news/2026-11-13-luzon-sampling/05.jpg","img/news/2026-11-13-luzon-sampling/06.jpg","img/news/2026-11-13-luzon-sampling/07.jpg","img/news/2026-11-13-luzon-sampling/08.jpg","img/news/2026-11-13-luzon-sampling/09.jpg","img/news/2026-11-13-luzon-sampling/10.jpg"],
   captions:["土壌採取した仲間と","サンプリングの説明に州庁へ","市役所へも","裏作のカボチャ","オーガーを使ってのサンプリング","深く大きな亀裂！！膨潤性2:1型粘土鉱物を感じます","裏作のスイカを運ぶ水牛さん","田んぼの土","拠点にした中央ルソン州立大学の学食",""]},
  {date:"2026.11.05",category:"受賞",slug:"jssspn-award",title:"日本土壌肥料学会奨励賞に選出",
   body:'第45回 <a href="https://jssspn.jp/info-secretariat-20261102_02/" target="_blank" rel="noopener">日本土壌肥料学会奨励賞</a>に選出されました。業績題目は「多様な湿潤生態環境下の農耕地における土壌養分動態の解明と持続的土壌管理技術の構築」。来年度の学会創立100周年記念大会（京都）で授賞式の予定です。これまでお世話になった諸先輩方や現在一緒に楽しく研究をしている学生の皆さんのおかげです。これを励みにより一層努力していきたいと思います！'},
  {date:"2026.11.02",category:"学会",slug:"lowph-gifu",title:"低pH国際シンポジウム（岐阜）で3件発表",
   body:'10/27–30、岐阜。酸性土壌の研究者が世界中から集まる学会で、研究室から3件のポスター発表を行いました。今後の研究の展開に深みが出そうな新たな出会いもあり、刺激的な4日間でした。',
   photos:["img/news/2026-11-02-lowph-gifu/01.jpg","img/news/2026-11-02-lowph-gifu/02.jpg"],
   captions:["ポスター発表の様子",""]},
  {date:"2026.10.23",category:"フィールド",slug:"campus-pipe-move",title:"学内水田圃場でパイプの移設をしました！",
   body:'10/22、学内の水田圃場の耕うんに伴い、宮崎くんのパイプの移設作業を行いました。',
   photos:["img/news/2026-10-23-campus-pipe-move/01.jpg","img/news/2026-10-23-campus-pipe-move/02.jpg"],
   captions:["","移設したパイプ"]},
  {date:"2026.10.22",category:"お知らせ",slug:"nagata-irri",title:"永田君がIRRIのインターンへ旅立ちました！",
   body:'10/21、永田君が地球環境学舎のインターンシップで、フィリピンの国際稲研究所（IRRI）へ旅立ちました。1月末までの約3か月です。ビザの手続きなどで直前はバタバタしましたが、無事に出発できて良かった。気をつけて、そして楽しんで。多くを学んできてほしいと思います。いってらっしゃい！'},
  {date:"2026.10.20",category:"フィールド",slug:"shugakuin-harvest",title:"修学院離宮での稲刈りに参加しました！",
   body:'10/19。間藤先生が管理されている離宮の棚田で、バインダーという刈取り機械を使って稲刈りし、稲木掛けを行いました。今年は9月の長雨で品質管理が難しかったそうです。',
   photos:["img/news/2026-10-20-shugakuin-harvest/01.jpg","img/news/2026-10-20-shugakuin-harvest/02.jpg"],
   captions:["稲木掛けを終えた棚田。奥に京都の街が見える","離宮の棚田に並ぶ稲木"]},
  {date:"2026.10.19",category:"お知らせ",slug:"fujii-madagascar",title:"雄生君がJICAのインターンでマダガスカルへ旅立ちました！",
   body:'10/17、雄生君がJICAのインターンシップで、マダガスカルのアンカラファンツィカ国立公園へ旅立ちました。1か月ほどの滞在です。初めてのアフリカ、たくさんの刺激を全身に受けてきてほしいと思います！思いっきり楽しんで！'},
  {date:"2026.10.16",category:"フィールド",slug:"bnf-wrapup",title:"亀岡・小倉の水田、収穫が終わりました！",
   body:'10/15、宇治市小倉。6月に設置した測定機器を撤収し、今シーズンの水田での窒素固定の測定が終わりました。亀岡の無施肥水田と宇治の水田を約10日に1回ずつ、夏の間ずっと通いました。溶脱水を採るためのポーラスカップは引き続き埋設。イネが植わっていない間の水の動きも追いかけます。',
   photos:["img/news/2026-10-16-bnf-wrapup/01.jpg","img/news/2026-10-16-bnf-wrapup/02.jpg"],
   captions:["小倉の水田","亀岡の水田"]},
  {date:"2026.10.13",category:"学会",slug:"hanoi-sympo",title:"国際シンポジウムの運営でハノイへ",
   body:'10/5–9、地球環境学堂主催の国際シンポジウムの運営のため、ハノイに行ってきました。ハノイの朝はバイクで渋滞していました！！',
   photos:["img/news/2026-10-13-hanoi-sympo/01.jpg","img/news/2026-10-13-hanoi-sympo/02.jpg"],
   captions:["ハノイの朝",""]},
  {date:"2026.10.08",category:"学会",slug:"hust-ku",title:"HUST-KU International Symposium 2026で4件発表・Best Poster Award 2件受賞",
   body:'10/7、ハノイ工科大学での現地開催（オンライン併用）。亀村君、河上さんらの発表が Best Poster Award を受賞しました（2件）。しっかり準備した成果が出ましたね。',
   photos:["img/news/2026-10-08-hust-ku/01.jpg"]},
  {date:"2026.10.02",category:"フィールド",slug:"tea-garden-season",title:"茶園に通い始めて半年たちました！",
   body:'4月から10月まで、滋賀の茶園に1〜2週に1回通いました。土壌水の採取に加え、6月からはガスフラックスの測定も。肥料に頼らずお茶を育てる畑で、土の中で何が起きているのかを追いかけています。'},
  {date:"2026.10.01",category:"お知らせ",slug:"jistec-meeting",title:"国際科学技術財団の研究助成 交流会に参加（東京）",
   body:'9/30、東京。平成記念研究助成の採択者交流会に出席しました。分野の違う研究者と話せる貴重な機会でした！'},
  {date:"2026.09.30",category:"フィールド",slug:"tea-0928",title:"茶園で調査をしました！",
   body:'9/28–29、滋賀・奈良の茶園。ガスフラックスの測定をしました。自分で茶園へ来るのが約2か月ぶりだったことにビックリ。周りの田んぼのほとんどのイネが収穫されていて、季節が進んだことを実感しました。'},
  {date:"2026.09.25",category:"お知らせ",slug:"phd-wang-watanabe",title:"Wang君・渡邉伸一君が博士号を取得",
   body:'9/24、Wang君と渡邉伸一君に京都大学博士（農学）の学位が授与されました。Wang君は温帯酸性森林土壌における有機物の質とその窒素循環への潜在的影響の評価、渡邉君はマレーシア・インドネシア・カメルーンの熱帯林生態系の養分循環におけるO層（堆積腐植層）の役割をテーマに、長い時間をかけて粘り強く研究を積み重ねてきました。二人とも本当におめでとう！これからの活躍を楽しみにしています。'},
  {date:"2026.09.21",category:"フィールド",slug:"bnf-ogura-4",title:"小倉の水田で4回目の測定をしました！",
   body:'9/18、宇治市小倉。窒素固定の測定、4回目。稲穂が垂れてきました！！',
   photos:["img/news/2026-09-21-bnf-ogura-4/01.jpg"]},
  {date:"2026.09.16",category:"お知らせ",slug:"sansai-interview",title:"地球環境学堂のニュースレターにインタビューが載りました",
   body:'地球環境学堂 三才学林の <a href="https://www.ges.kyoto-u.ac.jp/ges/wp-content/pdf.js-master/web/viewer.html?file=https://www.ges.kyoto-u.ac.jp/ges/wp-content/uploads/2026/09/SANSAI_NewsLetter_No.39.pdf#page=4" target="_blank" rel="noopener">Sansai Newsletter No.39</a> に、インタビューを載せていただきました（聞き手：落合知帆先生）。土に興味を持ったきっかけ、タイやカメルーンでの調査、これからやりたいことを話しています。日本語は4ページから、英語は2ページからです。'},
  {date:"2026.09.10",category:"学会",slug:"jssspn-fukushima",title:'日本土壌肥料学会（福島）で2件の口頭発表・河上さんが若手口頭発表優秀賞',
   body:'9/8–10、福島。水田のケイ酸に関する研究を報告しました。河上さんの発表が若手口頭発表優秀賞を受賞。2学会連続の受賞、日頃の努力が実りましたね。おめでとう！',
   photos:["img/news/2026-09-10-jssspn-fukushima/01.jpg"]},
  {date:"2026.09.08",category:"フィールド",slug:"tainai-paddy",title:"新潟・胎内の水田で稲刈り前の調査をしてきました！",
   body:'9/6–7、新潟県胎内市。カントリーエレベーターを活用した水田の肥沃度評価の調査地で、胎内川扇状地の水田を回り、生産者の方にもお話を伺いました。今年は稲刈り時期に雨が続いて収穫のタイミングに苦労されているそうです。',
   photos:["img/news/2026-09-08-tainai-paddy/01.jpg","img/news/2026-09-08-tainai-paddy/04.jpg","img/news/2026-09-08-tainai-paddy/02.jpg","img/news/2026-09-08-tainai-paddy/03.jpg"]},
  {date:"2026.09.07",category:"フィールド",slug:"osaki-kabukuri",title:"宮城・大崎で研究会と現地視察を行いました！",
   body:'9/4–5、宮城県大崎市。伊藤先生とディスカッションを行い、蕪栗沼（かぶくりぬま）のまわりの水田を見せていただきました。冬の田んぼに水を張る「ふゆみずたんぼ」に取り組まれている地域です。',
   photos:["img/news/2026-09-07-osaki-kabukuri/01.jpg","img/news/2026-09-07-osaki-kabukuri/02.jpg","img/news/2026-09-07-osaki-kabukuri/03.jpg"]},
  {date:"2026.09.04",category:"お知らせ",slug:"iwate-sympo",title:"岩手大学のシンポジウムに参加",
   body:'9/2。青森のペドロジー学会のあと、岩手大学でシンポジウム「コメの未来を東北から考える〜私たちは日本のお米を食べ続けられるのか？」に参加しました。我々が当たり前におコメを食べられる日常は当たり前じゃないことに危機感を抱きました。そのまま新潟での調査・福島での土壌肥料学会へと続きました。',
   photos:["img/news/2026-09-04-iwate-sympo/01.jpg","img/news/2026-09-04-iwate-sympo/02.jpg"]},
  {date:"2026.09.02",category:"学会",slug:"pedology-aomori",title:'日本ペドロジー学会（青森）で2件のポスター発表・河上さんがポスター賞',
   body:'9/1、青森。河上さんの発表がポスター賞を受賞しました。ギリギリまで粘って解析したデータで頑張って作ったポスターがちゃんと評価されて嬉しいです。',
   photos:["img/news/2026-09-02-pedology-aomori/01.jpg"]},
  {date:"2026.09.01",category:"論文",slug:"wang-catena",title:"Wang et al. が CATENA に掲載",
   body:'温帯の酸性森林土壌での有機物の安定化に関する論文（Wang et al.）が <i>CATENA</i> に掲載されました。Wang君の粘り強い分析がようやく形になりました。長かったけれどいい論文になったと思います。'},
  {date:"2026.08.28",category:"フィールド",slug:"bnf-ogura-3",title:"小倉の水田で3回目の測定をしました！",
   body:'8/27、宇治市小倉。窒素固定の測定、3回目。今日も5時半発。曇っていたおかげで楽でした。明日から青森！！'},
  {date:"2026.08.27",category:"フィールド",slug:"campus-sampling-2",title:"学内圃場で稲わら分解実験の2回目のサンプリングをしました！",
   body:'8/26、学内圃場。宮崎くんの研究の2回目のサンプリングです。稲わらの分解がどれぐらい進んでいるか、土のどこにくっついているか、分析結果が楽しみです！',
   photos:["img/news/2026-08-27-campus-sampling-2/01.jpg"]},
  {date:"2026.08.19",category:"フィールド",slug:"bnf-kameoka-3",title:"亀岡の水田で3回目の測定をしました！",
   body:'8/18、亀岡。タイから帰った翌日、そのまま田んぼへ。窒素固定の測定、3回目。',
   photos:["img/news/2026-08-19-bnf-kameoka-3/01.jpg","img/news/2026-08-19-bnf-kameoka-3/02.jpg"],
   captions:["","この日は小倉にも行きました"]},
  {date:"2026.08.18",category:"フィールド",slug:"thailand-2026",title:"北タイで土壌調査をしてきました！",
   body:'8/8–17、タイ。Epron先生との共同研究で、北タイのチェンマイ近郊で土地利用変化が土壌のメタン吸収能に及ぼす影響を評価しています。名古屋大の村瀬先生は微生物の解析を、山梨大の向井先生は樹木根からの滲出液を、僕と雄生君は土壌調査をそれぞれ協力しながら行いました。解析結果が今から楽しみです！',
   photos:["img/news/2026-08-18-thailand-2026/01.jpg","img/news/2026-08-18-thailand-2026/02.jpg","img/news/2026-08-18-thailand-2026/03.jpg","img/news/2026-08-18-thailand-2026/04.jpg","img/news/2026-08-18-thailand-2026/05.jpg"],
   captions:["北タイの落葉フタバガキ林で","落葉フタバガキ林の森林土壌","","宿舎で抽出実験","チェンマイ名物「カオソーイ」。スパイスを効かせたココナッツミルクベースのカレースープに中太の中華麺を合わせて食べる麺料理"]},
  {date:"2026.08.10",category:"フィールド",slug:"bnf-ogura-2",title:"小倉の水田で2回目の測定をしました！",
   body:'8/7、宇治市小倉。窒素固定の測定、2回目。5時半発です。イネも暑い中よく頑張って成長しています！！明日からタイ！！',
   photos:["img/news/2026-08-10-bnf-ogura-2/01.jpg"]},
  {date:"2026.08.03",category:"フィールド",slug:"tea-0730",title:"真夏の茶園で調査をしました！",
   body:'7/30–31、滋賀・奈良の茶園。ガスフラックスの測定。暑い！',
   photos:["img/news/2026-08-03-tea-0730/01.jpg"]},
  {date:"2026.07.29",category:"お知らせ",slug:"watanabe-defense",title:"渡邉伸一君の博士論文公聴会",
   body:'7/28、博士論文の公聴会が行われました。博士からテーマを変えて、マレーシアのパソ森林保護区でフィールドワークを始めました。なかなかトラブルも多く、海外で一人で試行錯誤しながら進めてとった大変貴重なデータの数々。本当に辛抱強くよく頑張ってまとめました。伸一君、お疲れ様！！',
   photos:["img/news/2026-07-29-watanabe-defense/01.jpg"]},
  {date:"2026.07.28",category:"フィールド",slug:"bnf-kameoka-2",title:"亀岡の水田で2回目の測定をしました！",
   body:'7/27、亀岡の窒素固定の測定、2回目。イネがどんどん成長していきます！！',
   photos:["img/news/2026-07-28-bnf-kameoka-2/01.jpg","img/news/2026-07-28-bnf-kameoka-2/02.jpg"],
   captions:["","この日は小倉にも行きました"]},
  {date:"2026.07.20",category:"フィールド",slug:"bnf-ogura-1",title:"小倉の水田で窒素固定の測定を始めました！",
   body:'7/17、宇治市小倉。亀岡に続いて、こちらも1回目の測定。暑くなる前の早朝に作業開始です。',
   photos:["img/news/2026-07-20-bnf-ogura-1/01.jpg"]},
  {date:"2026.07.17",category:"フィールド",slug:"tea-0715",title:"滋賀・奈良の茶園で調査をしました！",
   body:'7/15–16、いつものルーティン測定。いよいよ圃場も暑くなってきました！！',
   photos:["img/news/2026-07-17-tea-0715/01.jpg","img/news/2026-07-17-tea-0715/02.jpg"]},
  {date:"2026.07.09",category:"フィールド",slug:"bnf-kameoka-1",title:"亀岡の水田で窒素固定の測定を始めました！",
   body:'7/8、亀岡。6月に設置した機器で、1回目の窒素固定の測定。パイプ内の水を抜きつつ、試行錯誤しながらのサンプリングです！！',
   photos:["img/news/2026-07-09-bnf-kameoka-1/01.jpg","img/news/2026-07-09-bnf-kameoka-1/02.jpg","img/news/2026-07-09-bnf-kameoka-1/03.jpg","img/news/2026-07-09-bnf-kameoka-1/04.jpg"]},
  {date:"2026.07.07",category:"フィールド",slug:"tango-azumino",title:"丹後と安曇野で藤織りと天蚕の土地を訪ねてきました！",
   body:'7/4–6。金谷先生の科研（布工芸の継承）の分担研究で、京都・丹後の藤織りと、長野・安曇野の天蚕の現場を訪ねました。土そのものというより、その土地の環境と人の暮らしがどうつながってきたのかを考える調査です。',
   photos:["img/news/2026-07-07-tango-azumino/01.jpg","img/news/2026-07-07-tango-azumino/02.jpg","img/news/2026-07-07-tango-azumino/03.jpg","img/news/2026-07-07-tango-azumino/04.jpg","img/news/2026-07-07-tango-azumino/05.jpg","img/news/2026-07-07-tango-azumino/06.jpg","img/news/2026-07-07-tango-azumino/07.jpg"],
   captions:["京都・丹後の集落","美しい繭です。この繭から糸を引き出して糸にしたものが天蚕糸です。「繊維のダイヤモンド」や「繊維の女王」と呼ばれます。","猿・鳥よけのネットをかけたクヌギの樹","四回脱皮した五齢の幼虫。エメラルドグリーンで綺麗です","カエルもいました！","まさにいま繭を作っている最中",""]},
  {date:"2026.07.07",category:"論文",slug:"watanabe-sspn",title:"Watanabe et al. が SSPN に掲載",
   body:'マレーシアの熱帯林での硝酸・塩基の溶脱に関する論文（Watanabe et al.）が <i>Soil Science and Plant Nutrition</i> に掲載されました。長年のデータがようやくまとまりました。パソ森林保護区での地道な観測の積み重ねです。色んな思いが詰まった作品です。本当におめでとう！'},
  {date:"2026.07.06",category:"フィールド",slug:"tea-0702",title:"雨上がりの茶園で調査をしました！",
   body:'7/2–3、前日雨が降ったので土壌水の回収と、あわせてガスフラックスの測定も行いました。作業に慣れてきました。',
   photos:["img/news/2026-07-06-tea-0702/01.jpg","img/news/2026-07-06-tea-0702/02.jpg"]},
  {date:"2026.06.30",category:"フィールド",slug:"campus-sampling-1",title:"学内圃場で稲わら分解実験の初回サンプリングをしました！",
   body:'6/29、学内圃場。宮崎くんの研究の初回サンプリングです。',
   photos:["img/news/2026-06-30-campus-sampling-1/01.jpg","img/news/2026-06-30-campus-sampling-1/02.jpg"],
   captions:["初回サンプリングを終えたあとのパイプ群（7/3撮影）",""]},
  {date:"2026.06.22",category:"フィールド",slug:"tea-gasflux",title:"茶園で初めてガスフラックスを測定しました！",
   body:'6/19、二酸化炭素とメタンのフラックスを測定する方法を、Epron先生から現地で教えてもらいました。',
   photos:["img/news/2026-06-22-tea-gasflux/01.jpg","img/news/2026-06-22-tea-gasflux/02.jpg","img/news/2026-06-22-tea-gasflux/03.jpg","img/news/2026-06-22-tea-gasflux/04.jpg","img/news/2026-06-22-tea-gasflux/05.jpg"],
   captions:["Epron先生にガスフラックスの測定をレクチャーしてもらいました","","","",""]},
  {date:"2026.06.16",category:"フィールド",slug:"kameoka-ogura-leaching",title:"亀岡・小倉の水田で溶脱水のサンプリングをしました！",
   body:'6/15、小倉と亀岡の水田で溶脱水のサンプリングをしました。',
   photos:["img/news/2026-06-16-kameoka-ogura-leaching/01.jpg","img/news/2026-06-16-kameoka-ogura-leaching/02.jpg","img/news/2026-06-16-kameoka-ogura-leaching/03.jpg"],
   captions:["小倉の水田。足をとられないように、攪乱を最小限にするように、そうっと歩きます。","亀岡の水田",""]},
  {date:"2026.06.16",category:"学会",slug:"wcss-nanjing",title:"世界土壌会議（中国・南京）でポスター発表",
   body:'6/7–12、中国・南京。熱帯土壌の硝化についてポスター発表を行いました。4年に一度の世界大会、懐かしい再会もあり、世界中の土壌研究者と話せる刺激の多い1週間でした。Wang君の地元・南京をたくさん案内してもらいました。ありがとう！',
   photos:["img/news/2026-06-16-wcss-nanjing/01.jpg","img/news/2026-06-16-wcss-nanjing/02.jpg","img/news/2026-06-16-wcss-nanjing/03.jpg","img/news/2026-06-16-wcss-nanjing/04.jpg"],
   captions:["","","南京名物、ザリガニ料理",""]},
  {date:"2026.06.08",category:"フィールド",slug:"tea-0603",title:"滋賀・奈良の茶園にガス測定のパイプを埋設しました！",
   body:'6/3–5、3日間かけて。土と大気の間のガスのやりとりを測るためのパイプを計40本埋設しました！！無事に終わって一安心です。',
   photos:["img/news/2026-06-08-tea-0603/01.jpg","img/news/2026-06-08-tea-0603/02.jpg","img/news/2026-06-08-tea-0603/03.jpg"]},
  {date:"2026.06.03",category:"フィールド",slug:"kameoka-bnf-setup",title:"亀岡の無施肥水田に測定機器を設置しました",
   body:'6/2、京都府亀岡市。肥料を入れずに稲を育てている水田に、窒素固定を測るための機器を設置しました。作物学研究室の桂先生との共同研究「無投入水田における収量安定性の機構解明」の一環です。6/9には慣行区と宇治市小倉の水田にも設置。ここから秋まで通います。',
   photos:["img/news/2026-06-03-kameoka-bnf-setup/01.jpg"],
   captions:["小雨の中作業を行いました"]},
  {date:"2026.06.01",category:"お知らせ",slug:"promotion",title:"准教授に昇任しました",
   body:'大学院地球環境学堂／大学院農学研究科（両任）の准教授に昇任しました。引き続き、現場と実験室を行き来しながら土の研究を続けます！'},
  {date:"2026.06.01",category:"フィールド",slug:"campus-pipe",title:"学内圃場に稲わら分解実験のパイプを埋設しました！",
   body:'5/29、宮崎くんのテーマである「水田圃場で稲わら残渣が分解すると土壌有機物のどの画分に入っていくのか」を調べるためのパイプの埋設を、学内圃場で行いました。多くの学生に手伝ってもらって作業を行いました。素晴らしいチームワークで予定通り作業が終えられ、ほっとしました。',
   photos:["img/news/2026-06-01-campus-pipe/01.jpg","img/news/2026-06-01-campus-pipe/02.jpg","img/news/2026-06-01-campus-pipe/03.jpg"],
   captions:["","","埋設手順のレク中です"]},
  {date:"2026.06.01",category:"フィールド",slug:"kizu-taue",title:"木津農場で田植えをしました！",
   body:'5/30、毎年恒例、ゆりの木会での田植えと早苗饗BBQを楽しみました！！',
   photos:["img/news/2026-06-01-kizu-taue/01.jpg"]},
  {date:"2026.05.29",category:"お知らせ",slug:"wang-defense",title:"Wang君の博士論文公聴会",
   body:'5/28、博士論文の公聴会が行われました。質疑応答も含め、非常に素晴らしい発表でした。僕が助教で着任したタイミングで修士で入ってきたWang君の集大成の姿に胸が熱くなりました！！Wang君、お疲れ様！！'},
  {date:"2026.05.28",category:"フィールド",slug:"keihoku-practice",title:"京北で地球環境学舎の野外実習をしました！",
   body:'5/27、京北の森林と水田で土壌断面調査実習を行いました！！水田では、テトラベース試薬が見事に反応しました。一筆の圃場でもレキが出現する深さや還元の程度が異なることを実感しました！！',
   photos:["img/news/2026-05-28-keihoku-practice/01.jpg","img/news/2026-05-28-keihoku-practice/02.jpg"],
   captions:["森林の土壌断面。表層の有機物が溜まっている層（A層）に根が集中しているのが分かります。B層は褐色を呈しています。傾斜地なのですぐ岩盤が出てきて浅い断面です。","水田の土壌断面には、テトラベースが反応して紫色になり、マンガン斑があらわになっています。右横のピンク色はジピリジル反応で、還元状態の二価鉄の存在がわかります。"]},
  {date:"2026.05.22",category:"フィールド",slug:"tea-0521",title:"奈良・滋賀の茶園で土壌水を採取しました！",
   body:'5/21、雨が降ったので土壌水採取。茶園周辺は細い道路が多いですが、安全運転で！！'},
  {date:"2026.05.19",category:"お知らせ",slug:"softball-2026",title:"研究室対抗ソフトボールで初戦突破！！",
   body:'5/18、元農芸化学専攻の研究室によるソフトボール大会です。強豪ひしめくトーナメントで僕が学生の頃から一度も勝ったことがありませんでしたが、なんと、今年は強豪相手に初戦突破！！元気で運動好きな学生が集まり、大盛り上がりでした！！'},
  {date:"2026.05.15",category:"フィールド",slug:"tea-nara-0513",title:"滋賀の無施肥茶園と奈良の無施肥・慣行茶園で一番茶の収量調査をしました！",
   body:'5/13–14、再び収穫調査。奈良の茶園では、機械による茶摘みも手伝わせてもらいました！',
   photos:["img/news/2026-05-15-tea-nara-0513/01.jpg","img/news/2026-05-15-tea-nara-0513/02.jpg","img/news/2026-05-15-tea-nara-0513/03.jpg","img/news/2026-05-15-tea-nara-0513/04.jpg","img/news/2026-05-15-tea-nara-0513/05.jpg"],
   captions:["一部の茶樹は黒いネットで遮光されていました！テアニン含量を上げるためです。","","","傾斜がある所は手持ちのバリカンのような機械で作業を進めます。","平らなところは乗用の茶摘み機で作業を進めます。"]},
  {date:"2026.05.11",category:"フィールド",slug:"tea-0508",title:"滋賀の有機茶園で一番茶の収量調査をしました！",
   body:'5/8、茶の新芽の品質と収量を調査しました！柔らかく、上品な緑色をした、とても美味しそうな茶葉です！！',
   photos:["img/news/2026-05-11-tea-0508/01.jpg","img/news/2026-05-11-tea-0508/02.jpg","img/news/2026-05-11-tea-0508/03.jpg","img/news/2026-05-11-tea-0508/04.jpg","img/news/2026-05-11-tea-0508/05.jpg"]},
  {date:"2026.04.30",category:"フィールド",slug:"kameoka-ogura-sampling",title:"亀岡・小倉の水田で土壌サンプリングをしました！",
   body:'4/28、長い間無施肥無農薬で管理されている水田圃場の視察と土壌サンプリングを行いました！隣接する慣行栽培の水田土壌と物質収支の比較を行っていきます。作物研の桂先生、水環境工学の濱先生、微生物生態学者の東樹先生との共同研究です。',
   photos:["img/news/2026-04-30-kameoka-ogura-sampling/01.jpg","img/news/2026-04-30-kameoka-ogura-sampling/02.jpg"],
   captions:["","灌漑水の流量を測定するための三角堰の設置"]},
  {date:"2026.04.27",category:"フィールド",slug:"tea-0423",title:"茶園で2回目の調査をしました！",
   body:'4/23–24、滋賀・奈良の茶園。雨が降ったので土壌水のサンプリングと、初回に設置した機器の確認、やり残した設置の続きをしました。走りながら調査の仕方を覚えていきます！'},
  {date:"2026.04.17",category:"お知らせ",slug:"tuat-meeting",title:"東京農工大で打合せ",
   body:'4/16、農工大の杉原先生との共同研究です。安定同位体で標識されたイネのサンプルを受け取り、圃場に埋設するパイプの設計に関する意見交換を行いました。4回生の宮崎くんのテーマです！',
   photos:["img/news/2026-04-17-tuat-meeting/01.jpg","img/news/2026-04-17-tuat-meeting/02.jpg","img/news/2026-04-17-tuat-meeting/03.jpg"],
   captions:["埋設実験用のパイプ","粉砕された残渣","同位体で標識された稲わら残渣"]},
  {date:"2026.04.14",category:"フィールド",slug:"tea-garden-start",title:"滋賀・京都・奈良の茶園で土壌調査を始めました",
   body:'4/9–13、肥料に頼らない茶園づくりを土の側から調べる調査が始まりました。亀村君のテーマで、無施肥無農薬栽培調査研究会の多田氏との共同研究です。滋賀・奈良・京都の茶園を回り、宿泊は間の三重という、4府県にまたがる調査です。初回は5日間かけて土壌断面調査と調査機器の設置。茶園での研究は初めてなので、今からどんな結果が出るかワクワクします！',
   photos:["img/news/2026-04-14-tea-garden-start/18.jpg","img/news/2026-04-14-tea-garden-start/19.jpg","img/news/2026-04-14-tea-garden-start/20.jpg","img/news/2026-04-14-tea-garden-start/01.jpg","img/news/2026-04-14-tea-garden-start/02.jpg","img/news/2026-04-14-tea-garden-start/03.jpg","img/news/2026-04-14-tea-garden-start/04.jpg","img/news/2026-04-14-tea-garden-start/05.jpg","img/news/2026-04-14-tea-garden-start/06.jpg","img/news/2026-04-14-tea-garden-start/07.jpg","img/news/2026-04-14-tea-garden-start/08.jpg","img/news/2026-04-14-tea-garden-start/09.jpg","img/news/2026-04-14-tea-garden-start/10.jpg","img/news/2026-04-14-tea-garden-start/11.jpg","img/news/2026-04-14-tea-garden-start/12.jpg","img/news/2026-04-14-tea-garden-start/13.jpg","img/news/2026-04-14-tea-garden-start/14.jpg","img/news/2026-04-14-tea-garden-start/15.jpg","img/news/2026-04-14-tea-garden-start/16.jpg","img/news/2026-04-14-tea-garden-start/17.jpg"],
   captions:["土壌断面の写真をとる体勢（正常です）","","断面の成形中","滋賀県無施肥茶園","","とあるお店のご主人直筆のおことば","信楽駅前のたぬき","","滋賀県有機茶園","","","奈良県無施肥茶園","","奈良県慣行茶園","京都府無施肥茶園","","京都府有機茶園","","",""]},
  {date:"2026.04.01",category:"研究費",slug:"kakenhi-ce",title:"科研費 基盤研究(B) が採択（代表）",
   body:'「カントリーエレベーターを活用した地域分散型水田肥沃度評価システムの開発」が始まりました。生産者の圃場でコメの品質を向上させる肥培管理について調べていきます。'},
  {date:"2026.04.01",category:"研究費",slug:"jistec-india",title:"国際科学技術財団 平成記念研究助成に採択",
   body:'インド農村部で、土と暮らしが代々どう続いてきたのかを、社会構造とあわせて調べます。新しいフィールドに出るのが楽しみです。どんな土に出会えるか、わくわくしています。',
   photos:["img/news/2026-04-01-jistec-india/01.jpg"],
   captions:["4/14は2026年Japan Prize授賞式に招待されました。"]},
  {date:"2026.04.01",category:"論文",slug:"wang-fe",title:"Wang et al. が Forest Ecosystems に掲載",
   body:'酸性針葉樹林で地形と細根が土壌窒素の変化に与える影響を調べた論文が掲載されました。斜面ごとの違いがきれいに出ました。森の中の小さな地形が、土の中の窒素をこんなにも左右するのかと改めて驚きます。'},
];

// ── ID生成 ──
// slug があれば "n" + 日付8桁 + "-" + slug、なければ日付+連番
(function() {
  var dateCnt = {};
  window.NEWS.forEach(function(n) {
    var d8 = n.date.replace(/\./g,"");
    if (n.slug) {
      n._id = "n" + d8 + "-" + n.slug;
    } else {
      dateCnt[d8] = (dateCnt[d8] || 0) + 1;
      n._id = "n" + d8 + "-" + dateCnt[d8];
    }
  });
})();
function newsId(n) { return n._id; }

// ── ユーティリティ ──
function photosHtml(n) {
  if (!n.photos || !n.photos.length) return "";
  var cls = n.photos.length >= 2 ? ' class="news-photos grid2"' : ' class="news-photos"';
  var h = "<div" + cls + ">";
  n.photos.forEach(function(src, i) {
    h += '<figure><img src="' + src + '" alt="" loading="lazy">';
    if (n.captions && n.captions[i]) h += '<figcaption>' + n.captions[i] + '</figcaption>';
    h += '</figure>';
  });
  return h + "</div>";
}

function linksHtml(n) {
  if (!n.links || !n.links.length) return "";
  var h = '<p class="news-links">';
  n.links.forEach(function(l) { h += '<a href="' + l.url + '" target="_blank" rel="noopener">' + l.label + ' ↗</a> '; });
  return h + "</p>";
}

var KIND_MAP={"学会":"","受賞":"kind-award","論文":"kind-paper","フィールド":"kind-field","現場":"kind-field","調査":"kind-field","研究費":"kind-grant","お知らせ":"kind-info"};
function kindCls(cat) { return KIND_MAP[cat] || ""; }

// 画像が読み込めない場合にプレースホルダーを表示
function setupImgFallback() {
  document.querySelectorAll(".news-photos img").forEach(function(img) {
    img.addEventListener("error", function() {
      var ph = document.createElement("div");
      ph.className = "news-img-placeholder";
      ph.textContent = "写真準備中";
      img.parentNode.replaceChild(ph, img);
    });
  });
}

// ── ハッシュで該当記事を開く・スクロール・ハイライト ──
function openHash() {
  var hash = location.hash;
  if (!hash) return;
  var id;
  try { id = decodeURIComponent(hash.slice(1)); } catch(e) { id = hash.slice(1); }
  var el = document.getElementById(id);
  if (!el) return;
  if (el.tagName === "DETAILS") el.open = true;
  setTimeout(function() {
    el.scrollIntoView({behavior:"smooth",block:"start"});
    el.classList.add("news-highlight");
    setTimeout(function(){ el.classList.remove("news-highlight"); }, 2000);
  }, 100);
}

// ── 月グループ化ヘルパー ──
function groupByMonth(items) {
  var months = [], mmap = {};
  items.forEach(function(n) {
    var m = n.date.slice(0,7);
    if (!mmap[m]) { mmap[m] = []; months.push(m); }
    mmap[m].push(n);
  });
  return {months: months, map: mmap};
}

// ── 「フィールド」とそれ以外を分ける ──
// Home は2列（左：学会・論文・お知らせなど／右：フィールド）、News ページはタブで切り替える
function isField(n) { return n.category === "フィールド" || n.category === "現場" || n.category === "調査"; }
function filterNews(items, which) {
  if (which === "field") return items.filter(isField);
  if (which === "other") return items.filter(function(n){ return !isField(n); });
  return items;
}

// ── Top用: 最新N件を月グループ化して表示 ──
// which: "field"（フィールドだけ）/ "other"（フィールド以外）/ 省略（全部）
window.renderNewsTop = function(containerId, limit, which) {
  var g = groupByMonth(filterNews(window.NEWS || [], which).slice(0, limit || 6));
  var html = "";
  g.months.forEach(function(m) {
    html += '<h3 class="news-month">' + m + '</h3>';
    g.map[m].forEach(function(n) {
      var id = newsId(n);
      html += '<a class="news-row" href="news.html#' + id + '">';
      html += '<span class="kind ' + kindCls(n.category) + '">' + n.category + '</span>';
      html += n.title;
      html += '</a>';
    });
  });
  document.getElementById(containerId).innerHTML = html;
};

// ── news.html用: 全件を月グループ化し details/summary で開閉表示 ──
// which: "all" / "other" / "field"。tabsId を渡すとタブ（すべて／できごと／フィールド）を描く
window.renderNewsAll = function(containerId, which, tabsId) {
  which = which || "all";
  if (tabsId) renderNewsTabs(tabsId, containerId, which);
  var g = groupByMonth(filterNews(window.NEWS || [], which === "all" ? undefined : which));
  var html = "";
  g.months.forEach(function(m) {
    var anchor = m.replace(".","-");
    html += '<h3 class="news-month" id="' + anchor + '">' + m + '</h3>';
    g.map[m].forEach(function(n) {
      var id = newsId(n);
      var hasBody = n.body || (n.photos && n.photos.length);
      if (hasBody) {
        html += '<details class="news-item" id="' + id + '">';
        html += '<summary><span class="kind ' + kindCls(n.category) + '">' + n.category + '</span>' + n.title + '</summary>';
        html += '<div class="news-body">';
        html += '<p class="news-date mono">' + n.date + '</p>';
        if (n.body) html += '<p>' + n.body + '</p>';
        html += photosHtml(n);
        html += linksHtml(n);
        html += '</div></details>';
      } else {
        html += '<div class="news-item" id="' + id + '">';
        html += '<span class="kind ' + kindCls(n.category) + '">' + n.category + '</span>' + n.title;
        html += '</div>';
      }
    });
  });
  document.getElementById(containerId).innerHTML = html;

  // 描画完了後に画像フォールバック＋ハッシュ処理
  setupImgFallback();
  openHash();
  if (!window._newsHashBound) { window.addEventListener("hashchange", openHash); window._newsHashBound = true; }
};

function renderNewsTabs(tabsId, containerId, current) {
  var all = window.NEWS || [];
  var defs = [["all","すべて",all.length],["other","できごと",filterNews(all,"other").length],["field","フィールド",filterNews(all,"field").length]];
  var box = document.getElementById(tabsId);
  box.innerHTML = "";
  defs.forEach(function(d) {
    var b = document.createElement("button");
    b.className = "tab"; b.type = "button"; b.setAttribute("role","tab");
    b.setAttribute("aria-selected", d[0] === current ? "true" : "false");
    b.innerHTML = d[1] + '<span class="mono">' + d[2] + '</span>';
    b.addEventListener("click", function() {
      if (location.hash) history.replaceState(null, "", location.pathname + location.search);
      window.renderNewsAll(containerId, d[0], tabsId);
    });
    box.appendChild(b);
  });
}
