# 全208原稿・独立レッドチーム編集監査（2026-09-22）

## 状態と範囲

原文通読 **208/208完了、原文未読0**。最終版。**原文の具体的な問題10件（高3・中6・低1）**と、誤断定とは別扱いの**承認状況更新4件**を記録した。修正の実装・修正後の公開画面の再監査は未実施。

対象は `src/content/articles.ts` の `rawArticles` にある日本語のタイトル・description・points・全sections本文。原文スナップショットのSHA-256は `105914f54b8e519218ecafb92956bd95b51d24469d6cfc1513b8b085f80de39c`。カテゴリ内訳は basics 59、stem-cells 58、treatment 58、research 33。原稿の抽出にTypeScript ASTを使用し、本文は連続した小分け出力で全件を読んだ。出力が省略された箇所は再出力して補完した。

並行作業者の追加文献・追記本文・置換処理の適用後表示は本監査の対象外。記事原文・evidenceファイルは編集していない。免責文の有無、キーワード一致、出典の本数を合格判定には使っていない。以下は原文に対する編集上の指摘であり、医学的・法的な監修承認ではない。

深刻度：**高**＝救急対応の遅延や危険な行動につながり得る、**中**＝治療・制度の理解を実質的に誤らせる、**低**＝直接の危害は小さいが具体的な科学説明が不正確。指摘のない記事も「正確性の保証」ではない。

## 直ちに統合可能な確認済み指摘

### R01 高：`trouble-help` — 呼吸困難でも提供機関への連絡を先行させる

- 場所：points[0]、section `health`。
- 原文：`体調変化はまず提供機関・主治医へ。`
- 原文：`発熱、強い痛みや腫れ、息苦しさなどは速やかに提供機関の緊急連絡先へ連絡します。`
- 問題：この連絡順は急な呼吸困難にも適用される。本文に119番へ直接進む分岐がなく、提供機関の応答待ちを誘発し得る。別記事に救急案内があっても、このページの指示の問題は解消しない。
- points置換案：`急な呼吸困難や意識の異常などでは119番を優先します。`
- 本文置換案：`急な息苦しさ・呼吸困難、意識の異常、激しい胸痛などがある場合は、提供機関への連絡を待たず119番へ通報します。それ以外の体調変化も、治療時に示された連絡基準に従い、提供機関や主治医へ速やかに相談します。`
- 確認資料：[厚生労働省「こんな時は迷わず119へ」](https://kakarikata.mhlw.go.jp/kakaritsuke/urgency.html)。成人の急な息切れ・呼吸困難等を直ちに救急車を呼ぶ症状としている。

### R02 高：`fever-basics` — 意識障害と呼吸困難を通常の早期受診にまとめる

- 場所：section `signals`。
- 原文：`意識がはっきりしない、呼吸が苦しい、水分が取れない、高熱が続く、乳幼児や高齢者でぐったりしているなどの場合は早めに受診します。`
- 問題：緊急度の異なる症状を一括し、重い意識障害や呼吸困難にも「早めに受診」だけを案内している。
- 置換案：`呼びかけへの反応がおかしい、急に呼吸が苦しくなったなどの場合は119番へ通報します。水分が取れない、高熱が続く、乳幼児や高齢者でぐったりしている場合も、状態に応じて速やかに医療機関へ相談・受診してください。`
- 確認資料：[厚生労働省「こんな時は迷わず119へ」](https://kakarikata.mhlw.go.jp/kakaritsuke/urgency.html)。年齢別の緊急症状を確認した。「発熱はすべて救急」とする修正ではない。

### R03 中：`cell-banks-guide` — 骨髄バンクを細胞の在庫保管施設と混同

- 場所：section `public`。
- 原文：`臍帯血や骨髄の公的バンクでは、無償提供された細胞を検査・保存し、適合する患者さんへ分配します。`
- 問題：公的さい帯血バンクと骨髄バンクの実務は異なる。骨髄バンクはドナーを登録し、患者との適合確認、意思確認、採取日程等を調整する。初めから骨髄細胞を在庫保存・分配する説明は、提供者の負担・待機期間の理解を誤らせる。
- 置換案：`公的さい帯血バンクは、提供されたさい帯血を検査・凍結保存し、移植用に供給します。一方、骨髄バンクはドナー登録と患者さんとの適合確認・提供の調整を行う仕組みで、通常は登録時に骨髄細胞を採取して保存するものではありません。`
- 確認資料：[日本骨髄バンク「コーディネートの流れ」](https://www.jmdp.or.jp/recipient/flow/cordinate.html)、[日本赤十字社「さい帯血バンクについて」](https://www.bs.jrc.or.jp/bmdc/generalpublic/m1_02_06_marrowsaitai.html)。前者でドナー検索→確認検査→最終同意→採取・移植、後者でさい帯血の調製・凍結保存・供給を確認。

### R04 中：`cancer-basics` — 免疫療法と再生医療を完全に排他的なものとする

- 場所：points[2]、section `difference`。
- 原文：`免疫療法と再生医療は別物です。`
- 原文：`がんの免疫療法と再生医療は目的も方法も異なります。`
- 問題：免疫チェックポイント阻害薬と組織再生の違いを説明する意図は理解できるが、免疫細胞療法まで一律に除外している。CAR-T細胞療法などは免疫療法であり、日本の再生医療等製品の枠組みにも含まれる。
- points置換案：`免疫療法には、再生医療等製品に含まれる細胞療法もあります。`
- 本文置換案：`免疫療法には免疫チェックポイント阻害薬などの薬物療法と、CAR-T細胞療法などの細胞療法があります。組織の修復を目指す医療とは目的が異なる場合がありますが、免疫細胞療法の一部は日本の再生医療等製品の枠組みに含まれます。`
- 確認資料：[国立がん研究センター「再生医療プラットフォーム」](https://www.ncc.go.jp/jp/information/pr_release/2022/0927_2/index.html)。CAR-T細胞療法を含む再生医療によるがん治療を明示している。自由診療の有効性を肯定する修正ではない。

### R05 低：`dna-basics` — 1組のゲノム長を細胞核全体のDNA量として説明

- 場所：section `structure`。
- 原文：`ヒトの細胞核には約30億塩基対があり、染色体に収められています。`
- 問題：約30億塩基対は1組の核ゲノムの目安。通常の二倍体細胞では父母由来の2組があり、複製前で約60億塩基対となる。単なる推定値の丸めではなく、数える単位の取り違え。
- 置換案：`ヒトの核ゲノム1組は約30億塩基対です。通常の体細胞の核には父母由来の2組があり、DNAを複製する前の状態では合計約60億塩基対が染色体に収められています。`
- 確認資料：[米国NIH/NHGRI「Human Genomic Variation」](https://www.genome.gov/about-genomics/educational-resources/fact-sheets/human-genomic-variation)。1組約30億、通常の細胞は2組と明記。

### R06 中：`hla-rejection` — 一般の輸血にHLA型合わせを一般化

- 場所：section `hla`。
- 原文：`輸血や移植ではこの型の適合が考慮され、合うほど拒絶が起きにくいとされます。`
- 問題：輸血一般と移植の拒絶対策が混ざっている。通常の赤血球輸血の適合確認と、抗HLA抗体等による血小板輸血不応への対応を区別すべき。
- 置換案：`HLAの適合は造血幹細胞移植などで重要です。通常の赤血球輸血では主に赤血球の血液型などを確認し、HLA型を通常は合わせません。一方、抗HLA抗体によって血小板輸血の効果が得られない場合などには、HLA適合血小板が検討されます。`
- 確認資料：[日本赤十字社・岐阜県赤十字血液センター「所長コラム（令和5年5月）」](https://www.bs.jrc.or.jp/tkhr/gifu/2023/05/55-2.html)、[日本赤十字社「HLA検査」](https://www.jrc.or.jp/mr/transfusion/test/hla/)。前者は通常の輸血でHLAを合わせない点、後者は血小板輸血不応の評価を確認できる。

### R07 高：`vessel-regeneration` — 潰瘍・安静時痛を伴う重症虚血にも歩行訓練を一律推奨

- 場所：points[2]、section `daily`。前段 `idea` は「足の潰瘍や安静時痛など、重症の虚血が対象になります。」としている。
- 原文：`歩行や禁煙などの基本対策と並行します。`
- 原文：`禁煙、歩行訓練、血糖や脂質の管理、フットケアが土台です。`
- 問題：間欠性跛行の運動療法を、重症虚血の読者にも無条件で当てはめている。感染を伴う重症虚血では運動療法が禁忌となり、潰瘍・壊疽がある場合には免荷等の個別管理が必要。血行再建の評価より自己判断の歩行を先行させてはならない。
- points置換案：`禁煙やフットケアを続け、歩行訓練の可否は虚血や傷の状態に応じて判断します。`
- 本文置換案：`禁煙、血糖や脂質の管理、フットケアが重要です。歩行訓練は間欠性跛行などで行われますが、安静時痛や潰瘍・壊疽がある場合は血行再建や創傷・感染の評価を優先し、自己判断で始めないでください。運動の可否、荷重や強度は専門医と決めます。`
- 確認資料：[日本循環器学会／日本心臓リハビリテーション学会「2021年改訂版 心血管疾患におけるリハビリテーションに関するガイドライン」](https://www.j-circ.or.jp/cms/wp-content/uploads/2021/03/JCS2021_Makita.pdf)、本文p.65の9.1–9.2、p.66の表53。閲覧版表紙に2026-06-20更新と表示。**重症虚血のすべてで永続的に運動禁止という意味ではない**。

### R08 中：`hematopoietic-transplant` — 同種移植の説明を造血幹細胞移植全体の定義にする

- 場所：points[0]、section `mechanism`。
- 原文：`ドナーの造血幹細胞で血液の仕組みを立て直します。`
- 原文：`大量の化学療法や放射線で病気の細胞を減らした後、ドナー由来の造血幹細胞を点滴で投与し、正常な血液の産生を回復させます。`
- 問題：同種移植の説明としては概ね妥当だが、記事全体の総称には自家移植も含まれる。本人由来の細胞を使う選択肢がないように読める。GVHD等のリスク説明も移植方法に結びつける必要がある。
- points置換案：`自分の細胞を使う自家移植と、ドナー由来の細胞を使う同種移植があります。`
- 本文置換案：`造血幹細胞移植には、あらかじめ採取した本人の細胞を使う自家移植と、ドナー由来の細胞を使う同種移植があります。抗がん薬や放射線による前処置の後に細胞を点滴で投与し、造血の回復を図ります。前処置の強さや合併症、移植の目的は病気と移植方法によって異なります。`
- 続く原文：`骨髄バンクや臍帯血バンクの仕組みに支えられています。`
- 続く文の置換案：`同種移植では血縁者からの提供のほか、骨髄バンクや公的さい帯血バンクを利用する場合があります。`
- 確認資料：[国立がん研究センター「造血幹細胞移植とは」](https://ganjoho.jp/public/dia_tre/treatment/HSCT/hsct01.html)。自家・同種、細胞源、前処置の区分を確認。

### R09 中：`blood-pressure-basics` — 食後血圧は上がると一方向に説明

- 場所：section `measure`。
- 原文：`運動後や食後、カフェインの直後は高めに出ます。`
- 問題：食後に血圧が下がることがあり、とくに高齢者や自律神経障害等では症状にも関わる。「食後＝高め」は測定値の解釈を誤らせる。食事・運動・カフェインを同じ方向の変動としてまとめない。
- 置換案：`運動、食事、カフェインなどで血圧は変動します。食後には血圧が下がる場合もあるため、毎回できるだけ同じ条件で測り、食事や服薬との関係も記録しましょう。`
- 確認資料：[国立長寿医療研究センター「失神：『ちょっと気を失っただけ』と思っていませんか？」](https://www.ncgg.go.jp/hospital/navi/61.html)、起立性低血圧の説明中に食後の血圧低下を明記。今回、運動後の変動量や測定の最適時間は別途定量検証していない。

### R10 中：`work-injury-insurance` — 労災請求に事業主の仲介が必須と読める

- 場所：section `rousai`。
- 原文：`事業主を介して労働基準監督署に請求します。`
- 問題：請求主体は被災労働者等であり、事業主の証明・協力が得られない場合も請求できる。原文の手順だけでは、会社が拒否した場合に請求を諦めるおそれがある。
- 置換案：`労災保険給付は被災した本人や遺族が請求します。必要な書類を事業主などに確認しますが、事業主の証明や協力が得られない場合も請求できるため、労働基準監督署へ相談してください。`
- 確認資料：[宮城労働局「労災保険の手続（事業主用）」](https://jsite.mhlw.go.jp/miyagi-roudoukyoku/2/214.html)、[厚生労働省・労災保険給付FAQ](https://www.mhlw.go.jp/bunya/roudoukijun/faq_kijyungyosei48.html)。請求主体と事業主証明拒否時の扱いを確認。個別の労災認定を判断したものではない。

## 承認更新：原文の誤断定と、現状説明の不足を区別する

親担当からの重要情報を受け、[PMDA「2025年度承認品目一覧（再生医療等製品）」](https://www.pmda.go.jp/files/000280052.pdf)の本文・表を再確認した。リハートとアムシェプリは2026-03-06の条件及び期限付承認、ジャックは2025-05-13に変形性膝関節症が適用対象に追加されている。

原文208記事には「すべてのiPS細胞由来治療が未承認」という断定はない。ただし現在の臨床状況を説明する以下の記事は、研究の話だけでは承認済みの限定的な対象が伝わらない。下記は**中相当の時点更新（U01–U04）**であり、「承認を明示的に否定した誤文」とは数え分ける。原文・evidenceの編集は親統合担当が行う想定で、完全一致する置換対象を示す。

### U01 `ips-cells-explained` — section `status`

- 原文：`日本では加齢黄斑変性や心疾患、パーキンソン病などを対象とした臨床研究・治験が進められてきました。`
- 置換案：`日本では網膜・心臓・神経などの臨床研究・治験が進められてきました。2026年3月6日には、iPS細胞由来のリハートとアムシェプリが、それぞれ対象を限定して条件及び期限付承認を受けました。研究中の治療もあり、iPS細胞由来という名称だけで承認状況は判断できません。`
- source mapping：上記PMDA PDFのリハート・アムシェプリの行。承認＝保険適用・受療可能施設の確約とは書かない。

### U02 `neural-stem-cells` — section `targets`

- 原文：`パーキンソン病、脊髄損傷、脳梗塞などを対象に、iPS細胞などから作った神経系の細胞を用いる臨床研究・治験が進められています。`
- 置換案：`神経系細胞の治療開発は疾患ごとに段階が異なります。アムシェプリは、既存の薬物療法で十分な効果が得られないパーキンソン病の運動症状を対象に、2026年3月6日に条件及び期限付承認を受けたiPS細胞由来ドパミン神経前駆細胞製品です。この承認は脊髄損傷や脳梗塞への承認を意味しません。`
- source mapping：上記PMDA PDFのアムシェプリの行。上記の「既存の薬物療法」はレボドパ含有製剤を含む。厳密な適応・除外条件は添付文書の確認が別途必要。

### U03 `heart-sheet-detail` — section `target`

- 原文：`重症心不全などが対象で、薬物療法や補助人工心臓、移植との関係で検討されます。`
- 置換案：`iPS細胞由来心筋細胞シートのリハートは、標準治療で効果不十分な虚血性心筋症による重症心不全を対象として、2026年3月6日に条件及び期限付承認を受けました。すべての心不全や心筋シートが承認されたという意味ではありません。`
- source mapping：上記PMDA PDFのリハートの行。骨格筋芽細胞シート等の別製品にこの承認を転用しない。

### U04 `cartilage-repair-deep` — section `options`

- 原文：`保存療法、骨髄刺激法、培養軟骨細胞移植などがあり、欠損の大きさや部位、年齢で選択が変わります。`
- 置換案：`保存療法、骨髄刺激法、培養軟骨細胞移植などがあり、欠損の大きさや部位、年齢で選択が変わります。自家培養軟骨ジャックは、2025年5月13日に変形性膝関節症が適用対象に追加されました。すべての患者に適するわけではなく、製品の適応条件を確認します。`
- source mapping：上記PMDA PDFのジャックの行。原文は変形性膝関節症への適応を否定しておらず、従来対象だけに限定する新規追記を防ぐための更新。ジャックはiPS細胞製品ではない。
- 関連する `skin-bone-cartilage` も承認状況の更新候補だが、原文は「培養した軟骨細胞を用いる治療が取り組まれています」とするのみで、誤った限定はしていない。

## 読了したが現段階で誤りとしない重要箇所

- `myths-and-facts`、`autologous-allogeneic` は自家細胞の安全性を明確に保証していない。`self-vs-donor-cells` の「免疫的な適合の面で有利」は限定つきの比較であり、「拒絶ゼロ」とは読まない。`hla-rejection` もHLA一致による拒絶ゼロを否定している。
- `approved-products-japan` は条件・期限付き承認、承認と保険適用の違いを説明している。「安全性が確認された」は制度説明であり、その語だけで絶対安全の保証と判定しない。
- `tax-deduction` は自由診療を一律に対象・対象外としておらず、要件確認を求める記述。`high-cost-care` は自由診療を対象外としている。具体的な還付額・治療価格・最新限度額の検証は、そもそも原文に数値がないため行ったとは主張しない。
- `blood-basics`、`somatic-stem-cells` は白血病への造血幹細胞移植を例示しているだけで、「すべての血液疾患が治る」とは書いていない。`anemia-basics` は鉄欠乏以外の原因と受診を明記する。
- `emergency-care` は呼吸困難等の119番を明記。`heatstroke-dehydration` は自力で飲めない・意識不明瞭の場合に救急車を呼ぶと明記し、意識障害者に無理に飲ませる指示はない。`first-aid-basics` の直接圧迫と119番・指令員の指示は妥当な方向で、詳細不足と危険な手順を混同しない。

上記のうち税・救急等については、[国税庁No.1120](https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1120.htm)、[No.1122](https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1122.htm)、[厚労省・熱中症予防](https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000212502.html)、[日本赤十字社・多量の出血](https://www.jrc.or.jp/study/safety/bleed/)の対象説明と照合した。税の個別適用や全救命手技を検証したという意味ではない。

## 弱い原出典・本文の不足：誤りの断定とは分けて残す

共通出典の `mhlw` は厚労省の**再生・細胞医療・遺伝子治療の入口**、`amed` と `pmda` は機関トップ、`ciraNews` は研究所ニュース一覧である。公的ドメインであるだけでは、次の本文の根拠の対応関係は成立しない。追加文献を確認していないため、以下は**原文referencesの弱さ**についての限定的な指摘である。

| 原文slug | 元のreferences | 足りない対応・必要な資料 |
|---|---|---|
| `first-aid-basics` | `[mhlw]` | 再生医療の制度入口から圧迫止血・救命処置は検証できない。赤十字の止血説明や消防庁の救命講習へ直接対応させる。手袋等の感染防護、正常な呼吸がない場合の心肺蘇生・AEDを扱うかは記事範囲の編集判断。原文が逆の手順を勧めるとまでは判定しない。 |
| `heatstroke-dehydration` | `[mhlw]` | 熱中症の応急対応のページに変更する。「水分を取る」は意識明瞭・安全に飲める場合と明示するとよいが、次段落の救急条件を無視して危険指示と判定しない。 |
| `fever-basics` / `blood-pressure-basics` | `[mhlw]` | 発熱時トリアージ・血圧変動は再生医療制度の資料では支えられない。R02/R09の個別資料へ対応させる。 |
| `vessel-regeneration` | `[amed, pmda]` | 研究費配分機関・規制当局トップは重症虚血の歩行処方の根拠にならない。R07の疾患別ガイドラインが必要。 |
| `work-injury-insurance` | `[mhlw]` | 同じ厚労省でも再生医療の入口は労災の手続根拠ではない。R10の労災資料へ対応させる。 |
| `dna-basics` | `[cira, amed]` | iPS入門・機関トップでは核内のDNA量を直接検証できない。R05の1組・2組の説明を対応させる。 |
| `cord-blood-cells` | `[mhlw]` | 細胞数制約の説明自体を虚偽とはしないが、小児向きという記述だけでは成人での実施状況、細胞数・HLAの選択基準、日本と海外の複数ユニット移植の違いが分からない。移植学会の臍帯血ガイドラインと国内実績が必要。この監査では成人利用比率を算定・確定していない。 |
| `predatory-journals` | `[ciraNews, amed]` | ニュース一覧や研究機関トップは粗悪誌判定基準ではない。「掲載料の請求が目印の一つ」というpointは誤読されやすく、掲載料の有無だけでは判定できない旨を本文内に補う余地がある。個別雑誌の不正認定はしていない。 |
| `organoid-ethics` | `[amed, jsrm]` | 「現状の科学で確かめる手段はありません」は「確立した判定法がない」と「評価の試みもできない」を区別すべき。ISSCRの[研究指針](https://www.isscr.org/guidelines)は現在の意識・痛覚を懸念する生物学的根拠と将来の高度化を分けている。意識の有無そのものを本監査で認定しない。 |

制度記事の追加的な限界も残る。

- `high-cost-care` の認定証の説明は依然利用できる手段の説明であり、誤りとは断定しない。ただしマイナ保険証によって申請・提示を省ける場合を補う必要がある。[厚労省FAQ](https://www.mhlw.go.jp/stf/newpage_40406.html)。原文「限度額認定証の事前申請が便利です。」の更新案は「マイナ保険証の利用で認定証の申請・提示を省ける場合があります。」。最新の自己負担限度額や所得区分を原稿が示していないので、本監査から具体的な家計計算はできない。
- `tax-deduction` は具体的な自由診療を対象と認定していない。治療内容・金額の通常性・補填額・申告者の状況を示さず、控除の可否や還付額まで説明する資料ではない。
- `japanese-society-for-regenerative-medicine` の改正法施行日と旧用語の扱いは[学会の新法関連情報](https://www.jsrm.jp/activity/regulatoryaffairs/)と対応する。所属・個人資格の事実は医療記事の安全性審査とは別で、今回は独立した資格照会をしていない。
- `insurance-card-guide` は資格確認書を案内し、旧保険証が今も全員使用可能とは書いていない。タイトルに「保険証」とあることだけを違法・期限切れ使用の推奨とは判定しない。
- `jibihi-contract` はクーリング・オフの**可否を確認する**記述で、一律適用を保証していない。`advertising-literacy` は禁止・限定解除の細かな区分が薄く、個々の広告の適法性を判定できる内容ではない。

## 完了範囲と未実施事項

通読した全記事を次の台帳に列挙する。「本文読了・個別照合未実施」は**未読でも合格でもなく**、原文の意味は確認したが、その記事の全主張を個別一次資料と突き合わせてはいないという意味である。R/Uのある記事も、確認したのは各指摘の範囲。

未実施：並行追加された文献の本文・書誌・撤回状況の検証、全208記事の全主張の文献対応、英語等の翻訳、最新添付文書の全適応条件・禁忌・承認後変更の網羅確認、記事ごとの医学監修、契約・税・法規の個別判断、修正後表示の回帰確認。記事が短い一般論である場合、具体的な対象・投与法・比較試験・効果量がないことを限界とし、存在しない成功率や安全保証の誤りを作っていない。

## 全208記事の読了台帳

番号は監査時のrawArticles配列順。節数・段落数・points数は原文の構造から集計し、節IDで範囲を特定した。

### basics — 59/59読了

| # | slug | 節/段落/points | 読了した節ID | 判定・照合範囲 |
|---|---|---|---|---|
| 1 | `what-is-regenerative-medicine` | 3/4/3 | overview, research-and-care, questions | 本文読了・個別照合未実施 |
| 2 | `cells-tissues-organs` | 3/6/3 | building-blocks, repair, words | 本文読了・個別照合未実施 |
| 4 | `regenerative-medicine-history` | 3/6/3 | roots, turning-points, today | 本文読了・個別照合未実施 |
| 5 | `three-approaches` | 3/6/3 | transplant, tissue, activate | 本文読了・個別照合未実施 |
| 6 | `myths-and-facts` | 3/6/3 | myth-1-2, myth-3-4, myth-5 | 本文読了／自家なら安全・高額なら有効を否定する実文を確認 |
| 22 | `body-repair-mechanisms` | 3/3/3 | inflammation, scar, organs | 本文読了・個別照合未実施 |
| 23 | `self-vs-donor-cells` | 3/3/3 | autologous, allogeneic, choice | 本文読了／免疫適合の比較を安全保証とは解釈しない |
| 24 | `differentiation-basics` | 3/3/3 | differentiation, reprogram, dediff | 本文読了・個別照合未実施 |
| 25 | `genes-and-cells` | 3/3/3 | blueprint, protein, gene-therapy | 本文読了・個別照合未実施 |
| 26 | `immune-basics` | 3/3/3 | self, hla, measures | 本文読了・個別照合未実施 |
| 27 | `blood-basics` | 3/3/3 | components, hematopoiesis, link | 本文読了／白血病の移植例示、全疾患治癒の断定なし |
| 28 | `skin-bone-cartilage` | 3/3/3 | skin, bone, cartilage | 本文読了／JACC更新の関連箇所、OA否定はない |
| 29 | `nerve-muscle-heart` | 3/3/3 | nerve, heart, muscle | 本文読了・個別照合未実施 |
| 30 | `age-and-regeneration` | 3/3/3 | young, aging, decision | 本文読了・個別照合未実施 |
| 31 | `drugs-surgery-comparison` | 3/3/3 | standard, features, combine | 本文読了・個別照合未実施 |
| 32 | `hospital-words` | 3/3/3 | indication, prognosis, qol | 本文読了・個別照合未実施 |
| 33 | `family-discussion` | 3/3/3 | share, feelings, decide | 本文読了・個別照合未実施 |
| 34 | `next-steps-after-basics` | 3/3/3 | mechanism, treatment, news | 本文読了・個別照合未実施 |
| 74 | `cell-division` | 3/3/3 | mitosis, limit, culture | 本文読了・個別照合未実施 |
| 75 | `dna-basics` | 3/3/3 | structure, gene, read | R05 低 |
| 76 | `proteins-basics` | 3/3/3 | roles, shape, factors | 本文読了・個別照合未実施 |
| 77 | `digestion-absorption` | 3/3/3 | journey, turnover, care | 本文読了・個別照合未実施 |
| 78 | `circulation` | 3/3/3 | route, vessels, delivery | 本文読了・個別照合未実施 |
| 79 | `respiration` | 3/3/3 | exchange, control, culture | 本文読了・個別照合未実施 |
| 80 | `kidney-liver` | 3/3/3 | kidney, liver, care | 本文読了・個別照合未実施 |
| 81 | `brain-basics` | 3/3/3 | cells, areas, repair | 本文読了・個別照合未実施 |
| 82 | `senses` | 3/3/3 | eye, ear, support | 本文読了・個別照合未実施 |
| 83 | `teeth-bones-growth` | 3/3/3 | bone, teeth, kids | 本文読了・個別照合未実施 |
| 84 | `hormones` | 3/3/3 | system, examples, care | 本文読了・個別照合未実施 |
| 85 | `antibodies-vaccines` | 3/3/3 | antibody, vaccine, difference | 本文読了・個別照合未実施 |
| 86 | `allergy-basics` | 3/3/3 | mechanism, types, care | 本文読了・個別照合未実施 |
| 87 | `cancer-basics` | 3/3/3 | what, standard, difference | R04 中 |
| 88 | `diabetes-lifestyle` | 3/3/3 | mechanism, care, research | 本文読了・個別照合未実施 |
| 89 | `pregnancy-cordblood` | 3/3/3 | what, banks, decide | 本文読了・個別照合未実施 |
| 90 | `aging-society` | 3/3/3 | diseases, society, view | 本文読了・個別照合未実施 |
| 91 | `disabilities-support` | 3/3/3 | systems, consult, medical | 本文読了・個別照合未実施 |
| 92 | `rehabilitation-basics` | 3/3/3 | three, timing, combine | 本文読了・個別照合未実施 |
| 93 | `nutrition-basics` | 3/3/3 | five, repair, myths | 本文読了・個別照合未実施 |
| 94 | `exercise-basics` | 3/3/3 | effects, continue, care | 本文読了・個別照合未実施 |
| 95 | `sleep-basics` | 3/3/3 | role, habits, consult | 本文読了・個別照合未実施 |
| 96 | `mental-health-decision` | 3/3/3 | anxiety, cope, help | 本文読了・個別照合未実施 |
| 97 | `health-checkups` | 3/3/3 | kinds, follow, trend | 本文読了・個別照合未実施 |
| 98 | `family-doctor` | 3/3/3 | role, how, referral | 本文読了・個別照合未実施 |
| 149 | `cell-sizes` | 3/3/3 | scale, measure, meaning | 本文読了・個別照合未実施 |
| 150 | `blood-types` | 3/3/3 | abo, transfusion, myths | 本文読了・個別照合未実施 |
| 151 | `body-water` | 3/3/3 | roles, electrolytes, intake | 本文読了・個別照合未実施 |
| 152 | `lymph-system` | 3/3/3 | flow, nodes, swelling | 本文読了・個別照合未実施 |
| 153 | `microbiome` | 3/3/3 | residents, roles, living | 本文読了・個別照合未実施 |
| 154 | `fever-basics` | 3/3/3 | mechanism, care, signals | R02 高 |
| 155 | `pain-basics` | 3/3/3 | signals, perception, telling | 本文読了・個別照合未実施 |
| 156 | `joints-basics` | 3/3/3 | parts, types, care | 本文読了・個別照合未実施 |
| 157 | `fracture-healing` | 3/3/3 | stages, fixation, rehab | 本文読了・個別照合未実施 |
| 158 | `anemia-basics` | 3/3/3 | what, causes, check | 本文読了／鉄欠乏以外の原因と受診を記載 |
| 159 | `blood-pressure-basics` | 3/3/3 | numbers, measure, record | R09 中 |
| 160 | `cholesterol-basics` | 3/3/3 | roles, ldl-hdl, manage | 本文読了・個別照合未実施 |
| 161 | `heatstroke-dehydration` | 3/3/3 | prevent, signs, emergency | 冷却・飲めない場合の救急要請を限定照合／原出典弱い |
| 199 | `thermometer-guide` | 3/3/3 | sites, tips, record | 本文読了・個別照合未実施 |
| 200 | `blood-donation-basics` | 3/3/3 | types, day, after | 本文読了・個別照合未実施 |
| 201 | `microscope-world` | 3/3/3 | types, stain, places | 本文読了・個別照合未実施 |

### stem-cells — 58/58読了

| # | slug | 節/段落/points | 読了した節ID | 判定・照合範囲 |
|---|---|---|---|---|
| 7 | `stem-cell-types` | 2/3/2 | stem-cells, types | 本文読了・個別照合未実施 |
| 8 | `ips-cells-explained` | 3/6/3 | mechanism, uses, status | U01 承認更新 |
| 9 | `es-cells-explained` | 3/6/3 | features, ethics, comparison | 本文読了・個別照合未実施 |
| 10 | `somatic-stem-cells` | 3/6/3 | overview, types, treatment | 本文読了／細胞種類と適応・投与法を区別 |
| 11 | `cell-culture-and-quality` | 3/6/3 | process, quality, facility | 本文読了・個別照合未実施 |
| 35 | `hematopoietic-transplant` | 3/3/3 | mechanism, risks, lesson | R08 中 |
| 36 | `mesenchymal-basics` | 3/3/3 | what, actions, check | 本文読了・個別照合未実施 |
| 37 | `neural-stem-cells` | 3/3/3 | difficulty, targets, rehab | U02 承認更新 |
| 38 | `tissue-stem-cells` | 3/3/3 | active, reserve, culture | 本文読了・個別照合未実施 |
| 39 | `ips-stock` | 3/3/3 | concept, compare, system | 本文読了・個別照合未実施 |
| 40 | `differentiation-purification` | 3/3/3 | induction, purification, check | 本文読了・個別照合未実施 |
| 41 | `genome-editing-difference` | 3/3/3 | editing, combine, ethics | 本文読了・個別照合未実施 |
| 42 | `autologous-allogeneic` | 3/3/3 | flow-self, flow-donor, ask | 本文読了／自家の安全保証を否定する実文を確認 |
| 43 | `tumorigenicity-safety` | 3/3/3 | concern, tests, follow | 本文読了・個別照合未実施 |
| 44 | `hla-rejection` | 3/3/3 | hla, limit, cells | R06 中 |
| 45 | `ips-drug-discovery` | 3/3/3 | model, screening, personal | 本文読了・個別照合未実施 |
| 46 | `organoids-intro` | 3/3/3 | what, uses, limits | 本文読了・個別照合未実施 |
| 47 | `exosomes-notes` | 3/3/3 | what, issues, check | 本文読了・個別照合未実施 |
| 99 | `cell-cycle` | 3/3/3 | phases, checkpoint, culture | 本文読了・個別照合未実施 |
| 100 | `asymmetric-division` | 3/3/3 | what, symmetric, disease | 本文読了・個別照合未実施 |
| 101 | `stemcell-niche` | 3/3/3 | concept, members, culture | 本文読了・個別照合未実施 |
| 102 | `cell-signaling` | 3/3/3 | types, development, therapy | 本文読了・個別照合未実施 |
| 103 | `growth-factors` | 3/3/3 | examples, use, therapy | 本文読了・個別照合未実施 |
| 104 | `scaffolds` | 3/3/3 | materials, design, decell | 本文読了・個別照合未実施 |
| 105 | `bioreactors` | 3/3/3 | why, how, quality | 本文読了・個別照合未実施 |
| 106 | `cryopreservation` | 3/3/3 | damage, methods, thaw | 本文読了・個別照合未実施 |
| 107 | `cord-blood-cells` | 3/3/3 | content, use, banks | 本文読了／成人での実施・細胞選択の裏付け未完 |
| 108 | `dental-pulp-stem` | 3/3/3 | source, research, check | 本文読了・個別照合未実施 |
| 109 | `adipose-stem` | 3/3/3 | source, processing, check | 本文読了・個別照合未実施 |
| 110 | `bone-marrow-system` | 3/3/3 | structure, harvest, donor | 本文読了・個別照合未実施 |
| 111 | `satellite-cells` | 3/3/3 | rest, aging, therapy | 本文読了・個別照合未実施 |
| 112 | `intestinal-stem` | 3/3/3 | structure, culture, disease | 本文読了・個別照合未実施 |
| 113 | `liver-progenitor` | 3/3/3 | regeneration, progenitor, fibrosis | 本文読了・個別照合未実施 |
| 114 | `corneal-regeneration` | 3/3/3 | limbus, sheet, care | 本文読了・個別照合未実施 |
| 115 | `cartilage-repair-deep` | 3/3/3 | why, options, rehab | U04 承認更新 |
| 116 | `tendon-ligament` | 3/3/3 | structure, injury, research | 本文読了・個別照合未実施 |
| 117 | `hair-regeneration` | 3/3/3 | cycle, care, research | 本文読了・個別照合未実施 |
| 118 | `tooth-regeneration` | 3/3/3 | research, now, view | 本文読了・個別照合未実施 |
| 119 | `inner-ear-regeneration` | 3/3/3 | types, support, research | 本文読了・個別照合未実施 |
| 120 | `retina-regeneration` | 3/3/3 | disease, methods, care | 本文読了・個別照合未実施 |
| 121 | `spinal-cord-detail` | 3/3/3 | injury, trials, life | 本文読了・個別照合未実施 |
| 122 | `heart-sheet-detail` | 3/3/3 | sheet, target, check | U03 承認更新 |
| 123 | `direct-reprogramming` | 3/3/3 | what, issues, invivo | 本文読了・個別照合未実施 |
| 162 | `cell-banks-guide` | 3/3/3 | public, private, choose | R03 中 |
| 163 | `culture-media` | 3/3/3 | contents, serum, manage | 本文読了・個別照合未実施 |
| 164 | `cell-sorting` | 3/3/3 | markers, sorter, purity | 本文読了・個別照合未実施 |
| 165 | `placenta-cells` | 3/3/3 | sources, research, consent | 本文読了・個別照合未実施 |
| 166 | `pancreas-progenitor` | 3/3/3 | target, devices, now | 本文読了・個別照合未実施 |
| 167 | `kidney-progenitor` | 3/3/3 | difficulty, research, now | 本文読了・個別照合未実施 |
| 168 | `lung-regeneration` | 3/3/3 | structure, research, daily | 本文読了・個別照合未実施 |
| 169 | `disc-regeneration` | 3/3/3 | disc, pain, research | 本文読了・個別照合未実施 |
| 170 | `vessel-regeneration` | 3/3/3 | idea, status, daily | R07 高 |
| 171 | `bioprinting` | 3/3/3 | how, uses, future | 本文読了・個別照合未実施 |
| 172 | `organ-transplant-basics` | 3/3/3 | donation, allocation, after | 本文読了・個別照合未実施 |
| 173 | `ips-donation` | 3/3/3 | flow, consent, meaning | 本文読了・個別照合未実施 |
| 202 | `ips-nobel-story` | 3/3/3 | prize, after, view | 本文読了・個別照合未実施 |
| 203 | `organoid-ethics` | 3/3/3 | question, rules, readers | ISSCRの現状と将来の区別のみ限定照合 |
| 204 | `home-culture-myth` | 3/3/3 | sterile, control, danger | 本文読了・個別照合未実施 |

### treatment — 58/58読了

| # | slug | 節/段落/points | 読了した節ID | 判定・照合範囲 |
|---|---|---|---|---|
| 12 | `questions-before-treatment` | 2/2/3 | evidence, alternatives | 本文読了・個別照合未実施 |
| 13 | `cost-and-insurance` | 3/6/3 | types, checklist, traps | 本文読了・個別照合未実施 |
| 14 | `risks-and-safety` | 3/6/3 | risks, followup, compare | 本文読了・個別照合未実施 |
| 15 | `second-opinion` | 3/6/3 | what, how, after | 本文読了・個別照合未実施 |
| 16 | `clinical-trials-guide` | 3/6/3 | difference, consent, participation | 本文読了・個別照合未実施 |
| 48 | `first-visit-prep` | 3/3/3 | bring, tell, ask | 本文読了・個別照合未実施 |
| 49 | `informed-consent-howto` | 3/3/3 | three, words, time | 本文読了・個別照合未実施 |
| 50 | `treatment-flow` | 3/3/3 | before, during, after | 本文読了・個別照合未実施 |
| 51 | `insurance-care` | 3/3/3 | search, visit, mixed | 本文読了・個別照合未実施 |
| 52 | `jibihi-contract` | 3/3/3 | money, cancel, trouble | 本文読了／解約・クーリングオフは可否確認に留まる |
| 53 | `advertising-literacy` | 3/3/3 | rule, cases, check | 本文読了／広告の個別適法性の照合は未実施 |
| 54 | `trouble-help` | 3/3/3 | health, contract, report | R01 高 |
| 55 | `aftercare` | 3/3/3 | timing, record, life | 本文読了・個別照合未実施 |
| 56 | `pain-burden` | 3/3/3 | pain, visits, work | 本文読了・個別照合未実施 |
| 57 | `family-decision` | 3/3/3 | will, prepare, team | 本文読了・個別照合未実施 |
| 58 | `elderly-points` | 3/3/3 | meds, function, support | 本文読了・個別照合未実施 |
| 59 | `children-points` | 3/3/3 | growth, assent, research | 本文読了・個別照合未実施 |
| 60 | `final-checklist` | 3/3/3 | medical, contract, compare | 本文読了・個別照合未実施 |
| 124 | `online-care` | 3/3/3 | rule, use, prepare | 本文読了・個別照合未実施 |
| 125 | `referral-letters` | 3/3/3 | role, fee, back | 本文読了・個別照合未実施 |
| 126 | `medical-records` | 3/3/3 | right, how, use | 本文読了・個別照合未実施 |
| 127 | `hospital-choice` | 3/3/3 | results, fit, access | 本文読了・個別照合未実施 |
| 128 | `emergency-care` | 3/3/3 | call, info, trial | 119番の症状案内を厚労省で限定照合 |
| 129 | `pharmacy-use` | 3/3/3 | role, notebook, supplements | 本文読了・個別照合未実施 |
| 130 | `nursing-care-link` | 3/3/3 | team, plan, share | 本文読了・個別照合未実施 |
| 131 | `home-care` | 3/3/3 | kinds, system, family | 本文読了・個別照合未実施 |
| 132 | `work-balance` | 3/3/3 | systems, doctor, plan | 本文読了・個別照合未実施 |
| 133 | `cost-simulation` | 3/3/3 | direct, indirect, compare | 本文読了・個別照合未実施 |
| 134 | `high-cost-care` | 3/3/3 | what, cert, note | 認定証以外の経路を厚労省で限定照合／補足推奨 |
| 135 | `tax-deduction` | 3/3/3 | what, keep, check | 対象費用・所得控除の概要を国税庁で限定照合 |
| 136 | `insurance-review` | 3/3/3 | public, needs, duty | 本文読了・個別照合未実施 |
| 137 | `decision-aids` | 3/3/3 | what, values, talk | 本文読了・個別照合未実施 |
| 138 | `patient-groups` | 3/3/3 | find, use, care | 本文読了・個別照合未実施 |
| 139 | `counseling-support` | 3/3/3 | what, center, prepare | 本文読了・個別照合未実施 |
| 140 | `palliative-care` | 3/3/3 | what, team, use | 本文読了・個別照合未実施 |
| 141 | `rehab-after-treatment` | 3/3/3 | goal, steps, keep | 本文読了・個別照合未実施 |
| 142 | `oral-care-during` | 3/3/3 | why, before, daily | 本文読了・個別照合未実施 |
| 143 | `distant-travel-care` | 3/3/3 | plan, stay, link | 本文読了・個別照合未実施 |
| 144 | `language-support` | 3/3/3 | plain, tools, interpret | 本文読了・個別照合未実施 |
| 145 | `treatment-diary` | 3/3/3 | items, how, use | 本文読了・個別照合未実施 |
| 146 | `reviewing-treatment` | 3/3/3 | timing, sunkcost, next | 本文読了・個別照合未実施 |
| 147 | `childcare-balance` | 3/3/3 | care, systems, share | 本文読了・個別照合未実施 |
| 148 | `medical-payment-help` | 3/3/3 | consult, systems, note | 本文読了・個別照合未実施 |
| 174 | `advance-directives` | 3/3/3 | what, write, share | 本文読了・個別照合未実施 |
| 175 | `patient-rights` | 3/3/3 | rights, records, trouble | 本文読了・個別照合未実施 |
| 176 | `generic-drugs` | 3/3/3 | what, switch, points | 本文読了・個別照合未実施 |
| 177 | `insurance-card-guide` | 3/3/3 | check, myna, trouble | 本文読了／資格確認書の代替経路を記載 |
| 178 | `nursing-care-certification` | 3/3/3 | apply, levels, plan | 本文読了・個別照合未実施 |
| 179 | `driving-illness` | 3/3/3 | effects, system, life | 本文読了・個別照合未実施 |
| 180 | `work-injury-insurance` | 3/3/3 | rousai, sick, steps | R10 中 |
| 181 | `medical-accident-system` | 3/3/3 | system, family, consult | 本文読了・個別照合未実施 |
| 182 | `drug-allergy-record` | 3/3/3 | record, share, otc | 本文読了・個別照合未実施 |
| 183 | `vaccination-adult` | 3/3/3 | types, check, after | 本文読了・個別照合未実施 |
| 184 | `dental-visit-guide` | 3/3/3 | first, plan, prevent | 本文読了・個別照合未実施 |
| 185 | `assistive-devices` | 3/3/3 | types, make, use | 本文読了・個別照合未実施 |
| 186 | `home-safety-elderly` | 3/3/3 | risks, devices, body | 本文読了・個別照合未実施 |
| 205 | `first-aid-basics` | 3/3/3 | safety, bleed, learn | 直接圧迫を赤十字で限定照合／原出典弱い |
| 206 | `medicine-storage` | 3/3/3 | keep, expiry, leftover | 本文読了・個別照合未実施 |

### research — 33/33読了

| # | slug | 節/段落/points | 読了した節ID | 判定・照合範囲 |
|---|---|---|---|---|
| 3 | `japanese-society-for-regenerative-medicine` | 5/11/3 | what-is-jsrm, history-and-activities, certification-system, law-and-safety-information, how-to-use-official-information | 改正法情報を限定照合／個人所属・資格未照会 |
| 17 | `reading-research-news` | 3/3/3 | stage, results, source | 本文読了・個別照合未実施 |
| 18 | `stages-of-research` | 3/6/3 | basic, preclinical, clinical | 本文読了・個別照合未実施 |
| 19 | `evidence-levels` | 3/6/3 | hierarchy, checkpoints, accumulation | 本文読了・個別照合未実施 |
| 20 | `approved-products-japan` | 3/6/3 | system, examples, caution | PMDA承認一覧と区分を限定照合／全添付文書未確認 |
| 21 | `future-perspectives` | 3/6/3 | organoid, organs, personalized | 本文読了・個別照合未実施 |
| 61 | `bench-to-bedside` | 3/3/3 | bridge, team, time | 本文読了・個別照合未実施 |
| 62 | `randomized-trials` | 3/3/3 | random, blind, limits | 本文読了・個別照合未実施 |
| 63 | `case-reports-registries` | 3/3/3 | cases, registry, use | 本文読了・個別照合未実施 |
| 64 | `endpoints` | 3/3/3 | primary, surrogate, patient | 本文読了・個別照合未実施 |
| 65 | `peer-review` | 3/3/3 | review, limits, preprint | 本文読了・個別照合未実施 |
| 66 | `press-release-reading` | 3/3/3 | role, check, next | 本文読了・個別照合未実施 |
| 67 | `statistics-intro` | 3/3/3 | n, ci, meaning | 本文読了・個別照合未実施 |
| 68 | `conflict-of-interest` | 3/3/3 | disclosure, view, check | 本文読了・個別照合未実施 |
| 69 | `overseas-research` | 3/3/3 | systems, tourism, japan | 本文読了・個別照合未実施 |
| 70 | `negative-trials` | 3/3/3 | value, bias, next | 本文読了・個別照合未実施 |
| 71 | `long-term-followup` | 3/3/3 | short-long, dropout, join | 本文読了・個別照合未実施 |
| 72 | `how-to-find-trials` | 3/3/3 | db, criteria, doctor | 本文読了・個別照合未実施 |
| 73 | `world-products` | 3/3/3 | primary, compare, news | 本文読了・個別照合未実施 |
| 187 | `predatory-journals` | 3/3/3 | what, signs, check | 本文読了／原出典と判定基準の対応が弱い |
| 188 | `retractions` | 3/3/3 | what, reasons, use | 本文読了・個別照合未実施 |
| 189 | `open-access` | 3/3/3 | what, fee, use | 本文読了・個別照合未実施 |
| 190 | `impact-factor` | 3/3/3 | what, limits, use | 本文読了・個別照合未実施 |
| 191 | `guideline-reading` | 3/3/3 | grades, evidence, use | 本文読了・個別照合未実施 |
| 192 | `package-insert` | 3/3/3 | sections, side, use | 本文読了・個別照合未実施 |
| 193 | `rwd-basics` | 3/3/3 | what, roles, limits | 本文読了・個別照合未実施 |
| 194 | `expanded-access` | 3/3/3 | what, trials, consider | 本文読了・個別照合未実施 |
| 195 | `first-in-human` | 3/3/3 | purpose, design, join | 本文読了・個別照合未実施 |
| 196 | `decentralized-trials` | 3/3/3 | what, merits, join | 本文読了・個別照合未実施 |
| 197 | `basket-trials` | 3/3/3 | basket, umbrella, points | 本文読了・個別照合未実施 |
| 198 | `digital-therapeutics` | 3/3/3 | what, drugs, use | 本文読了・個別照合未実施 |
| 207 | `nobel-prize-guide` | 3/3/3 | prize, news, use | 本文読了・個別照合未実施 |
| 208 | `science-events` | 3/3/3 | types, find, join | 本文読了・個別照合未実施 |

## 統合担当による修正反映確認（2026-09-22）

上記は改稿前の独立監査として保存しています。その後、記事別JSONの訂正履歴・追加本文を統合し、R01〜R10の対象箇所とU01〜U04の承認状況更新を反映しました。原文の保持は監査用であり、ページには訂正文を出力します。

- 救急案内：`trouble-help`、`fever-basics`。
- 制度・分類・科学説明：`cell-banks-guide`、`cancer-basics`、`dna-basics`、`hla-rejection`、`hematopoietic-transplant`、`blood-pressure-basics`、`work-injury-insurance`。
- 重症虚血での一律の歩行推奨：`vessel-regeneration` の本文と要点。
- 承認状況更新：`ips-cells-explained`、`neural-stem-cells`、`heart-sheet-detail`、`cartilage-repair-deep`。製品・対象の限定を記載し、保険適用や一般的な利用可能性を推定していません。

日本語・英語・中国語の全624記事ページで、JSONに記録された訂正文・追加段落・出典番号の出力を検査しました。これは反映確認であり、独立監査者による最終本文の再監修や、全主張の正しさを保証するものではありません。最終改稿の一覧は [記事別文献改稿台帳](ARTICLE-LITERATURE-AUDIT.md) を参照してください。

構造検査の文言アラート1件（`lymph-system` 英語）は、治癒を保証しない説明の “not a guaranteed cure” を検出したものです。文脈を読み、保証を否定する文であることを確認しました。
