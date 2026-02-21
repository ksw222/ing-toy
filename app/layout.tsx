import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "./components/Navigation";

export const metadata: Metadata = {
  title: "ING - 성분 분석 플랫폼",
  description: "데이터 기반 화장품 성분 분석 및 추천 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Navigation />
        {/* 데스크탑에서는 상단 패딩 없음, 모바일은 하단 패딩 추가 (네비게이션 높이 고려) */}
        <main className="min-h-screen pb-24 lg:pb-12 bg-white">
            {children}
        </main>
      </body>
    </html>
  );
}