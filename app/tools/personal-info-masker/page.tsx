// 引入 Next.js Metadata 型別以設定 SEO 資訊
import type { Metadata } from "next";
// 引入工具互動元件
import ToolClient from "./ToolClient";

// 設定此頁面的 SEO metadata
export const metadata: Metadata = {
  title: "個資遮罩工具｜電話、Email、身分證批次遮蔽",
  description:
    "貼上名單後自動遮罩手機、電話、Email 與身分證格式，適合公告名單、測試資料與對外分享前處理。",
};

/**
 * 個資遮罩工具頁面，提供說明、工具本體、範例與常見問題。
 * @returns 頁面內容
 */
export default function PersonalInfoMaskerPage() {
  return (
    <main className="w-full mx-auto max-w-3xl px-4 py-10 flex flex-col gap-8">
      <header>
        <h1 className="text-2xl font-bold">個資遮罩工具</h1>
        <p className="mt-2 text-[var(--muted)]">
          貼上含手機、Email、身分證的名單，一鍵格式化或遮罩，適合對外分享前的個資保護處理。
        </p>
      </header>

      <section>
        <ToolClient />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">使用範例</h2>
        <p className="text-sm text-[var(--muted)]">
          貼上「0912345678」點選「手機遮罩」會變成「0912-***-678」；貼上「test@example.com」點選「Email 遮罩」會變成「te***@example.com」。
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">適合誰使用</h2>
        <p className="text-sm text-[var(--muted)]">
          活動主辦、行政人員、客服，任何需要對外公開名單但要保護個資的人。
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">常見使用情境</h2>
        <ul className="list-disc pl-5 text-sm text-[var(--muted)] space-y-1">
          <li>公告報名名單前先遮罩手機與 Email</li>
          <li>整理客戶名單時統一手機格式</li>
          <li>製作表單測試用假資料前先確認遮罩效果</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">常見問題</h2>
        <div className="text-sm text-[var(--muted)] space-y-3">
          <div>
            <p className="font-medium text-[var(--ink)]">支援哪些格式？</p>
            <p>目前支援台灣手機號碼、Email、台灣身分證字號的偵測與遮罩。</p>
          </div>
          <div>
            <p className="font-medium text-[var(--ink)]">這個工具能產生真實可用的身分證字號嗎？</p>
            <p>不能，這個工具只做遮罩處理，不會產生任何個資。</p>
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
