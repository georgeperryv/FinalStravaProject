import { FunctionComponent, useState, useRef, useCallback } from 'react'
import ExpandedMenuComponent from '../components/ExpandedMenuComponent'
import PortalPopup from '../components/PortalPopup'
import Navigation1 from '../components/Navigation1'
import ModalWindow from '../components/ModalWindow'
import styles from './WorkoutDetails.module.css'

type WorkoutDetailsType = {
  onClose?: () => void
}

const WorkoutDetails: FunctionComponent<WorkoutDetailsType> = ({ onClose }) => {
  const navLinksContainer4Ref = useRef<HTMLDivElement>(null)
  const [isExpandedMenuComponentPopupOpen, setExpandedMenuComponentPopupOpen] =
    useState(false)
  const menuContainerRef = useRef<HTMLDivElement>(null)
  const [isNavigationPopupOpen, setNavigationPopupOpen] = useState(false)
  const [isModalWindowPopupOpen, setModalWindowPopupOpen] = useState(false)

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

  const openModalWindowPopup = useCallback(() => {
    setModalWindowPopupOpen(true)
  }, [])

  const closeModalWindowPopup = useCallback(() => {
    setModalWindowPopupOpen(false)
  }, [])

  return (
    <>
      <div className={styles.workoutdetails}>
        <div className={styles.workoutdetails1}>
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
                      <img className={styles.dropdownIcon} alt='dropdown' src='imgs/icons/sm/gray/dropdown.svg' />
                    </div>
                    <div className={styles.activeindicator} />
                  </div>
                </div>
                <div className={styles.navlinks1}>
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
                <div className={styles.navlinks1}>
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
                <div className={styles.navlinks1}>
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
                  alt=''
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
              <div className={styles.fullsizeimagecontainer}>
                <img
                  className={styles.image15Icon}
                  alt='Woman in wheel pose (backbend)'
                  src='/imgs/photos/yoga/valentina_vinyasa.png'
                />
                <img
                  className={styles.playIcon}
                  alt='play'
                  src='/imgs/icons/xl/play.svg'
                  onClick={openModalWindowPopup}
                />
              </div>
              <div className={styles.pagecontainer1}>
                <div className={styles.intro}>
                  <div className={styles.titleandstats}>
                    <b className={styles.vinyasaFlowWith}>
                      Vinyasa Flow with Valentina
                    </b>
                    <div className={styles.workoutstats}>
                      <div className={styles.statslarge}>
                        <img
                          className={styles.timeIcon}
                          alt='time'
                          src='/imgs/icons/med/black/time.svg'
                        />
                        <div className={styles.label}>20 min</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.overviewwithcta}>
                    <div className={styles.overview}>
                      <div className={styles.thisShortFlow}>
                        This short flow is perfect for an everyday practice to
                        loosen your muscles, build your strength, and connect to
                        your body. You’ll be guided through a 5-minute warmup
                        flow before the invigorating power Vinyasa flow.
                      </div>
                    </div>
                    <div className={styles.cta}>
                      <button className={styles.primarybuttonswithicon}>
                        <img
                          className={styles.starfilledIcon}
                          alt='saved'
                          src='/imgs/icons/med/white/star_filled.svg'
                        />
                        <div className={styles.saved}>Save</div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.instructorinfo}>
                  <div className={styles.aboutinstructor}>
                    <div className={styles.headerexpanded}>
                      <b className={styles.aboutYourInstructor}>
                        About Your Instructor
                      </b>
                      <img
                        className={styles.strengthIcon}
                        alt='dropdown'
                        src='/imgs/icons/sm/black/dropdown.svg'
                      />
                    </div>
                    <div className={styles.textbox}>
                      <div className={styles.valentinaIsA}>
                        Valentina is a seasoned yogi and has been teaching her
                        practice for 8 years. She’s got high spirits,
                        challenging flows, and a calming energy.
                      </div>
                    </div>
                  </div>
                  <div className={styles.moreinstructor}>
                    <div className={styles.imageandheader}>
                      <img
                        className={styles.pexelsMartaWave64541591Icon}
                        alt='profile picture of Valentina'
                        src='/imgs/photos/valentina_profile_picture.png'
                      />
                      <b className={styles.yourInstructor}>your instructor</b>
                    </div>
                    <div className={styles.instructorinfoandcta}>
                      <div className={styles.instructorinfo1}>
                        <div className={styles.valentinaKare}>
                          Valentina Kare
                        </div>
                        <div className={styles.totalinstructorworkouts}>
                          <img
                            className={styles.workoutIcon}
                            alt=''
                            src='/imgs/icons/sm/black/workout.svg'
                          />
                          <div className={styles.label}>18 workouts</div>
                        </div>
                      </div>
                      <button className={styles.secondarybuttonsdefault}>
                        <div className={styles.explorePlans}>
                          View All From Valentina
                        </div>
                      </button>
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
                        className={styles.strengthIcon}
                        alt=''
                        src='/imgs/icons/sm/black/weights.svg'
                      />
                      <div className={styles.label}>Lunch Weight Training</div>
                    </div>
                    <div className={styles.activity}>
                      <div className={styles.run}>
                        <img
                          className={styles.runIcon}
                          alt=''
                          src='/imgs/icons/sm/black/run.svg'
                        />
                      </div>
                      <div className={styles.label}>Lunch Stair-Stepper</div>
                    </div>
                    <div className={styles.activity}>
                      <img
                        className={styles.strengthIcon}
                        alt=''
                        src='/imgs/icons/sm/black/weights.svg'
                      />
                      <div className={styles.label}>
                        Afternoon Weight Training
                      </div>
                    </div>
                    <div className={styles.activity}>
                      <img
                        className={styles.strengthIcon}
                        alt=''
                        src='/imgs/icons/sm/black/weights.svg'
                      />
                      <div className={styles.label}>Lunch Weight Training</div>
                    </div>
                    <div className={styles.activity}>
                      <div className={styles.run}>
                        <img
                          className={styles.runIcon}
                          alt=''
                          src='/imgs/icons/sm/black/run.svg'
                        />
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
                      <p className={styles.doNotShare}>
                        My Personal Information
                      </p>
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
                        className={styles.dropdownIcon7}
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
      {isModalWindowPopupOpen && (
        <PortalPopup
          overlayColor='rgba(113, 113, 113, 0.3)'
          placement='Centered'
          onOutsideClick={closeModalWindowPopup}
        >
          <ModalWindow onClose={closeModalWindowPopup} />
        </PortalPopup>
      )}
    </>
  )
}

export default WorkoutDetails
