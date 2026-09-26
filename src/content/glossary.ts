type Term = {
  /** [ja, en, zh] 各言語の [用語, 定義] */
  ja: [string, string];
  en: [string, string];
  zh: [string, string];
  /** 関連記事のスラッグ（あれば詳しく読める内部リンク） */
  link?: string;
};

export type GlossaryGroup = {
  ja: string;
  en: string;
  zh: string;
  terms: Term[];
};

export const glossaryGroups: GlossaryGroup[] = [
  {
    ja: "細胞の種類",
    en: "Types of cells",
    zh: "细胞的种类",
    terms: [
      {
        ja: ["幹細胞", "自分と同じ細胞を作る力（自己複製）と、別の種類の細胞になる力（分化）を持つ細胞の総称。由来や分化できる範囲で性質が異なります。"],
        en: ["Stem cell", "A cell able to make copies of itself (self-renewal) and become other cell types (differentiation). Properties differ by source and differentiation range."],
        zh: ["干细胞", "具有自我复制和分化能力的细胞总称。因来源和分化范围不同，性质差异很大。"],
        link: "what-is-stem-cell",
      },
      {
        ja: ["多能性幹細胞", "体のさまざまな種類の細胞に分化できる幹細胞。ES細胞とiPS細胞が代表例です。"],
        en: ["Pluripotent stem cell", "A stem cell that can differentiate into many cell types of the body. ES and iPS cells are examples."],
        zh: ["多能性干细胞", "能分化为身体多种细胞的干细胞，如ES细胞和iPS细胞。"],
      },
      {
        ja: ["ES細胞", "胚（受精卵が育った初期段階）から作られる多能性幹細胞。倫理面の配慮が求められます。"],
        en: ["ES cell", "Pluripotent stem cells derived from early-stage embryos. Raises ethical considerations."],
        zh: ["ES细胞", "由胚胎早期阶段制备的多能性干细胞，存在伦理方面的考量。"],
      },
      {
        ja: ["iPS細胞", "皮膚や血液などの体の細胞から人工的に作られる多能性幹細胞。患者自身の細胞から作れる可能性が研究されています。"],
        en: ["iPS cell", "Pluripotent stem cells created artificially from body cells such as skin or blood. Research explores making them from a patient's own cells."],
        zh: ["iPS细胞", "由皮肤或血液等体细胞人工制备的多能性干细胞，正在研究使用患者自身细胞制备的可能性。"],
        link: "ips-cells-explained",
      },
      {
        ja: ["体性幹細胞", "成体の組織（骨髄・脂肪・血液など）に存在する幹細胞。分化できる範囲は限られます。"],
        en: ["Somatic (adult) stem cell", "Stem cells found in adult tissues such as bone marrow, fat, or blood. Their differentiation range is limited."],
        zh: ["体性干细胞", "存在于骨髓、脂肪、血液等成体组织中的干细胞，分化范围有限。"],
      },
      {
        ja: ["間葉系幹細胞（MSC）", "骨髄・脂肪・臍帯などに由来する体性幹細胞。再生医療の研究や自由診療で多く用いられています。"],
        en: ["Mesenchymal stem cell (MSC)", "Somatic stem cells derived from bone marrow, fat, or umbilical cord. Widely used in research and private-practice offerings."],
        zh: ["间充质干细胞（MSC）", "来源于骨髓、脂肪、脐带等的体性干细胞，广泛用于研究和自费诊疗。"],
        link: "mesenchymal-basics",
      },
      {
        ja: ["造血幹細胞", "骨髄にあり、赤血球・白血球・血小板など血液の細胞を作り続ける幹細胞。移植治療の実績があります。"],
        en: ["Hematopoietic stem cell", "Bone-marrow stem cells that continually produce blood cells — red cells, white cells, platelets. Used in established transplants."],
        zh: ["造血干细胞", "位于骨髓中，持续生成红细胞、白细胞、血小板等血细胞，移植治疗已有实绩。"],
        link: "hematopoietic-transplant",
      },
      {
        ja: ["がん幹細胞", "腫瘍の中で自己複製を続け、再発や転移に関係すると考えられている細胞。研究対象の概念です。"],
        en: ["Cancer stem cell", "Cells within tumors thought to self-renew and contribute to recurrence or metastasis. A research concept."],
        zh: ["肿瘤干细胞", "肿瘤中持续自我复制、被认为与复发和转移相关的细胞，是研究中的概念。"],
      },
    ],
  },
  {
    ja: "細胞の働きと培養",
    en: "Cell behavior & culture",
    zh: "细胞的作用与培养",
    terms: [
      {
        ja: ["自己複製", "分裂して、自分と同じ性質の幹細胞を作る能力。分化だけでは幹細胞とは呼べません。"],
        en: ["Self-renewal", "The ability to divide and produce more stem cells of the same kind. Differentiation alone does not make a stem cell."],
        zh: ["自我复制", "分裂产生与自己相同性质干细胞的能力。仅具备分化能力不足以称为干细胞。"],
      },
      {
        ja: ["分化", "幹細胞が筋肉・神経・血液など、特定の役割を持つ細胞に変わること。"],
        en: ["Differentiation", "The process by which a stem cell becomes a cell with a specific role, such as muscle, nerve, or blood."],
        zh: ["分化", "干细胞转变为肌肉、神经、血液等具有特定功能细胞的过程。"],
        link: "differentiation-basics",
      },
      {
        ja: ["初期化（リプログラミング）", "分化した体の細胞を、iPS細胞のような未熟な状態に戻すこと。"],
        en: ["Reprogramming", "Resetting a differentiated body cell back to an immature state such as an iPS cell."],
        zh: ["重编程", "将已分化的体细胞逆转为iPS细胞等未成熟状态。"],
      },
      {
        ja: ["培養", "体外で細胞を増やすこと。温度・栄養・無菌管理など品質管理が問われます。"],
        en: ["Culture", "Growing cells outside the body. Requires quality control of temperature, nutrients, and sterility."],
        zh: ["培养", "在体外扩增细胞，需要温度、营养、无菌等质量管理。"],
      },
      {
        ja: ["ニッチ", "幹細胞が存在し、働きを保つための周囲の微小環境。組織内の幹細胞の「住みか」に相当します。"],
        en: ["Niche", "The local microenvironment that supports and maintains stem cells within a tissue."],
        zh: ["微环境（niche）", "组织内维持干细胞存在和功能的周围微小环境。"],
      },
      {
        ja: ["パラクリン作用", "細胞が分泌する物質（サイトカインなど）を介して、周囲の細胞に働きかける作用。投与細胞の働き方の有力な仮説です。"],
        en: ["Paracrine effect", "Action on neighboring cells via secreted substances such as cytokines. A leading hypothesis for how administered cells work."],
        zh: ["旁分泌作用", "细胞通过分泌细胞因子等物质作用于周围细胞，是投与细胞发挥作用的代表性假说。"],
        link: "paracrine-effect",
      },
      {
        ja: ["エクソソーム", "細胞が分泌する小さな小胞。細胞間の情報伝達に関わるとされ、治療への応用が研究されています。"],
        en: ["Exosome", "Small vesicles secreted by cells, involved in cell-to-cell signaling. Being studied for therapeutic use."],
        zh: ["外泌体", "细胞分泌的微小囊泡，参与细胞间信息传递，正在研究其治疗应用。"],
        link: "exosomes-notes",
      },
      {
        ja: ["ホーミング", "投与された細胞が損傷・炎症部位に集まるとされる現象。動物実験での報告が中心です。"],
        en: ["Homing", "The proposed tendency of administered cells to gather at injured or inflamed sites. Reported mainly in animal studies."],
        zh: ["归巢", "投与的细胞聚集于损伤或炎症部位的现象，主要来自动物实验的报告。"],
        link: "stem-cell-homing",
      },
      {
        ja: ["生着", "移植した細胞や組織が体内に定着して機能し続けること。投与された幹細胞はしばしば生着せず、短期間で消失することが報告されています。"],
        en: ["Engraftment", "Transplanted cells or tissue settling in and functioning long-term. Administered stem cells often fail to engraft and disappear relatively quickly."],
        zh: ["植入（生着）", "移植的细胞在体内定着并持续发挥功能。投与的干细胞常难以植入、短期内消失。"],
      },
    ],
  },
  {
    ja: "投与・移植・安全性",
    en: "Administration & safety",
    zh: "给药、移植与安全性",
    terms: [
      {
        ja: ["自家移植", "自分の細胞を採取し、加工して自分に戻す治療。拒絶は起きにくい一方、採取や培養の負担・リスクは残ります。"],
        en: ["Autologous transplant", "Using a person's own cells, processed and returned. Low rejection risk, but collection and culture carry their own burdens and risks."],
        zh: ["自体移植", "采集自身细胞加工后回输，排斥较少但采集和培养仍有负担与风险。"],
        link: "self-vs-donor-cells",
      },
      {
        ja: ["同種（他家）移植", "他人由来の細胞を使う治療。拒絶対策や感染症の検査が特に重要になります。"],
        en: ["Allogeneic transplant", "Using donor-derived cells. Rejection management and infection screening are especially important."],
        zh: ["异体移植", "使用他人来源的细胞，排斥对策和感染检查尤为重要。"],
        link: "self-vs-donor-cells",
      },
      {
        ja: ["拒絶反応", "免疫が外来の細胞を「異物」とみなして排除する反応。他家移植で特に問題になります。"],
        en: ["Rejection", "The immune response that eliminates foreign cells. A key issue in donor-derived transplantation."],
        zh: ["排斥反应", "免疫将外来细胞视为异物并排除的反应，是异体移植的主要问题。"],
      },
      {
        ja: ["GVHD（移植片対宿主病）", "移植した免疫細胞が受け手の体を攻撃する合併症。造血幹細胞移植で知られています。"],
        en: ["GVHD (graft-versus-host disease)", "A complication where transplanted immune cells attack the recipient's body. Known in hematopoietic transplants."],
        zh: ["GVHD（移植物抗宿主病）", "移植的免疫细胞攻击受者身体的合并症，常见于造血干细胞移植。"],
        link: "hematopoietic-transplant",
      },
      {
        ja: ["静脈投与", "点滴などで血管内に細胞を入れる方法。負担は比較的小さい一方、細胞は肺に捕捉されやすいです。"],
        en: ["Intravenous (IV) administration", "Delivering cells into a vein, often by drip. Relatively low burden, but cells tend to be trapped in the lungs."],
        zh: ["静脉给药", "通过输液等将细胞送入血管，负担较小但细胞易被肺截留。"],
        link: "stem-cell-administration-routes",
      },
      {
        ja: ["肺ファーストパス", "静脈投与された細胞が最初に肺の毛細血管に捕捉される現象。体内分布を考えるうえでの基本的な事実です。"],
        en: ["Pulmonary first-pass", "The tendency of intravenously administered cells to be trapped first in the lung capillaries — a basic fact of biodistribution."],
        zh: ["肺首过效应", "静脉投与的细胞首先被肺毛细血管截留的现象，是理解体内分布的基本事实。"],
        link: "stem-cell-biodistribution",
      },
      {
        ja: ["腫瘍化（致腫瘍性）", "投与した細胞が腫瘍を形成してしまうリスク。多能性幹細胞の応用で特に検証される安全性課題です。"],
        en: ["Tumorigenicity", "The risk that administered cells form tumors. A key safety issue especially for pluripotent-cell applications."],
        zh: ["致瘤性", "投与的细胞形成肿瘤的风险，是多能性干细胞应用中重点验证的安全课题。"],
        link: "tumorigenicity-safety",
      },
      {
        ja: ["腫瘍崩壊症候群", "大量の腫瘍細胞が壊れた際に代謝物が体内にあふれる重い合併症。がん治療で知られる概念です。"],
        en: ["Tumor lysis syndrome", "A serious complication in which rapid destruction of tumor cells floods the body with metabolites. Known in cancer care."],
        zh: ["肿瘤溶解综合征", "大量肿瘤细胞坏死时代谢物涌入体内的严重合并症，是癌症治疗中的概念。"],
      },
    ],
  },
  {
    ja: "治療と制度",
    en: "Treatment & regulation",
    zh: "治疗与制度",
    terms: [
      {
        ja: ["承認", "有効性と安全性が審査され、公的に認められること。「届出」や「研究段階」とは意味が異なります。"],
        en: ["Approval", "Formal authorization after review of efficacy and safety. Different from a notification or research status."],
        zh: ["批准", "经有效性和安全性审查后获得官方认可，与“备案”或“研究阶段”含义不同。"],
      },
      {
        ja: ["再生医療等製品", "医薬品医療機器等法（薬機法）のもとで承認される、細胞などを用いた製品の区分。"],
        en: ["Regenerative medicine product", "A category of products using cells, approved under Japan's Pharmaceuticals and Medical Devices Act."],
        zh: ["再生医疗等产品", "根据日本《医药品医疗器械等法》批准的细胞类产品的类别。"],
        link: "approved-products-japan",
      },
      {
        ja: ["再生医療等安全性確保法", "自由診療などで細胞治療を提供する際の計画届出・審査の手続きを定める法律。届出は効果の保証ではありません。"],
        en: ["Act on the Safety of Regenerative Medicine", "Japanese law governing notification and review procedures for cell therapies outside insurance. Filing does not mean proven efficacy."],
        zh: ["再生医疗等安全性确保法", "规定自费诊疗等细胞治疗提供计划申报与审查程序的法律，申报不等于疗效保证。"],
      },
      {
        ja: ["提供計画", "医療機関が細胞治療を行う際に届け出る計画。審査委員会の確認を経ますが、効果の承認とは別の手続きです。"],
        en: ["Provision plan", "The filing a clinic must submit to offer cell therapies, reviewed by a certified committee. Separate from efficacy approval."],
        zh: ["提供计划", "医疗机构实施细胞治疗前需申报的计划，须经委员会审查，但不同于疗效批准。"],
      },
      {
        ja: ["治験", "医薬品・医療機器等の承認を目指して行われる臨床試験。事前の説明と同意が必要です。"],
        en: ["Clinical trial (chiken)", "A trial conducted to seek regulatory approval, requiring prior explanation and consent."],
        zh: ["临床试验（治验）", "为获得药品医疗器械批准而进行的试验，需要事先说明并征得同意。"],
      },
      {
        ja: ["臨床研究", "人を対象とする医学研究の総称。治験と観察研究・介入研究などを含み、目的やルールが異なります。"],
        en: ["Clinical research", "Medical research involving human participants, including trials and observational or interventional studies."],
        zh: ["临床研究", "以人为对象的医学研究总称，包括试验及观察性、干预性研究，目的和规则各异。"],
      },
      {
        ja: ["適応", "その治療が対象とする病気や状態。承認された適応と研究段階の適応は区別します。"],
        en: ["Indication", "The disease or condition a treatment targets. Approved indications differ from those still under study."],
        zh: ["适应证", "治疗所针对的疾病或状态，已批准的适应证与研究阶段的适应证需区分。"],
      },
      {
        ja: ["禁忌", "原則としてその治療を行えない状態。活動性の感染症などが該当し得ます。"],
        en: ["Contraindication", "A condition in which the treatment should generally not be given, such as active infection."],
        zh: ["禁忌证", "原则上不应进行治疗的状态，如活动性感染等。"],
        link: "stem-cell-contraindications",
      },
      {
        ja: ["自由診療", "公的医療保険の適用外の診療。費用は全額自己負担で、価格・内容は施設ごとに異なります。"],
        en: ["Private (self-paid) care", "Care outside public insurance. The full cost is borne by the patient and varies by clinic."],
        zh: ["自费诊疗", "公共医疗保险之外的诊疗，费用全额自付，各机构价格和内容不同。"],
        link: "cost-and-insurance",
      },
      {
        ja: ["保険診療", "公的医療保険が適用される診療。適応と費用が制度で定まっています。"],
        en: ["Insured care", "Care covered by public health insurance, with indications and costs set by the system."],
        zh: ["医保诊疗", "公共医疗保险适用的诊疗，适应证和费用由制度规定。"],
      },
      {
        ja: ["セカンドオピニオン", "主治医とは別の医師に求める第二の意見。大きな判断の前に検討する選択肢です。"],
        en: ["Second opinion", "An additional opinion from another physician — an option before major decisions."],
        zh: ["第二诊疗意见", "主治医生之外向其他医生征求的意见，重大决定前的选择。"],
      },
      {
        ja: ["インフォームド・コンセント", "治療の内容・根拠・リスク・代替案を説明され、理解したうえで同意すること。"],
        en: ["Informed consent", "Agreement made after receiving and understanding explanations of the treatment, evidence, risks, and alternatives."],
        zh: ["知情同意", "在理解治疗内容、依据、风险和替代方案后作出的同意。"],
        link: "questions-before-treatment",
      },
      {
        ja: ["認定再生医療等委員会", "再生医療等安全性確保法に基づき、提供計画を審査する委員会。"],
        en: ["Certified committee for regenerative medicine", "The committee that reviews provision plans under the regenerative-medicine safety act."],
        zh: ["认定再生医疗等委员会", "依据《再生医疗等安全性确保法》审查提供计划的委员会。"],
      },
    ],
  },
  {
    ja: "エビデンスの読み方",
    en: "Reading the evidence",
    zh: "证据的解读",
    terms: [
      {
        ja: ["エビデンス", "根拠となる研究の蓄積。個別の報告だけでなく、研究の質と量の両方を見ます。"],
        en: ["Evidence", "The body of supporting research — judged by both quality and quantity, not single reports."],
        zh: ["证据", "作为依据的研究积累，需同时看质量与数量而非单一报告。"],
        link: "stem-cell-efficacy-evidence",
      },
      {
        ja: ["症例報告", "個別の患者の治療経過を記録した報告。参考にはなりますが、一般化はできません。"],
        en: ["Case report", "A record of an individual patient's course. Informative but cannot be generalized."],
        zh: ["病例报告", "个别患者治疗经过的记录，有参考价值但不能普遍化。"],
      },
      {
        ja: ["観察研究", "介入せずに経過を追跡する研究。関連は見えても、原因の断定は難しい設計です。"],
        en: ["Observational study", "Research that follows outcomes without intervention. Shows associations but limits causal conclusions."],
        zh: ["观察性研究", "不干预、追踪经过的研究，可见关联但难以断定因果。"],
      },
      {
        ja: ["ランダム化比較試験（RCT）", "参加者を無作為に群に分けて治療効果を比較する試験。バイアスを減らせる設計です。"],
        en: ["Randomized controlled trial (RCT)", "A trial assigning participants randomly to groups to compare treatment effects while reducing bias."],
        zh: ["随机对照试验（RCT）", "将参与者随机分组比较疗效的试验，可减少偏倚。"],
      },
      {
        ja: ["プラセボ（偽薬）", "有効成分を含まない対照。本物の治療との差を測るために使います。"],
        en: ["Placebo", "An inactive comparator used to measure the true effect of a treatment."],
        zh: ["安慰剂", "不含有效成分的对照，用于衡量真实疗效。"],
      },
      {
        ja: ["系統的レビュー・メタ解析", "複数の研究を定めた方法で集めて統合する評価。最も信頼性の高い根拠の一つです。"],
        en: ["Systematic review & meta-analysis", "A structured synthesis of multiple studies — among the strongest forms of evidence."],
        zh: ["系统综述与荟萃分析", "按既定方法汇总多项研究的评价，是最可靠的证据形式之一。"],
      },
      {
        ja: ["査読", "専門家が論文を審査する仕組み。掲載されても誤りや追試はあり得ます。"],
        en: ["Peer review", "Expert review of a paper before publication — publication alone does not guarantee correctness."],
        zh: ["同行评审", "由专家审查论文的机制，发表并不意味着完全无误。"],
        link: "peer-review",
      },
      {
        ja: ["利益相反（COI）", "研究や説明に影響し得る経済的・個人的な利害関係。開示されているか確認します。"],
        en: ["Conflict of interest (COI)", "Financial or personal interests that could influence research or explanations. Check whether disclosed."],
        zh: ["利益冲突（COI）", "可能影响研究或说明的经济、个人利害关系，需确认是否披露。"],
      },
      {
        ja: ["記者発表・プレスリリース", "機関が出す研究発表。査読済み論文かどうか、段階や対象を確認します。"],
        en: ["Press release", "A research announcement from an institution. Check whether it is a peer-reviewed paper and at what stage."],
        zh: ["新闻稿", "机构发布的研究公告，需确认是否为同行评审论文及其阶段。"],
        link: "press-release-reading",
      },
    ],
  },
  {
    ja: "体の仕組み",
    en: "The body",
    zh: "身体的机制",
    terms: [
      {
        ja: ["免疫", "体を守る防御システム。外来の細胞を排除する一方、過剰な反応が問題になることもあります。"],
        en: ["Immunity", "The body's defense system. It removes foreign cells, but excessive responses can themselves cause problems."],
        zh: ["免疫", "保护身体的防御系统，既排除外来细胞，过激反应也可能成为问题。"],
        link: "immune-basics",
      },
      {
        ja: ["炎症", "損傷や感染に対する防御反応。赤み・腫れ・熱・痛みを伴うことがあります。"],
        en: ["Inflammation", "A defensive response to injury or infection, often with redness, swelling, heat, and pain."],
        zh: ["炎症", "对损伤或感染的防御反应，可伴有红、肿、热、痛。"],
      },
      {
        ja: ["サイトカイン", "細胞が分泌する情報伝達物質。炎症や免疫を調節し、パラクリン作用の主体です。"],
        en: ["Cytokine", "Signaling molecules secreted by cells that regulate inflammation and immunity — the core of paracrine action."],
        zh: ["细胞因子", "细胞分泌的信号分子，调节炎症与免疫，是旁分泌作用的核心。"],
      },
      {
        ja: ["抗原・抗体", "抗原は異物を標識する分子、抗体はそれに結合して免疫を誘導するたんぱく質。"],
        en: ["Antigen & antibody", "An antigen marks foreign material; an antibody binds it and guides the immune response."],
        zh: ["抗原与抗体", "抗原是标记异物的分子，抗体是与其结合并引导免疫反应的蛋白质。"],
      },
      {
        ja: ["血栓・塞栓", "血栓は血管内にできた血のかたまり、塞栓はそれが流れて血管を詰まらせること。"],
        en: ["Thrombus & embolism", "A thrombus is a blood clot in a vessel; an embolism is clot material traveling and blocking a vessel."],
        zh: ["血栓与栓塞", "血栓是血管内形成的血块，栓塞指其随血流堵塞血管。"],
      },
    ],
  },
];
