"use client";

// 引入 React 的 useState 用於管理表單狀態
import { useState } from "react";
// 引入社群貼文格式化函式與平台、風格清單
import {
  formatSocialPost,
  PLATFORMS,
  STYLES,
  type Platform,
  type Style,
} from "@/lib/formatters/socialFormat";

/**
 * 社群貼文格式整理器的互動元件，依選擇的平台與風格整理貼文格式。
 * @returns 工具互動介面
 */
export default function ToolClient() {
  // 輸入文字狀態
  const [input, setInput] = useState("");
  // 選擇的平台
  const [platform, setPlatform] = useState<Platform>("LINE");
  // 選擇的風格
  const [style, setStyle] = useState<Style>("乾淨好讀");
  // 複製成功提示狀態
  const [copied, setCopied] = useState(false);

  const output = input ? formatSocialPost(input, platform, style) : "";

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
          貼上原始文字
        </label>
        <textarea
          id="input"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setCopied(false);
          }}
          rows={8}
          className="w-full min-h-[220px] rounded-2xl border border-[var(--line)] bg-white p-3.5 text-[var(--ink)] leading-relaxed outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-[rgba(231,131,54,0.12)]"
          placeholder="在這裡貼上要整理的貼文內容..."
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-bold text-[var(--muted)] mb-2">平台</label>
          <div className="flex flex-wrap gap-2">
            {PLATFORMS.map((p) => (
              <button
                key={p}
                onClick={() => setPlatform(p)}
                className={`rounded-full border px-3.5 py-2 text-sm font-extrabold ${
                  platform === p
                    ? "border-[var(--brand)] bg-[rgba(231,131,54,0.12)] text-[var(--brand-dark)]"
                    : "border-[var(--line)] bg-white text-[var(--ink)] hover:border-[var(--brand-2)]"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold text-[var(--muted)] mb-2">風格</label>
          <div className="flex flex-wrap gap-2">
            {STYLES.map((s) => (
              <button
                key={s}
                onClick={() => setStyle(s)}
                className={`rounded-full border px-3.5 py-2 text-sm font-extrabold ${
                  style === s
                    ? "border-[var(--brand)] bg-[rgba(231,131,54,0.12)] text-[var(--brand-dark)]"
                    : "border-[var(--line)] bg-white text-[var(--ink)] hover:border-[var(--brand-2)]"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="output" className="block text-sm font-bold text-[var(--muted)]">
            整理結果
          </label>
          <button
            onClick={handleCopy}
            disabled={!output}
            className="rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] px-3.5 py-1.5 text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(231,131,54,0.28)] hover:opacity-90 disabled:opacity-50"
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
