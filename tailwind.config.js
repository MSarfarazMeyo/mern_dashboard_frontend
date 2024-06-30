module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          100: "#f6f8fa",
          200: "#f4f8fb",
          300: "#f2f2f2",
          400: "#f1f1f1",
        },
        "cj-1": "#142d52",
        "cj-2": "#06bf97",
        white: "#fff",
        darkgray: {
          100: "#a7a7a7",
          200: "#9b9b9b",
          300: "#9a9a9a",
        },
        lightgray: "#cfcfcf",
        gray: {
          100: "#fafafa",
          200: "#918d8d",
          300: "#8c8c8c",
          400: "#898989",
          500: "#827f7f",
          600: "#7c7c7c",
        },
        dimgray: {
          100: "#6d6d6d",
          200: "#585858",
        },
        gainsboro: "#e9e7e7",
      },
      spacing: {},
      fontFamily: {
        "sf-ui--text": "'SF UI  Text'",
        rubik: "Rubik",
        helvetica: "Helvetica",
        roboto: "Roboto",
      },
      borderRadius: {
        "10xs": "3px",
        "31xl": "50px",
        "8xs": "5px",
        "181xl": "200px",
      },
    },
    fontSize: {
      xs: "12px",
      lg: "18px",
      sm: "14px",
      base: "16px",
      inherit: "inherit",
    },
    screens: {
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
