// 全形字元對應半形字元的映射表（含常見全形標點）
const FULLWIDTH_TO_HALFWIDTH: Record<string, string> = {
  "，": ",",
  "。": ".",
  "！": "!",
  "？": "?",
  "：": ":",
  "；": ";",
  "（": "(",
  "）": ")",
  "「": '"',
  "」": '"',
  "『": "'",
  "』": "'",
  "【": "[",
  "】": "]",
  "、": ",",
};

/**
 * 移除每行前後多餘空白，並將行內連續空白（含全形空白）壓縮為單一半形空白。
 * @param text 原始文字
 * @returns 清理後的文字
 */
export function removeExtraSpaces(text: string): string {
  return text
    .split("\n")
    .map((line) => line.replace(/[　\s]+/g, " ").trim())
    .join("\n");
}

/**
 * 移除多餘的空白行，將連續兩行以上的空行壓縮成單一空行。
 * @param text 原始文字
 * @returns 清理後的文字
 */
export function removeExtraBlankLines(text: string): string {
  return text.replace(/\n{3,}/g, "\n\n");
}

/**
 * 將文字中的換行符轉換為逗號，常用於名單整理。
 * @param text 原始文字（每行一筆資料）
 * @returns 以逗號分隔的單行文字
 */
export function newlineToComma(text: string): string {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .join(", ");
}

/**
 * 將文字中的逗號轉換為換行，常用於名單整理。
 * @param text 原始文字（以逗號分隔）
 * @returns 每筆資料獨立一行的文字
 */
export function commaToNewline(text: string): string {
  return text
    .split(/[,，]/)
    .map((item) => item.trim())
    .filter((item) => item.length > 0)
    .join("\n");
}

/**
 * 將以換行分隔的名單去除重複項目，並保留原始出現順序。
 * @param text 原始文字（每行一筆資料）
 * @returns 去重後的文字
 */
export function deduplicateLines(text: string): string {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const rawLine of text.split("\n")) {
    const line = rawLine.trim();
    if (line.length === 0) continue;
    if (seen.has(line)) continue;
    seen.add(line);
    result.push(line);
  }
  return result.join("\n");
}

/**
 * 將全形英數與常見全形標點轉換為半形，中文文件排版常見需求。
 * @param text 原始文字
 * @returns 轉換後的文字
 */
export function fullwidthToHalfwidth(text: string): string {
  let result = "";
  for (const char of text) {
    const code = char.charCodeAt(0);
    if (code >= 0xff01 && code <= 0xff5e) {
      // 全形英數符號區間，偏移量固定為 0xfee0
      result += String.fromCharCode(code - 0xfee0);
    } else if (code === 0x3000) {
      // 全形空白對應半形空白
      result += " ";
    } else if (FULLWIDTH_TO_HALFWIDTH[char]) {
      result += FULLWIDTH_TO_HALFWIDTH[char];
    } else {
      result += char;
    }
  }
  return result;
}

/**
 * 將以換行分隔的名單依字典順序排序。
 * @param text 原始文字（每行一筆資料）
 * @returns 排序後的文字
 */
export function sortLines(text: string): string {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .sort((a, b) => a.localeCompare(b, "zh-Hant"))
    .join("\n");
}
