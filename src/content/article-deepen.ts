// サブカテゴリ別の「掘り下げ」セクション。
// 各記事の末尾に、テーマをもう一段掘り下げる導入文章を付け足すためのデータ。
// 記事固有の本文（rawArticles）とは別に、読み応えと導線を補完する目的で追加する。

import { subcategoryOf } from "./subcategories";
import type { SiteLocale } from "./locales";

type DeepenEntry = {
  ja: [string, string[]];
  en: [string, string[]];
  zh: [string, string[]];
};

const deepen: Record<string, DeepenEntry> = {
  "stem-basics/stem-cell-fundamentals": {
    ja: ["もう一歩深めるには", [
      "幹細胞の基礎が分かると、次に気になるのは「その細胞が治療として使われているのか、まだ研究段階なのか」です。同じ「幹細胞」という言葉でも、保険承認されたものと研究対象のものでは意味が違います。",
      "記事を読み進める際は、カテゴリの「効果とエビデンス」「安全性とリスク」にも目を通すと、情報の読み方に差が出ます。用語集で分からない言葉を引きながら進めるのもおすすめです。",
    ]],
    en: ["Going deeper", [
      "Once the basics click, the next question is whether a given stem cell is already an approved treatment or still a research subject — the same word can mean very different things.",
      "Reading the Evidence and Safety categories next, and checking unfamiliar terms in the glossary, will sharpen how you read future material.",
    ]],
    zh: ["深入了解", [
      "掌握基础后，下一个问题是该细胞是已获批的治疗还是研究对象——同一个词在这两种情况下含义截然不同。",
      "建议接着阅读「疗效与证据」「安全性与风险」类别，并配合术语集查阅不熟悉的词。",
    ]],
  },
  "stem-basics/body-mechanisms": {
    ja: ["再生医療とのつながり", [
      "細胞や遺伝子の仕組みは、再生医療が「細胞を増やす・細胞を戻す」という考え方の土台です。細胞がどう増え、どう分化するかが分かると、治療の説明が具体的に理解できます。",
      "特に分化と遺伝子の関係は、iPS細胞など人工的に細胞を作る技術の前提です。関連記事の「iPS細胞とは」「分化とは」を合わせて読むと理解が深まります。",
    ]],
    en: ["Connection to regenerative medicine", [
      "Cell and gene mechanics are the foundation for how regenerative medicine grows or reintroduces cells. Understanding division and differentiation makes treatment explanations concrete.",
      "The relationship between differentiation and genes is the premise for technologies like iPS cells — the related articles on iPS cells and differentiation are good next reads.",
    ]],
    zh: ["与再生医学的联系", [
      "细胞与基因的机制是再生医学“增殖细胞、回输细胞”这一思路的基础。理解分裂与分化，就能具体理解治疗说明。",
      "分化与基因的关系是iPS细胞等人工制细胞技术的前提，建议配合相关文章一起阅读。",
    ]],
  },
  "stem-basics/health-and-life": {
    ja: ["社会背景として読む", [
      "高齢化は再生医療への期待が高まる背景の一つです。病気の治療だけでなく、暮らしの質を支える医療として位置づけられている側面もあります。",
      "ただし社会的な期待と実際の有効性は別問題です。制度の記事やエビデンスの記事とセットで読むと、バランスの取れた理解になります。",
    ]],
    en: ["Reading the social context", [
      "Aging is part of why expectations for regenerative medicine are rising — it is framed not only as treatment but as support for quality of life.",
      "Social expectations and actual efficacy are separate questions; read alongside the system and evidence articles for balance.",
    ]],
    zh: ["理解社会背景", [
      "老龄化是再生医学备受期待的背景之一，它不仅是治疗手段，也被寄望于支撑生活质量。",
      "但社会期待与实际疗效是两回事，建议与制度和证据类文章一起阅读。",
    ]],
  },
  "health-basics/body-systems": {
    ja: ["臓器ごとの違いに注目する", [
      "体の部位によって再生できる能力が違います。皮膚や骨は回復しやすい一方、神経や心臓は難しいとされています。この差を知ると、「同じ再生医療でも臓器ごとに期待できることが違う」ことが分かります。",
      "各器官の仕組みを押さえると、治療の説明資料で出てくる「この部位の細胞を増やす」という言葉が具体的に想像できるようになります。",
    ]],
    en: ["Differences between organs", [
      "Regenerative capacity differs by tissue — skin and bone recover relatively well, while nerve and heart are difficult. Knowing this gap clarifies why expectations differ by organ.",
      "A grounding in each organ's mechanics makes phrases like “growing cells for this tissue” in treatment materials easier to picture.",
    ]],
    zh: ["关注器官间的差异", [
      "不同部位的再生能力不同：皮肤和骨骼较易恢复，神经和心脏则较难。理解这一差异，就能明白同一“再生医疗”对不同器官的预期也不同。",
      "掌握各器官的机制后，治疗资料中“增殖该部位细胞”等表述就更容易具体想象。",
    ]],
  },
  "health-basics/common-illness": {
    ja: ["病気と細胞の関係", [
      "多くの病気は細胞の機能異常から始まります。がんは細胞の増殖の暴走、糖尿病はβ細胞の機能低下のように、病気を細胞のレベルで捉えると再生医療のアプローチが理解しやすくなります。",
      "ただし病気が分かっても、すぐに細胞治療が使えるとは限りません。現在の治療標準と研究段階の違いは必ず確認しましょう。",
    ]],
    en: ["Disease at the cell level", [
      "Many diseases begin with cellular malfunction — cancer as runaway proliferation, diabetes as beta-cell decline. Seeing disease at this level makes regenerative approaches easier to grasp.",
      "But understanding a disease does not mean a cell therapy exists — always check the difference between standard care and research-stage work.",
    ]],
    zh: ["疾病与细胞的关系", [
      "许多疾病始于细胞功能异常——癌症是细胞增殖失控，糖尿病是β细胞功能下降。从细胞层面理解疾病，更容易理解再生医学的思路。",
      "但理解疾病并不等于已有细胞治疗可用，请务必区分现有标准治疗与研究阶段。",
    ]],
  },
  "health-basics/daily-health": {
    ja: ["日常の健康と医療の間で", [
      "食事・運動・睡眠などの習慣は治療の効果にも関わります。治療中の暮らしは「治療だけ」の問題ではなく、体の回復力を支える土台です。",
      "健診の結果や日々の体調の変化を把握しておくと、医療機関での説明の理解も深まり、相談もしやすくなります。",
    ]],
    en: ["Daily health and care", [
      "Habits like diet, exercise, and sleep interact with treatment outcomes — daily life supports the body's capacity to recover.",
      "Keeping track of checkup results and day-to-day changes also makes medical explanations easier to follow and consultations smoother.",
    ]],
    zh: ["日常健康与医疗之间", [
      "饮食、运动、睡眠等习惯会影响治疗效果——日常生活是支撑身体恢复力的基础。",
      "掌握体检结果和日常身体变化，也能加深对医疗说明的理解，便于咨询。",
    ]],
  },
  "in-body/how-administered": {
    ja: ["経路による違いを整理する", [
      "同じ細胞でも、点滴・局所注射・動脈投与で届く場所や割合が変わります。説明資料に「どこに届くか」が書かれていない場合は、施設に具体的な経路を確認するとよいでしょう。",
      "経路は効果だけでなくリスクにも関係します。静脈投与と局所投与では起こりうる合併症も異なるため、経路ごとの注意点を確認してください。",
    ]],
    en: ["Sorting out the routes", [
      "The same cells reach different places in different proportions depending on whether they are given by IV, local injection, or arterial delivery. If materials don't state where cells go, ask the clinic.",
      "Routes affect both benefit and risk — IV and local delivery carry different possible complications.",
    ]],
    zh: ["整理给药途径的差异", [
      "同样的细胞，静脉点滴、局部注射、动脉给药到达的部位和比例都不同。资料中若未写明去向，可向机构确认具体途径。",
      "途径不仅关系疗效也关系风险——静脉与局部给药的并发症不同，请分别确认注意事项。",
    ]],
  },
  "in-body/after-infusion": {
    ja: ["「届く」と「働く」は別", [
      "体内分布の研究は「細胞がどこへ行くか」を示しますが、「届いた場所で治療としての働きがあるか」は別の問題です。分布の確認と効果の確認は分けて考えましょう。",
      "長期間残るかどうかも重要な問題です。定着期間が短い場合、繰り返し投与が想定される場合があり、費用と負担の見通しに関係します。",
    ]],
    en: ["Arriving is not acting", [
      "Biodistribution research shows where cells go; whether they act therapeutically there is a separate question. Keep tracking and efficacy apart.",
      "How long they persist matters too — short persistence may imply repeated dosing, which affects cost and burden.",
    ]],
    zh: ["“到达”与“起作用”是两回事", [
      "体内分布研究显示细胞去往何处，但到达部位是否发挥治疗作用需要另行确认，请分开判断。",
      "细胞能存续多久也很重要——若存续期短，可能需要反复给药，这将影响费用与负担的预期。",
    ]],
  },
  "in-body/where-they-reach": {
    ja: ["脳・肺・肝臓での注目ポイント", [
      "点滴された細胞がどの臓器に多く集まるかは、期待される働きにも関わります。血液脳関門（BBB）を越えるかどうかは、神経系への効果の説明で特に重要な論点です。",
      "「どこに届くか」の報告は研究で蓄積されていますが、多くは動物実験や小規模のデータです。臨床での確実な働きとは別に考える必要があります。",
    ]],
    en: ["Brain, lung, liver — where attention focuses", [
      "Which organs accumulate infused cells relates to expected action. Crossing the blood–brain barrier is a key point when neurological effects are claimed.",
      "Most distribution data come from animal or small studies — treat them separately from confirmed clinical action.",
    ]],
    zh: ["脑、肺、肝脏的关注点", [
      "输注细胞聚集在哪些器官，关系到预期作用；能否跨越血脑屏障是神经系统疗效说明中的关键论点。",
      "“去往何处”的数据多来自动物或小规模研究，应与临床确证的作用分开看待。",
    ]],
  },
  "anti-aging/scientific-evidence": {
    ja: ["「若返り」の段階を見極める", [
      "抗老化に関する研究は、動物実験・細胞実験・小規模な人での観察まで段階がさまざまです。「研究で効果があった」＝「自分にも効果が確かめられている」ではありません。",
      "美容分野では広告表現がエビデンスを超えて伝えられることがあります。「どの段階の結果か」を確認する習慣が役立ちます。",
    ]],
    en: ["Pinning down the stage of anti-aging claims", [
      "Anti-aging research ranges from animal and cell studies to small human observations — “worked in research” does not mean “proven for you.”",
      "Beauty-related messaging often outruns the evidence; get in the habit of asking which stage a result belongs to.",
    ]],
    zh: ["辨明“抗衰老”说法的阶段", [
      "抗衰老研究从动物实验、细胞实验到小规模人体观察阶段不一，“研究有效”不等于“对你已被证实有效”。",
      "美容领域的宣传常超出证据范围，养成确认“处于哪个阶段”的习惯很有帮助。",
    ]],
  },
  "anti-aging/aesthetic-offerings": {
    ja: ["提供される施術の見方", [
      "美容目的で提供される細胞関連の施術は、法律上の届出状況や効果の根拠がさまざまです。「自由診療＝効果保証」ではありません。",
      "契約前に「届出の有無」「効果の根拠」「リスクの説明」を書面で確認する姿勢が、トラブル回避に役立ちます。",
    ]],
    en: ["How to read aesthetic offerings", [
      "Cell-based aesthetic offerings vary in filing status and evidential basis — private care is not a guarantee of benefit.",
      "Before signing, confirm in writing whether a provision plan was filed, what evidence is cited, and how risks are explained.",
    ]],
    zh: ["如何看美容类服务", [
      "美容类细胞相关服务的法律申报状况和疗效依据各不相同——自费诊疗不等于疗效保证。",
      "签约前请以书面确认申报情况、疗效依据和风险说明，有助于避免纠纷。",
    ]],
  },
  "efficacy/efficacy-status": {
    ja: ["承認と研究の境目", [
      "「承認された製品」と「研究段階の提供」は効果の確かさが根本的に違います。届出があっても承認ではないため、提供計画の状況と効果の根拠は別に確認しましょう。",
      "効果の説明を受けたら「それはどの研究で示された結果か」「対象は同じ病気か」という2点だけでも確認する価値があります。",
    ]],
    en: ["The line between approval and research", [
      "Approved products and research-stage offerings differ fundamentally in how firmly efficacy is established. A filed plan is not approval — check status and evidence separately.",
      "When a benefit is described, two questions alone are worth asking: which study showed it, and was it for the same condition.",
    ]],
    zh: ["批准与研究的界限", [
      "“已获批产品”与“研究阶段的治疗”在疗效的确凿性上有本质差异——申报不等于批准，请分别确认计划状况和疗效依据。",
      "听到疗效说明时，至少确认两点：是哪项研究的结果、研究对象是否为同一疾病。",
    ]],
  },
  "efficacy/research-stages": {
    ja: ["段階ごとの意味", [
      "基礎研究・動物実験・第I相・第II相・第III相では、目的も確かさも違います。プレスリリースの「成功」がどの段階かを確認するだけでも、ニュースの読み方が変わります。",
      "特に動物実験の結果は人への効果を直接示すものではありません。人での検証が始まったばかりの段階であることも多いので、段階表記に注目しましょう。",
    ]],
    en: ["What each stage means", [
      "Preclinical work, animal studies, and phases I–III differ in purpose and certainty. Checking which stage a “success” announcement refers to changes how you read the news.",
      "Animal results in particular do not show human efficacy — many reports describe work just entering human testing.",
    ]],
    zh: ["各阶段的意义", [
      "基础研究、动物实验、I/II/III期的目的和确定性各不相同，确认“成功”报道处于哪个阶段，就能改变对新闻的解读。",
      "动物实验结果并不能直接证明对人体有效，许多报道还处于刚进入人体验证的阶段。",
    ]],
  },
  "efficacy/reading-research": {
    ja: ["一次情報に近づく", [
      "論文・登録情報・プレスリリースは、それぞれ違う性質の情報です。一番確かなのは論文ですが、登録情報や発表元の公式ページも確認の手がかりになります。",
      "「発表された」＝「確立した」ではありません。掲載誌・査読の有無・研究の段階を確認するだけで、情報の受け取り方が変わります。",
    ]],
    en: ["Getting closer to primary sources", [
      "Papers, registry entries, and press releases are different kinds of information — papers carry the most weight, but registries and official pages help too.",
      "“Published” is not “established.” Checking the journal, peer review, and study stage changes how you receive the information.",
    ]],
    zh: ["接近一手信息", [
      "论文、注册信息、新闻稿是不同性质的信息——论文最有分量，注册库和官方页面也可作参考。",
      "“发表了”不等于“成立了”，确认期刊、是否经同行评审、研究阶段，就能改变解读方式。",
    ]],
  },
  "safety/treatment-risks": {
    ja: ["リスクは複数の層で考える", [
      "細胞治療のリスクは、細胞そのもの・投与経路・培養・感染・免疫の複数の層に分かれます。一つが説明されていても、他の層が触れられていないことがあります。",
      "説明資料の「安全性」の項だけでなく、合併症・長期リスク・中止条件まで確認する姿勢が安心につながります。",
    ]],
    en: ["Risks have layers", [
      "Cell-therapy risks span the cells themselves, the delivery route, culture, infection, and immunity — one explained layer doesn't cover the others.",
      "Look beyond a “safety” section for complications, long-term risk, and stopping rules — that is what makes a choice feel grounded.",
    ]],
    zh: ["风险要分层看待", [
      "细胞治疗的风险分为细胞本身、给药途径、培养、感染、免疫等多个层面——说明其中一层不代表覆盖了其他层。",
      "除了资料的“安全性”条目，还要确认并发症、长期风险和停止条件，这才是安心的依据。",
    ]],
  },
  "safety/eligibility": {
    ja: ["受けられる条件と慎重な判断", [
      "「受けられるか」は年齢・持病・薬・妊娠などで変わります。検査を十分にせず「誰でも受けられる」と説明する提供には注意が必要です。",
      "主治医との情報共有が前提です。既存の治療と併用するか・止めるかは、主治医と相談しながら進めてください。",
    ]],
    en: ["Eligibility and careful judgment", [
      "Eligibility shifts with age, conditions, medications, and pregnancy. Be cautious of providers saying “anyone can receive it” without adequate testing.",
      "Sharing information with your primary doctor is a prerequisite — whether to combine or pause existing care should be decided together.",
    ]],
    zh: ["可接受的条件与慎重判断", [
      "能否接受治疗随年龄、既往病史、用药、妊娠等而异。对不经充分检查就说“谁都可以做”的服务要保持警惕。",
      "与主治医生共享信息是前提，是否与现有治疗并用或暂停请与医生商量。",
    ]],
  },
  "safety/trouble-and-relief": {
    ja: ["困ったときの導線を持つ", [
      "副作用や効果の疑問、契約トラブルの相談先は、医療機関・保健所・消費生活センター・PMDAなどに分かれます。困ったときにどこへ連絡するかを事前に知っておくと安心です。",
      "救済制度は「被害を補償する仕組み」であって「効果を保証する仕組み」ではありません。制度の違いを押さえておきましょう。",
    ]],
    en: ["Know where to turn", [
      "For side effects, efficacy doubts, or contract disputes, contacts differ — clinics, health offices, consumer centers, PMDA. Knowing the route in advance helps.",
      "Relief systems compensate harm; they do not guarantee benefit. Keep the distinction in mind.",
    ]],
    zh: ["遇到困扰时的求助路径", [
      "副作用、疗效疑问、合同纠纷的咨询窗口分别对应医疗机构、保健所、消费者生活中心、PMDA等，提前了解会更安心。",
      "救济制度是补偿伤害的机制，而非保证疗效的机制，请注意区分。",
    ]],
  },
  "cell-types/cell-kinds": {
    ja: ["種類ごとの研究段階", [
      "造血幹細胞移植は確立した治療ですが、間葉系幹細胞や神経幹細胞は疾患によって研究段階が異なります。「幹細胞」という一括りではなく、種類ごとの状況を確認しましょう。",
      "種類の違いは採取方法・培養期間・費用にも影響します。説明資料で細胞の種類名が書かれているかを確認するだけでも情報量が変わります。",
    ]],
    en: ["Research stage by cell type", [
      "Bone-marrow transplants are established, while MSCs and neural stem cells sit at different stages depending on the disease. Check each type rather than treating “stem cells” as one.",
      "Cell type also affects collection, culture time, and cost — a document naming the cell type already tells you more.",
    ]],
    zh: ["按细胞种类看研究阶段", [
      "造血干细胞移植是确立的治疗，而间充质干细胞、神经干细胞因病种处于不同研究阶段，请不要把“干细胞”一概而论。",
      "种类差异也影响采集方式、培养周期和费用——资料中写明细胞种类名称本身就意味着更多信息量。",
    ]],
  },
  "cell-types/collection-sources": {
    ja: ["採取元による違い", [
      "脂肪・骨髄・臍帯では採取の負担、細胞の性質、量が違います。「どこから採ったか」は提供される治療の性質を知る第一歩です。",
      "臍帯血や胎盤由来の細胞は公的・民間のバンクで管理されています。自分の細胞か他人の細胞かで必要な検査や説明も変わるため、由来は必ず確認しましょう。",
    ]],
    en: ["Differences by source", [
      "Fat, bone marrow, and cord differ in collection burden, cell properties, and yield — the source is the first thing to confirm.",
      "Cord-blood and placental cells are managed in public or private banks; donor vs own cells change the testing and explanations required.",
    ]],
    zh: ["采集来源的差异", [
      "脂肪、骨髓、脐带在采集负担、细胞性质、数量上各不相同——“采自哪里”是了解治疗性质的第一步。",
      "脐带血和胎盘来源细胞由公私立库管理，自体还是异体会改变所需检测与说明，请务必确认来源。",
    ]],
  },
  "cell-types/self-vs-donor": {
    ja: ["自家と他家の使い分け", [
      "自分の細胞（自家）は拒絶の懸念が少ない一方、採取に時間と負担がかかります。他人の細胞（他家）はすぐに使える場合がありますが、拒絶対策と感染症検査が重要になります。",
      "どちらが使われるかは病気や施設の体制で変わります。説明資料に「自家/他家」の表記があるか確認しましょう。",
    ]],
    en: ["Autologous versus donor cells", [
      "Your own cells reduce rejection concerns but take time and effort to collect. Donor cells may be ready sooner but require rejection countermeasures and infection screening.",
      "Which is used depends on the disease and the facility — check whether materials specify autologous or allogeneic.",
    ]],
    zh: ["自体与异体细胞的选择", [
      "自体细胞排斥顾虑少，但采集费时费力；异体细胞可能立即可用，但需要排斥对策和感染筛查。",
      "采用哪一种取决于病种和机构条件，请确认资料是否标注“自体/异体”。",
    ]],
  },
  "cell-types/culture-and-quality": {
    ja: ["培養の品質管理", [
      "細胞は培養で増やして使われることが多く、その品質管理が安全に直結します。無菌管理・細胞の状態の確認・記録の管理体制が施設に問われます。",
      "届出済みの施設でも、実際の管理体制は個別に確認する価値があります。培養期間や検査の頻度を尋ねると実態が見えやすくなります。",
    ]],
    en: ["Quality control in culture", [
      "Cells are often expanded in culture, and its quality control directly determines safety — sterility, cell condition checks, and record keeping all matter.",
      "Even at filed facilities, actual practice is worth confirming; asking about culture time and testing frequency reveals more.",
    ]],
    zh: ["培养的质量管理", [
      "细胞常经培养扩增后使用，质量管理直接关系到安全——无菌管理、细胞状态确认、记录管理都对机构提出要求。",
      "即使是已申报的机构，实际管理情况也值得确认，询问培养周期和检测频率能看得更清楚。",
    ]],
  },
  "compare-therapies/cell-free-therapies": {
    ja: ["細胞を入れるか、成分だけか", [
      "幹細胞治療・エクソソーム・PRPは、入れるものが「細胞そのもの」か「分泌成分」かで性質が変わります。混同しやすい3つを分けて整理しましょう。",
      "成分のみを投与する方法は細胞を入れない分だけ説明も別の注意点になります。届出や研究段階の確認は同様に重要です。",
    ]],
    en: ["Cells themselves, or just their products", [
      "Stem cells, exosomes, and PRP differ by what is delivered — the cells themselves or only their products. Treat them as distinct offerings.",
      "Cell-free approaches carry their own caveats; filing status and research stage still need checking.",
    ]],
    zh: ["是输入细胞还是成分", [
      "干细胞治疗、外泌体、PRP的区别在于输入的是细胞本身还是其分泌成分，请分别整理。",
      "仅输注成分的方法有各自的注意点，申报与研究阶段同样重要。",
    ]],
  },
  "compare-therapies/vs-conventional": {
    ja: ["標準治療との比較で考える", [
      "新しい治療の価値は「今の標準治療と比べてどうか」で測られます。標準治療が確立している病気ほど、研究段階の治療の位置づけを正しく理解する必要があります。",
      "「代替」ではなく「追加の選択肢」として検討されている場合がほとんどです。併用か代替かを説明資料で確認しましょう。",
    ]],
    en: ["Compare against standard care", [
      "A new treatment is judged against current standard care — the more established the standard, the more carefully a research-stage option must be positioned.",
      "Most are studied as additions, not replacements; confirm whether a plan is meant to complement or substitute standard care.",
    ]],
    zh: ["与标准治疗比较", [
      "新疗法的价值通过与现有标准治疗比较来衡量——标准治疗越成熟，越需要正确理解研究阶段疗法的定位。",
      "多数情况是作为“补充选项”而非“替代”，请在资料中确认是并用还是替代。",
    ]],
  },
  "cost-access/cost-and-coverage": {
    ja: ["費用の構造を読む", [
      "自由診療は全額自己負担です。内訳（採取・培養・投与・経過観察）を分けて確認すると、総額の見通しが立ちやすくなります。",
      "保険適用の範囲・高額療養費制度・医療費控除は別制度です。どれが使えるかは治療の種類によるため、契約前に書面で確認しましょう。",
    ]],
    en: ["Read the cost structure", [
      "Private care is fully self-paid. Breaking the total into collection, culture, administration, and follow-up makes projections clearer.",
      "Insurance coverage, high-cost caps, and tax deductions are separate systems — confirm in writing which apply.",
    ]],
    zh: ["看清费用结构", [
      "自费诊疗全额自付，请将费用分为采集、培养、给药、随访来确认，更容易掌握总额。",
      "医保覆盖、高额疗养费制度、医疗费扣除是不同制度，签约前请书面确认适用项。",
    ]],
  },
  "cost-access/before-consultation": {
    ja: ["相談前に整える情報", [
      "初診の準備（持参物・伝え方）を整えると、説明の質が変わります。聞きたいことをメモにして行くだけでも違います。",
      "説明を受けた内容は書面で確認し、納得できるまで保留する権利があります。焦って決めなくてよいことを忘れないでください。",
    ]],
    en: ["Prepare before you consult", [
      "Preparing documents and questions for a first visit changes the quality of the explanation you receive — even a written list helps.",
      "You may take time on anything you haven't fully understood; there's no need to decide under pressure.",
    ]],
    zh: ["就诊前的准备", [
      "准备好携带物和表达方式，会改变说明的质量——即使只是写下想问的问题也有帮助。",
      "对说明内容可以书面确认并在充分理解前保留意见，不必急于决定。",
    ]],
  },
  "cost-access/spotting-ads": {
    ja: ["広告表現の見分け方", [
      "症例写真・体験談・「劇的」な表現は、医療広告の規制対象です。広告に効果の断定がないかを確認するだけでも、情報の読み方が変わります。",
      "「今だけ」「限定」などの煽り文句は医療の判断を急がせます。冷静な比較には、広告ではない情報源を併用しましょう。",
    ]],
    en: ["Reading advertising critically", [
      "Testimonial photos, personal stories, and dramatic claims fall under medical-advertising rules — checking ads for absolute claims alone sharpens your reading.",
      "Urgency phrases push quick decisions; balance ads with independent sources.",
    ]],
    zh: ["辨别广告表述", [
      "病例照片、体验谈、“戏剧性”表述都属医疗广告规制范围——只要确认广告中有无疗效断定，就能改变解读方式。",
      "“仅限现在”“名额有限”等煽动性语句会催促医疗决策，请配合非广告来源冷静比较。",
    ]],
  },
  "cost-access/during-and-after": {
    ja: ["治療中・治療後の暮らし", [
      "治療後の経過観察は、効果の確認とリスクの早期発見の両方に関わります。通院・検査の予定を具体的に確認しておきましょう。",
      "生活面の負担（痛み・通院・仕事との両立）も事前に見通しておくと、治療との付き合い方が変わります。",
    ]],
    en: ["Life during and after treatment", [
      "Follow-up care supports both confirming benefit and catching risk early — confirm the schedule for visits and tests.",
      "Planning for practical burdens like pain, commuting, and work changes how you engage with treatment.",
    ]],
    zh: ["治疗中与治疗后的生活", [
      "治疗后随访既关系疗效确认，也关系风险早期发现，请具体确认复诊与检查安排。",
      "提前预想生活层面的负担（疼痛、复诊、工作兼顾），会改变与治疗的相处方式。",
    ]],
  },
  "cost-access/life-and-support": {
    ja: ["制度と支援の使い方", [
      "医療費・介護・仕事との両立には、公的な支援制度があります。知っているだけで使えるものもあるため、相談窓口を把握しておくと役立ちます。",
      "治療中の記録や家族との情報共有も、制度を使う際の手がかりになります。",
    ]],
    en: ["Using systems and support", [
      "Public support exists for costs, caregiving, and balancing work — knowing the right contact makes it usable.",
      "Keeping records and sharing information with family also helps when using these systems.",
    ]],
    zh: ["制度与支援的利用", [
      "医疗费、护理、工作兼顾都有公共支援制度，了解咨询窗口即可使用。",
      "治疗中的记录和与家属的信息共享，也会成为利用制度时的依据。",
    ]],
  },
  "mechanisms/cell-mechanisms": {
    ja: ["細胞の働きをもう一歩", [
      "幹細胞の働き方には「分化して置き換わる」以外に「分泌する物質で周囲に働きかける」という考え方があります。どちらが主な働きかは研究で議論が続いています。",
      "作用の仕組みが分かると、「どこに効くのか」「なぜ効くと考えられているのか」の説明が読みやすくなります。",
    ]],
    en: ["How cells actually work", [
      "Stem cells may act not only by differentiating into tissue but also by signaling neighboring cells — which mechanism dominates is still debated.",
      "Knowing the mechanism makes claims about where and why a treatment works easier to evaluate.",
    ]],
    zh: ["再进一步看细胞的作用", [
      "干细胞的作用方式除了“分化替代”，还有“通过分泌物质作用于周围”的假说——哪种为主仍在研究中。",
      "理解作用机制后，“作用于哪里”“为何被认为有效”的说明会更容易读懂。",
    ]],
  },
  "mechanisms/regeneration-research": {
    ja: ["研究の進み具合を見る", [
      "臓器ごとの再生研究は段階が違います。角膜・皮膚は進んでいますが、神経や心臓は難しい分野です。部位ごとの進捗を確認して期待を整理しましょう。",
      "「再生に成功」という報告が動物実験か臨床研究かを確認するだけで、ニュースの解釈が変わります。",
    ]],
    en: ["How far research has come", [
      "Regeneration research progresses differently by organ — cornea and skin are ahead; nerve and heart remain difficult. Align expectations by tissue.",
      "Checking whether a “successful regeneration” report is animal work or clinical research changes the interpretation.",
    ]],
    zh: ["看研究的进展程度", [
      "不同器官的再生研究进展不同——角膜和皮肤较靠前，神经和心脏仍困难，请按部位整理预期。",
      "确认“再生成功”的报道是动物实验还是临床研究，解读就会不同。",
    ]],
  },
  "mechanisms/science-and-society": {
    ja: ["科学と社会の関係", [
      "ノーベル賞・学会・倫理の議論は、科学が社会とどう関わるかの背景です。研究成果の発表と社会での利用には距離があり、その差を知ると情報の読み方が変わります。",
      "科学イベントや公開講座は一次情報に近い機会です。興味があれば参加して直接確かめるのも一つの方法です。",
    ]],
    en: ["Science and society", [
      "Nobel prizes, societies, and ethics debates are the background of how science meets society — publication and real-world use are not the same step.",
      "Public lectures and science events are near-primary sources; attending them is one way to check directly.",
    ]],
    zh: ["科学与社会的关系", [
      "诺贝尔奖、学会、伦理讨论是科学与社会关系的背景——成果发表与社会应用之间存在距离，理解这点会改变解读方式。",
      "科学活动和公开讲座接近一手信息，有兴趣可以直接参加核实。",
    ]],
  },
};

export function deepenSectionsFor(category: string, slug: string, locale: SiteLocale | "ja") {
  const group = subcategoryOf(category, slug);
  const entry = group ? deepen[`${category}/${group.key}`] : undefined;
  if (!entry) return [];
  const [title, paragraphs] = locale === "ja" ? entry.ja : locale === "en" ? entry.en : entry.zh;
  return [{ id: "deeper-look", title, paragraphs }];
}
