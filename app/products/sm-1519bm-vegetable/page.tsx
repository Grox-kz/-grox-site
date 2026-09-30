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
        <div className="lg:sticky lg:top-8">
          <div className="rounded-[32px] bg-zinc-100 p-6">
<img
  src="/sm-1519bm-vegetable.jpeg"
  alt="Кухонный комбайн GROX SM-1519BM 2 насадки и овощерезка"
  className="w-full rounded-2xl object-contain"
/>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-black tracking-[0.35em] text-zinc-500">
            GROX
          </p>

          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            SM-1519BM
            <br />
            2 насадки + овощерезка
          </h1>

          <p className="mt-5 text-lg leading-8 text-zinc-600">
            Кухонный комбайн GROX SM-1519BM в отдельной комплектации:
            2 дополнительные насадки и овощерезка.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-zinc-100 p-5">
              <p className="text-sm text-zinc-500">Модель</p>
              <p className="mt-1 text-2xl font-black">SM-1519BM</p>
            </div>

            <div className="rounded-2xl bg-zinc-100 p-5">
              <p className="text-sm text-zinc-500">Тип</p>
              <p className="mt-1 text-xl font-black">Кухонный комбайн</p>
            </div>

            <div className="rounded-2xl bg-zinc-100 p-5">
              <p className="text-sm text-zinc-500">Комплектация</p>
              <p className="mt-1 text-xl font-black">
                2 насадки + овощерезка
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-100 p-5">
              <p className="text-sm text-zinc-500">Бренд</p>
              <p className="mt-1 text-xl font-black">GROX</p>
            </div>
          </div>

          <div className="mt-5 rounded-[28px] bg-zinc-950 p-6 text-white">
            <p className="text-xs font-bold tracking-[0.25em] text-zinc-400">
              ВОЗМОЖНОСТИ
            </p>

            <h2 className="mt-2 text-2xl font-black">
              Один комбайн — несколько задач
            </h2>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-zinc-800 p-4">
                <div className="text-2xl">🥩</div>
                <p className="mt-2 font-bold">Мясорубка</p>
              </div>

              <div className="rounded-2xl bg-zinc-800 p-4">
                <div className="text-2xl">🥤</div>
                <p className="mt-2 font-bold">Блендер</p>
              </div>

              <div className="rounded-2xl bg-zinc-800 p-4">
                <div className="text-2xl">🍞</div>
                <p className="mt-2 font-bold">Замес теста</p>
              </div>

              <div className="rounded-2xl bg-zinc-800 p-4">
                <div className="text-2xl">🥕</div>
                <p className="mt-2 font-bold">Овощерезка</p>
              </div>
            </div>
          </div>

          <a
            href="https://l.kaspi.kz/shop/J9jFSTYbeayRFXA"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-full items-center justify-center rounded-full bg-[#F14635] px-8 py-5 text-lg font-black text-white shadow-lg transition hover:scale-[1.02]"
          >
            Купить на Kaspi →
          </a>
        </div>
      </section>
    </main>
  );
}