import { FC } from "react";
import { PropertyInfoProps } from "./PropertyCard";
import clsx from "clsx";

export const FinancialMetric: FC<PropertyInfoProps> = ({
  label,
  value,
  isCurrency = false,
  isLarge = true,
}) => (
  <div className="flex flex-col justify-between mt-2">
    <div className="text-sm text-[#EEF3F8]">{label}</div>
    <div className="text-xl font-bold">
      <span
        className={clsx(
          "text-[#C5FBFB] text-2xl font-medium",
          isLarge && "text-3xl"
        )}
      >
        {isCurrency && <span className="text-xs align-top ml-1">$</span>}
        {value}
      </span>
    </div>
  </div>
);
