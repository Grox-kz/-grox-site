export default function ProductPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <header className="flex items-center justify-between border-b border-zinc-200 px-8 py-6 sm:px-14">
        <a href="/" className="text-2xl font-black tracking-[0.35em]">
          GROX
        </a>

        <a
          href="/#products"
          className="text-sm font-medium text-zinc-600 transition hover:text-black"
        >
          ← Все товары
        </a>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-14 lg:grid-cols-2 lg:items-start">
        {/* Фото */}
        <div className="lg:sticky lg:top-8">
          <div className="rounded-[32px] bg-zinc-100 p-6">
            <img
              src="/Моющий пылесос GROX M6 + подарок.jpeg"
              alt="Моющий пылесос GROX M6 с подарком"
              className="w-full rounded-2xl object-contain"
            />
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-zinc-100 px-5 py-4">
            <span className="text-xl">🛡️</span>
            <p className="font-bold">GROX — качество и надёжность</p>
          </div>
        </div>

        {/* Информация */}
        <div>
          <p className="mb-3 text-sm font-black tracking-[0.35em] text-zinc-500">
            GROX
          </p>

          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            Моющий пылесос
            <br />
            GROX M6
          </h1>

          <p className="mt-5 text-lg leading-8 text-zinc-600">
            Моющий пылесос для комплексной уборки дома. Помогает очищать
            поверхности и справляться с повседневными загрязнениями.
          </p>

          {/* Характеристики */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-zinc-100 p-5">
              <p className="text-sm text-zinc-500">Модель</p>
              <p className="mt-1 text-2xl font-black">M6</p>
            </div>

            <div className="rounded-2xl bg-zinc-100 p-5">
              <p className="text-sm text-zinc-500">Тип</p>
              <p className="mt-1 text-xl font-black">Моющий</p>
            </div>

            <div className="rounded-2xl bg-zinc-100 p-5">
              <p className="text-sm text-zinc-500">Уборка</p>
              <p className="mt-1 text-xl font-black">Для дома</p>
            </div>

            <div className="rounded-2xl bg-zinc-100 p-5">
              <p className="text-sm text-zinc-500">Бренд</p>
              <p className="mt-1 text-xl font-black">GROX</p>
            </div>
          </div>

          {/* Преимущества */}
          <div className="mt-5 rounded-[28px] bg-zinc-950 p-6 text-white">
            <p className="text-xs font-bold tracking-[0.25em] text-zinc-400">
              ПРЕИМУЩЕСТВА GROX
            </p>

            <h2 className="mt-2 text-2xl font-black">
              Чистота без лишних усилий
            </h2>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-zinc-800 p-4">
                <div className="text-2xl">💧</div>
                <p className="mt-2 font-bold">Моющая уборка</p>
              </div>

              <div className="rounded-2xl bg-zinc-800 p-4">
                <div className="text-2xl">✨</div>
                <p className="mt-2 font-bold">Глубокая очистка</p>
              </div>

              <div className="rounded-2xl bg-zinc-800 p-4">
                <div className="text-2xl">🏠</div>
                <p className="mt-2 font-bold">Для дома</p>
              </div>

              <div className="rounded-2xl bg-zinc-800 p-4">
                <div className="text-2xl">⚡</div>
                <p className="mt-2 font-bold">Удобная уборка</p>
              </div>
            </div>
          </div>

          {/* Подарок */}
          <div className="mt-5 overflow-hidden rounded-[28px] border-2 border-red-500 bg-red-50">
            <div className="flex items-center gap-5 p-6">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white text-5xl shadow-sm">
                🎁
              </div>

              <div>
                <div className="inline-block rounded-full bg-red-500 px-3 py-1 text-xs font-black text-white">
                  ПОДАРОК
                </div>

                <h2 className="mt-2 text-2xl font-black">
                  Подарок к покупке
                </h2>

                <p className="mt-1 text-sm text-zinc-600">
                  Комплектацию и актуальный подарок смотрите на странице товара
                  в Kaspi.
                </p>
              </div>
            </div>
          </div>

          {/* Рассрочка */}
          <div className="mt-5 rounded-[28px] bg-zinc-100 p-6 text-center">
            <p className="text-xl font-black">
              Покупайте сейчас — оплачивайте частями
            </p>

            <p className="mt-2 text-sm text-zinc-600">
              Доступна покупка в рассрочку через Kaspi
            </p>
          </div>

          {/* Kaspi */}
          <a
            href="https://kaspi.kz/shop/p/grox-m6-chernyi-podarok-173346794/?c=750000000&m=30341378&ms=true"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full items-center justify-center rounded-full bg-[#F14635] px-8 py-5 text-lg font-black text-white shadow-lg transition duration-300 hover:scale-[1.02] hover:bg-[#D93A2B]"
          >
            Купить на Kaspi →
          </a>

          <p className="mt-3 text-center text-xs text-zinc-500">
            Перейдёте на страницу товара в Kaspi
          </p>
        </div>
      </section>
    </main>
  );
}