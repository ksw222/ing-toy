"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Search } from "lucide-react";

import { ProductCard } from "./components/ProductCard";
import { sampleProducts } from "./data/mockdata";

type BaseProduct = (typeof sampleProducts)[number];

type SkinFilter = "all" | "민감성" | "수부지" | "건성" | "트러블" | "진정" | "보습";

type BrandShortcut = "닥터지" | "라로슈포제" | "COSRX" | "토리든";

type HomeProduct = BaseProduct & {
  recommendedFor: string[];
  recommendReason: string;
  caution: string;
  brandAlias?: BrandShortcut;
};

const skinFilters: SkinFilter[] = ["all", "민감성", "수부지", "건성", "트러블", "진정", "보습"];

const brandShortcuts: BrandShortcut[] = ["닥터지", "라로슈포제", "COSRX", "토리든"];

const homeProducts: HomeProduct[] = [
  {
    ...sampleProducts[0],
    recommendedFor: ["민감성", "진정", "보습"],
    recommendReason: "자극 받은 피부를 빠르게 진정시키고 수분감을 채우기 좋아요.",
    caution: "점도가 있어 레이어링이 많으면 무겁게 느껴질 수 있어요.",
    brandAlias: "COSRX",
  },
  {
    ...sampleProducts[1],
    recommendedFor: ["수부지", "보습"],
    recommendReason: "유수분 밸런스를 무너뜨리지 않으면서 매끈한 결 정리에 잘 맞아요.",
    caution: "향이나 사용감에 예민하다면 먼저 소량 테스트가 좋아요.",
    brandAlias: "토리든",
  },
  {
    ...sampleProducts[2],
    recommendedFor: ["트러블", "진정"],
    recommendReason: "칙칙함과 자국 고민이 있을 때 집중 관리용으로 보기 좋아요.",
    caution: "고함량 비타민 성분은 민감한 날엔 자극이 있을 수 있어요.",
    brandAlias: "닥터지",
  },
  {
    ...sampleProducts[3],
    recommendedFor: ["트러블", "수부지"],
    recommendReason: "번들거림이 올라오면서 트러블이 반복되는 피부에 방향성이 분명해요.",
    caution: "레티놀류 사용이 낯설다면 격일 사용으로 시작하는 편이 안전해요.",
    brandAlias: "라로슈포제",
  },
  {
    ...sampleProducts[4],
    recommendedFor: ["민감성", "진정"],
    recommendReason: "열감이 오르거나 붉음이 도는 피부를 차분하게 진정시키기 좋아요.",
    caution: "수분 위주 토너라 건조한 피부는 크림과 함께 쓰는 편이 좋아요.",
    brandAlias: "닥터지",
  },
  {
    ...sampleProducts[5],
    recommendedFor: ["건성", "보습"],
    recommendReason: "당김이 심한 피부에 수분막을 만들어주는 보습 집중형 제품이에요.",
    caution: "지성 피부는 계절이나 루틴에 따라 무겁게 느껴질 수 있어요.",
    brandAlias: "토리든",
  },
];

const quickInputSuggestions = ["토리든", "라로슈포제", "닥터지 레드 블레미쉬", "COSRX"];

const helperSteps = [
  "피부타입과 고민을 기준으로 제품을 먼저 좁히고",
  "성분 특성과 주의 포인트를 함께 보여주고",
  "분석 결과를 바탕으로 구매 판단까지 도와줍니다",
];

const secondaryFeatures = [
  {
    href: "/lab/combo",
    eyebrow: "성분 분석",
    title: "성분 궁합 바로 확인",
    description: "함께 써도 되는지 빠르게 체크해보세요.",
  },
  {
    href: "/lab",
    eyebrow: "루틴 점검",
    title: "내 루틴 충돌 체크",
    description: "지금 쓰는 조합에서 주의 포인트를 찾아드려요.",
  },
  {
    href: "/market",
    eyebrow: "성분 사전",
    title: "제품 전체 더 둘러보기",
    description: "추천 흐름을 본 뒤 전체 상품도 이어서 탐색할 수 있어요.",
  },
];

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<SkinFilter>("all");
  const [selectedBrand, setSelectedBrand] = useState<BrandShortcut | null>(null);

  const visibleProducts = homeProducts.filter((product) => {
    const matchesFilter =
      selectedFilter === "all" || product.recommendedFor.includes(selectedFilter);
    const matchesBrand = !selectedBrand || product.brandAlias === selectedBrand;

    return matchesFilter && matchesBrand;
  });

  const productsToRender = visibleProducts.length > 0 ? visibleProducts : homeProducts;

  const handleAnalyze = () => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      router.push("/market");
      return;
    }

    const matchedProduct = homeProducts.find((product) => {
      const target = `${product.brand} ${product.name}`.toLowerCase();
      return target.includes(normalizedQuery);
    });

    if (matchedProduct) {
      router.push(`/market/${matchedProduct.id}`);
      return;
    }

    router.push("/market");
  };

  const handleSuggestionClick = (value: string) => {
    setQuery(value);
  };

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-6 pt-8 lg:pt-12 pb-24 space-y-10 lg:space-y-14">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F2F2F7] rounded-full mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2ECC71]" />
            <span className="text-[12px] font-medium text-[#6B6B6B]">
              Ingredient-first skincare exploration
            </span>
          </div>

          <h1 className="text-[30px] lg:text-[46px] font-bold leading-[1.14] tracking-[-0.03em] text-[#1C1C1E] mb-4">
            내 피부에 맞는 화장품을
            <br />
            성분 기준으로 찾으세요
          </h1>

          <p className="max-w-2xl text-[15px] lg:text-[17px] leading-7 text-[#6B6B6B]">
            피부타입과 고민에 맞는 제품을 바로 탐색하고, 지금 쓰는 제품도 간단하게
            분석해보세요. ING는 추천 이유까지 함께 보여주는 성분 중심 탐색
            서비스입니다.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-[#004D40] rounded-[28px] lg:rounded-[32px] p-6 lg:p-7 text-white h-full flex flex-col justify-between shadow-lg">
            <div>
              <div className="text-[12px] font-bold text-white/70 mb-3">빠른 시작</div>
              <h2 className="text-[22px] lg:text-[26px] font-bold leading-tight mb-3">
                지금 쓰는 제품이
                <br />
                괜찮은지 확인해보세요
              </h2>
              <p className="text-[14px] leading-6 text-white/75">
                제품명이나 브랜드를 입력하면 바로 탐색을 시작할 수 있어요.
              </p>
            </div>

            <div className="mt-6 space-y-3">
              <div className="bg-white/10 rounded-2xl p-4">
                <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl shadow-sm">
                  <Search size={18} strokeWidth={2.5} color="#004D40" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        handleAnalyze();
                      }
                    }}
                    type="text"
                    placeholder="제품명 또는 브랜드명을 입력하세요"
                    className="flex-1 bg-transparent outline-none text-[14px] text-[#1C1C1E] placeholder:text-[#8E8E93]"
                  />
                  <button
                    onClick={handleAnalyze}
                    className="px-4 py-2 bg-[#004D40] hover:bg-[#003D33] text-white rounded-lg text-[13px] font-medium transition-colors"
                  >
                    분석해보기
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {quickInputSuggestions.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleSuggestionClick(item)}
                    className="px-3 py-2 rounded-full bg-white/10 hover:bg-white/15 text-[12px] font-medium text-white transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F8FA] border border-gray-100 rounded-[28px] lg:rounded-[32px] p-5 lg:p-7">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-7 space-y-5">
            <div>
              <div className="text-[13px] font-bold text-[#1C1C1E] mb-3">
                내 피부 고민으로 먼저 골라보세요
              </div>
              <div className="flex flex-wrap gap-2">
                {skinFilters.map((filter) => {
                  const isActive = selectedFilter === filter;

                  return (
                    <button
                      key={filter}
                      onClick={() => setSelectedFilter(filter)}
                      className={`px-4 py-2 rounded-full text-[13px] font-medium transition-colors ${
                        isActive
                          ? "bg-[#004D40] text-white"
                          : "bg-white text-[#1C1C1E] border border-gray-200 hover:border-[#004D40]/30"
                      }`}
                    >
                      {filter === "all" ? "전체" : filter}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="text-[13px] font-bold text-[#1C1C1E] mb-3">
                많이 찾는 브랜드로 바로 시작할 수 있어요
              </div>
              <div className="flex flex-wrap gap-2">
                {brandShortcuts.map((brand) => {
                  const isActive = selectedBrand === brand;

                  return (
                    <button
                      key={brand}
                      onClick={() => setSelectedBrand(isActive ? null : brand)}
                      className={`px-4 py-2 rounded-full text-[13px] font-medium transition-colors ${
                        isActive
                          ? "bg-[#1C1C1E] text-white"
                          : "bg-white text-[#6B6B6B] border border-gray-200 hover:text-[#1C1C1E]"
                      }`}
                    >
                      {brand}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white rounded-[24px] border border-gray-100 p-5 lg:p-6">
            <div className="text-[12px] font-bold text-[#8E8E93] mb-3">지금 보고 있는 탐색 조건</div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1.5 rounded-full bg-[#F2F2F7] text-[12px] font-medium text-[#1C1C1E]">
                피부: {selectedFilter === "all" ? "전체" : selectedFilter}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#F2F2F7] text-[12px] font-medium text-[#1C1C1E]">
                브랜드: {selectedBrand ?? "전체"}
              </span>
            </div>
            <p className="text-[14px] leading-6 text-[#6B6B6B]">
              빠르게 조건을 바꾸며 둘러보고, 마음에 드는 제품은 상세 분석으로
              이어서 확인해보세요.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-4 mb-5">
          <div>
            <h2 className="text-[22px] lg:text-[28px] font-bold text-[#1C1C1E] mb-2">
              내 피부 고민으로 먼저 둘러보세요
            </h2>
            <p className="text-[14px] lg:text-[15px] text-[#6B6B6B]">
              추천 이유가 보이는 카드로 빠르게 비교할 수 있어요.
            </p>
          </div>
          <Link
            href="/market"
            className="hidden lg:inline-flex items-center gap-2 text-[14px] font-medium text-[#004D40]"
          >
            전체 제품 보기
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
          {productsToRender.map((product) => (
            <div key={product.id} className="min-w-[280px] max-w-[280px] snap-start">
              <ProductCard product={product} variant="recommendation" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border border-gray-200 rounded-[28px] lg:rounded-[32px] p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="text-[12px] font-bold text-[#8E8E93] mb-3">더 정확한 추천</div>
            <h2 className="text-[22px] lg:text-[28px] font-bold text-[#1C1C1E] mb-3">
              더 정확한 추천이 필요하신가요?
            </h2>
            <p className="text-[14px] lg:text-[15px] leading-7 text-[#6B6B6B]">
              피부타입과 고민을 바탕으로 더 정밀한 추천과 분석을 받아보세요.
            </p>
          </div>
          <div className="lg:col-span-4">
            <Link
              href="/market"
              className="inline-flex items-center justify-center w-full px-5 py-4 bg-[#004D40] hover:bg-[#003D33] text-white rounded-2xl text-[14px] font-bold transition-colors shadow-sm"
            >
              내 피부에 맞는 제품 더 찾기
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        <div className="lg:col-span-5 bg-[#004D40] rounded-[28px] lg:rounded-[32px] p-6 lg:p-8 text-white">
          <div className="text-[12px] font-bold text-white/65 mb-3">WHY ING</div>
          <h2 className="text-[22px] lg:text-[28px] font-bold leading-tight mb-3">
            ING는 이렇게 추천해요
          </h2>
          <p className="text-[14px] leading-7 text-white/75">
            단순히 제품을 나열하지 않고, 피부 조건과 성분 해석을 함께 보여주는
            흐름을 만드는 데 집중합니다.
          </p>
        </div>

        <div className="lg:col-span-7 bg-[#F8F8FA] border border-gray-100 rounded-[28px] lg:rounded-[32px] p-6 lg:p-8">
          <div className="space-y-4">
            {helperSteps.map((step) => (
              <div
                key={step}
                className="bg-white rounded-2xl border border-gray-100 px-5 py-4 text-[14px] lg:text-[15px] text-[#1C1C1E]"
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5">
          <h2 className="text-[20px] lg:text-[24px] font-bold text-[#1C1C1E] mb-2">
            다른 기능도 함께 활용해보세요
          </h2>
          <p className="text-[14px] lg:text-[15px] text-[#6B6B6B]">
            핵심 탐색 흐름 아래에서 필요한 도구만 가볍게 이어갈 수 있도록 두었습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {secondaryFeatures.map((feature) => (
            <Link
              key={feature.href}
              href={feature.href}
              className="bg-white border border-gray-200 rounded-[24px] p-5 lg:p-6 hover:shadow-lg transition-all"
            >
              <div className="text-[11px] font-bold text-[#8E8E93] uppercase mb-3">
                {feature.eyebrow}
              </div>
              <h3 className="text-[18px] font-bold text-[#1C1C1E] mb-2">{feature.title}</h3>
              <p className="text-[13px] leading-6 text-[#6B6B6B] mb-4">{feature.description}</p>
              <div className="inline-flex items-center gap-2 text-[13px] font-medium text-[#004D40]">
                바로 가기
                <ArrowRight size={15} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
