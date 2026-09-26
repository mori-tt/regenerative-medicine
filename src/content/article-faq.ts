// 記事別FAQ。「よくある質問」セクションとして記事末尾に追加するデータ。
// 主要記事に対して、読者が実際に疑問を持ちやすい点をQ&A形式で補完する。
// 医療情報のため、断定表現・効果保証表現は使わず、段階や条件を明示する。

import type { SiteLocale } from "./locales";

type FaqEntry = {
  ja: [string, string][];
  en: [string, string][];
  zh: [string, string][];
};

const faqs: Record<string, FaqEntry> = {
  "what-is-stem-cell": {
    ja: [
      ["幹細胞と普通の細胞はどう違う？", "自分と同じ細胞を作る「自己複製」と、別の細胞になる「分化」の2つが揃うのが特徴です。皮膚や血液の細胞は、一度役割が決まるとそのまま働くだけのものが多いです。"],
      ["幹細胞を使った治療はもう始まっている？", "骨髄移植（造血幹細胞移植）は長い実績があります。一方で、多くの「幹細胞治療」はまだ研究段階のものが多く、承認済みか研究対象かを分けて確認することが大切です。"],
      ["説明資料に出てくる「幹細胞」は何を指す？", "由来（骨髄・脂肪・臍帯など）や培養の有無で意味が変わります。資料に「どの細胞か」「どこで作ったか」が書かれているかを確認すると、読み違いを防げます。"],
    ],
    en: [
      ["How are stem cells different from other cells?", "They combine self-renewal (copying themselves) with differentiation (becoming other cell types). Most mature cells can no longer do both."],
      ["Are stem-cell treatments already in use?", "Bone-marrow transplantation has a long track record, but many offerings called “stem-cell therapy” remain research-stage — check whether each is approved or investigational."],
      ["What does “stem cell” in a brochure mean?", "It depends on source (bone marrow, fat, cord) and whether the cells are cultured. Look for wording that specifies the cell type and where it was produced."],
    ],
    zh: [
      ["干细胞和普通细胞有什么区别？", "同时具备自我复制和分化成其他细胞两种能力是干细胞的特征，而成熟细胞大多不再具备。",],
      ["干细胞治疗已经开始了吗？", "骨髓移植已有很长历史，但许多被称为“干细胞治疗”的服务仍处于研究阶段，请分别确认是否已获批。",],
      ["资料中的“干细胞”指什么？", "因来源（骨髓、脂肪、脐带等）和是否培养而异，请确认资料中是否写明细胞种类和制备地点。",],
    ],
  },
  "what-is-regenerative-medicine": {
    ja: [
      ["再生医療と従来の治療はどう違う？", "薬や手術で症状を抑えるのとは別に、細胞や組織を使って壊れた部分を「再生」させることを目指す考え方です。ただし実現の度合いは部位や病気によって違います。"],
      ["「再生医療」と書かれているものは全部同じ？", "いいえ。承認済みの製品、届出済みの提供、研究中の治療法が混在しています。同じ名前でも根拠と段階が違うため、個別に確認する必要があります。"],
      ["保険は効く？", "承認された再生医療等製品は保険適用のものもありますが、自由診療での提供は全額自己負担になるのが一般的です。"],
    ],
    en: [
      ["How does regenerative medicine differ from conventional care?", "Instead of only managing symptoms, it aims to repair damaged tissue using cells — but how far that goal is realized varies by organ and disease."],
      ["Is everything called “regenerative medicine” the same?", "No. Approved products, filed offerings, and research-stage therapies coexist under the same name, so each needs to be checked individually."],
      ["Is it covered by insurance?", "Some approved regenerative products are covered, but care offered privately is usually fully self-paid."],
    ],
    zh: [
      ["再生医学与常规治疗有何不同？", "不同于仅靠药物或手术控制症状，它的目标是利用细胞等修复受损部分，但实现程度因部位和疾病而异。"],
      ["标着“再生医疗”的都一样吗？", "不一样。获批产品、已申报服务和研究阶段疗法并存，需逐项确认依据和阶段。"],
      ["医保能报销吗？", "部分获批的再生医疗产品可报销，但自费诊疗一般全额自付。"],
    ],
  },
  "stem-cell-treatment-contents": {
    ja: [
      ["「幹細胞治療」で何が体に入る？", "生きた細胞そのもの、培養して増やした細胞、または細胞の分泌物（エクソソームなど）の場合があります。資料に成分名が書かれているか確認しましょう。"],
      ["細胞はどうやって作られる？", "自分の細胞を採取して培養する場合と、他人由来の細胞を使う場合があります。採取元・培養期間・品質確認の説明を求めるのが基本です。"],
      ["量や濃度は分かる？", "細胞数や生着率の記載は施設によって異なります。書面で「何を・どのくらい入れるか」を確認しておくと比較しやすくなります。"],
    ],
    en: [
      ["What actually goes into the body?", "It may be living cells, cells expanded by culture, or only cell-derived products such as exosomes — check whether materials name the contents."],
      ["How are the cells made?", "Either collected from you and cultured, or taken from a donor. Ask about the source, culture period, and quality checks."],
      ["Is dose or concentration disclosed?", "Practices vary by facility — get in writing what is administered and in what amount."],
    ],
    zh: [
      ["“干细胞治疗”到底输入了什么？", "可能是活细胞、培养扩增的细胞，或细胞分泌物（如外泌体），请确认资料中是否写明成分名称。"],
      ["细胞如何制备？", "可能是自体采集培养，也可能是他人来源，请确认采集来源、培养周期和品质确认说明。"],
      ["剂量和浓度会写明吗？", "因机构而异，请以书面确认输入内容和数量，便于比较。"],
    ],
  },
  "stem-cell-efficacy-evidence": {
    ja: [
      ["効果はどこまで確かめられている？", "治療の種類や対象疾患で大きく違います。造血幹細胞移植など確立したものもあれば、まだ小規模な報告しかないものもあります。"],
      ["「研究で効果があった」と「自分にも効く」は違う？", "はい。動物実験や少数の観察研究の結果は、あなたへの効果を直接示すものではありません。どの段階の報告かを確認してください。"],
      ["効果の根拠を確認するには？", "施設に「この効果の説明はどの研究に基づくか」と尋ね、jRCTや論文でその段階を確認するのが確実です。"],
    ],
    en: [
      ["How well established are the benefits?", "It varies widely by treatment and disease — some uses are established, others rest on small reports only."],
      ["Is “worked in research” the same as “works for me”?", "No. Animal studies or small observations don't directly show benefit for you — check which stage the report belongs to."],
      ["How can I check the evidence?", "Ask the provider which study the claim is based on, then look it up in registries like jRCT or the original papers."],
    ],
    zh: [
      ["疗效被证实到什么程度？", "因治疗种类和病种差异很大——有的是确立的疗法，有的只有小规模报告。"],
      ["“研究有效”等于“对我有效”吗？", "不等于。动物实验或小规模观察结果并不能直接证明对你有效，请确认处于哪个阶段。"],
      ["如何核查疗效依据？", "向机构询问该说法基于哪项研究，再到jRCT或原始论文中确认。"],
    ],
  },
  "risks-and-safety": {
    ja: [
      ["どんなリスクがある？", "細胞そのものの性質・投与経路・培養・感染・免疫の複数の層で考えます。一つだけ説明されていても、他の層が抜けていることがあります。"],
      ["「安全です」と言われたら？", "絶対的な安全はありません。「どのリスクをどう確認したか」「起きた場合の対応」を確認してください。"],
      ["副作用が出たらどうする？", "施設の連絡先と対応手順を事前に確認しましょう。重い場合は医療機関・保健所・PMDAなどへの相談も選択肢です。"],
    ],
    en: [
      ["What risks exist?", "Layers include the cells, the delivery route, culture, infection, and immunity — an explanation covering only one layer is incomplete."],
      ["What if I'm told it's “safe”?", "No intervention is absolutely safe. Ask which risks were checked and what happens if they occur."],
      ["What if a side effect appears?", "Confirm the clinic's contact and response plan in advance; clinics, health offices, and PMDA are escalation routes."],
    ],
    zh: [
      ["有哪些风险？", "风险分多个层面：细胞本身、给药途径、培养、感染、免疫等，仅说明一层并不完整。"],
      ["对方说“很安全”怎么办？", "没有绝对安全，请确认核查了哪些风险、发生时的应对方式。"],
      ["出现副作用怎么办？", "提前确认机构的联络方式和应对步骤，也可咨询医疗机构、保健所或PMDA。"],
    ],
  },
  "iv-stem-cell-safety": {
    ja: [
      ["点滴は安全？", "起こりうる事象として微栓子・発熱・肝負担などの検討が続いています。「必ず起きる」ものではありませんが、起こりうる事象としての監視が必要です。"],
      ["投与前に何を確認する？", "持病・使用中の薬・アレルギーの申告は必須です。点滴の速度・観察時間・緊急時の体制も確認してください。"],
      ["局所投与と何が違う？", "点滴は全身に広がる一方、局所投与は目的部位に集中します。どちらが合うかは目的とリスクの比較で決まります。"],
    ],
    en: [
      ["Is IV administration safe?", "Possible events such as microemboli, fever, and liver burden are still being studied — not certain to occur, but worth monitoring."],
      ["What should be confirmed before infusion?", "Disclose conditions, medications, and allergies; also confirm infusion speed, observation time, and emergency arrangements."],
      ["How does it differ from local injection?", "IV spreads cells body-wide, while local delivery concentrates them at the target site — the right choice depends on goals and risks."],
    ],
    zh: [
      ["点滴安全吗？", "微栓塞、发热、肝负担等可能性仍在研究中——并非必然发生，但需要监测。"],
      ["输注前要确认什么？", "必须申报既往病史、用药和过敏史，并确认输注速度、观察时间和应急体制。"],
      ["和局部给药有何区别？", "点滴使细胞扩散全身，局部给药集中于目标部位，需根据目的与风险比较选择。"],
    ],
  },
  "stem-cell-administration-routes": {
    ja: [
      ["経路はなぜ大事？", "届く場所と割合が変わります。全身に届く点滴、目的部位に届く局所投与、血流に乗る動脈投与では働き方が違います。"],
      ["どの経路がいい？", "目的とする病気・部位で最適が変わります。資料に「この経路を選ぶ理由」が書かれているか確認するとよいです。"],
      ["リスクも変わる？", "はい。投与経路ごとに起こりうる事象が違うため、経路別のリスク説明を確認してください。"],
    ],
    en: [
      ["Why does the route matter?", "It changes where cells go and in what proportion — IV, local injection, and arterial delivery each distribute differently."],
      ["Which route is best?", "It depends on the disease and target site; check whether materials explain why a particular route was chosen."],
      ["Does the risk change too?", "Yes — each route carries different possible events, so route-specific risk explanations matter."],
    ],
    zh: [
      ["为什么给药途径重要？", "途径改变细胞到达的部位和比例——点滴、局部注射、动脉给药的分布不同。"],
      ["哪种途径最好？", "因病种和目标部位而异，请确认资料是否说明了选择该途径的理由。"],
      ["风险也不同吗？", "是的，各途径可能的事件不同，请确认按途径说明的风险。"],
    ],
  },
  "stem-cell-biodistribution": {
    ja: [
      ["細胞はどこへ行く？", "投与経路や細胞の種類で異なります。肺・肝臓などに集まりやすいことが研究で示されていますが、届く＝そこで働くではありません。"],
      ["脳に届く？", "血液脳関門（BBB）を越えるかは大きな論点です。多くの報告は動物実験段階で、人での確かさは別に確認が必要です。"],
      ["行き先が分かると何が分かる？", "期待される働きと起こりうるリスクの両方の手がかりになります。「どこに集まるか」のデータは説明資料で確認しましょう。"],
    ],
    en: [
      ["Where do the cells go?", "It varies by route and cell type. Studies show accumulation in lung and liver, but reaching a site is not the same as acting there."],
      ["Can they reach the brain?", "Crossing the blood–brain barrier is a major open question — much of the data is preclinical, and human evidence needs separate confirmation."],
      ["Why does distribution matter?", "It informs both expected action and possible risk — look for distribution data in the materials."],
    ],
    zh: [
      ["细胞去往哪里？", "因途径和细胞类型而异，研究显示易聚集于肺、肝等器官，但到达不等于起作用。"],
      ["能到达大脑吗？", "能否跨越血脑屏障是重要争议点，目前多为动物实验数据，人体证据需另行确认。"],
      ["了解去向有什么用？", "它能提示预期作用和可能风险，请在资料中确认“聚集在何处”的数据。"],
    ],
  },
  "ips-cells-explained": {
    ja: [
      ["iPS細胞はどう作る？", "皮膚や血液の細胞に特定の因子を導入して、多能性の状態に戻す技術です。作製には時間と品質管理が必要です。"],
      ["もう治療に使われている？", "網膜・脊髄などで臨床研究が進んでいますが、広く使える段階ではありません。「研究段階」と「承認済み」を区別して理解しましょう。"],
      ["自分の細胞から作れる？", "理論上は可能ですが、現在は主にドナーの細胞ストックを使う方向で研究が進んでいます。自家での作製はコストと時間の問題があります。"],
    ],
    en: [
      ["How are iPS cells made?", "By introducing specific factors into skin or blood cells to return them to a pluripotent state — a process that takes time and quality control."],
      ["Are they already used in treatment?", "Clinical research is advancing for retina and spinal cord, but broad clinical use isn't here yet — distinguish research from approval."],
      ["Can they be made from my own cells?", "In principle yes, but current research mostly uses donor cell banks; making them from your own cells raises cost and time issues."],
    ],
    zh: [
      ["iPS细胞如何制备？", "向皮肤或血液细胞导入特定因子，使其回到多能状态，制备需要时间并依赖品质管理。"],
      ["已用于治疗了吗？", "视网膜、脊髓等的临床研究在推进，但尚未达到广泛应用阶段，请区分“研究阶段”与“已获批”。"],
      ["可以用自己的细胞做吗？", "理论上可以，但当前研究主要使用供体细胞库，自体制备存在成本和时间问题。"],
    ],
  },
  "mesenchymal-basics": {
    ja: [
      ["MSCとは何？", "骨髄・脂肪・臍帯などに由来する体性幹細胞です。再生医療や自由診療で最も多く用いられている種類の一つです。"],
      ["なぜよく使われる？", "採取が比較的容易で、免疫を抑える働きが期待されるためです。ただし効果の確かさは疾患ごとに異なります。"],
      ["MSCなら何でも治る？", "いいえ。MSCでも効果が確かめられているのは一部の疾患です。「MSCだから効く」と短絡せず、疾患ごとのエビデンスを確認しましょう。"],
    ],
    en: [
      ["What is an MSC?", "A somatic stem cell derived from bone marrow, fat, or umbilical cord — one of the most-used types in regenerative medicine and private care."],
      ["Why is it so widely used?", "It's relatively easy to collect and is expected to modulate immunity — though how well benefits are established varies by disease."],
      ["Do MSCs treat everything?", "No — confirmed benefits cover only some conditions. Check disease-specific evidence rather than assuming MSCs work everywhere."],
    ],
    zh: [
      ["MSC是什么？", "来源于骨髓、脂肪、脐带等的体性干细胞，是再生医疗与自费诊疗中最常用的类型之一。"],
      ["为什么用得最多？", "采集相对容易，且被认为有免疫调节作用，但疗效的确凿程度因病而异。"],
      ["MSC什么都能治吗？", "不能，MSC被证实的疗效只覆盖部分疾病，请不要凭“是MSC”就直接相信。"],
    ],
  },
  "stemcell-exosome-prp": {
    ja: [
      ["3つの違いは？", "幹細胞は生きた細胞、エクソソームは細胞の分泌成分、PRPは自分の血液由来の成分です。入れるものが違うため、効果の説明も別々に確認が必要です。"],
      ["どれが安全？", "一律には比べられません。投与方法・由来・品質管理でリスクが変わるため、それぞれの説明を確認してください。"],
      ["エクソソームは細胞治療？", "細胞そのものを入れないため厳密には「細胞治療」とは別です。法律上の届出の対象かは提供形態によります。"],
    ],
    en: [
      ["How do the three differ?", "Stem cells are living cells, exosomes are cell-derived products, and PRP is derived from your own blood — each needs its own evidence check."],
      ["Which is safest?", "Not directly comparable — risk depends on route, source, and quality control for each."],
      ["Are exosomes cell therapy?", "Strictly no, since no cells are administered; whether filings apply depends on how they're provided."],
    ],
    zh: [
      ["三者有什么区别？", "干细胞是活细胞，外泌体是细胞分泌成分，PRP来自自体血液——输入的东西不同，疗效说明也需分别确认。"],
      ["哪种更安全？", "无法一概而论，风险随给药方式、来源、质量管理而异，请分别确认。"],
      ["外泌体算细胞治疗吗？", "严格来说不是，因为不输入细胞本身；是否需要申报取决于提供方式。"],
    ],
  },
  "stem-cell-antiaging-evidence": {
    ja: [
      ["若返りに効く？", "研究段階の報告はありますが、「確かな効果」として確立したものではありません。動物実験や小規模研究と臨床の差を分けて考えてください。"],
      ["美容目的で安全？", "届出の有無・効果の根拠・リスク説明を書面で確認するまで判断を保留するのが安全です。"],
      ["どう見分ける？", "「何が研究で示されたか」「臨床で確かめられたか」を質問し、答えが曖昧な場合は慎重になりましょう。"],
    ],
    en: [
      ["Does it rejuvenate?", "Research-stage reports exist, but nothing is established as proven benefit — keep animal/small studies apart from clinical results."],
      ["Is it safe for cosmetic use?", "Wait until you've confirmed filing status, evidence, and risk explanations in writing."],
      ["How do I spot the difference?", "Ask what was shown in research versus clinically — vague answers are a reason to be cautious."],
    ],
    zh: [
      ["能抗衰老吗？", "虽有研究阶段的报告，但尚无确立的疗效，请区分动物实验、小规模研究与临床证据。"],
      ["美容用途安全吗？", "在以书面确认申报、依据和风险说明之前，请暂缓决定。"],
      ["如何辨别？", "询问“研究中发现了什么”“临床上证实了什么”，回答含糊时应保持谨慎。"],
    ],
  },
  "insurance-care": {
    ja: [
      ["保険は効く？", "承認された製品や先進医療では一部保険が使える場合がありますが、自由診療の提供は全額自己負担が一般的です。"],
      ["高額療養費は使える？", "保険診療の範囲でのみ適用されます。自由診療分は対象外になることが多いため、契約前に確認しましょう。"],
      ["医療費控除は？", "治療目的の支出は対象になりうる場合があります。領収書の保管と確定申告の確認をしてください。"],
    ],
    en: [
      ["Is it covered by insurance?", "Approved products and advanced care may be partly covered, but private care is generally fully self-paid."],
      ["Does the high-cost cap apply?", "It applies only to insured care — private-care portions are usually excluded, so check before signing."],
      ["Can I deduct the cost?", "Treatment expenses may qualify for the medical-expense deduction — keep receipts and confirm at tax filing."],
    ],
    zh: [
      ["能走医保吗？", "获批产品和先进医疗可能部分报销，但自费诊疗一般全额自付。"],
      ["高额疗养费能用吗？", "仅适用于医保范围内，自费部分通常不在对象内，签约前请确认。"],
      ["医疗费可以抵扣吗？", "治疗性支出可能符合条件，请保留收据并在申报时确认。"],
    ],
  },
  "cost-and-insurance": {
    ja: [
      ["費用はどれくらい？", "細胞の種類・採取・培養・投与・経過観察で変わり、数百万円になることもあります。内訳を書面で確認するのが基本です。"],
      ["分割はできる？", "施設によっては分割やローンがありますが、契約条件（利率・解除条件）をよく確認してください。"],
      ["途中でやめられる？", "契約解除の条件は施設ごとに異なります。開始前に「途中でやめた場合の返金」を確認しておくと安心です。"],
    ],
    en: [
      ["How much does it cost?", "It depends on cell type, collection, culture, administration, and follow-up — sometimes millions of yen. Get the breakdown in writing."],
      ["Can I pay in installments?", "Some clinics offer plans or loans — check the terms, interest, and cancellation conditions carefully."],
      ["Can I stop partway?", "Cancellation conditions differ by clinic — confirm refund rules before starting."],
    ],
    zh: [
      ["费用大概多少？", "因细胞种类、采集、培养、给药、随访而异，可能达数百万日元，请以书面确认明细。"],
      ["可以分期吗？", "部分机构提供分期或贷款，但请仔细确认利率和解除条款。"],
      ["中途可以停止吗？", "解除条件因机构而异，开始前请确认中途停止时的退款规定。"],
    ],
  },
  "hospital-choice": {
    ja: [
      ["クリニック選びで何を見る？", "届出の有無・説明の丁寧さ・リスク説明・費用の透明性・相談への姿勢がポイントです。症例写真だけでは判断できません。"],
      ["届出があれば安心？", "届出は手続きの確認であり、効果の保証ではありません。効果の根拠とリスク説明は別に確認してください。"],
      ["遠い施設は？", "通院の負担・緊急時の対応・経過観察の方法を事前に確認しておくと、後の負担が変わります。"],
    ],
    en: [
      ["What should I look for in a clinic?", "Filing status, thorough explanation, risk disclosure, transparent fees, and responsiveness — not before/after photos alone."],
      ["Does a filed plan mean it's safe?", "No — filing is a procedural check, not proof of efficacy. Confirm the evidence and risk explanation separately."],
      ["What about distant clinics?", "Check the burden of travel, emergency arrangements, and follow-up methods in advance."],
    ],
    zh: [
      ["选择诊所看什么？", "申报情况、说明是否充分、风险说明、费用透明度、咨询态度是重点，不能只看病例照片。"],
      ["申报了就放心吗？", "申报只是程序确认，不等于疗效保证，请另行确认疗效依据和风险说明。"],
      ["远距离机构呢？", "请提前确认复诊负担、应急处理和随访方式，这会影响后续负担。"],
    ],
  },
  "questions-before-treatment": {
    ja: [
      ["最初に何を聞く？", "「どの細胞を」「どこから採るか」「届出の有無」「効果の根拠」「リスクと対応」の5点は必須です。"],
      ["説明が難しすぎる？", "分からない言葉はその場で聞き返すのが安全です。説明を急がせる雰囲気がある場合は一度保留にしましょう。"],
      ["セカンドオピニオンは？", "別の医療機関に意見を求めることは正当な選択です。説明を受けた資料を持参すると比較しやすくなります。"],
    ],
    en: [
      ["What should I ask first?", "Which cells, from what source, whether a plan is filed, what the evidence is, and what the risks and response plan are."],
      ["What if the explanation is too complex?", "Ask again on the spot — if you feel rushed, pause the decision."],
      ["Should I get a second opinion?", "It's a legitimate choice — bring the materials you received for comparison."],
    ],
    zh: [
      ["首先该问什么？", "使用哪种细胞、采集来源、申报情况、疗效依据、风险与应对——这5点是必问项。"],
      ["说明太复杂听不懂？", "当场追问更安全，若感觉被催促决定，请先暂缓。"],
      ["需要第二意见吗？", "寻求其他机构意见是正当选择，带上已收到的资料便于比较。"],
    ],
  },
  "clinical-trials-guide": {
    ja: [
      ["治験と臨床研究の違いは？", "治験は薬の承認を目指す試験、臨床研究は治療法や知見を明らかにする研究全般を指します。目的とルールが違います。"],
      ["参加するメリットは？", "新しい治療に触れる機会と、経過観察が丁寧になる点があります。ただし効果は保証されません。"],
      ["途中でやめられる？", "はい。治験・臨床研究はいつでも同意を撤回でき、不参加・中止を理由に不利益を受けることはありません。"],
    ],
    en: [
      ["How do trials differ from clinical research?", "Trials aim at drug approval; clinical research is broader, covering studies of therapies and knowledge. Goals and rules differ."],
      ["What are the benefits of joining?", "Access to new treatments and careful monitoring — though benefit isn't guaranteed."],
      ["Can I withdraw?", "Yes — consent can be withdrawn at any time without penalty."],
    ],
    zh: [
      ["临床试验和临床研究有何区别？", "临床试验以药品获批为目标，临床研究是阐明疗法和知识的总称，目的和规则不同。"],
      ["参加有什么好处？", "可以接触新疗法并获得细致随访，但疗效不被保证。"],
      ["中途能退出吗？", "可以，任何时候都能撤回同意，不会因退出受到不利影响。"],
    ],
  },
  "five-points-before-treatment": {
    ja: [
      ["5つの確認点は？", "細胞の種類・由来、提供計画の届出、効果の根拠、リスクと対応、費用と契約条件の5点です。"],
      ["契約前に一番大事なのは？", "書面での確認です。口頭の説明だけでは後で食い違うことがあるため、要点を書面に残してもらいましょう。"],
      ["迷ったら？", "一度保留にして、消費生活センターや別の医療機関に相談するのが安全です。"],
    ],
    en: [
      ["What are the five checks?", "Cell type and source, filing status, evidence for benefit, risks and response plan, and cost and contract terms."],
      ["What matters most before signing?", "Getting it in writing — verbal explanations alone can lead to disputes later."],
      ["What if I'm unsure?", "Pause and consult a consumer center or another medical institution."],
    ],
    zh: [
      ["五个确认点是什么？", "细胞种类与来源、申报情况、疗效依据、风险与应对、费用与合同条款。"],
      ["签约前最重要的是什么？", "书面确认——口头说明日后可能产生分歧，请保留要点书面记录。"],
      ["犹豫时怎么办？", "先暂缓，咨询消费者生活中心或其他医疗机构更安全。"],
    ],
  },
  "autologous-allogeneic": {
    ja: [
      ["自家と他家の違いは？", "自分の細胞を使うか、他人の細胞を使うかの違いです。自家は拒絶の懸念が少なく、他家はすぐ使える場合があります。"],
      ["どちらがいい？", "病気・タイミング・施設の体制で変わります。どちらが使われるかは資料や説明で確認しましょう。"],
      ["他家でも安全？", "感染症検査やHLAの確認などの対策が前提です。対策が説明されていれば検討の材料になります。"],
    ],
    en: [
      ["What's the difference?", "Autologous uses your own cells; allogeneic uses a donor's. Autologous lowers rejection risk; donor cells may be ready sooner."],
      ["Which is better?", "It depends on the disease, timing, and facility — confirm which is being offered."],
      ["Are donor cells safe?", "They require infection screening and HLA checks — look for those safeguards in the explanation."],
    ],
    zh: [
      ["自体和异体有什么区别？", "自体用自己的细胞，异体用供体细胞。自体排斥风险较低，异体可能立即可用。"],
      ["哪种更好？", "因病种、时机和机构条件而异，请确认实际使用哪一种。"],
      ["异体安全吗？", "前提是感染筛查和HLA匹配等对策，若说明中有这些措施可作为参考。"],
    ],
  },
  "adipose-stem": {
    ja: [
      ["脂肪由来の利点は？", "採取が比較的容易で量も取りやすい点です。ただし細胞の質は個人差があります。"],
      ["美容でよく使われるのはなぜ？", "脂肪が採取しやすく、体の一部を使えるためです。ただし「使いやすい」ことと「効果が確か」は別です。"],
      ["採取に痛みは？", "局所麻酔で採取しますが、部位や量で負担が変わります。採取の説明は施設に確認してください。"],
    ],
    en: [
      ["What's the advantage of fat-derived cells?", "Collection is relatively easy and yields usable quantities — though cell quality varies by person."],
      ["Why is it common in aesthetics?", "Fat is easy to harvest and uses your own tissue — but ease of use isn't proof of efficacy."],
      ["Does collection hurt?", "Local anesthesia is used, but burden varies by site and amount — confirm the details."],
    ],
    zh: [
      ["脂肪来源的优点？", "采集相对容易、可获得量较多，但细胞质量因人而异。"],
      ["为什么美容领域常用？", "脂肪易采集且为自体组织——但“好用”不等于“疗效确凿”。"],
      ["采集会疼吗？", "采用局部麻醉，但部位和采集量会影响负担，请向机构确认。"],
    ],
  },
  "stem-cell-survival": {
    ja: [
      ["細胞はどのくらい残る？", "数週間から数か月とされる研究が多く、永続的に残るとは限りません。定着期間の説明を確認しましょう。"],
      ["残らないと効果はない？", "「残ること」と「働くこと」は別です。分泌する物質で働く場合、細胞が消えても影響が残ると考えられています。"],
      ["繰り返し必要？", "定着が短い場合は繰り返し投与が想定されることがあります。費用と負担の見通しに関わるため、事前に確認を。"],
    ],
    en: [
      ["How long do the cells persist?", "Studies suggest weeks to months rather than permanent persistence — confirm what's claimed."],
      ["If they don't persist, is there no effect?", "Persistence and action are separate — effects may come via secreted substances even after cells fade."],
      ["Are repeat doses needed?", "Short persistence may imply repeat dosing — check in advance since it affects cost and burden."],
    ],
    zh: [
      ["细胞能存活多久？", "多数研究认为数周到数月，未必永久存留，请确认关于定着期的说明。"],
      ["不留存就没效果吗？", "“留存”和“起作用”是两回事——通过分泌物质起作用的观点下，细胞消失后仍可能有影响。"],
      ["需要反复给药吗？", "若定着期短可能需要反复给药，涉及费用和负担，请提前确认。"],
    ],
  },
};

export function faqSectionsFor(slug: string, locale: SiteLocale | "ja") {
  const entry = faqs[slug];
  if (!entry) return [];
  const list = locale === "ja" ? entry.ja : locale === "en" ? entry.en : entry.zh;
  const title = locale === "ja" ? "よくある質問" : locale === "en" ? "Common questions" : "常见问题";
  return [{
    id: "faq",
    title,
    paragraphs: list.flatMap(([q, a]) => [`Q. ${q}`, `A. ${a}`]),
  }];
}
