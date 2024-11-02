import { TypeBackground } from "@mui/material/styles/createPalette";

// Module Augmentation (extend original theme properties)
declare module "@mui/material/styles/createPalette" {
  export interface TypeBackground {
    default: string;
    darker:string;
    paper: string;
  }
}