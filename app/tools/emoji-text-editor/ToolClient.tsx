"use client";

// 引入 React 的 useState 用於管理輸入輸出狀態
import { useState } from "react";
// 引入 emoji 相關資料與函式
import {
  DIVIDERS,
  KAOMOJIS,
  EMOJI_CATEGORIES,
  buildEmojiTitle,
  removeEmoji,
} from "@/lib/formatters/emoji";

/**
 * Emoji 文案編輯器的互動元件，提供標題產生、分隔線、顏文字、分類 emoji 與移除功能。
 * @returns 工具互動介面
 */
export default function ToolClient() {
  // 標題輸入文字
  const [titleInput, setTitleInput] = useState("");
  // 標題包裹用 emoji
  const [titleEmoji, setTitleEmoji] = useState("✨");
  // 移除 emoji 用的輸入文字
  const [cleanInput, setCleanInput] = useState("");
  // 已複製的項目文字，用於顯示提示
  const [copiedItem, setCopiedItem] = useState("");

  // 複製指定文字到剪貼簿
  async function copyText(text: string) {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setCopiedItem(text);
    setTimeout(() => setCopiedItem(""), 1500);
  }

  const titleResult = buildEmojiTitle(titleInput, titleEmoji);
  const cleanedResult = removeEmoji(cleanInput);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm font-bold text-[var(--muted)] mb-2">Emoji 標題產生</p>
        <div className="flex flex-wrap gap-2 mb-2">
          <input
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
            placeholder="輸入標題文字，例如：新品上市"
            className="flex-1 min-w-[180px] rounded-2xl border border-[var(--line)] bg-white p-3 text-[var(--ink)] outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-[rgba(231,131,54,0.12)]"
          />
          <input
            value={titleEmoji}
            onChange={(e) => setTitleEmoji(e.target.value)}
            className="w-20 rounded-2xl border border-[var(--line)] bg-white p-3 text-center text-[var(--ink)] outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-[rgba(231,131,54,0.12)]"
          />
        </div>
        {titleResult && (
          <button
            onClick={() => copyText(titleResult)}
            className="w-full rounded-2xl border border-[var(--line)] bg-white p-3 text-left text-[var(--ink)] hover:border-[var(--brand-2)]"
          >
            {titleResult}
            <span className="ml-2 text-xs text-[var(--muted)]">
              {copiedItem === titleResult ? "已複製" : "點擊複製"}
            </span>
          </button>
        )}
      </div>

      <div>
        <p className="text-sm font-bold text-[var(--muted)] mb-2">分隔線產生</p>
        <div className="flex flex-col gap-2">
          {DIVIDERS.map((divider) => (
            <button
              key={divider}
              onClick={() => copyText(divider)}
              className="rounded-2xl border border-[var(--line)] bg-white p-3 text-left text-[var(--ink)] hover:border-[var(--brand-2)]"
            >
              {divider}
              <span className="ml-2 text-xs text-[var(--muted)]">
                {copiedItem === divider ? "已複製" : "點擊複製"}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-bold text-[var(--muted)] mb-2">顏文字複製</p>
        <div className="flex flex-wrap gap-2">
          {KAOMOJIS.map((kaomoji) => (
            <button
              key={kaomoji}
              onClick={() => copyText(kaomoji)}
              className="rounded-full border border-[var(--line)] bg-white px-3.5 py-2 text-sm text-[var(--ink)] hover:border-[var(--brand-2)]"
            >
              {kaomoji}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-bold text-[var(--muted)] mb-2">Emoji 分類</p>
        <div className="flex flex-col gap-3">
          {Object.entries(EMOJI_CATEGORIES).map(([category, emojis]) => (
            <div key={category} className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-[var(--muted)] w-12">{category}</span>
              {emojis.map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => copyText(emoji)}
                  className="rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-lg hover:border-[var(--brand-2)]"
                >
                  {emoji}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-bold text-[var(--muted)] mb-2">Emoji 移除</p>
        <textarea
          value={cleanInput}
          onChange={(e) => setCleanInput(e.target.value)}
          rows={5}
          className="w-full rounded-2xl border border-[var(--line)] bg-white p-3.5 text-[var(--ink)] leading-relaxed outline-none focus:border-[var(--brand)] focus:ring-4 focus:ring-[rgba(231,131,54,0.12)]"
          placeholder="貼上含 emoji 的貼文，一鍵移除所有 emoji..."
        />
        {cleanInput && (
          <div className="mt-2 flex flex-col gap-2">
            <div className="whitespace-pre-wrap rounded-2xl border border-[var(--line)] bg-white p-3.5 text-[var(--ink)]">
              {cleanedResult}
            </div>
            <button
              onClick={() => copyText(cleanedResult)}
              className="self-start rounded-full bg-gradient-to-br from-[var(--brand)] to-[var(--brand-2)] px-3.5 py-1.5 text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(231,131,54,0.28)] hover:opacity-90"
            >
              {copiedItem === cleanedResult ? "已複製" : "複製結果"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
