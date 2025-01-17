import { FC } from "react";
import Image from "next/image";

export const PropertyHeader: FC<{
  name: string;
  address: string;
  image: string;
}> = ({ name, address, image }) => (
  <div className="flex gap-2 items-center">
    <Image
      src={image}
      alt={name}
      className="w-20 h-16 rounded-lg object-cover"
      width={72}
      height={56}
    />
    <div>
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-sm font-medium text-[#8392AA]">{address}</p>
    </div>
  </div>
);
