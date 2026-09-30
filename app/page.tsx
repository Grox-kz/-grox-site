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
<a href="/products/sm-1519bm-vegetable" className="block">
  <div className="group rounded-3xl bg-zinc-100 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
    <img
      src="/sm-1519bm-vegetable.jpeg"
      alt="Кухонный комбайн GROX SM-1519BM 2 насадки и овощерезка"
      className="h-72 w-full rounded-2xl object-contain"
    />

    <p className="mt-5 text-sm font-semibold text-zinc-500">
      GROX
    </p>

    <h3 className="mt-2 text-xl font-bold">
      SM-1519BM — 2 насадки + овощерезка
    </h3>
  </div>
</a>
<a href="/products/sm310-combine" className="block">
  <div className="group rounded-3xl bg-zinc-100 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
    <img
      src="/grox-sm310-combine.jpeg"
      alt="Кухонный комбайн GROX SM-310 белый"
      className="h-72 w-full rounded-2xl object-contain"
    />

    <p className="mt-5 text-sm font-semibold text-zinc-500">
      GROX
    </p>

    <h3 className="mt-2 text-xl font-bold">
      Кухонный комбайн SM-310 — 3 в 1
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
            {/* О бренде */}
      <section id="about" className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold tracking-[0.3em] text-zinc-500">
            О БРЕНДЕ
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            GROX — техника для современного дома
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            GROX создаёт бытовую технику с акцентом на надёжность,
            функциональность и удобство в повседневной жизни.
          </p>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
            В разработке продукции используются современные инженерные решения
            и подходы, основанные на немецких технологиях и стандартах качества.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-zinc-900 p-6">
              <p className="text-3xl">⚙️</p>
              <h3 className="mt-4 text-xl font-black">Надёжность</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Продуманная конструкция и качественные материалы.
              </p>
            </div>

            <div className="rounded-3xl bg-zinc-900 p-6">
              <p className="text-3xl">🇩🇪</p>
              <h3 className="mt-4 text-xl font-black">
                Немецкие технологии
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Современные инженерные подходы и внимание к деталям.
              </p>
            </div>

            <div className="rounded-3xl bg-zinc-900 p-6">
              <p className="text-3xl">🏠</p>
              <h3 className="mt-4 text-xl font-black">Для дома</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Техника, которая помогает экономить время каждый день.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Гарантия */}
      <section id="warranty" className="bg-zinc-100 px-6 py-24 text-black">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold tracking-[0.3em] text-zinc-500">
            СЕРВИС
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            Гарантия и поддержка
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
            Мы остаёмся на связи с клиентами и после покупки. Если возникнут
            вопросы по эксплуатации техники GROX, наша команда поможет
            разобраться.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-white p-6">
              <p className="text-3xl">🛡️</p>
              <h3 className="mt-4 text-xl font-black">Гарантия</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Гарантийные условия указаны для каждого товара.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6">
              <p className="text-3xl">💬</p>
              <h3 className="mt-4 text-xl font-black">Поддержка</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Поможем с настройкой и эксплуатацией техники.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6">
              <p className="text-3xl">🔧</p>
              <h3 className="mt-4 text-xl font-black">Сервис</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Помощь при возникновении вопросов после покупки.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* Контакты */}
<section id="contacts" className="bg-white px-6 py-24 text-black">
  <div className="mx-auto max-w-6xl text-center">
    <p className="text-sm font-bold tracking-[0.3em] text-zinc-500">
      КОНТАКТЫ
    </p>

    <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
      Есть вопрос?
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600">
      Свяжитесь с нами — поможем подобрать технику GROX и ответим на вопросы.
    </p>

    {/* Склады и доставка */}
    <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
      <div className="rounded-3xl bg-zinc-100 p-5">
        <p className="text-2xl">📍</p>
        <p className="mt-2 font-black">Склад в Астане</p>
      </div>

      <div className="rounded-3xl bg-zinc-100 p-5">
        <p className="text-2xl">📍</p>
        <p className="mt-2 font-black">Склад в Алматы</p>
      </div>

      <div className="rounded-3xl bg-zinc-100 p-5">
        <p className="text-2xl">🚚</p>
        <p className="mt-2 font-black">
          Доставка по всему Казахстану
        </p>
      </div>
    </div>

    {/* Телефон */}
    <a
      href="tel:+77076761344"
      className="mt-10 block text-3xl font-black sm:text-5xl"
    >
      +7 707 676 13 44
    </a>

    {/* Кнопки */}
    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
      <a
        href="https://wa.me/77076761344"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-green-500 px-8 py-4 font-black text-white transition hover:scale-105"
      >
        Написать в WhatsApp
      </a>

    <a
  href="https://www.instagram.com/grox_kazakhstan"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 px-8 py-4 font-black text-white transition hover:scale-105"
>
  Instagram
</a>

      <a
        href="tel:+77076761344"
        className="rounded-full bg-black px-8 py-4 font-black text-white transition hover:scale-105"
      >
        Позвонить
      </a>
    </div>

     <p className="mt-16 text-sm text-zinc-400">
      GROX • Kazakhstan
    </p>
  </div>
</section>

    </main>
  );
}