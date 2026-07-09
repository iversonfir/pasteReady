"use client";

// 引入 React 的 useState 用於管理目前選中的工具
import { useState } from "react";
// 引入工具清單中繼資料
import { TOOLS } from "@/lib/tools";
// 引入各工具的互動元件
import TextCleanerClient from "@/app/tools/text-cleaner/ToolClient";
import SocialPostFormatterClient from "@/app/tools/social-post-formatter/ToolClient";
import CharacterCounterClient from "@/app/tools/character-counter/ToolClient";
import EmojiTextEditorClient from "@/app/tools/emoji-text-editor/ToolClient";
import DaysUntilDateClient from "@/app/tools/days-until-date/ToolClient";
import PersonalInfoMaskerClient from "@/app/tools/personal-info-masker/ToolClient";

// 工具 id 對應其互動元件
const TOOL_CLIENTS: Record<string, () => React.JSX.Element> = {
  "text-cleaner": TextCleanerClient,
  "social-post-formatter": SocialPostFormatterClient,
  "character-counter": CharacterCounterClient,
  "emoji-text-editor": EmojiTextEditorClient,
  "days-until-date": DaysUntilDateClient,
  "personal-info-masker": PersonalInfoMaskerClient,
};

/**
 * 首頁工作區：左側由上至下列出所有工具，右側預設載入第一個工具的內容。
 * @returns 左右分欄的工作區元件
 */
export default function Workspace() {
  // 目前選中的工具 id，預設為清單第一個工具
  const [activeId, setActiveId] = useState(TOOLS[0].id);
  const activeTool = TOOLS.find((tool) => tool.id === activeId) ?? TOOLS[0];

  return (
    <div className="grid gap-4 md:grid-cols-[280px_1fr] items-start">
      <nav className="flex flex-col gap-2 rounded-[28px] border border-[var(--line)] bg-[rgba(255,253,248,0.9)] p-3 shadow-[0_22px_60px_rgba(82,52,24,0.13)]">
        {TOOLS.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setActiveId(tool.id)}
            className={`flex items-start gap-3 rounded-2xl border p-3 text-left transition-colors ${
              tool.id === activeId
                ? "border-[rgba(231,131,54,0.55)] bg-white shadow-[0_12px_28px_rgba(82,52,24,0.08)]"
                : "border-transparent hover:bg-white/70"
            }`}
          >
            <span className="text-xl leading-none">{tool.icon}</span>
            <span className="flex flex-col">
              <span className="text-sm font-bold text-[var(--ink)]">
                {tool.name}
              </span>
              <span className="text-xs text-[var(--muted)] leading-relaxed">
                {tool.description}
              </span>
            </span>
          </button>
        ))}
      </nav>

      <section className="rounded-[28px] border border-[var(--line)] bg-[rgba(255,253,248,0.9)] shadow-[0_22px_60px_rgba(82,52,24,0.13)] overflow-hidden">
        <div className="flex items-center justify-between gap-4 border-b border-[var(--line)] bg-[rgba(255,250,241,0.8)] px-5 py-4">
          <div>
            <h2 className="text-lg font-bold">{activeTool.name}</h2>
            <p className="text-sm text-[var(--muted)]">{activeTool.description}</p>
          </div>
        </div>
        <div className="p-5 min-h-[640px]">
          {activeTool.available && TOOL_CLIENTS[activeTool.id] ? (
            (() => {
              const ActiveClient = TOOL_CLIENTS[activeTool.id];
              return <ActiveClient />;
            })()
          ) : (
            <div className="flex h-full min-h-[590px] items-center justify-center rounded-2xl border border-dashed border-[var(--line)] text-sm text-[var(--muted)]">
              這個工具即將推出，敬請期待。
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
