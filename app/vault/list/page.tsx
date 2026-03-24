import Link from 'next/link';

export default function CosmeticsList() {
  // 나중에 실제 자료로 바꿔 끼울 임시 목록입니다.
  const myCosmetics = [
    { id: 1, name: "수분 가득 앰플", brand: "자연연구소", date: "2026-03-01" },
    { id: 2, name: "진정 장벽 크림", brand: "맑은피부", date: "2026-03-10" },
  ];

  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        
        {/* 위쪽 머리글 구역 */}
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-bold text-gray-800">내 화장품 보관함</h1>
          <Link href="/vault" className="text-sm text-gray-500 hover:text-green-600 transition-colors">
            이전으로
          </Link>
        </header>

        {/* 화장품 목록 나열 구역 */}
        <div className="flex flex-col gap-4">
          {myCosmetics.map((item) => (
            <div 
              key={item.id} 
              className="border border-gray-200 rounded-xl p-5 flex justify-between items-center hover:border-green-500 hover:shadow-sm transition-all bg-white"
            >
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-green-600">{item.brand}</span>
                <span className="text-lg font-medium text-gray-800">{item.name}</span>
              </div>
              <div className="text-sm text-gray-400">
                {item.date} 등록
              </div>
            </div>
          ))}
        </div>

        {/* 등록된 화장품이 없을 때 보여줄 화면 */}
        {myCosmetics.length === 0 && (
          <div className="text-center py-20 text-gray-400 border border-dashed border-gray-300 rounded-xl mt-4">
            아직 등록된 화장품이 없습니다.
          </div>
        )}
      </div>
    </div>
  );
}