// 支援的平台清單
export const PLATFORMS = ["LINE", "Instagram", "Threads", "Facebook", "LinkedIn", "小紅書"] as const;
export type Platform = (typeof PLATFORMS)[number];

// 支援的風格清單
export const STYLES = ["乾淨好讀", "可愛小編", "質感品牌", "活動公告", "專業正式"] as const;
export type Style = (typeof STYLES)[number];

// 各風格對應的段落間 emoji 前綴（空字串代表不加）
const STYLE_BULLET: Record<Style, string> = {
  乾淨好讀: "・",
  可愛小編: "💕",
  質感品牌: "",
  活動公告: "📌",
  專業正式: "▪",
};

// 各平台對應的段落最大長度建議，超過就強制斷行
const PLATFORM_LINE_WIDTH: Record<Platform, number> = {
  LINE: 40,
  Instagram: 30,
  Threads: 35,
  Facebook: 50,
  LinkedIn: 60,
  小紅書: 25,
};

/**
 * 將原始文字依平台與風格整理成可發文格式：去除多餘空白空行、依段落加上風格符號、控制斷行寬度。
 * @param text 原始文字
 * @param platform 目標平台
 * @param style 目標風格
 * @returns 整理後的貼文文字
 */
export function formatSocialPost(text: string, platform: Platform, style: Style): string {
  const bullet = STYLE_BULLET[style];
  const maxWidth = PLATFORM_LINE_WIDTH[platform];

  // 依空行切段落，並移除每段前後多餘空白
  const paragraphs = text
    .split(/\n{2,}/)
    .map((p) => p.replace(/[ \t]+/g, " ").trim())
    .filter((p) => p.length > 0);

  const formatted = paragraphs.map((paragraph) => {
    // 段落內依標點斷句，控制每行長度避免太擠
    const lines = wrapByWidth(paragraph, maxWidth);
    if (!bullet) return lines.join("\n");
    return lines.map((line, i) => (i === 0 ? `${bullet} ${line}` : line)).join("\n");
  });

  return formatted.join("\n\n");
}

/**
 * 依指定寬度將一段文字斷成多行，優先在句號、逗號處斷行。
 * @param text 段落文字
 * @param maxWidth 每行最大字元數
 * @returns 斷行後的文字陣列
 */
function wrapByWidth(text: string, maxWidth: number): string[] {
  const lines: string[] = [];
  let current = "";
  for (const char of text) {
    current += char;
    const isBreakPoint = "。！？，、".includes(char);
    if (current.length >= maxWidth || (isBreakPoint && current.length >= maxWidth * 0.6)) {
      lines.push(current.trim());
      current = "";
    }
  }
  if (current.trim().length > 0) lines.push(current.trim());
  return lines.length > 0 ? lines : [text];
}
