// 引入 Next.js Metadata 型別以設定 SEO 資訊
import type { Metadata } from "next";
// 引入工具互動元件
import ToolClient from "./ToolClient";

// 設定此頁面的 SEO metadata
export const metadata: Metadata = {
  title: "社群貼文格式整理器｜LINE、IG、Threads 貼文一鍵排版",
  description:
    "貼上文字，一鍵整理成 LINE、Instagram、Threads、Facebook、LinkedIn、小紅書可用格式。支援乾淨好讀、可愛小編、質感品牌等風格。",
};

/**
 * 社群貼文格式整理器頁面，提供說明、工具本體、範例與常見問題。
 * @returns 頁面內容
 */
export default function SocialPostFormatterPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 flex flex-col gap-8">
      <header>
        <h1 className="text-2xl font-bold">社群貼文格式整理器</h1>
        <p className="mt-2 text-[var(--muted)]">
          貼上一段亂文字，選擇平台與風格後，自動整理成分段、斷行適合的可發文格式。
        </p>
      </header>

      <section>
        <ToolClient />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">使用範例</h2>
        <p className="text-sm text-[var(--muted)]">
          貼上一段活動公告全文，選擇「Threads」與「活動公告」風格，會自動分段並加上 📌 符號，控制每行長度避免手機閱讀太擠。
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">適合誰使用</h2>
        <p className="text-sm text-[var(--muted)]">
          小編、行銷人員、活動主辦，任何需要把長文整理成適合社群發布格式的人。
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">常見使用情境</h2>
        <ul className="list-disc pl-5 text-sm text-[var(--muted)] space-y-1">
          <li>LINE 群組公告、活動通知</li>
          <li>Instagram、Threads 貼文分段</li>
          <li>Facebook 長文分段、LinkedIn 條列重點</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">常見問題</h2>
        <div className="text-sm text-[var(--muted)] space-y-3">
          <div>
            <p className="font-medium text-[var(--ink)]">會自動幫我加 emoji 或 hashtag 嗎？</p>
            <p>目前依風格加上段落符號，emoji 標題與 hashtag 可搭配 Emoji 文案編輯器使用。</p>
          </div>
          <div>
            <p className="font-medium text-[var(--ink)]">整理後字數會不會超過平台上限？</p>
            <p>可以搭配平台字數檢查器確認，避免超過各平台字數限制。</p>
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
