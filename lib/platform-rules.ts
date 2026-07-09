// 平台字數規則型別，統一管理各平台字數上限，避免散落在元件中
export type PlatformRule = {
  id: string;
  name: string;
  limit: number;
  note: string;
};

// 各社群平台的字數上限規則（第一版先以常見上限為主，後續可改由後台設定）
export const PLATFORM_RULES: PlatformRule[] = [
  { id: "line", name: "LINE 訊息", limit: 5000, note: "群組公告建議 500 字內較好閱讀" },
  { id: "instagram", name: "Instagram 貼文", limit: 2200, note: "前 125 字最重要，會出現在摘要" },
  { id: "threads", name: "Threads 貼文", limit: 500, note: "單則貼文上限" },
  { id: "facebook", name: "Facebook 貼文", limit: 63206, note: "建議實際控制在 400~600 字" },
  { id: "linkedin", name: "LinkedIn 貼文", limit: 3000, note: "前 3 行會決定是否被展開閱讀" },
  { id: "xiaohongshu", name: "小紅書筆記", limit: 1000, note: "標題另有 20 字上限" },
];
