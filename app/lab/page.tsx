"use client";

import { useState } from 'react';
import { ingredientData } from '../data/mockdata';
import { ResultDisplay } from '../components/ResultDisplay';

export default function LabPage() {
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
        <div className="max-w-6xl mx-auto px-5 lg:px-6 pt-8 lg:pt-12">
            <div className="mb-6 lg:mb-8">
                <h2 className="text-[24px] lg:text-[32px] font-bold text-[#1C1C1E] mb-2">실험실</h2>
                <p className="text-[13px] lg:text-[14px] text-[#6B6B6B]">성분 간 상호작용 분석 (라우팅: /lab)</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* 입력 폼 영역 */}
                <div className="col-span-1 lg:col-span-2">
                    <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-4 shadow-sm">
                        <label className="block text-[11px] font-bold text-[#8E8E93] mb-2">성분 1</label>
                        <input 
                            value={ing1} 
                            onChange={e => setIng1(e.target.value)}
                            placeholder="예: 비타민C" 
                            className="w-full px-4 py-3 bg-[#F2F2F7] rounded-lg text-[14px] outline-none focus:ring-2 focus:ring-[#004D40]/20 transition-all"
                        />
                    </div>

                    <div className="flex justify-center py-2 lg:py-3">
                        <div className="w-10 h-10 rounded-full bg-[#F2F2F7] flex items-center justify-center text-lg lg:text-[18px] text-[#8E8E93] font-bold">
                            +
                        </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-6 shadow-sm">
                        <label className="block text-[11px] font-bold text-[#8E8E93] mb-2">성분 2</label>
                        <input 
                            value={ing2} 
                            onChange={e => setIng2(e.target.value)}
                            placeholder="예: 레티놀" 
                            className="w-full px-4 py-3 bg-[#F2F2F7] rounded-lg text-[14px] outline-none focus:ring-2 focus:ring-[#004D40]/20 transition-all"
                        />
                    </div>

                    <button 
                        onClick={analyze}
                        className="w-full py-4 bg-[#004D40] hover:bg-[#003D33] text-white rounded-lg text-[14px] font-bold transition-all shadow-md active:scale-[0.98]"
                    >
                        분석하기
                    </button>

                    {/* 최근 검색어 (데스크탑) */}
                    <div className="hidden lg:block mt-8">
                        <h4 className="text-[13px] font-bold text-[#1C1C1E] mb-3">최근 검색</h4>
                        <div className="space-y-2">
                            {recentSearches.map((item, i) => (
                                <div 
                                    key={i}
                                    onClick={() => { setIng1(item.ing1); setIng2(item.ing2); }}
                                    className="flex items-center justify-between px-4 py-3 bg-[#F2F2F7] rounded-lg cursor-pointer hover:bg-[#E8E8E8] transition-colors"
                                >
                                    <span className="text-[13px] font-medium text-[#1C1C1E]">
                                        {item.ing1} + {item.ing2}
                                    </span>
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] text-white font-bold ${
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
                            <div className="h-[300px] lg:h-[500px] flex items-center justify-center bg-[#F2F2F7] rounded-2xl border-2 border-dashed border-gray-200">
                                <div className="text-center opacity-50">
                                    <div className="text-[48px] mb-3">🧪</div>
                                    <p className="text-[14px] text-[#6B6B6B]">
                                        성분을 입력하고<br/>분석 버튼을 눌러주세요
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