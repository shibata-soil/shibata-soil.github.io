// ニュースデータ（index.html と news.html で共有）
// date: "YYYY.MM.DD", category: カテゴリ, title: 一覧タイトル（※リンクやHTMLタグは入れない。Homeでは行全体がリンクになるため）, slug: ASCII識別子(省略時は連番)
// category「フィールド」の記事は Home の右列・News ページの「フィールド」タブに分かれて表示される（isField を参照）
// body: 展開時の本文(省略可), photos: 画像パス配列(省略可), captions: キャプション配列(省略可), links: [{label,url}](省略可)
window.NEWS = [
  {date:"2026.11.13",category:"フィールド",slug:"luzon-sampling",title:"フィリピン・ルソン島中部の水田で土壌を採取してきました！",
   body:'11/2–12、フィリピンで水田土壌調査をしてきました！フィリピンいちのコメどころ・ヌエバエシハ州です。乾季で田んぼに水はなく、野帳が隠れてしまうほど深い亀裂に感動しました。バーティソル地帯だそう。裏作でスイカやカボチャなどが植えられているところが多かったです。'},
  {date:"2026.11.05",category:"受賞",slug:"jssspn-award",title:"日本土壌肥料学会奨励賞に選出",
   body:'第45回 <a href="https://jssspn.jp/info-secretariat-20261102_02/" target="_blank" rel="noopener">日本土壌肥料学会奨励賞</a>に選出されました。業績題目は「多様な湿潤生態環境下の農耕地における土壌養分動態の解明と持続的土壌管理技術の構築」。来年度の学会創立100周年記念大会（京都）で授賞式の予定です。これまでお世話になった諸先輩方や現在一緒に楽しく研究をしている学生の皆さんのおかげです。これを励みにより一層努力していきたいと思います！'},
  {date:"2026.11.02",category:"学会",slug:"lowph-gifu",title:"低pH国際シンポジウム（岐阜）で3件発表",
   body:'10/27–30、岐阜。酸性土壌の研究者が世界中から集まる学会で、研究室から3件のポスター発表を行いました。今後の研究の展開に深みが出そうな新たな出会いもあり、刺激的な4日間でした。'},
  {date:"2026.10.23",category:"フィールド",slug:"campus-pipe-move",title:"学内水田圃場でパイプの移設をしました！",
   body:'10/22、学内の水田圃場の耕うんに伴い、宮崎くんのパイプの移設作業を行いました。'},
  {date:"2026.10.20",category:"フィールド",slug:"shugakuin-harvest",title:"修学院離宮での稲刈りに参加しました！",
   body:'10/19。間藤先生が管理されている離宮の棚田で、バインダーという刈取り機械を使って稲刈りし、稲木掛けを行いました。今年は9月の長雨で品質管理が難しかったそうです。',
   photos:["img/news/2026-10-20-shugakuin-harvest/01.jpg","img/news/2026-10-20-shugakuin-harvest/02.jpg"],
   captions:["稲木掛けを終えた棚田。奥に京都の街が見える","離宮の棚田に並ぶ稲木"]},
  {date:"2026.10.16",category:"フィールド",slug:"bnf-wrapup",title:"亀岡・小倉の水田、収穫が終わりました！",
   body:'10/15、宇治市小倉。6月に設置した測定機器を撤収し、今シーズンの水田での窒素固定の測定が終わりました。亀岡の無施肥水田と宇治の水田を約10日に1回ずつ、夏の間ずっと通いました。溶脱水を採るためのポーラスカップは引き続き埋設。イネが植わっていない間の水の動きも追いかけます。'},
  {date:"2026.10.13",category:"学会",slug:"hanoi-sympo",title:"国際シンポジウムの運営でハノイへ",
   body:'10/5–9、地球環境学堂主催の国際シンポジウムの運営のため、ハノイに行ってきました。ハノイの朝はバイクで渋滞していました！！'},
  {date:"2026.10.08",category:"学会",slug:"hust-ku",title:"HUST-KU International Symposium 2026で4件発表・Best Poster Award 2件受賞",
   body:'10/7、ハノイ工科大学での現地開催（オンライン併用）。亀村君、河上さんらの発表が Best Poster Award を受賞しました（2件）。しっかり準備した成果が出ましたね。'},
  {date:"2026.10.02",category:"フィールド",slug:"tea-garden-season",title:"茶園に通い始めて半年たちました！",
   body:'4月から10月まで、滋賀の茶園に1〜2週に1回通いました。土壌水の採取に加え、6月からはガスフラックスの測定も。肥料に頼らずお茶を育てる畑で、土の中で何が起きているのかを追いかけています。'},
  {date:"2026.10.01",category:"お知らせ",slug:"jistec-meeting",title:"国際科学技術財団の研究助成 交流会に参加（東京）",
   body:'9/30、東京。平成記念研究助成の採択者交流会に出席しました。分野の違う研究者と話せる貴重な機会でした！'},
  {date:"2026.09.30",category:"フィールド",slug:"tea-0928",title:"茶園で調査をしました！",
   body:'9/28–29、滋賀・奈良の茶園。ガスフラックスの測定をしました。自分で茶園へ来るのが約2か月ぶりだったことにビックリ。周りの田んぼのほとんどのイネが収穫されていて、季節が進んだことを実感しました。'},
  {date:"2026.09.30",category:"学会",slug:"microbe-ecology",title:'日本微生物生態学会で渡邉先生が発表',
   body:'9/27–29。渡邉健史先生がマングローブ林土壌のメタン生成・酸化微生物について発表しました。'},
  {date:"2026.09.25",category:"お知らせ",slug:"phd-wang-watanabe",title:"Wang君・渡邉伸一君が博士号を取得",
   body:'9/24、Wang君と渡邉伸一君に京都大学博士（農学）の学位が授与されました。Wang君は温帯酸性森林土壌における有機物の質とその窒素循環への潜在的影響の評価、渡邉君はマレーシア・インドネシア・カメルーンの熱帯林生態系の養分循環におけるO層（堆積腐植層）の役割をテーマに、長い時間をかけて粘り強く研究を積み重ねてきました。二人とも本当におめでとう！これからの活躍を楽しみにしています。'},
  {date:"2026.09.21",category:"フィールド",slug:"bnf-ogura-4",title:"小倉の水田で4回目の測定をしました！",
   body:'9/18、宇治市小倉。窒素固定の測定、4回目。稲穂が垂れてきました！！'},
  {date:"2026.09.16",category:"お知らせ",slug:"sansai-interview",title:"地球環境学堂のニュースレターにインタビューが載りました",
   body:'地球環境学堂 三才学林の <a href="https://www.ges.kyoto-u.ac.jp/ges/wp-content/pdf.js-master/web/viewer.html?file=https://www.ges.kyoto-u.ac.jp/ges/wp-content/uploads/2026/09/SANSAI_NewsLetter_No.39.pdf#page=4" target="_blank" rel="noopener">Sansai Newsletter No.39</a> に、インタビューを載せていただきました（聞き手：落合知帆先生）。土に興味を持ったきっかけ、タイやカメルーンでの調査、これからやりたいことを話しています。日本語は4ページから、英語は2ページからです。'},
  {date:"2026.09.10",category:"学会",slug:"jssspn-fukushima",title:'日本土壌肥料学会（福島）で2件の口頭発表・河上さんが若手口頭発表優秀賞',
   body:'9/8–10、福島。水田のケイ酸に関する研究を報告しました。河上さんの発表が若手口頭発表優秀賞を受賞。2学会連続の受賞、日頃の努力が実りましたね。おめでとう！'},
  {date:"2026.09.08",category:"フィールド",slug:"tainai-paddy",title:"新潟・胎内の水田で稲刈り前の調査をしてきました！",
   body:'9/6–7、新潟県胎内市。カントリーエレベーターを活用した水田の肥沃度評価の調査地で、胎内川扇状地の水田を回り、生産者の方にもお話を伺いました。今年は稲刈り時期に雨が続いて収穫のタイミングに苦労されているそうです。'},
  {date:"2026.09.04",category:"学会",slug:"iwate-sympo",title:"岩手大学のシンポジウムに参加",
   body:'9/2。青森のペドロジー学会のあと、岩手大学でシンポジウム「コメの未来を東北から考える〜私たちは日本のお米を食べ続けられるのか？」に参加しました。我々が当たり前におコメを食べられる日常は当たり前じゃないことに危機感を抱きました。そのまま新潟での調査・福島での土壌肥料学会へと続きました。'},
  {date:"2026.09.02",category:"学会",slug:"pedology-aomori",title:'日本ペドロジー学会（青森）で2件のポスター発表・河上さんがポスター賞',
   body:'9/1、青森。河上さんの発表がポスター賞を受賞しました。ギリギリまで粘って解析したデータで頑張って作ったポスターがちゃんと評価されて嬉しいです。'},
  {date:"2026.09.01",category:"論文",slug:"wang-catena",title:"Wang et al. が CATENA に掲載",
   body:'温帯の酸性森林土壌での有機物の安定化に関する論文（Wang et al.）が <i>CATENA</i> に掲載されました。Wang君の粘り強い分析がようやく形になりました。長かったけれどいい論文になったと思います。'},
  {date:"2026.08.28",category:"フィールド",slug:"bnf-ogura-3",title:"小倉の水田で3回目の測定をしました！",
   body:'8/27、宇治市小倉。窒素固定の測定、3回目。今日も5時半発。曇っていたおかげで楽でした。明日から青森！！'},
  {date:"2026.08.19",category:"フィールド",slug:"bnf-kameoka-3",title:"亀岡の水田で3回目の測定をしました！",
   body:'8/18、亀岡。タイから帰った翌日、そのまま田んぼへ。窒素固定の測定、3回目。'},
  {date:"2026.08.18",category:"フィールド",slug:"thailand-2026",title:"北タイで土壌調査をしてきました！",
   body:'8/8–17、タイ。Epron先生との共同研究で、北タイのチェンマイ近郊で土地利用変化が土壌のメタン吸収能に及ぼす影響を評価しています。名古屋大の村瀬先生は微生物の解析を、山梨大の向井先生は樹木根からの滲出液を、僕と雄生君は土壌調査をそれぞれ協力しながら行いました。解析結果が今から楽しみです！'},
  {date:"2026.08.10",category:"フィールド",slug:"bnf-ogura-2",title:"小倉の水田で2回目の測定をしました！",
   body:'8/7、宇治市小倉。窒素固定の測定、2回目。5時半発です。イネも暑い中よく頑張って成長しています！！明日からタイ！！'},
  {date:"2026.08.03",category:"フィールド",slug:"tea-0730",title:"真夏の茶園で調査をしました！",
   body:'7/30–31、滋賀・奈良の茶園。ガスフラックスの測定。暑い！'},
  {date:"2026.07.29",category:"お知らせ",slug:"watanabe-defense",title:"渡邉伸一君の博士論文公聴会",
   body:'7/28、博士論文の公聴会が行われました。博士からテーマを変えて、マレーシアのパソ森林保護区でフィールドワークを始めました。なかなかトラブルも多く、海外で一人で試行錯誤しながら進めてとった大変貴重なデータの数々。本当に辛抱強くよく頑張ってまとめました。伸一君、お疲れ様！！'},
  {date:"2026.07.28",category:"フィールド",slug:"bnf-kameoka-2",title:"亀岡の水田で2回目の測定をしました！",
   body:'7/27、亀岡の窒素固定の測定、2回目。イネがどんどん成長していきます！！'},
  {date:"2026.07.20",category:"フィールド",slug:"bnf-ogura-1",title:"小倉の水田で窒素固定の測定を始めました！",
   body:'7/17、宇治市小倉。亀岡に続いて、こちらも1回目の測定。暑くなる前の早朝に作業開始です。'},
  {date:"2026.07.17",category:"フィールド",slug:"tea-0715",title:"滋賀・奈良の茶園で調査をしました！",
   body:'7/15–16、いつものルーティン測定。いよいよ圃場も暑くなってきました！！'},
  {date:"2026.07.09",category:"フィールド",slug:"bnf-kameoka-1",title:"亀岡の水田で窒素固定の測定を始めました！",
   body:'7/8、亀岡。6月に設置した機器で、1回目の窒素固定の測定。パイプ内の水を抜きつつ、試行錯誤しながらのサンプリングです！！'},
  {date:"2026.07.07",category:"フィールド",slug:"tango-azumino",title:"丹後と安曇野で藤織りと天蚕の土地を訪ねてきました！",
   body:'7/4–6。金谷先生の科研（布工芸の継承）の分担研究で、京都・丹後の藤織りと、長野・安曇野の天蚕の現場を訪ねました。土そのものというより、その土地の環境と人の暮らしがどうつながってきたのかを考える調査です。'},
  {date:"2026.07.07",category:"学会",slug:"mangrove-paul",title:"マングローブ学会でPaul君が発表",
   body:'7/4。Paul君がマングローブ干潟のメタン放出について発表しました。新しいテーマへの挑戦、頼もしいです。'},
  {date:"2026.07.07",category:"論文",slug:"watanabe-sspn",title:"Watanabe et al. が SSPN に掲載",
   body:'マレーシアの熱帯林での硝酸・塩基の溶脱に関する論文（Watanabe et al.）が <i>Soil Science and Plant Nutrition</i> に掲載されました。長年のデータがようやくまとまりました。パソ森林保護区での地道な観測の積み重ねです。色んな思いが詰まった作品です。本当におめでとう！'},
  {date:"2026.07.06",category:"フィールド",slug:"tea-0702",title:"雨上がりの茶園で調査をしました！",
   body:'7/2–3、前日雨が降ったので土壌水の回収と、あわせてガスフラックスの測定も行いました。作業に慣れてきました。'},
  {date:"2026.06.30",category:"学会",slug:"soil-microbe",title:"日本土壌微生物学会で渡邉先生が発表",
   body:'6/27–28。渡邉健史先生が石垣島マングローブ林土壌の微生物群集について発表しました。'},
  {date:"2026.06.22",category:"フィールド",slug:"tea-gasflux",title:"茶園で初めてガスフラックスを測定しました！",
   body:'6/19、二酸化炭素とメタンのフラックスを測定する方法を、Epron先生から現地で教えてもらいました。'},
  {date:"2026.06.16",category:"学会",slug:"wcss-nanjing",title:"世界土壌会議（中国・南京）でポスター発表",
   body:'6/7–12、中国・南京。熱帯土壌の硝化についてポスター発表を行いました。4年に一度の世界大会、懐かしい再会もあり、世界中の土壌研究者と話せる刺激の多い1週間でした。Wang君の地元・南京をたくさん案内してもらいました。ありがとう！'},
  {date:"2026.06.08",category:"フィールド",slug:"tea-0603",title:"滋賀・奈良の茶園にガス測定のパイプを埋設しました！",
   body:'6/3–5、3日間かけて。土と大気の間のガスのやりとりを測るためのパイプを計40本埋設しました！！無事に終わって一安心です。'},
  {date:"2026.06.03",category:"フィールド",slug:"kameoka-bnf-setup",title:"亀岡の無施肥水田に測定機器を設置しました",
   body:'6/2、京都府亀岡市。肥料を入れずに稲を育てている水田に、窒素固定を測るための機器を設置しました。作物学研究室の桂先生との共同研究「無投入水田における収量安定性の機構解明」の一環です。6/9には慣行区と宇治市小倉の水田にも設置。ここから秋まで通います。'},
  {date:"2026.06.01",category:"お知らせ",slug:"promotion",title:"准教授に昇任しました",
   body:'大学院地球環境学堂／大学院農学研究科（両任）の准教授に昇任しました。引き続き、現場と実験室を行き来しながら土の研究を続けます！'},
  {date:"2026.06.01",category:"フィールド",slug:"campus-pipe",title:"学内圃場に稲わら分解実験のパイプを埋設しました！",
   body:'5/29、宮崎くんのテーマである「水田圃場で稲わら残渣が分解すると土壌有機物のどの画分に入っていくのか」を調べるためのパイプの埋設を、学内圃場で行いました。多くの学生に手伝ってもらって作業を行いました。素晴らしいチームワークで予定通り作業が終えられ、ほっとしました。'},
  {date:"2026.06.01",category:"フィールド",slug:"kizu-taue",title:"木津農場で田植えをしました！",
   body:'5/30、毎年恒例、ゆりの木会での田植えと早苗饗BBQを楽しみました！！'},
  {date:"2026.05.30",category:"学会",slug:"jpgu-agu",title:"JpGU-AGU Joint Meeting 2026で2件発表",
   body:'5/24–29。2件のポスター発表を行いました。'},
  {date:"2026.05.29",category:"お知らせ",slug:"wang-defense",title:"Wang君の博士論文公聴会",
   body:'5/28、博士論文の公聴会が行われました。質疑応答も含め、非常に素晴らしい発表でした。僕が助教で着任したタイミングで修士で入ってきたWang君の集大成の姿に胸が熱くなりました！！Wang君、お疲れ様！！'},
  {date:"2026.05.28",category:"フィールド",slug:"keihoku-practice",title:"京北で地球環境学舎の野外実習をしました！",
   body:'5/27、京北の森林と水田で土壌断面調査実習を行いました！！水田では、テトラベース試薬が見事に反応しました。一筆の圃場でもレキが出現する深さや還元の程度が異なることを実感しました！！'},
  {date:"2026.05.22",category:"フィールド",slug:"tea-0521",title:"奈良・滋賀の茶園で土壌水を採取しました！",
   body:'5/21、雨が降ったので土壌水採取。茶園周辺は細い道路が多いですが、安全運転で！！'},
  {date:"2026.05.19",category:"お知らせ",slug:"softball-2026",title:"研究室対抗ソフトボールで初戦突破！！",
   body:'5/18、元農芸化学専攻の研究室によるソフトボール大会です。強豪ひしめくトーナメントで僕が学生の頃から一度も勝ったことがありませんでしたが、なんと、今年は強豪相手に初戦突破！！元気で運動好きな学生が集まり、大盛り上がりでした！！'},
  {date:"2026.05.15",category:"フィールド",slug:"tea-nara-0513",title:"滋賀の無施肥茶園と奈良の無施肥・慣行茶園で一番茶の収量調査をしました！",
   body:'5/13–14、再び収穫調査。奈良の茶園では、機械による茶摘みも手伝わせてもらいました！'},
  {date:"2026.05.12",category:"学会",slug:"egu-vienna",title:"EGU（ウィーン）で徳永さんが発表",
   body:'5/3–8、ウィーン。徳永さんが土壌有機物の安定化について発表しました。'},
  {date:"2026.05.11",category:"フィールド",slug:"tea-0508",title:"滋賀の有機茶園で一番茶の収量調査をしました！",
   body:'5/8、茶の新芽の品質と収量を調査しました！柔らかく、上品な緑色をした、とても美味しそうな茶葉です！！'},
  {date:"2026.04.30",category:"フィールド",slug:"kameoka-ogura-sampling",title:"亀岡・小倉の水田で土壌サンプリングをしました！",
   body:'4/28、長い間無施肥無農薬で管理されている水田圃場の視察と土壌サンプリングを行いました！隣接する慣行栽培の水田土壌と物質収支の比較を行っていきます。作物研の桂先生、水環境工学の濱先生、微生物生態学者の東樹先生との共同研究です。'},
  {date:"2026.04.27",category:"フィールド",slug:"tea-0423",title:"茶園で2回目の調査をしました！",
   body:'4/23–24、滋賀・奈良の茶園。雨が降ったので土壌水のサンプリングと、初回に設置した機器の確認、やり残した設置の続きをしました。走りながら調査の仕方を覚えていきます！'},
  {date:"2026.04.17",category:"お知らせ",slug:"tuat-meeting",title:"東京農工大で打合せ",
   body:'4/16、農工大の杉原先生との共同研究です。安定同位体で標識されたイネのサンプルを受け取り、圃場に埋設するパイプの設計に関する意見交換を行いました。4回生の宮崎くんのテーマです！'},
  {date:"2026.04.14",category:"フィールド",slug:"tea-garden-start",title:"滋賀・京都・奈良の茶園で土壌調査を始めました",
   body:'4/9–13、肥料に頼らない茶園づくりを土の側から調べる調査が始まりました。亀村君のテーマで、無施肥無農薬栽培調査研究会の多田氏との共同研究です。滋賀・奈良・京都の茶園を回り、宿泊は間の三重という、4府県にまたがる調査です。初回は5日間かけて土壌断面調査と調査機器の設置。茶園での研究は初めてなので、今からどんな結果が出るかワクワクします！'},
  {date:"2026.04.01",category:"研究費",slug:"kakenhi-ce",title:"科研費 基盤研究(B) が採択（代表）",
   body:'「カントリーエレベーターを活用した地域分散型水田肥沃度評価システムの開発」が始まりました。生産者の圃場でコメの品質を向上させる肥培管理について調べていきます。'},
  {date:"2026.04.01",category:"研究費",slug:"jistec-india",title:"国際科学技術財団 平成記念研究助成に採択",
   body:'インド農村部で、土と暮らしが代々どう続いてきたのかを、社会構造とあわせて調べます。新しいフィールドに出るのが楽しみです。どんな土に出会えるか、わくわくしています。'},
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
