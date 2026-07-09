// 定義單一工具的中繼資料型別
export type ToolMeta = {
  id: string;
  icon: string;
  name: string;
  description: string;
  href: string;
  available: boolean;
};

// 第一版工具清單，依規格文件排序
export const TOOLS: ToolMeta[] = [
  {
    id: "text-cleaner",
    icon: "🧹",
    name: "貼上文字清理器",
    description: "去除多餘空白、空行，換行逗號互轉，名單去重、全形轉半形。",
    href: "/tools/text-cleaner",
    available: true,
  },
  {
    id: "social-post-formatter",
    icon: "📝",
    name: "社群貼文格式整理器",
    description: "貼上亂文字，一鍵整理成 LINE、IG、Threads 可用格式。",
    href: "/tools/social-post-formatter",
    available: true,
  },
  {
    id: "character-counter",
    icon: "🔢",
    name: "平台字數檢查器",
    description: "即時顯示字元數、行數、emoji 數與平台字數上限提醒。",
    href: "/tools/character-counter",
    available: true,
  },
  {
    id: "emoji-text-editor",
    icon: "✨",
    name: "Emoji 文案編輯器",
    description: "產生 emoji 標題、分隔線、顏文字，並可一鍵移除 emoji。",
    href: "/tools/emoji-text-editor",
    available: true,
  },
  {
    id: "days-until-date",
    icon: "📅",
    name: "日期倒數工具",
    description: "計算今天到某日期還有幾天，產生可複製的倒數文案。",
    href: "/tools/days-until-date",
    available: true,
  },
  {
    id: "personal-info-masker",
    icon: "🛡️",
    name: "個資遮罩工具",
    description: "批次遮罩電話、Email、身分證，適合對外分享前處理。",
    href: "/tools/personal-info-masker",
    available: true,
  },
];
