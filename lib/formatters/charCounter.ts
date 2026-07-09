// 文字統計結果型別
export type TextStats = {
  charCount: number;
  lineCount: number;
  emojiCount: number;
  hashtagCount: number;
};

// 常見 emoji 的 Unicode 區間，涵蓋表情、符號、交通標誌等常用範圍
const EMOJI_REGEX =
  /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{1F1E6}-\u{1F1FF}]/gu;
// Hashtag 規則：# 後接中英文、數字或底線
const HASHTAG_REGEX = /#[\w一-龥]+/g;

/**
 * 計算文字的字元數、行數、emoji 數與 hashtag 數。
 * @param text 原始文字
 * @returns 文字統計結果
 */
export function countStats(text: string): TextStats {
  const emojiMatches = text.match(EMOJI_REGEX);
  const hashtagMatches = text.match(HASHTAG_REGEX);
  return {
    charCount: [...text].length,
    lineCount: text.length === 0 ? 0 : text.split("\n").length,
    emojiCount: emojiMatches ? emojiMatches.length : 0,
    hashtagCount: hashtagMatches ? hashtagMatches.length : 0,
  };
}
