"use client";

import { useState } from 'react';
import { sampleProducts } from '../../data/mockdata';
import Link from 'next/link';
import { Search, Plus, Check } from 'lucide-react';

export default function DataInputPage() {
    const [query, setQuery] = useState('');
    const [addedProducts, setAddedProducts] = useState<number[]>([]);

    const filtered = sampleProducts.filter(p => p.name.includes(query) || p.brand.includes(query));

    return (
        <div className="max-w-md mx-auto px-6 pt-20 pb-10">
            <div className="w-full h-1.5 bg-[#F2F2F7] rounded-full mb-12 overflow-hidden">
                <div className="w-full h-full bg-[#004D40] rounded-full"></div>
            </div>

            <h2 className="text-[32px] font-bold text-[#1C1C1E] leading-tight mb-4">현재 사용 중인<br/>화장품을 알려주세요.</h2>
            <p className="text-[16px] text-[#8E8E93] mb-10">정확한 분석 리포트를 생성해 드릴게요.</p>

            <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8E8E93]" size={20} strokeWidth={1.5} />
                <input 
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="제품명 또는 브랜드 검색"
                    className="w-full pl-12 pr-4 py-4 bg-[#F2F2F7] rounded-2xl outline-none"
                />
            </div>

            <div className="space-y-3 mb-12 max-h-[300px] overflow-y-auto hide-scrollbar">
                {query && filtered.map(product => (
                    <div key={product.id} className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl">
                        <div>
                            <div className="text-[12px] text-[#8E8E93]">{product.brand}</div>
                            <div className="text-[14px] font-bold text-[#1C1C1E]">{product.name}</div>
                        </div>
                        <button 
                            onClick={() => setAddedProducts(prev => [...prev, product.id])}
                            className={`p-2 rounded-xl transition-all ${
                                addedProducts.includes(product.id) ? "bg-[#004D40] text-white" : "bg-[#F2F2F7] text-[#8E8E93]"
                            }`}
                        >
                            {addedProducts.includes(product.id) ? <Check size={20} /> : <Plus size={20} />}
                        </button>
                    </div>
                ))}
            </div>

            <Link href="/lab/report">
                <button 
                    className="w-full py-5 bg-[#004D40] text-white rounded-[24px] font-bold shadow-lg active:scale-95 transition-all"
                >
                    분석 결과 확인하기
                </button>
            </Link>
        </div>
    );
}