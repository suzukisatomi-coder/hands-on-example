/** @type {import('next').NextConfig} */

// 重要: リポジトリ名を正確に反映したbasePath
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/hands-on-example'; // リポジトリ名を入れてください

const nextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath,  // 明示的に設定
  trailingSlash: true,    // ルーティングの安定性向上
  images: {
    unoptimized: true,    // GitHub Pages対応
  }
};

module.exports = nextConfig;