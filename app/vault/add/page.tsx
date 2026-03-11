"use client";

import { useState } from 'react';
import { sampleProducts } from '../../data/mockdata';
import Link from 'next/link';
import { Search, Plus, X, ChevronLeft, Check, Package } from 'lucide-react';

export default function VaultAddPage() {
    const [query, setQuery] = useState('');
    const [selectedItems, setSelectedItems] = useState<any[]>([]);

    // 검색 필터링
    const filtered = sampleProducts.filter(p => 
        p.name.includes(query) || p.brand.includes(query)
    );

    const handleAdd = (product: any) => {
        if (!selectedItems.find(item => item.id === product.id)) {
            setSelectedItems([...selectedItems, product]);
        }
    };

    const handleRemove = (id: number) => {
        setSelectedItems(selectedItems.filter(item => item.id !== id));
    };

    return (
        <div className="bg-white min-h-screen pb-32">
            {/* [Header] 정갈한 상단바 */}
            <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-50">
                <div className="max-w-2xl mx-auto px-5 h-14 flex items-center justify-between">
                    <Link href="/vault" className="p-2 -ml-2 text-gray-400 hover:text-black transition-colors">
                        <ChevronLeft size={20} />
                    </Link>
                    <h2 className="text-[14px] font-bold text-gray-800">새 자산 등록</h2>
                    <div className="w-10"></div> {/* 벨런스용 공간 */}
                </div>
            </div>

            <div className="max-w-2xl mx-auto px-5 pt-10">
                <div className="mb-10 text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">분석할 제품을 찾아보세요</h3>
                    <p className="text-[14px] text-gray-400 font-medium">ING 데이터베이스에서 성분을 매칭해 드립니다.</p>
                </div>

                {/* [Search] 검색창 - 폰트 사이즈 및 패딩 조절 */}
                <div className="relative mb-10">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} strokeWidth={2} />
                    <input 
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="브랜드 또는 제품명 입력"
                        className="w-full pl-11 pr-5 py-4 bg-[#F2F2F7] rounded-2xl outline-none focus:ring-2 focus:ring-[#004D40]/10 transition-all text-[15px] placeholder:text-gray-400"
                    />
                </div>

                {/* [Result List] 검색 결과 */}
                <div className="space-y-2">
                    {query ? (
                        filtered.map(product => (
                            <div key={product.id} className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl hover:border-[#004D40]/30 transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-300">
                                        <Package size={20} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-bold text-[#004D40] uppercase mb-0.5">{product.brand}</p>
                                        <p className="text-[14px] font-bold text-gray-800">{product.name}</p>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => handleAdd(product)}
                                    className={`p-2 rounded-lg transition-all ${
                                        selectedItems.find(i => i.id === product.id) 
                                        ? "bg-[#004D40] text-white" 
                                        : "bg-[#F2F2F7] text-gray-400 hover:text-[#004D40]"
                                    }`}
                                >
                                    {selectedItems.find(i => i.id === product.id) ? <Check size={18} /> : <Plus size={18} />}
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="py-20 text-center">
                            <p className="text-[13px] text-gray-300 font-medium italic">검색어를 입력해 데이터를 호출하세요.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* [Fixed Bottom Sheet] 선택된 리스트 & 완료 버튼 */}
            {selectedItems.length > 0 && (
                <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] animate-in slide-in-from-bottom duration-500">
                    <div className="max-w-2xl mx-auto px-5 py-6">
                        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
                            {selectedItems.map(item => (
                                <div key={item.id} className="flex-shrink-0 flex items-center gap-2 bg-[#F2F2F7] px-4 py-2.5 rounded-full text-[12px] font-bold text-gray-700">
                                    {item.name}
                                    <button onClick={() => handleRemove(item.id)} className="text-gray-400 hover:text-red-500"><X size={14} /></button>
                                </div>
                            ))}
                        </div>
                        <Link href="/vault">
                            <button className="w-full py-5 bg-[#004D40] text-white rounded-[24px] font-bold shadow-xl active:scale-95 transition-all text-[15px]">
                                {selectedItems.length}개의 데이터 자산 등록 완료
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}