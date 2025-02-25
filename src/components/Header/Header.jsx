import Container from "../Container/Container";
import { Link } from "react-router-dom";
import Button from "../Forms/Button/Button";
import Select from "../Forms/Select/Select";
import HeaderMobile from "./Header-mobile";
import { useState, useEffect } from "react";
import { carCatalog } from "../../data/data";
import { carUsed } from "../../data/data";
import { credit } from "../../data/data";
import { specialOffer } from "../../data/data";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(null);
  
  const handleMobile = () => {
    setMobileMenu(!mobileMenu);
  };

  useEffect(() => {
    const updateWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    updateWidth();

    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__top">
         <Container>
          {screenWidth > 768 && (
            <div className="header__top-content">
              <div className="header__top-location">
                <svg>
                  <use href="sprite.svg#location"></use>
                </svg>

                <span className="header__top-location-text">
                  Украина, Одесса, Ак.Филатова, 2 к.1
                </span>
              </div>

              <div className="header__top-time">
                <svg>
                  <use href="sprite.svg#time"></use>
                </svg>
                <span className="header__top-location-text">
                  Время работы: c 08:00 до 21:00
                </span>
              </div>

              <div className="header__top-social">
                <svg>
                  <use href="sprite.svg#phone"></use>
                </svg>
                <span className="header__top-location-text">Whatsapp</span>
              </div>
            </div>
          )}
            {screenWidth < 768 && (
              <div className="header__main-call">
                <span className="header__main-call-number">063-974-05-86</span>

                <div className="header__main-call-text">
                  <svg>
                    <use href="sprite.svg#mob-phone"></use>
                  </svg>

                  <span>Позвонить</span>
                </div>
              </div>
            )}
          </Container>
       </div>

      <Container>
        <div className="header__main">
          <div className="header__main-left">
            <div className="header__main-burger" onClick={handleMobile}>
              <span className="header__main-burger-top"></span>

              <span className="header__main-burger-top"></span>

              <span className="header__main-burger-top"></span>
            </div>

            <div className="header__main-logo">
              <Link href="/">
                <svg>
                  <use href="sprite.svg#logo"></use>
                </svg>
              </Link>

              <div className="header__main-logo-text">
                <span className="header__main-logo-text-highlight">10 лет</span>

                <span>превосходим ваши ожидания</span>
              </div>
            </div>
          </div>

          <div className="header__main-right">
            {screenWidth > 1150 && (
              <div className="header__main-navigation">
                <Link className={`header__main-navigation-item active`}>
                  <span>Подбор авто</span>
                </Link>

                <Link className="header__main-navigation-item">
                  <span>О компании</span>
                </Link>

                <Link className="header__main-navigation-item">
                  <span>Техцентр</span>
                </Link>

                <Link>
                  <span className="header__main-navigation-item">Отзывы</span>
                </Link>

                <Link className="header__main-navigation-item">
                  <span>Контакты</span>
                </Link>
              </div>
            )}

            <div className="header__main-phone">
              {screenWidth > 768 && (
                <div className="header__main-phone-top">
                  <Link>
                    <svg>
                      <use href="sprite.svg#red-phone"></use>
                    </svg>

                    <span>+7 (800) 551-94-31</span>
                  </Link>
                </div>
              )}

              <span className="header__main-phone-bottom">
                +7 (495) 292-18-67
              </span>
            </div>
            {screenWidth > 768 && (
              <Button className="header__main-btn">Позвонить</Button>
            )}
          </div>
        </div>
        </Container>

        <Container>
        <div className="header__bottom">
          <div className="header__bottom-category">
            <Select
              value={carCatalog}
              img="select-arrow"
              className="header__bottom-category-item"
              title="Каталог товаров"
            />
          </div>

          <div className="header__bottom-category">
            <Select
              value={carUsed}
              img="select-arrow"
              className="header__bottom-category-item"
              title = 'Авто с пробегом'
            />
          </div>

          <div className="header__bottom-category">
            <Select
              value={credit}
              img="select-arrow"
              className="header__bottom-category-item"
              title="Кредит и рассрочка"
            />
          </div>

          <div className="header__bottom-category">
            <Select
              value={specialOffer}
              img="select-arrow"
              className="header__bottom-category-item"
              title="Спецпредложение"
            />
          </div>

          <div className="header__bottom-category">
            <Select
              value={carCatalog}
              className="header__bottom-category-item"
              title="Такси в кредит"
            />
          </div>

          <div className="header__bottom-actions">
            <svg>
              <use href="sprite.svg#fav"></use>
            </svg>

            <svg>
              <use href="sprite.svg#filter"></use>
            </svg>

            <svg>
              <use href="sprite.svg#search"></use>
            </svg>
          </div>
        </div>
      </Container>

      <HeaderMobile
        className={mobileMenu && "show"}
        handleMenu={handleMobile}
      />
    </header>
  );
};
export default Header;
