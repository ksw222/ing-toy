"use client";

import Link from 'next/link';

export default function Home() {
    const trendingSearches = ['레티놀', '비타민C', '나이아신아마이드', 'AHA', 'BHA'];
    const popularIngredients = ['히알루론산', '센텔라', '판테놀', '세라마이드'];

    return (
        <div className="max-w-7xl mx-auto px-5 lg:px-6 pt-8 lg:pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* 왼쪽 사이드바 (데스크탑만 보임) */}
                <div className="hidden lg:block col-span-3">
                    <div className="sticky top-24">
                        <div className="mb-8">
                            <h3 className="text-[13px] font-bold text-[#1C1C1E] mb-3 flex items-center gap-2">
                                <span>🔥</span> 인기 검색어
                            </h3>
                            <div className="space-y-1">
                                {trendingSearches.map((term, i) => (
                                    <div key={i} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#F2F2F7] cursor-pointer transition-colors">
                                        <span className="text-[13px] font-bold text-[#004D40] w-5">{i + 1}</span>
                                        <span className="text-[14px] text-[#1C1C1E]">{term}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[13px] font-bold text-[#1C1C1E] mb-3 flex items-center gap-2">
                                <span>⭐</span> 주목받는 성분
                            </h3>
                            <div className="space-y-1">
                                {popularIngredients.map((ing, i) => (
                                    <div key={i} className="px-3 py-2 rounded-lg hover:bg-[#F2F2F7] cursor-pointer transition-colors">
                                        <span className="text-[14px] text-[#1C1C1E]">{ing}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 메인 콘텐츠 영역 */}
                <div className="col-span-1 lg:col-span-9">
                    <div className="mb-8 lg:mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F2F2F7] rounded-full mb-6">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#2ECC71]"></div>
                            <span className="text-[11px] lg:text-[12px] font-medium text-[#6B6B6B]">Next.js App Router v14</span>
                        </div>
                        
                        <h1 className="text-[28px] lg:text-[42px] font-bold leading-tight mb-4 text-[#1C1C1E]">
                            무엇을 바를지<br/>스스로 결정하세요
                        </h1>
                        
                        <p className="text-[14px] lg:text-[16px] text-[#6B6B6B] mb-8">
                            성분 데이터 기반 스킨케어 분석
                        </p>

                        <div className="relative max-w-2xl bg-[#F2F2F7] rounded-xl p-1">
                            <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg shadow-sm">
                                <span className="text-xl">🔍</span>
                                <input 
                                    type="text" 
                                    placeholder="성분 또는 제품 검색" 
                                    className="flex-1 text-[14px] lg:text-[15px] outline-none bg-transparent"
                                />
                                <button className="hidden lg:block px-5 py-2 bg-[#004D40] hover:bg-[#003D33] text-white rounded-lg text-[14px] font-medium transition-colors">
                                    검색
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* 대시보드 카드 그리드 */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <Link href="/lab" className="col-span-2 row-span-2 bg-[#004D40] rounded-2xl p-6 lg:p-8 cursor-pointer hover:shadow-xl transition-shadow animate-fade-in delay-1 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                                <span className="text-9xl">🧪</span>
                            </div>
                            <div className="relative z-10 flex flex-col h-full justify-between min-h-[160px] lg:min-h-[200px]">
                                <div>
                                    <div className="inline-block px-2.5 py-1 bg-white/10 rounded-md mb-4 backdrop-blur-sm">
                                        <span className="text-[11px] font-bold text-white/90">ROUTINE CHECK</span>
                                    </div>
                                    <h3 className="text-[20px] lg:text-[24px] font-bold text-white leading-tight mb-2">
                                        오늘 밤 루틴은<br/>안전한가요?
                                    </h3>
                                    <p className="text-[13px] text-white/80">성분 충돌 분석</p>
                                </div>
                                <div className="flex items-center gap-2 text-[#2ECC71] font-medium text-[14px] mt-4">
                                    <span>분석 시작</span>
                                    <span>→</span>
                                </div>
                            </div>
                        </Link>

                        <Link href="/market" className="col-span-2 bg-white border border-gray-200 rounded-2xl p-5 lg:p-6 cursor-pointer hover:shadow-lg transition-all animate-fade-in delay-2">
                            <div className="w-10 h-10 rounded-lg bg-[#F2F2F7] flex items-center justify-center mb-4 text-xl">💎</div>
                            <h3 className="text-[16px] lg:text-[18px] font-bold text-[#1C1C1E] mb-2">
                                가성비 대체템
                            </h3>
                            <p className="text-[12px] lg:text-[13px] text-[#6B6B6B] mb-2">성분 구조 99% 일치</p>
                            <div className="text-[#004D40] font-medium text-[13px]">제품 보기 →</div>
                        </Link>

                        <div className="bg-white border border-gray-200 rounded-2xl p-5 lg:p-6 hover:shadow-lg transition-all animate-fade-in delay-3">
                            <div className="w-10 h-10 rounded-lg bg-[#F2F2F7] flex items-center justify-center mb-4 text-xl">📊</div>
                            <h3 className="text-[15px] lg:text-[16px] font-bold text-[#1C1C1E] mb-1">pH 분석</h3>
                            <p className="text-[11px] lg:text-[12px] text-[#6B6B6B]">피부 산도 측정</p>
                        </div>

                        <div className="bg-white border border-gray-200 rounded-2xl p-5 lg:p-6 hover:shadow-lg transition-all animate-fade-in delay-4">
                            <div className="w-10 h-10 rounded-lg bg-[#F2F2F7] flex items-center justify-center mb-4 text-xl">🔬</div>
                            <h3 className="text-[15px] lg:text-[16px] font-bold text-[#1C1C1E] mb-1">성분 사전</h3>
                            <p className="text-[11px] lg:text-[12px] text-[#6B6B6B]">A to Z 가이드</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}