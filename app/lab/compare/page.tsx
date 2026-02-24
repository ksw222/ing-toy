"use client";

import { useState } from 'react';
import { detailedProducts } from '../../data/mockdata';
import Link from 'next/link';
import { Search } from 'lucide-react';


export default function ComparePage() {
    const [query, setQuery] = useState('');
    const [report, setReport] = useState<any>(null);

    const handleSearch = () => {
        const product = detailedProducts.find(p => p.name.includes(query) || p.brand.includes(query));
        if (product) setReport(product);
        else alert('분석 가능한 제품이 없습니다. (샘플: 세럼, 크림)');
    };

    return (
        <div className="max-w-5xl mx-auto px-5 pt-12 pb-20">
            <Link href="/lab" className="text-[14px] text-[#8E8E93] mb-8 block hover:text-[#1C1C1E] transition-colors">
                ← 실험실 메인
            </Link>

            <div className="mb-12">
                <h2 className="text-[32px] font-bold text-[#1C1C1E] mb-3">화장품 Deep Scan 🔍</h2>
                <p className="text-[16px] text-[#8E8E93]">제품명을 입력하면 성분 데이터 기반 정밀 리포트를 생성합니다.</p>
            </div>

            {/* 검색 섹션 */}
            <div className="flex gap-3 mb-16">
                <input 
                    value={query} 
                    onChange={e => setQuery(e.target.value)}
                    placeholder="제품명을 입력하세요 (예: 세럼)"
                    className="flex-1 p-6 bg-[#F2F2F7] rounded-[24px] text-[16px] outline-none focus:ring-2 focus:ring-[#004D40]/10 transition-all"
                />
                <button 
                    onClick={handleSearch}
                    className="px-10 bg-[#004D40] text-white rounded-[24px] font-bold shadow-lg hover:bg-[#003D33] active:scale-95 transition-all"
                >
                    분석 리포트 생성
                </button>
            </div>

            {report && (
                <div className="animate-fade-in space-y-8">
                    {/* 1. 상단 요약 카드 */}
                    <div className="bg-white border border-gray-100 rounded-[40px] p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
                            <div>
                                <span className="text-[14px] font-bold text-[#004D40] mb-2 block">{report.brand}</span>
                                <h3 className="text-[28px] lg:text-[36px] font-bold text-[#1C1C1E]">{report.name}</h3>
                            </div>
                            <div className="bg-[#F2F2F7] px-8 py-4 rounded-3xl text-center">
                                <div className="text-[32px] font-black text-[#004D40]">{report.matchScore}%</div>
                                <div className="text-[12px] font-bold text-[#8E8E93] uppercase tracking-tighter">My Match Score</div>
                            </div>
                        </div>

                        {/* 피부 타입별 스코어 (데이터 시각화 요소) */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
                            {Object.entries(report.skinScores).map(([type, score]: any) => (
                                <div key={type} className="bg-[#F9F9FB] p-6 rounded-2xl">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-[13px] font-bold text-[#1C1C1E] uppercase">{type}</span>
                                        <span className="text-[15px] font-bold text-[#004D40]">{score}점</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#004D40] transition-all duration-1000" style={{ width: `${score}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 2. 상세 성분 리스트 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm">
                            <h4 className="text-[18px] font-bold mb-6 flex items-center gap-2">
                                <span>✨</span> 주요 성분 효과
                            </h4>
                            <div className="space-y-4">
                                {report.ingredients.map((ing: any, i: number) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-[#F9F9FB] rounded-2xl">
                                        <div>
                                            <div className="text-[14px] font-bold text-[#1C1C1E]">{ing.name}</div>
                                            <div className="text-[12px] text-[#8E8E93]">{ing.effect}</div>
                                        </div>
                                        <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${
                                            ing.grade === 'green' ? 'bg-[#2ECC71]/10 text-[#2ECC71]' : 'bg-[#F39C12]/10 text-[#F39C12]'
                                        }`}>EWG {ing.grade}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. 대체 제품 추천 (유사도 기반) */}
                        <div className="bg-[#004D40] rounded-[32px] p-8 shadow-lg text-white">
                            <h4 className="text-[18px] font-bold mb-6 flex items-center gap-2">
                                <span>💎</span> AI 추천 대체 제품
                            </h4>
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 mb-6">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-[12px] font-bold text-white/60">유사도 {report.alternative.similarity}%</span>
                                    <span className="text-[10px] bg-white text-[#004D40] px-2 py-0.5 rounded font-bold">BEST MATCH</span>
                                </div>
                                <div className="text-[20px] font-bold mb-2">{report.alternative.name}</div>
                                <p className="text-[13px] text-white/70">동일한 핵심 성분을 포함하면서 더 합리적인 가격의 제품입니다.</p>
                            </div>
                            <button className="w-full py-4 bg-white text-[#004D40] rounded-xl font-bold hover:bg-gray-100 transition-colors">
                                상세 비교 보기
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}