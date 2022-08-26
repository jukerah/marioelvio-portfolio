import { useContext } from "react";
import * as C from "./styles";

import { Context } from "../../contexts/Contexts";

export const SwitchMode = () => {
  const { theme, dispatch } = useContext(Context);
  const localThemeMode: string | null = localStorage.getItem("themeMode");

  const handleClickSwitch = () => {
    switch (theme.mode.status) {
      case "dark":
        localStorage.setItem("themeMode", "light");
        break;
      case "light":
        localStorage.setItem("themeMode", "dark");
        break;
    }

    dispatch({
      type: "CHANGE_MODE",
      payload: {
        status: localThemeMode,
      },
    });
  };

  return (
    <C.ContainerSwitchTheme mode={theme.mode.status}>
      <label className="switch" onClick={handleClickSwitch}>
        <input
          type="checkbox"
          defaultChecked={localThemeMode === "dark"
            ? false
            : true
          }
        />
        <span className="slider round"></span>
      </label>
    </C.ContainerSwitchTheme>
  );
};
