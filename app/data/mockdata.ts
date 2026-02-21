export const sampleProducts = [
    {
        id: 1,
        name: "어드밴스드 스네일 96 뮤신 파워 에센스",
        brand: "COSRX",
        price: 21800,
        originalPrice: 28000,
        rating: 4.8,
        reviewCount: 12847,
        match: 98,
        mainIngredients: ["달팽이점액 96%", "판테놀"],
        category: "세럼",
        isBestSeller: true
    },
    {
        id: 2,
        name: "클렌징 오일",
        brand: "토리든",
        price: 16200,
        originalPrice: 18000,
        rating: 4.9,
        reviewCount: 8934,
        match: 95,
        mainIngredients: ["호호바오일", "스쿠알란"],
        category: "클렌징",
        isBestSeller: false
    },
    {
        id: 3,
        name: "비타민 C 23 세럼",
        brand: "Numbuzin",
        price: 18900,
        rating: 4.7,
        reviewCount: 5621,
        match: 92,
        mainIngredients: ["비타민C 23%"],
        category: "세럼",
        isBestSeller: true
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
        mainIngredients: ["레티놀 0.1%"],
        category: "세럼",
        isBestSeller: false
    },
    {
        id: 5,
        name: "센텔라 앰플",
        brand: "아누아",
        price: 15300,
        originalPrice: 18000,
        rating: 4.9,
        reviewCount: 15234,
        match: 96,
        mainIngredients: ["센텔라 100%"],
        category: "앰플",
        isBestSeller: true
    },
    {
        id: 6,
        name: "수분 크림",
        brand: "라운드랩",
        price: 19800,
        rating: 4.7,
        reviewCount: 7621,
        match: 93,
        mainIngredients: ["히알루론산"],
        category: "크림",
        isBestSeller: false
    }
];

export const ingredientData: Record<string, any> = {
    "비타민c+레티놀": {
        status: "danger",
        message: "pH 불균형으로 자극 유발 가능",
        detail: "비타민 C는 낮은 pH(3-4)에서, 레티놀은 중성 pH(5.5-6)에서 안정적입니다. 함께 사용 시 효능 저하와 피부 자극이 발생할 수 있습니다.",
        recommendation: "아침에 비타민 C, 저녁에 레티놀을 사용하거나 각각 다른 날에 사용하세요."
    },
    "나이아신아마이드+비타민c": {
        status: "warning",
        message: "고농도 사용 시 플러싱 가능",
        detail: "나이아신아마이드와 비타민 C를 고농도로 함께 사용하면 일시적인 홍조가 발생할 수 있습니다.",
        recommendation: "저농도부터 시작하거나 사용 간격을 두세요."
    },
    "레티놀+히알루론산": {
        status: "safe",
        message: "시너지 효과, 건조함 완화",
        detail: "레티놀의 건조 부작용을 히알루론산이 보완하여 수분 공급을 도와줍니다.",
        recommendation: "레티놀 사용 후 히알루론산을 덧발라주세요."
    }
};

export const historyItems = [
    { ing: '비타민C + 레티놀', date: '2025.01.07', time: '오후 3:24', status: 'danger' },
    { ing: '레티놀 + 히알루론산', date: '2025.01.05', time: '오전 10:15', status: 'safe' },
    { ing: '나이아신아마이드 + 비타민C', date: '2025.01.03', time: '저녁 9:42', status: 'warning' }
];