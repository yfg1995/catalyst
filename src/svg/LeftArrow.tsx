import { FC } from "react";

export const LeftArrow: FC = () => {
  return (
    <svg
      className="duration-300 ease-in-out"
      width="13"
      height="12"
      viewBox="0 0 13 12"
    >
      <path
        d="M0.4697 5.89838C0.1768 6.19127 0.1768 6.66615 0.4697 6.95904L5.24264 11.732C5.53553 12.0249 6.01041 12.0249 6.3033 11.732C6.59619 11.4391 6.59619 10.9642 6.3033 10.6713L2.06066 6.42868L6.3033 2.18604C6.59619 1.89315 6.59619 1.41827 6.3033 1.12538C6.01041 0.832488 5.53553 0.832488 5.24264 1.12538L0.4697 5.89838ZM13 5.67871H1V7.17871H13V5.67871Z"
        fill="#000"
      ></path>
    </svg>
  );
};
