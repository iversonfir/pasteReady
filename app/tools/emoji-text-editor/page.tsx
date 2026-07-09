// 引入 Next.js Metadata 型別以設定 SEO 資訊
import type { Metadata } from "next";
// 引入工具互動元件
import ToolClient from "./ToolClient";

// 設定此頁面的 SEO metadata
export const metadata: Metadata = {
  title: "Emoji 文案編輯器｜標題產生、分隔線、顏文字",
  description:
    "產生 emoji 標題、分隔線、顏文字，依公告、活動、優惠、生日、課程分類挑選 emoji，也能一鍵移除貼文中的所有 emoji。",
};

/**
 * Emoji 文案編輯器頁面，提供說明、工具本體、範例與常見問題。
 * @returns 頁面內容
 */
export default function EmojiTextEditorPage() {
  return (
    <main className="w-full mx-auto max-w-3xl px-4 py-10 flex flex-col gap-8">
      <header>
        <h1 className="text-2xl font-bold">Emoji 文案編輯器</h1>
        <p className="mt-2 text-[var(--muted)]">
          產生 emoji 標題、分隔線、顏文字，依情境挑選常用 emoji，也能一鍵移除貼文中的所有 emoji。
        </p>
      </header>

      <section>
        <ToolClient />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">使用範例</h2>
        <p className="text-sm text-[var(--muted)]">
          輸入「新品上市」並選擇 ✨ 作為包裹符號，會產生「✨ 新品上市 ✨」，點擊即可複製使用。
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">適合誰使用</h2>
        <p className="text-sm text-[var(--muted)]">
          小編、學生、社群經營者，任何需要反覆使用 emoji 標題或分隔線的人。
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">常見使用情境</h2>
        <ul className="list-disc pl-5 text-sm text-[var(--muted)] space-y-1">
          <li>製作貼文標題與分隔線</li>
          <li>依公告、活動、優惠等情境挑選 emoji</li>
          <li>移除貼文中所有 emoji，轉為正式文字</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">常見問題</h2>
        <div className="text-sm text-[var(--muted)] space-y-3">
          <div>
            <p className="font-medium text-[var(--ink)]">可以自訂標題包裹的符號嗎？</p>
            <p>可以，在符號欄位輸入任意文字或 emoji 即可。</p>
          </div>
          <div>
            <p className="font-medium text-[var(--ink)]">Emoji 移除會影響其他符號嗎？</p>
            <p>不會，只會移除 emoji 區間的字元，一般標點符號不受影響。</p>
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
