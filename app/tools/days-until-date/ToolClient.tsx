"use client";

// 引入 React 的 useState 用於管理表單狀態
import { useState } from "react";
// 引入日期倒數計算函式
import { diffDays, buildCountdownText } from "@/lib/formatters/dateDiff";

/**
 * 日期倒數工具的互動元件，輸入目標日期與事件名稱後計算天數差並產生可複製文案。
 * @returns 工具互動介面
 */
export default function ToolClient() {
  // 事件名稱輸入
  const [label, setLabel] = useState("");
  // 目標日期輸入，預設為今天
  const [targetDate, setTargetDate] = useState("");
  // 複製成功提示狀態
  const [copied, setCopied] = useState(false);

  const result = targetDate ? diffDays(new Date(), new Date(targetDate)) : null;
  const countdownText =
    result && targetDate ? buildCountdownText(label, targetDate, result) : "";

  // 複製倒數文案到剪貼簿
  async function handleCopy() {
    if (!countdownText) return;
    await navigator.clipboard.writeText(countdownText);
    setCopied(true);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="label" className="block text-sm font-bold text-[var(--muted)] mb-2">
            事件名稱（選填）
          </label>
          <input
            id="label"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="例如：活動報名截止"
            className="w-full rounded-2xl border border-[var(--line)] bg-white p-3 text-[var(--ink)] outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-[rgba(231,131,54,0.12)]"
          />
        </div>
        <div>
          <label htmlFor="target" className="block text-sm font-bold text-[var(--muted)] mb-2">
            目標日期
          </label>
          <input
            id="target"
            type="date"
            value={targetDate}
            onChange={(e) => {
              setTargetDate(e.target.value);
              setCopied(false);
            }}
            className="w-full rounded-2xl border border-[var(--line)] bg-white p-3 text-[var(--ink)] outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-[rgba(231,131,54,0.12)]"
          />
        </div>
      </div>

      {result && (
        <div className="rounded-2xl border border-[var(--line)] bg-white p-4">
          <p className="text-lg font-bold text-[var(--ink)]">
            {result.isPast
              ? `已經過了 ${result.days} 天`
              : `還有 ${result.days} 天`}
          </p>
          <p className="text-sm text-[var(--muted)] mt-1">
            也就是 {result.weeks} 週又 {result.remainderDays} 天
          </p>
        </div>
      )}

      <div>
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="output" className="block text-sm font-bold text-[var(--muted)]">
            可複製文案
          </label>
          <button
            onClick={handleCopy}
            disabled={!countdownText}
            className="rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] px-3.5 py-1.5 text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(231,131,54,0.28)] hover:opacity-90 disabled:opacity-50"
          >
            {copied ? "已複製" : "複製文案"}
          </button>
        </div>
        <div
          id="output"
          className="w-full min-h-[100px] whitespace-pre-wrap rounded-2xl border border-[var(--line)] bg-white p-3.5 leading-relaxed text-[var(--ink)]"
        >
          {countdownText || "選擇目標日期後，這裡會顯示可複製的倒數文案"}
        </div>
      </div>
    </div>
  );
}
