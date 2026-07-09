// 引入 Next.js Metadata 型別以設定 SEO 資訊
import type { Metadata } from "next";
// 引入工具互動元件
import ToolClient from "./ToolClient";

// 設定此頁面的 SEO metadata
export const metadata: Metadata = {
  title: "平台字數檢查器｜IG、Threads、LinkedIn 貼文字數限制",
  description:
    "貼上貼文內容，即時顯示字元數、行數、emoji 數、hashtag 數，並提醒 LINE、IG、Threads、Facebook、LinkedIn、小紅書字數上限。",
};

/**
 * 平台字數檢查器頁面，提供說明、工具本體、範例與常見問題。
 * @returns 頁面內容
 */
export default function CharacterCounterPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 flex flex-col gap-8">
      <header>
        <h1 className="text-2xl font-bold">平台字數檢查器</h1>
        <p className="mt-2 text-[var(--muted)]">
          貼上貼文後即時顯示字元數、行數、emoji 數、hashtag 數，並提醒各社群平台的字數上限。
        </p>
      </header>

      <section>
        <ToolClient />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">使用範例</h2>
        <p className="text-sm text-[var(--muted)]">
          貼上一篇 Threads 草稿，若超過 500 字上限，會以紅色提醒該平台超過限制，方便你決定是否縮短內容。
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">適合誰使用</h2>
        <p className="text-sm text-[var(--muted)]">
          小編、行銷人員、任何需要在多平台發文並確認字數限制的人。
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">常見使用情境</h2>
        <ul className="list-disc pl-5 text-sm text-[var(--muted)] space-y-1">
          <li>發文前確認是否超過平台字數上限</li>
          <li>統計貼文中的 emoji 與 hashtag 數量</li>
          <li>同一篇文案要投放到多個平台前先檢查</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">常見問題</h2>
        <div className="text-sm text-[var(--muted)] space-y-3">
          <div>
            <p className="font-medium text-[var(--ink)]">字數上限會不會更新？</p>
            <p>平台規則可能會調整，我們會依官方公告更新此頁的上限資料。</p>
          </div>
          <div>
            <p className="font-medium text-[var(--ink)]">字元數是怎麼計算的？</p>
            <p>以 Unicode 字元為單位計算，emoji 與中文字都算一個字元。</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">隱私說明</h2>
        <p className="text-sm text-[var(--muted)]">
          所有計算都在你的瀏覽器端完成，不會上傳到伺服器。
        </p>
      </section>
    </main>
  );
}
