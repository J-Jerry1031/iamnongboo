"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { products } from "@/data/products";

const categories = [
  { key: "premium", label: "프리미엄", subtitle: "엄선 셀렉션", icon: "✨" },
  { key: "fruit", label: "과일", subtitle: "제철 과일", icon: "🍎" },
  { key: "vegetable", label: "채소", subtitle: "산지 직송", icon: "🥬" },
  { key: "meat", label: "정육", subtitle: "프리미엄 육류", icon: "🥩" },
  { key: "seafood", label: "수산물", subtitle: "오늘 입고", icon: "🐟" },
  { key: "organic", label: "유기농 가공품", subtitle: "건강한 식탁", icon: "🌾" },
  { key: "coffee", label: "커피", subtitle: "깊은 향", icon: "☕" },
];

const heroSlides = [
  {
    id: 1,
    badge: "SPRING SPECIAL",
    title: "오직 아이엠농부에서만 만나는\n프리미엄 식탁",
    desc: "좋은 재료를 고르는 안목, 신선함을 전달하는 정직함. 오늘 픽업과 당일 배송으로 더 가까운 프리미엄 마켓을 경험해보세요.",
    period: "특가 기간 · 2026.03.11 - 2026.03.17",
    cta: "특가 상품 보기",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 2,
    badge: "TODAY DELIVERY",
    title: "오늘 주문하면\n오늘 저녁 식탁까지",
    desc: "신선식품은 타이밍이 가장 중요하니까. 가까운 프리미엄 마켓의 장점을 당일배송과 오늘픽업으로 더 빠르게 전달합니다.",
    period: "서비스 안내 · 오늘 픽업 / 당일 배송 / 새벽 배송",
    cta: "배송 안내 보기",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    badge: "WEEKLY CURATION",
    title: "이번 주 가장 특별한\n정육 · 수산물 셀렉션",
    desc: "한우, 연어, 고등어, 새우까지. 어디서나 볼 수 있는 상품이 아니라 아이엠농부가 직접 고른 특별한 식재료만 제안합니다.",
    period: "주간 행사 · 2026.03.14 - 2026.03.20",
    cta: "행사 상품 보기",
    image:
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1600&q=80",
  },
];

const serviceHighlights = [
  {
    title: "오늘 픽업",
    desc: "주문 후 가까운 매장에서 빠르게 수령하는 프리미엄 장보기.",
  },
  {
    title: "당일 배송",
    desc: "오전 주문 상품을 오늘 저녁 전까지 받아보는 신선한 속도.",
  },
  {
    title: "엄선 셀렉션",
    desc: "아무 상품이나 올리지 않고, 고를 가치가 있는 것만 제안합니다.",
  },
];

const premiumStories = [
  {
    title: "산지의 신선함",
    desc: "제철의 타이밍을 놓치지 않는 산지 중심 소싱",
  },
  {
    title: "한정 큐레이션",
    desc: "많이 보여주기보다, 정말 좋은 것만 보여주는 구성",
  },
  {
    title: "프리미엄 식탁",
    desc: "뭘 사도 만족스러운 경험을 만드는 정직한 품질 기준",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const featuredProducts = useMemo(() => products.slice(0, 3), []);
  const bestProducts = useMemo(() => [...products, ...products].slice(0, 6), []);
  const exclusiveProducts = useMemo(
    () => [...products, ...products].slice(0, 4),
    []
  );

  return (
    <main className="min-h-screen bg-[#FCFCF8] text-[#2F2F2F]">
      <div className="border-b border-[#EAE2D6] bg-[#F7F0E2]">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 text-center text-xs font-medium text-[#6F685E] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>Real Farmer, Real Freshness</p>
          <p>오늘 픽업 · 당일 배송 · 새벽 배송</p>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-[#E8E1D6] bg-white/85 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-5">
            <Link href="/" className="flex items-center gap-4">
              <img
                src="/logo.png"
                alt="아이엠농부 로고"
                className="h-14 w-auto object-contain"
              />
              <div className="hidden sm:block">
                <p className="text-2xl font-black tracking-tight text-[#4E8E33]">
                  아이엠농부
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8C857B]">
                  Real Farmer, Real Freshness
                </p>
              </div>
            </Link>

            <div className="hidden flex-1 px-8 lg:block">
              <div className="flex h-14 items-center rounded-full border border-[#E7DFD2] bg-[#FCFCF8] px-5 shadow-[0_10px_30px_rgba(80,70,40,0.06)]">
                <span className="mr-3 text-[#8D877D]">🔎</span>
                <input
                  className="w-full bg-transparent text-sm outline-none placeholder:text-[#A49C90]"
                  placeholder="프리미엄, 과일, 정육, 수산물, 유기농 가공품, 커피 검색"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-5">
              <button className="hidden rounded-full bg-[#EEF6E7] px-4 py-2 text-sm font-bold text-[#578F3E] sm:block">
                오늘 픽업
              </button>
              <button className="text-sm font-semibold text-[#49453F]">로그인</button>
              <button className="text-sm font-semibold text-[#49453F]">장바구니</button>
            </div>
          </div>

          <nav className="flex gap-6 overflow-x-auto pb-4 text-sm font-bold text-[#4C4842]">
            {categories.map((category) => (
              <button
                key={category.key}
                className="whitespace-nowrap transition hover:text-[#5A983E]"
              >
                {category.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-b from-[#F7F1E5] to-[#FCFCF8]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-14">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center rounded-full border border-[#E7DDCF] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#6A9F4F] shadow-sm">
              Real Farmer, Real Freshness
            </div>

            <h1 className="whitespace-pre-line text-4xl font-black leading-[1.12] tracking-tight text-[#2B2A28] sm:text-5xl lg:text-6xl">
              좋은 식재료를
              {"\n"}고르는 기준이 달라지면
              {"\n"}식탁의 품격도 달라집니다
            </h1>

            <p className="whitespace-pre-line mt-6 max-w-2xl text-base leading-8 text-[#6D675E] sm:text-lg">
              아이엠농부는 어디서나 흔히 만나는 상품을 나열하는 마켓이 아닙니다.
              {"\n"}정말 맛있고, 다시 찾게 되고, 누군가에게 권하고 싶어지는 
              {"\n"}프리미엄 상품만 엄선해 제안합니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-[#7FBF5F] px-6 py-3 text-sm font-bold text-white shadow-[0_12px_24px_rgba(127,191,95,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(127,191,95,0.32)]">
                지금 쇼핑하기
              </button>
              <button className="rounded-full border border-[#DDD3C5] bg-white px-6 py-3 text-sm font-bold text-[#48443E] transition hover:bg-[#FAF7F0]">
                브랜드 스토리 보기
              </button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {serviceHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[26px] border border-[#E9E1D6] bg-white p-5 shadow-[0_12px_28px_rgba(90,75,45,0.06)]"
                >
                  <p className="text-m font-black text-[#5A983E]">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[#726C63]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[34px] border border-[#E8DFD3] bg-white shadow-[0_22px_70px_rgba(70,60,35,0.14)]">
            <div className="relative h-[500px]">
              {heroSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentSlide
                      ? "z-10 opacity-100"
                      : "pointer-events-none z-0 opacity-0"
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1f1f1f]/75 via-[#1f1f1f]/30 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 text-white sm:p-10">
                    <span className="mb-4 inline-flex w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] backdrop-blur">
                      {slide.badge}
                    </span>
                    <h2 className="whitespace-pre-line text-3xl font-black leading-tight sm:text-4xl">
                      {slide.title}
                    </h2>
                    <p className="mt-4 max-w-md text-m leading-6 text-white/90">
                      {slide.desc}
                    </p>
                    <p className="mt-4 text-m font-semibold tracking-wide text-white/80">
                      {slide.period}
                    </p>
                    <button className="mt-6 w-fit rounded-full bg-[#B7E08D] px-5 py-3 text-m font-black text-[#253019] transition hover:brightness-95">
                      {slide.cta}
                    </button>
                  </div>
                </div>
              ))}

              <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === currentSlide ? "w-9 bg-white" : "w-2.5 bg-white/50"
                    }`}
                    aria-label={`슬라이드 ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-7 flex items-end justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#6A9F4F]">
              Category
            </p>
            <h3 className="mt-2 text-3xl font-black tracking-tight">
              취향에 맞는 프리미엄 셀렉션
            </h3>
          </div>
          <button className="text-sm font-bold text-[#5A983E]">전체보기 →</button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {categories.map((category) => (
            <button
              key={category.key}
              className="group rounded-[28px] border border-[#E8E0D4] bg-white p-5 text-left shadow-[0_10px_24px_rgba(75,60,30,0.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(75,60,30,0.10)]"
            >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F6EEDF] text-2xl shadow-sm">
              {category.icon}
        </div>
              <p className="mt-4 font-black text-[#2F2E2B]">{category.label}</p>
              <p className="mt-1 text-sm text-[#7E776E]">{category.subtitle}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="bg-[#F8F2E7]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#6A9F4F]">
                Signature Selection
              </p>
              <h3 className="mt-2 text-3xl font-black tracking-tight">
                아이엠농부 시그니처 추천 상품
              </h3>
            </div>
            <button className="text-sm font-bold text-[#5A983E]">더보기 →</button>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <Link
                key={`${product.id}-${index}`}
                href={`/products/${product.id}`}
                className="group overflow-hidden rounded-[32px] border border-[#E5DCCF] bg-white shadow-[0_14px_36px_rgba(75,60,30,0.07)] transition hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(75,60,30,0.12)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-80 w-full object-cover transition duration-500 group-hover:scale-[1.06]"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-[#B7E08D] px-3 py-1 text-xs font-black text-[#29321F]">
                    I AM FARMER PICK
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8A847A]">
                    premium selection
                  </p>
                  <h4 className="mt-3 text-xl font-black">{product.name}</h4>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#6F685F]">
                    {product.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-[#8C857B]">오늘 주문 가능</p>
                      <p className="text-2xl font-black text-[#2D2D2A]">
                        {product.price.toLocaleString()}원
                      </p>
                    </div>
                    <button className="rounded-full bg-[#2F2F2C] px-5 py-3 text-sm font-black text-white transition hover:bg-black">
                      담기
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#6A9F4F]">
              Event
            </p>
            <h3 className="mt-2 text-3xl font-black tracking-tight">
              지금 진행 중인 특별한 혜택
            </h3>
          </div>
          <button className="text-sm font-bold text-[#5A983E]">이벤트 전체보기 →</button>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {heroSlides.map((slide) => (
            <div
              key={slide.id}
              className="overflow-hidden rounded-[30px] border border-[#E8DFD4] bg-white shadow-[0_12px_28px_rgba(75,60,30,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(75,60,30,0.10)]"
            >
              <div className="overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-56 w-full object-cover transition duration-500 hover:scale-[1.04]"
                />
              </div>
              <div className="p-6">
                <p className="text-m font-black uppercase tracking-[0.14em] text-[#6A9F4F]">
                  {slide.badge}
                </p>
                <h4 className="mt-3 text-2xl font-black leading-tight text-[#2C2B28]">
                  {slide.title.replaceAll("\n", " ")}
                </h4>
                <p className="mt-3 text-m leading-6 text-[#6F685F]">{slide.desc}</p>
                <p className="mt-5 text-m font-semibold text-[#8A847B]">{slide.period}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#6A9F4F]">
                Best
              </p>
              <h3 className="mt-2 text-3xl font-black tracking-tight">
                가장 많이 찾는 인기 상품
              </h3>
            </div>
            <button className="text-sm font-bold text-[#5A983E]">베스트 더보기 →</button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {bestProducts.map((product, index) => (
              <Link
                key={`${product.id}-best-${index}`}
                href={`/products/${product.id}`}
                className="group relative flex gap-4 overflow-hidden rounded-[28px] border border-[#ECE4D8] bg-[#FCFCF8] p-4 shadow-[0_10px_22px_rgba(75,60,30,0.04)] transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(75,60,30,0.10)]"
              >
                <div className="absolute right-4 top-4 rounded-full bg-[#2F2F2C] px-3 py-1 text-xs font-black text-white">
                  BEST {index + 1}
                </div>

                <div className="overflow-hidden rounded-[22px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-28 w-28 object-cover transition duration-500 group-hover:scale-[1.06]"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-center pr-16">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8A847B]">
                    i am farmer best
                  </p>
                  <p className="mt-2 truncate text-lg font-black">{product.name}</p>
                  <p className="mt-2 line-clamp-2 text-sm text-[#6F685F]">
                    {product.description}
                  </p>
                  <p className="mt-4 text-xl font-black">
                    {product.price.toLocaleString()}원
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EEF6E7]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#6A9F4F]">
              Only at I Am Farmer
            </p>
            <h3 className="mt-2 text-3xl font-black tracking-tight">
              왜 아이엠농부여야 하는가
            </h3>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {premiumStories.map((story) => (
              <div
                key={story.title}
                className="rounded-[30px] border border-[#DDE9D1] bg-white p-8 shadow-[0_10px_24px_rgba(60,80,40,0.06)]"
              >
                <p className="text-sm font-black uppercase tracking-[0.14em] text-[#6A9F4F]">
                  premium point
                </p>
                <h4 className="mt-3 text-2xl font-black text-[#2E2D2A]">
                  {story.title}
                </h4>
                <p className="mt-4 text-m leading-7 text-[#69635A]">{story.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#6A9F4F]">
              Exclusive Market
            </p>
            <h3 className="mt-2 text-3xl font-black tracking-tight">
              오직 아이엠농부에서만 만나는 특별함
            </h3>
          </div>
          <button className="text-sm font-bold text-[#5A983E]">전체보기 →</button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {exclusiveProducts.map((product, index) => (
            <Link
              key={`${product.id}-exclusive-${index}`}
              href={`/products/${product.id}`}
              className="group overflow-hidden rounded-[30px] border border-[#E7DED2] bg-white shadow-[0_12px_26px_rgba(75,60,30,0.05)] transition hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(75,60,30,0.11)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.06]"
                />
                <div className="absolute left-4 top-4 rounded-full bg-[#F6EEDF] px-3 py-1 text-xs font-black text-[#5C554B]">
                  EXCLUSIVE
                </div>
              </div>

              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8A847B]">
                  real freshness
                </p>
                <h4 className="mt-2 text-lg font-black">{product.name}</h4>
                <p className="mt-2 line-clamp-2 text-m leading-6 text-[#6F685F]">
                  {product.description}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <p className="text-xl font-black">
                    {product.price.toLocaleString()}원
                  </p>
                  <span className="text-m font-bold text-[#5A983E]">
                    오늘배송 가능
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#E8E1D6] bg-[#FCFCF8]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 text-sm text-[#716B62] sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
          <div>
            <img
              src="/logo.png"
              alt="아이엠농부 로고"
              className="h-12 w-auto object-contain"
            />
            <p className="mt-4 font-black text-[#4E8E33]">아이엠농부</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#8B847A]">
              Real Farmer, Real Freshness
            </p>
            <p className="mt-4 leading-7">
              프리미엄 식탁을 위한 가장 정직한 선택.
              <br />
              오늘 픽업과 당일 배송으로 더 가까운 신선함을 전합니다.
            </p>
          </div>

          <div>
            <p className="font-black text-[#393632]">고객 안내</p>
            <ul className="mt-4 space-y-3">
              <li>배송 안내</li>
              <li>교환 / 환불</li>
              <li>자주 묻는 질문</li>
              <li>공지사항</li>
            </ul>
          </div>

          <div>
            <p className="font-black text-[#393632]">브랜드</p>
            <ul className="mt-4 space-y-3">
              <li>아이엠농부 소개</li>
              <li>입점 문의</li>
              <li>오프라인 매장 안내</li>
              <li>제휴 문의</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}