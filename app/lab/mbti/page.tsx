"use client";

import Link from 'next/link';

export default function MbtiPage() {
    return (
        <div className="max-w-4xl mx-auto px-5 pt-32 pb-20 text-center">
            <div className="w-24 h-24 bg-[#F2F2F7] rounded-[32px] flex items-center justify-center text-4xl mx-auto mb-8">📊</div>
            <h2 className="text-[32px] font-bold text-[#1C1C1E] mb-4">성분 MBTI 분석 서비스</h2>
            <p className="text-[16px] text-[#8E8E93] leading-relaxed mb-12">
                사용자의 피부 피드백 데이터를 통계적으로 분석하여<br/>
                가장 높은 적합도를 보이는 '인생 성분'을 도출합니다.<br/>
                <span className="font-bold text-[#004D40] mt-4 block">현재 로그인 기능 및 알고리즘 고도화 중입니다.</span>
            </p>
            <Link href="/lab">
                <button className="px-10 py-4 border border-gray-200 rounded-full text-[14px] font-bold text-[#1C1C1E] hover:bg-gray-50 transition-colors">
                    실험실로 돌아가기
                </button>
            </Link>
        </div>
    );
}