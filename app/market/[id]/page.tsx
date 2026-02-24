"use client";

import { useParams } from 'next/navigation';
import { sampleProducts } from '../../data/mockdata';
import Link from 'next/link';

export default function ProductDetailPage() {
    const params = useParams();
    // 실제로는 params.id로 DB에서 가져오겠지만, 일단 mockdata에서 찾습니다.
    const product = sampleProducts.find(p => p.id === Number(params.id)) || sampleProducts[0];

    return (
        <div className="max-w-7xl mx-auto px-5 lg:px-6 pt-6 lg:pt-10 pb-20">
            {/* 뒤로가기 버튼 */}
            <Link href="/market" className="inline-flex items-center text-[#8E8E93] text-[14px] mb-6 hover:text-[#1C1C1E] transition-colors">
                ← 목록으로 돌아가기
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                {/* 왼쪽: 제품 이미지 섹션 */}
                <div className="space-y-4">
                    <div className="aspect-square bg-[#F8F8F8] rounded-3xl border border-gray-100 flex items-center justify-center overflow-hidden">
                        {/* 실제 이미지가 들어갈 자리 */}
                        <span className="text-6xl">🧴</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="aspect-square bg-[#F8F8F8] rounded-xl border border-gray-100 cursor-pointer hover:border-[#004D40] transition-colors"></div>
                        ))}
                    </div>
                </div>

                {/* 오른쪽: 제품 정보 및 분석 섹션 */}
                <div className="flex flex-col">
                    <div className="mb-6">
                        <span className="text-[14px] text-[#004D40] font-bold mb-2 block">{product.brand}</span>
                        <h1 className="text-[24px] lg:text-[32px] font-bold text-[#1C1C1E] leading-tight mb-4">
                            {product.name}
                        </h1>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center gap-1">
                                <span className="text-[#FFB800] text-lg">★</span>
                                <span className="text-[16px] font-bold">{product.rating}</span>
                                <span className="text-[14px] text-[#8E8E93]">({product.reviewCount})</span>
                            </div>
                            <div className="px-3 py-1 bg-[#F2F2F7] rounded-full text-[12px] font-bold text-[#2ECC71]">
                                내 피부 매칭 {product.match}%
                            </div>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-[28px] font-bold text-[#1C1C1E]">{product.price.toLocaleString()}원</span>
                            <span className="text-[16px] text-[#8E8E93] line-through">{product.originalPrice?.toLocaleString()}원</span>
                        </div>
                    </div>

                    {/* 핵심 성분 분석 카드 (ResultDisplay 느낌 계승) */}
                    <div className="bg-[#F2F2F7] rounded-2xl p-6 mb-8">
                        <h3 className="text-[15px] font-bold text-[#1C1C1E] mb-4 flex items-center gap-2">
                            <span>🔬</span> 핵심 성분 분석
                        </h3>
                        <div className="space-y-3">
                            {product.mainIngredients.map((ing: string, i: number) => (
                                <div key={i} className="flex items-center justify-between bg-white p-3 rounded-xl border border-gray-100">
                                    <span className="text-[14px] font-medium text-[#1C1C1E]">{ing}</span>
                                    <span className="text-[11px] font-bold text-[#2ECC71]">EWG 1등급</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button className="flex-1 py-4 bg-[#F2F2F7] text-[#1C1C1E] rounded-xl font-bold hover:bg-[#E8E8E8] transition-colors">
                            관심상품
                        </button>
                        <button className="flex-[2] py-4 bg-[#004D40] text-white rounded-xl font-bold hover:bg-[#003D33] transition-all shadow-lg active:scale-95">
                            구매하기
                        </button>
                    </div>
                </div>
            </div>

            {/* 하단 상세 탭 영역 */}
            <div className="mt-16 border-t border-gray-100 pt-10">
                <h3 className="text-[20px] font-bold text-[#1C1C1E] mb-6">성분 전체 보기</h3>
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                    <p className="text-[14px] text-[#6B6B6B] leading-relaxed">
                        정제수, 글리세린, 부틸렌글라이콜, 나이아신아마이드, 1,2-헥산다이올, 판테놀, 센텔라아시아티카추출물, 히알루론산, 세라마이드엔피, 에틸헥실글리세린...
                    </p>
                </div>
            </div>
        </div>
    );
}