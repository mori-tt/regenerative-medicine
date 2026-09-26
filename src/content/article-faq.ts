// 記事別FAQ。「よくある質問」セクションとして記事末尾に追加するデータ。
// 主要記事に対して、読者が実際に疑問を持ちやすい点をQ&A形式で補完する。
// 医療情報のため、断定表現・効果保証表現は使わず、段階や条件を明示する。

import type { SiteLocale } from "./locales";
import { subcategoryOf } from "./subcategories";

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
  "cell-division": {
    ja: [
      ["細胞はずっと増え続ける？", "いいえ。多くの細胞は分裂回数に上限があり、分裂を止める時期があります。無制限に増えるのはがん細胞などの異常な状態です。"],
      ["分裂が止まるとどうなる？", "細胞は老化（senescence）したり、役目を終えて死ぬ（アポトーシス）ことがあります。増えるだけが細胞の働きではありません。"],
      ["再生医療と関係ある？", "細胞を増やす培養の仕組みの基礎です。「どうやって増やすか」は治療の品質に直結します。"],
    ],
    en: [
      ["Do cells divide forever?", "No — most cells have a division limit. Uncontrolled growth is abnormal, as in cancer."],
      ["What happens when division stops?", "Cells may senesce or die by apoptosis — growth isn't their only function."],
      ["Why does it matter for regenerative medicine?", "It's the basis of cell culture — how cells are grown directly affects treatment quality."],
    ],
    zh: [
      ["细胞会一直分裂吗？", "不会，多数细胞有分裂上限，失控增殖是癌症等异常状态。"],
      ["停止分裂后会怎样？", "细胞可能老化或凋亡，增殖不是细胞的唯一功能。"],
      ["与再生医学有关吗？", "是细胞培养的基础——如何扩增直接影响治疗质量。"],
    ],
  },
  "aging-society": {
    ja: [
      ["なぜ高齢化と再生医療が関係ある？", "加齢で失われる機能を細胞で補う発想が背景にあります。ただし期待と実現は別で、多くは研究段階です。"],
      ["高齢者でも受けられる？", "年齢だけでは決まりません。持病・薬・体力などの総合評価が前提です。"],
      ["介護との関係は？", "治療と介護は別の制度です。暮らしの支援は介護保険等の既存制度が主体になります。"],
    ],
    en: [
      ["Why does aging matter here?", "Regenerative medicine aims to restore function lost with age — but expectation and realization differ, and much is still research-stage."],
      ["Can older people receive it?", "Age alone doesn't decide — conditions, medications, and general health are all assessed."],
      ["How does it relate to caregiving?", "Treatment and long-term care are separate systems; daily support mainly relies on existing care insurance."],
    ],
    zh: [
      ["老龄化与再生医学有何关系？", "其背景是用细胞补充随年龄丧失的功能，但期待与实现不同，多数仍在研究阶段。"],
      ["高龄者能接受吗？", "不只由年龄决定，需综合评估既往病史、用药和体力。"],
      ["和护理是什么关系？", "治疗与护理是不同制度，日常支援主要依靠护理保险等现有制度。"],
    ],
  },
  "blood-basics": {
    ja: [
      ["血液と細胞治療の関係は？", "造血幹細胞移植は血液を作る細胞を移植する治療で、細胞治療の原点です。血液の基礎を知ると治療の説明が分かりやすくなります。"],
      ["骨髄移植は血液の病気だけ？", "主に白血病など血液疾患で使われますが、適応は拡大も縮小もしています。対象かどうかは主治医に確認を。"],
      ["献血と関係ある？", "献血は成分献血などで細胞の一部を提供する仕組みです。治療とは目的が違いますが、細胞の提供という点では関係があります。"],
    ],
    en: [
      ["How does blood relate to cell therapy?", "Bone-marrow transplantation — a cornerstone of cell therapy — transplants blood-forming cells, so blood basics make treatment explanations clearer."],
      ["Is bone-marrow transplant only for blood diseases?", "Mainly used for leukemia and similar conditions, though indications change — confirm with your doctor."],
      ["Related to blood donation?", "Donation provides blood components — different purpose, but shares the idea of supplying cells."],
    ],
    zh: [
      ["血液与细胞治疗的关系？", "造血干细胞移植是细胞治疗的代表，移植的是造血细胞，理解血液基础有助于理解治疗说明。"],
      ["骨髓移植只用于血液病吗？", "主要用于白血病等血液疾病，适应范围会变，请与主治医生确认。"],
      ["和献血有关吗？", "献血提供血液成分，目的不同但都属于细胞供给的概念。"],
    ],
  },
  "cancer-basics": {
    ja: [
      ["がんと幹細胞は関係ある？", "がん幹細胞の研究や、がん治療後の造血幹細胞移植など接点があります。一方で細胞を増やす技術が腫瘍化と無関係とは言えません。"],
      ["がんに幹細胞治療は効く？", "確立した治療は造血幹細胞移植など一部です。他の「がんに効く幹細胞」の多くは研究段階で、効果の根拠を個別に確認してください。"],
      ["がんがあると受けられない？", "活動性のがんは慎重評価の対象です。主治医と相談の上で適否が判断されます。"],
    ],
    en: [
      ["Is cancer related to stem cells?", "Yes — cancer stem cell research and post-treatment transplants are connections, and cell-growing technologies aren't unrelated to tumor risk."],
      ["Do stem cells treat cancer?", "Established uses are limited to hematopoietic transplants and similar — most other claims are research-stage, so check the evidence."],
      ["Does having cancer disqualify me?", "Active cancer is a reason for careful evaluation — eligibility is decided with your physician."],
    ],
    zh: [
      ["癌症与干细胞有关吗？", "有癌症干细胞研究、治疗后造血干细胞移植等关联，细胞增殖技术与肿瘤化也并非无关。"],
      ["干细胞能治癌吗？", "确立的仅限造血干细胞移植等少数，其他多为研究阶段，请逐项确认疗效依据。"],
      ["有癌症就不能接受吗？", "活动性癌症属于需慎重评估的情况，请与主治医生商量。"],
    ],
  },
  "nutrition-basics": {
    ja: [
      ["栄養と治療は関係ある？", "治療中の回復力や免疫に関わります。特別な食事が必要なわけではありませんが、偏りは避けるべきです。"],
      ["サプリは効く？", "特定のサプリが幹細胞治療の効果を高める確かな根拠はありません。飲んでいるものは主治医に伝えましょう。"],
      ["治療中に注意することは？", "極端な食事制限や過度なサプリは避け、主治医や栄養士に相談するのが基本です。"],
    ],
    en: [
      ["Does nutrition matter during treatment?", "It relates to recovery and immunity — no special diet is required, but avoid imbalance."],
      ["Do supplements help?", "No solid evidence that any supplement boosts stem-cell treatment — tell your doctor what you take."],
      ["Anything to avoid?", "Avoid extreme restriction or excessive supplements; ask your physician or dietitian."],
    ],
    zh: [
      ["营养与治疗有关吗？", "关系到恢复力和免疫，无需特殊饮食但应避免失衡。"],
      ["补充剂有效吗？", "没有确切证据表明某种补充剂能增强干细胞治疗效果，请向医生告知正在服用的产品。"],
      ["治疗中注意什么？", "避免极端节食或过量补充剂，请咨询医生或营养师。"],
    ],
  },
  "iv-stem-cell-journey": {
    ja: [
      ["点滴後すぐに効果が出る？", "すぐに効果が実感できるとは限りません。細胞が体内でどう動くかは研究中で、効果の有無は別の問題です。"],
      ["点滴中に注意することは？", "発熱・寒気・動悸などの変化があればすぐに伝えます。観察時間と緊急時の体制を事前に確認しておきましょう。"],
      ["体に残る？", "長期間残るとは限りません。定着期間や繰り返し投与の見通しは説明を確認してください。"],
    ],
    en: [
      ["Do effects appear right after infusion?", "Not necessarily — how cells behave in the body is under study, and whether benefit occurs is a separate question."],
      ["What should I watch during infusion?", "Report fever, chills, or palpitations immediately — confirm observation time and emergency arrangements beforehand."],
      ["Do cells stay in the body?", "Not necessarily long-term — check the expected persistence and whether repeat doses are planned."],
    ],
    zh: [
      ["输注后马上见效吗？", "不一定——细胞在体内的动向仍在研究中，是否有效是另一回事。"],
      ["输注中要注意什么？", "出现发热、寒战、心悸等立即告知，提前确认观察时间和应急体制。"],
      ["细胞会留在体内吗？", "不一定长期存留，请确认定着期和是否需反复给药。"],
    ],
  },
  "stem-cell-homing": {
    ja: [
      ["ホーミングとは？", "投与された細胞が損傷部位などに集まるとされる性質です。「届く」ことを示しますが「働く」かどうかは別です。"],
      ["確かめられている？", "動物実験や一部の人での観察がありますが、すべての治療で同じように起きるとは限りません。"],
      ["説明で聞くべきことは？", "「この治療でホーミングが確認された研究はあるか」を聞くと、説明の根拠が見えやすくなります。"],
    ],
    en: [
      ["What is homing?", "The tendency of administered cells to gather at injury sites — it shows arrival, not necessarily action."],
      ["Is it proven?", "Animal and limited human data exist, but it isn't guaranteed to happen the same way in every treatment."],
      ["What should I ask?", "Whether homing has been confirmed for the specific therapy — that reveals the basis of the explanation."],
    ],
    zh: [
      ["什么是归巢？", "输注细胞聚集于损伤部位的性质——说明“到达”，但不等于“起作用”。"],
      ["已被证实吗？", "有动物和部分人体观察数据，但每种治疗未必同样发生。"],
      ["该问什么？", "询问该治疗是否有归巢被确认的研究，可以看出说明的依据。"],
    ],
  },
  "stem-cell-cosmetic-medicine": {
    ja: [
      ["美容目的の幹細胞は実際どう？", "「若返り」をうたう提供は増えていますが、確立した効果として認められたものは限られます。届出の有無と根拠を確認してください。"],
      ["広告は信用できる？", "症例写真や体験談は医療広告の規制対象です。「劇的」「必ず」などの表現は警戒しましょう。"],
      ["トラブルがあったら？", "施設への相談、消費生活センター（188）、医療安全支援センターなどの窓口があります。記録は残しておきましょう。"],
    ],
    en: [
      ["Are cosmetic stem-cell offerings reliable?", "Rejuvenation claims are growing, but established benefits are limited — check filing status and evidence."],
      ["Can I trust the advertising?", "Testimonial photos and stories are regulated; watch for words like “dramatic” or “guaranteed.”"],
      ["What if something goes wrong?", "Options include the clinic, consumer hotline (188), and medical safety support centers — keep records."],
    ],
    zh: [
      ["美容用干细胞实际如何？", "“抗衰老”类服务在增加，但被认可的确定疗效有限，请确认申报和依据。"],
      ["广告可信吗？", "病例照片和体验谈属规制对象，对“戏剧性”“一定”等表述要保持警惕。"],
      ["出现纠纷怎么办？", "可咨询机构、消费者热线（188）或医疗安全支援中心，请保留记录。"],
    ],
  },
  "stages-of-research": {
    ja: [
      ["「治験」と「臨床研究」は違う？", "治験は承認を目指す試験、臨床研究はより広い概念です。再生医療のニュースで混同されやすいので分けて読みましょう。"],
      ["「成功しました」はどう読む？", "どの段階の成功かを確認します。動物実験の成功と人での確立は別です。"],
      ["第III相とは？", "多数の人での最終確認に近い段階です。ここまで進んだものは比較的確かですが、承認とはまだ違います。"],
    ],
    en: [
      ["Are trials and clinical research different?", "Trials aim for approval; clinical research is broader. News often conflates them — read them separately."],
      ["How should I read “succeeded”?", "Check which stage — animal success isn't human proof."],
      ["What is Phase III?", "A near-final confirmatory stage in many participants — stronger evidence, but still not approval."],
    ],
    zh: [
      ["“临床试验”和“临床研究”不同吗？", "临床试验以获批为目标，临床研究范围更广，新闻中常混淆，请分开解读。"],
      ["如何理解“成功了”？", "确认是哪个阶段的成功——动物成功不等于人体确证。"],
      ["什么是III期？", "在多数人中进行接近最终确认的阶段，证据较强但仍不等于获批。"],
    ],
  },
  "reading-research-news": {
    ja: [
      ["研究ニュースをどう読む？", "「動物か人か」「段階はどこか」「比較対象があるか」の3点を押さえると、過大解釈を防げます。"],
      ["プレスリリースは信じていい？", "発表段階の速報です。論文化・査読・追試の確認を待つのが安全です。"],
      ["悪い結果は出ない？", "うまくいかなかった研究は表に出にくい傾向があります。一つの発表で断定しないことが大切です。"],
    ],
    en: [
      ["How should I read research news?", "Ask: animal or human? Which stage? Was there a comparison? These three checks prevent over-interpretation."],
      ["Can I trust press releases?", "They're early announcements — safer to wait for publication, peer review, and replication."],
      ["Do negative results get published?", "Less often — don't draw conclusions from a single announcement."],
    ],
    zh: [
      ["如何读研究新闻？", "把握“动物还是人体”“处于哪个阶段”“有无对照”三点，可避免过度解读。"],
      ["新闻稿可信吗？", "是发表阶段的速报，等待论文发表、同行评审和重复验证更稳妥。"],
      ["负面结果会发表吗？", "不顺利的研究较少被公开，不要凭一则报道就下结论。"],
    ],
  },
  "stem-cell-contraindications": {
    ja: [
      ["受けられない条件は？", "活動性の感染症・がん・妊娠中等は慎重評価の対象です。「絶対に受けられない」ではなく、利益とリスクの比較で判断されます。"],
      ["検査なしで「受けられる」と言われたら？", "注意が必要です。適否は検査と確認を経て判断されるべきものです。"],
      ["主治医に相談すべき？", "はい。既存の治療との関係を主治医と共有するのが前提です。"],
    ],
    en: [
      ["What conditions exclude treatment?", "Active infection, cancer, and pregnancy call for careful evaluation — not automatic exclusion, but a risk-benefit judgment."],
      ["What if I'm told “anyone can do it” without tests?", "Be cautious — eligibility should follow adequate testing."],
      ["Should I consult my doctor?", "Yes — sharing the plan with your physician is a prerequisite."],
    ],
    zh: [
      ["哪些情况不能接受？", "活动性感染、癌症、妊娠等需慎重评估——并非绝对禁忌，而是权衡利弊后判断。"],
      ["不检查就说“可以做”怎么办？", "要警惕——应否接受应经检查和确认后判断。"],
      ["需要咨询主治医生吗？", "需要——与主治医生共享与现有治疗的关系是前提。"],
    ],
  },
  "trouble-help": {
    ja: [
      ["困ったときの最初の相談先は？", "まず施設に確認し、応じない場合は消費生活センター（188）や医療安全支援センターが窓口になります。"],
      ["副作用が疑われるときは？", "医療機関での診察が優先です。PMDAの副作用被害救済制度など、救済の仕組みもあります。"],
      ["証拠は何を残すべき？", "契約書・説明文書・領収書・経過の記録です。書面が残っていると相談が進みやすくなります。"],
    ],
    en: [
      ["Where should I turn first?", "Start with the clinic; if unresolved, consumer centers (188) or medical safety support centers are next."],
      ["What if I suspect a side effect?", "Get examined at a medical institution first — relief systems such as PMDA's adverse-reaction scheme also exist."],
      ["What records should I keep?", "Contracts, explanation documents, receipts, and a log of your course — written records help consultations."],
    ],
    zh: [
      ["首先该找谁咨询？", "先找机构，若无回应可联系消费者生活中心（188）或医疗安全支援中心。"],
      ["怀疑有副作用怎么办？", "先去医疗机构就诊，也可利用PMDA副作用被害救济等制度。"],
      ["该保留什么证据？", "合同、说明文件、收据和治疗经过记录，书面材料有助于咨询。"],
    ],
  },
  "stem-cell-sources": {
    ja: [
      ["採取元で何が違う？", "脂肪・骨髄・臍帯で採取の負担・細胞の性質・量が違います。「どこから採るか」は説明資料で確認してください。"],
      ["どれが一番いい？", "一律の優劣はありません。目的の病気や施設の体制で向き不向きが変わります。"],
      ["自分の細胞と他人の細胞は？", "採取元と別の軸です。自家か他家かで必要な検査や説明が変わるため、両方を確認しましょう。"],
    ],
    en: [
      ["What differs by source?", "Fat, bone marrow, and cord differ in collection burden, cell properties, and yield — check the stated source."],
      ["Which source is best?", "There's no universal ranking — the right choice depends on the disease and the facility."],
      ["Own cells vs donor cells?", "A separate axis from the source — autologous vs allogeneic changes the tests and explanations needed."],
    ],
    zh: [
      ["采集来源有何区别？", "脂肪、骨髓、脐带在采集负担、细胞性质、数量上不同，请确认资料中的来源。"],
      ["哪种最好？", "没有绝对的优劣——取决于病种和机构条件。"],
      ["自体和异体呢？", "这是与来源不同的维度——自体/异体会改变所需检测和说明，两方面都要确认。"],
    ],
  },
  "cell-culture-and-quality": {
    ja: [
      ["培養はなぜ大事？", "細胞を増やす過程の品質が安全に直結します。無菌管理・細胞状態の確認・記録体制が重要です。"],
      ["届出済みなら安心？", "届出は手続きの確認です。実際の培養管理体制は施設に個別確認する価値があります。"],
      ["培養に期間は？", "細胞の種類や量で変わります。採取から投与までの期間と、その間の管理を確認しましょう。"],
    ],
    en: [
      ["Why does culture matter?", "The quality of cell expansion directly affects safety — sterility, cell-condition checks, and records all count."],
      ["Does a filed plan mean it's safe?", "Filing is procedural — it's still worth asking how the facility manages culture."],
      ["How long does culture take?", "It varies by cell type and amount — check the timeline from collection to administration."],
    ],
    zh: [
      ["为什么培养很重要？", "细胞扩增过程的质量直接关系到安全——无菌管理、细胞状态确认、记录体制都很重要。"],
      ["申报了就安心吗？", "申报只是程序确认，实际培养管理仍值得向机构个别确认。"],
      ["培养需要多久？", "因细胞种类和数量而异，请确认从采集到给药的周期及其管理。"],
    ],
  },
  "drugs-surgery-comparison": {
    ja: [
      ["薬や手術との違いは？", "症状を抑える・取り除くのとは別に、組織を再生させる発想です。ただし代替できるとは限りません。"],
      ["標準治療をやめていい？", "既存の治療を中断して新しい治療に移ることはリスクがあります。主治医と相談せずに止めないでください。"],
      ["併用はできる？", "可能な場合もありますが、相互作用や負担の確認が前提です。併用か代替かを資料で確認しましょう。"],
    ],
    en: [
      ["How does it differ from drugs or surgery?", "It aims to regenerate rather than suppress or remove — but it isn't always a substitute."],
      ["Can I stop standard care?", "Stopping established treatment to switch carries risk — don't discontinue without consulting your doctor."],
      ["Can they be combined?", "Sometimes, but interactions and burden must be checked — confirm whether it's adjunctive or a replacement."],
    ],
    zh: [
      ["与药物、手术有何不同？", "它以再生组织为思路，而非抑制或去除症状——但未必能替代。"],
      ["可以停掉标准治疗吗？", "中断现有治疗转用新疗法有风险，请勿在未经医生同意下停药。"],
      ["可以并用吗？", "有时可以，但需确认相互作用和负担——请确认资料中是并用还是替代。"],
    ],
  },
  "advertising-literacy": {
    ja: [
      ["広告で見るべき点は？", "届出の有無・効果の断定表現・症例写真の使い方・費用の明記です。派手な表現は規制対象です。"],
      ["「効果あり」と書いてあったら？", "断定表現自体が広告規制に触れる可能性があります。根拠の説明がなければ疑ってかかりましょう。"],
      ["口コミは？", "個人の体験は一般化できません。複数の情報源と照らし合わせる姿勢が大切です。"],
    ],
    en: [
      ["What should I check in ads?", "Filing status, absolute claims, use of before/after photos, and fee transparency — exaggerated wording is regulated."],
      ["If it says “proven effective”?", "Absolute claims may violate advertising rules — without evidence, treat them skeptically."],
      ["What about reviews?", "Personal accounts can't be generalized — compare across multiple sources."],
    ],
    zh: [
      ["看广告要看什么？", "申报情况、疗效断定表述、病例照片使用方式、费用明示——夸张表述属规制对象。"],
      ["写着“有效”怎么办？", "断定表述本身可能违反广告规制，没有依据说明时应保持怀疑。"],
      ["口碑呢？", "个人体验无法推广，应与多种信息来源对照。"],
    ],
  },
  "aftercare": {
    ja: [
      ["治療後に確認することは？", "経過観察の予定・異常時の連絡先・検査の間隔を書面で確認しておきましょう。"],
      ["効果の判定はいつ？", "すぐに判定できない場合が多いです。経過観察のスケジュールで確認するのが基本です。"],
      ["体調の変化は？", "発熱・痛み・腫れなどは速やかに報告を。日記で記録しておくと伝えやすくなります。"],
    ],
    en: [
      ["What should I confirm after treatment?", "Follow-up schedule, emergency contacts, and test intervals — in writing."],
      ["When is the outcome judged?", "Often not immediately — the follow-up schedule defines when benefit is assessed."],
      ["What about physical changes?", "Report fever, pain, or swelling promptly — a diary makes it easier to communicate."],
    ],
    zh: [
      ["治疗后要确认什么？", "随访安排、异常时联系方式、检查间隔——请以书面确认。"],
      ["何时判定疗效？", "多数不能立即判定，按随访计划确认是基本做法。"],
      ["身体变化怎么办？", "发热、疼痛、肿胀等请及时报告，记录日记便于沟通。"],
    ],
  },
  "family-discussion": {
    ja: [
      ["家族にどう伝える？", "治療の内容・根拠・リスク・費用を分けて説明するのが基本です。資料を見せて一緒に考えるのも有効です。"],
      ["意見が分かれたら？", "急がず、セカンドオピニオンや相談窓口を使って整理するのも一つの方法です。"],
      ["代理で決める場合は？", "本人の意思を確認できる範囲で確認し、医療者と相談しながら進めます。"],
    ],
    en: [
      ["How do I explain it to family?", "Separately cover the treatment, its basis, risks, and costs — sharing the materials helps."],
      ["What if opinions differ?", "Don't rush — a second opinion or consultation service can help organize the decision."],
      ["Deciding on someone's behalf?", "Confirm the person's wishes as far as possible and proceed with the care team."],
    ],
    zh: [
      ["怎么向家人说明？", "分开说明治疗内容、依据、风险和费用，展示资料一起讨论也有效。"],
      ["意见分歧怎么办？", "不急，可借助第二意见或咨询窗口来整理。"],
      ["代为决定时？", "尽可能确认本人意愿，与医务人员商量推进。"],
    ],
  },
  "stem-cell-mechanism": {
    ja: [
      ["どうやって効くと考えられている？", "「分化して置き換わる」説と「分泌する物質で働きかける」説の2つの考え方があります。どちらが主かは研究中です。"],
      ["仕組みが分かると何が変わる？", "効果の説明が「なぜ効くか」で読めるようになり、過大な主張と根拠ある説明を分けられます。"],
      ["まだ分かっていないことは？", "多くあります。どの経路でどう働くかは疾患ごとに検討中で、確定していない部分を隠さない説明が誠実です。"],
    ],
    en: [
      ["How are they thought to work?", "Two ideas — replacing tissue by differentiation, and acting via secreted substances — and which dominates is under study."],
      ["What does knowing the mechanism change?", "It lets you read benefit claims mechanistically and separate grounded explanation from overreach."],
      ["What's still unknown?", "Plenty — how cells act in each disease is still being worked out; honest explanations say so."],
    ],
    zh: [
      ["认为如何起作用？", "有“分化替代”和“分泌物质起作用”两种假说，何者为主仍在研究中。"],
      ["了解机制有什么用？", "能从“为何有效”的角度解读疗效说明，区分有据说明与夸大主张。"],
      ["还有哪些不清楚？", "很多——各病种中细胞如何起作用仍在研究，诚实的说明不会隐瞒未定部分。"],
    ],
  },
  "future-perspectives": {
    ja: [
      ["将来どこまでできる？", "オルガノイド・臓器再生・個別化医療などが研究されていますが、実用化までの距離は部位や技術で異なります。"],
      ["今受けられるのは？", "承認済みの製品は一部に限られます。将来の研究と現在使える治療は分けて考えてください。"],
      ["期待しすぎは危険？", "将来の可能性と現在の確かさを混同すると誤った判断につながります。段階を意識して情報を読みましょう。"],
    ],
    en: [
      ["What might be possible later?", "Organoids, organ regeneration, and personalized medicine are studied, but distance to practice varies by field."],
      ["What's available now?", "Only some approved products — keep future research separate from current care."],
      ["Is over-expectation risky?", "Conflating future possibility with present certainty leads to poor decisions — read for stage."],
    ],
    zh: [
      ["将来能做到什么程度？", "类器官、器官再生、个体化医疗等在研究中，但距离实用化因领域而异。"],
      ["现在能用的是什么？", "仅限部分获批产品——请将未来研究与现有治疗分开考虑。"],
      ["过度期待有风险吗？", "把未来可能与现在确凿混淆会导致误判，请按阶段解读信息。"],
    ],
  },
  "japanese-society-for-regenerative-medicine": {
    ja: [
      ["学会の情報は信頼できる？", "公式の見解や用語集は参考になりますが、個別の治療の効果を保証するものではありません。"],
      ["認定制度とは？", "委員会や施設の認定は手続きの適正さを確認する仕組みで、効果の承認ではありません。"],
      ["他に見るべき情報源は？", "厚生労働省・PMDA・e-ヘルスネット・がん情報サービスなど公的な情報を併用するとバランスが取れます。"],
    ],
    en: [
      ["Is society information reliable?", "Official statements and glossaries are useful references but don't guarantee outcomes of individual treatments."],
      ["What is the certification system?", "Committee and facility certifications verify procedural propriety — they are not efficacy approvals."],
      ["What else should I check?", "MHLW, PMDA, e-Health Net, and the cancer information service add balance."],
    ],
    zh: [
      ["学会的信息可信吗？", "官方见解和术语集有参考价值，但不保证个体治疗的效果。"],
      ["什么是认定制度？", "委员会和机构认定是确认程序正当性的机制，不等于疗效批准。"],
      ["还应看哪些信息源？", "结合厚生劳动省、PMDA、e-健康网、癌症信息服务等官方来源更均衡。"],
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

// 記事固有のFAQがない記事向けのサブカテゴリ別フォールバック（各2問）。
const fallbackFaqs: Record<string, FaqEntry> = {
  "stem-basics/stem-cell-fundamentals": {
    ja: [["このテーマはどこまで確かめられている？", "基礎概念は確立していますが、治療への応用は部位や病気で研究段階が異なります。「概念」と「使える治療」は分けて考えてください。"],
         ["次に読むべき記事は？", "カテゴリ内の「効果とエビデンス」「安全性とリスク」に進むと、基礎知識が治療の判断材料に変わります。"]],
    en: [["How established is this topic?", "The concepts are established, but clinical application is at different stages by disease — keep concept and treatment separate."],
         ["What should I read next?", "Move on to Evidence and Safety categories to turn the basics into judgment material."]],
    zh: [["这个主题被证实到什么程度？", "基础概念已确立，但临床应用因病种处于不同阶段——请把“概念”和“可用治疗”分开。"],
         ["接下来该读什么？", "请继续阅读「疗效与证据」「安全性与风险」，把基础知识转化为判断材料。"]],
  },
  "stem-basics/body-mechanisms": {
    ja: [["再生医療と関係ある？", "細胞が増え・分化する仕組みは、細胞を増やして使う再生医療の土台です。"],
         ["難しすぎる場合は？", "用語集で出てきた言葉を引きながら読み進めると理解しやすくなります。"]],
    en: [["Is it related to regenerative medicine?", "How cells divide and differentiate is the foundation of cell-based therapies."],
         ["Too difficult?", "Look up terms in the glossary as you read — that makes it easier."]],
    zh: [["与再生医学有关吗？", "细胞增殖与分化的机制是细胞疗法的基础。"],
         ["太难懂怎么办？", "边查术语集边读会更容易理解。"]],
  },
  "stem-basics/health-and-life": {
    ja: [["社会の期待と実際は違う？", "はい。高齢化による期待と、実際に確立した治療の範囲は別です。"],
         ["制度の記事も読むべき？", "はい。届出・承認・広告の仕組みの記事と合わせると判断材料が揃います。"]],
    en: [["Are expectations and reality different?", "Yes — aging-driven expectations and the actual scope of established care are separate things."],
         ["Should I read the system articles too?", "Yes — filing, approval, and advertising rules complete the picture."]],
    zh: [["社会期待与实际有差距吗？", "有——老龄化带来的期待与已确立治疗的范围是两回事。"],
         ["还需要读制度类文章吗？", "需要——申报、批准、广告规则的文章能补全判断依据。"]],
  },
  "health-basics/body-systems": {
    ja: [["この記事は治療と関係ある？", "臓器の働きを知ると、再生医療の説明で出てくる「この部位を再生する」という言葉が具体的に理解できます。"],
         ["全て覚える必要はある？", "いいえ。関連する記事で必要になったときに戻れば十分です。"]],
    en: [["Is this related to treatment?", "Knowing organ mechanics makes claims like “regenerating this tissue” concrete."],
         ["Do I need to memorize it?", "No — come back when related articles require it."]],
    zh: [["这与治疗有关吗？", "了解器官机制后，治疗说明中“再生该部位”等表述会更具体。"],
         ["需要全部记住吗？", "不需要，读到相关文章时再回来即可。"]],
  },
  "health-basics/common-illness": {
    ja: [["この病気に幹細胞治療はある？", "疾患によって研究段階が違います。「研究対象」と「使える治療」を分けて確認してください。"],
         ["受診の目安は？", "気になる症状があれば一般の医療機関を受診するのが先です。再生医療の検討はその後です。"]],
    en: [["Is there a stem-cell treatment for this?", "Research stages vary by disease — distinguish research targets from available care."],
         ["When should I see a doctor?", "For concerning symptoms, see a regular clinic first — regenerative options come later."]],
    zh: [["这种疾病有干细胞治疗吗？", "因病种研究阶段不同，请区分“研究对象”与“可用治疗”。"],
         ["何时就诊？", "如有症状先就诊普通医疗机构，再生医疗的考虑在其后。"]],
  },
  "health-basics/daily-health": {
    ja: [["治療と関係ある？", "暮らしの習慣は治療の効果や回復に関わります。治療中の生活の土台です。"],
         ["今すぐできることは？", "健診の確認・体調の記録・相談先の把握から始められます。"]],
    en: [["Is it related to treatment?", "Daily habits affect outcomes and recovery — they're the foundation during treatment."],
         ["What can I do today?", "Start by checking your checkup results, keeping a symptom log, and knowing your contacts."]],
    zh: [["与治疗有关吗？", "日常习惯会影响疗效和恢复，是治疗期间的基础。"],
         ["现在能做什么？", "从确认体检结果、记录身体状况、掌握咨询渠道开始。"]],
  },
  "in-body/how-administered": {
    ja: [["どの経路が選ばれる？", "目的の部位と病気で決まります。施設に「この経路を選ぶ理由」を確認しましょう。"],
         ["経路でリスクは変わる？", "はい。経路ごとの合併症を確認してください。"]],
    en: [["How is the route chosen?", "By the target site and disease — ask the clinic why a route was chosen."],
         ["Does risk change by route?", "Yes — check route-specific complications."]],
    zh: [["如何选择给药途径？", "取决于目标部位与病种，请向机构确认选择理由。"],
         ["途径会改变风险吗？", "会——请确认各途径的并发症。"]],
  },
  "in-body/after-infusion": {
    ja: [["細胞は消える？", "長期間残るとは限りません。定着期間と繰り返し投与の見通しを確認してください。"],
         ["届く＝効く？", "いいえ。分布の確認と効果の確認は別の問題です。"]],
    en: [["Do cells disappear?", "Not necessarily permanent — confirm expected persistence and whether repeat dosing is planned."],
         ["Does arriving mean working?", "No — distribution and efficacy are separate questions."]],
    zh: [["细胞会消失吗？", "不一定长期存留，请确认定着期和反复给药的预期。"],
         ["到达等于有效吗？", "不等于——分布确认与疗效确认是两个问题。"]],
  },
  "in-body/where-they-reach": {
    ja: [["脳には届く？", "血液脳関門を越えるかは研究中の論点で、多くは動物実験の段階です。"],
         ["「届く」報告はある？", "動物実験や一部の観察データがあります。人での確かさは別に確認してください。"]],
    en: [["Do they reach the brain?", "Crossing the blood–brain barrier is still under study — much of the data is preclinical."],
         ["Are there distribution reports?", "Animal and limited human data exist — confirm human-level evidence separately."]],
    zh: [["能到达大脑吗？", "能否跨越血脑屏障仍在研究中，多为动物实验阶段。"],
         ["有分布报告吗？", "有动物和有限人体数据，人体层面的确凿性请另行确认。"]],
  },
  "anti-aging/scientific-evidence": {
    ja: [["「若返った」報告はある？", "研究段階の報告はありますが、確立した効果ではありません。段階の確認が大切です。"],
         ["見分け方は？", "「どの段階の結果か」を聞くことと、出典を確認することが基本です。"]],
    en: [["Are there “rejuvenation” reports?", "Research-stage reports exist but are not established benefits — check the stage."],
         ["How do I tell?", "Ask which stage a result belongs to and check the source."]],
    zh: [["有“变年轻”的报告吗？", "有研究阶段的报告，但不是确立的疗效，请确认所处阶段。"],
         ["如何辨别？", "询问结果处于哪个阶段，并确认出处。"]],
  },
  "anti-aging/aesthetic-offerings": {
    ja: [["届出はある？", "施設によって違います。届出番号を確認するか、説明で確かめてください。"],
         ["契約前に必須の確認は？", "届出・効果の根拠・リスク説明・返金条件の書面確認です。"]],
    en: [["Is there a filing?", "It varies by clinic — ask for the filing number or confirm in the explanation."],
         ["What's essential before signing?", "Written confirmation of filing, evidence, risks, and refund conditions."]],
    zh: [["有申报吗？", "因机构而异，请确认申报编号或在说明中核实。"],
         ["签约前必须确认什么？", "书面确认申报、疗效依据、风险说明和退款条件。"]],
  },
  "efficacy/efficacy-status": {
    ja: [["届出と承認の違いは？", "届出は手続きの確認、承認は有効性・安全性の審査です。届出は効果の保証ではありません。"],
         ["効果の根拠をどう確認？", "「どの研究の結果か」を聞き、jRCTや論文でその段階を確認しましょう。"]],
    en: [["Filing vs approval?", "Filing is procedural; approval is an efficacy and safety review — filing is not a guarantee of benefit."],
         ["How do I check the evidence?", "Ask which study it's based on and verify the stage in jRCT or the papers."]],
    zh: [["申报与批准的区别？", "申报是程序确认，批准是有效性安全性审查——申报不等于疗效保证。"],
         ["如何确认疗效依据？", "询问基于哪项研究，到jRCT或论文中确认阶段。"]],
  },
  "efficacy/research-stages": {
    ja: [["「成功」はどう読む？", "動物実験・第I相・第III相で意味が違います。段階を確認して読みましょう。"],
         ["人での研究が始まったら？", "まだ確立ではありません。段階が進むほど確かさは増しますが、承認とは別です。"]],
    en: [["How do I read a “success”?", "It means different things in animal work, Phase I, or Phase III — check the stage."],
         ["If human research has begun?", "Still not established — certainty grows with stage, but approval is a separate step."]],
    zh: [["如何解读“成功”？", "动物实验、I期、III期含义不同，请确认阶段后再读。"],
         ["人体研究开始了呢？", "仍不等于确立——阶段越靠后越确凿，但批准另当别论。"]],
  },
  "efficacy/reading-research": {
    ja: [["一次情報はどこ？", "論文と登録情報（jRCT・UMIN等）です。プレスリリースは速報として読みましょう。"],
         ["撤回された論文は？", "撤回理由を確認します。撤回済みの内容を根拠にする説明は信頼できません。"]],
    en: [["Where are primary sources?", "Papers and registries (jRCT, UMIN) — treat press releases as early announcements."],
         ["What about retracted papers?", "Check the retraction reason — explanations citing retracted work are unreliable."]],
    zh: [["一手信息在哪里？", "论文与注册库（jRCT、UMIN等）——新闻稿请当作速报。"],
         ["被撤回的论文呢？", "确认撤回原因——以撤回内容为依据的说明不可信。"]],
  },
  "safety/treatment-risks": {
    ja: [["一番のリスクは？", "細胞の種類・経路・培養で変わります。リスクの説明が一面的でないか確認してください。"],
         ["「安全」と言われたら？", "起きた場合の対応と監視体制を確認しましょう。絶対の安全はありません。"]],
    en: [["What's the biggest risk?", "It varies by cell type, route, and culture — check the explanation isn't one-sided."],
         ["If told it's “safe”?", "Ask about the response plan and monitoring — nothing is absolutely safe."]],
    zh: [["最大的风险是什么？", "因细胞种类、途径、培养而异——请确认风险说明是否片面。"],
         ["说“安全”怎么办？", "确认发生时的应对与监测体制——不存在绝对安全。"]],
  },
  "safety/eligibility": {
    ja: [["誰でも受けられる？", "いいえ。持病・薬・妊娠等で適否が変わります。検査を経た判断が前提です。"],
         ["主治医に相談すべき？", "はい。既存の治療との関係を確認してもらうのが基本です。"]],
    en: [["Can anyone receive it?", "No — conditions, medications, and pregnancy change eligibility. Testing comes first."],
         ["Should I ask my doctor?", "Yes — have them check interactions with existing care."]],
    zh: [["谁都能接受吗？", "不能——既往病史、用药、妊娠都会影响适用性，检查判断是前提。"],
         ["需要咨询主治医生吗？", "需要——请确认与现有治疗的关系。"]],
  },
  "safety/trouble-and-relief": {
    ja: [["最初の相談先は？", "まず施設、次に消費生活センター（188）や医療安全支援センターです。"],
         ["救済制度は効果の保証？", "いいえ。被害の補償であって効果の保証ではありません。"]],
    en: [["Where do I start?", "The clinic first, then consumer centers (188) or medical safety support centers."],
         ["Do relief systems guarantee benefit?", "No — they compensate harm, not efficacy."]],
    zh: [["首先找谁？", "先找机构，再是消费者生活中心（188）或医疗安全支援中心。"],
         ["救济制度保证疗效吗？", "不保证——救济是补偿伤害，不是保证疗效。"]],
  },
  "cell-types/cell-kinds": {
    ja: [["種類で何が変わる？", "研究段階・採取方法・費用・リスクが変わります。細胞名が書かれているか確認しましょう。"],
         ["MSCなら安心？", "種類名だけでは効果は分かりません。疾患ごとのエビデンスを確認してください。"]],
    en: [["What changes by type?", "Research stage, collection method, cost, and risk — check whether the cell type is named."],
         ["Are MSCs safe by default?", "The name alone doesn't prove benefit — check disease-specific evidence."]],
    zh: [["种类改变什么？", "研究阶段、采集方式、费用、风险都会变——请确认是否写明细胞名称。"],
         ["MSC就安全吗？", "仅凭名称不能判断疗效，请确认该病种的证据。"]],
  },
  "cell-types/collection-sources": {
    ja: [["採取元の確認方法は？", "資料の記載と、施設への直接の確認です。採取部位と量が書かれているか見ましょう。"],
         ["他人の細胞は？", "感染症検査やHLA確認が前提です。検査の説明があるか確認してください。"]],
    en: [["How do I confirm the source?", "Check the documents and ask directly — the site and amount should be stated."],
         ["What about donor cells?", "Infection screening and HLA checks are prerequisites — confirm they're described."]],
    zh: [["如何确认采集来源？", "看资料记载并直接向机构确认，确认是否写明部位与数量。"],
         ["他人细胞呢？", "前提是感染筛查与HLA确认——请确认是否有这些说明。"]],
  },
  "cell-types/self-vs-donor": {
    ja: [["どちらが使われる？", "病気と施設で変わります。自家か他家かを資料で確認しましょう。"],
         ["他家の検査は？", "感染症検査とHLAの確認が前提です。検査体制の説明を確認してください。"]],
    en: [["Which is used?", "Depends on disease and facility — confirm whether it's autologous or allogeneic."],
         ["What tests for donor cells?", "Infection screening and HLA confirmation are prerequisites — check the explanation."]],
    zh: [["会用哪一种？", "因病种和机构而异——请确认是自体还是异体。"],
         ["异体的检测呢？", "前提是感染筛查与HLA确认，请确认相关说明。"]],
  },
  "cell-types/culture-and-quality": {
    ja: [["品質はどう確かめる？", "培養期間・無菌検査・細胞の状態確認・記録の管理体制を尋ねます。"],
         ["届出＝品質保証？", "いいえ。届出は手続きで、品質は施設の管理次第です。"]],
    en: [["How do I check quality?", "Ask about culture time, sterility testing, cell-condition checks, and record management."],
         ["Does filing mean quality?", "No — filing is procedural; quality depends on the facility's management."]],
    zh: [["如何确认质量？", "询问培养周期、无菌检测、细胞状态确认和记录管理体制。"],
         ["申报=质量保证吗？", "不是——申报是程序，质量取决于机构的管理水平。"]],
  },
  "compare-therapies/cell-free-therapies": {
    ja: [["エクソソームは細胞治療？", "細胞そのものを入れないため別です。届出の対象かは提供形態によります。"],
         ["PRPとの違いは？", "PRPは自分の血液由来です。由来が違うため性質も別です。"]],
    en: [["Are exosomes cell therapy?", "No cells are administered — whether filings apply depends on how they're provided."],
         ["How is PRP different?", "PRP comes from your own blood — a different source means different properties."]],
    zh: [["外泌体算细胞治疗吗？", "不输入细胞本身所以不同——是否需申报取决于提供方式。"],
         ["和PRP的区别？", "PRP来自自体血液——来源不同，性质也不同。"]],
  },
  "compare-therapies/vs-conventional": {
    ja: [["標準治療は続ける？", "中断しないでください。併用か代替かは主治医と相談して決めます。"],
         ["比較の基準は？", "「標準治療と比べてどうか」が基本です。単独の効果報告では比較になりません。"]],
    en: [["Should I keep standard care?", "Don't interrupt it — combination vs replacement is decided with your doctor."],
         ["What's the comparison benchmark?", "“Compared to standard care” — a standalone benefit report isn't a comparison."]],
    zh: [["要继续标准治疗吗？", "请勿中断——并用还是替代要与主治医生商量。"],
         ["比较的标准是什么？", "与标准治疗比较是基本——单独的疗效报告不构成比较。"]],
  },
  "cost-access/cost-and-coverage": {
    ja: [["費用の内訳は？", "採取・培養・投与・経過観察を分けて書面確認しましょう。"],
         ["保険は使える？", "承認品は一部対象ですが、自由診療は全額自己負担が一般的です。"]],
    en: [["What's the cost breakdown?", "Get collection, culture, administration, and follow-up itemized in writing."],
         ["Is insurance available?", "Some approved products qualify, but private care is usually fully self-paid."]],
    zh: [["费用明细是什么？", "请书面确认采集、培养、给药、随访各项。"],
         ["能用医保吗？", "部分获批产品可以，但自费诊疗一般全额自付。"]],
  },
  "cost-access/before-consultation": {
    ja: [["初診で持参するものは？", "既往歴・薬の一覧・検査結果・聞きたいことのメモです。"],
         ["説明を保留していい？", "はい。納得できるまで決断を急ぐ必要はありません。"]],
    en: [["What should I bring to the first visit?", "History, medication list, test results, and a written list of questions."],
         ["Can I defer the decision?", "Yes — there's no need to decide before you're satisfied."]],
    zh: [["初诊要带什么？", "病史、用药清单、检查结果和想问的问题备忘录。"],
         ["可以先不作决定吗？", "可以——在充分理解前不必急于决定。"]],
  },
  "cost-access/spotting-ads": {
    ja: [["規制の対象は？", "症例写真・体験談・断定表現・煽り文句が規制の対象です。"],
         ["信頼できる情報源は？", "公的機関のページと原論文・登録情報です。広告だけで判断しないでください。"]],
    en: [["What's regulated?", "Before/after photos, testimonials, absolute claims, and pressure tactics."],
         ["What are reliable sources?", "Official pages and primary research — don't decide on ads alone."]],
    zh: [["规制对象是什么？", "病例照片、体验谈、断定表述和煽动性语句。"],
         ["可信的信息源？", "官方页面与原始研究——不要仅凭广告判断。"]],
  },
  "cost-access/during-and-after": {
    ja: [["経過観察は必須？", "効果とリスクの確認に必要です。予定を書面で確認しましょう。"],
         ["生活の制限は？", "治療によって変わります。仕事・通院・運動の目安を確認してください。"]],
    en: [["Is follow-up required?", "Yes — it's needed to confirm benefit and catch risk; get the schedule in writing."],
         ["Any lifestyle limits?", "Depends on the treatment — confirm guidance on work, visits, and exercise."]],
    zh: [["随访是必须的吗？", "是的——确认疗效与风险都需要，请书面确认计划。"],
         ["生活上有限制吗？", "因治疗而异，请确认工作、复诊、运动的注意事项。"]],
  },
  "cost-access/life-and-support": {
    ja: [["使える制度は？", "高額療養費・医療費控除・介護保険などがあります。窓口を確認しましょう。"],
         ["相談先は？", "医療機関の相談室・消費生活センター・自治体の窓口があります。"]],
    en: [["What systems can I use?", "High-cost caps, medical deductions, care insurance — check the right contact."],
         ["Where can I consult?", "Hospital counseling rooms, consumer centers, and municipal offices."]],
    zh: [["能用哪些制度？", "高额疗养费、医疗费扣除、护理保险等——请确认窗口。"],
         ["咨询渠道？", "医院咨询室、消费者生活中心、地方政府窗口。"]],
  },
  "mechanisms/cell-mechanisms": {
    ja: [["仕組みは確かめられている？", "一部は研究段階です。「分化して置き換わる」だけでなく「分泌で働く」説もあります。"],
         ["仕組みと効果は別？", "はい。仕組みの説明があることと、効果が確かめられたことは別です。"]],
    en: [["Is the mechanism confirmed?", "Partly still research-stage — secretion-based action is considered alongside differentiation."],
         ["Is mechanism the same as efficacy?", "No — a mechanism story and proven benefit are different things."]],
    zh: [["机制已确认吗？", "部分仍在研究阶段——除“分化替代”外还有“分泌起作用”的假说。"],
         ["机制与疗效是一回事吗？", "不是——有机制解释不等于疗效已被确证。"]],
  },
  "mechanisms/regeneration-research": {
    ja: [["臓器ごとの進み具合は？", "角膜・皮膚は進んでいますが、神経・心臓は難しい分野です。"],
         ["報告の読み方は？", "動物実験か臨床かを確認すると解釈が変わります。"]],
    en: [["How far along is each organ?", "Cornea and skin are ahead; nerve and heart remain difficult."],
         ["How do I read reports?", "Check whether they're animal or clinical — the interpretation changes."]],
    zh: [["各器官进展如何？", "角膜和皮肤进展靠前，神经和心脏仍是难域。"],
         ["如何读报告？", "确认是动物实验还是临床研究，解读会不同。"]],
  },
  "mechanisms/science-and-society": {
    ja: [["学会の情報は？", "参考になりますが、個別の効果を保証するものではありません。"],
         ["倫理の議論は関係ある？", "はい。胚や遺伝子の議論は治療の社会的受容に関わります。"]],
    en: [["Is society info reliable?", "Useful as reference, but it doesn't guarantee individual treatment outcomes."],
         ["Do ethics debates matter?", "Yes — embryo and gene debates relate to how therapies are socially received."]],
    zh: [["学会信息可信吗？", "可作参考，但不保证个体治疗效果。"],
         ["伦理讨论有关吗？", "有关——胚胎与基因的争议关系到疗法的社会接受度。"]],
  },
};

export function faqSectionsFor(slug: string, locale: SiteLocale | "ja", category?: string) {
  const entry = faqs[slug];
  const fallback = category ? (subcategoryOf(category, slug) ? fallbackFaqs[`${category}/${subcategoryOf(category, slug)!.key}`] : undefined) : undefined;
  const list = entry
    ? (locale === "ja" ? entry.ja : locale === "en" ? entry.en : entry.zh)
    : fallback
      ? (locale === "ja" ? fallback.ja : locale === "en" ? fallback.en : fallback.zh)
      : undefined;
  if (!list) return [];
  const title = locale === "ja" ? "よくある質問" : locale === "en" ? "Common questions" : "常见问题";
  return [{
    id: "faq",
    title,
    paragraphs: list.flatMap(([q, a]) => [`Q. ${q}`, `A. ${a}`]),
  }];
}

