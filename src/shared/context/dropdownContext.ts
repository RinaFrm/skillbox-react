import React from "react";

type dropdownContextType = {
  value: string;
  onChange: (value: string) => void;
}

export const dropdownContext = React.createContext<dropdownContextType>({
  value: '',
  onChange: () => {},
});