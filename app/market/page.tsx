"use client";

import { useState } from 'react';
import { sampleProducts } from '../data/mockdata';
import { ProductCard } from '../components/ProductCard';

export default function MarketPage() {
    const [selectedCategory, setSelectedCategory] = useState('전체');
    const categories = ['전체', '세럼', '크림', '클렌징'];

    // 필터링 로직 (간단하게 구현)
    const filteredProducts = selectedCategory === '전체' 
        ? sampleProducts 
        : sampleProducts.filter(p => p.category === selectedCategory);

    return (
        <div className="max-w-7xl mx-auto px-5 lg:px-6 pt-8">
            <div className="mb-6 lg:mb-8">
                <h2 className="text-[24px] lg:text-[32px] font-bold text-[#1C1C1E] mb-2">마켓</h2>
                <p className="text-[13px] lg:text-[14px] text-[#6B6B6B]">성분 데이터 기반 추천 (라우팅: /market)</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* 필터 사이드바 (데스크탑) */}
                <div className="hidden lg:block col-span-3">
                    <div className="sticky top-24 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                        <h3 className="text-[14px] font-bold text-[#1C1C1E] mb-4">필터</h3>
                        
                        <div className="mb-6">
                            <div className="text-[11px] font-bold text-[#8E8E93] mb-3">카테고리</div>
                            <div className="space-y-2">
                                {categories.map(cat => (
                                    <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                                        <input 
                                            type="radio" 
                                            name="category" 
                                            checked={selectedCategory === cat}
                                            onChange={() => setSelectedCategory(cat)}
                                            className="w-4 h-4 accent-[#004D40]"
                                        />
                                        <span className="text-[13px] text-[#1C1C1E] group-hover:text-[#004D40] transition-colors">{cat}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        {/* 추가 필터 데모 */}
                        <div className="mb-6">
                            <div className="text-[11px] font-bold text-[#8E8E93] mb-3">가격대</div>
                            <div className="space-y-2">
                                <label className="flex items-center gap-2"><input type="checkbox" className="accent-[#004D40]"/><span className="text-[13px]">1만원 이하</span></label>
                                <label className="flex items-center gap-2"><input type="checkbox" className="accent-[#004D40]"/><span className="text-[13px]">1-3만원</span></label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 상품 리스트 */}
                <div className="col-span-1 lg:col-span-9">
                    {/* 모바일 카테고리 탭 */}
                    <div className="lg:hidden flex gap-2 overflow-x-auto hide-scrollbar pb-4 mb-6">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full text-[13px] font-medium whitespace-nowrap transition-colors ${
                                    selectedCategory === cat 
                                        ? 'bg-[#004D40] text-white' 
                                        : 'bg-white border border-gray-200 text-[#1C1C1E]'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center justify-between mb-6">
                        <span className="text-[13px] text-[#6B6B6B]">총 {filteredProducts.length}개 제품</span>
                        <select className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-[13px] outline-none cursor-pointer hover:border-gray-300">
                            <option>추천순</option>
                            <option>인기순</option>
                            <option>가격 낮은순</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}