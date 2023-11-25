import { FunctionComponent, useState, useRef, useCallback } from 'react'
import ExpandedMenuComponent from '../components/ExpandedMenuComponent'
import PortalPopup from '../components/PortalPopup'
import Navigation1 from '../components/Navigation1'
import FilterDropdownComponent from '../components/FilterDropdownComponent'
import { useNavigate } from 'react-router-dom'
import styles from './SavedWorkoutPage.module.css'

const SavedWorkoutPage: FunctionComponent = () => {
  const navLinksContainer4Ref = useRef<HTMLDivElement>(null)
  const [isExpandedMenuComponentPopupOpen, setExpandedMenuComponentPopupOpen] =
    useState(false)
  const menuContainerRef = useRef<HTMLDivElement>(null)
  const [isNavigationPopupOpen, setNavigationPopupOpen] = useState(false)
  const filterButtonContainerRef = useRef<HTMLDivElement>(null)
  const [
    isFilterDropdownComponentPopupOpen,
    setFilterDropdownComponentPopupOpen
  ] = useState(false)
  const navigate = useNavigate()

  const openExpandedMenuComponentPopup = useCallback(() => {
    setExpandedMenuComponentPopupOpen(true)
  }, [])

  const closeExpandedMenuComponentPopup = useCallback(() => {
    setExpandedMenuComponentPopupOpen(false)
  }, [])

  const openNavigationPopup = useCallback(() => {
    setNavigationPopupOpen(true)
  }, [])

  const closeNavigationPopup = useCallback(() => {
    setNavigationPopupOpen(false)
  }, [])

  const openFilterDropdownComponentPopup = useCallback(() => {
    setFilterDropdownComponentPopupOpen(true)
  }, [])

  const closeFilterDropdownComponentPopup = useCallback(() => {
    setFilterDropdownComponentPopupOpen(false)
  }, [])

  const onPrimaryButtonsdefaultContainerClick = useCallback(() => {
    navigate('/workoutdetails')
  }, [navigate])

  const onPrimaryButtonsdefaultContainer1Click = useCallback(() => {
    navigate('/workoutdetails')
  }, [navigate])

  const onPrimaryButtonsdefaultContainer2Click = useCallback(() => {
    navigate('/workoutdetails')
  }, [navigate])

  const onPrimaryButtonsdefaultContainer3Click = useCallback(() => {
    navigate('/workoutdetails')
  }, [navigate])

  const onPrimaryButtonsdefaultContainer4Click = useCallback(() => {
    navigate('/workoutdetails')
  }, [navigate])

  const onPrimaryButtonsdefaultContainer5Click = useCallback(() => {
    navigate('/workoutdetails')
  }, [navigate])

  const onPrimaryButtonsdefaultContainer6Click = useCallback(() => {
    navigate('/workoutdetails')
  }, [navigate])

  const onPrimaryButtonsdefaultContainer7Click = useCallback(() => {
    navigate('/workoutdetails')
  }, [navigate])

  return (
    <>
      <div className={styles.savedworkoutpage}>
        <div className={styles.navbarcontainerdesktop}>
          <div className={styles.navmenu}>
            <button className={styles.logoandsearch}>
              <img
                className={styles.stravaLogoIcon}
                alt='logo'
                src='/imgs/logo/logo_orange.svg'
              />
              <div className={styles.searchiconwrapper}>
                <img className={styles.searchIcon} alt='search' src='/imgs/icons/med/gray/search.svg' />
              </div>
            </button>
            <div className={styles.navlinks}>
              <div>
                <div className={styles.pagetab}>
                  <div className={styles.pagetablabel}>
                    <div className={styles.label}>Dashboard</div>
                    <img className={styles.dropdownIcon} alt='dropdown' src='/imgs/icons/sm/gray/dropdown.svg' />
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
                      alt='dropdown'
                      src='/imgs/icons/sm/gray/dropdown.svg'
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
                      alt='dropdown'
                      src='/imgs/icons/sm/gray/dropdown.svg'
                    />
                  </div>
                  <div className={styles.activeindicator} />
                </div>
              </div>
              <div className={styles.recommendedsection}>
                <div className={styles.pagetab}>
                  <div className={styles.pagetablabel}>
                    <div className={styles.label}>Challenges</div>
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
                      alt='dropdown'
                      src='/imgs/icons/sm/black/dropdown.svg'
                    />
                  </div>
                  <div className={styles.activeindicator4} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.usermenu}>
            <div className={styles.notificationsnavitem}>
              <img className={styles.bellIcon} alt='notifications' src='/imgs/icons/med/gray/bell.svg' />
            </div>
            <div className={styles.profilenavitem}>
              <img
                className={styles.userprofileimageIcon}
                alt='profile picture'
                src='/imgs/photos/user_profile_picture.png'
              />
              <img
                className={styles.dropdownIcon}
                alt='dropdown'
                src='/imgs/icons/sm/black/dropdown.svg'
              />
            </div>
            <div className={styles.notificationsnavitem}>
              <img className={styles.searchIcon} alt='add activity' src='/imgs/icons/med/orange/add.svg' />
            </div>
            <div
              className={styles.menu}
              ref={menuContainerRef}
              onClick={openNavigationPopup}
            >
              <img className={styles.vectorIcon} alt='menu' src='/imgs/icons/med/gray/hamburger.svg' />
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
                    <img className={styles.runIcon} alt='' src='/imgs/icons/sm/black/run.svg' />
                  </div>
                  <div className={styles.run1}>Run</div>
                </button>
                <button className={styles.activitytag1}>
                  <img className={styles.rideIcon} alt='' src='/imgs/icons/sm/black/ride.svg' />
                  <div className={styles.run1}>Ride</div>
                </button>
                <button className={styles.activitytag1}>
                  <img className={styles.rideIcon} alt='' src='/imgs/icons/sm/black/weights.svg' />
                  <div className={styles.run1}>Strength</div>
                </button>
                <button className={styles.activitytag}>
                  <img className={styles.rideIcon} alt='' src='/imgs/icons/sm/black/yoga.svg' />
                  <div className={styles.run1}>Yoga</div>
                </button>
                <button className={styles.activitytag1}>
                  <img className={styles.rideIcon} alt='' src='/imgs/icons/sm/black/hiit.svg' />
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
                  <img className={styles.filterIcon} alt='filter' src='/imgs/icons/sm/black/filter.svg' />
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
                            alt='2 runners at the start line'
                            src='/imgs/photos/run/zain_speed.png'
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
                                    alt='run'
                                    src='/imgs/icons/sm/gray/run.svg'
                                  />
                                </div>
                                <div className={styles.label}>2.5 mi</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.rideIcon}
                                  alt='difficulty'
                                  src='/imgs/icons/sm/gray/difficulty.svg'
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
                            alt='Woman doing a toe touch'
                            src='/imgs/photos/yoga/zoe_restorative.png'
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
                                  alt='time'
                                  src='/imgs/icons/sm/gray/time.svg'
                                />
                                <div className={styles.label}>50 min</div>
                              </div>
                              <div className={styles.statssmall3}>
                                <img
                                  className={styles.rideIcon}
                                  alt='difficulty'
                                  src='/imgs/icons/sm/gray/difficulty.svg'
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
                            alt='Man running in the city'
                            src='/imgs/photos/run/marion_easy.png'
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
                                  alt='time'
                                  src='/imgs/icons/sm/gray/time.svg'
                                />
                                <div className={styles.label}>40 min</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.rideIcon}
                                  alt='difficulty'
                                  src='/imgs/icons/sm/gray/difficulty.svg'
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
                            alt='Man running outdoors'
                            src='/imgs/photos/run/trey_speed.png'
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
                                    alt='run'
                                    src='/imgs/icons/sm/gray/run.svg'
                                  />
                                </div>
                                <div className={styles.label}>3.0 mi</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.rideIcon}
                                  alt='difficulty'
                                  src='/imgs/icons/sm/gray/difficulty.svg'
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
                            alt='Woman doing crunches'
                            src='/imgs/photos/strength/marie_core_obliques.png'
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
                                  alt='time'
                                  src='/imgs/icons/sm/gray/time.svg'
                                />
                                <div className={styles.label}>15 min</div>
                              </div>
                              <div className={styles.statssmall3}>
                                <img
                                  className={styles.rideIcon}
                                  alt='difficulty'
                                  src='/imgs/icons/sm/gray/difficulty.svg'
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
                            alt='Woman in warrior 2 pose'
                            src='/imgs/photos/yoga/andrea_power.png'
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
                                  alt='time'
                                  src='/imgs/icons/sm/gray/time.svg'
                                />
                                <div className={styles.label}>30 min</div>
                              </div>
                              <div className={styles.statssmall3}>
                                <img
                                  className={styles.rideIcon}
                                  alt='difficulty'
                                  src='/imgs/icons/sm/gray/difficulty.svg'
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
                            alt='Woman doing glute bridges'
                            src='/imgs/photos/strength/sammie_glutes.png'
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
                                  alt='time'
                                  src='/imgs/icons/sm/gray/time.svg'
                                />
                                <div className={styles.label}>20 min</div>
                              </div>
                              <div className={styles.statssmall3}>
                                <img
                                  className={styles.rideIcon}
                                  alt='difficulty'
                                  src='/imgs/icons/sm/gray/difficulty.svg'
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
                            alt='Woman running outside'
                            src='/imgs/photos/run/gabriella_fartlek.png'
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
                                  alt='time'
                                  src='/imgs/icons/sm/gray/time.svg'
                                />
                                <div className={styles.label}>35 min</div>
                              </div>
                              <div className={styles.statssmall}>
                                <img
                                  className={styles.rideIcon}
                                  alt='difficulty'
                                  src='/imgs/icons/sm/gray/difficulty.svg'
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
                      alt=''
                      src='/imgs/icons/sm/black/weights.svg'
                    />
                    <div className={styles.label}>Lunch Weight Training</div>
                  </div>
                  <div className={styles.activity}>
                    <div className={styles.run}>
                      <img className={styles.runIcon} alt='run' src='/imgs/icons/sm/gray/run.svg' />
                    </div>
                    <div className={styles.label}>Lunch Stair-Stepper</div>
                  </div>
                  <div className={styles.activity}>
                    <img
                      className={styles.rideIcon}
                      alt=''
                      src='/imgs/icons/sm/black/weights.svg'
                    />
                    <div className={styles.label}>
                      Afternoon Weight Training
                    </div>
                  </div>
                  <div className={styles.activity}>
                    <img
                      className={styles.rideIcon}
                      alt=''
                      src='/imgs/icons/sm/black/weights.svg'
                    />
                    <div className={styles.label}>Lunch Weight Training</div>
                  </div>
                  <div className={styles.activity}>
                    <div className={styles.run}>
                      <img className={styles.runIcon} alt='' src='/imgs/icons/sm/black/run.svg' />
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
                    {' '}
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
                  alt='logo'
                  src='/imgs/logo/logo_gray.svg'
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
                      alt='dropdown'
                      src='/imgs/icons/xs/dropdown.svg'
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
          overlayColor='rgba(113, 113, 113, 0.3)'
          placement='Bottom right'
          relativeLayerRef={navLinksContainer4Ref}
          onOutsideClick={closeExpandedMenuComponentPopup}
        >
          <ExpandedMenuComponent onClose={closeExpandedMenuComponentPopup} />
        </PortalPopup>
      )}
      {isNavigationPopupOpen && (
        <PortalPopup
          overlayColor='rgba(113, 113, 113, 0.3)'
          placement='Bottom right'
          relativeLayerRef={menuContainerRef}
          onOutsideClick={closeNavigationPopup}
        >
          <Navigation1 onClose={closeNavigationPopup} />
        </PortalPopup>
      )}
      {isFilterDropdownComponentPopupOpen && (
        <PortalPopup
          overlayColor='rgba(113, 113, 113, 0.3)'
          placement='Bottom right'
          relativeLayerRef={filterButtonContainerRef}
          onOutsideClick={closeFilterDropdownComponentPopup}
        >
          <FilterDropdownComponent
            onClose={closeFilterDropdownComponentPopup}
          />
        </PortalPopup>
      )}
    </>
  )
}

export default SavedWorkoutPage
