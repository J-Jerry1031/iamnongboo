const tossLinkPayUrl = "https://s.tosspayments.com/BgWHSiWAcP9";

const products = [
  {
    category: "🧺 과일 바구니",
    name: "과일 바구니 S",
    price: "80,000원",
    count: "7~9개",
    fruits: "파인애플, 골드망고, 사과, 샤인머스켓, 레몬, 골드키위 등",
    image: "/gift-basket-s.jpg",
  },
  {
    category: "🧺 과일 바구니",
    name: "과일 바구니 M",
    price: "120,000원",
    count: "11~13개",
    fruits:
      "파인애플, 애플망고, 용과, 오렌지, 골드망고, 샤인머스켓, 사과, 레몬, 골드키위, 감 등",
    image: "/gift-basket-m.jpg",
  },
  {
    category: "🧺 과일 바구니",
    name: "과일 바구니 L",
    price: "150,000원",
    count: "14~16개",
    fruits:
      "파인애플, 애플망고, 용과, 오렌지, 골드망고, 샤인머스켓, 사과, 참외, 체리, 적포도, 레몬, 골드키위, 감 등",
    image: "/gift-basket-l.jpg",
  },
  {
    category: "🛍️ 핸들박스",
    name: "핸들박스 S / M",
    price: "60,000원 ~ 80,000원",
    count: "6~8개",
    fruits:
      "골드망고, 애플망고, 용과, 사과, 샤인머스켓, 오렌지, 참외, 체리, 블루베리 등",
    image: "/handle-box.jpg",
  },
  {
    category: "📦 프룻박스",
    name: "프룻박스 M / L",
    price: "85,000원 ~ 100,000원",
    count: "8~11개",
    fruits:
      "골드망고, 애플망고, 용과, 사과, 참외, 오렌지, 레몬, 골드키위, 체리, 블루베리, 딸기 등",
    image: "/fruit-box.jpg",
  },
  {
    category: "🎂 원형박스 · 과일케이크",
    name: "원형박스 / 과일케이크",
    price: "70,000원 ~ 90,000원",
    count: "7~10개",
    fruits:
      "샤인머스켓, 복숭아, 골드망고, 사과, 오렌지, 참외, 골드키위, 레몬 등",
    image: "/round-cake.jpg",
  },
  {
    category: "👜 백 라인",
    name: "프룻백 / 구디백",
    price: "40,000원",
    count: "3~4개",
    fruits: "망고, 사과, 포도, 키위, 레몬 등 소과일 구성",
    image: "/fruit-bag.jpg",
  },
  {
    category: "🍓 컵과일",
    name: "컵과일 / 과일도시락",
    price: "4,000원 ~ 10,000원",
    count: "S / M / L / 도시락",
    fruits: "컵과일 S 4,000원 · M 6,000원 · L 8,000원 · 과일도시락 10,000원",
    image: "/cup-fruit.jpg",
  },
];

export default function FruitBasketPage() {
  return (
    <main className="min-h-screen bg-[#F8F3E8] text-[#2B2A28]">
      <section className="mx-auto max-w-7xl px-5 py-10 sm:py-16">
        <section className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-black/5">
          <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-black tracking-[0.28em] text-[#4F7D3A]">
                I AM FARMER GIFT
              </p>

              <h1 className="mt-4 whitespace-pre-line text-4xl font-black leading-tight tracking-tight sm:text-6xl">
                마음을 담아 전하는{"\n"}프리미엄 과일 선물
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#6D675E] sm:text-lg">
                아이엠농부가 신선한 제철 과일을 고르고, 선물의 순간이 더
                예뻐지도록 정성스럽게 담았습니다. 감사 선물, 집들이, 명절,
                거래처 선물까지 품격 있게 준비해보세요.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-[#EEF6E8] px-4 py-2 text-sm font-bold text-[#3F6D2A]">
                  예약 주문 추천
                </span>
                <span className="rounded-full bg-[#FFF1D8] px-4 py-2 text-sm font-bold text-[#8A5B18]">
                  당일 구성 변동 가능
                </span>
                <span className="rounded-full bg-[#F1EFE8] px-4 py-2 text-sm font-bold text-[#6D675E]">
                  선물 포장
                </span>
              </div>

              <a
                href={tossLinkPayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex rounded-full bg-[#2F5D32] px-8 py-4 text-base font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#244A28]"
              >
                토스페이먼츠 링크페이로 결제하기
              </a>

              <p className="mt-3 text-sm text-[#8A8478]">
                * 현재 버튼은 링크페이 데모로 연결됩니다.
              </p>
            </div>

            <div className="overflow-hidden rounded-[1.7rem] bg-[#EAF1DE]">
              <img
                src="/gift-basket-m.jpg"
                alt="아이엠농부 과일 선물세트"
                className="h-[520px] w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-black tracking-[0.2em] text-[#4F7D3A]">
                GIFT LINEUP
              </p>
              <h2 className="mt-2 text-3xl font-black">상품 라인업</h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.name}
                className="overflow-hidden rounded-[1.5rem] bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover"
                />

                <div className="p-5">
                  <p className="text-sm font-bold text-[#4F7D3A]">
                    {product.category}
                  </p>

                  <h3 className="mt-2 text-xl font-black">{product.name}</h3>

                  <p className="mt-3 text-2xl font-black text-[#2F5D32]">
                    {product.price}
                  </p>

                  <p className="mt-3 text-sm font-bold text-[#6D675E]">
                    구성 수량: {product.count}
                  </p>

                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#7A746A]">
                    {product.fruits}
                  </p>

                  <a
                    href={tossLinkPayUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex w-full justify-center rounded-full bg-[#2F5D32] px-5 py-3 text-sm font-black text-white transition hover:bg-[#244A28]"
                  >
                    결제하기
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[1.5rem] bg-[#2F5D32] p-6 text-white sm:p-8">
          <h2 className="text-2xl font-black">주문 안내</h2>

          <p className="mt-3 leading-7 text-white/85">
            과일 구성은 당일 입고 상태와 계절에 따라 일부 변경될 수 있습니다.
            결제 후 매장에서 주문 확인 연락을 드리며, 픽업 희망 시간과 포장
            요청사항을 확인합니다.
          </p>

          <p className="mt-5 text-sm text-white/70">
            아이엠농부 · 경기도 화성시 동탄솔빛로 65-1, 102호 ·
            010-2054-1688
          </p>
        </section>
      </section>
    </main>
  );
}