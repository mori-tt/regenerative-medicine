export type BannerAd = {
  advertiser: string;
  href: string;
  image: string;
  alt: string;
  width: number;
  height: number;
};

// 契約・素材確認後に設定。画像は public/ 配下へ置き、/ から始まるパスを指定。
// 掲載の開始・終了には再ビルドとアップロードが必要です。
export const bannerAds: { home: BannerAd | null; article: BannerAd | null } = {
  home: null,
  article: null,
};
