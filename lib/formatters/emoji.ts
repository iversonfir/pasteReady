// 分隔線樣式清單
export const DIVIDERS = ["──────────", "✦ ─── ✦ ─── ✦", "🌿🌿🌿🌿🌿🌿", "・゜゜・。。・゜゜・"];

// 顏文字清單
export const KAOMOJIS = [
  "(๑•̀ㅂ•́)و✧",
  "(＾▽＾)",
  "(ノ´ヮ´)ノ*:・゚✧",
  "( ˘ ³˘)♥",
  "(╯°□°）╯",
  "٩(◕‿◕｡)۶",
];

// Emoji 分類與對應常用 emoji
export const EMOJI_CATEGORIES: Record<string, string[]> = {
  公告: ["📢", "📣", "🔔", "📌"],
  活動: ["🎉", "🎊", "🎪", "🎫"],
  優惠: ["💸", "🏷️", "🎁", "🔥"],
  生日: ["🎂", "🎈", "🥳", "🎀"],
  課程: ["📚", "✏️", "🧑‍🏫", "📝"],
};

// 常見 emoji 的 Unicode 區間，用於移除文字中的 emoji
const EMOJI_REGEX =
  /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{1F1E6}-\u{1F1FF}]/gu;

/**
 * 在標題文字前後加上同一組 emoji，產生醒目的標題格式。
 * @param title 標題文字
 * @param emoji 要包裹標題的 emoji
 * @returns 加上 emoji 的標題
 */
export function buildEmojiTitle(title: string, emoji: string): string {
  const trimmed = title.trim();
  if (!trimmed) return "";
  return `${emoji} ${trimmed} ${emoji}`;
}

/**
 * 移除文字中所有 emoji。
 * @param text 原始文字
 * @returns 移除 emoji 後的文字
 */
export function removeEmoji(text: string): string {
  return text.replace(EMOJI_REGEX, "").replace(/[ \t]{2,}/g, " ");
}
