"use client";

import { useState } from 'react';
import { ingredientData } from '../../data/mockdata'; // 경로 수정
import { ResultDisplay } from '../../components/ResultDisplay'; // 경로 수정
import Link from 'next/link';

export default function ComboPage() {
    const [ing1, setIng1] = useState('');
    const [ing2, setIng2] = useState('');
    const [result, setResult] = useState<any>(null);

    const recentSearches = [
        { ing1: '비타민C', ing2: '레티놀', status: 'danger' },
        { ing1: '레티놀', ing2: '히알루론산', status: 'safe' },
        { ing1: '나이아신아마이드', ing2: '비타민C', status: 'warning' }
    ];

    const analyze = () => {
        if (!ing1 || !ing2) {
            alert('두 가지 성분을 모두 입력해주세요');
            return;
        }
        const key = `${ing1.toLowerCase()}+${ing2.toLowerCase()}`;
        // 역방향 검색도 허용 (A+B or B+A)
        const data = ingredientData[key] || ingredientData[`${ing2.toLowerCase()}+${ing1.toLowerCase()}`];
        
        setResult(data || { 
            status: 'unknown', 
            message: '데이터 없음',
            detail: '해당 성분 조합에 대한 정보가 아직 수집되지 않았습니다.',
            recommendation: '일반적인 스킨케어 순서를 따라 사용하세요.'
        });
    };

    return (
        <div className="max-w-6xl mx-auto px-5 lg:px-6 pt-8 lg:pt-12 pb-20">
            {/* 상단 네비게이션 가이드 */}
            <Link href="/lab" className="inline-flex items-center text-[14px] text-[#8E8E93] mb-8 hover:text-[#1C1C1E] transition-colors group">
                <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> 실험실 메인으로 돌아가기
            </Link>

            <div className="mb-8 lg:mb-12">
                <h2 className="text-[28px] lg:text-[36px] font-bold text-[#1C1C1E] mb-3">성분 궁합 분석</h2>
                <p className="text-[14px] lg:text-[16px] text-[#6B6B6B]">두 가지 성분을 입력하여 화학적 상호작용을 확인하세요.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                {/* 입력 폼 영역 */}
                <div className="col-span-1 lg:col-span-2">
                    <div className="bg-white border border-gray-100 rounded-[32px] p-6 mb-4 shadow-sm">
                        <label className="block text-[12px] font-bold text-[#8E8E93] mb-3 uppercase tracking-wider">성분 1</label>
                        <input 
                            value={ing1} 
                            onChange={e => setIng1(e.target.value)}
                            placeholder="예: 비타민C" 
                            className="w-full px-5 py-4 bg-[#F2F2F7] rounded-2xl text-[15px] outline-none focus:ring-2 focus:ring-[#004D40]/10 transition-all"
                        />
                    </div>

                    <div className="flex justify-center py-2 lg:py-4">
                        <div className="w-12 h-12 rounded-full bg-[#F2F2F7] flex items-center justify-center text-xl text-[#8E8E93] font-bold border-4 border-white shadow-sm">
                            +
                        </div>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-[32px] p-6 mb-8 shadow-sm">
                        <label className="block text-[12px] font-bold text-[#8E8E93] mb-3 uppercase tracking-wider">성분 2</label>
                        <input 
                            value={ing2} 
                            onChange={e => setIng2(e.target.value)}
                            placeholder="예: 레티놀" 
                            className="w-full px-5 py-4 bg-[#F2F2F7] rounded-2xl text-[15px] outline-none focus:ring-2 focus:ring-[#004D40]/10 transition-all"
                        />
                    </div>

                    <button 
                        onClick={analyze}
                        className="w-full py-5 bg-[#004D40] hover:bg-[#003D33] text-white rounded-[24px] text-[16px] font-bold transition-all shadow-lg active:scale-[0.97] mb-12"
                    >
                        데이터 분석 시작
                    </button>

                    {/* 최근 검색어 (데스크탑 전용) */}
                    <div className="hidden lg:block">
                        <h4 className="text-[14px] font-bold text-[#1C1C1E] mb-4 flex items-center gap-2">
                            <span>🕒</span> 최근 분석 히스토리
                        </h4>
                        <div className="space-y-3">
                            {recentSearches.map((item, i) => (
                                <div 
                                    key={i}
                                    onClick={() => { setIng1(item.ing1); setIng2(item.ing2); }}
                                    className="flex items-center justify-between px-5 py-4 bg-white border border-gray-50 rounded-2xl cursor-pointer hover:bg-[#F2F2F7] hover:border-transparent transition-all shadow-sm"
                                >
                                    <span className="text-[14px] font-medium text-[#1C1C1E]">
                                        {item.ing1} + {item.ing2}
                                    </span>
                                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[12px] text-white font-bold ${
                                        item.status === 'safe' ? 'bg-[#2ECC71]' : 
                                        item.status === 'danger' ? 'bg-[#E74C3C]' : 'bg-[#F39C12]'
                                    }`}>
                                        {item.status === 'safe' ? '✓' : item.status === 'danger' ? '×' : '!'}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 결과 영역 */}
                <div className="col-span-1 lg:col-span-3">
                    <div className="sticky top-24">
                        {!result ? (
                            <div className="h-[400px] lg:h-[600px] flex items-center justify-center bg-[#F9F9FB] rounded-[40px] border-2 border-dashed border-gray-100 px-10">
                                <div className="text-center">
                                    <div className="text-[64px] mb-6 grayscale opacity-30">🧪</div>
                                    <h4 className="text-[18px] font-bold text-[#1C1C1E] mb-2">분석 대기 중</h4>
                                    <p className="text-[14px] text-[#8E8E93] leading-relaxed">
                                        조합이 궁금한 두 성분을 입력하고<br/>버튼을 누르면 정밀 분석 리포트가 생성됩니다.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <ResultDisplay result={result} onReset={() => { setResult(null); setIng1(''); setIng2(''); }} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}