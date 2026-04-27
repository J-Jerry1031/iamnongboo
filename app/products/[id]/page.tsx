import Link from "next/link";
import { products } from "@/data/products";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <main className="min-h-screen bg-[#FCFCF8] px-6 py-16 text-[#2F2F2F]">
        <div className="mx-auto max-w-3xl rounded-[32px] border border-[#E8E1D6] bg-white p-10 text-center shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#6A9F4F]">
            Not Found
          </p>
          <h1 className="mt-3 text-3xl font-black">상품을 찾을 수 없습니다</h1>
          <p className="mt-4 text-[#6F685F]">
            요청한 상품 정보가 없거나 현재 판매 중이 아닙니다.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-[#7FBF5F] px-6 py-3 text-sm font-bold text-white"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FCFCF8] text-[#2F2F2F]">
      <section className="border-b border-[#E8E1D6] bg-gradient-to-b from-[#F7F1E5] to-[#FCFCF8]">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 text-sm text-[#7C766D]">
            <Link href="/" className="hover:text-[#5A983E]">
              홈
            </Link>
            <span>/</span>
            <span>상품상세</span>
            <span>/</span>
            <span className="font-semibold text-[#4E4A44]">{product.name}</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <div className="overflow-hidden rounded-[36px] border border-[#E8E1D6] bg-white shadow-[0_18px_50px_rgba(75,60,30,0.08)]">
              <img
                src={product.image}
                alt={product.name}
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-[24px] border border-[#E8E1D6] bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#6A9F4F]">
                  배송
                </p>
                <p className="mt-2 text-base font-black">오늘 픽업 가능</p>
                <p className="whitespace-pre-line mt-2 text-sm leading-6 text-[#6F685F]">
                  가까운 매장에서 
                  {"\n"}빠르게 수령 가능
                </p>
              </div>

              <div className="rounded-[24px] border border-[#E8E1D6] bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#6A9F4F]">
                  서비스
                </p>
                <p className="mt-2 text-base font-black">당일 배송 가능</p>
                <p className="whitespace-pre-line mt-2 text-sm leading-6 text-[#6F685F]">
                  오전 주문 시 당일 
                {"\n"} 도착 지역 운영
                </p>
              </div>

              <div className="rounded-[24px] border border-[#E8E1D6] bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#6A9F4F]">
                  셀렉션
                </p>
                <p className="mt-2 text-base font-black">엄선 상품</p>
                <p className="mt-2 text-sm leading-6 text-[#6F685F]">
                  아이엠농부 기준으로 직접 선별한 상품
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-[36px] border border-[#E8E1D6] bg-white p-8 shadow-[0_18px_50px_rgba(75,60,30,0.08)] sm:p-10">
              <p className="text-m font-bold uppercase tracking-[0.18em] text-[#6A9F4F]">
                Real Farmer, Real Freshness
              </p>

              <h1 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                {product.name}
              </h1>

              <p className="whitespace-pre-line from-neutral-600 mt-4 text-base leading-7 sm:text-xl text-[#7e6e59]">
                어디서나 쉽게 만나는 평범한 상품이 아니라, 
                {"\n"} 식탁 위 만족도를 높여줄 프리미엄 셀렉션만 제안합니다.
              </p>

              <div className="mt-8 rounded-[28px] bg-[#F7F1E5] p-6">
                <p className="text-2xl font-semibold text-[#7C766D]">판매가</p>
                <p className="mt-2 text-4xl font-black text-[#2D2D2A]">
                  {product.price.toLocaleString()}원
                </p>
                <p className="mt-3 text-sm text-[#6F685F]">
                  신선식품 특성상 수급에 따라 가격이 일부 변동될 수 있습니다.
                </p>
              </div>

              <div className="mt-8 space-y-4 border-t border-[#EFE8DC] pt-8">
                <div className="flex items-start justify-between gap-6">
                  <span className="min-w-24 text-sm font-bold text-[#4C4842]">
                    배송안내
                  </span>
                  <p className="text-sm leading-7 text-[#6F685F]">
                    오늘 픽업, 당일 배송, 새벽 배송 가능 지역 순차 확대 중
                  </p>
                </div>

                <div className="flex items-start justify-between gap-6">
                  <span className="min-w-24 text-sm font-bold text-[#4C4842]">
                    상품설명
                  </span>
                  <p className="text-sm leading-7 text-[#6F685F]">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-start justify-between gap-6">
                  <span className="min-w-24 text-sm font-bold text-[#4C4842]">
                    브랜드
                  </span>
                  <p className="text-sm leading-7 text-[#6F685F]">
                    아이엠농부 프리미엄 셀렉션
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <button className="flex-1 rounded-full border border-[#DDD3C5] bg-white px-6 py-4 text-sm font-black text-[#4C4842] transition hover:bg-[#FAF7F0]">
                  관심상품
                </button>
                <button className="flex-1 rounded-full bg-[#2F2F2C] px-6 py-4 text-sm font-black text-white transition hover:bg-black">
                  장바구니 담기
                </button>
                <button className="flex-1 rounded-full bg-[#7FBF5F] px-6 py-4 text-sm font-black text-white shadow-[0_12px_24px_rgba(127,191,95,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(127,191,95,0.34)]">
                  바로 구매
                </button>
              </div>
            </div>

            <div className="mt-6 rounded-[30px] border border-[#E8E1D6] bg-[#EEF6E7] p-7">
              <p className="text-m font-bold uppercase tracking-[0.16em] text-[#6A9F4F]">
                I AM FARMER GUIDE
              </p>
              <h2 className="mt-3 text-2xl font-black">
                후회 없는 선택을 위한 아이엠농부 기준
              </h2>
              <ul className="mt-5 space-y-3 text-m leading-7 text-[#5F5A53]">
                <li>• 맛과 신선도를 기준으로 직접 선별한 상품만 제안합니다.</li>
                <li>• 오늘 먹는 식탁까지 고려한 빠른 배송 경험을 준비합니다.</li>
                <li>• 프리미엄 마켓다운 정돈된 품질과 설명을 제공합니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E8E1D6] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-m font-bold uppercase tracking-[0.18em] text-[#6A9F4F]">
              More to Explore
            </p>
            <h3 className="mt-2 text-3xl font-black">함께 보면 좋은 상품</h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products
              .filter((item) => item.id !== product.id)
              .slice(0, 3)
              .map((item) => (
                <Link
                  key={item.id}
                  href={`/products/${item.id}`}
                  className="group overflow-hidden rounded-[28px] border border-[#ECE4D8] bg-[#FCFCF8] shadow-[0_10px_22px_rgba(75,60,30,0.04)] transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(75,60,30,0.10)]"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.06]"
                    />
                  </div>

                  <div className="p-5">
                    <p className="text-m font-bold uppercase tracking-[0.12em] text-[#8A847B]">
                      premium pick
                    </p>
                    <h4 className="mt-2 text-xl font-black">{item.name}</h4>
                    <p className="mt-2 line-clamp-2 text-xl leading-6 text-[#6F685F]">
                      {item.description}
                    </p>
                    <p className="mt-5 text-xl font-black">
                      {item.price.toLocaleString()}원
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}