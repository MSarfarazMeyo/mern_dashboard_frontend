import { FunctionComponent, useState } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import FormComponent from "../components/FormComponent";
import DashboardFooter from "../components/DashboardFooter";
import GroupComponent from "../components/SideBar";
import Ellipse from "../assets/Ellipse 2.png";
import Group from "../assets/Group 17326.png";
import Vector from "../assets/Vector (3).png";
import Rectangle from "../assets/Rectangle 258.png";
import Group908 from "../assets/Group 16908.png";
import RecruitmentTable from "../components/RecruitmentTable";

const CompanyDetails: FunctionComponent = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="w-full h-[1512px] relative bg-whitesmoke-100 overflow-hidden leading-[normal] tracking-[normal] text-left text-[24px] text-cj-1 font-roboto mq975:h-auto mq975:min-h-[1512]">
      <a className="[text-decoration:none] absolute top-[40px] left-[326px] font-medium text-[inherit] inline-block min-w-[109px] mq450:text-[19px]">
        My Profile
      </a>

      {showForm ? (
        <FormComponent showForm={showForm} setShowForm={setShowForm} />
      ) : (
        <RecruitmentTable showForm={showForm} setShowForm={setShowForm} />
      )}

      <DashboardFooter />
      <img
        className="absolute top-[40px] left-[1279.9px] rounded-[50%] w-[30px] h-[30px] object-cover"
        loading="lazy"
        alt=""
        src={Ellipse}
      />
      <a className="[text-decoration:none] absolute top-[48px] left-[1318.7px] text-xs font-helvetica text-dimgray-200 inline-block min-w-[52px]">
        John Doe
      </a>

      <img
        className="absolute top-[44.3px] left-[1234.4px] w-[21.1px] h-[23.4px]"
        loading="lazy"
        alt=""
        src={Vector}
      />
      <TextField
        className="absolute top-[44.3px] left-[1159.2px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.1)] font-sf-ui--text font-medium text-xs text-gray-200"
        variant="standard"
        select
        value={1}
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              style={{
                marginLeft: "5.300000000000011px",
                marginRight: "2.2999999999999776px",
              }}
            >
              <img width="12.1px" height="8.7px" src={Group} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              position="end"
              style={{ marginRight: "5.199999999999989px" }}
            >
              <img width="6.5px" height="3.3px" src=".." />
            </InputAdornment>
          ),
        }}
        SelectProps={{ IconComponent: () => null }}
        sx={{
          borderTopWidth: "1px",
          borderRightWidth: "1px",
          borderBottomWidth: "1px",
          borderLeftWidth: "1px",
          backgroundColor: "#fff",
          borderRadius: "3px",
          width: "50.7px",
          height: "22.5px",
          "& .MuiInput-underline:before": { borderBottom: "none" },
          "& .MuiInput-underline:after": { borderBottom: "none" },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
          "& .MuiInputBase-root": { height: "100%" },
          "& .MuiInputBase-input": {
            color: "#918d8d",
            fontSize: 12,
            fontWeight: "Medium",
            fontFamily: "SF UI  Text",
            textAlign: "left",
            p: "0 !important",
          },
        }}
      >
        <MenuItem value={1}>EN</MenuItem>
      </TextField>
      <GroupComponent />
    </div>
  );
};

export default CompanyDetails;
