import { FunctionComponent } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";

import Group from "../assets/Group 4.png";
import Vector from "../assets/Vector (5).png";
import Vector5 from "../assets/Vector (6).png";
import Vector6 from "../assets/Vector (7).png";

export type DashboardFooterType = {
  className?: string;
};

const DashboardFooter: FunctionComponent<DashboardFooterType> = ({
  className = "",
}) => {
  return (
    <footer
      className={`absolute top-[1231px] left-[297px] bg-whitesmoke-200 w-[1143px] flex flex-col items-end justify-start pt-[40.5px] px-0 pb-0 box-border gap-[22.2px] max-w-full z-[1] text-left text-sm text-gray-500 font-sf-ui--text ${className}`}
    >
      <div className="self-stretch h-px relative box-border hidden border-t-[1px] border-solid border-gainsboro" />
      <div className="self-stretch h-[281px] relative bg-whitesmoke-200 hidden" />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-6 box-border max-w-full">
        <div className="w-[969.8px] flex flex-row flex-wrap items-end justify-start gap-[14.5px] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-end pt-0 pb-[4.4px] pr-5 pl-0 box-border min-w-[192px]">
            <div className="h-[127px] relative leading-[266.34%] flex items-center shrink-0 z-[1]">
              <span>
                <p className="m-0">Services</p>
                <p className="m-0">Pricing</p>
                <p className="m-0">Contact</p>
              </span>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-end pt-0 pb-[4.4px] pr-5 pl-0 box-border min-w-[192px]">
            <div className="h-[127px] relative leading-[266.34%] flex items-center shrink-0 z-[1]">
              <span>
                <p className="m-0">Terms of Services</p>
                <p className="m-0">Terms of Sales</p>
                <p className="m-0">{`Privacy policy & Cookies`}</p>
              </span>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-end pt-0 pb-[4.4px] pr-5 pl-0 box-border min-w-[192px]">
            <div className="h-[127px] relative leading-[266.34%] flex items-center shrink-0 z-[1]">
              <span>
                <p className="m-0">For subject-matter experts</p>
                <p className="m-0">Help center</p>
                <p className="m-0">Information for candidates</p>
              </span>
            </div>
          </div>
          <div className="w-[225px] flex flex-col items-start justify-end pt-0 px-0 pb-[4.8px] box-border font-rubik">
            <div className="self-stretch flex flex-col items-start justify-start gap-[15.9px]">
              <div className="flex flex-row items-start justify-start gap-[20px]">
                <div className="h-[39.1px] w-[39.1px] relative rounded-31xl bg-white z-[1]">
                  <div className="absolute top-[0px] left-[0px] rounded-31xl bg-white w-full h-full hidden" />
                  <img
                    className="absolute top-[10.8px] left-[9.8px] w-[20.6px] h-[17.4px] z-[1]"
                    loading="lazy"
                    alt=""
                    src={Group}
                  />
                </div>
                <div className="h-[39.1px] w-[39.1px] relative rounded-31xl bg-white z-[1]">
                  <div className="absolute top-[0px] left-[0px] rounded-31xl bg-white w-full h-full hidden" />
                  <img
                    className="absolute top-[8.6px] left-[14.1px] w-[9.8px] h-[20.6px] z-[1]"
                    loading="lazy"
                    alt=""
                    src={Vector}
                  />
                </div>
                <div className="h-[39.1px] w-[39.1px] relative rounded-31xl bg-white z-[1]">
                  <div className="absolute top-[0px] left-[0px] rounded-31xl bg-white w-full h-full hidden" />
                  <img
                    className="absolute top-[10.8px] left-[10.8px] w-[17.4px] h-[17.4px] z-[1]"
                    loading="lazy"
                    alt=""
                    src={Vector5}
                  />
                </div>
                <img
                  className="h-[39.1px] w-[39.1px] relative min-h-[39px] z-[1]"
                  loading="lazy"
                  alt=""
                  src={Vector6}
                />
              </div>
              <div className="w-[220.1px] relative leading-[160%] font-light inline-block z-[1]">
                Subscribe our Newsletters to keep updated yourself with Current
                Revolution in Fitness Sector.
              </div>
              <FormControl
                className="self-stretch h-[39px] font-sf-ui--text text-xs text-darkgray-100 z-[1]"
                variant="standard"
                sx={{
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  width: "100%",
                  height: "39px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "39px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "39px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "39px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "39px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#a7a7a7",
                    fontSize: 12,
                    fontWeight: "Regular",
                    fontFamily: "SF UI  Text",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "15px",
                  },
                }}
              >
                <InputLabel color="secondary" />
                <Select
                  color="secondary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="17.9px"
                      height="17.9px"
                      src="/vector-34.svg"
                      style={{ marginRight: "11.40000000000007px" }}
                    />
                  )}
                >
                  <MenuItem>Enter you email</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-whitesmoke-300 flex flex-row items-start justify-center pt-[8.2px] px-5 pb-[8.3px] box-border max-w-full z-[1] text-center text-xs text-gray-300">
        <div className="h-[37.5px] w-[1143px] relative bg-whitesmoke-300 hidden max-w-full" />
        <div className="w-[310px] relative tracking-[0.24em] leading-[21px] flex items-center justify-center z-[2]">
          © CertiJob 2021. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter;
