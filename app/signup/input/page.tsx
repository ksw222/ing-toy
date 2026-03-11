"use client";

import { useState } from 'react';
import { sampleProducts } from '../../data/mockdata';
import Link from 'next/link';
import { Search, Plus, X, CheckCircle2, ChevronRight } from 'lucide-react';

export default function DataInputPage() {
    const [query, setQuery] = useState('');
    const [selectedProducts, setSelectedProducts] = useState<any[]>([]);

    const filtered = sampleProducts.filter(p => 
        p.name.includes(query) || p.brand.includes(query)
    );

    const toggleProduct = (product: any) => {
        if (selectedProducts.find(p => p.id === product.id)) {
            setSelectedProducts(prev => prev.filter(p => p.id !== product.id));
        } else {
            setSelectedProducts(prev => [...prev, product]);
        }
    };

    return (
        <div className="max-w-md mx-auto px-6 pt-20 pb-10">
            {/* 프로그레스 바 (상단 일관성) */}
            <div className="w-full h-1.5 bg-[#F2F2F7] rounded-full mb-12 overflow-hidden">
                <div className="w-full h-full bg-[#004D40] rounded-full transition-all duration-500"></div>
            </div>

            <div className="mb-12">
                <h2 className="text-[32px] font-bold text-[#1C1C1E] leading-tight mb-2">현재 사용하는<br/>제품을 알려주세요.</h2>
                <p className="text-[16px] text-[#8E8E93]">분석 리포트의 정밀도가 올라갑니다.</p>
            </div>

            {/* 로그인창과 동일한 스타일의 검색바 */}
            <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8E8E93]" size={20} strokeWidth={1.5} />
                <input 
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="제품명 또는 브랜드 검색"
                    className="w-full pl-12 pr-4 py-5 bg-[#F2F2F7] rounded-2xl outline-none focus:ring-2 focus:ring-[#004D40]/10 transition-all text-[15px]"
                />
            </div>

            {/* 등록 대기 제품 (Selected) */}
            {selectedProducts.length > 0 && (
                <div className="mb-8 animate-in fade-in slide-in-from-top-2 duration-500">
                    <div className="flex flex-wrap gap-2">
                        {selectedProducts.map(p => (
                            <div key={p.id} className="flex items-center gap-1.5 bg-[#004D40] text-white px-4 py-2 rounded-full text-[13px] font-bold">
                                {p.name}
                                <button onClick={() => toggleProduct(p)} className="hover:opacity-70 transition-opacity"><X size={14} /></button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* 결과 리스트 (로그인 버튼 느낌의 높이감 유지) */}
            <div className="space-y-3 mb-12 max-h-[350px] overflow-y-auto pr-1 scrollbar-hide">
                {query && filtered.map(product => {
                    const isSelected = selectedProducts.find(p => p.id === product.id);
                    return (
                        <div key={product.id} className="flex items-center justify-between p-5 bg-white border border-gray-100 rounded-2xl shadow-sm transition-all active:scale-[0.98]">
                            <div className="flex-1 mr-4">
                                <div className="text-[11px] font-bold text-[#004D40] uppercase mb-0.5">{product.brand}</div>
                                <div className="text-[15px] font-bold text-[#1C1C1E] truncate w-40">{product.name}</div>
                            </div>
                            <button 
                                onClick={() => toggleProduct(product)}
                                className={`p-2.5 rounded-xl transition-all ${
                                    isSelected ? "bg-[#004D40] text-white" : "bg-[#F2F2F7] text-[#8E8E93]"
                                }`}
                            >
                                {isSelected ? <CheckCircle2 size={20} /> : <Plus size={20} />}
                            </button>
                        </div>
                    );
                })}
            </div>

            {/* 최종 버튼 */}
            <Link href="/signup/complete">
                <button 
                    disabled={selectedProducts.length === 0}
                    className={`w-full py-5 rounded-[24px] font-bold shadow-lg transition-all ${
                        selectedProducts.length > 0 
                        ? "bg-[#004D40] text-white hover:bg-[#003D33] active:scale-[0.98]" 
                        : "bg-[#F2F2F7] text-[#8E8E93] cursor-not-allowed"
                    }`}
                >
                    분석 준비 완료
                </button>
            </Link>
        </div>
    );
}