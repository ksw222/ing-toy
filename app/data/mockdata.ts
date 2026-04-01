export type ProductCategory = "세럼" | "앰플" | "토너" | "크림";

export type ProductIngredient = {
  name: string;
  grade: "green" | "yellow" | "red";
  effect: string;
};

export type ProductAlternative = {
  id?: number;
  name: string;
  similarity: number;
  reason: string;
};

export type ProductSummary = {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  match: number;
  mainIngredients: string[];
  category: ProductCategory;
  image: string;
  isBestSeller: boolean;
  recommendedFor: string[];
  recommendReason: string;
  recommendationPoints: string[];
  caution: string;
  cautionPoints: string[];
  oneLineSummary: string;
  purchaseLink: string;
  brandAlias?: string;
};

export type ProductDetail = {
  id: number;
  name: string;
  brand: string;
  category: ProductCategory;
  price: number;
  image: string;
  matchScore: number;
  skinScores: {
    dry: number;
    oily: number;
    sensitive: number;
  };
  ingredients: ProductIngredient[];
  caution: string[];
  cautionPoints: string[];
  description: string;
  oneLineSummary: string;
  recommendationPoints: string[];
  alternative: ProductAlternative;
  purchaseLink: string;
};

type IngredientComboInsight = {
  status: "safe" | "warning" | "danger";
  message: string;
  detail: string;
  recommendation: string;
};

type IngredientGroup = {
  label: string;
  ingredients: string[];
};

type OwnedProductLog = {
  id: number;
  feedback: string;
  rating: number;
  addedDate: string;
};

export const sampleProducts: ProductSummary[] = [
  {
    id: 1,
    name: "어드밴스드 스네일 96 뮤신 파워 에센스",
    brand: "COSRX",
    price: 21800,
    originalPrice: 28000,
    rating: 4.8,
    reviewCount: 12847,
    match: 98,
    mainIngredients: ["스네일 뮤신 96%", "판테놀"],
    category: "세럼",
    image: "/products/cosrx-snail-essence.png",
    isBestSeller: true,
    recommendedFor: ["민감성", "진정", "보습"],
    recommendReason: "자극으로 지친 피부 장벽을 달래면서 수분감을 채우는 데 강점이 있어요.",
    recommendationPoints: [
      "세안 후 당김이 빠르게 올라오는 피부에 수분 쿠션 역할을 해줘요.",
      "판테놀과 진정 성분이 함께 들어 있어 자극 후 회복 루틴에 잘 맞아요.",
      "활성 성분 위주의 루틴 사이에서 완충 역할로 넣기 좋아요.",
    ],
    caution: "점도가 있어 여러 겹 레이어링하면 답답하게 느껴질 수 있어요.",
    cautionPoints: [
      "오일리한 피부는 소량만 얇게 시작하는 편이 좋아요.",
      "끈적임에 민감하면 토너 직후보다 에센스 단계 단독 사용이 더 편안할 수 있어요.",
    ],
    oneLineSummary: "민감하고 수분이 쉽게 무너지는 피부를 부드럽게 진정시키는 장벽 보완 에센스.",
    purchaseLink: "https://www.coupang.com/",
    brandAlias: "COSRX",
  },
  {
    id: 2,
    name: "다이브인 세럼",
    brand: "토리든",
    price: 16200,
    originalPrice: 18000,
    rating: 4.9,
    reviewCount: 8934,
    match: 95,
    mainIngredients: ["저분자 히알루론산", "디판테놀"],
    category: "세럼",
    image: "/products/torriden-divein-serum.png",
    isBestSeller: false,
    recommendedFor: ["수부지", "보습", "민감성"],
    recommendReason: "가볍게 스며들면서도 속당김을 채워 수분 부족형 피부에 잘 맞아요.",
    recommendationPoints: [
      "무겁지 않은 수분층을 만들어 메이크업 전에 써도 부담이 적어요.",
      "수분 부족으로 유분이 올라오는 피부에 밸런스를 맞춰주기 좋아요.",
      "자극이 심하지 않은 보습 세럼을 찾는 입문자에게 무난해요.",
    ],
    caution: "건성 피부는 단독 사용보다 크림과 함께 써야 만족도가 높을 수 있어요.",
    cautionPoints: [
      "극건성이라면 한 번만 바르면 보습이 빨리 사라질 수 있어요.",
      "수분감 위주의 제형이라 겨울철엔 마무리 크림이 필요해요.",
    ],
    oneLineSummary: "가벼운 수분 보충이 필요한 수부지 피부에 잘 맞는 데일리 세럼.",
    purchaseLink: "https://www.coupang.com/",
    brandAlias: "토리든",
  },
  {
    id: 3,
    name: "비타민 C 23 세럼",
    brand: "Numbuzin",
    price: 18900,
    rating: 4.7,
    reviewCount: 5621,
    match: 92,
    mainIngredients: ["비타민 C 23%", "토코페롤"],
    category: "세럼",
    image: "/products/numbuzin-vitamin-c-serum.png",
    isBestSeller: true,
    recommendedFor: ["트러블", "칙칙함", "탄력"],
    recommendReason: "색소 고민과 피부 톤 정리를 동시에 보고 싶은 사용자에게 방향성이 분명해요.",
    recommendationPoints: [
      "자국과 칙칙함이 함께 고민일 때 집중 케어용으로 활용하기 좋아요.",
      "항산화 루틴을 강화하고 싶은 사용자에게 적합해요.",
      "밤 루틴에서 포인트 케어 제품으로 쓰기 좋아요.",
    ],
    caution: "고함량 비타민 C는 민감한 날에 따가움을 줄 수 있어요.",
    cautionPoints: [
      "산 성분이나 레티놀과 같은 날 겹치면 자극 가능성이 커져요.",
      "처음엔 주 2~3회로 적응하는 편이 안전해요.",
    ],
    oneLineSummary: "칙칙함과 자국 고민을 빠르게 케어하고 싶은 피부를 위한 집중 세럼.",
    purchaseLink: "https://www.coupang.com/",
    brandAlias: "닥터지",
  },
  {
    id: 4,
    name: "레티놀 세럼",
    brand: "SOME BY MI",
    price: 23400,
    originalPrice: 26000,
    rating: 4.6,
    reviewCount: 9234,
    match: 89,
    mainIngredients: ["레티놀 0.1%", "바쿠치올"],
    category: "세럼",
    image: "/products/somebymi-retinol-serum.png",
    isBestSeller: false,
    recommendedFor: ["트러블", "탄력", "수부지"],
    recommendReason: "피부결과 트러블 흔적, 초기 탄력 고민을 함께 잡고 싶을 때 적합해요.",
    recommendationPoints: [
      "결 정돈과 모공 주변 거칠음 개선을 동시에 노리기 좋아요.",
      "레티놀 입문 단계에서 비교적 접근하기 쉬운 편이에요.",
      "밤 루틴의 메인 기능성 제품으로 역할이 분명해요.",
    ],
    caution: "민감 피부는 초기 자극과 건조감을 느낄 수 있어요.",
    cautionPoints: [
      "사용 초기에는 격일 또는 주 2회로 시작하는 편이 좋아요.",
      "낮에는 자외선 차단을 꼭 병행해야 해요.",
    ],
    oneLineSummary: "트러블 흔적과 결 개선을 함께 보고 싶은 피부를 위한 입문형 레티놀 세럼.",
    purchaseLink: "https://www.coupang.com/",
    brandAlias: "라로슈포제",
  },
  {
    id: 5,
    name: "하트리프 수딩 토너",
    brand: "아누아",
    price: 15300,
    originalPrice: 18000,
    rating: 4.9,
    reviewCount: 15234,
    match: 96,
    mainIngredients: ["어성초 77%", "병풀추출물"],
    category: "토너",
    image: "/products/anua-heartleaf-toner.png",
    isBestSeller: true,
    recommendedFor: ["민감성", "진정", "트러블"],
    recommendReason: "열감과 붉은기, 예민함이 반복되는 피부를 진정시키는 데 안정적이에요.",
    recommendationPoints: [
      "세안 직후 열감이 오래 가는 피부를 차분하게 진정시키기 좋아요.",
      "트러블 피부가 기능성 제품 전에 진정 베이스를 만들기에 적합해요.",
      "가벼운 수분감이라 여러 루틴에 끼워 넣기 쉬워요.",
    ],
    caution: "건조한 피부는 토너만으로는 보습감이 부족할 수 있어요.",
    cautionPoints: [
      "당김이 심하다면 에센스나 크림을 이어서 써야 밸런스가 맞아요.",
      "화장솜 사용 시 마찰에 민감한 피부는 손 흡수 방식이 더 편안할 수 있어요.",
    ],
    oneLineSummary: "예민하고 붉은 피부를 차분히 정리해주는 진정 중심 토너.",
    purchaseLink: "https://www.coupang.com/",
    brandAlias: "닥터지",
  },
  {
    id: 6,
    name: "세라마이드 수분 크림",
    brand: "라운드랩",
    price: 19800,
    rating: 4.7,
    reviewCount: 7621,
    match: 93,
    mainIngredients: ["세라마이드", "히알루론산"],
    category: "크림",
    image: "/products/roundlab-ceramide-cream.png",
    isBestSeller: false,
    recommendedFor: ["건성", "보습", "민감성"],
    recommendReason: "속건조와 장벽 약화가 함께 오는 피부를 안정적으로 잡아주기 좋아요.",
    recommendationPoints: [
      "크림 단계에서 보습막을 확실히 남겨주고 싶은 피부에 적합해요.",
      "활성 성분 사용 후 마무리 장벽 케어로 쓰기 좋아요.",
      "건조한 계절에 루틴 전체의 유지력을 높여줘요.",
    ],
    caution: "유분감에 민감한 피부는 더운 계절에 무겁게 느껴질 수 있어요.",
    cautionPoints: [
      "지성 피부는 밤 루틴이나 건조한 날 위주로 쓰는 편이 좋아요.",
      "아침 루틴에서는 양을 줄이면 밀림을 줄일 수 있어요.",
    ],
    oneLineSummary: "수분 손실이 큰 피부를 든든하게 감싸는 장벽 보습 크림.",
    purchaseLink: "https://www.coupang.com/",
    brandAlias: "토리든",
  },
];

export const detailedProducts: ProductDetail[] = [
  {
    id: 1,
    name: "어드밴스드 스네일 96 뮤신 파워 에센스",
    brand: "COSRX",
    category: "세럼",
    price: 21800,
    image: "/products/cosrx-snail-essence.png",
    matchScore: 98,
    skinScores: { dry: 92, oily: 78, sensitive: 95 },
    ingredients: [
      { name: "스네일 뮤신 96%", grade: "green", effect: "손상된 피부를 편안하게 감싸고 촉촉한 막을 만들어줘요." },
      { name: "판테놀", grade: "green", effect: "자극 받은 피부 장벽 회복을 도와 진정감을 높여줘요." },
      { name: "알란토인", grade: "green", effect: "붉은기와 예민함을 달래는 데 도움을 줘요." },
    ],
    caution: ["점성이 있어 지성 피부는 양 조절이 필요해요."],
    cautionPoints: [
      "아침에 많이 바르면 메이크업이 밀릴 수 있어요.",
      "답답함에 민감하면 한 펌프 이하로 시작해보세요.",
    ],
    description: "장벽이 약해져 자주 예민해지는 피부를 안정적으로 진정시키는 보습 에센스예요.",
    oneLineSummary: "민감한 피부를 편안하게 감싸며 수분과 진정을 동시에 챙기는 장벽 보완 에센스.",
    recommendationPoints: [
      "자극 후 회복이 느린 피부에 진정 베이스로 잘 맞아요.",
      "기능성 제품 사이에서 피부를 편안하게 잡아주는 완충 역할을 해줘요.",
      "민감성 루틴에 과하게 자극적이지 않은 보습 축을 만들기 좋아요.",
    ],
    alternative: {
      id: 2,
      name: "토리든 다이브인 세럼",
      similarity: 92,
      reason: "좀 더 가볍고 산뜻한 수분 레이어를 원하면 이쪽이 더 편할 수 있어요.",
    },
    purchaseLink: "https://www.coupang.com/",
  },
  {
    id: 2,
    name: "다이브인 세럼",
    brand: "토리든",
    category: "세럼",
    price: 16200,
    image: "/products/torriden-divein-serum.png",
    matchScore: 95,
    skinScores: { dry: 88, oily: 90, sensitive: 84 },
    ingredients: [
      { name: "저분자 히알루론산", grade: "green", effect: "가볍게 수분을 채워 속당김을 줄여줘요." },
      { name: "디판테놀", grade: "green", effect: "수분 손실을 완화하고 피부를 편안하게 정리해줘요." },
      { name: "알란토인", grade: "green", effect: "민감해진 피부를 진정시키는 데 도움을 줘요." },
    ],
    caution: ["극건성 피부는 단독 사용 시 보습이 부족할 수 있어요."],
    cautionPoints: [
      "겨울철에는 크림과 함께 써야 지속력이 좋아요.",
      "수분감 위주라 즉각적인 유분 보호막은 약한 편이에요.",
    ],
    description: "가볍지만 충분한 수분감으로 수부지 피부의 밸런스를 잡아주는 세럼이에요.",
    oneLineSummary: "속당김은 잡고 겉은 무겁지 않게 정리하고 싶은 수부지 피부용 수분 세럼.",
    recommendationPoints: [
      "산뜻한 사용감을 선호하는 사용자에게 진입 장벽이 낮아요.",
      "오전 루틴에서도 부담이 적어 데일리 사용성이 좋아요.",
      "건조해서 유분이 올라오는 피부에 밸런스를 맞추기 좋아요.",
    ],
    alternative: {
      id: 1,
      name: "COSRX 스네일 96 에센스",
      similarity: 90,
      reason: "더 진득한 보호감과 진정감을 원하면 이 제품이 더 맞을 수 있어요.",
    },
    purchaseLink: "https://www.coupang.com/",
  },
  {
    id: 3,
    name: "비타민 C 23 세럼",
    brand: "Numbuzin",
    category: "세럼",
    price: 18900,
    image: "/products/numbuzin-vitamin-c-serum.png",
    matchScore: 92,
    skinScores: { dry: 72, oily: 82, sensitive: 55 },
    ingredients: [
      { name: "비타민 C 23%", grade: "yellow", effect: "칙칙함과 자국 케어에 강하게 작동하는 고함량 항산화 성분이에요." },
      { name: "토코페롤", grade: "green", effect: "산화 스트레스 관리와 보조 항산화 역할을 해줘요." },
      { name: "알로에 추출물", grade: "green", effect: "자극감을 조금 더 부드럽게 완충해줘요." },
    ],
    caution: ["민감한 날엔 따갑거나 붉어질 수 있어요."],
    cautionPoints: [
      "AHA, BHA, 레티놀과 같은 날 겹치면 자극 가능성이 커져요.",
      "초반에는 주 2~3회부터 적응하는 편이 좋아요.",
    ],
    description: "자국과 칙칙함 케어에 집중하고 싶을 때 방향성이 분명한 비타민 세럼이에요.",
    oneLineSummary: "색소 고민과 피부 톤 케어에 집중하고 싶은 사용자를 위한 고함량 비타민 세럼.",
    recommendationPoints: [
      "트러블 후 남는 자국이 고민일 때 효과 방향이 선명해요.",
      "피부 톤을 균일하게 정리하고 싶은 루틴에 잘 맞아요.",
      "밤 루틴의 집중 관리 제품으로 역할이 분명해요.",
    ],
    alternative: {
      id: 5,
      name: "아누아 하트리프 수딩 토너",
      similarity: 79,
      reason: "지금 자극이 걱정된다면 먼저 진정 위주 제품으로 루틴을 안정화하는 편이 나아요.",
    },
    purchaseLink: "https://www.coupang.com/",
  },
  {
    id: 4,
    name: "레티놀 세럼",
    brand: "SOME BY MI",
    category: "세럼",
    price: 23400,
    image: "/products/somebymi-retinol-serum.png",
    matchScore: 89,
    skinScores: { dry: 70, oily: 84, sensitive: 48 },
    ingredients: [
      { name: "레티놀 0.1%", grade: "yellow", effect: "피부결과 탄력 고민에 직접적으로 작동하는 핵심 성분이에요." },
      { name: "바쿠치올", grade: "green", effect: "레티놀의 방향성을 보조하면서 비교적 부드럽게 작용해요." },
      { name: "세라마이드", grade: "green", effect: "건조감을 완충하고 장벽 보완을 도와줘요." },
    ],
    caution: ["민감 피부는 초기에 건조감과 따가움을 느낄 수 있어요."],
    cautionPoints: [
      "낮 사용은 피하고 자외선 차단을 꼭 병행해야 해요.",
      "각질 제거제와 같은 날 겹치면 자극 가능성이 커져요.",
    ],
    description: "결 개선과 탄력, 흔적 케어를 한 번에 노리고 싶을 때 선택지가 되는 레티놀 세럼이에요.",
    oneLineSummary: "거칠어진 피부결과 트러블 흔적을 정리하고 싶은 사용자를 위한 입문형 레티놀 세럼.",
    recommendationPoints: [
      "모공 주변이 거칠고 결이 무너진 피부에 방향성이 분명해요.",
      "초기 탄력 고민과 트러블 흔적을 함께 다루기 좋아요.",
      "밤 루틴의 메인 기능성 제품으로 사용하기 좋아요.",
    ],
    alternative: {
      id: 6,
      name: "라운드랩 세라마이드 수분 크림",
      similarity: 85,
      reason: "현재 피부가 예민하다면 먼저 장벽 케어 크림으로 루틴을 안정시키는 편이 더 맞을 수 있어요.",
    },
    purchaseLink: "https://www.coupang.com/",
  },
  {
    id: 5,
    name: "하트리프 수딩 토너",
    brand: "아누아",
    category: "토너",
    price: 15300,
    image: "/products/anua-heartleaf-toner.png",
    matchScore: 96,
    skinScores: { dry: 78, oily: 88, sensitive: 97 },
    ingredients: [
      { name: "어성초 77%", grade: "green", effect: "열감과 붉은기를 차분하게 눌러주는 진정 중심 성분이에요." },
      { name: "병풀추출물", grade: "green", effect: "자극 받은 피부를 안정적으로 진정시키는 데 도움을 줘요." },
      { name: "판테놀", grade: "green", effect: "수분 손실을 줄이고 장벽 보완을 도와줘요." },
    ],
    caution: [],
    cautionPoints: [
      "강한 주의 포인트는 적지만 건성 피부는 토너만으로 마무리하기엔 부족할 수 있어요.",
    ],
    description: "자주 붉어지고 예민해지는 피부를 빠르게 차분하게 만들어주는 진정 토너예요.",
    oneLineSummary: "트러블 전후의 예민한 피부를 차분하게 정리해주는 진정 중심 토너.",
    recommendationPoints: [
      "세안 직후 열감이 오래 남는 피부에 진정 첫 단계로 적합해요.",
      "기능성 루틴 전 자극을 낮추는 완충 토너로 쓰기 좋아요.",
      "가벼워서 다른 제품과 충돌 없이 쓰기 편해요.",
    ],
    alternative: {
      id: 1,
      name: "COSRX 스네일 96 에센스",
      similarity: 88,
      reason: "조금 더 보습감 있는 진정 제품을 원하면 이쪽이 더 만족스러울 수 있어요.",
    },
    purchaseLink: "https://www.coupang.com/",
  },
  {
    id: 6,
    name: "세라마이드 수분 크림",
    brand: "라운드랩",
    category: "크림",
    price: 19800,
    image: "/products/roundlab-ceramide-cream.png",
    matchScore: 93,
    skinScores: { dry: 95, oily: 66, sensitive: 88 },
    ingredients: [
      { name: "세라마이드", grade: "green", effect: "장벽을 받쳐주며 수분 손실을 줄이는 데 핵심 역할을 해요." },
      { name: "히알루론산", grade: "green", effect: "속수분을 채워 당김을 완화해줘요." },
      { name: "판테놀", grade: "green", effect: "건조로 예민해진 피부를 부드럽게 진정시켜줘요." },
    ],
    caution: ["지성 피부는 계절에 따라 무겁게 느낄 수 있어요."],
    cautionPoints: [
      "여름철 아침에는 양을 줄이는 편이 더 편안해요.",
      "유분감에 민감하면 토너와 세럼을 가볍게 끝내고 밤에 집중 사용해보세요.",
    ],
    description: "장벽이 쉽게 무너지고 속당김이 심한 피부를 단단하게 받쳐주는 보습 크림이에요.",
    oneLineSummary: "건조함과 장벽 약화가 함께 올 때 루틴의 마무리 안정감을 높여주는 크림.",
    recommendationPoints: [
      "활성 성분 사용 후 피부를 편안하게 감싸는 마무리 단계로 좋아요.",
      "건성 피부가 밤 사이 수분 손실을 줄이는 데 유리해요.",
      "계절성 민감 피부의 베이스 보습으로 안정감이 있어요.",
    ],
    alternative: {
      id: 2,
      name: "토리든 다이브인 세럼",
      similarity: 84,
      reason: "같은 보습 축이지만 더 가볍고 산뜻한 마무리를 원하면 이쪽이 더 맞아요.",
    },
    purchaseLink: "https://www.coupang.com/",
  },
];

export const ingredientData: Record<string, IngredientComboInsight> = {
  "비타민c+레티놀": {
    status: "danger",
    message: "같은 루틴에 겹치면 자극이 커질 수 있어요.",
    detail: "비타민 C와 레티놀은 모두 반응성이 높은 편이라 같은 날 한꺼번에 쓰면 붉어짐이나 따가움이 생길 수 있어요.",
    recommendation: "비타민 C는 아침, 레티놀은 밤처럼 시간대를 나누는 편이 안전해요.",
  },
  "나이아신아마이드+비타민c": {
    status: "warning",
    message: "함께 써도 되지만 처음엔 천천히 적응하는 편이 좋아요.",
    detail: "두 성분을 같이 쓰는 것이 꼭 문제는 아니지만 민감 피부는 초반에 자극을 느낄 수 있어요.",
    recommendation: "처음엔 번갈아 쓰거나 낮은 함량으로 시작해보세요.",
  },
  "레티놀+히알루론산": {
    status: "safe",
    message: "건조감을 완충하는 데 도움이 되는 조합이에요.",
    detail: "레티놀 사용 시 느껴질 수 있는 건조함을 히알루론산 계열 보습 성분이 보완해줘요.",
    recommendation: "레티놀 뒤에 보습 레이어를 얹어 피부 부담을 낮춰보세요.",
  },
};

export const historyItems = [
  { ing: "비타민 C + 레티놀", date: "2025.01.07", time: "오후 3:24", status: "danger" },
  { ing: "레티놀 + 히알루론산", date: "2025.01.05", time: "오전 10:15", status: "safe" },
  { ing: "나이아신아마이드 + 비타민 C", date: "2025.01.03", time: "오전 9:42", status: "warning" },
];

export const ingredientGroups: Record<string, IngredientGroup> = {
  moisture: {
    label: "수분/보습",
    ingredients: ["히알루론산", "글리세린", "세라마이드", "디판테놀", "알란토인"],
  },
  soothing: {
    label: "진정/회복",
    ingredients: ["판테놀", "병풀추출물", "알란토인", "스네일 뮤신 96%", "어성초 77%"],
  },
  brightening: {
    label: "브라이트닝",
    ingredients: ["나이아신아마이드", "비타민 C", "비타민 C 23%"],
  },
  antiaging: {
    label: "탄력/결 개선",
    ingredients: ["레티놀", "바쿠치올", "펩타이드", "세라마이드", "레티놀 0.1%"],
  },
};

export const mockUser: {
  name: string;
  age: number;
  major: string;
  skinType: string;
  preferences: string[];
  mbti: string;
  ownedProducts: OwnedProductLog[];
} = {
  name: "김잉그",
  age: 24,
  major: "통계학과",
  skinType: "지복합성",
  preferences: ["진정", "보습", "유수분 조절"],
  mbti: "HSPC (High-Soothing, Pro-Centella)",
  ownedProducts: [
    {
      id: 1,
      feedback: "자극 없이 수분감이 오래가서 장벽이 편안해지는 느낌이 있어요.",
      rating: 5,
      addedDate: "2026-02-15",
    },
    {
      id: 4,
      feedback: "처음에는 약간 건조했지만 피부결 정리에 도움이 됐어요.",
      rating: 4,
      addedDate: "2026-03-01",
    },
    {
      id: 5,
      feedback: "붉은기가 올라올 때 진정되는 느낌이 가장 만족스러웠어요.",
      rating: 5,
      addedDate: "2026-03-02",
    },
  ],
};