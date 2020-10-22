
export interface Theme {
    name: string;
    properties: any;
  }
  
  export const light: Theme = {
    name: "light",
    properties: {
        "--header-background-color": "#cd0029",
        "--body-background-color": "#fff",
        "--footer-background-color": "#eaeaea",
        "--footer-color": "#cd0029",
        "--btn-background": "#fff",
        "--btn-color": "#CC0028",
        "--tab-active-background": "#cd0029",
        "--tab-active-color": "#fff",
        "--tab-wrapper-color": "#ec1313",
        "--form-btn-background": "#cd0029",
        "--form-btn-color":"#fff"
    }
  };
  
  export const dark: Theme = {
    name: "dark",
    properties: {
        "--header-background-color": "#232323",
        "--body-background-color": "#eaeaea",
        "--footer-background-color": "#666666",
        "--footer-color": "#fff",
        "--btn-background": "#666666",
        "--btn-color": "#fff",
        "--tab-active-background": "#666666",
        "--tab-active-color": "#fff",
        "--tab-wrapper-color": "#666666",
        "--form-btn-background": "#666666",
        "--form-btn-color":"#fff"
    }
  };