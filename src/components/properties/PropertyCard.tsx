import { FC } from "react";
import { RoundChart } from "../RoundChart";
import { PropertyInfo } from "./PropertyInfo";
import { FinancialMetric } from "./FinancialMetric";
import { PropertyHeader } from "./PropetryHeader";

interface PropertyCardProps {
  name: string;
  address: string;
  image: string;
  assetValue: string;
  noi: string;
  ltv: string;
  dscr: string;
  rentPerSqft: string;
  expenseRatio: string;
  roe: string;
  monthlyCashFlow: string;
  progress: number;
}

export interface PropertyInfoProps {
  label: string;
  value: string;
  isCurrency?: boolean;
  isLarge?: boolean;
}

const PropertyCard: FC<PropertyCardProps> = ({
  name,
  address,
  image,
  assetValue,
  noi,
  ltv,
  dscr,
  rentPerSqft,
  expenseRatio,
  roe,
  monthlyCashFlow,
  progress,
}) => {
  return (
    <div className="rounded-lg shadow-lg border bg-white">
      <div className="flex items-center justify-between gap-4 border-b p-4">
        <PropertyHeader name={name} address={address} image={image} />
        <RoundChart progress={progress} />
      </div>
      <div className="p-4 mt-4 text-sm grid grid-cols-2 gap-1">
        <PropertyInfo label="Asset Value" value={assetValue} isCurrency />
        <PropertyInfo label="NOI" value={noi} isCurrency />
        <PropertyInfo label="LTV" value={`${ltv}%`} />
        <PropertyInfo label="Rent per sqft" value={rentPerSqft} isCurrency />
        <PropertyInfo label="DSCR" value={dscr} />
        <PropertyInfo label="Expense Ratio" value={`${expenseRatio}%`} />
      </div>

      <div className="m-4 p-4 pt-2 grid grid-cols-2 gap-1 bg-[#002E2E] rounded-lg">
        <FinancialMetric label="ROE" value={`${roe}%`} />
        <FinancialMetric
          label="Monthly CashFlow"
          value={monthlyCashFlow}
          isCurrency
        />
      </div>
    </div>
  );
};

export default PropertyCard;
