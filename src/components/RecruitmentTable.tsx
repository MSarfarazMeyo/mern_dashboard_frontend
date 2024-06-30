import { Dispatch, FunctionComponent, SetStateAction, useEffect } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import Rectangle from "../assets/Rectangle 258.png";
import Group908 from "../assets/Group 16908.png";

import Group1718 from "../assets/Group 17118.png";
import Group4 from "../assets/Group (2).png";
import Vector8 from "../assets/Vector (10).png";
import Vector9 from "../assets/Vector (9).png";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import {
  deleteProfile,
  fetchProfiles,
  updateProfile,
} from "../redux/profileSlice";
import { deleteProfileApi, updateProfileApi } from "../services/api";

export type RecruitmentTableHeaderType = {
  className?: string;
  showForm: boolean;
  setShowForm: Dispatch<SetStateAction<boolean>>;
};

const RecruitmentTableHeader: FunctionComponent<RecruitmentTableHeaderType> = ({
  className = "",
  showForm,
  setShowForm,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const profiles = useSelector((state: RootState) => state.profile.profiles);

  useEffect(() => {
    dispatch(fetchProfiles());
  }, []);

  return (
    <section
      className={`absolute top-[96.7px] left-[326.1px] w-[1084.9px] h-[849.3px] text-left text-base text-qi-1 font-roboto ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_10px_rgba(0,_0,_0,_0.06)] rounded-8xs bg-white w-full h-full" />
      <img
        className="absolute top-[0px] left-[0px] rounded-t-8xs rounded-b-none w-[1072.6px] h-[74.4px] object-cover"
        loading="lazy"
        alt=""
        src={Rectangle}
      />

      <Button
        className="absolute top-[12.4px] left-[797px]"
        disableElevation
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "20",
          background: "#06bf97",
          border: "#06bf97 solid 1px",
          borderRadius: "3px",
          "&:hover": { background: "#06bf97" },
          width: 246,
          height: 50,
        }}
        onClick={() => setShowForm(true)}
      >
        Create Profile
      </Button>
      <b className="absolute top-[117.4px] left-[167px] inline-block w-[147.8px]">
        {" "}
        Name
      </b>
      <b className="absolute top-[117.4px] left-[34px] inline-block w-[41.3px]">
        ID
      </b>
      <a className="[text-decoration:none] absolute top-[117.4px] left-[392px] font-bold text-[inherit] inline-block w-[121px]">
        No. of hires/year
      </a>
      <b className="absolute top-[117.4px] left-[590px] inline-block w-[95.4px]">
        Start Date
      </b>
      <b className="absolute top-[117.4px] left-[803px] inline-block w-[80.2px]">
        Status
      </b>
      <b className="absolute top-[117.4px] left-[963px] inline-block w-[58.6px] min-w-[58.6px]">
        Actions
      </b>

      {profiles.map((profile) => (
        <section
          className={`absolute top-[160px] left-[20px] flex flex-col items-start justify-start gap-[16px] max-w-full text-left text-sm text-qi-1 font-roboto ${className}`}
        >
          <div className="self-stretch h-[31px] relative">
            <div className="absolute top-[0px] left-[738.3px] w-[107px] h-[31px] text-cj-2 font-sf-ui--text">
              <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.1)] rounded-10xs bg-white w-full h-full">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs bg-white box-border hidden border-[1px] border-solid border-darkgray-200" />
                <div className="absolute top-[28.71%] left-[2.8%] w-0 h-0">
                  <b className="absolute hidden items-center w-[101.3px] h-[13.2px]">
                    Edit
                  </b>
                </div>
              </div>
              <img
                className="absolute top-[13px] left-[88px] w-[10.1px] h-1.5 object-contain"
                alt=""
                src="/vector-34.svg"
              />
              <div
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  updateProfileApi(profile._id, {
                    status:
                      profile.status == "Complete"
                        ? " In Progress"
                        : "Complete",
                  }).then((response) => {
                    if (response?.data) {
                      dispatch(updateProfile({ ...response?.data }));
                    }
                  });
                }}
                className="absolute top-[6.5px] left-[11.1px] text-xs font-medium flex items-center w-[68.7px] h-[17.8px] min-w-[68.7px]"
              >
                {profile.status}
              </div>
            </div>
            <div className="absolute top-[5.8px] left-[921.4px] w-[70.9px] h-[19.2px]">
              <img
                className="m-0 absolute top-[1px] left-[83.9px] w-[17px] h-[17px]"
                loading="lazy"
                alt=""
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  setShowForm(true);
                }}
                src={Vector8}
              />

              <img
                className="m-0 absolute top-[1px] left-[53.9px] w-[17px] h-[17px]"
                loading="lazy"
                alt=""
                src={Vector9}
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  deleteProfileApi(profile._id).then(() => {
                    dispatch(deleteProfile(profile._id));
                  });
                }}
              />

              <img
                className="absolute h-[92.19%] w-[27.08%] top-[7.81%] right-[72.92%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                loading="lazy"
                alt=""
                src={Group1718}
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  updateProfileApi(profile._id, {
                    archived: profile.archived ? false : true,
                  }).then((response) => {
                    if (response?.data) {
                      dispatch(updateProfile({ ...response?.data }));
                      alert(profile.archived ? "Unarchive" : "Archive");
                    }
                  });
                }}
              />

              <img
                className="absolute top-[0px] left-[27.9px] w-[18px] h-[19px]"
                loading="lazy"
                alt=""
                src={Group4}
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  setShowForm(true);
                }}
              />
            </div>

            <div className="absolute top-[6.8px] left-[133px] inline-block min-w-[95px]">
              {profile.name}
            </div>
            <div className="absolute top-[6.8px] left-[0px] inline-block min-w-[50px]">
              rd
            </div>
            <div className="absolute top-[6.8px] left-[365px] inline-block min-w-[16px]">
              23
            </div>
            <div className="absolute top-[6.8px] left-[555px] inline-block min-w-[75px]">
              20/06/2021
            </div>
          </div>
        </section>
      ))}
      <div className="absolute top-[795.9px] left-[943.9px] w-[121.5px] h-[29.6px] text-center text-gray-400 font-sf-ui--text">
        <div className="absolute top-[3.8px] left-[58.9px] w-10 h-[22px]">
          <div className="absolute top-[0px] left-[22px] leading-[140.2%] inline-block w-[18px]">
            1
          </div>
          <div className="absolute top-[0px] left-[0px] leading-[140.2%] inline-block w-[18px] min-w-[18px]">
            of
          </div>
        </div>
        <div className="absolute top-[0px] left-[22.2px] w-[32.5px] h-[29.6px] text-left text-qi-2 font-roboto">
          <div className="absolute top-[0px] left-[0px] w-full h-full">
            <div className="absolute top-[0px] left-[0px] w-full h-full">
              <div className="absolute top-[0px] left-[0px] w-full h-full">
                <div className="absolute top-[0px] left-[0px] shadow-[0px_0px_3px_rgba(0,_0,_0,_0.15)] rounded-10xs bg-white w-full h-full" />
                <div className="absolute top-[6px] left-[11.9px] w-[8.5px] h-[15.5px]">
                  <div className="absolute top-[0px] left-[0px] font-medium inline-block w-full h-full min-w-[10px]">
                    1
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1146px] left-[1091px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.2)] rounded-8xs bg-white w-[314px] flex flex-row items-start justify-start pt-[12.3px] px-5 pb-[13px] box-border gap-[33.2px] text-base text-dimgray-100">
        <div className="h-[45.1px] w-[314px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.2)] rounded-8xs bg-white hidden" />
        <div className="flex-1 flex flex-row items-start justify-start gap-[16.9px]">
          <img
            className="h-[18.4px] w-[18.4px] relative z-[1]"
            alt=""
            src={Group908}
          />
          <div className="flex-1 relative z-[1]">Help Center</div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[5.4px] px-0 pb-0">
          <img
            className="w-[16.1px] h-[9px] relative z-[1]"
            alt=""
            src="/group-16822.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default RecruitmentTableHeader;
