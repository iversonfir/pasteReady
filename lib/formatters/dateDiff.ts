// 日期倒數計算結果型別
export type DateDiffResult = {
  days: number;
  weeks: number;
  remainderDays: number;
  isPast: boolean;
};

/**
 * 計算兩個日期之間相差的天數（以日曆日為單位，忽略時分秒）。
 * @param from 起始日期
 * @param to 目標日期
 * @returns 天數差、週數、剩餘天數與是否為過去日期
 */
export function diffDays(from: Date, to: Date): DateDiffResult {
  // 只取日期部分，避免時區與時分秒造成誤差
  const start = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  const end = new Date(to.getFullYear(), to.getMonth(), to.getDate());
  const msPerDay = 24 * 60 * 60 * 1000;
  const rawDays = Math.round((end.getTime() - start.getTime()) / msPerDay);
  const days = Math.abs(rawDays);
  return {
    days,
    weeks: Math.floor(days / 7),
    remainderDays: days % 7,
    isPast: rawDays < 0,
  };
}

/**
 * 產生可直接複製貼上的倒數文案。
 * @param label 事件名稱，例如「活動報名截止」
 * @param targetDate 目標日期字串（yyyy-mm-dd）
 * @param result 倒數計算結果
 * @returns 一段可分享的倒數文案
 */
export function buildCountdownText(
  label: string,
  targetDate: string,
  result: DateDiffResult
): string {
  const title = label.trim() || "目標日";
  if (result.isPast) {
    return `${title}（${targetDate}）已經過了 ${result.days} 天。`;
  }
  const weekPart =
    result.weeks > 0
      ? `也就是 ${result.weeks} 週又 ${result.remainderDays} 天`
      : "";
  return [
    `距離${title}（${targetDate}）還有 ${result.days} 天`,
    weekPart,
    `現在開始還不晚。`,
  ]
    .filter((line) => line.length > 0)
    .join("\n");
}
