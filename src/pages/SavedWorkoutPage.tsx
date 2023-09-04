import { FunctionComponent, useState, useRef, useCallback } from "react";
import ExpandedMenuComponent from "/";
import PortalPopup from "../components/PortalPopup";
import Navigation1 from "../components/Navigation1";
import FilterDropdownComponent from "../components/FilterDropdownComponent";
import { useNavigate } from "react-router-dom";
import styles from "./SavedWorkoutPage.module.css";
const SavedWorkoutPage: FunctionComponent = () => {
  const navLinksContainer4Ref = useRef<HTMLDivElement>(null);
  const [isExpandedMenuComponentPopupOpen, setExpandedMenuComponentPopupOpen] =
    useState(false);
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const [isNavigationPopupOpen, setNavigationPopupOpen] = useState(false);
  const filterButtonContainerRef = useRef<HTMLDivElement>(null);
  const [
    isFilterDropdownComponentPopupOpen,
    setFilterDropdownComponentPopupOpen,
  ] = useState(false);
  const navigate = useNavigate();

  const openExpandedMenuComponentPopup = useCallback(() => {
    setExpandedMenuComponentPopupOpen(true);
  }, []);

  const closeExpandedMenuComponentPopup = useCallback(() => {
    setExpandedMenuComponentPopupOpen(false);
  }, []);

  const openNavigationPopup = useCallback(() => {
    setNavigationPopupOpen(true);
  }, []);

  const closeNavigationPopup = useCallback(() => {
    setNavigationPopupOpen(false);
  }, []);

  const openFilterDropdownComponentPopup = useCallback(() => {
    setFilterDropdownComponentPopupOpen(true);
  }, []);

  const closeFilterDropdownComponentPopup = useCallback(() => {
    setFilterDropdownComponentPopupOpen(false);
  }, []);

  const onPrimaryButtonsdefaultContainerClick = useCallback(() => {
    navigate("/workoutdetails");
  }, [navigate]);

  const onPrimaryButtonsdefaultContainer1Click = useCallback(() => {
    navigate("/workoutdetails");
  }, [navigate]);

  const onPrimaryButtonsdefaultContainer2Click = useCallback(() => {
    navigate("/workoutdetails");
  }, [navigate]);

  const onPrimaryButtonsdefaultContainer3Click = useCallback(() => {
    navigate("/workoutdetails");
  }, [navigate]);

  const onPrimaryButtonsdefaultContainer4Click = useCallback(() => {
    navigate("/workoutdetails");
  }, [navigate]);

  const onPrimaryButtonsdefaultContainer5Click = useCallback(() => {
    navigate("/workoutdetails");
  }, [navigate]);

  const onPrimaryButtonsdefaultContainer6Click = useCallback(() => {
    navigate("/workoutdetails");
  }, [navigate]);

  const onPrimaryButtonsdefaultContainer7Click = useCallback(() => {
    navigate("/workoutdetails");
  }, [navigate]);

  return (
    <>
      <div className={styles.savedworkoutpage}>
        <div className={styles.navbarcontainerdesktop}>
          <div className={styles.navmenu}>
            <button className={styles.logoandsearch}>
              <img
                className={styles.stravaLogoIcon}
                alt=""
                src="/stravalogo5.svg"
              />
              <div className={styles.searchiconwrapper}>
                <img className={styles.searchIcon} alt="" src="/search1.svg" />
              </div>
            </button>
            <div className={styles.navlinks}>
              <div>
                <div className={styles.pagetab}>
                  <div className={styles.pagetablabel}>
                    <div className={styles.label}>Dashboard</div>
                    <img className={styles.dropdownIcon} alt="" />
                  </div>
                  <div className={styles.activeindicator} />
                </div>
              </div>
              <div className={styles.recommendedsection}>
                <div className={styles.pagetab}>
                  <div className={styles.pagetablabel}>
                    <div className={styles.label}>Training</div>
                    <img
                      className={styles.dropdownIcon}
                      alt=""
                      src="/dropdown2.svg"
                    />
                  </div>
                  <div className={styles.activeindicator} />
                </div>
              </div>
              <div className={styles.recommendedsection}>
                <div className={styles.pagetab}>
                  <div className={styles.pagetablabel}>
                    <div className={styles.label}>Explore</div>
                    <img
                      className={styles.dropdownIcon}
                      alt=""
                      src="/dropdown2.svg"
                    />
                  </div>
                  <div className={styles.activeindicator} />
                </div>
              </div>
              <div className={styles.recommendedsection}>
                <div className={styles.pagetab}>
                  <div className={styles.pagetablabel}>
                    <div className={styles.label}>Challenges</div>
                    <img
                      className={styles.dropdownIcon3}
                      alt=""
                      src="/dropdown2.svg"
                    />
                  </div>
                  <div className={styles.activeindicator} />
                </div>
              </div>
              <div
                className={styles.navlinks4}
                ref={navLinksContainer4Ref}
                onClick={openExpandedMenuComponentPopup}
              >
                <div className={styles.pagetab}>
                  <div className={styles.pagetablabel4}>
                    <b className={styles.label}>StravaFit</b>
                    <img
                      className={styles.dropdownIcon}
                      alt=""
                      src="/dropdown3.svg"
                    />
                  </div>
                  <div className={styles.activeindicator4} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.usermenu}>
            <div className={styles.notificationsnavitem}>
              <img className={styles.bellIcon} alt="" src="/bell2.svg" />
            </div>
            <div className={styles.profilenavitem}>
              <img
                className={styles.userprofileimageIcon}
                alt=""
                src="/-userprofileimage1@2x.png"
              />
              <img
                className={styles.dropdownIcon}
                alt=""
                src="/dropdown4.svg"
              />
            </div>
            <div className={styles.notificationsnavitem}>
              <img className={styles.searchIcon} alt="" src="/add.svg" />
            </div>
            <div
              className={styles.menu}
              ref={menuContainerRef}
              onClick={openNavigationPopup}
            >
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
          </div>
        </div>
        <div className={styles.pagewrapper}>
          <div className={styles.pagecontainer}>
            <div className={styles.header}>
              <b className={styles.mySavedWorkouts}>My Saved Workouts</b>
            </div>
            <div className={styles.sortandfilter}>
              <div className={styles.filterItems}>
                <button className={styles.activitytag}>
                  <div className={styles.run}>
                    <img className={styles.runIcon} alt="" src="/run7.svg" />
                  </div>
                  <div className={styles.run1}>Run</div>
                </button>
                <button className={styles.activitytag1}>
                  <img className={styles.rideIcon} alt="" src="/ride1.svg" />
                  <div className={styles.run1}>Ride</div>
                </button>
                <button className={styles.activitytag1}>
                  <img className={styles.rideIcon} alt="" src="/strength.svg" />
                  <div className={styles.run1}>Strength</div>
                </button>
                <button className={styles.activitytag}>
                  <img className={styles.rideIcon} alt="" src="/yoga1.svg" />
                  <div className={styles.run1}>Yoga</div>
                </button>
                <button className={styles.activitytag1}>
                  <img className={styles.rideIcon} alt="" src="/hiit1.svg" />
                  <div className={styles.run1}>HIIT</div>
                </button>
              </div>
              <div className={styles.sortandfilterChild} />
              <div className={styles.filterDropdownContainer}>
                <div
                  className={styles.filterbutton}
                  ref={filterButtonContainerRef}
                  onClick={openFilterDropdownComponentPopup}
                >
                  <img className={styles.filterIcon} alt="" src="/filter.svg" />
                </div>
              </div>
            </div>
            <div className={styles.libraryresults}>
              <div className={styles.recommendedsection}>
                <div className={styles.cards}>
                  <div className={styles.grid}>
                    <div className={styles.col}>
                      <div className={styles.workoutcard}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/zainspeed1@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Speed Run with Zain
                            </b>
                            <div className={styles.textHereText}>
                              This beginner-friendly speed run will improve your
                              strength through short and long intervals
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <div className={styles.run}>
                                  <img
                                    className={styles.runIcon}
                                    alt=""
                                    src="/run8.svg"
                                  />
                                </div>
                                <div className={styles.label}>2.5 mi</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.rideIcon}
                                  alt=""
                                  src="/difficulty2.svg"
                                />
                                <div className={styles.label}>Easy</div>
                              </div>
                            </div>
                            <div
                              className={styles.primarybuttonsdefault}
                              onClick={onPrimaryButtonsdefaultContainerClick}
                            >
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/zoeyoga@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Restorative Yoga with Zoe
                            </b>
                            <div className={styles.textHereText}>
                              Wind down with a calming yoga session that
                              includes gentle and simple full body stretches for
                              relaxation
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.rideIcon}
                                  alt=""
                                  src="/time3.svg"
                                />
                                <div className={styles.label}>50 min</div>
                              </div>
                              <div className={styles.statssmall3}>
                                <img
                                  className={styles.rideIcon}
                                  alt=""
                                  src="/difficulty3.svg"
                                />
                                <div className={styles.label}>Easy</div>
                              </div>
                            </div>
                            <div
                              className={styles.primarybuttonsdefault}
                              onClick={onPrimaryButtonsdefaultContainer1Click}
                            >
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/marionrun@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Recovery Run with Marion
                            </b>
                            <div className={styles.textHereText}>
                              Recharge and destress in 40 minutes – move at a
                              comfortable pace to aid recovery and prevent
                              injury
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.rideIcon}
                                  alt=""
                                  src="/time4.svg"
                                />
                                <div className={styles.label}>40 min</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.rideIcon}
                                  alt=""
                                  src="/difficulty4.svg"
                                />
                                <div className={styles.label}>Easy</div>
                              </div>
                            </div>
                            <div
                              className={styles.primarybuttonsdefault}
                              onClick={onPrimaryButtonsdefaultContainer2Click}
                            >
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard}>
                        <div className={styles.workoutmediumrun2}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/treycity@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Speed Run with Trey
                            </b>
                            <div className={styles.textHereText}>
                              These high intensity intervals are designed to
                              push you to your limits and test your speed and
                              endurance
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <div className={styles.run}>
                                  <img
                                    className={styles.runIcon}
                                    alt=""
                                    src="/run9.svg"
                                  />
                                </div>
                                <div className={styles.label}>3.0 mi</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.rideIcon}
                                  alt=""
                                  src="/difficulty5.svg"
                                />
                                <div className={styles.label}>Hard</div>
                              </div>
                            </div>
                            <div
                              className={styles.primarybuttonsdefault}
                              onClick={onPrimaryButtonsdefaultContainer3Click}
                            >
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/mariecore@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo4}>
                          <div className={styles.details}>
                            <b
                              className={styles.sampleCard}
                            >{`Core & Obliques with Marie`}</b>
                            <div className={styles.textHereText4}>
                              Get ready for a jam-packed core workout that will
                              make you feel the burn
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.rideIcon}
                                  alt=""
                                  src="/time1.svg"
                                />
                                <div className={styles.label}>15 min</div>
                              </div>
                              <div className={styles.statssmall3}>
                                <img
                                  className={styles.rideIcon}
                                  alt=""
                                  src="/difficulty2.svg"
                                />
                                <div className={styles.label}>Easy</div>
                              </div>
                            </div>
                            <div
                              className={styles.primarybuttonsdefault}
                              onClick={onPrimaryButtonsdefaultContainer4Click}
                            >
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/image-11@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Power Yoga with Andrea
                            </b>
                            <div className={styles.textHereText}>
                              Challenge your strength, flexibility, and
                              discipline in this 30-minute flow focused on the
                              niyama of tapas
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.rideIcon}
                                  alt=""
                                  src="/time3.svg"
                                />
                                <div className={styles.label}>30 min</div>
                              </div>
                              <div className={styles.statssmall3}>
                                <img
                                  className={styles.rideIcon}
                                  alt=""
                                  src="/difficulty3.svg"
                                />
                                <div className={styles.label}>Easy</div>
                              </div>
                            </div>
                            <div
                              className={styles.primarybuttonsdefault}
                              onClick={onPrimaryButtonsdefaultContainer5Click}
                            >
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/sammieglutes@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo4}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Glute Burn with Sammie
                            </b>
                            <div className={styles.textHereText4}>
                              Activate and strengthen your glute muscles in this
                              challenging 20-minute routine
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.rideIcon}
                                  alt=""
                                  src="/time4.svg"
                                />
                                <div className={styles.label}>20 min</div>
                              </div>
                              <div className={styles.statssmall3}>
                                <img
                                  className={styles.rideIcon}
                                  alt=""
                                  src="/difficulty4.svg"
                                />
                                <div className={styles.label}>Easy</div>
                              </div>
                            </div>
                            <div
                              className={styles.primarybuttonsdefault}
                              onClick={onPrimaryButtonsdefaultContainer6Click}
                            >
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.workoutcard}>
                        <div className={styles.workoutmediumrun}>
                          <img
                            className={styles.zainspeedIcon}
                            alt=""
                            src="/gabriellahill@2x.png"
                          />
                        </div>
                        <div className={styles.cardinfo}>
                          <div className={styles.details}>
                            <b className={styles.sampleCard}>
                              Fartlek Run with Gabriella
                            </b>
                            <div className={styles.textHereText}>
                              Challenge your stamina in this fartlek run as
                              Gabriella guides you through drills from easy jogs
                              to all-out sprints
                            </div>
                          </div>
                          <div className={styles.statswithcta}>
                            <div className={styles.stats}>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.rideIcon}
                                  alt=""
                                  src="/time5.svg"
                                />
                                <div className={styles.label}>35 min</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.rideIcon}
                                  alt=""
                                  src="/difficulty5.svg"
                                />
                                <div className={styles.label}>Hard</div>
                              </div>
                            </div>
                            <div
                              className={styles.primarybuttonsdefault}
                              onClick={onPrimaryButtonsdefaultContainer7Click}
                            >
                              <div className={styles.label}>Begin Workout</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerwrapper}>
          <div className={styles.promofooter}>
            <div className={styles.footercontainer}>
              <div className={styles.recentactivities}>
                <div className={styles.yourRecentActivities}>
                  Your Recent Activities
                </div>
                <div className={styles.activitieslist}>
                  <div className={styles.activity}>
                    <img
                      className={styles.rideIcon}
                      alt=""
                      src="/strength.svg"
                    />
                    <div className={styles.label}>Lunch Weight Training</div>
                  </div>
                  <div className={styles.activity}>
                    <div className={styles.run}>
                      <img className={styles.runIcon} alt="" src="/run7.svg" />
                    </div>
                    <div className={styles.label}>Lunch Stair-Stepper</div>
                  </div>
                  <div className={styles.activity}>
                    <img
                      className={styles.rideIcon}
                      alt=""
                      src="/strength.svg"
                    />
                    <div className={styles.label}>
                      Afternoon Weight Training
                    </div>
                  </div>
                  <div className={styles.activity}>
                    <img
                      className={styles.rideIcon}
                      alt=""
                      src="/strength.svg"
                    />
                    <div className={styles.label}>Lunch Weight Training</div>
                  </div>
                  <div className={styles.activity}>
                    <div className={styles.run}>
                      <img className={styles.runIcon} alt="" src="/run7.svg" />
                    </div>
                    <div className={styles.label}>Lunch Stair-Stepper</div>
                  </div>
                </div>
              </div>
              <div className={styles.recentactivities}>
                <div className={styles.yourRecentActivities}>Strava Blog</div>
                <div className={styles.readOurBlogContainer}>
                  <span>Read our blog</span>
                  <span className={styles.adventureStoriesTraining}>
                    {" "}
                    – adventure stories, training tips and insights from the
                    community.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.globalfooter}>
            <div className={styles.footercontainer1}>
              <div className={styles.logowithcopyright}>
                <img
                  className={styles.stravaLogoIcon1}
                  alt=""
                  src="/stravalogo6.svg"
                />
                <div className={styles.label}>© 2023 Strava</div>
              </div>
              <div className={styles.aboutnavlinks}>
                <div className={styles.yourRecentActivities}>About</div>
                <div className={styles.categorylinks}>
                  <div className={styles.features}>About</div>
                  <div className={styles.features}>Features</div>
                  <div className={styles.features}>Mobile</div>
                  <div className={styles.features}>Subscription</div>
                  <div className={styles.features}>Student Discount</div>
                  <div className={styles.features}>Privacy Policy</div>
                  <div className={styles.features}>
                    <p className={styles.doNotShare}>Do Not Share</p>
                    <p className={styles.doNotShare}>My Personal Information</p>
                  </div>
                  <div className={styles.features}>Terms and Conditions</div>
                  <div className={styles.aboutOurMaps}>About Our Maps</div>
                </div>
              </div>
              <div className={styles.aboutnavlinks}>
                <div className={styles.yourRecentActivities}>Explore</div>
                <div className={styles.categorylinks}>
                  <div className={styles.features}>Routes</div>
                  <div className={styles.features}>Paris 2023 Marathon</div>
                  <div className={styles.features}>Boston 2023 Marathon</div>
                  <div className={styles.features}>London 2023 Marathon</div>
                </div>
              </div>
              <div className={styles.aboutnavlinks}>
                <div className={styles.yourRecentActivities}>Follow</div>
                <div className={styles.categorylinks}>
                  <div className={styles.features}>Facebook</div>
                  <div className={styles.features}>Twitter</div>
                  <div className={styles.features}>Instagram</div>
                  <div className={styles.features}>Youtube</div>
                  <div className={styles.features}>LinkedIn</div>
                  <div className={styles.features}>Blog</div>
                </div>
              </div>
              <div className={styles.aboutnavlinks}>
                <div className={styles.yourRecentActivities}>Help</div>
                <div className={styles.categorylinks3}>
                  <div className={styles.features}>Strava Support</div>
                </div>
              </div>
              <div className={styles.aboutnavlinks}>
                <div className={styles.yourRecentActivities}>More</div>
                <div className={styles.categorylinks}>
                  <div className={styles.features}>Careers</div>
                  <div className={styles.features}>Business</div>
                  <div className={styles.features}>Developers</div>
                  <div className={styles.features}>Labs</div>
                  <div className={styles.features}>
                    Strava Community Standards
                  </div>
                  <div className={styles.languagedropdown}>
                    <div className={styles.label}>{`English (US) `}</div>
                    <img
                      className={styles.dropdownIcon6}
                      alt=""
                      src="/dropdown10.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isExpandedMenuComponentPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom right"
          relativeLayerRef={navLinksContainer4Ref}
          onOutsideClick={closeExpandedMenuComponentPopup}
        >
          <ExpandedMenuComponent onClose={closeExpandedMenuComponentPopup} />
        </PortalPopup>
      )}
      {isNavigationPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom right"
          relativeLayerRef={menuContainerRef}
          onOutsideClick={closeNavigationPopup}
        >
          <Navigation1 onClose={closeNavigationPopup} />
        </PortalPopup>
      )}
      {isFilterDropdownComponentPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom right"
          relativeLayerRef={filterButtonContainerRef}
          onOutsideClick={closeFilterDropdownComponentPopup}
        >
          <FilterDropdownComponent
            onClose={closeFilterDropdownComponentPopup}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default SavedWorkoutPage;
