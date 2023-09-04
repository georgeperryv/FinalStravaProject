import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ExpandedMenuComponent.module.css";

type ExpandedMenuComponentType = {
  onClose?: () => void;
};

const ExpandedMenuComponent: FunctionComponent<ExpandedMenuComponentType> = ({
  onClose,
}) => {
  const navigate = useNavigate();

  const onNavLinkContainersubcategooryClick = useCallback(() => {
    navigate("/library-home");
  }, [navigate]);

  const onNavLinkContainersubcategoory1Click = useCallback(() => {
    navigate("/savedworkoutpage2");
  }, [navigate]);

  return (
    <div className={styles.expandedmenucomponent}>
      <div className={styles.partialborder} />
      <div className={styles.navlinks}>
        <div className={styles.subscriberonlylinks}>
          <div className={styles.subscriptionsectionheader}>
            <div className={styles.subscription}>SUBSCRIPTION</div>
          </div>
          <div
            className={styles.navlinkcontainersubcategoory}
            onClick={onNavLinkContainersubcategooryClick}
          >
            <b className={styles.dashboard}>Explore Workouts</b>
          </div>
          <div
            className={styles.navlinkcontainersubcategoory}
            onClick={onNavLinkContainersubcategoory1Click}
          >
            <div className={styles.dashboard1}>My Saved Workouts</div>
          </div>
        </div>
      </div>
      <div className={styles.activeindicator} />
    </div>
  );
};

export default ExpandedMenuComponent;
