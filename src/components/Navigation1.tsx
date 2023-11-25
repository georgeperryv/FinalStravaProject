import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navigation1.module.css";

type Navigation1Type = {
  onClose?: () => void;
};

const Navigation1: FunctionComponent<Navigation1Type> = ({ onClose }) => {
  const navigate = useNavigate();

  const onNavLinkContainersubcategoory18Click = useCallback(() => {
    navigate("/library-home");
  }, [navigate]);

  const onNavLinkContainersubcategoory19Click = useCallback(() => {
    navigate("/savedworkoutpage2");
  }, [navigate]);

  return (
    <div className={styles.navigation}>
      <div className={styles.pagewrapper}>
        <div className={styles.pagecontainer}>
          <div className={styles.searchbarcontainer}>
            <div className={styles.dropdownfield}>
              <div className={styles.dropdown}>
                <div className={styles.allInstructors}>Athletes</div>
                <img
                  className={styles.dropdownIcon}
                  alt="dropdown"
                  src="/imgs/icons/sm/black/dropdown.svg"
                />
              </div>
            </div>
            <div className={styles.searchbar}>
              <div className={styles.search}>Search</div>
              <img
                className={styles.iconwrapper}
                alt="search"
                src="/imgs/icons/med/gray/search.svg"
              />
            </div>
          </div>
          <div className={styles.navcontainer}>
            <div className={styles.pagecontainer}>
              <div className={styles.navlinkcontainercategory}>
                <b className={styles.dashboard}>Dashboard</b>
              </div>
              <div className={styles.navlinkcontainersubcategoory}>
                <b className={styles.dashboard}>Activity Feed</b>
              </div>
              <div className={styles.navlinkcontainersubcategoory}>
                <div className={styles.allInstructors}>My Segments</div>
              </div>
              <div className={styles.navlinkcontainersubcategoory}>
                <div className={styles.allInstructors}>My Routes</div>
              </div>
              <div className={styles.subscriberonlylinks}>
                <div className={styles.subscriptionsectionheader}>
                  <div className={styles.subscription}>SUBSCRIPTION</div>
                </div>
                <div className={styles.navlinkcontainersubcategoory3}>
                  <div className={styles.allInstructors}>My Goals</div>
                </div>
                <div className={styles.navlinkcontainersubcategoory3}>
                  <div className={styles.allInstructors}>Heatmaps</div>
                </div>
              </div>
            </div>
            <div className={styles.pagecontainer}>
              <div className={styles.navlinkcontainercategory1}>
                <b className={styles.dashboard}>Training</b>
              </div>
              <div className={styles.navlinkcontainersubcategoory}>
                <div className={styles.allInstructors}>Training Calendar</div>
              </div>
              <div className={styles.navlinkcontainersubcategoory}>
                <div className={styles.allInstructors}>My Activities</div>
              </div>
              <div className={styles.subscriberonlylinks}>
                <div className={styles.subscriptionsectionheader}>
                  <div className={styles.subscription}>SUBSCRIPTION</div>
                </div>
                <div className={styles.navlinkcontainersubcategoory3}>
                  <div className={styles.allInstructors}>Training Log</div>
                </div>
                <div className={styles.navlinkcontainersubcategoory3}>
                  <div className={styles.allInstructors}>Training Plans</div>
                </div>
                <div className={styles.navlinkcontainersubcategoory3}>
                  <div className={styles.allInstructors}>Power Curve</div>
                </div>
                <div className={styles.navlinkcontainersubcategoory3}>
                  <div
                    className={styles.allInstructors}
                  >{`Fitness & Freshness`}</div>
                </div>
              </div>
            </div>
            <div className={styles.pagecontainer}>
              <div className={styles.navlinkcontainercategory1}>
                <b className={styles.dashboard}>Explore</b>
              </div>
              <div className={styles.navlinkcontainersubcategoory}>
                <div className={styles.allInstructors}>Segment Explore</div>
              </div>
              <div className={styles.navlinkcontainersubcategoory}>
                <div className={styles.allInstructors}>Segment Search</div>
              </div>
              <div className={styles.navlinkcontainersubcategoory}>
                <div className={styles.allInstructors}>Athlete Search</div>
              </div>
              <div className={styles.navlinkcontainersubcategoory}>
                <div className={styles.allInstructors}>Clubs</div>
              </div>
              <div className={styles.navlinkcontainersubcategoory}>
                <div className={styles.allInstructors}>Apps</div>
              </div>
              <div className={styles.subscriberonlylinks}>
                <div className={styles.subscriptionsectionheader}>
                  <div className={styles.subscription}>SUBSCRIPTION</div>
                </div>
                <div className={styles.navlinkcontainersubcategoory3}>
                  <div className={styles.allInstructors}>Create Route</div>
                </div>
                <div className={styles.navlinkcontainersubcategoory3}>
                  <div className={styles.allInstructors}>Subscriber Perks</div>
                </div>
              </div>
            </div>
            <div className={styles.challengesnavlinks}>
              <div className={styles.navlinkcontainercategory3}>
                <b className={styles.dashboard}>Challenges</b>
              </div>
            </div>
            <div className={styles.challengesnavlinks}>
              <div className={styles.navlinkcontainercategory4}>
                <b className={styles.dashboard}>StravaFit</b>
              </div>
              <div className={styles.subscriberonlylinks3}>
                <div className={styles.subscriptionsectionheader}>
                  <div className={styles.subscription}>SUBSCRIPTION</div>
                </div>
                <div
                  className={styles.navlinkcontainersubcategoory18}
                  onClick={onNavLinkContainersubcategoory18Click}
                >
                  <div className={styles.allInstructors}>Explore Workouts</div>
                </div>
                <div
                  className={styles.navlinkcontainersubcategoory18}
                  onClick={onNavLinkContainersubcategoory19Click}
                >
                  <div className={styles.allInstructors}>My Saved Workouts</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.usercontainer}>
            <div className={styles.usermenu}>
              <div className={styles.navlinkcontaineruser}>
                <img
                  className={styles.userprofileimageIcon}
                  alt="profile picture"
                  src="/imgs/photos/user_profile_picture.png"
                />
                <b className={styles.allInstructors}>Britt Shook</b>
              </div>
            </div>
            <div className={styles.usernavlinks}>
              <div className={styles.navlinkcontainersubcategoory20}>
                <div className={styles.allInstructors}>Find Friends</div>
              </div>
              <div className={styles.navlinkcontainersubcategoory}>
                <div className={styles.allInstructors}>My Profile</div>
              </div>
              <div className={styles.navlinkcontainersubcategoory}>
                <div className={styles.allInstructors}>Settings</div>
              </div>
              <div className={styles.navlinkcontainersubcategoory}>
                <div className={styles.allInstructors}>Log Out</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navbars}>
        <div className={styles.navbarwrapper}>
          <div className={styles.navbarcontainermobiletablet}>
            <img
              className={styles.stravaLogoIcon}
              alt="logo"
              src="/imgs/logo/logo_orange.svg"
            />
            <img
              className={styles.menuIcon}
              alt="close"
              src="/imgs/icons/med/gray/close.svg"
              onClick={onClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation1;
