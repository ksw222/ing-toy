"use client";

import { mockUser, ingredientGroups, sampleProducts } from '../../data/mockdata';
import Link from 'next/link';
import { BarChart3, ShieldCheck, Zap, Droplets, Sparkles, ChevronRight } from 'lucide-react';

export default function ReportPage() {
    return (
        <div className="max-w-4xl mx-auto px-5 pt-12 pb-20">
            {/* 헤더 섹션 */}
            <div className="text-center mb-16">
                <div className="inline-block px-4 py-1.5 bg-[#F2F2F7] rounded-full text-[12px] font-bold text-[#004D40] mb-6 tracking-tight">
                    STATISTICAL ANALYSIS REPORT
                </div>
                <h2 className="text-[32px] lg:text-[42px] font-bold text-[#1C1C1E] mb-3 tracking-tight">
                    {mockUser.name}님의 성분 분석 결과
                </h2>
                <p className="text-[16px] text-[#8E8E93]">보유하신 {mockUser.ownedProducts.length}개 제품의 성분 데이터를 결합했습니다.</p>
            </div>

            {/* 성분 MBTI 결과 카드 (High-Impact Design) */}
            <div className="bg-[#004D40] rounded-[48px] p-10 lg:p-14 text-white mb-10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                    <BarChart3 size={180} strokeWidth={1} />
                </div>
                <div className="relative z-10">
                    <h3 className="text-[14px] font-bold text-white/50 mb-4 uppercase tracking-[0.2em]">Your Ingredient MBTI</h3>
                    <div className="text-[56px] lg:text-[64px] font-black mb-8 tracking-tighter leading-none">
                        {mockUser.mbti}
                    </div>
                    <div className="h-1.5 w-24 bg-[#2ECC71] mb-10 rounded-full"></div>
                    <p className="text-[18px] lg:text-[20px] text-white/90 leading-relaxed max-w-lg font-medium">
                        기성님은 **진정(Soothing)** 성분 함유량이 높은 제품군을 선호하시네요. 
                        특히 지복합성 피부의 밸런스를 잡아주는 **판테놀** 비중이 가장 높게 나타났습니다.
                    </p>
                </div>
            </div>

            {/* 통계 그리드 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                {/* 집중 케어 성분 통계 */}
                <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm">
                    <h4 className="text-[18px] font-bold mb-8 flex items-center gap-2 text-[#1C1C1E]">
                        <ShieldCheck className="text-[#2ECC71]" size={22} strokeWidth={1.5} /> 성분 그룹별 점유율
                    </h4>
                    <div className="space-y-6">
                        {[
                            { label: "진정/재생", value: 85, color: "bg-[#004D40]" },
                            { label: "수분공급", value: 72, color: "bg-[#2ECC71]" },
                            { label: "미백/광채", value: 45, color: "bg-[#F39C12]" }
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="flex justify-between text-[14px] mb-2.5">
                                    <span className="font-bold text-[#48484A]">{stat.label}</span>
                                    <span className="font-black text-[#004D40]">{stat.value}%</span>
                                </div>
                                <div className="w-full h-3 bg-[#F2F2F7] rounded-full overflow-hidden">
                                    <div className="h-full transition-all duration-1000 ease-out rounded-full" 
                                         style={{ width: `${stat.value}%`, backgroundColor: i === 0 ? '#004D40' : i === 1 ? '#2ECC71' : '#F39C12' }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 인사이트 카드 */}
                <div className="bg-[#F9F9FB] rounded-[32px] p-8 flex flex-col justify-between">
                    <div>
                        <h4 className="text-[18px] font-bold mb-6 text-[#1C1C1E]">데이터 분석가 가이드</h4>
                        <div className="space-y-4">
                            <p className="text-[15px] text-[#48484A] leading-relaxed">
                                "현재 기성님의 루틴은 **진정**에 편중되어 있습니다. 통계적으로 {mockUser.skinType} 타입은 유수분 밸런스가 무너지기 쉽습니다."
                            </p>
                            <p className="text-[15px] text-[#48484A] leading-relaxed font-bold">
                                수분 그룹 성분을 15% 더 보강하여 최적의 밸런스를 맞추는 것을 권장합니다.
                            </p>
                        </div>
                    </div>
                    <Link href="/vault" className="mt-8">
                        <div className="w-full py-5 bg-white border border-gray-100 text-[#1C1C1E] rounded-2xl text-[15px] font-bold flex items-center justify-center gap-2 hover:bg-white/50 transition-all shadow-sm">
                            보관함에서 제품별 분석 보기 <ChevronRight size={18} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}