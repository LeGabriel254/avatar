import { ReactNode } from "react";

export interface ReactComponents{
children:ReactNode
};

export interface ButtonProps{
  title:string
  action?: () => void
  className:string
}