// 千原良友先生 執筆記事の英中訳（医師執筆シリーズ）。
// 日本語原稿は医師本人の文面を保持するため、翻訳も各段落に忠実に対応させる。
import type { ArticleBodyLocale } from "./article-bodies-columns";

type Table = { headers: string[]; rows: string[][] };
type SectionTuple = [string, string[], Table?, number?];

function b(
  enPoints: string[],
  enSections: SectionTuple[],
  zhPoints: string[],
  zhSections: SectionTuple[],
): { en: ArticleBodyLocale; zh: ArticleBodyLocale } {
  const toSections = (list: SectionTuple[]) =>
    list.map(([title, paragraphs, table, tableAfter]) => ({
      title,
      paragraphs,
      ...(table ? { table } : {}),
      ...(tableAfter !== undefined ? { tableAfter } : {}),
    }));
  return {
    en: { points: enPoints, sections: toSections(enSections) },
    zh: { points: zhPoints, sections: toSections(zhSections) },
  };
}

export const articleBodiesDoctor: Record<
  string,
  { en: ArticleBodyLocale; zh: ArticleBodyLocale }
> = {
  "doctor-stem-cells-basics": b(
    [
      "A stem cell can copy itself (self-renewal) and become other cell types (differentiation).",
      "They differ in nature from cells with fixed roles, such as skin or blood cells.",
      "The words 'stem cell' alone cannot tell you whether a treatment is effective or safe.",
    ],
    [
      [
        "What defines a stem cell: two abilities",
        [
          "A stem cell combines two abilities: self-renewal — dividing to produce more stem cells of the same kind — and differentiation — becoming other cell types such as muscle, bone, or blood. It helps to picture stem cells as the 'source' cells of the body's tissues.",
          "The name 'stem cell' does not refer to a single cell type. Their properties differ greatly depending on their origin, how they were produced, and the range of cells they can become.",
        ],
      ],
      [
        "How do they differ from ordinary cells?",
        [
          "Body cells such as skin cells and red blood cells already have assigned roles. When they multiply, they only produce more cells of the same role — they do not become bone or nerve. Stem cells, by contrast, have not yet taken on a role and can become several kinds of cells depending on the conditions.",
          "However, not every stem cell can become anything without limit. Cells that can differentiate into many cell types, such as iPS cells and ES cells (pluripotent stem cells), work differently from those that differentiate into a limited range, such as stem cells in bone marrow or fat (somatic stem cells).",
        ],
      ],
      [
        "Why they attract attention in regenerative medicine",
        [
          "Stem cells have been studied as a core of regenerative medicine based on ideas such as replacing lost or damaged cells, or supporting the body's repair through the signals cells emit. Some treatments, like hematopoietic stem cell transplantation, have a long history; others are still being investigated.",
          "On the other hand, the phrase 'uses stem cells' alone does not tell you what is being placed in the body or how it is expected to work. It is important to check the cells' origin, processing, administration method, and target disease individually.",
        ],
      ],
      [
        "Major types of stem cells",
        [
          "Stem cells are broadly divided into ES cells derived from fertilized embryos, iPS cells artificially created from body cells, and somatic stem cells present in adult tissues such as bone marrow and fat. The range of cells they can form, the ethical considerations, and safety differ by type.",
          "The cells most widely used in current treatments are mesenchymal stem cells (MSCs) collected from bone marrow or fat. Even with MSCs, however, effectiveness varies with the target disease and administration method — the cell type alone cannot tell you whether a treatment works.",
        ],
      ],
      [
        "Going one step further",
        [
          "Once you understand the basics of stem cells, the next question is whether a given cell is already used as a treatment or is still at the research stage. The same term 'stem cell' can mean something very different for an approved therapy and a research subject.",
        ],
      ],
    ],
    [
      "干细胞具有制造相同细胞的能力（自我复制）和变成其他种类细胞的能力（分化）。",
      "与皮肤、血液等已定职责的细胞性质不同。",
      "仅凭“干细胞”一词无法判断治疗的效果与安全性。",
    ],
    [
      [
        "干细胞的定义：两种能力",
        [
          "干细胞指同时具备两种能力的细胞：分裂产生与自身相同性质干细胞的能力（自我复制），以及变为肌肉、骨骼、血液等其他种类细胞的能力（分化）。可以把它理解为身体组织的“源头”细胞。",
          "“干细胞”这一称呼并不指某一种特定的细胞。其性质因来源、制作方式和可分化范围的不同而有很大差异。",
        ],
      ],
      [
        "与普通细胞有何不同",
        [
          "皮肤细胞、红细胞等身体细胞已经确定了职责。即使增殖也只能产生相同职责的细胞，不会变成骨或神经。而干细胞处于尚未承担职责的阶段，在不同条件下可以成为多种细胞。",
          "但并非所有干细胞都能无限地变成任何细胞。像iPS细胞、ES细胞这样能分化为多种细胞的（多能性干细胞），与骨髓、脂肪中只能分化为有限细胞的（体性干细胞），作用并不相同。",
        ],
      ],
      [
        "在再生医学中受关注的原因",
        [
          "基于补充丢失或受损细胞、或通过细胞释放的信号帮助身体修复等思路，干细胞一直作为再生医学的核心被研究。既有造血干细胞移植这样历史悠久的疗法，也有尚在验证阶段的方法。",
          "另一方面，仅凭“使用干细胞”这一说明，并不能知道体内被投入了什么、预期以何种机制起效。需要分别确认细胞来源、加工方式、给药方法和对象疾病。",
        ],
      ],
      [
        "主要的干细胞种类",
        [
          "干细胞大致可分为：由受精卵制备的ES细胞、由体细胞人工制备的iPS细胞，以及存在于骨髓、脂肪等成体组织中的体性干细胞。可分化的细胞类型、伦理考量和安全性因种类而异。",
          "目前治疗中广泛使用的是从骨髓或脂肪采集的间充质干细胞（MSC）。但即使是MSC治疗，效果也因对象疾病和给药方式而异，不能只凭细胞种类判断有效性。",
        ],
      ],
      [
        "进一步了解",
        [
          "掌握干细胞基础后，接下来关心的是“该细胞是作为治疗使用，还是仍处于研究阶段”。同样是“干细胞”，已获保险批准的与研究对象的含义完全不同。",
        ],
      ],
    ],
  ),
  "doctor-regenerative-medicine": b(
    [
      "Regenerative medicine does not equal stem-cell therapy — stem-cell therapy is one of its methods.",
      "Stem cells have two key features: self-renewal and differentiation.",
      "For mesenchymal stem cells (MSCs), multiple actions are thought to be involved: secretion of growth factors and cytokines, regulation of inflammation and immune responses, effects such as angiogenesis, and differentiation into some cells.",
    ],
    [
      [
        "What is regenerative medicine?",
        [
          "Regenerative medicine is medicine that aims to repair and regenerate cells, tissues, and organs damaged by illness or injury.",
          "The technologies used in regenerative medicine are not limited to stem cells. For example, stem-cell and cell therapies, cells produced from iPS cells, tissue engineering, biomaterials, gene therapy, and tissues made from cells are all being studied.",
          "In other words, regenerative medicine does not equal stem-cell therapy. Stem-cell therapy is one of its methods.",
        ],
      ],
      [
        "Why are stem cells used in regenerative medicine?",
        [
          "Stem cells have two key characteristics.",
          "1. Self-renewal: the ability to produce more cells with the same properties.",
          "2. Differentiation: the ability to change into other cell types under certain conditions.",
          "Using these properties, it may be possible to replace cells and tissues lost to disease or injury, or to create an environment that supports tissue repair.",
        ],
      ],
      [
        "The basic flow of stem-cell-based regenerative medicine",
        [
          "Treatments using stem cells vary greatly depending on the cell type and method. As a general image of cell therapy, the flow is as follows.",
          "STEP 1 Collect cells — When using the patient's own cells, cells may be collected from bone marrow, fat tissue, or similar sources. Some treatments use donor-derived cells instead.",
          "STEP 2 Process and culture cells — Collected cells may be used as they are, or cultured and processed according to the purpose. The required steps differ by cell type and treatment.",
          "STEP 3 Administer to the patient — Cells are given by a method suited to the treatment goal: intravenously into blood vessels, directly into the damaged site, or transplanted as tissue.",
        ],
      ],
      [
        "What do stem cells do once inside the body?",
        [
          "This is an especially important point for understanding stem-cell therapy. You might picture it as 'the administered stem cells transform into the damaged cells and rebuild the tissue.'",
          "However, at least for mesenchymal stem/stromal cells (MSCs), research has shown that this alone cannot explain their effects. Current research considers several broad mechanisms.",
          "1. Moving to damaged tissue — Some administered MSCs show 'homing,' gathering at sites of inflammation or tissue damage, thought to involve interactions between MSCs and signals released from the damaged area. Not all administered cells gather at the target tissue, however, and their distribution and survival in the body differ by administration method and cell type.",
          "2. Releasing growth factors and cytokines — A particularly noted feature of MSCs is that they secrete various substances. MSCs release growth factors, cytokines, chemokines, and other intercellular signaling molecules. These substances act on surrounding cells and may affect cell survival, proliferation, blood-vessel formation, and inflammatory responses. This signaling to nearby cells is called the 'paracrine effect.'",
          "3. Regulating inflammation and immune responses — MSCs are also being studied for effects that regulate immune-cell activity. When tissue is damaged, inflammation occurs. Inflammation is necessary for repair, but excessive, prolonged inflammation can damage tissue. MSCs may modulate inflammation by influencing immune cells through various signals. So in MSC-based regenerative medicine, 'creating an environment in which tissue repairs more easily' is as important a concept as 'increasing cells.'",
          "4. Possibly promoting angiogenesis — Repairing damaged tissue also requires oxygen and nutrients delivered by blood. Some factors secreted by MSCs have been reported to be involved in angiogenesis, so MSC treatments are also being studied for supporting blood flow and vessel formation in damaged tissue.",
          "5. Possibly replacing damaged cells directly — Because stem cells can differentiate, one idea is that administered cells differentiate into target cells and replace lost ones. This is especially important in regenerative approaches that produce and transplant specific cells — for example, research transplanting cells made from iPS cells into patients. For MSCs, however, the central effect is not necessarily that administered cells engraft in large numbers and build new tissue; studies have shown that direct cell replacement alone cannot fully explain the benefits.",
        ],
      ],
      [
        "The mechanism in short",
        [
          "For mesenchymal stem cells in particular, multiple mechanisms are thought to work together: 1. interaction with the damaged site, 2. secretion of growth factors and cytokines, 3. regulation of inflammation and immune responses, 4. effects such as angiogenesis, and 5. differentiation into some cells.",
        ],
      ],
    ],
    [
      "再生医学≠干细胞治疗，干细胞治疗是再生医学的手段之一。",
      "干细胞有自我复制与分化两大特征。",
      "对间充质干细胞（MSC），认为涉及生长因子与细胞因子分泌、炎症与免疫调节、血管新生作用及部分细胞分化等多种机制。",
    ],
    [
      [
        "什么是再生医学？",
        [
          "再生医学是指以修复、再生因疾病或外伤受损的细胞、组织与器官为目标的医疗。",
          "再生医学所用的技术不限于干细胞。例如干细胞与细胞治疗、由iPS细胞制备的细胞、组织工程、生物材料、基因治疗、由细胞制备的组织等都在研究中。",
          "也就是说，再生医学≠干细胞治疗，干细胞治疗只是再生医学的手段之一。",
        ],
      ],
      [
        "为什么干细胞被用于再生医学？",
        [
          "干细胞有两大特征。",
          "① 自我复制能力：增加与自身性质相同细胞的能力。",
          "② 分化能力：在一定条件下变为其他种类细胞的能力。",
          "利用这些性质，可能可以补充因疾病或外伤失去的细胞和组织，或营造有利于组织修复的环境。",
        ],
      ],
      [
        "使用干细胞的再生医学基本流程",
        [
          "使用干细胞的治疗因细胞种类和治疗方法差异很大。以一般细胞治疗为例，流程如下。",
          "STEP 1 采集细胞——使用患者自身细胞时，可能从骨髓、脂肪组织等处采集；也有使用供者来源细胞的治疗。",
          "STEP 2 加工・培养细胞——采集的细胞可直接使用，也可按目的培养加工。所需工序因细胞种类和治疗方法而异。",
          "STEP 3 给予患者——根据治疗目的，通过点滴等方式注入血管、直接给予受损部位，或以组织形式移植。",
        ],
      ],
      [
        "进入体内的干细胞会做什么？",
        [
          "这是理解干细胞治疗特别重要的一点。你可能会想象“注入的干细胞变成受损细胞并重建组织”。",
          "但至少对间充质干/间质细胞（MSC）而言，仅这一点已无法解释其作用。目前研究认为主要涉及以下几种机制。",
          "① 迁移到受损组织——部分注入的MSC会出现“归巢”现象，聚集到发生炎症或组织损伤的部位，被认为是损伤部位释放的信号与MSC相互作用所致。但并非所有注入的细胞都会聚集到目标组织，其体内分布和存活时间也因给药方式、细胞种类等而异。",
          "② 释放生长因子、细胞因子等——MSC尤其受关注的是分泌多种物质的作用。MSC释放生长因子、细胞因子、趋化因子等细胞间信号物质，作用于周围细胞，可能影响细胞存活、增殖、血管形成和炎症反应。这种向周围细胞传递信号的作用称为“旁分泌作用”。",
          "③ 调节炎症与免疫反应——MSC还在研究其调节免疫细胞功能的作用。组织受损会引发炎症，炎症是修复受损组织的必要反应，但过度且长期持续的炎症可能导致组织损伤。MSC可能通过多种信号影响免疫细胞、调节炎症反应。因此MSC再生医学中，“营造组织易于修复的环境”与“增加细胞”同样重要。",
          "④ 可能促进血管新生——修复受损组织还需要从血液获取氧气和营养。有报告称MSC分泌的部分因子与血管新生有关，因此MSC治疗也在研究其对受损组织血流和血管形成的支持作用。",
          "⑤ 直接替换受损细胞的可能性——由于干细胞具有分化能力，还有一种思路是注入的细胞分化为目标细胞、补充失去的细胞。这在制备特定细胞并移植的再生医学中尤为重要，如将iPS细胞制备的细胞移植给患者的研究。但对MSC而言，注入的细胞大量定植并形成新组织未必是治疗效应的中心，研究表明仅靠直接细胞替换无法充分解释疗效。",
        ],
      ],
      [
        "干细胞治疗机制简要总结",
        [
          "特别是间充质干细胞，被认为涉及多种机制：① 与损伤部位的相互作用，② 生长因子、细胞因子等的分泌，③ 炎症与免疫反应的调节，④ 血管新生等作用，⑤ 分化为部分细胞。",
        ],
      ],
    ],
  ),
  "doctor-stem-cell-types": b(
    [
      "ES cells are made from early embryos and are pluripotent.",
      "iPS cells are made by artificially resetting body cells and are pluripotent like ES cells.",
      "Somatic stem cells already exist in the body and differentiate into specific tissues and cells.",
      "'Being a stem cell' and 'having proven treatment effects' are separate issues.",
    ],
    [
      [
        "Introduction",
        [
          "Many people think of iPS cells or regenerative medicine when they hear 'stem cell.' In fact, there are several kinds of stem cells, and they differ in where they come from, what cells they can become, and the purposes for which they are studied and used.",
          "The three representative types are iPS cells (induced pluripotent stem cells), ES cells (embryonic stem cells), and somatic stem cells. This article explains the characteristics and differences of each as clearly as possible.",
        ],
      ],
      [
        "What is a stem cell?",
        [
          "Simply put, a stem cell is a cell that has both 'the ability to multiply cells of the same kind' and 'the ability to change into other types of cells.' The latter is called differentiation. Our bodies contain many kinds of cells — nerve cells, muscle cells, blood cells, skin cells — and it helps to picture stem cells as the 'source cells' that produce them.",
          "Not every stem cell can become any cell, though — how far it can differentiate depends on the type.",
        ],
      ],
      [
        "Three broad types",
        [
          "Stem cells can be broadly divided into the following three types by their properties and origins.",
          "ES cells and iPS cells are both called pluripotent stem cells and can differentiate into many cell types. Somatic stem cells, on the other hand, already exist in the body and are involved in maintaining and repairing their respective tissues.",
        ],
        {
          headers: ["Type", "Produced from", "Differentiation range"],
          rows: [
            ["ES cell", "Early embryo (fertilized egg)", "Very broad"],
            ["iPS cell", "Artificially reprogrammed body cells such as skin", "Very broad"],
            ["Somatic stem cell", "Present in the body after birth", "Mainly specific tissues and cells"],
          ],
        },
        0,
      ],
      [
        "1. What are ES cells?",
        [
          "ES stands for Embryonic Stem Cell. Produced from cells of an early embryo after fertilization, ES cells are 'pluripotent' — able to differentiate into many cell types.",
          "They can be differentiated into many kinds of cells — nerve cells, heart muscle cells, blood cells, liver cells, and more — so they are used not only in regenerative medicine but also in disease research and new drug development.",
          "Advantages of ES cells",
          "The key feature of ES cells is their high capacity to differentiate into many cell types, so they have long been studied as a 'supply source' for lost cells.",
          "Challenges for ES cells",
          "However, because ES cells are made from embryos, they raise ethical issues. And for actual treatment, challenges remain, such as ensuring transplanted cells differentiate accurately into the intended cells and confirming safety.",
        ],
      ],
      [
        "2. What are iPS cells?",
        [
          "iPS stands for Induced Pluripotent Stem Cell. Unlike ES cells, iPS cells are produced by applying specific factors to mature body cells such as skin cells, resetting the cells' state (reprogramming).",
          "In simple terms: skin cell → artificial 'reset' → iPS cell → differentiation into nerve, heart muscle, blood, and other cells.",
          "Like ES cells, iPS cells are pluripotent — that is their key feature.",
          "Advantages of iPS cells",
          "A major feature of iPS cells is the possibility of making them from the patient's own cells. In the future, this is expected to support regenerative medicine using a patient's own cells, 'disease models' that recreate illness, and new drug research. They also avoid the ethical issues that come with using embryos, as ES cells do.",
          "Challenges for iPS cells",
          "iPS cells have challenges too, such as reliably differentiating them into target cells and ensuring the safety of transplanted cells. In other words, iPS cells cannot cure everything — for each disease, efficacy and safety must be confirmed in actual treatment.",
        ],
      ],
      [
        "3. What are somatic stem cells?",
        [
          "Somatic stem cells already exist in our bodies. They are also called adult stem cells or tissue stem cells.",
          "Unlike ES and iPS cells, somatic stem cells cannot become every cell in the body — they can basically differentiate only into a limited range of cells related to their tissue. Representative examples are hematopoietic stem cells, neural stem cells, and mesenchymal stem cells.",
          "Hematopoietic stem cells",
          "Found mainly in bone marrow, hematopoietic stem cells produce blood cells — red blood cells, white blood cells, and platelets — and play a vital role in continually making blood.",
          "Neural stem cells",
          "Neural stem cells can differentiate into cells of the nervous system, such as neurons and glial cells.",
          "Mesenchymal stem cells",
          "Mesenchymal stem cells (MSCs) are found in bone marrow, fat tissue, and elsewhere. They are known to differentiate into bone, cartilage, and fat cells, and to secrete various bioactive substances — research is advancing in regenerative medicine.",
        ],
      ],
      [
        "Differences between iPS, ES, and somatic stem cells",
        [
          "To summarize the three types simply:",
          "ES cells — 'pluripotent stem cells made from early embryos'",
          "iPS cells — 'pluripotent stem cells made by artificially resetting adult body cells'",
          "Somatic stem cells — 'stem cells that already exist in the body and take part in tissue maintenance and repair'",
        ],
      ],
      [
        "'Pluripotency' and 'differentiation' make the differences clear",
        [
          "Two words are key to understanding stem cells: 'pluripotency' and 'differentiation.'",
          "What is pluripotency?",
          "Pluripotency is the ability to differentiate into many kinds of cells. ES cells and iPS cells are representative pluripotent stem cells.",
          "What is differentiation?",
          "Differentiation is a cell changing into a cell with a specific role — for example, an iPS cell becoming a heart muscle cell. Somatic stem cells have a relatively limited differentiation range.",
        ],
      ],
      [
        "Comparing the three types with an image",
        [
          "It may help to picture stem cells as 'students choosing a career path.'",
          "ES and iPS cells → can choose from many paths",
          "Somatic stem cells → the field is largely predetermined",
          "In other words: ES and iPS cells can become a wide range of cells, while somatic stem cells become cells related to specific tissues.",
        ],
      ],
      [
        "Can any stem cell be used in regenerative medicine?",
        [
          "This is a very important point. 'Being a stem cell' and 'having proven treatment effects' are separate issues. There are many kinds of stem cells, each with different properties.",
          "Even for the same type of stem cell, expected effects and safety differ depending on where the cells are collected, how they are cultured, how they are administered, and which disease they treat. Rather than assuming 'stem cells can cure disease,' it is important to check how far efficacy and safety have been confirmed in clinical research and trials for that specific treatment.",
          "In Japan, providing regenerative medicine involves procedures and reviews under laws designed to ensure safety.",
        ],
      ],
      [
        "Summary",
        [
          "There are many kinds of stem cells; the representative ones are ES cells, iPS cells, and somatic stem cells.",
          "ES cells → made from early embryos → pluripotent",
          "iPS cells → made by artificially resetting body cells → pluripotent like ES cells",
          "Somatic stem cells → already present in the body → differentiate into specific tissues and cells",
          "Each has its own characteristics, advantages, and challenges, and research continues across fields — not only regenerative medicine but also disease research and drug development.",
          "Rather than judging by the word 'stem cell' alone, it is important to know which type is used, how it is expected to work, and how much has actually been scientifically confirmed — that is the key to understanding regenerative medicine.",
        ],
      ],
    ],
    [
      "ES细胞由早期胚制备，具有多能性。",
      "iPS细胞由体细胞人工初始化制备，与ES细胞同样具有多能性。",
      "体性干细胞原本存在于体内，分化为特定组织和细胞。",
      "“是干细胞”与“治疗效果已被证明”是两回事。",
    ],
    [
      [
        "前言",
        [
          "很多人听到“干细胞”会想到iPS细胞或再生医学。实际上干细胞有好几种，各自在来源、能变成什么细胞、研究与应用目的上都有所不同。",
          "代表性的有三种：iPS细胞（诱导多能干细胞）、ES细胞（胚胎干细胞）和体性干细胞。本文将尽量通俗地讲解各自的特点与区别。",
        ],
      ],
      [
        "什么是干细胞？",
        [
          "简单说，干细胞是同时具备“增殖相同性质细胞的能力”和“变成其他种类细胞的能力”的细胞。后者称为“分化”。我们的身体中有神经细胞、肌肉细胞、血液细胞、皮肤细胞等各种细胞，可把干细胞理解为产生这些细胞的“源头细胞”。",
          "但并非所有干细胞都能变成任何细胞——能分化到什么程度因干细胞种类而异。",
        ],
      ],
      [
        "干细胞大致分三类",
        [
          "干细胞按性质和来源大致可分为以下三类。",
          "ES细胞和iPS细胞都称为多能性干细胞，能分化为多种细胞。而体性干细胞原本就存在于体内，参与各组织的维持与修复。",
        ],
        {
          headers: ["种类", "来源", "分化范围"],
          rows: [
            ["ES细胞", "胚（受精卵早期胚）", "非常广"],
            ["iPS细胞", "皮肤等体细胞人工重编程", "非常广"],
            ["体性干细胞", "存在于出生后的体内", "主要限于特定组织・细胞"],
          ],
        },
        0,
      ],
      [
        "① 什么是ES细胞？",
        [
          "ES细胞是Embryonic Stem Cell（胚胎干细胞）的缩写，由受精后早期胚中的细胞制备，具有可分化为各种细胞的“多能性”。",
          "它们能分化为神经细胞、心肌细胞、血液细胞、肝细胞等多种细胞，因此不仅用于再生医学，也用于疾病研究和新药开发。",
          "ES细胞的优点",
          "ES细胞最大的特点是分化为多种细胞的能力很强，因此长期作为补充失去细胞的“细胞来源”被研究。",
          "ES细胞的课题",
          "但由于ES细胞由胚制备，存在生命伦理问题。实际用于治疗时，还需解决移植细胞能否准确分化为目标细胞、能否确保安全性等课题。",
        ],
      ],
      [
        "② 什么是iPS细胞？",
        [
          "iPS细胞是Induced Pluripotent Stem Cell（诱导多能干细胞）的缩写。与ES细胞不同，它通过对皮肤等成熟体细胞施加特定因子，使细胞性质初始化（重编程）来制备。",
          "简单理解：皮肤细胞 → 人工“初始化” → iPS细胞 → 分化为神经、心肌、血液等细胞。",
          "与ES细胞一样具有多能性，是iPS细胞的最大特点。",
          "iPS细胞的优点",
          "iPS细胞的重要特点是有可能用患者本人的细胞制备。因此有望用于使用患者自身细胞的再生医学、再现疾病的“疾病模型”和新药研究，同时避免使用胚带来的伦理问题。",
          "iPS细胞的课题",
          "iPS细胞也有课题，如将其准确分化为目标细胞的技术、确保移植细胞安全性等。也就是说并非“有了iPS细胞什么都能治”，实际治疗需按疾病确认有效性和安全性。",
        ],
      ],
      [
        "③ 什么是体性干细胞？",
        [
          "体性干细胞是原本就存在于我们体内的干细胞，也称“成体干细胞”或“组织干细胞”。",
          "体性干细胞不像ES、iPS细胞那样能变成体内所有细胞，基本上只能分化为与所在组织相应的有限种类。代表有造血干细胞、神经干细胞、间充质干细胞等。",
          "造血干细胞",
          "主要存在于骨髓，制造红细胞、白细胞、血小板等血液细胞，承担持续造血的重要作用。",
          "神经干细胞",
          "神经干细胞具有分化为神经细胞、胶质细胞等神经系统细胞的能力。",
          "间充质干细胞",
          "间充质干细胞（MSC）存在于骨髓、脂肪组织等处，已知可分化为骨、软骨、脂肪等细胞，并能分泌多种生理活性物质，再生医学领域的研究正在推进。",
        ],
      ],
      [
        "iPS、ES、体性干细胞的区别",
        [
          "三类区别简单整理如下：",
          "ES细胞——“由早期胚制备、具有多能性的干细胞”",
          "iPS细胞——“将成人体细胞人工初始化制备的多能性干细胞”",
          "体性干细胞——“原本存在于体内、参与组织维持与修复的干细胞”",
        ],
      ],
      [
        "理解“多能性”与“分化”更易区分",
        [
          "理解干细胞的关键是“多能性”和“分化”两个词。",
          "什么是多能性？",
          "多能性指能分化为多种细胞的能力，ES细胞和iPS细胞是代表性的多能性干细胞。",
          "什么是分化？",
          "分化指细胞变为具有特定职责的细胞，如iPS细胞变为心肌细胞。体性干细胞的分化范围相对有限。",
        ],
      ],
      [
        "用比喻比较三种干细胞",
        [
          "可以把干细胞比喻为“选择出路的学生”。",
          "ES细胞・iPS细胞 → 可选出路很多",
          "体性干细胞 → 发展方向在一定程度上已定",
          "也就是说，ES、iPS细胞能成为广泛种类的细胞，体性干细胞只能成为与特定组织相关的细胞。",
        ],
      ],
      [
        "干细胞都能用于再生医学吗？",
        [
          "这一点非常重要。“是干细胞”与“治疗效果已被证明”是两回事。干细胞种类繁多，性质各异。",
          "即使是同一种干细胞，来源、培养方式、给药方法和治疗疾病不同，预期效果和安全性也不同。因此不能简单认为“是干细胞就能治病”，而应确认该治疗在临床研究或临床试验中有效性与安全性被验证到什么程度。",
          "在日本，实施再生医疗需履行基于安全性确保法律的手续与审查。",
        ],
      ],
      [
        "总结",
        [
          "干细胞种类多样，代表性的有ES细胞、iPS细胞和体性干细胞。",
          "ES细胞 → 由早期胚制备 → 具有多能性",
          "iPS细胞 → 将体细胞人工初始化制备 → 与ES细胞同样具有多能性",
          "体性干细胞 → 原本存在于体内 → 分化为特定组织和细胞",
          "它们各有特点、优点与课题，不仅在再生医学，也在疾病研究、新药开发等领域持续推进。",
          "不应只凭“干细胞”一词判断，而应了解使用哪种干细胞、预期通过何种机制起效、以及实际被科学验证到什么程度，这是理解再生医学的关键。",
        ],
      ],
    ],
  ),
  "doctor-regenerative-approaches": b(
    [
      "Regenerative medicine can be understood through three approaches: cell transplantation (replacing cells), tissue engineering (building tissue), and in vivo regeneration (drawing out the body's own power).",
      "It is not a simple mechanism where 'administered stem cells regrow a damaged organ.'",
      "Research-stage technology and established medical treatment must be distinguished.",
    ],
    [
      [
        "Introduction",
        [
          "Many people picture regenerative medicine as 'putting stem cells into the body to regrow lost tissue.' But that is not the whole picture.",
          "Broadly, it can be thought of as three approaches: 1. Replacing cells — cell transplantation; 2. Building tissue — tissue engineering; 3. Drawing out the body's own power — in vivo regeneration. In practice, treatments and research often combine these.",
        ],
      ],
      [
        "What is regenerative medicine?",
        [
          "Regenerative medicine aims to repair and restore the function of cells, tissues, and organs damaged by illness or injury.",
          "The human body already has mechanisms for repairing damaged tissue. A healing skin wound, a bone knitting after a fracture, hair and skin being newly produced — these are all part of the body's regenerative capacity.",
          "However, not all tissues regenerate equally. The brain, spinal cord, and heart have limited regenerative capacity and may not sufficiently replace damaged cells. Regenerative medicine studies how to apply the body's regenerative ability to medical care.",
        ],
      ],
      [
        "1. Replacing cells: cell transplantation",
        [
          "The most intuitive approach is putting cells themselves into the body.",
          "What does it involve?",
          "The patient's own cells, donor-derived cells, or cells produced from iPS cells are transplanted to the site to be treated — in effect, 'replenishing the missing cells from outside.' For example, research is underway to make target cells from iPS cells and transplant them to replace lost cell function.",
          "Key points of cell transplantation",
          "Putting cells in does not by itself regenerate tissue. Transplanted cells must survive, settle where they are needed, exchange signals appropriately with surrounding cells, and function as the required cells. That is why 'which cells, delivered where, and how' matters.",
        ],
      ],
      [
        "2. Building tissue itself: tissue engineering",
        [
          "The second approach is tissue engineering. Instead of transplanting cells alone, it combines cells with a scaffold and bioactive substances to reconstruct lost tissue.",
          "What is a 'scaffold'?",
          "A scaffold is like a foundation on which cells can multiply and line up in the right shape. In the body, a structure called the extracellular matrix (ECM) surrounds cells and influences their shape, behavior, and growth. Tissue engineering studies how to recreate this environment artificially.",
          "For example: cells → proliferate and differentiate on the scaffold → cells form tissue together → a functioning tissue is built.",
          "Research is also progressing on building complex tissues using techniques such as 3D bioprinting. In other words, tissue engineering is the idea of 'designing the environment in which cells can build tissue,' not just 'putting cells in.'",
        ],
      ],
      [
        "3. Harnessing the body's power: in vivo regeneration",
        [
          "The third approach uses the cells and repair capacity already inside the body — not 'putting cells in from outside' but 'getting the body's own cells to work.'",
          "For example, research is underway to deliver special materials or bioactive substances to a damaged site, recruit the body's stem cells and progenitor cells there, stimulate their activity, and promote tissue repair and regeneration.",
          "This concept is called in situ (in vivo) tissue regeneration. Research is examining approaches that use materials to gather the body's stem and progenitor cells at the damaged site to promote regeneration.",
        ],
      ],
      [
        "Comparing the three approaches",
        [
          "These three are not completely separate, though. For example, combining cells, a scaffold, and growth factors uses both cell transplantation and tissue engineering at once.",
        ],
        {
          headers: ["Approach", "Basic idea", "Image"],
          rows: [
            ["Cell transplantation", "Supply needed cells from outside", "'Replenish cells'"],
            ["Tissue engineering", "Combine cells with scaffolds to build tissue", "'Build tissue'"],
            ["In vivo regeneration", "Use cells and repair capacity already in the body", "'Draw out the body's own power'"],
          ],
        },
      ],
      [
        "'Putting stem cells in' does not equal regeneration",
        [
          "This is crucial for understanding regenerative medicine. It is not a simple mechanism where 'administering stem cells makes a damaged organ regrow.' Properties differ by cell type, and how administered cells actually behave must be studied for each treatment.",
          "In regenerative medicine, what matters is not only the cells themselves but also the environment around them, the exchange of information between cells, immune responses, growth factors, and the extracellular matrix. Research is therefore expanding from 'medicine that puts cells in' to 'medicine that designs the environment in which cells can work properly.'",
        ],
      ],
      [
        "The future of regenerative medicine",
        [
          "The ultimate goal is not just to suppress symptoms but to repair and restore the function of lost cells and tissues. To that end, various methods are being studied: supplying needed cells, creating environments where cells can build tissue, and drawing out the patient's own regenerative capacity.",
          "At the same time, research-stage technologies and established medical treatments must be distinguished. Much of regenerative medicine is still in research and clinical development, and not every method has established efficacy and long-term safety.",
        ],
      ],
      [
        "Summary",
        [
          "Regenerative medicine rests on three broad ideas:",
          "1. Cell transplantation → supply needed cells from outside",
          "2. Tissue engineering → use cells and scaffolds to build tissue",
          "3. In vivo regeneration → draw out the body's own repair and regenerative capacity",
          "In other words, regenerative medicine is not only about 'putting cells in.' It supplies cells, builds tissue, and harnesses the body's own power — combining these approaches to restore the function of damaged tissues and organs.",
        ],
      ],
    ],
    [
      "再生医学可从补充细胞的“细胞移植”、构建组织的“组织工程”、激发身体力量的“体内再生”三种路径理解。",
      "“注入干细胞＝受损器官焕然新生”并非这么简单的机制。",
      "需区分研究阶段的技术与已确立的医疗。",
    ],
    [
      [
        "前言",
        [
          "很多人对再生医学的印象是“把干细胞放入体内，让失去的组织再生”。但再生医学的思路不止于此。",
          "大致可分为三种路径：① 补充细胞——细胞移植；② 构建组织——组织工程；③ 激发身体自身力量——体内再生。实际中也有将这些组合起来的治疗与研究。",
        ],
      ],
      [
        "什么是再生医学？",
        [
          "再生医学以修复、恢复因疾病或外伤受损的细胞、组织与器官的功能为目标。",
          "人体本来就具备修复受损组织的机制。如皮肤伤口愈合、骨折愈合、头发和皮肤新生等，都是身体再生修复能力的一部分。",
          "但并非所有组织都能同样再生。脑、脊髓、心脏等再生能力有限，可能无法充分补充受损细胞。因此人们开始研究将身体的再生能力应用于医疗的“再生医学”。",
        ],
      ],
      [
        "① 补充细胞“细胞移植”",
        [
          "最容易理解的是把细胞本身补入体内的方法。",
          "具体做什么？",
          "将患者自身细胞、他人来源细胞或iPS细胞制备的细胞移植到治疗部位，相当于“从外部补充不足的细胞”。例如正在研究用iPS细胞制备目标细胞、移植以补充失去细胞功能的方法。",
          "细胞移植的要点",
          "仅仅注入细胞并不意味着组织会再生。移植的细胞需要存活、定植到所需部位、与周围细胞正常交换信息、并作为所需细胞发挥功能。因此“用什么细胞、送到哪里、如何送达”很重要。",
        ],
      ],
      [
        "② 构建组织本身“组织工程”",
        [
          "第二种是组织工程（Tissue Engineering），不只移植细胞，而是将细胞＋支架＋生理活性物质组合，重建失去的组织。",
          "什么是“支架”？",
          "支架是细胞增殖、按正确形状排列的“地基”。体内细胞周围存在细胞外基质（ECM）结构，影响细胞的形态、功能与增殖。组织工程研究人工再现这种环境。",
          "例如：细胞 → 在支架上增殖分化 → 细胞相互形成组织 → 构建出功能组织。",
          "利用3D生物打印等构建复杂组织的研究也在推进。换言之，组织工程不是“放入细胞”，而是“设计让细胞能构建组织的环境”的思路。",
        ],
      ],
      [
        "③ 发挥身体力量“体内再生”",
        [
          "第三种是利用体内已有的细胞和修复能力——不是“从外部放入细胞”，而是“让自己体内的细胞发挥作用”。",
          "例如正在研究将特殊材料或生理活性物质送达受损部位，召集体内的干细胞、前体细胞，促进其发挥作用，从而促进组织修复与再生。",
          "这种思路称为原位（体内）组织再生。研究中正在探讨利用材料将体内干细胞、前体细胞聚集到损伤部位以促进组织再生的方法。",
        ],
      ],
      [
        "三种路径的比较",
        [
          "但这三者并非完全独立。例如将细胞、支架与生长因子组合，同时运用了细胞移植与组织工程两种思路。",
        ],
        {
          headers: ["路径", "基本思路", "印象"],
          rows: [
            ["细胞移植", "从外部补充所需细胞", "“补充细胞”"],
            ["组织工程", "将细胞与支架等组合构建组织", "“构建组织”"],
            ["体内再生", "利用体内已有的细胞与修复能力", "“激发身体的力量”"],
          ],
        },
      ],
      [
        "“注入干细胞＝再生”并不成立",
        [
          "这对理解再生医学非常重要。“注入干细胞，受损器官就会焕然新生”并非这么简单的机制。不同细胞种类性质不同，注入的细胞实际如何起作用也需按治疗分别研究。",
          "再生医学中重要的不仅是细胞本身，还有细胞所处的环境、细胞间信息交换、免疫反应、生长因子和细胞外基质。因此再生医学正从“注入细胞的医疗”扩展到“设计让细胞正常发挥作用的环境的医疗”。",
        ],
      ],
      [
        "再生医学的未来",
        [
          "再生医学的最终目标不只是抑制症状，而是修复、恢复失去细胞和组织的功能。为此正在研究补充所需细胞、营造细胞构建组织的环境、激发患者自身再生能力等多种方法。",
          "另一方面，研究阶段的技术与已确立的医疗必须区分。再生医学的许多方法仍在研究与临床开发中，并非所有方法都已确立充分的有效性和长期安全性。",
        ],
      ],
      [
        "总结",
        [
          "再生医学大致有三种思路：",
          "① 细胞移植 → 从外部补充所需细胞",
          "② 组织工程 → 利用细胞与支架构建组织",
          "③ 体内再生 → 激发身体自身的修复与再生能力",
          "换言之，再生医学不只是“注入细胞”，而是补充细胞、构建组织、发挥身体自身力量，将这些组合起来以恢复受损组织和器官的功能——这就是再生医学的大方向。",
        ],
      ],
    ],
  ),
};
