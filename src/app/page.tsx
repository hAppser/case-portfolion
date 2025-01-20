"use client";

import PropertyCard from "@/components/properties/PropertyCard";
import { Input } from "@/components/ui/input";
import { properties } from "@/lib/consts";

export default function Portfolio() {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="text-center">
          <span className="text-lg font-semibold">List of properties </span>{" "}
          <span className="bg-[#002E2E] rounded-full px-2 py-1 text-[#EDFDFD]">
            {properties.length}
          </span>
        </div>
        <Input
          className="w-1/5 border-[#C0CBDA] border"
          placeholder="Search property..."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 py-4">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </>
  );
}
