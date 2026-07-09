// 台灣手機號碼格式：09xx-xxx-xxx
const TW_MOBILE_REGEX = /(09\d{2})[-\s]?(\d{3})[-\s]?(\d{3})/g;
// Email 格式
const EMAIL_REGEX = /([a-zA-Z0-9._%+-]+)(@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
// 台灣身分證格式：一碼英文 + 九碼數字
const TW_ID_REGEX = /\b([A-Za-z])(\d{8})(\d)\b/g;

/**
 * 將台灣手機號碼統一格式化為 09xx-xxx-xxx。
 * @param text 原始文字
 * @returns 格式化後的文字
 */
export function formatTwMobile(text: string): string {
  return text.replace(TW_MOBILE_REGEX, "$1-$2-$3");
}

/**
 * 將文字中的台灣手機號碼遮罩為 09xx-***-xxx。
 * @param text 原始文字
 * @returns 遮罩後的文字
 */
export function maskTwMobile(text: string): string {
  return text.replace(TW_MOBILE_REGEX, "$1-***-$3");
}

/**
 * 將文字中的 Email 帳號部分遮罩，僅保留前兩碼。
 * @param text 原始文字
 * @returns 遮罩後的文字
 */
export function maskEmail(text: string): string {
  return text.replace(EMAIL_REGEX, (_match, account: string, domain: string) => {
    const visible = account.slice(0, 2);
    return `${visible}${"*".repeat(Math.max(account.length - 2, 1))}${domain}`;
  });
}

/**
 * 將文字中的台灣身分證字號遮罩，僅保留首碼與末碼。
 * @param text 原始文字
 * @returns 遮罩後的文字
 */
export function maskTwId(text: string): string {
  return text.replace(TW_ID_REGEX, (_match, first: string, _middle: string, last: string) => {
    return `${first}${"*".repeat(8)}${last}`;
  });
}

/**
 * 依序套用手機、Email、身分證遮罩，適合批次處理整份名單。
 * @param text 原始文字
 * @returns 全部遮罩後的文字
 */
export function maskAll(text: string): string {
  return maskTwId(maskEmail(maskTwMobile(text)));
}
