export default function ProductPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <header className="flex items-center justify-between border-b border-zinc-200 px-8 py-6 sm:px-14">
        <a href="/" className="text-2xl font-black tracking-[0.35em]">
          GROX
        </a>

        <a
          href="/#products"
          className="text-sm font-semibold text-zinc-600 hover:text-black"
        >
          ← Все товары
        </a>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center">
        <div className="rounded-[32px] bg-zinc-100 p-6">
          <img
            src="/Блендер GROX HS-200G 3 в 1.jpg"
            alt="Блендер GROX HS-200G 3 в 1"
            className="h-[520px] w-full rounded-2xl object-contain"
          />
        </div>

        <div>
          <p className="mb-4 text-sm font-bold tracking-[0.35em] text-zinc-500">
            GROX
          </p>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            Блендер GROX
            <br />
            HS-200G 3 в 1
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Универсальный стационарный блендер GROX 3 в 1 для ежедневного
            использования на кухне. Один прибор помогает быстро измельчать,
            смешивать и готовить различные продукты.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-zinc-100 p-5">
              <p className="text-sm text-zinc-500">Модель</p>
              <p className="mt-1 text-xl font-bold">HS-200G</p>
            </div>

            <div className="rounded-2xl bg-zinc-100 p-5">
              <p className="text-sm text-zinc-500">Формат</p>
              <p className="mt-1 text-xl font-bold">3 в 1</p>
            </div>

            <div className="rounded-2xl bg-zinc-100 p-5">
              <p className="text-sm text-zinc-500">Тип</p>
              <p className="mt-1 text-xl font-bold">Стационарный</p>
            </div>

            <div className="rounded-2xl bg-zinc-100 p-5">
              <p className="text-sm text-zinc-500">Бренд</p>
              <p className="mt-1 text-xl font-bold">GROX</p>
            </div>
          </div>

          <div className="mt-4 rounded-3xl bg-black p-6 text-white">
            <p className="text-sm font-semibold text-zinc-400">
              ПРЕИМУЩЕСТВА GROX
            </p>

            <div className="mt-4 grid gap-3 font-semibold sm:grid-cols-2">
              <p>✓ Универсальный формат 3 в 1</p>
              <p>✓ Быстрое измельчение</p>
              <p>✓ Удобное управление</p>
              <p>✓ Для ежедневного использования</p>
              <p>✓ Современный дизайн</p>
              <p>✓ Один прибор для разных задач</p>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-red-100 bg-gradient-to-br from-red-50 to-white shadow-sm">
            <div className="p-6 text-center">
              <span className="inline-block rounded-full bg-red-600 px-5 py-2 text-xs font-black tracking-wider text-white">
                KASPI
              </span>

              <h2 className="mt-4 text-2xl font-black">
                Купить GROX HS-200G
              </h2>

              <p className="mt-2 text-zinc-600">
                Закажите через Kaspi
                <br />
                с возможностью покупки в рассрочку
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold">
                <span>✓ Быстро</span>
                <span>✓ Удобно</span>
                <span>✓ Рассрочка</span>
              </div>
            </div>

            <a
              href="https://kaspi.kz/shop/p/blender-statsionarnyi-grox-hs-200g-3-in-1-chernyi-seryi-172129947/?c=750000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center bg-red-600 px-8 py-5 text-lg font-black text-white transition hover:bg-red-700"
            >
              Купить на Kaspi →
            </a>
          </div>

          <p className="mt-3 text-center text-xs text-zinc-400">
            Цена и условия рассрочки отображаются на Kaspi
          </p>
        </div>
      </section>
    </main>
  );
}
