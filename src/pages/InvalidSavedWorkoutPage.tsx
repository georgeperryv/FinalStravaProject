import { FunctionComponent, useState, useRef, useCallback } from 'react'
import ExpandedMenuComponent from '../components/ExpandedMenuComponent'
import PortalPopup from '../components/PortalPopup'
import Navigation1 from '../components/Navigation1'
import FilterDropdownComponent from '../components/FilterDropdownComponent'
import styles from './InvalidSavedWorkoutPage.module.css'
const InvalidSavedWorkoutPage: FunctionComponent = () => {
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

  return (
    <>
      <div className={styles.invalidsavedworkoutpage}>
        <div className={styles.navbarcontainerdesktop}>
          <div className={styles.navmenu}>
            <button className={styles.logoandsearch}>
              <img
                className={styles.stravaLogoIcon}
                alt=''
                src='/stravalogo7.svg'
              />
              <div className={styles.searchiconwrapper}>
                <img className={styles.searchIcon} alt='' src='/search.svg' />
              </div>
            </button>
            <div className={styles.navlinks}>
              <div>
                <div className={styles.pagetab}>
                  <div className={styles.pagetablabel}>
                    <div className={styles.label}>Dashboard</div>
                    <img className={styles.dropdownIcon} alt='' />
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
                      alt=''
                      src='/dropdown2.svg'
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
                      alt=''
                      src='/dropdown2.svg'
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
                      alt=''
                      src='/dropdown2.svg'
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
                      alt=''
                      src='/dropdown3.svg'
                    />
                  </div>
                  <div className={styles.activeindicator4} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.usermenu}>
            <div className={styles.notificationsnavitem}>
              <img className={styles.bellIcon} alt='' src='/bell.svg' />
            </div>
            <div className={styles.profilenavitem}>
              <img
                className={styles.userprofileimageIcon}
                alt=''
                src='/-userprofileimage1@2x.png'
              />
              <img
                className={styles.dropdownIcon}
                alt=''
                src='/dropdown4.svg'
              />
            </div>
            <div className={styles.notificationsnavitem}>
              <img className={styles.searchIcon} alt='' src='/add.svg' />
            </div>
            <div
              className={styles.menu}
              ref={menuContainerRef}
              onClick={openNavigationPopup}
            >
              <img className={styles.vectorIcon} alt='' src='/vector.svg' />
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
                    <img className={styles.runIcon} alt='' src='/run1.svg' />
                  </div>
                  <div className={styles.run1}>Run</div>
                </button>
                <button className={styles.activitytag1}>
                  <img className={styles.rideIcon} alt='' src='/ride.svg' />
                  <div className={styles.run1}>Ride</div>
                </button>
                <button className={styles.activitytag1}>
                  <img className={styles.rideIcon} alt='' src='/strength.svg' />
                  <div className={styles.run1}>Strength</div>
                </button>
                <button className={styles.activitytag}>
                  <img className={styles.rideIcon} alt='' src='/yoga.svg' />
                  <div className={styles.run1}>Yoga</div>
                </button>
                <button className={styles.activitytag}>
                  <img className={styles.rideIcon} alt='' src='/hiit.svg' />
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
                  <img
                    className={styles.filterIcon}
                    alt=''
                    src='/filter1.svg'
                  />
                </div>
              </div>
            </div>
            <div className={styles.libraryresults}>
              <div className={styles.recommendedsection}>
                <div className={styles.cards}>
                  <div className={styles.grid}>
                    <div className={styles.col}>
                      <div className={styles.noresults}>
                        <b className={styles.sorryNoWorkouts}>
                          Sorry, no workouts found.
                        </b>
                        <div className={styles.adjustingYourPreferences}>
                          Adjusting your preferences may yield more results – or
                          clear all filters to explore all your saved workouts.
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
                      src='/strength.svg'
                    />
                    <div className={styles.label}>Lunch Weight Training</div>
                  </div>
                  <div className={styles.activity}>
                    <div className={styles.run}>
                      <img className={styles.runIcon} alt='' src='/run1.svg' />
                    </div>
                    <div className={styles.label}>Lunch Stair-Stepper</div>
                  </div>
                  <div className={styles.activity}>
                    <img
                      className={styles.rideIcon}
                      alt=''
                      src='/strength.svg'
                    />
                    <div className={styles.label}>
                      Afternoon Weight Training
                    </div>
                  </div>
                  <div className={styles.activity}>
                    <img
                      className={styles.rideIcon}
                      alt=''
                      src='/strength.svg'
                    />
                    <div className={styles.label}>Lunch Weight Training</div>
                  </div>
                  <div className={styles.activity}>
                    <div className={styles.run}>
                      <img className={styles.runIcon} alt='' src='/run1.svg' />
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
                  alt=''
                  src='/stravalogo8.svg'
                />
                <div className={styles.label}>© 2023 Strava</div>
              </div>
              <div className={styles.aboutnavlinks}>
                <div className={styles.yourRecentActivities}>About</div>
                <div className={styles.categorylinks}>
                  <div className={styles.sorryNoWorkouts}>About</div>
                  <div className={styles.sorryNoWorkouts}>Features</div>
                  <div className={styles.sorryNoWorkouts}>Mobile</div>
                  <div className={styles.sorryNoWorkouts}>Subscription</div>
                  <div className={styles.sorryNoWorkouts}>Student Discount</div>
                  <div className={styles.sorryNoWorkouts}>Privacy Policy</div>
                  <div className={styles.sorryNoWorkouts}>
                    <p className={styles.doNotShare}>Do Not Share</p>
                    <p className={styles.doNotShare}>My Personal Information</p>
                  </div>
                  <div className={styles.sorryNoWorkouts}>
                    Terms and Conditions
                  </div>
                  <div className={styles.aboutOurMaps}>About Our Maps</div>
                </div>
              </div>
              <div className={styles.aboutnavlinks}>
                <div className={styles.yourRecentActivities}>Explore</div>
                <div className={styles.categorylinks}>
                  <div className={styles.sorryNoWorkouts}>Routes</div>
                  <div className={styles.sorryNoWorkouts}>
                    Paris 2023 Marathon
                  </div>
                  <div className={styles.sorryNoWorkouts}>
                    Boston 2023 Marathon
                  </div>
                  <div className={styles.sorryNoWorkouts}>
                    London 2023 Marathon
                  </div>
                </div>
              </div>
              <div className={styles.aboutnavlinks}>
                <div className={styles.yourRecentActivities}>Follow</div>
                <div className={styles.categorylinks}>
                  <div className={styles.sorryNoWorkouts}>Facebook</div>
                  <div className={styles.sorryNoWorkouts}>Twitter</div>
                  <div className={styles.sorryNoWorkouts}>Instagram</div>
                  <div className={styles.sorryNoWorkouts}>Youtube</div>
                  <div className={styles.sorryNoWorkouts}>LinkedIn</div>
                  <div className={styles.sorryNoWorkouts}>Blog</div>
                </div>
              </div>
              <div className={styles.aboutnavlinks}>
                <div className={styles.yourRecentActivities}>Help</div>
                <div className={styles.categorylinks3}>
                  <div className={styles.sorryNoWorkouts}>Strava Support</div>
                </div>
              </div>
              <div className={styles.aboutnavlinks}>
                <div className={styles.yourRecentActivities}>More</div>
                <div className={styles.categorylinks}>
                  <div className={styles.sorryNoWorkouts}>Careers</div>
                  <div className={styles.sorryNoWorkouts}>Business</div>
                  <div className={styles.sorryNoWorkouts}>Developers</div>
                  <div className={styles.sorryNoWorkouts}>Labs</div>
                  <div className={styles.sorryNoWorkouts}>
                    Strava Community Standards
                  </div>
                  <div className={styles.languagedropdown}>
                    <div className={styles.label}>{`English (US) `}</div>
                    <img
                      className={styles.dropdownIcon6}
                      alt=''
                      src='/dropdown10.svg'
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

export default InvalidSavedWorkoutPage
