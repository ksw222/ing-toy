"use client";

import { useMemo, useState } from "react";

import { ProductCard } from "../components/ProductCard";
import { sampleProducts, type ProductCategory } from "../data/mockdata";

type SkinFocus =
  | "전체"
  | "민감성"
  | "수부지"
  | "건성"
  | "트러블"
  | "진정"
  | "보습"
  | "탄력"
  | "칙칙함";

const skinFocuses: SkinFocus[] = [
  "전체",
  "민감성",
  "수부지",
  "건성",
  "트러블",
  "진정",
  "보습",
  "탄력",
  "칙칙함",
];

const categories: Array<"전체" | ProductCategory> = ["전체", "세럼", "토너", "크림"];

export default function MarketPage() {
  const [selectedSkinFocus, setSelectedSkinFocus] = useState<SkinFocus>("전체");
  const [selectedCategory, setSelectedCategory] = useState<"전체" | ProductCategory>("전체");

  const filteredProducts = useMemo(() => {
    const byCondition = sampleProducts.filter((product) => {
      const matchesSkinFocus =
        selectedSkinFocus === "전체" || product.recommendedFor.includes(selectedSkinFocus);
      const matchesCategory =
        selectedCategory === "전체" || product.category === selectedCategory;

      return matchesSkinFocus && matchesCategory;
    });

    return [...byCondition].sort((left, right) => right.match - left.match);
  }, [selectedCategory, selectedSkinFocus]);

  const visibleProducts = filteredProducts.length > 0 ? filteredProducts : sampleProducts;
  const topRecommended = visibleProducts.slice(0, Math.min(3, visibleProducts.length));
  const remainingProducts = visibleProducts.slice(topRecommended.length);

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-6 pt-8 lg:pt-10 pb-24 space-y-7 lg:space-y-8 text-[#1C1C1E]">
      <section>
        <h1 className="text-[26px] lg:text-[34px] font-bold leading-tight text-[#111111] mb-2">
          내 피부 고민에 맞는 추천 제품
        </h1>
        <p className="text-[14px] lg:text-[15px] text-[#5B5B60]">
          추천 이유와 주의 포인트를 보면서 빠르게 비교해보세요.
        </p>
      </section>

      <section className="space-y-3">
        <div className="text-[13px] font-semibold text-[#1C1C1E]">피부 고민 / 피부타입</div>
        <div className="flex flex-wrap gap-2">
          {skinFocuses.map((focus) => {
            const isActive = selectedSkinFocus === focus;

            return (
              <button
                key={focus}
                onClick={() => setSelectedSkinFocus(focus)}
                className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-colors ${
                  isActive
                    ? "bg-[#004D40] text-white shadow-[0_6px_18px_rgba(0,77,64,0.18)]"
                    : "bg-white border border-gray-200 text-[#1C1C1E] hover:border-[#004D40]/30"
                }`}
              >
                {focus}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3 pt-1">
          <div className="text-[12px] text-[#8E8E93] font-semibold">카테고리</div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = selectedCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 rounded-full text-[12px] font-semibold transition-colors ${
                    isActive
                      ? "bg-[#1C1C1E] text-white"
                      : "bg-[#F6F7F8] border border-gray-200 text-[#6B6B6B]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8F9] border border-gray-100 rounded-[26px] p-5 lg:p-6">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h2 className="text-[18px] lg:text-[22px] font-bold text-[#111111]">
            지금 조건에서 먼저 보면 좋은 제품
          </h2>
          <span className="text-[12px] text-[#8E8E93] font-semibold">TOP PICKS</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-4">
          {topRecommended.map((product) => (
            <ProductCard key={product.id} product={product} variant="recommendation" size="compact" />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between gap-4 mb-4">
          <h2 className="text-[18px] lg:text-[22px] font-bold text-[#111111]">다른 추천 제품 비교</h2>
          <span className="text-[12px] text-[#8E8E93] font-semibold">{visibleProducts.length}개</span>
        </div>
        {remainingProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4">
            {remainingProducts.map((product) => (
              <ProductCard key={product.id} product={product} variant="recommendation" size="compact" />
            ))}
          </div>
        ) : (
          <div className="text-[14px] text-[#8E8E93] bg-[#F7F8F9] border border-gray-100 rounded-2xl px-4 py-5">
            현재 조건에서는 추천 제품이 3개 이하로 추려졌어요. 위 추천 제품부터 확인해보세요.
          </div>
        )}
      </section>
    </div>
  );
}
