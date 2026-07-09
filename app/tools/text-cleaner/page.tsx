// 引入 Next.js Metadata 型別以設定 SEO 資訊
import type { Metadata } from "next";
// 引入工具互動元件
import ToolClient from "./ToolClient";

// 設定此頁面的 SEO metadata
export const metadata: Metadata = {
  title: "貼上文字清理器｜去空白、去空行、名單去重、全形轉半形",
  description:
    "貼上從 Word、PDF、Excel 複製出來的亂文字，一鍵去除多餘空白、空行、換行逗號互轉、名單去重、全形轉半形，整理成乾淨可用的格式。",
};

/**
 * 貼上文字清理器頁面，提供說明、工具本體、範例與常見問題。
 * @returns 頁面內容
 */
export default function TextCleanerPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 flex flex-col gap-8">
      <header>
        <h1 className="text-2xl font-bold">貼上文字清理器</h1>
        <p className="mt-2 text-[var(--muted)]">
          貼上一段亂掉的文字，一鍵去除多餘空白、空行，並支援換行與逗號互轉、名單去重、全形轉半形、排序。
        </p>
      </header>

      <section>
        <ToolClient />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">使用範例</h2>
        <p className="text-sm text-[var(--muted)]">
          例如從 Word 或 PDF 複製出來的名單常常夾雜多餘空白與空行，貼上後點選「去除多餘空白」與「去除多餘空行」即可快速整理成乾淨的名單。
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">適合誰使用</h2>
        <p className="text-sm text-[var(--muted)]">
          小編、行政人員、學生、活動主辦、社團幹部，任何需要整理報名名單、公告文字或貼文內容的人。
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">常見使用情境</h2>
        <ul className="list-disc pl-5 text-sm text-[var(--muted)] space-y-1">
          <li>整理報名名單、電話名單</li>
          <li>清理 Word / PDF 複製出來的怪空格</li>
          <li>將名單在換行與逗號格式之間轉換</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">常見問題</h2>
        <div className="text-sm text-[var(--muted)] space-y-3">
          <div>
            <p className="font-medium text-[var(--ink)]">
              我的資料會被上傳到伺服器嗎？
            </p>
            <p>不會，所有處理都在你的瀏覽器內完成，資料不會上傳。</p>
          </div>
          <div>
            <p className="font-medium text-[var(--ink)]">
              可以處理多少文字？
            </p>
            <p>沒有硬性限制，但建議單次貼上內容不要過長，以確保操作流暢。</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">隱私說明</h2>
        <p className="text-sm text-[var(--muted)]">
          所有文字處理都在你的瀏覽器端完成，不會上傳到伺服器。
        </p>
      </section>
    </main>
  );
}
