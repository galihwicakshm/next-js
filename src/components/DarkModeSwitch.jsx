import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, setDarkSwitch } from "@/redux/reducers/darkmode";

const DarkModeSwitch = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.darkmode.isDarkMode);
  const isSwitchOn = useSelector((state) => state.darkmode.darkSwitch);

  useEffect(() => {
    dispatch(setDarkMode(isSwitchOn));
  }, [isSwitchOn]);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      dispatch(setDarkSwitch(true));
      dispatch(setDarkMode(true));
    }
  }, []);

  return (
    <Switch
      checked={isSwitchOn}
      onChange={() => {
        dispatch(setDarkMode(!isDarkMode));
        dispatch(setDarkSwitch(!isDarkMode));
      }}
      className={`${
        isSwitchOn ? "bg-blue-600" : "bg-gray-200"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          isSwitchOn ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
};

export default DarkModeSwitch;
