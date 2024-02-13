export default function Home() {
  return (
    <main className="main">
      <section className="banner">
        <div className="banner__description">
          <h1 className="banner__title">
            Портал инди-игр от&nbsp;студентов Яндекс Практикума
          </h1>
          <div className="banner__text-block">
            <p className="banner__text">
              Студенты курсов разрабатывают свои игры на Unity, здесь мы их
              публикуем. Вы можете играть прямо на сайте. А если у вас есть
              аккаунт пользователя — получаете возможность голосовать за игры.
            </p>
          </div>
          <a href="#popular" className="button banner__link">
            Смотреть игры
          </a>
        </div>
        <img
          src="/images/banner-illustration.jpg"
          alt="Рука, утопленная в желтом фоне"
          className="banner__image"
        />
      </section>
      <section className="list-section">
        <h2 className="list-section__title" id="popular">
          Популярное
        </h2>
        <ul className="cards-list">
          <li className="cards-list__item">
            <a href="/game-id.html" className="card-list__link">
              <article className="card">
                <img
                  src="https://code.s3.yandex.net/teens/pindie-games/cristal-keeper/cover.png"
                  alt=""
                  className="card__image"
                />
                <div className="card__content-block">
                  <h3 className="card__title">Crystal Kepper</h3>
                  <p className="card__description">
                    Управляйте боевым дроном и в течении 5 минут любой ценой
                    защищайте кристалл от враждебных космо-слизней.
                  </p>
                  <div className="card__info-container">
                    <p className="card__author">
                      Автор: <span className="card__accent">Lonely Baobab</span>
                    </p>
                    <p className="card__votes">
                      Голосов на сайте: <span className="card__accent">20</span>
                    </p>
                  </div>
                </div>
              </article>
            </a>
          </li>
          <li className="cards-list__item">
            <a href="/game-id.html" className="card-list__link">
              <article className="card">
                <img
                  src="https://code.s3.yandex.net/teens/pindie-games/dangeons-n-caves-prologue/cover.png"
                  alt=""
                  className="card__image"
                />
                <div className="card__content-block">
                  <h3 className="card__title">Dangeons'n'Caves. Prologue</h3>
                  <p className="card__description">
                    Безымянный герой исследует пещеры и подземелья, чтобы найти
                    больше информации о себе.
                  </p>
                  <div className="card__info-container">
                    <p className="card__author">
                      Автор: <span className="card__accent">F-Style</span>
                    </p>
                    <p className="card__votes">
                      Голосов на сайте: <span className="card__accent">10</span>
                    </p>
                  </div>
                </div>
              </article>
            </a>
          </li>
          <li className="cards-list__item">
            <a href="/game-id.html" className="card-list__link">
              <article className="card">
                <img
                  src="https://code.s3.yandex.net/teens/pindie-games/defence-of-crystal/cover.png"
                  alt=""
                  className="card__image"
                />
                <div className="card__content-block">
                  <h3 className="card__title">Defence of Crystal</h3>
                  <p className="card__description">
                    Вы играете за волшебника, последнюю надежду Земли, которую
                    поглотил мрак... Вы должны любой ценой защищать магический
                    кристалл, ведь это единственное, что сможет вернуть всё на
                    круги своя, но полчища монстров так и норовят его
                    уничтожить. Ваша задача уничтожить все кладбища.
                  </p>
                  <div className="card__info-container">
                    <p className="card__author">
                      Автор: <span className="card__accent">MastWe</span>
                    </p>
                    <p className="card__votes">
                      Голосов на сайте: <span className="card__accent">20</span>
                    </p>
                  </div>
                </div>
              </article>
            </a>
          </li>
        </ul>
      </section>
      <section className="list-section">
        <h2 className="list-section__title" id="new">
          Новинки
        </h2>
        <ul className="cards-list">
          <li className="cards-list__item">
            <a href="/game-id.html" className="card-list__link">
              <article className="card">
                <img
                  src="https://code.s3.yandex.net/teens/pindie-games/go-away/cover.jpg"
                  alt=""
                  className="card__image"
                />
                <div className="card__content-block">
                  <h3 className="card__title">Go Away</h3>
                  <p className="card__description">
                    Цель игры: добраться до конца уровня, не столкнувшись с
                    встречными автомобилями.Дополнительные возможности: в игре
                    можно проезжать по увеличивающей скорость стрелке, которые
                    улучшают характеристики машинки в скорости. "Прыжок"
                    позволяет машинке перепрыгивать препятствие.
                  </p>
                  <div className="card__info-container">
                    <p className="card__author">
                      Автор: <span className="card__accent">Mahisto</span>
                    </p>
                    <p className="card__votes">
                      Голосов на сайте: <span className="card__accent">20</span>
                    </p>
                  </div>
                </div>
              </article>
            </a>
          </li>
          <li className="cards-list__item">
            <a href="/game-id.html" className="card-list__link">
              <article className="card">
                <img
                  src="https://code.s3.yandex.net/teens/pindie-games/gunner/cover.png"
                  alt=""
                  className="card__image"
                />
                <div className="card__content-block">
                  <h3 className="card__title">G.U.N.N.E.R.</h3>
                  <p className="card__description">
                    Ваша задача — отбиваться от бесконечных волн врагов, которых
                    будет становится все больше и больше, как долго вы сможете
                    продержаться?
                  </p>
                  <div className="card__info-container">
                    <p className="card__author">
                      Автор: <span className="card__accent">IDKWIAm</span>
                    </p>
                    <p className="card__votes">
                      Голосов на сайте: <span className="card__accent">10</span>
                    </p>
                  </div>
                </div>
              </article>
            </a>
          </li>
          <li className="cards-list__item">
            <a href="/game-id.html" className="card-list__link">
              <article className="card">
                <img
                  src="https://code.s3.yandex.net/teens/pindie-games/space-terror/cover.png"
                  alt=""
                  className="card__image"
                />
                <div className="card__content-block">
                  <h3 className="card__title">Space Terror</h3>
                  <p className="card__description">
                    Летите сквозь космос и уничтожайте все на своем пути!
                    Пролетите как можно дальше!
                  </p>
                  <div className="card__info-container">
                    <p className="card__author">
                      Автор: <span className="card__accent">IDKWIAm</span>
                    </p>
                    <p className="card__votes">
                      Голосов на сайте: <span className="card__accent">20</span>
                    </p>
                  </div>
                </div>
              </article>
            </a>
          </li>
          <li className="cards-list__item">
            <a href="/game-id.html" className="card-list__link">
              <article className="card">
                <img
                  src="https://code.s3.yandex.net/teens/pindie-games/square-slayer/cover.png"
                  alt=""
                  className="card__image"
                />
                <div className="card__content-block">
                  <h3 className="card__title">Square Slayer</h3>
                  <p className="card__description">
                    circle shoot square heal levelup crash game.
                  </p>
                  <div className="card__info-container">
                    <p className="card__author">
                      Автор: <span className="card__accent">niclan</span>
                    </p>
                    <p className="card__votes">
                      Голосов на сайте: <span className="card__accent">10</span>
                    </p>
                  </div>
                </div>
              </article>
            </a>
          </li>
        </ul>
      </section>
      <section className="promo">
        <div className="promo__description-block">
          <h2 className="promo__title">Твой промо-код</h2>
          <p className="promo__description">
            Скидка на все курсы Яндекс Практикума для пользователей нашего
            сайта!
          </p>
          <button className="button promo__button">Получить код</button>
        </div>
        <img
          src="/images/promo-illustration.svg"
          alt="Собака"
          className="promo__image"
        />
      </section>
    </main>
  );
}
