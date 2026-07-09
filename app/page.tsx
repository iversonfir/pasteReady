// 引入工作區元件（左側工具清單、右側工具內容）
import Workspace from "@/components/Workspace";

/**
 * 首頁，左側由上至下列出所有工具，右側預設載入第一個工具。
 * @returns 頁面內容
 */
export default function Home() {
  return (
    <main className="w-full mx-auto max-w-5xl px-4 py-16 flex flex-col gap-10">
      <header className="text-center flex flex-col gap-3">
        <h1 className="text-3xl font-bold">貼上就轉</h1>
        <p className="text-[var(--muted)]">
          文字、日期、名單、社群貼文，一貼上就整理好。
        </p>
      </header>

      <Workspace />
    </main>
  );
}
