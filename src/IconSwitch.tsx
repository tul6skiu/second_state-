import React from 'react';
import './IconSwitch.css';

interface IconSwitchProps {
  icon: string;
  onSwitch: () => void;
}

function IconSwitch({ icon, onSwitch }: IconSwitchProps) {
  return (
    <span
      role="button"
      tabIndex={0}
      onClick={onSwitch}
      onKeyDown={e => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSwitch();
        }
      }}
      className="material-icons"
      style={{ cursor: "pointer", userSelect: "none" }}
      aria-label="Toggle view"
      title="Toggle view"
    >
      {icon}
    </span>
  );
}

export default IconSwitch;