// 引入 Next.js Metadata 型別以設定 SEO 資訊
import type { Metadata } from "next";
// 引入工具互動元件
import ToolClient from "./ToolClient";

// 設定此頁面的 SEO metadata
export const metadata: Metadata = {
  title: "今天到某一天還有幾天｜日期倒數計算器",
  description:
    "輸入目標日期，快速計算今天到某一天還有幾天，並顯示週數、日期差與可複製的倒數文案，適合活動、考試、生日倒數。",
};

/**
 * 日期倒數工具頁面，提供說明、工具本體、範例與常見問題。
 * @returns 頁面內容
 */
export default function DaysUntilDatePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 flex flex-col gap-8">
      <header>
        <h1 className="text-2xl font-bold">日期倒數工具</h1>
        <p className="mt-2 text-[var(--muted)]">
          輸入目標日期，計算今天到某一天還有幾天，並產生可直接貼到社群的倒數文案。
        </p>
      </header>

      <section>
        <ToolClient />
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">使用範例</h2>
        <p className="text-sm text-[var(--muted)]">
          輸入「活動報名截止」與目標日期後，會顯示「距離活動報名截止還有 176 天，也就是 25 週又 1 天」的可複製文案。
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">適合誰使用</h2>
        <p className="text-sm text-[var(--muted)]">
          活動主辦、考生、社群小編、任何需要計算倒數天數並分享的人。
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">常見使用情境</h2>
        <ul className="list-disc pl-5 text-sm text-[var(--muted)] space-y-1">
          <li>活動倒數、考試倒數、生日倒數</li>
          <li>計算專案、請假、租期的日期差</li>
          <li>產生可直接貼到社群的倒數文案</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">常見問題</h2>
        <div className="text-sm text-[var(--muted)] space-y-3">
          <div>
            <p className="font-medium text-[var(--ink)]">計算方式是以幾點為準？</p>
            <p>以日曆日計算，不考慮時分秒，確保天數符合直覺認知。</p>
          </div>
          <div>
            <p className="font-medium text-[var(--ink)]">可以計算過去的日期嗎？</p>
            <p>可以，選擇過去日期時會顯示「已經過了幾天」。</p>
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
