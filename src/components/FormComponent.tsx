import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addProfile } from "../redux/profileSlice";
import { createProfile } from "../services/api";
import { Button, TextField } from "@mui/material";
import { Dispatch, FunctionComponent, SetStateAction } from "react";
import Vector from "../assets/Vector (4).png";
import Vector8 from "../assets/Vector (8).png";
import Group908 from "../assets/Group 16908.png";
import Rectangle from "../assets/Rectangle 258.png";

export type FrameComponentType = {
  className?: string;
  showForm: boolean;
  setShowForm: Dispatch<SetStateAction<boolean>>;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  showForm,
  setShowForm,
}) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      picture: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),

      picture: Yup.mixed().required("Required"),
    }),
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      if (values.picture) {
        formData.append("picture", values.picture);
      }

      const response = await createProfile(formData);
      dispatch(addProfile(response.data));
      setShowForm(false); // Close form after submission
    },
  });
  return (
    <>
      <section className="absolute top-[96.7px] left-[326.1px] shadow-[0px_0px_10px_rgba(0,_0,_0,_0.06)] rounded-8xs bg-white w-[1084.9px] flex flex-col items-start justify-start pt-0 px-0 pb-[45.5px] box-border gap-[1.3px] max-w-full">
        <div className="self-stretch h-[1024.7px] relative shadow-[0px_0px_10px_rgba(0,_0,_0,_0.06)] rounded-8xs bg-white hidden" />
        <div className="self-stretch h-[191.7px] relative shadow-[0px_0px_10px_rgba(0,_0,_0,_0.06)] rounded-t-8xs rounded-b-none bg-gray-100 hidden" />
        <img
          className="w-[1072.6px] relative rounded-t-8xs rounded-b-none max-h-full object-cover max-w-full z-[2]"
          loading="lazy"
          alt=""
          src={Rectangle}
        />
        <div className="self-stretch h-[25.8px] relative">
          <div className="absolute top-[0px] left-[0px] box-border w-[1086px] h-0.5 z-[2] border-t-[1px] border-solid border-whitesmoke-400" />
          <div className="absolute top-[0.6px] left-[23px] box-border w-[152.3px] h-[3px] z-[3] border-t-[2px] border-solid border-cj-1" />
        </div>
        <div className="w-[1042.9px] flex flex-row items-start justify-start py-0 px-[31px] box-border max-w-full">
          <div
            className={`flex-1 flex flex-col items-end justify-start gap-[40px] max-w-full text-left text-base text-darkgray-200 font-sf-ui--text ${className}`}
          >
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-px pl-0 box-border max-w-full">
              <form
                onSubmit={formik.handleSubmit}
                className="m-0 flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] mq975:flex-wrap"
              >
                <div className="w-[447px] flex flex-col items-end justify-start gap-[40.2px] min-w-[447px] max-w-full mq700:min-w-full mq975:flex-1">
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[3px] pl-0 box-border max-w-full">
                    <div className="flex-1 shadow-[0px_0px_4px_rgba(0,_0,_0,_0.2)] rounded-8xs bg-white flex flex-row items-start justify-start py-0 pr-0 pl-4 box-border max-w-full [row-gap:20px] z-[2] mq700:flex-wrap mq700:pr-4 mq700:pb-4 mq700:box-border">
                      <div className="self-stretch w-[444px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.2)] rounded-8xs bg-white hidden max-w-full" />
                      <div className="w-[313.9px] flex flex-col items-start justify-start pt-[17.8px] px-0 pb-0 box-border">
                        <div className="w-[411.6px] relative text-base font-roboto text-darkgray-200 text-left inline-block shrink-0 max-w-[132%] z-[1]">
                          Upload company logo
                        </div>
                      </div>
                      <Button
                        className="h-[54.5px] w-[114px] shrink-0 z-[3]"
                        endIcon={
                          <img width="31.5px" height="20.1px" src={Vector} />
                        }
                        disableElevation
                        variant="contained"
                        sx={{
                          background: "#f8f8f8",
                          borderRadius: "0px 5px 5px 0px",
                          "&:hover": { background: "#f8f8f8" },
                          width: 114,
                          height: 54.5,
                        }}
                      />
                    </div>
                  </div>
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch h-[54px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.2)] font-roboto text-base text-darkgray-200"
                    placeholder="* Company Name"
                    variant="outlined"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    sx={{
                      "& fieldset": { border: "none" },
                      "& .MuiInputBase-root": {
                        height: "54px",
                        borderRadius: "0px 0px 0px 0px",
                      },
                      "& .MuiInputBase-input": { color: "#9b9b9b" },
                    }}
                  />
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch h-[55px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.2)] font-roboto text-base text-darkgray-200"
                    placeholder="Website Link"
                    variant="outlined"
                    sx={{
                      "& fieldset": { border: "none" },
                      "& .MuiInputBase-root": {
                        height: "55px",
                        borderRadius: "0px 0px 0px 0px",
                      },
                      "& .MuiInputBase-input": { color: "#9b9b9b" },
                    }}
                  />
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch h-[55px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.2)] font-roboto text-base text-darkgray-200 z-[2]"
                    placeholder="Email Address"
                    variant="outlined"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    sx={{
                      "& fieldset": { border: "none" },
                      "& .MuiInputBase-root": {
                        height: "55px",
                        backgroundColor: "#fff",
                        borderRadius: "5px",
                      },
                      "& .MuiInputBase-input": { color: "#9b9b9b" },
                    }}
                  />
                  <div className="self-stretch shadow-[0px_0px_4px_rgba(0,_0,_0,_0.2)] rounded-8xs bg-white flex flex-row items-start justify-start pt-[17.9px] pb-[18px] pr-[15px] pl-4 box-border max-w-full z-[2]">
                    <div className="h-[55px] w-[444px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.2)] rounded-8xs bg-white hidden max-w-full z-[1]" />
                    <div className="w-[411.6px] relative text-base font-roboto text-darkgray-200 text-left inline-block shrink-0 max-w-full z-[1]">
                      Select Country
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[6.6px] px-0 pb-0 ml-[-29.1px]">
                      <img
                        className="w-[16.1px] h-[9px] relative z-[3]"
                        alt=""
                        src="/group-17206.svg"
                      />
                    </div>
                  </div>
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch h-[55px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.2)] font-roboto text-base text-darkgray-200 z-[2]"
                    placeholder="Enter Company’s Phone Number"
                    variant="outlined"
                    sx={{
                      "& fieldset": { border: "none" },
                      "& .MuiInputBase-root": {
                        height: "55px",
                        backgroundColor: "#fff",
                        borderRadius: "5px",
                      },
                      "& .MuiInputBase-input": { color: "#9b9b9b" },
                    }}
                  />
                </div>
                <div className="w-[444px] flex flex-col items-end justify-start gap-[44px] min-w-[444px] max-w-full mq700:min-w-full mq975:flex-1">
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      const fileInput = document.getElementById(
                        "fileInput"
                      ) as HTMLInputElement | null;
                      if (fileInput) {
                        fileInput.click();
                      }
                    }}
                    className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[23px]"
                  >
                    {formik.values.picture ? (
                      <div className="shadow-[0px_0px_4px_rgba(0,_0,_0,_0.2)] rounded-181xl bg-white flex flex-row items-start justify-start pt-[67.2px] px-[62px] pb-[67.1px] z-[2]">
                        <img
                          className="h-[55.2px] w-[50.8px] relative z-[3]"
                          loading="lazy"
                          alt="picture uploaded"
                          src={formik.values.picture}
                        />
                      </div>
                    ) : (
                      <div className="shadow-[0px_0px_4px_rgba(0,_0,_0,_0.2)] rounded-181xl bg-white flex flex-row items-start justify-start pt-[67.2px] px-[62px] pb-[67.1px] z-[2]">
                        <img
                          className="h-[30.2px] w-[38.8px] relative z-[3]"
                          loading="lazy"
                          alt=""
                          src={Vector8}
                        />
                      </div>
                    )}
                  </div>

                  <input
                    type="file"
                    name="picture"
                    id="fileInput"
                    onChange={(event) => {
                      const file =
                        event.currentTarget.files &&
                        event.currentTarget.files[0];
                      if (file) {
                        formik.setFieldValue("picture", file);
                      }
                    }}
                    style={{
                      marginTop: "16px",
                      marginBottom: "16px",
                      display: "none",
                    }}
                  />
                  {formik.touched.picture && formik.errors.picture ? (
                    <div>{formik.errors.picture}</div>
                  ) : null}

                  <div className="self-stretch flex flex-col items-end justify-start gap-[40px] max-w-full">
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch h-[55px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.2)] font-roboto text-base text-darkgray-200"
                      placeholder=" No. of hires/year"
                      variant="outlined"
                      sx={{
                        "& fieldset": { border: "none" },
                        "& .MuiInputBase-root": {
                          height: "55px",
                          borderRadius: "0px 0px 0px 0px",
                        },
                        "& .MuiInputBase-input": { color: "#9b9b9b" },
                      }}
                    />
                    <div className="self-stretch shadow-[0px_0px_4px_rgba(0,_0,_0,_0.2)] rounded-8xs bg-white flex flex-row items-start justify-start pt-[17.9px] pb-[18px] pr-[15px] pl-4 box-border max-w-full z-[2]">
                      <div className="h-[55px] w-[442px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.2)] rounded-8xs bg-white hidden max-w-full z-[1]" />
                      <div className="w-[409.8px] relative text-base font-roboto text-darkgray-200 text-left inline-block shrink-0 max-w-full z-[1]">
                        Select City
                      </div>
                      <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 ml-[-29.3px]">
                        <img
                          className="w-[16.1px] h-[9px] relative z-[3]"
                          alt=""
                          src="/group-17205.svg"
                        />
                      </div>
                    </div>
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch h-[55px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.2)] font-roboto text-base text-darkgray-200 z-[2]"
                      placeholder="Enter Zip code"
                      variant="outlined"
                      sx={{
                        "& fieldset": { border: "none" },
                        "& .MuiInputBase-root": {
                          height: "55px",
                          backgroundColor: "#fff",
                          borderRadius: "5px",
                        },
                        "& .MuiInputBase-input": { color: "#9b9b9b" },
                      }}
                    />
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch h-[55px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.2)] font-roboto text-base text-darkgray-200 z-[2]"
                      placeholder="VAT Number"
                      variant="outlined"
                      sx={{
                        "& fieldset": { border: "none" },
                        "& .MuiInputBase-root": {
                          height: "55px",
                          backgroundColor: "#fff",
                          borderRadius: "5px",
                        },
                        "& .MuiInputBase-input": { color: "#9b9b9b" },
                      }}
                    />
                  </div>
                </div>

                <button
                  id="buttonSubmit"
                  type="submit"
                  style={{ display: "none" }}
                >
                  submit
                </button>
              </form>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[23.1px] max-w-full">
              <div className="self-stretch shadow-[0px_0px_4px_rgba(0,_0,_0,_0.2)] rounded-8xs bg-white flex flex-col items-start justify-start pt-[18.6px] px-[34px] pb-[40.1px] box-border gap-[1.7px] max-w-full z-[2] font-roboto">
                <div className="w-[977px] h-[123px] relative shadow-[0px_0px_4px_rgba(0,_0,_0,_0.2)] rounded-8xs bg-white hidden max-w-full" />
                <div className="w-[529.1px] relative inline-block max-w-full z-[3]">
                  Write description here
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0.5 box-border max-w-full">
                  <div className="h-[42.8px] flex-1 relative inline-block max-w-full z-[1]" />
                </div>
              </div>
              <div className="w-[534.9px] flex flex-col items-start justify-start gap-[20.7px] max-w-full text-sm text-gray-600">
                <div className="w-[379.9px] flex flex-row flex-wrap items-start justify-start gap-[8.9px] max-w-full">
                  <input className="m-0 h-[22px] w-5" type="checkbox" />
                  <div className="flex-1 relative leading-[24px] inline-block min-w-[228px] max-w-full z-[1]">
                    Send me occasional emails about CertiJob’s services
                  </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[8px] max-w-full">
                  <input
                    className="m-0 h-[21.9px] w-[19.5px]"
                    type="checkbox"
                  />
                  <div className="flex-1 relative leading-[24px] inline-block min-w-[330px] max-w-full z-[1]">
                    <span className="whitespace-pre-wrap">{`I agree  to GDPR Compliant. Lorem ipsum dolor sit amet. `}</span>
                    <span className="[text-decoration:underline] text-cj-2">
                      Read more
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-[308.9px] flex flex-row items-start justify-start gap-[16.9px] text-center text-lg text-cj-2">
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowForm(false)}
                  className="flex-1 rounded-10xs bg-white flex flex-row items-start justify-start py-[13px] pr-0.5 pl-1 z-[2] border-[1px] border-solid border-cj-2"
                >
                  <div className="h-[50px] w-[146px] relative rounded-10xs bg-white box-border hidden border-[1px] border-solid border-cj-2" />
                  <b className="flex-1 relative z-[1]">Cancel</b>
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    const buttonSubmit = document.getElementById(
                      "buttonSubmit"
                    ) as HTMLInputElement | null;
                    if (buttonSubmit) {
                      buttonSubmit.click();
                    }
                  }}
                  className="flex-1 rounded-10xs bg-cj-2 flex flex-row items-start justify-start pt-[14.4px] pb-[14.3px] pr-[3px] pl-1 z-[2] text-white"
                >
                  <div className="h-[50px] w-[146px] relative rounded-10xs bg-cj-2 hidden" />
                  <b className="flex-1 relative z-[1] bg-none">Save</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <a className="[text-decoration:none] absolute top-[122.6px] left-[358.5px] text-[20px] text-gray-400 inline-block min-w-[124px] z-[3] mq450:text-base">
        Profile Details
      </a>
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
    </>
  );
};

export default FrameComponent;
