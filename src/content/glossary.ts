type Term = {
  /** [ja, en, zh] 各言語の [用語, 定義] */
  ja: [string, string];
  en: [string, string];
  zh: [string, string];
  /** 関連記事のスラッグ（あれば詳しく読める内部リンク） */
  link?: string;
  /** 定義の根拠となる外部出典（公的機関・学術機関など） */
  ref?: { title: string; url: string };
};

export type GlossaryGroup = {
  ja: string;
  en: string;
  zh: string;
  terms: Term[];
};

/** 記事ページから用語への逆リンクに使う安定ID（グループ順・用語順）。 */
export function glossaryTermId(groupIndex: number, termIndex: number) {
  return `gt-${groupIndex}-${termIndex}`;
}

type GlossLocale = "ja" | "en" | "zh";

/** 記事本文のテキストに登場する用語を抽出（最大 limit 件、用語集の並び順）。 */
export function termsInText(text: string, locale: GlossLocale, limit = 6): { id: string; term: string }[] {
  const found: { id: string; term: string }[] = [];
  const lower = text.toLowerCase();
  glossaryGroups.forEach((group, gi) => {
    group.terms.forEach((term, ti) => {
      const [t] = locale === "ja" ? term.ja : locale === "en" ? term.en : term.zh;
      if (!t) return;
      const hit = locale === "ja" || locale === "zh"
        ? text.includes(t)
        : new RegExp(`\\b${t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(lower);
      if (hit) found.push({ id: glossaryTermId(gi, ti), term: t });
    });
  });
  // 汎用語（短い和文語）のヒットを絞る：4文字以上 or link/ref 付きを優先
  const score = (t: string) => (t.length >= 4 ? 1 : 0);
  found.sort((a, b) => score(b.term) - score(a.term));
  return found.slice(0, limit);
}

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
        ref: { title: "CiRA（京都大学iPS細胞研究所）解説", url: "https://www.cira.kyoto-u.ac.jp/j/faq/faq_index.html" },
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
        ref: { title: "CiRA「iPS細胞とは」", url: "https://www.cira.kyoto-u.ac.jp/j/faq/faq_index.html" },
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
      {
        ja: ["脂肪由来幹細胞", "脂肪組織から採取される間葉系幹細胞。採取の負担が比較的小さいとされますが、量や質には個人差があります。"],
        en: ["Adipose-derived stem cell", "MSCs harvested from fat tissue. Collection burden is relatively low, though quantity and quality vary by person."],
        zh: ["脂肪来源干细胞", "从脂肪组织采集的间充质干细胞，采集负担相对较小，但数量和质量因人而异。"],
        link: "adipose-stem",
      },
      {
        ja: ["神経幹細胞", "脳や神経組織に存在し、神経系の細胞を生み出す幹細胞。再生医療での応用が研究されています。"],
        en: ["Neural stem cell", "Stem cells in the brain and nervous tissue that give rise to neural cells. Studied for regenerative applications."],
        zh: ["神经干细胞", "存在于脑和神经组织、能产生神经系统细胞的干细胞，正在研究其再生医疗应用。"],
        link: "neural-stem-cells",
      },
      {
        ja: ["前駆細胞", "幹細胞から分化が進み、特定の系列の細胞になる途中段階の細胞。自己複製の力は限られます。"],
        en: ["Progenitor cell", "An intermediate cell committed to a specific lineage. Its self-renewal capacity is limited."],
        zh: ["祖细胞（前驱细胞）", "由干细胞分化、迈向特定细胞系的中间阶段细胞，自我复制能力有限。"],
        link: "differentiation-basics",
      },
      {
        ja: ["線維芽細胞", "真皮などにある結合組織の細胞。コラーゲンなどを作り、iPS細胞の原料としても使われます。"],
        en: ["Fibroblast", "A connective-tissue cell found in the dermis and elsewhere; produces collagen and can be used as source material for iPS cells."],
        zh: ["成纤维细胞", "存在于真皮等结缔组织中的细胞，能产生胶原蛋白，也可用作iPS细胞的原料。"],
        link: "ips-cells-explained",
      },
      {
        ja: ["T細胞", "免疫を担う白血球の一種。ウイルス感染細胞やがん細胞を攻撃し、拒絶反応にも関わります。"],
        en: ["T cell", "A type of white blood cell central to immunity; attacks infected or cancerous cells and drives rejection."],
        zh: ["T细胞", "免疫系统的白细胞之一，攻击被感染细胞或癌细胞，并参与排斥反应。"],
        link: "immune-basics",
      },
      {
        ja: ["マクロファージ", "異物や死んだ細胞を取り込む免疫細胞。炎症の調整や組織修復にも関わります。"],
        en: ["Macrophage", "An immune cell that engulfs foreign matter and dead cells; also regulates inflammation and tissue repair."],
        zh: ["巨噬细胞", "吞噬异物和死亡细胞的免疫细胞，也参与炎症调节和组织修复。"],
        link: "immune-basics",
      },
      {
        ja: ["樹状細胞", "異物の情報をT細胞に伝える免疫細胞。免疫応答の司令塔に相当します。"],
        en: ["Dendritic cell", "An immune cell that presents foreign material to T cells — the command center of immune responses."],
        zh: ["树突状细胞", "向T细胞呈递异物信息的免疫细胞，相当于免疫反应的指挥中枢。"],
      }
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
      {
        ja: ["細胞周期", "細胞が分裂から次の分裂まで進む周期。DNAの複製と分配を繰り返します。"],
        en: ["Cell cycle", "The cycle a cell goes through from one division to the next, repeating DNA replication and segregation."],
        zh: ["细胞周期", "细胞从一次分裂到下一次分裂的周期，反复进行DNA复制与分配。"],
        link: "cell-cycle",
      },
      {
        ja: ["アポトーシス", "細胞の「計画的な死」。不要になった細胞が秩序だった形で消える仕組みです。"],
        en: ["Apoptosis", "Programmed cell death — an orderly way for unneeded cells to disappear."],
        zh: ["细胞凋亡", "细胞的程序性死亡，使不再需要的细胞有序消失。"],
      },
      {
        ja: ["転分化（直接リプログラミング）", "ある種類の分化細胞を、幹細胞を経ずに別の種類の細胞へ変換すること。研究段階の技術です。"],
        en: ["Transdifferentiation (direct reprogramming)", "Converting one differentiated cell type directly into another, without a stem-cell stage. A research-stage technique."],
        zh: ["转分化（直接重编程）", "不经过干细胞阶段，将一种分化细胞直接转换为另一种细胞的研究阶段技术。"],
      },
      {
        ja: ["細胞培養加工施設（CPC）", "細胞の採取・加工・培養を行う施設。無菌管理などの品質体制が問われます。"],
        en: ["Cell processing center (CPC)", "The facility that collects, processes, and cultures cells. Sterility and quality systems matter."],
        zh: ["细胞培养加工设施（CPC）", "进行细胞采集、加工、培养的设施，需具备无菌等质量管理体系。"],
        link: "cell-culture-and-quality",
      },
      {
        ja: ["細胞バンク", "細胞を検査・凍結して保管し、必要時に提供する仕組み。提供者の検査記録とともに管理されます。"],
        en: ["Cell bank", "A system that tests, freezes, and stores cells for future use, managed together with donor records."],
        zh: ["细胞库", "对细胞进行检验、冷冻保存并在需要时提供的机制，与供者检查记录一起管理。"],
        link: "cell-banks-guide",
      },
      {
        ja: ["増殖", "細胞が分裂して数を増やすこと。培養での増殖能力は治療用細胞の供給を左右します。"],
        en: ["Proliferation", "Cell multiplication through division. Culture proliferation capacity shapes how many treatment cells can be supplied."],
        zh: ["增殖", "细胞分裂增殖的过程，培养中的增殖能力影响治疗用细胞的供应。"],
        link: "cell-cycle",
      },
      {
        ja: ["細胞老化", "細胞が分裂できない状態に入ること。老化した細胞は炎症を促す物質を出すことがあります。"],
        en: ["Cellular senescence", "A state in which cells stop dividing. Senescent cells can release inflammation-promoting substances."],
        zh: ["细胞衰老", "细胞进入无法分裂的状态，衰老细胞可能分泌促炎物质。"],
      },
      {
        ja: ["細胞外基質", "細胞の周囲にある支持構造。コラーゲンなどのタンパク質が組織の形を保ちます。"],
        en: ["Extracellular matrix", "The supporting structure around cells — proteins such as collagen that maintain tissue shape."],
        zh: ["细胞外基质", "细胞周围的支持结构，胶原蛋白等蛋白维持组织形态。"],
      },
      {
        ja: ["培地上清", "細胞培養後の液体部分。細胞が分泌した成分を含み、エクソソーム治療の材料として研究されています。"],
        en: ["Culture supernatant", "The liquid fraction after cell culture — contains cell-secreted factors and is studied as a source for exosome preparations."],
        zh: ["培养上清", "细胞培养后的液体部分，含有细胞分泌成分，正在研究用作外泌体制剂的原料。"],
        link: "msc-secretome",
      }
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
      {
        ja: ["ドナー適格性", "細胞の提供者に求められる条件。感染症検査や健康状態の確認が含まれます。"],
        en: ["Donor eligibility", "The criteria a cell donor must meet, including infection screening and health checks."],
        zh: ["供者适格性", "细胞提供者需满足的条件，包括感染检查与健康状况确认。"],
        link: "cell-banks-guide",
      },
      {
        ja: ["アレルギー反応", "体の免疫が過剰に反応して起こる症状。投与直後に起きることがあり、監視体制が重要です。"],
        en: ["Allergic reaction", "An excessive immune response that can occur right after administration — monitoring is essential."],
        zh: ["过敏反应", "免疫过度反应引发的症状，可在给药后立即发生，监测体制很重要。"],
        link: "iv-stem-cell-safety",
      },
      {
        ja: ["フォローアップ（経過観察）", "治療後の症状や検査値を追跡する期間。長期的な追跡が求められる治療もあります。"],
        en: ["Follow-up", "The period of tracking symptoms and tests after treatment. Some treatments require long-term monitoring."],
        zh: ["随访", "治疗后追踪症状与检查值的期间，部分治疗需要长期随访。"],
        link: "aftercare",
      },
      {
        ja: ["出血・血腫", "採取や注射の際に起こりうる合併症。抗凝固薬の使用中は特に確認が必要です。"],
        en: ["Bleeding & hematoma", "Possible complications of collection or injection. Especially relevant when taking anticoagulants."],
        zh: ["出血与血肿", "采集或注射时可能出现的合并症，使用抗凝药时尤其需要确认。"],
        link: "risks-and-safety",
      },
      {
        ja: ["発熱・炎症反応", "投与後に起きうる体の反応。程度は治療や細胞の種類によって異なります。"],
        en: ["Fever & inflammatory response", "A reaction that can occur after administration; severity varies by treatment and cell type."],
        zh: ["发热与炎症反应", "给药后可能出现的身体反应，程度因治疗和细胞种类而异。"],
        link: "risks-and-safety",
      },
      {
        ja: ["免疫抑制", "移植後の拒絶を抑えるため免疫を弱めること。感染症のリスクが上がります。"],
        en: ["Immunosuppression", "Weakening the immune system to prevent rejection after transplant; raises infection risk."],
        zh: ["免疫抑制", "为预防移植后排斥而抑制免疫，会增加感染风险。"],
        link: "hematopoietic-transplant",
      },
      {
        ja: ["長期追跡（レジストリ）", "治療後も長期間データを集めて安全性を確認する仕組み。新しい治療ほど重要です。"],
        en: ["Long-term registry follow-up", "Collecting safety data over years after treatment — increasingly important for newer therapies."],
        zh: ["长期随访登记", "治疗后长期收集数据以确认安全性的机制，对新型治疗尤为重要。"],
        link: "case-reports-registries",
      }
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
        ref: { title: "厚生労働省「再生医療等の安全性の確保等に関する法律」", url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/saisei/" },
      },
      {
        ja: ["再生医療等安全性確保法", "自由診療などで細胞治療を提供する際の計画届出・審査の手続きを定める法律。届出は効果の保証ではありません。"],
        en: ["Act on the Safety of Regenerative Medicine", "Japanese law governing notification and review procedures for cell therapies outside insurance. Filing does not mean proven efficacy."],
        zh: ["再生医疗等安全性确保法", "规定自费诊疗等细胞治疗提供计划申报与审查程序的法律，申报不等于疗效保证。"],
        ref: { title: "厚生労働省「再生医療等の安全性の確保等に関する法律」", url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/saisei/" },
      },
      {
        ja: ["提供計画", "医療機関が細胞治療を行う際に届け出る計画。審査委員会の確認を経ますが、効果の承認とは別の手続きです。"],
        en: ["Provision plan", "The filing a clinic must submit to offer cell therapies, reviewed by a certified committee. Separate from efficacy approval."],
        zh: ["提供计划", "医疗机构实施细胞治疗前需申报的计划，须经委员会审查，但不同于疗效批准。"],
        ref: { title: "厚生労働省「再生医療等の安全性の確保等に関する法律」", url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/saisei/" },
      },
      {
        ja: ["治験", "医薬品・医療機器等の承認を目指して行われる臨床試験。事前の説明と同意が必要です。"],
        en: ["Clinical trial (chiken)", "A trial conducted to seek regulatory approval, requiring prior explanation and consent."],
        zh: ["临床试验（治验）", "为获得药品医疗器械批准而进行的试验，需要事先说明并征得同意。"],
        ref: { title: "PMDA（医薬品医療機器総合機構）", url: "https://www.pmda.go.jp/" },
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
        ref: { title: "厚生労働省「再生医療等の安全性の確保等に関する法律」", url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/saisei/" },
      },
      {
        ja: ["医薬品医療機器等法（薬機法）", "医薬品・医療機器・再生医療等製品の品質・有効性・安全性を規制する法律。承認の根拠となる法律です。"],
        en: ["Pharmaceuticals and Medical Devices Act", "The Japanese law regulating the quality, efficacy, and safety of drugs, devices, and regenerative-medicine products — the basis for approvals."],
        zh: ["《医药品医疗器械等法》（药机法）", "规制药品、医疗器械、再生医疗等产品之质量、有效性、安全性的日本法律，是批准的依据。"],
        ref: { title: "e-Gov法令検索「医薬品、医療機器等の品質、有効性及び安全性の確保等に関する法律」", url: "https://laws.e-gov.go.jp/law/335AC0000000145" },
      },
      {
        ja: ["医療広告ガイドライン", "医療機関の広告に関する厚生労働省の指針。誇大な効果表現やビフォーアフター写真の無断使用などに制限があります。"],
        en: ["Medical Advertising Guidelines", "MHLW rules for medical advertising, restricting exaggerated efficacy claims and unauthorized before/after imagery."],
        zh: ["医疗广告指南", "厚生劳动省关于医疗机构广告的指针，限制夸大疗效表述和未经许可的术前术后照片等。"],
        ref: { title: "厚生労働省「医療法における病院等の広告規制」", url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/kokokukisei/" },
        link: "before-after-ad-regulation",
      },
      {
        ja: ["先進医療", "厚生労働省が認めた先進的な医療技術。保険診療との併用が認められる特別な枠組みです。"],
        en: ["Advanced medical care (senshin iryo)", "Advanced technologies recognized by MHLW, allowing limited combination with insured care."],
        zh: ["先进医疗", "厚生劳动省认可的先进医疗技术，允许与医保诊疗并用的特殊框架。"],
        ref: { title: "厚生労働省「先進医療について」", url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/senshiniryou/" },
      },
      {
        ja: ["保険外併用療養費", "保険診療と保険外診療を併用する際の制度。先進医療などの例外に対応します。"],
        en: ["Extra-billing scheme", "The framework allowing insured care to be combined with certain uninsured care such as advanced treatments."],
        zh: ["保险外并用疗养费制度", "允许医保诊疗与保险外诊疗并用的制度，对应先进医疗等例外。"],
      },
      {
        ja: ["医療広告のビフォーアフター", "広告に術前後の写真を掲載する場合の規制。条件を満たさない掲載は虚偽広告になり得ます。"],
        en: ["Before/after imagery rules", "Restrictions on using pre/post-procedure photos in medical ads — non-compliant use can constitute false advertising."],
        zh: ["广告中的术前术后照", "关于在医疗广告中使用术前术后照片的限制，不合规刊登可能构成虚假广告。"],
        link: "before-after-ad-regulation",
        ref: { title: "厚生労働省「医療法における病院等の広告規制」", url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/kokokukisei/" },
      },
      {
        ja: ["医療法", "病院やクリニックの運営・広告などを定める法律。広告規制の根拠の一つです。"],
        en: ["Medical Care Act", "The law governing hospitals and clinics, including advertising rules."],
        zh: ["医疗法", "规定医院、诊所运营与广告等事项的法律，是广告规制的依据之一。"],
        ref: { title: "e-Gov法令検索「医療法」", url: "https://laws.e-gov.go.jp/law/323AC0000000205" },
      },
      {
        ja: ["倫理審査委員会（IRB）", "臨床研究が倫理的に適切か審査する委員会。参加者の権利と安全を守る仕組みです。"],
        en: ["Ethics review board (IRB)", "A committee that reviews the ethics of clinical research, protecting participants' rights and safety."],
        zh: ["伦理审查委员会（IRB）", "审查临床研究伦理性的委员会，保护受试者权利与安全。"],
        link: "clinical-trials-guide",
      },
      {
        ja: ["説明義務", "医療者が治療の内容・リスク・代替案を説明する義務。説明が不十分な同意は問題になり得ます。"],
        en: ["Duty of disclosure", "The provider's obligation to explain the treatment, its risks, and alternatives. Consent without adequate explanation is problematic."],
        zh: ["说明义务", "医务人员对治疗内容、风险和替代方案进行说明的义务，说明不充分下的同意可能存在问题。"],
        link: "questions-before-treatment",
      },
      {
        ja: ["同意書", "治療内容・リスク・費用を書面で確認し署名する書類。口頭だけでなく書面で残ることが重要です。"],
        en: ["Consent form", "A written document confirming the treatment, risks, and costs — written records matter beyond verbal explanation."],
        zh: ["知情同意书", "以书面确认治疗内容、风险和费用并签署的文件，书面留存非常重要。"],
        link: "jibihi-contract",
      },
      {
        ja: ["消費生活センター", "自由診療の契約や表示など、消費者トラブルの相談窓口。188（消費者ホットライン）で案内されます。"],
        en: ["Consumer affairs center", "A public contact point for disputes over private care contracts and advertising (via the 188 consumer hotline)."],
        zh: ["消费者生活中心", "处理自费诊疗合同与宣传等消费纠纷的咨询窗口，可拨打188消费者热线。"],
        link: "trouble-help",
      }
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
        ref: { title: "厚生労働省「治験・臨床研究の解説」", url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/fukyu/kenkyu/index.html" },
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
      {
        ja: ["コホート研究", "特定の集団を追跡して要因と結果の関係を調べる観察研究。"],
        en: ["Cohort study", "An observational study that follows a defined group to examine links between factors and outcomes."],
        zh: ["队列研究", "追踪特定群体、考察因素与结果关系的观察性研究。"],
      },
      {
        ja: ["バイアス", "研究結果を偏らせる要因。対象の選ばれ方や測定の仕方などで生じます。"],
        en: ["Bias", "Factors that skew study results — arising from how participants are selected or outcomes measured."],
        zh: ["偏倚", "使研究结果产生偏差的因素，源于对象选择或测量方式等。"],
      },
      {
        ja: ["統計的有意差", "差が偶然だけでは説明しにくいことを示す統計の判定。効果の大きさとは別の指標です。"],
        en: ["Statistical significance", "A test indicating a difference is unlikely explained by chance alone — distinct from effect size."],
        zh: ["统计学显著性", "表明差异难以仅用偶然解释的统计判定，与效应大小是不同的指标。"],
        link: "statistics-intro",
      },
      {
        ja: ["症例対照研究", "治療を受けた人と受けていない人を後から比較する観察研究。因果の推論には注意が必要です。"],
        en: ["Case-control study", "An observational study comparing people who received a treatment with those who did not, retrospectively."],
        zh: ["病例对照研究", "事后比较接受治疗与未接受治疗人群的观察性研究，因果推断需谨慎。"],
      },
      {
        ja: ["前向き・後向き研究", "前向きは今後の経過を追い、後向きは過去の記録を分析します。設計の違いで証拠の強さが変わります。"],
        en: ["Prospective vs retrospective", "Prospective studies follow outcomes forward; retrospective ones analyze existing records. Design affects evidence strength."],
        zh: ["前瞻性与回顾性研究", "前瞻性追踪未来经过，回顾性分析既有记录，设计差异影响证据强度。"],
      },
      {
        ja: ["サンプルサイズ", "研究に参加した対象の数。小さすぎると偶然の差を「効果」と見誤りやすくなります。"],
        en: ["Sample size", "The number of participants. If too small, chance differences can be mistaken for effects."],
        zh: ["样本量", "研究对象的数量，过小容易把偶然差异误认为疗效。"],
        link: "statistics-intro",
      },
      {
        ja: ["信頼区間", "推定値が取りうる範囲。幅が広いほど不確実性が大きいことを示します。"],
        en: ["Confidence interval", "The range in which an estimate is likely to lie; a wide interval means greater uncertainty."],
        zh: ["置信区间", "估计值可能的范围，区间越宽不确定性越大。"],
      },
      {
        ja: ["相対リスクと絶対リスク", "相対リスクは「何倍」、絶対リスクは実際の割合の差。広告では相対数値だけが強調されがちです。"],
        en: ["Relative vs absolute risk", "Relative risk is a ratio; absolute risk is the real difference in rates. Ads tend to highlight relative figures."],
        zh: ["相对风险与绝对风险", "相对风险是倍数，绝对风险是实际比例的差，广告往往强调相对数值。"],
        link: "reading-research-news",
      }
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
      {
        ja: ["血小板", "止血や血管修復に働く血液成分。成長因子を多く含み、PRP治療の主体です。"],
        en: ["Platelet", "The blood component that stops bleeding and repairs vessels; rich in growth factors and central to PRP therapy."],
        zh: ["血小板", "参与止血和血管修复的血液成分，富含生长因子，是PRP疗法的核心。"],
        link: "prp-therapy-basics",
      },
      {
        ja: ["血漿", "血液の液体成分。血小板やタンパク質を運びます。"],
        en: ["Plasma", "The liquid component of blood that carries platelets and proteins."],
        zh: ["血浆", "血液的液体成分，运送血小板和蛋白质。"],
      },
      {
        ja: ["PRP（多血小板血漿）", "自分の血液から血小板を濃縮した製剤。局所の修復を促す目的で研究・提供されています。"],
        en: ["PRP (platelet-rich plasma)", "A preparation concentrating platelets from one's own blood, used to promote local repair."],
        zh: ["PRP（富血小板血浆）", "从自身血液浓缩血小板制成的制剂，用于促进局部修复。"],
        link: "prp-therapy-basics",
      },
      {
        ja: ["コラーゲン", "皮膚や骨、軟骨の主成分となるタンパク質。加齢で減少し、美容医療の指標として注目されます。"],
        en: ["Collagen", "A main protein of skin, bone, and cartilage. Declines with age and is a common marker in cosmetic medicine."],
        zh: ["胶原蛋白", "皮肤、骨骼、软骨的主要蛋白成分，随年龄减少，是美容医疗的常用指标。"],
        link: "stem-cell-skin-aging",
      },
      {
        ja: ["軟骨", "関節の表面を覆い、衝撃を吸収する組織。血管がなく再生しにくいとされます。"],
        en: ["Cartilage", "Tissue covering joint surfaces that absorbs impact. It has no blood vessels and regenerates poorly."],
        zh: ["软骨", "覆盖关节表面、吸收冲击的组织，无血管、再生能力差。"],
        link: "cartilage-repair-deep",
      },
      {
        ja: ["表皮と真皮", "皮膚の構造。表皮は表面のバリア、真皮はコラーゲンなどの支持層で、老化の違いに関係します。"],
        en: ["Epidermis & dermis", "The two skin layers — the epidermis is the surface barrier; the dermis provides collagen-rich support. Relevant to aging differences."],
        zh: ["表皮与真皮", "皮肤的结构，表皮是表面屏障，真皮是富含胶原蛋白的支撑层，与老化差异相关。"],
        link: "stem-cell-skin-aging",
      },
      {
        ja: ["毛細血管", "動脈と静脈をつなぐ細い血管。静脈投与された細胞がここに捕捉されることがあります。"],
        en: ["Capillary", "Fine vessels linking arteries and veins. Administered cells can be trapped here — notably in the lungs."],
        zh: ["毛细血管", "连接动脉与静脉的细小血管，静脉投与的细胞可能在此被截留。"],
        link: "stem-cell-biodistribution",
      },
      {
        ja: ["線維化", "炎症や損傷の後に組織が硬くなる変化。臓器の機能低下につながり、再生医療の研究対象です。"],
        en: ["Fibrosis", "Tissue stiffening after inflammation or injury, reducing organ function — a target of regenerative research."],
        zh: ["纤维化", "炎症或损伤后组织变硬的变化，会导致器官功能下降，是再生医疗的研究对象。"],
      },
      {
        ja: ["DNA・遺伝子", "DNAは遺伝情報を担う物質、遺伝子はその中の機能的な単位。細胞の性質を形づくります。"],
        en: ["DNA & genes", "DNA carries genetic information; genes are its functional units, shaping cell properties."],
        zh: ["DNA与基因", "DNA承载遗传信息，基因是其中的功能单位，决定细胞性质。"],
        link: "genes-and-cells",
      },
      {
        ja: ["成長因子", "細胞の増殖や分化を促すタンパク質。修復や再生に関わります。"],
        en: ["Growth factor", "Proteins that promote cell growth and differentiation, involved in repair and regeneration."],
        zh: ["生长因子", "促进细胞增殖和分化的蛋白质，参与修复与再生。"],
      },
      {
        ja: ["受容体", "細胞表面で特定の物質を受け取る構造。細胞間の情報伝達の入口です。"],
        en: ["Receptor", "A structure on the cell surface that binds specific molecules — the entry point of cell signaling."],
        zh: ["受体", "细胞表面接收特定物质的结构，是细胞间信息传递的入口。"],
      }
    ],
  },
  {
    ja: "再生医療の技術",
    en: "Regenerative technologies",
    zh: "再生医疗技术",
    terms: [
      {
        ja: ["組織工学（ティッシュエンジニアリング）", "細胞・足場材料・成長因子を組み合わせて組織を作る考え方。"],
        en: ["Tissue engineering", "An approach that combines cells, scaffolds, and growth factors to build tissue."],
        zh: ["组织工程学", "将细胞、支架材料与生长因子结合来构建组织的方法。"],
        link: "scaffolds",
      },
      {
        ja: ["スキャフォールド（足場材料）", "細胞が定着するための支持材料。生分解性の材料などが研究されています。"],
        en: ["Scaffold", "A supporting material on which cells attach; biodegradable materials are under study."],
        zh: ["支架材料", "供细胞附着的支持材料，可降解材料等正在研究中。"],
        link: "scaffolds",
      },
      {
        ja: ["バイオプリンティング", "細胞や材料を3Dプリンタのように積層して組織を作る技術。研究段階です。"],
        en: ["Bioprinting", "Printing layers of cells and materials like a 3D printer to form tissue — a research-stage technology."],
        zh: ["生物打印", "像3D打印一样将细胞与材料逐层堆积以构建组织的技术，尚处研究阶段。"],
        link: "bioprinting",
      },
      {
        ja: ["オルガノイド", "幹細胞から作られる小さな三次元組織。病気のモデルや薬の評価に使われます。"],
        en: ["Organoid", "A small three-dimensional tissue grown from stem cells, used to model disease and test drugs."],
        zh: ["类器官", "由干细胞制备的小型三维组织，用于疾病建模和药物评价。"],
        link: "future-perspectives",
      },
      {
        ja: ["遺伝子治療", "遺伝子を体内に導入して病気を治療する方法。承認された製品もあります。"],
        en: ["Gene therapy", "Introducing genetic material into the body to treat disease; some approved products exist."],
        zh: ["基因治疗", "将基因导入体内治疗疾病的方法，已有获批产品。"],
      },
      {
        ja: ["ゲノム編集", "DNAの特定の場所を書き換える技術。iPS細胞との組み合わせが研究されています。"],
        en: ["Genome editing", "Techniques that rewrite DNA at specific sites — studied in combination with iPS cells."],
        zh: ["基因组编辑", "改写DNA特定位点的技术，正在研究与iPS细胞的结合应用。"],
      },
      {
        ja: ["条件付き早期承認", "限られたデータでも安全性が確認できれば早期に承認し、使用後のデータで再評価する制度。"],
        en: ["Conditional early approval", "A pathway granting early approval on limited safety data, with re-evaluation using post-market data."],
        zh: ["有条件提前批准", "安全性获得一定确认即可提前批准，上市后再用数据重新评估的制度。"],
      },
    ],
  },
  {
    ja: "検査と診断",
    en: "Tests & diagnosis",
    zh: "检查与诊断",
    terms: [
      {
        ja: ["血液検査", "血球数・炎症指標・肝腎機能などを調べる基本的な検査。治療前後の確認に使われます。"],
        en: ["Blood test", "A basic test covering blood counts, inflammatory markers, and liver/kidney function — used before and after treatment."],
        zh: ["血液检查", "检查血球计数、炎症指标、肝肾功能等的基本检查，用于治疗前后的确认。"],
        link: "health-checkups",
      },
      {
        ja: ["画像検査", "X線・CT・MRI・エコーなどで体の中を調べる検査。治療効果の確認にも使われます。"],
        en: ["Imaging", "X-ray, CT, MRI, or ultrasound used to examine the body, including checking treatment effects."],
        zh: ["影像检查", "X线、CT、MRI、超声等观察体内的检查，也用于确认治疗效果。"],
      },
      {
        ja: ["バイオマーカー", "病気や治療効果を測るための体内の指標。血液検査や画像で測定します。"],
        en: ["Biomarker", "A measurable indicator in the body used to assess disease or treatment response."],
        zh: ["生物标志物", "用于衡量疾病或治疗效果的体内指标。"],
      },
      {
        ja: ["生検（バイオプシー）", "組織の一部を採って顕微鏡で調べる検査。診断の確定に使われます。"],
        en: ["Biopsy", "Removing a small tissue sample for microscopic examination to confirm a diagnosis."],
        zh: ["活检", "取部分组织进行显微镜检查，用于确诊。"],
      },
      {
        ja: ["感染症検査", "ドナー細胞や採取細胞のウイルス・細菌チェック。安全性確保の基本です。"],
        en: ["Infection screening", "Virus/bacteria testing of donor or harvested cells — fundamental to safety."],
        zh: ["感染检查", "对供者细胞或采集细胞进行病毒、细菌检查，是保障安全的基础。"],
        link: "stem-cell-infection-risk",
      },
    ],
  },
  {
    ja: "主な対象疾患（研究対象を含む）",
    en: "Key conditions (incl. research targets)",
    zh: "主要对象疾病（含研究对象）",
    terms: [
      {
        ja: ["変形性関節症", "関節の軟骨がすり減って痛みや変形が生じる病気。幹細胞・PRPの研究対象です。"],
        en: ["Osteoarthritis", "Degeneration of joint cartilage causing pain and deformity — a research target for stem cells and PRP."],
        zh: ["骨关节炎", "关节软骨磨损导致疼痛和变形的疾病，是干细胞和PRP的研究对象。"],
        link: "cartilage-repair-deep",
      },
      {
        ja: ["脊髄損傷", "脊髄が損傷して麻痺や感覚障害が起きる状態。再生医療での回復が研究されています。"],
        en: ["Spinal cord injury", "Damage causing paralysis and sensory loss — regeneration is under study."],
        zh: ["脊髓损伤", "脊髓损伤导致麻痹和感觉障碍的状态，正在研究再生医疗的修复。"],
        link: "spinal-cord-detail",
      },
      {
        ja: ["糖尿病", "血糖値が高くなる病気。膵臓のβ細胞に関わるため、細胞治療の研究対象です。"],
        en: ["Diabetes", "A condition of elevated blood sugar involving pancreatic beta cells — a cell-therapy research target."],
        zh: ["糖尿病", "血糖升高的疾病，涉及胰岛β细胞，是细胞治疗的研究对象。"],
      },
      {
        ja: ["脳卒中", "脳の血管が詰まる・破れる病気。損傷した神経の回復に関する研究が進められています。"],
        en: ["Stroke", "A blocked or ruptured brain vessel; recovery of damaged nerve tissue is under study."],
        zh: ["脑卒中", "脑血管堵塞或破裂的疾病，正在研究受损神经的恢复。"],
      },
      {
        ja: ["心不全", "心臓のポンプ機能が低下する病気。心筋の修復に関する研究が続いています。"],
        en: ["Heart failure", "Reduced pumping function of the heart; myocardial repair is a research focus."],
        zh: ["心力衰竭", "心脏泵血功能下降的疾病，心肌修复是研究重点。"],
      },
      {
        ja: ["肝硬変", "肝臓が線維化して硬くなる病気。線維化を抑える研究が進められています。"],
        en: ["Liver cirrhosis", "Fibrotic stiffening of the liver; antifibrotic approaches are under study."],
        zh: ["肝硬化", "肝脏纤维化变硬的疾病，抑制纤维化的研究正在进行。"],
      },
      {
        ja: ["角膜疾患", "角膜が濁る・失われる病気。角膜上皮の再生医療で実績がある領域です。"],
        en: ["Corneal disease", "Clouding or loss of the cornea — a field where corneal epithelial regeneration has a clinical track record."],
        zh: ["角膜疾病", "角膜混浊或缺失的疾病，角膜上皮再生医疗已有临床应用。"],
      },
      {
        ja: ["パーキンソン病", "ドーパミンを作る神経が減る病気。iPS細胞由来の細胞移植が臨床研究で試みられています。"],
        en: ["Parkinson's disease", "Loss of dopamine-producing neurons; iPS-derived cell transplantation is being studied in clinical trials."],
        zh: ["帕金森病", "产生多巴胺的神经细胞减少的疾病，iPS细胞来源的细胞移植正在临床研究中。"],
      },
    ],
  },
];