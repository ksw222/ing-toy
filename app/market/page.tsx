"use client";

import { useState } from "react";
import Link from "next/link";

import { ProductCard } from "../components/ProductCard";
import { sampleProducts, type ProductCategory, type ProductSummary } from "../data/mockdata";

type SkinFocus = "전체" | "민감성" | "수부지" | "건성" | "트러블" | "진정" | "보습" | "탄력" | "칙칙함";
type SortOption = "추천순" | "인기순";

const skinFocuses: SkinFocus[] = ["전체", "민감성", "수부지", "건성", "트러블", "진정", "보습", "탄력", "칙칙함"];
const categories: Array<"전체" | ProductCategory> = ["전체", "세럼", "토너", "크림"];
const brands = ["전체", "COSRX", "토리든", "Numbuzin", "SOME BY MI", "아누아", "라운드랩"];

const curationCopy: Record<Exclude<SkinFocus, "전체">, { title: string; description: string }> = {
  민감성: {
    title: "민감한 피부가 편안하게 받아들이기 쉬운 제품",
    description: "진정과 장벽 보완을 우선으로 보면서 자극 가능성은 낮춘 흐름으로 골랐어요.",
  },
  수부지: {
    title: "겉은 번들거리지만 속은 당기는 피부를 위한 추천",
    description: "무겁지 않게 수분을 채우면서 밸런스를 맞추는 제품 위주로 정리했어요.",
  },
  건성: {
    title: "당김과 장벽 약화가 반복될 때 먼저 보기 좋은 제품",
    description: "보습 지속력과 마무리 안정감이 있는 제품부터 비교해볼 수 있어요.",
  },
  트러블: {
    title: "트러블과 흔적 고민을 함께 보는 추천",
    description: "피부를 과하게 몰아붙이기보다 방향성이 분명한 제품들로 구성했어요.",
  },
  진정: {
    title: "열감과 붉은기를 차분히 눌러주는 진정 중심 추천",
    description: "기능성 루틴 전 단계에서 피부를 안정시키는 제품이 먼저 보여요.",
  },
  보습: {
    title: "속당김이 계속 느껴질 때 보기 좋은 보습 중심 추천",
    description: "수분 보충과 장벽 유지력을 함께 챙길 수 있는 제품 위주예요.",
  },
  탄력: {
    title: "피부결과 탄력 저하가 함께 고민일 때 보는 추천",
    description: "결 정돈과 기능성 케어를 함께 잡을 수 있는 제품을 우선 배치했어요.",
  },
  칙칙함: {
    title: "피부 톤과 자국 고민이 있을 때 먼저 비교할 제품",
    description: "밝기 개선 방향이 분명한 제품을 기준으로 가볍게 큐레이션했어요.",
  },
};

function sortProducts(products: ProductSummary[], sortBy: SortOption) {
  if (sortBy === "인기순") {
    return [...products].sort((left, right) => right.reviewCount - left.reviewCount);
  }

  return [...products].sort((left, right) => right.match - left.match);
}

export default function MarketPage() {
  const [selectedSkinFocus, setSelectedSkinFocus] = useState<SkinFocus>("전체");
  const [selectedCategory, setSelectedCategory] = useState<"전체" | ProductCategory>("전체");
  const [selectedBrand, setSelectedBrand] = useState("전체");
  const [sortBy, setSortBy] = useState<SortOption>("추천순");

  const filteredProducts = sortProducts(
    sampleProducts.filter((product) => {
      const matchesSkinFocus =
        selectedSkinFocus === "전체" || product.recommendedFor.includes(selectedSkinFocus);
      const matchesCategory =
        selectedCategory === "전체" || product.category === selectedCategory;
      const matchesBrand = selectedBrand === "전체" || product.brand === selectedBrand;

      return matchesSkinFocus && matchesCategory && matchesBrand;
    }),
    sortBy
  );

  const visibleProducts = filteredProducts.length > 0 ? filteredProducts : sortProducts(sampleProducts, sortBy);
  const currentCuration =
    selectedSkinFocus === "전체" ? null : curationCopy[selectedSkinFocus as Exclude<SkinFocus, "전체">];

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-6 pt-8 lg:pt-10 pb-24 space-y-8 lg:space-y-10 text-[#1C1C1E]">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F6F7F8] border border-gray-100 rounded-full mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2ECC71]" />
            <span className="text-[12px] font-semibold text-[#6B6B6B]">Recommendation curation</span>
          </div>
          <h1 className="text-[28px] lg:text-[36px] font-bold text-[#111111] leading-tight mb-3">
            내 피부 고민에 맞는 추천 제품
          </h1>
          <p className="text-[14px] lg:text-[16px] leading-7 text-[#5B5B60] max-w-3xl">
            홈에서 고른 조건을 바탕으로, 추천 이유와 주의 포인트까지 함께 비교해보세요.
            ING는 구매 전에 왜 맞는지 먼저 판단할 수 있게 정리해드립니다.
          </p>
        </div>

        <div className="lg:col-span-4">
          <div className="bg-[#004D40] rounded-[28px] p-6 text-white h-full flex flex-col justify-between shadow-[0_16px_40px_rgba(0,77,64,0.18)]">
            <div>
              <div className="text-[12px] font-semibold text-white/65 mb-2">BUYING FLOW</div>
              <div className="text-[20px] font-bold leading-tight mb-3">
                추천 이유를 보고
                <br />
                주의 포인트까지 확인한 뒤
                <br />
                구매로 이어지게 설계했어요
              </div>
              <p className="text-[13px] leading-6 text-white/78">
                카드에서 빠르게 비교하고, 상세에서 판단한 뒤 외부 구매로 이어질 수 있어요.
              </p>
            </div>
            <Link
              href="/"
              className="mt-5 inline-flex items-center justify-center px-4 py-3 rounded-2xl bg-white text-[#004D40] text-[13px] font-semibold"
            >
              홈 조건 다시 고르기
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8F9] border border-gray-100 rounded-[28px] lg:rounded-[32px] p-5 lg:p-7">
        <div className="space-y-5">
          <div>
            <div className="text-[13px] font-semibold text-[#1C1C1E] mb-3">피부 고민 / 피부타입</div>
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
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
            <div className="lg:col-span-4">
              <div className="text-[13px] font-semibold text-[#1C1C1E] mb-3">카테고리</div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const isActive = selectedCategory === category;

                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-colors ${
                        isActive
                          ? "bg-[#1C1C1E] text-white shadow-[0_8px_20px_rgba(17,17,17,0.15)]"
                          : "bg-white border border-gray-200 text-[#6B6B6B]"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="text-[13px] font-semibold text-[#1C1C1E] mb-3">브랜드</div>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => {
                  const isActive = selectedBrand === brand;

                  return (
                    <button
                      key={brand}
                      onClick={() => setSelectedBrand(brand)}
                      className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-colors ${
                        isActive
                          ? "bg-[#1C1C1E] text-white shadow-[0_8px_20px_rgba(17,17,17,0.15)]"
                          : "bg-white border border-gray-200 text-[#6B6B6B]"
                      }`}
                    >
                      {brand}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="text-[13px] font-semibold text-[#1C1C1E] mb-3">정렬</div>
              <div className="flex gap-2">
                {(["추천순", "인기순"] as SortOption[]).map((option) => {
                  const isActive = sortBy === option;

                  return (
                    <button
                      key={option}
                      onClick={() => setSortBy(option)}
                      className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-colors ${
                        isActive
                        ? "bg-[#004D40] text-white shadow-[0_6px_18px_rgba(0,77,64,0.18)]"
                          : "bg-white border border-gray-200 text-[#6B6B6B]"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {currentCuration && (
        <section className="bg-white border border-gray-200 rounded-[28px] lg:rounded-[32px] p-6 lg:p-8 shadow-[0_14px_30px_rgba(15,61,53,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <div className="text-[12px] font-semibold text-[#8E8E93] mb-2">현재 큐레이션 포커스</div>
              <h2 className="text-[22px] lg:text-[26px] font-bold text-[#111111] mb-3">
                {currentCuration.title}
              </h2>
              <p className="text-[14px] leading-7 text-[#5B5B60]">{currentCuration.description}</p>
            </div>
            <div className="lg:col-span-4">
              <div className="bg-[#F7F8F9] rounded-[24px] p-5 border border-gray-100 shadow-[0_10px_24px_rgba(17,17,17,0.06)]">
                <div className="text-[12px] font-semibold text-[#8E8E93] mb-2">추천 결과</div>
                <div className="text-[28px] font-black text-[#004D40] leading-none mb-2">
                  {filteredProducts.length}
                </div>
                <p className="text-[13px] leading-6 text-[#5B5B60]">
                  선택한 조건에서 추천 이유와 주의 포인트가 모두 있는 제품만 우선 보여드려요.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section>
        <div className="flex items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-[20px] lg:text-[24px] font-bold text-[#111111] mb-2">
              추천 이유를 보며 비교해보세요
            </h2>
            <p className="text-[14px] lg:text-[15px] text-[#5B5B60]">
              누가 쓰기 좋은지, 왜 추천되는지, 무엇을 주의해야 하는지를 카드에서 먼저 확인할 수 있어요.
            </p>
          </div>
          <div className="text-[13px] text-[#8E8E93] font-semibold">{visibleProducts.length}개 제품</div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} variant="recommendation" size="compact" />
          ))}
        </div>
      </section>
    </div>
  );
}
