import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectSize = () => {
  return (
    <Select>
      <SelectTrigger className="w-[60px] h-[30px] border-orange-300 text-xs text-orange-900 hover:bg-orange-200 transition-all duration-300">
        <SelectValue placeholder="SIZE" className="text-xs"/>
      </SelectTrigger>
      <SelectContent className="text-orange-900 transition-all duration-300 bg-orange-50">
        <SelectItem value="xs">XS</SelectItem>
        <SelectItem value="s">S</SelectItem>
        <SelectItem value="m">M</SelectItem>
        <SelectItem value="l">L</SelectItem>
        <SelectItem value="xl">XL</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectSize;
