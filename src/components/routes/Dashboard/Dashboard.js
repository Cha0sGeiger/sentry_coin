import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import classes from './Dashboard.module.scss';
import { motion } from 'framer-motion';
import { Logo, IconFlexible, IconScalable, IconUserFriendly, ArrowUpIcon } from '../../UI/Icon/index';

import { Menu } from '../../UI/Menu/Menu';
import HeaderAnimation from '../../UI/Animation/HeaderAnimation';
import ModalContact from '../../UI/Modal/ModalContact';

const Dashboard = ({ history }) => {
  const [state, setState] = useState(false);
  const [isShowingModal, setShowingModal] = useState(false);

  const handleSendMessage = () => {
    setShowingModal(!isShowingModal);
  };

  return (
    <div className={classes.max_page_width}>
      <ModalContact
        className={classes.modal}
        open={isShowingModal}
        onClose={() => setShowingModal(!isShowingModal)}
        message={`Your message has been sent. We will get back to you as soon as possible. Thank you!`}
      />
      <section id="header" className={classes.header}>
        <div className={classes.page}>
          <div className={classes.animation_hero}>
            <HeaderAnimation />
          </div>
          <div className={classes.menu_container}>
            <motion.div
              className={classes.logo_container}
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 1.2,
                borderRadius: '100%',
              }}
            >
              <Logo alt="logo" />
            </motion.div>
            <div className={classes.hamburger_menu_container}>
              <div class={`icon-three${state ? ' active-three' : ''}`} onClick={() => setState(!state)}>
                <div class="hamburger hamburger-three"></div>
              </div>

              {/* <MenuIcon height="32px" width="32px" onClick={handleMenu} className={classes.menu_icon} /> */}
            </div>
          </div>
          {state ? <Menu state={state} /> : null}
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
                    <IconFlexible />
                  </div>
                  <h4>Flexible</h4>
                  <p>Built for public or private blockchain networks, customizable to suit your business needs.</p>
                </div>
              </div>
              <div className={classes.icon_list_item}>
                <div className={classes.icon_list_item_content}>
                  <div className={classes.icon_mix}>
                    <IconScalable />
                  </div>
                  <h4>Scalable</h4>
                  <p>Secure processing designed for mass adoption with industry-leading transaction speeds.</p>
                </div>
              </div>
              <div className={classes.icon_list_item}>
                <div className={classes.icon_list_item_content}>
                  <div className={classes.icon_mix}>
                    <IconUserFriendly className={classes.icon} />
                  </div>
                  <h4>User-Friendly</h4>
                  <p>Developer and consumer-friendly design built for practical real-world use cases</p>
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
              <img src={'https://picsum.photos/150'} alt="article" />
              <h4>Announcement</h4>
              <p>
                Occaecat non aute occaecat consequat quis laboris do mollit do nulla. Irure exercitation nostrud labore
                nulla tempor enim culpa adipisicing labore sunt proident non aliquip veniam. Sunt exercitation mollit
                labore sunt excepteur sunt nulla excepteur id aliquip pariatur. Reprehenderit cupidatat est magna
                consectetur fugiat mollit adipisicing nisi laboris eu excepteur et enim. Eu commodo eiusmod pariatur
                excepteur dolor aliqua qui proident aliqua exercitation minim irure officia. Cillum incididunt dolor
                mollit deserunt proident id adipisicing proident velit nostrud. Elit in labore nisi do mollit Lorem ea
                aute.
              </p>
            </article>
            <article>
              <img src={'https://picsum.photos//id/119/150'} alt="article" />
              <h4>Announcement</h4>
              <p>
                Aute sunt proident tempor ut officia sit proident consequat nisi fugiat ad voluptate mollit sint.
                Incididunt consequat veniam excepteur do adipisicing velit ex nulla aliqua sit tempor exercitation
                excepteur. Cupidatat do do adipisicing proident id non occaecat anim cillum aliqua cillum. Dolor commodo
                mollit est laboris amet mollit deserunt eu tempor irure sint. Minim ex amet labore laboris exercitation
                occaecat aliqua deserunt tempor nulla do laborum non tempor.
              </p>
            </article>
            <article>
              <img src={'https://picsum.photos/id/1049/150'} alt="article" />
              <h4>Announcement</h4>
              <p>
                Laborum adipisicing et excepteur irure esse laboris esse cillum proident quis. Veniam sint laborum qui
                exercitation sunt elit consequat amet exercitation sunt. Laboris est enim occaecat aliqua laboris aute
                ad do nisi enim ad. Enim non magna dolore enim incididunt officia. Lorem nulla dolore commodo tempor
                aliquip irure aute eiusmod. Velit excepteur eiusmod labore culpa consectetur.
              </p>
            </article>
            <article>
              <img src={'https://picsum.photos/id/1029/150'} alt="article" />
              <h4>Announcement</h4>
              <p>
                Sit culpa elit esse anim. Sit elit et labore exercitation ea fugiat Lorem duis dolore. Cillum commodo
                velit ut irure. Qui aliqua enim excepteur deserunt proident amet reprehenderit excepteur.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className={classes.footer_section}>
        <footer id="footer" className={classes.footer}>
          <section>
            <div className={classes.newsletter_container}>
              <h1>Newsletter</h1>
              <p>Sign up for new updates from Sentry Network here :</p>
              <button className={classes.newsletter_button} onClick={handleSendMessage}>
                Sign up
              </button>
            </div>
            <div className={classes.footer_separator}>
              <div>
                <hr className={classes.line} />
              </div>
            </div>
          </section>
          <div className={classes.footer_container}>
            <h2>Sentry Network</h2>
            <div className={classes.links_container}>
              <div>
                <h4>Communication</h4>
              </div>
              <a href="#contact">Contact</a>
              <a href="#kiki">FAQ</a>
              <a href="#kiki">Developers</a>
              <a href="#kiki">Careers</a>
            </div>
            <div className={classes.links_container}>
              <div>
                <h4>Company</h4>
              </div>
              <a href="#kiki">Contact</a>
              <a href="#kiki">FAQ</a>
              <a href="#kiki"> Developers</a>
              <a href="#kiki">Careers</a>
            </div>
          </div>
          <a href="#header" className={classes.footer_link}>
            <ArrowUpIcon className={classes.arrow_icon} height="32px" width="32px" alt="menu" />
          </a>
        </footer>
        <div className={classes.footer_date_container}>
          <p className={classes.date_rights}>&copy; {new Date().getFullYear()} Sentry, Inc. All rights reserved</p>
        </div>
      </section>
    </div>
  );
};

export default withRouter(Dashboard);
