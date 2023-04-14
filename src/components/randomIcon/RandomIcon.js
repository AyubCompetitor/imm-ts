import React, { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../spinner/Spinner";

import "./randomIcon.css";

function RandomIcon() {
  const [iconList, setIconList] = useState([]);
  const [status, setStatus] = useState({ isLoading: false, showIcon: false });
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    setIconList(Object.values(fas));
  }, []);

  const getRandomIcon = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * iconList.length);
    return iconList[randomIndex];
  }, [iconList]);

  const handleClick = () => {
    if (!status.isLoading) {
      setStatus({ isLoading: true, showIcon: false });
      setTimeout(() => {
        setIcon(getRandomIcon());
        setStatus({ isLoading: false, showIcon: true });
      }, 3000);
    }
  };

  const { isLoading, showIcon } = status;

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : showIcon && icon ? (
        <FontAwesomeIcon icon={icon} size="3x" />
      ) : null}

      <button
        className="random-button"
        onClick={handleClick}
        disabled={isLoading}
      >
        Show random icon
      </button>
    </>
  );
}

export default RandomIcon;
