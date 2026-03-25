"use client";

import Link from "next/link";

type ProductCardProduct = {
  id: number;
  brand: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  match: number;
  mainIngredients: string[];
  isBestSeller?: boolean;
  recommendedFor?: string[];
  recommendReason?: string;
  caution?: string;
};

type ProductCardProps = {
  product: ProductCardProduct;
  variant?: "default" | "recommendation";
};

export function ProductCard({
  product,
  variant = "default",
}: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const isRecommendation = variant === "recommendation";

  return (
    <Link href={`/market/${product.id}`} className="block h-full">
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer group h-full">
        <div className="relative aspect-square bg-[#F8F8F8] overflow-hidden">
          <div className="absolute top-2 left-2 px-2 py-1 bg-[#2ECC71] rounded-md z-10">
            <div className="text-white text-[10px] font-bold">매칭 {product.match}%</div>
          </div>

          {product.isBestSeller && (
            <div className="absolute top-2 right-2 px-2 py-1 bg-[#E74C3C] rounded-md z-10">
              <div className="text-white text-[10px] font-bold">BEST</div>
            </div>
          )}

          {isRecommendation && product.recommendedFor && product.recommendedFor.length > 0 && (
            <div className="absolute left-3 right-3 bottom-3 flex flex-wrap gap-1.5 z-10">
              {product.recommendedFor.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold text-[#004D40]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 group-hover:scale-105 transition-transform duration-300" />
        </div>

        <div className="p-4 relative bg-white">
          <div className="text-[11px] text-[#8E8E93] mb-1">{product.brand}</div>
          <h3 className="text-[14px] font-semibold text-[#1C1C1E] mb-2 leading-tight min-h-[40px]">
            {product.name}
          </h3>

          {isRecommendation ? (
            <>
              {product.recommendedFor && product.recommendedFor.length > 0 && (
                <div className="text-[11px] font-medium text-[#004D40] mb-2">
                  추천 대상: {product.recommendedFor.join(" · ")}
                </div>
              )}
              {product.recommendReason && (
                <p className="text-[12px] leading-5 text-[#48484A] mb-3 min-h-[60px]">
                  {product.recommendReason}
                </p>
              )}
              {product.caution && (
                <p className="text-[11px] leading-4 text-[#8E8E93] mb-3">
                  주의 포인트: {product.caution}
                </p>
              )}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="text-[#FFB800]">★</span>
                  <span className="text-[11px] font-medium text-[#1C1C1E]">
                    {product.rating}
                  </span>
                  <span className="text-[11px] text-[#8E8E93]">
                    ({product.reviewCount.toLocaleString()})
                  </span>
                </div>
                <span className="text-[12px] font-medium text-[#004D40]">
                  상세 분석 보기
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-wrap gap-1 mb-2">
                {product.mainIngredients.slice(0, 2).map((ingredient) => (
                  <span
                    key={ingredient}
                    className="text-[10px] px-2 py-0.5 bg-[#F2F2F7] text-[#6B6B6B] rounded"
                  >
                    {ingredient.length > 10 ? `${ingredient.slice(0, 10)}..` : ingredient}
                  </span>
                ))}
              </div>

              <div className="flex items-baseline gap-1 mb-2">
                {discount > 0 && (
                  <span className="text-[13px] font-bold text-[#E74C3C]">{discount}%</span>
                )}
                <span className="text-[15px] font-bold text-[#1C1C1E]">
                  {product.price.toLocaleString()}원
                </span>
              </div>

              <div className="flex items-center gap-1">
                <span className="text-[#FFB800]">★</span>
                <span className="text-[11px] font-medium text-[#1C1C1E]">{product.rating}</span>
                <span className="text-[11px] text-[#8E8E93]">
                  ({product.reviewCount.toLocaleString()})
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
