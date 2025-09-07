import { ArrowLeft, ArrowRight } from "lucide-react";
import { Box } from "../../foundations/Box/Box";
import { CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export interface ControlsButtonsProps {
  length: number;
  current: number;
  apiControls: CarouselApi;
}

export function ControlsButtons(props: ControlsButtonsProps) {
  return (
    <Box className="p-1 md:p-3 bg-black-06 rounded-[12px] border border-black-12 gap-1 md:gap-4">
      <Button
        variant="default"
        onClick={() => props.apiControls?.scrollPrev()}
        className="!p-0.5 md:!p-1.5 bg-black-10 cursor-pointer border border-black-12 flex items-center justify-center transition-colors duration-200"
      >
        <ArrowLeft className="w-3 h-3 md:w-6 md:h-6" />
      </Button>
      <div className="flex items-center gap-1">
        {Array.from({ length: Math.ceil(props.length / 4) }).map((_, index) => (
          <div
            key={index}
            className={`w-2 md:w-5 h-1 rounded-[100px] transition-colors duration-200 ${
              Math.floor((props.current - 1) / 4) === index
                ? "bg-red-500"
                : "bg-black-20"
            }`}
          />
        ))}
      </div>
      <Button
        onClick={() => props.apiControls?.scrollNext()}
        className="!p-0.5 md:!p-1.5 bg-black-10 cursor-pointer border border-black-12 flex items-center justify-center transition-colors duration-200"
      >
        <ArrowRight className="w-3 h-3 md:w-6 md:h-6" />
      </Button>
    </Box>
  );
}
