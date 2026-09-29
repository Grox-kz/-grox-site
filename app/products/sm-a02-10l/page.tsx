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
            src="/grox-sma02-10l.jpeg"
            alt="Тестомес GROX SM-A02 10 литров"
            className="h-[520px] w-full rounded-2xl object-contain"
          />
        </div>

        <div>
          <p className="mb-4 text-sm font-bold tracking-[0.35em] text-zinc-500">
            GROX
          </p>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            GROX SM-A02
            <br />
            10 литров
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Мощный тестомес GROX для больших объёмов. Вместительная чаша
            10 литров и загрузка теста до 6 кг.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-zinc-100 p-5">
              <p className="text-sm text-zinc-500">Мощность</p>
              <p className="mt-1 text-xl font-bold">2200 Вт</p>
            </div>

            <div className="rounded-2xl bg-zinc-100 p-5">
              <p className="text-sm text-zinc-500">Объём чаши</p>
              <p className="mt-1 text-xl font-bold">10 литров</p>
            </div>

            <div className="rounded-2xl bg-zinc-100 p-5">
              <p className="text-sm text-zinc-500">Загрузка теста</p>
              <p className="mt-1 text-xl font-bold">до 6 кг</p>
            </div>

            <div className="rounded-2xl bg-zinc-100 p-5">
              <p className="text-sm text-zinc-500">Скорости</p>
              <p className="mt-1 text-xl font-bold">9 скоростей</p>
            </div>
          </div>

          <div className="mt-4 rounded-3xl bg-black p-6 text-white">
            <p className="text-sm font-semibold text-zinc-400">
              ПРЕИМУЩЕСТВА GROX
            </p>

            <div className="mt-4 grid gap-3 font-semibold sm:grid-cols-2">
              <p>✓ Мощность 2200 Вт</p>
              <p>✓ Большая чаша 10 л</p>
              <p>✓ До 6 кг теста</p>
              <p>✓ 9 скоростей</p>
              <p>✓ Съёмная чаша</p>
              <p>✓ Для больших объёмов</p>
            </div>
          </div>

          <div className="mt-4 rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
            <p className="text-sm font-black tracking-wider text-red-600">
              🎁 ПОДАРОК
            </p>
            <h3 className="mt-2 text-xl font-black">
              Комбайн для раскатки теста GROX
            </h3>
            <p className="mt-2 text-sm text-zinc-600">
              Входит в комплект при покупке.
            </p>
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-red-100 bg-red-50">
            <div className="p-6 text-center">
              <div className="mx-auto inline-flex rounded-full bg-red-600 px-5 py-2">
                <span className="text-sm font-black tracking-wider text-white">
                  KASPI
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-black">
                Купить GROX SM-A02
              </h3>

              <p className="mt-2 text-zinc-600">
                Оформите заказ через Kaspi
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
              href="https://kaspi.kz/shop/p/testomes-grox-sm-a02-kombain-dlja-raskatki-testa-grox-10-l-seryi-160022296/?c=750000000&m=30341378&ms=true"
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