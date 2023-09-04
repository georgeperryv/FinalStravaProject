import { FunctionComponent } from "react";
import "antd/dist/antd.min.css";
import {
  Menu as AntMenu,
  Dropdown as AntDropdown,
  Button as AntButton,
} from "antd";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  LeftOutlined,
  LockOutlined,
  MailOutlined,
  PaperClipOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  SendOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styles from "./FilterDropdownComponent.module.css";

type FilterDropdownComponentType = {
  onClose?: () => void;
};

const FilterDropdownComponent: FunctionComponent<
  FilterDropdownComponentType
> = ({ onClose }) => {
  return (
    <div className={styles.filterdropdowncomponent}>
      <div className={styles.filtermodal}>
        <div className={styles.distancefilter}>
          <div className={styles.distanceslider}>
            <div className={styles.labels}>
              <div className={styles.distance}>Distance</div>
              <div className={styles.distance}>Any</div>
            </div>
            <Slider
              className={styles.slider}
              defaultValue={0}
              colorScheme="stravaorange"
              min={10}
              max={100}
              step={5}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </div>
        </div>
        <div className={styles.timefilter}>
          <div className={styles.distance}>Time</div>
          <div className={styles.options}>
            <div className={styles.row1}>
              <button className={styles.activitytag}>
                <div className={styles.run}>
                  <img className={styles.runIcon} alt="" src="/run13.svg" />
                </div>
                <div className={styles.run1}>{`< 15 min`}</div>
              </button>
              <button className={styles.activitytag1}>
                <div className={styles.run}>
                  <img className={styles.runIcon} alt="" src="/run13.svg" />
                </div>
                <div className={styles.run1}>15 - 30 min</div>
              </button>
              <button className={styles.activitytag2}>
                <div className={styles.run}>
                  <img className={styles.runIcon} alt="" src="/run13.svg" />
                </div>
                <div className={styles.run1}>30 - 45 min</div>
              </button>
            </div>
            <div className={styles.row1}>
              <button className={styles.activitytag1}>
                <div className={styles.run}>
                  <img className={styles.runIcon} alt="" src="/run13.svg" />
                </div>
                <div className={styles.run1}>45 min - 1 hr</div>
              </button>
              <button className={styles.activitytag1}>
                <div className={styles.run}>
                  <img className={styles.runIcon} alt="" src="/run13.svg" />
                </div>
                <div className={styles.run1}>1 hr +</div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.timefilter}>
          <div className={styles.distance}>Difficulty</div>
          <div className={styles.difficultybuttonradio}>
            <button className={styles.difficultybutton}>
              <div className={styles.moderate}>Any</div>
            </button>
            <button className={styles.difficultybutton}>
              <div className={styles.moderate}>Easy</div>
            </button>
            <button className={styles.difficultybutton2}>
              <div className={styles.moderate}>Moderate</div>
            </button>
            <button className={styles.difficultybutton2}>
              <div className={styles.moderate}>Hard</div>
            </button>
          </div>
        </div>
        <div className={styles.instructorfilter}>
          <div className={styles.distance}>Instructor</div>
          <AntDropdown
            className={styles.slider}
            overlay={
              <AntMenu>
                {(
                  [
                    { value: "Christy" },
                    { value: "Elana" },
                    { value: "Gabriella" },
                    { value: "Joel" },
                    { value: "Marie" },
                    { value: "Marion" },
                    { value: "Michael" },
                    { value: "Tal" },
                    { value: "Tiffany" },
                    { value: "Trey" },
                  ] as any
                ).map((option: any, index: number) => (
                  <AntMenu.Item key={index}>
                    <a onClick={(e) => e.preventDefault()}>
                      {option.value || ""}
                    </a>
                  </AntMenu.Item>
                ))}
              </AntMenu>
            }
            placement="bottomLeft"
            trigger={["click"]}
          >
            <AntButton onClick={(e) => e.preventDefault()}>
              {`All Instructors `}
              <DownOutlined />
            </AntButton>
          </AntDropdown>
        </div>
        <div className={styles.ctas}>
          <button className={styles.clearAll}>Clear All</button>
          <button className={styles.primarybuttonshug}>
            <b className={styles.showResults}>Show Results</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterDropdownComponent;
