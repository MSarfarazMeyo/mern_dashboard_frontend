import { FunctionComponent } from "react";
import illustration from "../assets/Illustration.png";
import Group1 from "../assets/Group (1).png";
import Group from "../assets/Group.png";
import Vector1 from "../assets/Vector (1).png";
import Vector2 from "../assets/Vector (2).png";
import Vector from "../assets/Vector.png";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] bg-cj-1 w-[297.2px] flex flex-col items-start justify-start pt-[31px] px-9 pb-[47px] box-border gap-[891px] z-[3] text-center text-xs text-white font-sf-ui--text ${className}`}
    >
      <div className="w-[297.2px] h-[1512px] relative bg-cj-1 hidden" />
      <div className="w-[217.7px] flex flex-col items-start justify-start gap-[53px]">
        <div className="w-[205.7px] flex flex-row items-start justify-start py-0 px-[52px] box-border">
          <img
            className="h-[92px] flex-1 relative max-w-full overflow-hidden z-[1] object-cover"
            loading="lazy"
            alt=""
            src={illustration}
          />
        </div>
        <nav className="m-0 self-stretch flex flex-col items-start justify-start gap-[40px] text-center text-lg text-lightgray font-sf-ui--text">
          <div className="w-[173.2px] flex flex-row items-start justify-start py-0 px-[3px] box-border">
            <div className="flex-1 flex flex-row items-start justify-start gap-[14.3px]">
              <img
                className="h-[16.4px] w-[18.2px] relative z-[4]"
                loading="lazy"
                alt=""
                src={Group1}
              />
              <div className="flex-1 relative z-[4]">My Recruitment</div>
            </div>
          </div>
          <div className="w-[157.2px] flex flex-row items-start justify-start py-0 px-[3px] box-border">
            <div className="flex-1 flex flex-row items-start justify-start gap-[5.9px]">
              <div className="flex flex-col items-start justify-start pt-[3.6px] px-0 pb-0">
                <img
                  className="w-[20.6px] h-[13.7px] relative z-[4]"
                  loading="lazy"
                  alt=""
                  src={Vector}
                />
              </div>
              <div className="flex-1 relative z-[4]">My candidates</div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[3px] text-left">
            <div className="flex flex-row items-start justify-start gap-[11.5px]">
              <div className="flex flex-col items-start justify-start pt-[1.2px] px-0 pb-0">
                <img
                  className="w-[18px] h-[18px] relative z-[4]"
                  loading="lazy"
                  alt=""
                  src={Vector2}
                />
              </div>
              <div className="relative inline-block min-w-[101px] z-[4]">
                Test Library
              </div>
            </div>
          </div>
          <div className="w-[118.9px] flex flex-row items-start justify-start py-0 px-[3px] box-border text-white">
            <div className="flex-1 flex flex-row items-start justify-start gap-[7.2px]">
              <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                <img
                  className="w-4 h-4 relative z-[4]"
                  loading="lazy"
                  alt=""
                  src={Vector1}
                />
              </div>
              <div className="flex-1 relative font-semibold inline-block min-w-[89px] z-[4]">
                My profile
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[51.1px]">
            <div className="w-[116.1px] flex flex-row items-start justify-start py-0 px-[3px] box-border">
              <div className="flex-1 flex flex-row items-end justify-start gap-[7.7px]">
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[2.8px]">
                  <img
                    className="w-[18.7px] h-[13.7px] relative z-[4]"
                    loading="lazy"
                    alt="aaa"
                    src={Group}
                  />
                </div>
                <div className="flex-1 relative z-[4]">Payments</div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-[15.8px] text-xs text-darkgray-300 font-rubik">
              <img
                className="self-stretch h-[0.1px] relative max-w-full overflow-hidden shrink-0 object-contain z-[1]"
                loading="lazy"
                alt=""
                src={Group1}
              />
              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[3px] pl-[11px]">
                <div className="flex-1 relative leading-[133.5%] z-[1]">
                  <p className="m-0">Lorem ipsum dolor sit amet, consec</p>
                  <p className="m-0">{`tetur adipiscing elit. `}</p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="w-[209.7px] flex flex-row items-start justify-start py-0 px-[47px] box-border">
        <div className="flex-1 rounded-10xs bg-cj-2 flex flex-row items-start justify-start py-[9.8px] pr-0.5 pl-[3px] whitespace-nowrap z-[4]">
          <div className="h-[34px] w-[115px] relative rounded-10xs bg-cj-2 hidden" />
          <b className="flex-1 relative z-[1]">Upgrade Now</b>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
