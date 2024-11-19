import React from "react";

function BuildingIcon({ className = "", size = 33 }) {
  return (
    <svg
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill="#a2a2a2"
        d="M768 640v86h-86v-86h86zM768 470v84h-86v-84h86zM854 810v-426h-342v86h86v84h-86v86h86v86h-86v84h342zM426 298v-84h-84v84h84zM426 470v-86h-84v86h84zM426 640v-86h-84v86h84zM426 810v-84h-84v84h84zM256 298v-84h-86v84h86zM256 470v-86h-86v86h86zM256 640v-86h-86v86h86zM256 810v-84h-86v84h86zM512 298h426v598h-852v-768h426v170z"
      ></path>
    </svg>
  );
}

export default BuildingIcon;
