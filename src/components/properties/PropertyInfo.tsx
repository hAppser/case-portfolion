import clsx from "clsx";
import { FC } from "react";
import { PropertyInfoProps } from "./PropertyCard";

export const PropertyInfo: FC<PropertyInfoProps> = ({
  label,
  value,
  isCurrency = false,
  isLarge = false,
}) => (
  <div className={clsx("flex flex-row gap-2", isLarge && "text-lg")}>
    <span className="text-[#8392AA] text-xs">{label}</span>{" "}
    <span className="font-semibold text-[#171F2D] text-sm">
      {isCurrency && <span className="text-xs align-top ml-1">$</span>}
      {value}
    </span>
  </div>
);
