"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { Search, Flame, Sparkles, TrendingUp, ChevronRight } from "lucide-react";

import { ProductCard } from "./components/ProductCard";
import { sampleProducts } from "./data/mockdata";

// ==========================================
// 1. TYPES & STATIC DATA
// ==========================================
type BaseProduct = (typeof sampleProducts)[number];
type SkinFilter = "전체" | "민감성" | "수부지" | "건성" | "트러블";
type ConditionFilter = "전체" | "보습" | "가벼움" | "무향료" | "무알콜";

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

const POPULAR_INGREDIENTS = ["판테놀", "병풀추출물", "나이아신아마이드", "세라마이드 NP", "히알루론산"];
const TRENDING_SEARCHES = ["수부지 진정 토너", "환절기 장벽크림", "화농성 트러블", "좁쌀 여드름", "무향료 수분크림"];

const SKIN_TYPES: SkinFilter[] = ["전체", "민감성", "수부지", "건성", "트러블"];
const CONDITIONS: ConditionFilter[] = ["전체", "보습", "가벼움", "무향료", "무알콜"];

// ==========================================
// 2. MAIN COMPONENT
// ==========================================
export default function Home() {
  const [query, setQuery] = useState("");
  const [activeSkin, setActiveSkin] = useState<SkinFilter>("전체");
  const [activeCondition, setActiveCondition] = useState<ConditionFilter>("전체");

  // 즉각적인 필터링 로직
  const filteredProducts = useMemo(() => {
    return homeProducts.filter((product) => {
      const searchMatch = query === "" || 
        `${product.brand} ${product.name} ${product.mainIngredients.join(" ")}`.toLowerCase().includes(query.toLowerCase());
      
      const skinMatch = activeSkin === "전체" || product.recommendedFor.includes(activeSkin);
      
      const conditionMatch = (() => {
        if (activeCondition === "전체") return true;
        if (activeCondition === "보습") return product.recommendedFor.includes("보습") || product.texture === "rich";
        if (activeCondition === "가벼움") return product.texture === "light";
        if (activeCondition === "무향료") return !!product.noFragrance;
        if (activeCondition === "무알콜") return !!product.noAlcohol;
        return true;
      })();

      return searchMatch && skinMatch && conditionMatch;
    });
  }, [query, activeSkin, activeCondition]);

  return (
    <div className="min-h-screen bg-[#F7F8F9] text-[#1C1C1E] selection:bg-[#004D40] selection:text-white flex flex-col lg:flex-row">
      
      {/* ==========================================
          LEFT SIDEBAR: ChatGPT/Gemini 스타일의 탐색 패널
          (데스크탑에서만 노출, 모바일에서는 하단 탭이나 드로어로 뺌)
          ========================================== */}
      <aside className="hidden lg:flex flex-col w-[280px] h-screen sticky top-0 bg-white border-r border-gray-100 pt-8 pb-10 px-6 shrink-0 overflow-y-auto scrollbar-hide">
        <div className="mb-10">
        </div>

        {/* 실시간 인기 성분 */}
        <section className="mb-10">
          <h2 className="text-[14px] font-bold text-[#111111] flex items-center gap-2 mb-4">
            <Sparkles size={16} className="text-[#004D40]" /> 지금 뜨는 성분
          </h2>
          <div className="flex flex-col gap-1.5">
            {POPULAR_INGREDIENTS.map((ingredient, idx) => (
              <button 
                key={ingredient}
                onClick={() => setQuery(ingredient)}
                className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl hover:bg-[#F7F8F9] text-left transition-colors group"
              >
                <span className="text-[14px] font-medium text-[#48484A] group-hover:text-[#1C1C1E]">
                  <span className="text-[#8E8E93] mr-2 text-[12px] font-bold w-4 inline-block">{idx + 1}</span>
                  {ingredient}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* 많이 찾는 검색어 */}
        <section>
          <h2 className="text-[14px] font-bold text-[#111111] flex items-center gap-2 mb-4">
            <Flame size={16} className="text-[#FF3B30]" /> 인기 급상승 검색어
          </h2>
          <div className="flex flex-wrap gap-2">
            {TRENDING_SEARCHES.map((search) => (
              <button 
                key={search}
                onClick={() => setQuery(search)}
                className="px-3 py-1.5 bg-[#F7F8F9] border border-gray-100 rounded-lg text-[13px] font-medium text-[#5B5B60] hover:text-[#1C1C1E] hover:border-gray-200 transition-colors"
              >
                {search}
              </button>
            ))}
          </div>
        </section>
      </aside>

      {/* ==========================================
          MAIN CONTENT: 올리브영 + 토스 스타일의 상품 메인
          ========================================== */}
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-5 lg:px-10 pt-8 lg:pt-10 pb-24">
        
        {/* 모바일용 헤더 (데스크탑에선 사이드바가 역할 수행) */}
        <div className="lg:hidden mb-6 flex items-center justify-between">
          <h1 className="text-[22px] font-extrabold text-[#004D40] tracking-tight">ING.</h1>
        </div>

        {/* 1. 토스 스타일의 둥글고 부드러운 검색바 */}
        <div className="relative w-full mb-8">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <Search size={22} className="text-[#8E8E93]" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="어떤 성분의 화장품을 찾으시나요?"
            className="w-full py-4 pl-14 pr-5 bg-white shadow-sm border border-gray-100 rounded-2xl text-[16px] font-medium text-[#1C1C1E] placeholder:text-[#9A9AA0] focus:outline-none focus:border-[#004D40]/30 focus:ring-4 focus:ring-[#004D40]/5 transition-all"
          />
        </div>

        {/* 2. 빠른 필터 칩 (Quick Filters) - 즉각적으로 상품을 거르는 토스 UI */}
        <div className="space-y-4 mb-8">
          {/* 피부 타입 필터 */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
            <span className="text-[13px] font-bold text-[#8E8E93] whitespace-nowrap mr-2">피부타입</span>
            {SKIN_TYPES.map((skin) => (
              <button
                key={skin}
                onClick={() => setActiveSkin(skin)}
                className={`px-4 py-2 rounded-full text-[14px] font-bold whitespace-nowrap transition-colors ${
                  activeSkin === skin
                    ? "bg-[#1C1C1E] text-white"
                    : "bg-white text-[#5B5B60] border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {skin}
              </button>
            ))}
          </div>

          {/* 조건 필터 */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
            <span className="text-[13px] font-bold text-[#8E8E93] whitespace-nowrap mr-2">상세조건</span>
            {CONDITIONS.map((condition) => (
              <button
                key={condition}
                onClick={() => setActiveCondition(condition)}
                className={`px-4 py-2 rounded-full text-[14px] font-bold whitespace-nowrap transition-colors ${
                  activeCondition === condition
                    ? "bg-[#004D40] text-white"
                    : "bg-white text-[#5B5B60] border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {condition}
              </button>
            ))}
          </div>
        </div>

        {/* 3. 상품 목록 영역 (올리브영 스타일의 상품 최우선 노출) */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-[18px] font-bold text-[#111111]">
              분석된 추천 제품 <span className="text-[#004D40] ml-1">{filteredProducts.length}</span>
            </h2>
            <button className="text-[13px] font-medium text-[#8E8E93] flex items-center gap-0.5 hover:text-[#1C1C1E]">
              전체보기 <ChevronRight size={16} />
            </button>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group flex flex-col h-full bg-white rounded-[20px] overflow-hidden border border-gray-100 hover:border-[#004D40]/30 transition-all hover:shadow-md cursor-pointer">
                  {/* ProductCard 컴포넌트 렌더링 (기존 코드 유지) */}
                  <div className="p-4 flex-grow">
                    <ProductCard product={product} variant="recommendation" />
                  </div>
                  
                  {/* ING만의 특장점: 데이터 애널리스트가 분석한 성분 태그 영역 */}
                  <div className="px-4 py-3 bg-[#F7F8F9] border-t border-gray-50 flex flex-wrap gap-1.5 mt-auto">
                    {product.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-white border border-gray-200 rounded-md text-[11px] font-bold text-[#48484A]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full py-24 flex flex-col items-center justify-center bg-white rounded-[24px] border border-gray-100 mt-4 shadow-sm">
              <Search size={48} className="text-[#E5E5EA] mb-4" />
              <p className="text-[16px] text-[#5B5B60] font-medium mb-1">조건에 맞는 제품을 찾지 못했어요.</p>
              <p className="text-[14px] text-[#8E8E93] mb-6">검색어나 필터 조건을 변경해 보세요.</p>
              <button 
                onClick={() => { setQuery(""); setActiveSkin("전체"); setActiveCondition("전체"); }}
                className="px-6 py-2.5 bg-[#F7F8F9] text-[#1C1C1E] font-bold text-[14px] rounded-full hover:bg-gray-200 transition-colors"
              >
                필터 초기화
              </button>
            </div>
          )}
        </div>

      </main>
    </div>
  );
}