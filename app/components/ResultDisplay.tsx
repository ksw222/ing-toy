"use client";

export function ResultDisplay({ result, onReset }: { result: any, onReset: () => void }) {
    const statusColors: any = {
        safe: '#2ECC71',
        warning: '#F39C12',
        danger: '#E74C3C',
        unknown: '#8E8E93'
    };

    const statusIcons: any = {
        safe: '✓',
        warning: '!',
        danger: '×',
        unknown: '?'
    };

    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 animate-fade-in shadow-md">
            <div className="flex flex-col items-center mb-6">
                <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-3 transition-transform hover:scale-110"
                    style={{ backgroundColor: statusColors[result.status] }}
                >
                    <span className="text-white text-[28px] font-bold">
                        {statusIcons[result.status]}
                    </span>
                </div>
                <h3 className="text-[20px] font-bold text-[#1C1C1E] text-center">
                    {result.message}
                </h3>
            </div>

            <div className="bg-[#F2F2F7] rounded-xl p-4 mb-4">
                <div className="text-[11px] font-bold text-[#8E8E93] mb-2">상세 분석</div>
                <p className="text-[13px] text-[#1C1C1E] leading-relaxed">{result.detail}</p>
            </div>

            {result.recommendation && (
                <div className="bg-[#F2F2F7] rounded-xl p-4 mb-6">
                    <div className="text-[11px] font-bold text-[#8E8E93] mb-2">권장사항</div>
                    <p className="text-[13px] text-[#1C1C1E] leading-relaxed">{result.recommendation}</p>
                </div>
            )}

            <div className="border-t border-gray-200 pt-4 mb-4">
                <p className="text-[10px] text-[#8E8E93] text-center leading-relaxed">
                    Source: Journal of Cosmetic Science Vol. 45 (2025)<br/>
                    K-FDA Clinical Database
                </p>
            </div>

            <button 
                onClick={onReset}
                className="w-full py-3 bg-[#F2F2F7] hover:bg-[#E8E8E8] text-[#1C1C1E] rounded-lg text-[13px] font-bold transition-colors"
            >
                다시 분석하기
            </button>
        </div>
    );
}