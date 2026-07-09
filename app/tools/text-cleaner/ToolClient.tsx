"use client";

// 引入 React 的 useState 用於管理輸入輸出文字狀態
import { useState } from "react";
// 引入所有文字清理函式
import {
  removeExtraSpaces,
  removeExtraBlankLines,
  newlineToComma,
  commaToNewline,
  deduplicateLines,
  fullwidthToHalfwidth,
  sortLines,
} from "@/lib/formatters/cleanText";

// 定義每個操作按鈕對應的名稱與處理函式
const ACTIONS: { label: string; run: (text: string) => string }[] = [
  { label: "去除多餘空白", run: removeExtraSpaces },
  { label: "去除多餘空行", run: removeExtraBlankLines },
  { label: "換行轉逗號", run: newlineToComma },
  { label: "逗號轉換行", run: commaToNewline },
  { label: "名單去重", run: deduplicateLines },
  { label: "全形轉半形", run: fullwidthToHalfwidth },
  { label: "排序", run: sortLines },
];

/**
 * 貼上文字清理器的互動元件，提供多種一鍵文字整理操作。
 * @returns 工具互動介面
 */
export default function ToolClient() {
  // 輸入文字狀態
  const [input, setInput] = useState("");
  // 輸出文字狀態
  const [output, setOutput] = useState("");
  // 複製成功提示狀態
  const [copied, setCopied] = useState(false);

  // 執行指定操作並更新輸出
  function handleRun(run: (text: string) => string) {
    setOutput(run(input));
    setCopied(false);
  }

  // 複製輸出結果到剪貼簿
  async function handleCopy() {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <label htmlFor="input" className="block text-sm font-bold text-[var(--muted)] mb-2">
          貼上文字
        </label>
        <textarea
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={8}
          className="w-full min-h-[220px] rounded-2xl border border-[var(--line)] bg-white p-3.5 text-[var(--ink)] leading-relaxed outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-[rgba(231,131,54,0.12)]"
          placeholder="在這裡貼上要整理的文字..."
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {ACTIONS.map((action) => (
          <button
            key={action.label}
            onClick={() => handleRun(action.run)}
            className="rounded-full border border-[var(--line)] bg-white px-3.5 py-2 text-sm font-extrabold text-[var(--ink)] hover:border-[var(--brand-2)] hover:text-[var(--brand-dark)]"
          >
            {action.label}
          </button>
        ))}
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="output" className="block text-sm font-bold text-[var(--muted)]">
            整理結果
          </label>
          <button
            onClick={handleCopy}
            className="rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] px-3.5 py-1.5 text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(231,131,54,0.28)] hover:opacity-90"
          >
            {copied ? "已複製" : "複製結果"}
          </button>
        </div>
        <div
          id="output"
          className="w-full min-h-[220px] whitespace-pre-wrap rounded-2xl border border-[var(--line)] bg-white p-3.5 leading-relaxed text-[var(--ink)]"
        >
          {output || "結果會顯示在這裡"}
        </div>
      </div>
    </div>
  );
}
