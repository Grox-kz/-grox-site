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
            src="/SM-2542L,5 литров.jpeg"
            alt="Тестомес GROX SM-2542L 5 литров"
            className="h-[520px] w-full rounded-2xl object-contain"
          />
        </div>

        <div>
          <p className="mb-4 text-sm font-bold tracking-[0.35em] text-zinc-500">
            GROX
          </p>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            GROX SM-2542L
            <br />
            5 литров
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Компактный тестомес GROX для домашней выпечки.
            Оптимальный объём чаши для ежедневного приготовления теста.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-zinc-100 p-5">
              <p className="text-sm text-zinc-500">Объём чаши</p>
              <p className="mt-1 text-xl font-bold">5 литров</p>
            </div>

            <div className="rounded-2xl bg-zinc-100 p-5">
              <p className="text-sm text-zinc-500">Модель</p>
              <p className="mt-1 text-xl font-bold">SM-2542L</p>
            </div>

            <div className="rounded-2xl bg-zinc-100 p-5">
              <p className="text-sm text-zinc-500">Назначение</p>
              <p className="mt-1 text-xl font-bold">Замешивание теста</p>
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
              <p>✓ Чаша 5 литров</p>
              <p>✓ Для домашней выпечки</p>
              <p>✓ Компактный размер</p>
              <p>✓ Удобное управление</p>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-red-100 bg-red-50">
            <div className="p-6 text-center">
              <div className="mx-auto inline-flex items-center rounded-full bg-red-600 px-5 py-2">
                <span className="text-sm font-black tracking-wider text-white">
                  KASPI
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-black">
                Купить GROX SM-2542L
              </h3>

              <p className="mt-2 text-zinc-600">
                Доступна покупка через Kaspi
                <br />
                с возможностью оформления рассрочки
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold">
                <span>✓ Быстро</span>
                <span>✓ Удобно</span>
                <span>✓ Рассрочка</span>
              </div>
            </div>

<a
  href="https://kaspi.kz/shop/p/testomes-grox-sm-2542l-5-l-chernyi-162170189/?c=750000000&m=30341378&ms=true"
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