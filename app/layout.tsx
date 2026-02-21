// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "./components/Navigation";

export const metadata: Metadata = {
  // 1. 기본 타이틀 및 설명
  title: {
    default: "ING - 데이터 기반 성분 분석 플랫폼",
    template: "%s | ING" 
  },
  description: "화장품 성분 데이터를 분석하여 당신의 피부에 최적화된 추천을 제공합니다.",
  
  // 2. 검색 엔진 로봇 설정
  robots: "index, follow",

  // 3. 구글 검색 콘솔 인증 키 (업데이트 완료)
  verification: {
    // HTML tag의 content 값만 따옴표 안에 넣어주면 됩니다.
    google: "S8t6fnu2sLO46e13LbQFrW096NK3vlXLCgpBQfVmGDY",
  },

  // 4. 소셜 미디어 공유 시 보이는 정보 (OpenGraph)
  openGraph: {
    title: "ING - 성분 분석 플랫폼",
    description: "데이터로 확인하는 나만의 화장품 성분 가이드",
    url: "https://ing-toy.vercel.app/", 
    siteName: "ING",
    locale: "ko_KR",
    type: "website",
  },
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
        <main className="min-h-screen pb-24 lg:pb-12 bg-white">
            {children}
        </main>
      </body>
    </html>
  );
}