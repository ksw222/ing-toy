"use client";

export function ProductCard({ product }: { product: any }) {
    const discount = product.originalPrice 
        ? Math.round((1 - product.price / product.originalPrice) * 100)
        : 0;

    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer group">
            <div className="relative aspect-square bg-[#F8F8F8] group-hover:scale-105 transition-transform duration-300">
                <div className="absolute top-2 left-2 px-2 py-1 bg-[#2ECC71] rounded-md z-10">
                    <div className="text-white text-[10px] font-bold">매칭 {product.match}%</div>
                </div>
                {product.isBestSeller && (
                    <div className="absolute top-2 right-2 px-2 py-1 bg-[#E74C3C] rounded-md z-10">
                        <div className="text-white text-[10px] font-bold">BEST</div>
                    </div>
                )}
            </div>
            <div className="p-3 relative bg-white">
                <div className="text-[11px] text-[#8E8E93] mb-1">{product.brand}</div>
                <h3 className="text-[13px] font-semibold text-[#1C1C1E] mb-2 text-clamp-2 leading-tight h-[32px]">
                    {product.name}
                </h3>
                <div className="flex flex-wrap gap-1 mb-2">
                    {product.mainIngredients.slice(0, 2).map((ing: string, i: number) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 bg-[#F2F2F7] text-[#6B6B6B] rounded">
                            {ing.length > 10 ? ing.slice(0, 10) + '..' : ing}
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
                    <span className="text-[11px] text-[#8E8E93]">({product.reviewCount.toLocaleString()})</span>
                </div>
            </div>
        </div>
    );
}