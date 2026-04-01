"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowUpRight, ChevronLeft } from "lucide-react";

import { detailedProducts, sampleProducts } from "../../data/mockdata";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = Number(params.id);

  const baseProduct = sampleProducts.find((item) => item.id === productId) ?? sampleProducts[0];
  const detailProduct =
    detailedProducts.find((item) => item.id === productId) ??
    detailedProducts.find((item) => item.id === baseProduct.id) ??
    detailedProducts[0];

  const alternativeProduct = sampleProducts.find((item) => item.id === detailProduct.alternative.id);
  const hasStrongCaution = detailProduct.caution.length > 0;

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-6 pt-6 lg:pt-10 pb-24 space-y-8 lg:space-y-10">
      <Link
        href="/market"
        className="inline-flex items-center gap-1 text-[14px] text-[#8E8E93] hover:text-[#1C1C1E] transition-colors"
      >
        <ChevronLeft size={16} />
        돌아가기
      </Link>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        <div className="lg:col-span-5">
          <div className="bg-white border border-gray-200 rounded-[28px] lg:rounded-[32px] p-5 lg:p-6 shadow-[0_12px_30px_rgba(17,17,17,0.08)]">
            <div className="relative aspect-square bg-[#F7F8F9] rounded-2xl border border-gray-100 overflow-hidden mb-4">
              <Image
                src={baseProduct.image}
                alt={baseProduct.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="relative aspect-square bg-[#F7F8F9] rounded-xl border border-gray-100 overflow-hidden"
                >
                  <Image
                    src={baseProduct.image}
                    alt={`${baseProduct.name} 썸네일 ${item}`}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-[#F8F8FA] border border-gray-100 rounded-[30px] lg:rounded-[36px] p-6 lg:p-8 h-full">
            <div className="text-[12px] font-bold text-[#004D40] mb-3 uppercase tracking-[0.18em]">
              Product Judgment
            </div>
            <div className="text-[14px] font-bold text-[#004D40] mb-2">{baseProduct.brand}</div>
            <h1 className="text-[28px] lg:text-[38px] font-bold leading-tight text-[#1C1C1E] mb-4">
              {baseProduct.name}
            </h1>
            <p className="text-[15px] lg:text-[16px] leading-7 text-[#48484A] mb-5 max-w-2xl">
              {baseProduct.oneLineSummary}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {baseProduct.recommendedFor.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-[12px] font-medium text-[#1C1C1E]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="bg-white rounded-2xl border border-gray-100 p-4">
                <div className="text-[11px] font-bold text-[#8E8E93] mb-1">FIT SCORE</div>
                <div className="text-[24px] font-black text-[#004D40]">{baseProduct.match}%</div>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-4">
                <div className="text-[11px] font-bold text-[#8E8E93] mb-1">RATING</div>
                <div className="text-[24px] font-black text-[#1C1C1E]">{baseProduct.rating}</div>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-4">
                <div className="text-[11px] font-bold text-[#8E8E93] mb-1">PRICE</div>
                <div className="text-[20px] font-black text-[#1C1C1E]">
                  {baseProduct.price.toLocaleString()}원
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-4">
                <div className="text-[11px] font-bold text-[#8E8E93] mb-1">REVIEWS</div>
                <div className="text-[20px] font-black text-[#1C1C1E]">
                  {baseProduct.reviewCount.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-[#004D40] rounded-[30px] lg:rounded-[36px] p-6 lg:p-8 text-white h-full flex flex-col justify-between">
            <div>
              <div className="text-[12px] font-bold text-white/65 mb-3">구매 전 빠른 판단</div>
              <h2 className="text-[24px] lg:text-[28px] font-bold leading-tight mb-3">
                이 제품이
                <br />
                {baseProduct.recommendedFor.slice(0, 2).join(" · ")} 피부에
                <br />
                잘 맞는 이유
              </h2>
              <p className="text-[14px] leading-7 text-white/78 mb-5">{baseProduct.recommendReason}</p>
              <div className="bg-white/10 border border-white/10 rounded-2xl p-4">
                <div className="text-[11px] font-bold text-white/65 mb-2">주의 포인트</div>
                <p className="text-[13px] leading-6 text-white">{baseProduct.caution}</p>
              </div>
            </div>

            <div className="mt-6">
              <a
                href={baseProduct.purchaseLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-4 bg-white text-[#004D40] rounded-2xl text-[14px] font-bold"
              >
                구매 링크로 이동
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        <div className="lg:col-span-7 bg-white border border-gray-200 rounded-[28px] lg:rounded-[32px] p-6 lg:p-8">
          <div className="text-[12px] font-bold text-[#8E8E93] mb-3">WHY THIS FITS</div>
          <h2 className="text-[22px] lg:text-[26px] font-bold text-[#1C1C1E] mb-5">
            왜 이 제품을 추천하나요?
          </h2>
          <div className="space-y-3">
            {detailProduct.recommendationPoints.map((point) => (
              <div
                key={point}
                className="bg-[#F8F8FA] border border-gray-100 rounded-2xl px-5 py-4 text-[14px] leading-6 text-[#1C1C1E]"
              >
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 bg-white border border-gray-200 rounded-[28px] lg:rounded-[32px] p-6 lg:p-8">
          <div className="text-[12px] font-bold text-[#8E8E93] mb-3">WATCH OUT</div>
          <h2 className="text-[22px] lg:text-[26px] font-bold text-[#1C1C1E] mb-5">
            사용 전 주의할 점
          </h2>
          {hasStrongCaution ? (
            <div className="space-y-3">
              {detailProduct.cautionPoints.map((point) => (
                <div
                  key={point}
                  className="bg-[#FFF8F2] border border-[#F3E1CC] rounded-2xl px-5 py-4 text-[14px] leading-6 text-[#5C4631]"
                >
                  {point}
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-[#F4FBF7] border border-[#D8EEDD] rounded-2xl px-5 py-4">
              <p className="text-[14px] leading-6 text-[#1C1C1E]">
                강한 주의 포인트는 적은 편이에요. 다만 {detailProduct.cautionPoints[0]}
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-white border border-gray-200 rounded-[28px] lg:rounded-[32px] p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="text-[12px] font-bold text-[#8E8E93] mb-3">KEY INGREDIENTS</div>
            <h2 className="text-[22px] lg:text-[26px] font-bold text-[#1C1C1E] mb-3">
              핵심 성분을 이해하면 쉬워요
            </h2>
            <p className="text-[14px] leading-7 text-[#6B6B6B]">
              성분명을 그대로 나열하는 대신, 이 제품이 어떤 방향으로 작동하는지 이해하기 쉽게 정리했어요.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-3">
            {detailProduct.ingredients.map((ingredient) => (
              <div
                key={ingredient.name}
                className="bg-[#F8F8FA] border border-gray-100 rounded-2xl p-5 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        ingredient.grade === "green"
                          ? "bg-[#EAF8EF] text-[#2E8B57]"
                          : ingredient.grade === "yellow"
                            ? "bg-[#FFF4E5] text-[#B56B00]"
                            : "bg-[#FCECEC] text-[#C0392B]"
                      }`}
                    >
                      {ingredient.grade === "green"
                        ? "안정"
                        : ingredient.grade === "yellow"
                          ? "주의 필요"
                          : "민감 피부 주의"}
                    </span>
                    <div className="text-[16px] font-bold text-[#1C1C1E]">{ingredient.name}</div>
                  </div>
                  <p className="text-[14px] leading-6 text-[#6B6B6B]">{ingredient.effect}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        <div className="lg:col-span-7 bg-[#F8F8FA] border border-gray-100 rounded-[28px] lg:rounded-[32px] p-6 lg:p-8">
          <div className="text-[12px] font-bold text-[#8E8E93] mb-3">ALTERNATIVE</div>
          <h2 className="text-[22px] lg:text-[26px] font-bold text-[#1C1C1E] mb-3">
            비슷한 방향의 대체 제품
          </h2>
          <p className="text-[14px] leading-7 text-[#6B6B6B] mb-5">
            지금 제품이 조금 무겁거나 자극적으로 느껴질까 걱정된다면 이런 선택지도 같이 볼 수 있어요.
          </p>

          <div className="bg-white border border-gray-200 rounded-[24px] p-5 lg:p-6">
            <div className="flex items-center justify-between gap-4 mb-3">
              <div>
                <div className="text-[11px] font-bold text-[#8E8E93] mb-1">
                  유사도 {detailProduct.alternative.similarity}%
                </div>
                <div className="text-[20px] font-bold text-[#1C1C1E]">
                  {detailProduct.alternative.name}
                </div>
              </div>
              {alternativeProduct && (
                <Link
                  href={`/market/${alternativeProduct.id}`}
                  className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#004D40] text-white text-[13px] font-bold"
                >
                  비교해보기
                </Link>
              )}
            </div>
            <p className="text-[14px] leading-6 text-[#6B6B6B]">{detailProduct.alternative.reason}</p>
          </div>
        </div>

        <div className="lg:col-span-5 bg-[#004D40] rounded-[28px] lg:rounded-[32px] p-6 lg:p-8 text-white">
          <div className="text-[12px] font-bold text-white/65 mb-3">FINAL CHECK</div>
          <h2 className="text-[24px] lg:text-[28px] font-bold leading-tight mb-3">
            추천 이유와 주의 포인트가
            <br />
            모두 괜찮다면
            <br />
            이제 구매로 이어가세요
          </h2>
          <p className="text-[14px] leading-7 text-white/78">
            ING는 제품이 맞는지 판단하는 단계까지 돕고, 최종 구매는 사용자가 스스로 결정할 수 있게 연결합니다.
          </p>
        </div>
      </section>
    </div>
  );
}




