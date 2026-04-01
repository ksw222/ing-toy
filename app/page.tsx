"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, ArrowRight } from "lucide-react";

import { ProductCard } from "./components/ProductCard";
import { sampleProducts } from "./data/mockdata";

// --- Types & Data ---
type BaseProduct = (typeof sampleProducts)[number];
type SkinFilter = "전체" | "민감성" | "수부지" | "건성" | "트러블";
type ConditionFilter = "전체" | "보습 위주" | "가벼운 사용감" | "무향료" | "무알콜";

type HomeProduct = BaseProduct & {
  tags: string[];
  texture: "light" | "rich";
  noFragrance?: boolean;
  noAlcohol?: boolean;
};

const homeProducts: HomeProduct[] = [
  { ...sampleProducts[0], tags: ["민감성 OK", "진정", "장벽"], texture: "rich", noFragrance: true, noAlcohol: true },
  { ...sampleProducts[1], tags: ["가벼움", "수분", "데일리"], texture: "light", noFragrance: true, noAlcohol: true },
  { ...sampleProducts[2], tags: ["트러블", "톤 정리", "집중 케어"], texture: "light" },
  { ...sampleProducts[3], tags: ["트러블", "결 개선", "야간"], texture: "light" },
  { ...sampleProducts[4], tags: ["민감성 OK", "진정", "저자극"], texture: "light", noFragrance: true, noAlcohol: true },
  { ...sampleProducts[5], tags: ["보습", "장벽", "건성"], texture: "rich", noFragrance: true },
];

const SKIN_TYPES: SkinFilter[] = ["전체", "민감성", "수부지", "건성", "트러블"];
const CONDITIONS: ConditionFilter[] = ["전체", "보습 위주", "가벼운 사용감", "무향료", "무알콜"];

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeSkin, setActiveSkin] = useState<SkinFilter>("전체");
  const [activeCondition, setActiveCondition] = useState<ConditionFilter>("전체");

  // 즉각적인 필터링 로직 (ChatGPT/토스 스타일의 빠른 반응성)
  const filteredProducts = useMemo(() => {
    return homeProducts.filter((product) => {
      // 1. 검색어 필터
      const searchMatch =
        query === "" ||
        `${product.brand} ${product.name} ${product.mainIngredients.join(" ")}`
          .toLowerCase()
          .includes(query.toLowerCase());

      // 2. 피부타입 필터
      const skinMatch = activeSkin === "전체" || product.recommendedFor.includes(activeSkin);

      // 3. 조건 필터
      const conditionMatch = (() => {
        if (activeCondition === "전체") return true;
        if (activeCondition === "보습 위주") return product.recommendedFor.includes("보습") || product.texture === "rich";
        if (activeCondition === "가벼운 사용감") return product.texture === "light";
        if (activeCondition === "무향료") return !!product.noFragrance;
        if (activeCondition === "무알콜") return !!product.noAlcohol;
        return true;
      })();

      return searchMatch && skinMatch && conditionMatch;
    });
  }, [query, activeSkin, activeCondition]);

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#1C1C1E] selection:bg-[#004D40] selection:text-white pb-24">
      <div className="max-w-5xl mx-auto px-6 pt-12 md:pt-16">
        
        {/* Header: 세련되고 절제된 타이포그래피 */}
        <header className="mb-8">
          <h1 className="text-[22px] md:text-[26px] font-bold text-[#111111] tracking-tight leading-snug">
            내 피부에 필요한 성분만 <br className="md:hidden" />
            <span className="text-[#004D40]">정확하게 필터링하세요.</span>
          </h1>
          <p className="mt-2 text-[14px] text-[#8E8E93] font-medium tracking-tight">
            브랜드가 아닌 전성분 데이터를 기준으로 분석합니다.
          </p>
        </header>

        {/* Control Panel: 검색 및 필터 인터페이스 (SaaS 느낌의 밀도 높은 디자인) */}
        <section className="bg-[#F7F8F9] border border-gray-100/80 rounded-2xl p-4 md:p-5 mb-10 transition-all">
          <div className="flex flex-col gap-5">
            
            {/* Search Input */}
            <div className="relative flex items-center w-full bg-white rounded-xl border border-gray-200 overflow-hidden focus-within:border-[#004D40] focus-within:ring-1 focus-within:ring-[#004D40] transition-all">
              <Search size={18} className="text-[#8E8E93] ml-4" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="제품명, 피하고 싶은 성분(예: 향료), 고민 검색"
                className="w-full py-3.5 px-3 text-[14px] md:text-[15px] bg-transparent outline-none placeholder:text-[#9A9AA0]"
              />
            </div>

            {/* Filters (칩 형태, 작은 폰트) */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-[12px] font-bold text-[#8E8E93] flex items-center gap-1.5 uppercase tracking-wider">
                  <SlidersHorizontal size={12} /> Skin Type
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {SKIN_TYPES.map((skin) => (
                    <button
                      key={skin}
                      onClick={() => setActiveSkin(skin)}
                      className={`px-3 py-1.5 rounded-lg text-[13px] font-medium transition-colors ${
                        activeSkin === skin
                          ? "bg-[#1C1C1E] text-white"
                          : "bg-white text-[#6B6B6B] border border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      {skin}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[12px] font-bold text-[#8E8E93] flex items-center gap-1.5 uppercase tracking-wider">
                  <SlidersHorizontal size={12} /> Condition
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {CONDITIONS.map((condition) => (
                    <button
                      key={condition}
                      onClick={() => setActiveCondition(condition)}
                      className={`px-3 py-1.5 rounded-lg text-[13px] font-medium transition-colors ${
                        activeCondition === condition
                          ? "bg-[#004D40] text-white"
                          : "bg-white text-[#6B6B6B] border border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      {condition}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Results Area: 필터가 걸린 상품이 즉시 노출되는 영역 */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[14px] font-bold text-[#111111]">
              분석 결과 <span className="text-[#004D40] ml-1">{filteredProducts.length}</span>
            </h2>
            {filteredProducts.length > 0 && (
              <Link href="/market" className="text-[13px] font-medium text-[#8E8E93] hover:text-[#1C1C1E] flex items-center gap-1 transition-colors">
                전체보기 <ArrowRight size={14} />
              </Link>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group flex flex-col h-full bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-[#004D40]/30 transition-colors shadow-sm hover:shadow-md">
                  {/* 기존 ProductCard를 래핑하여 디자인 톤을 맞춤 */}
                  <div className="p-4 flex-grow">
                    <ProductCard product={product} variant="recommendation" />
                  </div>
                  
                  {/* 데이터 분석가/성분 중심 플랫폼의 느낌을 살린 하단 태그 영역 */}
                  <div className="px-4 py-3 bg-[#F7F8F9] border-t border-gray-100 flex flex-wrap gap-1.5 mt-auto">
                    {product.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-white border border-gray-200 rounded-md text-[11px] font-bold text-[#48484A]">
                        {tag}
                      </span>
                    ))}
                    {product.noFragrance && (
                      <span className="px-2 py-1 bg-[#004D40]/5 border border-[#004D40]/10 rounded-md text-[11px] font-bold text-[#004D40]">
                        무향료
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full py-20 flex flex-col items-center justify-center bg-[#F7F8F9] rounded-2xl border border-gray-100 border-dashed mt-4">
              <Search size={32} className="text-[#D1D1D6] mb-3" />
              <p className="text-[14px] text-[#5B5B60] font-medium">조건에 맞는 성분 데이터가 없습니다.</p>
              <button 
                onClick={() => { setQuery(""); setActiveSkin("전체"); setActiveCondition("전체"); }}
                className="mt-3 text-[13px] font-bold text-[#004D40] hover:underline"
              >
                필터 초기화
              </button>
            </div>
          )}
        </section>

      </div>
    </div>
  );
}