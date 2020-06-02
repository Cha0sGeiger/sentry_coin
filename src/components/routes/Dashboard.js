import React, { useState } from "react";
import classes from "./Dashboard.module.scss";
import MenuIcon from "../../media/icons/menu.png";
import CloseIcon from "../../media/icons/close.png";
import Logo from "../../media/icons/logo.png";
import Icon from "../../media/icons/icon.svg";
import Icon2 from "../../media/icons/icon2.svg";
import Icon3 from "../../media/icons/icon3.svg";
import ArrowUpIcon from "../../media/icons/up-arrow.svg";
import { Menu } from "../UI/Menu";
import HeaderAnimation from "../../components/UI/Animation/HeaderAnimation";

export const Dashboard = () => {
  const [isOpen, setMenuOpen] = useState(false);

  return (
    <div className={classes.max_page_width}>
      <section id="header" className={classes.header}>
        <div className={classes.page}>
          <div className={classes.animation_hero}>
            <HeaderAnimation />
          </div>
          <div className={classes.menu_container}>
            <div className={classes.logo_container}>
              <img src={Logo} alt="logo" />
            </div>
            <div className={classes.hamburger_menu_container}>
              {isOpen ? (
                <img
                  src={CloseIcon}
                  height="32px"
                  width="32px"
                  alt="menu"
                  onClick={() => {
                    setMenuOpen(!isOpen);
                  }}
                  className={classes.menu_icon}
                />
              ) : (
                <img
                  src={MenuIcon}
                  height="32px"
                  width="32px"
                  alt="menu"
                  onClick={() => {
                    setMenuOpen(!isOpen);
                  }}
                  className={classes.menu_icon}
                />
              )}
            </div>
          </div>
          {isOpen ? <Menu /> : null}
        </div>
      </section>
      <section className={classes.section_front_panel}>
        <div className={classes.icon_container}>
          <div className={classes.icons}>
            <h2>Features</h2>
            <div className={classes.container}>
              <div className={classes.icon_list_item}>
                <div className={classes.icon_list_item_content}>
                  <div className={classes.icon_mix}>
                    <img src={Icon3} alt="icons" />
                  </div>
                  <h4>Flexible</h4>
                  <p>
                    Built for public or private blockchain networks,
                    customizable to suit your business needs.
                  </p>
                </div>
              </div>
              <div className={classes.icon_list_item}>
                <div className={classes.icon_list_item_content}>
                  <div className={classes.icon_mix}>
                    <img src={Icon} alt="icons" />
                  </div>
                  <h4>Scalable</h4>
                  <p>
                    Secure processing designed for mass adoption with
                    industry-leading transaction speeds.
                  </p>
                </div>
              </div>
              <div className={classes.icon_list_item}>
                <div className={classes.icon_list_item_content}>
                  <div className={classes.icon_mix}>
                    <img src={Icon2} className={classes.icon} alt="icons" />
                  </div>
                  <h4>User-Friendly</h4>
                  <p>
                    Developer and consumer-friendly design built for practical
                    real-world use cases
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.news_section}>
        <div className={classes.news_container}>
          <h2>Latest news</h2>
          <div className={classes.articles}>
            <article className={classes.articles_one}>
              <img src={"https://via.placeholder.com/150"} alt="article" />
              <h4>Announcement</h4>
              <p>
                Occaecat non aute occaecat consequat quis laboris do mollit do
                nulla. Irure exercitation nostrud labore nulla tempor enim culpa
                adipisicing labore sunt proident non aliquip veniam. Sunt
                exercitation mollit labore sunt excepteur sunt nulla excepteur
                id aliquip pariatur. Reprehenderit cupidatat est magna
                consectetur fugiat mollit adipisicing nisi laboris eu excepteur
                et enim. Eu commodo eiusmod pariatur excepteur dolor aliqua qui
                proident aliqua exercitation minim irure officia. Cillum
                incididunt dolor mollit deserunt proident id adipisicing
                proident velit nostrud. Elit in labore nisi do mollit Lorem ea
                aute.
              </p>
            </article>
            <article>
              <img src={"https://via.placeholder.com/150"} alt="article" />
              <h4>Announcement</h4>
              <p>
                Aute sunt proident tempor ut officia sit proident consequat nisi
                fugiat ad voluptate mollit sint. Incididunt consequat veniam
                excepteur do adipisicing velit ex nulla aliqua sit tempor
                exercitation excepteur. Cupidatat do do adipisicing proident id
                non occaecat anim cillum aliqua cillum. Dolor commodo mollit est
                laboris amet mollit deserunt eu tempor irure sint. Minim ex amet
                labore laboris exercitation occaecat aliqua deserunt tempor
                nulla do laborum non tempor.
              </p>
            </article>
            <article>
              <img src={"https://via.placeholder.com/150"} alt="article" />
              <h4>Announcement</h4>
              <p>
                Laborum adipisicing et excepteur irure esse laboris esse cillum
                proident quis. Veniam sint laborum qui exercitation sunt elit
                consequat amet exercitation sunt. Laboris est enim occaecat
                aliqua laboris aute ad do nisi enim ad. Enim non magna dolore
                enim incididunt officia. Lorem nulla dolore commodo tempor
                aliquip irure aute eiusmod. Velit excepteur eiusmod labore culpa
                consectetur.
              </p>
            </article>
            <article>
              <img src={"https://via.placeholder.com/150"} alt="article" />
              <h4>Announcement</h4>
              <p>
                Sit culpa elit esse anim. Sit elit et labore exercitation ea
                fugiat Lorem duis dolore. Cillum commodo velit ut irure. Qui
                aliqua enim excepteur deserunt proident amet reprehenderit
                excepteur.
              </p>
            </article>
          </div>
        </div>
      </section>
      <footer id="footer" className={classes.footer}>
        <div className={classes.footer_container}>
          <h2>Sentry Network</h2>
          <div className={classes.links_container}>
            <a>Contact</a>
            <a>FAQ</a>
            <a>Developers</a>
            <a>Careers</a>
          </div>
        </div>
        <a href="#header" className={classes.footer_link}>
          <img
            className={classes.arrow_icon}
            src={ArrowUpIcon}
            height="32px"
            width="32px"
            alt="menu"
          />
        </a>
      </footer>
    </div>
  );
};
