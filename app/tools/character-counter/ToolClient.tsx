"use client";

// 引入 React 的 useState 用於管理輸入文字狀態
import { useState } from "react";
// 引入文字統計函式
import { countStats } from "@/lib/formatters/charCounter";
// 引入平台字數規則
import { PLATFORM_RULES } from "@/lib/platform-rules";

/**
 * 平台字數檢查器的互動元件，即時顯示字元數、行數、emoji 數、hashtag 數與各平台上限提醒。
 * @returns 工具互動介面
 */
export default function ToolClient() {
  // 輸入文字狀態
  const [input, setInput] = useState("");
  const stats = countStats(input);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <label htmlFor="input" className="block text-sm font-bold text-[var(--muted)] mb-2">
          貼上貼文內容
        </label>
        <textarea
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={8}
          className="w-full min-h-[220px] rounded-2xl border border-[var(--line)] bg-white p-3.5 text-[var(--ink)] leading-relaxed outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-[rgba(231,131,54,0.12)]"
          placeholder="在這裡貼上要檢查字數的貼文..."
        />
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-2xl border border-[var(--line)] bg-white p-3 text-center">
          <p className="text-2xl font-bold text-[var(--ink)]">{stats.charCount}</p>
          <p className="text-xs text-[var(--muted)]">字元數</p>
        </div>
        <div className="rounded-2xl border border-[var(--line)] bg-white p-3 text-center">
          <p className="text-2xl font-bold text-[var(--ink)]">{stats.lineCount}</p>
          <p className="text-xs text-[var(--muted)]">行數</p>
        </div>
        <div className="rounded-2xl border border-[var(--line)] bg-white p-3 text-center">
          <p className="text-2xl font-bold text-[var(--ink)]">{stats.emojiCount}</p>
          <p className="text-xs text-[var(--muted)]">Emoji 數</p>
        </div>
        <div className="rounded-2xl border border-[var(--line)] bg-white p-3 text-center">
          <p className="text-2xl font-bold text-[var(--ink)]">{stats.hashtagCount}</p>
          <p className="text-xs text-[var(--muted)]">Hashtag 數</p>
        </div>
      </div>

      <div>
        <p className="text-sm font-bold text-[var(--muted)] mb-2">平台上限提醒</p>
        <div className="flex flex-col gap-2">
          {PLATFORM_RULES.map((rule) => {
            const over = stats.charCount > rule.limit;
            return (
              <div
                key={rule.id}
                className={`flex flex-wrap items-center justify-between gap-x-3 gap-y-1 rounded-2xl border p-3 text-sm ${
                  over
                    ? "border-red-300 bg-red-50 text-red-700"
                    : "border-[var(--line)] bg-white text-[var(--ink)]"
                }`}
              >
                <div className="min-w-0">
                  <span className="font-bold">{rule.name}</span>
                  <span className="text-xs text-[var(--muted)] ml-2">{rule.note}</span>
                </div>
                <span className="font-mono shrink-0">
                  {stats.charCount}/{rule.limit}
                  {over ? "（超過上限）" : ""}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
