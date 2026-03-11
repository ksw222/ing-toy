"use client";

import Link from 'next/link';
import { CheckCircle2, ChevronRight, Home } from 'lucide-react';

export default function SignupCompletePage() {
    return (
        // [디자인 리뉴얼 핵심]
        // 1. pt-35 제거, px-6 유지
        // 2. justify-center min-h-screen 추가: 전체 콘텐츠 그룹을 화면 수직/수평 중앙에 배치
        <div className="max-w-md mx-auto px-6 flex flex-col items-center justify-center min-h-screen">
            
            {/* 체크 아이콘 블록: 여백 축소 (mb-8 -> mb-5) */}
            <div className="mb-8 text-[#004D40] animate-bounce">
                <CheckCircle2 size={80} strokeWidth={1.2} />
            </div>
            
            {/* 텍스트 블록: 폰트 사이즈 조정 및 여백 축소 (mb-20 -> mb-10) */}
            <div className="text-center mb-10">
                <h2 className="text-[28px] lg:text-[34px] font-bold text-[#1C1C1E] leading-tight mb-3">
                    모든 준비가<br/>끝났습니다.
                </h2>
                <p className="text-[14px] lg:text-[16px] text-[#8E8E93] leading-relaxed">
                    이제  잉그님만의 데이터 뱅크에서<br/>
                    정밀 분석 리포트를 확인하실 수 있습니다.
                </p>
            </div>

            {/* 버튼 섹션: 요청하신 대로 간격을 널찍하게 (Gap-5) 배치 */}
            {/* [디자인 리뉴얼 핵심] mt-auto 제거 -> mt-0, mb-10 유지 */}
            <div className="w-full flex flex-col gap-4 mt-0 mb-10 max-w-sm">
                <Link href="/">
                    <button className="w-full py-5 bg-[#004D40] text-white rounded-[24px] font-bold shadow-xl hover:bg-[#003D33] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                        <Home size={18} /> 홈으로 돌아가기
                    </button>
                </Link>
                
                <Link href="/vault">
                    <button className="w-full py-5 bg-white border border-gray-100 text-[#1C1C1E] rounded-[24px] font-bold shadow-sm hover:bg-gray-50 active:scale-[0.98] transition-all flex items-center justify-center gap-1">
                        내 보관함 확인하기 <ChevronRight size={18} />
                    </button>
                </Link>
            </div>
        </div>
    );
}