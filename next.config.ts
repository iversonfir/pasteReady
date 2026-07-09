import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 靜態匯出，讓 Next.js 產出純靜態檔案以部署到 Cloudflare Pages
  output: "export",
};

export default nextConfig;
