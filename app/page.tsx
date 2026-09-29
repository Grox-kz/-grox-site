export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="absolute left-0 top-0 z-10 flex w-full items-center justify-between px-8 py-6 sm:px-12">
        <div className="text-3xl font-black tracking-[0.35em] sm:text-4xl">
          GROX
        </div>

        <div className="hidden gap-8 text-sm text-zinc-300 sm:flex">
          <a href="#products">Товары</a>
          <a href="#about">О бренде</a>
          <a href="#warranty">Гарантия</a>
          <a href="#contacts">Контакты</a>
        </div>
      </nav>

      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="animate-fade-down mb-8 text-2xl font-black tracking-[0.5em] text-white sm:text-4xl">
          GROX
        </div>

        <h1 className="animate-fade-up max-w-6xl text-5xl font-black tracking-[-0.04em] sm:text-8xl">
          Техника, созданная
          <br />
          для вашего дома
        </h1>

        <p className="animate-fade-up-delay-1 mt-8 max-w-2xl text-lg text-zinc-400 sm:text-xl">
          Современная бытовая техника GROX.
          <br />
          Надёжность, функциональность и продуманный дизайн.
        </p>

        <div className="animate-fade-up-delay-2 mt-10 flex gap-4">
          <a
            href="#products"
            className="rounded-full bg-white px-8 py-4 font-semibold text-black"
          >
            Смотреть товары
          </a>

          <a
            href="#about"
            className="rounded-full border border-zinc-700 px-8 py-4 font-semibold"
          >
            О бренде
          </a>
        </div>

        <div className="absolute bottom-10 text-sm text-zinc-500">
          GROX • Kazakhstan
        </div>
      </section>

      <section id="products" className="bg-white px-6 py-24 text-black">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-zinc-500">
              GROX
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Наши товары
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-zinc-600">
              Техника GROX для кухни и дома.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* 1 */}
            <a href="/products/sm-a03pm" className="block">
              <div className="group rounded-3xl bg-zinc-100 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <img
                  src="/grox-combine.jpeg"
                  alt="Кухонный комбайн GROX"
                  className="h-72 w-full rounded-2xl object-contain"
                />
                <p className="mt-5 text-sm font-semibold text-zinc-500">
                  GROX
                </p>
                <h3 className="mt-2 text-xl font-bold">
                  SM-A03PM 3 в 1 с подогревом чаши
                </h3>
              </div>
            </a>

            {/* 2 */}
            <a href="/products/sm-a03" className="block">
              <div className="group rounded-3xl bg-zinc-100 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <img
                  src="/grox-testomes.jpeg"
                  alt="Тестомес GROX SM-A03"
                  className="h-72 w-full rounded-2xl object-contain"
                />
                <p className="mt-5 text-sm font-semibold text-zinc-500">
                  GROX
                </p>
                <h3 className="mt-2 text-xl font-bold">
                  Тестомес GROX SM-A03
                </h3>
              </div>
            </a>

            {/* 3 */}
            <a href="/products/sm-2542l" className="block">
              <div className="group rounded-3xl bg-zinc-100 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <img
                  src="/SM-2542L,5 литров.jpeg"
                  alt="Тестомес GROX SM-2542L 5 литров"
                  className="h-72 w-full rounded-2xl object-contain"
                />
                <p className="mt-5 text-sm font-semibold text-zinc-500">
                  GROX
                </p>
                <h3 className="mt-2 text-xl font-bold">
                  SM-2542L — 5 л
                </h3>
              </div>
            </a>

            {/* 4 */}
            <a href="/products/sm-1519bm" className="block">
              <div className="group rounded-3xl bg-zinc-100 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <img
                  src="/grox-sm1519-3.jpeg"
                  alt="GROX SM-1519BM с 3 насадками"
                  className="h-72 w-full rounded-2xl object-contain"
                />
                <p className="mt-5 text-sm font-semibold text-zinc-500">
                  GROX
                </p>
                <h3 className="mt-2 text-xl font-bold">
                  SM-1519BM + 3 насадки
                </h3>
              </div>
            </a>

            {/* 5 */}
            <a href="/products/sm-a02-10l" className="block">
              <div className="group rounded-3xl bg-zinc-100 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <img
                  src="/grox-sma02-10l.jpeg"
                  alt="Тестомес GROX SM-A02 10 литров"
                  className="h-72 w-full rounded-2xl object-contain"
                />
                <p className="mt-5 text-sm font-semibold text-zinc-500">
                  GROX
                </p>
                <h3 className="mt-2 text-xl font-bold">
                  SM-A02 — 10 л
                </h3>
              </div>
            </a>

           {/* 6 */}
<a href="/products/lapsherezka" className="block">
  <div className="group rounded-3xl bg-zinc-100 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
    <img
      src="/grox-lapsherezka.jpeg"
      alt="Электрическая лапшерезка GROX ZN-ST36A01"
      className="h-72 w-full rounded-2xl object-contain"
    />
    <p className="mt-5 text-sm font-semibold text-zinc-500">
      GROX
    </p>
    <h3 className="mt-2 text-xl font-bold">
      Электрическая лапшерезка
    </h3>
  </div>
</a>

{/* 7 */}
<a href="/products/slj-04" className="block">
  <div className="group rounded-3xl bg-zinc-100 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
    <img
      src="/Овощерезка GROX SLJ-04.jpg"
      alt="Овощерезка GROX SLJ-04"
      className="h-72 w-full rounded-2xl object-contain"
    />
    <p className="mt-5 text-sm font-semibold text-zinc-500">
      GROX
    </p>
    <h3 className="mt-2 text-xl font-bold">
      Овощерезка SLJ-04
    </h3>
  </div>
</a>

            {/* 8 */}
            <a href="/products/sm-1519bm" className="block">
              <div className="group rounded-3xl bg-zinc-100 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <img
                  src="/SM-1519BM 3 в 1.jpeg"
                  alt="Кухонный комбайн GROX SM-1519BM 3 в 1"
                  className="h-72 w-full rounded-2xl object-contain"
                />
                <p className="mt-5 text-sm font-semibold text-zinc-500">
                  GROX
                </p>
                <h3 className="mt-2 text-xl font-bold">
                  SM-1519BM 3 в 1
                </h3>
              </div>
            </a>

{/* 9 */}
<a href="/products/hs-200g" className="block">
  <div className="group rounded-3xl bg-zinc-100 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
    <img
      src="/Блендер GROX HS-200G 3 в 1.jpg"
      alt="Блендер GROX HS-200G 3 в 1"
      className="h-72 w-full rounded-2xl object-contain"
    />
    <p className="mt-5 text-sm font-semibold text-zinc-500">
      GROX
    </p>
    <h3 className="mt-2 text-xl font-bold">
      Блендер HS-200G 3 в 1
    </h3>
  </div>
</a>
{/* 10 */}
<a href="/products/book-20mln" className="block">
  <div className="group rounded-3xl bg-zinc-100 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
    <img
      src="/От нуля до 20 млн.jpeg"
      alt="Книга От нуля до 20 млн на маркетплейсе"
      className="h-72 w-full rounded-2xl object-contain"
    />
    <p className="mt-5 text-sm font-semibold text-zinc-500">
      КНИГА
    </p>
    <h3 className="mt-2 text-xl font-bold">
      От нуля до 20 млн
    </h3>
  </div>
</a>

{/* 11 */}
<a href="/products/m6" className="block">
  <div className="group rounded-3xl bg-zinc-100 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
    <img
      src="/Моющий пылесос GROX M6 + подарок.jpeg"
      alt="Моющий пылесос GROX M6 с подарком"
      className="h-72 w-full rounded-2xl object-contain"
    />
    <p className="mt-5 text-sm font-semibold text-zinc-500">
      GROX
    </p>
    <h3 className="mt-2 text-xl font-bold">
      Моющий пылесос M6 + подарок
    </h3>
  </div>
</a>

{/* 12 */}
<a href="/products/sm310" className="block">
  <div className="group rounded-3xl bg-zinc-100 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
    <img
      src="/Тестомес SM310.jpeg"
      alt="Тестомес GROX SM310"
      className="h-72 w-full rounded-2xl object-contain"
    />
    <p className="mt-5 text-sm font-semibold text-zinc-500">
      GROX
    </p>
    <h3 className="mt-2 text-xl font-bold">
      Тестомес SM310
    </h3>
  </div>
</a>

          </div>
        </div>
      </section>
    </main>
  );
}