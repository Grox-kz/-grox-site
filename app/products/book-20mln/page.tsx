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
        {/* Фото книги */}
        <div className="lg:sticky lg:top-8">
          <div className="rounded-[32px] bg-zinc-100 p-8">
            <img
              src="/От нуля до 20 млн.jpeg"
              alt="Книга От нуля до 20 млн на маркетплейсе"
              className="w-full rounded-2xl object-contain"
            />
          </div>
        </div>

        {/* Информация */}
        <div>
          <p className="mb-3 text-sm font-black tracking-[0.3em] text-zinc-500">
            КНИГА
          </p>

          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            От нуля до 20 млн
            <br />
            на маркетплейсе
          </h1>

          <p className="mt-5 text-lg leading-8 text-zinc-600">
            Практическая книга о запуске и развитии продаж на маркетплейсе:
            от выбора товара и первых продаж до масштабирования бизнеса.
          </p>

          {/* Для кого */}
          <div className="mt-8 rounded-[28px] bg-zinc-950 p-7 text-white">
            <p className="text-xs font-bold tracking-[0.25em] text-zinc-400">
              ДЛЯ КОГО ЭТА КНИГА
            </p>

            <h2 className="mt-3 text-2xl font-black">
              От первого товара до системных продаж
            </h2>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-zinc-800 p-4">
                <div className="text-2xl">🚀</div>
                <p className="mt-2 font-bold">Для новичков</p>
                <p className="mt-1 text-xs leading-5 text-zinc-400">
                  Тем, кто хочет начать продажи на маркетплейсе
                </p>
              </div>

              <div className="rounded-2xl bg-zinc-800 p-4">
                <div className="text-2xl">📈</div>
                <p className="mt-2 font-bold">Для продавцов</p>
                <p className="mt-1 text-xs leading-5 text-zinc-400">
                  Тем, кто уже продаёт и хочет расти дальше
                </p>
              </div>
            </div>
          </div>

          {/* Что внутри */}
          <div className="mt-5 rounded-[28px] bg-zinc-100 p-7">
            <p className="text-xs font-black tracking-[0.25em] text-zinc-500">
              ЧТО ВНУТРИ
            </p>

            <div className="mt-5 space-y-4 font-semibold">
              <p>✓ Как выбрать товар для продажи</p>
              <p>✓ Как запустить первые продажи</p>
              <p>✓ Работа с карточкой товара</p>
              <p>✓ Продвижение и увеличение продаж</p>
              <p>✓ Ошибки начинающих продавцов</p>
              <p>✓ Масштабирование товарного бизнеса</p>
            </div>
          </div>

          {/* Авторы */}
          <div className="mt-5 rounded-[28px] border border-zinc-200 p-6">
            <p className="text-sm text-zinc-500">Авторы</p>
            <p className="mt-1 text-xl font-black">
              Н. М. Тасболат • Р. Д. Умирбеков
            </p>
          </div>

          {/* Kaspi */}
          <div className="mt-5 overflow-hidden rounded-[28px] border border-red-100 bg-red-50">
            <div className="p-6 text-center">
              <span className="inline-block rounded-full bg-red-600 px-5 py-2 text-xs font-black tracking-wider text-white">
                KASPI
              </span>

              <h2 className="mt-4 text-2xl font-black">
                Заказать книгу
              </h2>

              <p className="mt-2 text-sm text-zinc-600">
                Покупка через Kaspi
              </p>
            </div>

            <a
              href="https://kaspi.kz/shop/p/tasbolata-n-m-umirbekov-r-d-ot-nulja-do-20-mln-na-marketpleise-173181196/?c=750000000&m=30341378&ms=true"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center bg-red-600 px-8 py-5 text-lg font-black text-white transition hover:bg-red-700"
            >
              Купить на Kaspi →
            </a>
          </div>

          <p className="mt-3 text-center text-xs text-zinc-500">
            Цена и условия покупки отображаются на Kaspi
          </p>
        </div>
      </section>
    </main>
  );
}