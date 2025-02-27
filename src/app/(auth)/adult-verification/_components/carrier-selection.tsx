import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface CarrierSelectionProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (carrier: string) => void;
  selectedCarrier: string;
  carriers: Array<{ id: string; label: string }>;
}

export default function CarrierSelection({
  open,
  onOpenChange,
  onSelect,
  selectedCarrier,
  carriers,
}: CarrierSelectionProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-white text-lg">통신사 선택</DrawerTitle>
        </DrawerHeader>
        <div className="w-full p-4">
          <RadioGroup
            onValueChange={onSelect}
            className="space-y-2"
            defaultValue={selectedCarrier}
          >
            {carriers.map((carrier) => (
              <label
                key={carrier.id}
                htmlFor={carrier.id}
                className="flex items-center justify-between rounded-sm px-4 py-3 cursor-pointer hover:bg-white/5"
              >
                <span className="text-white text-base font-normal">
                  {carrier.label}
                </span>
                <RadioGroupItem
                  value={carrier.id}
                  id={carrier.id}
                  className="h-5 w-5 border-[#666666] data-[state=checked]:border-[#5d50e7] data-[state=checked]:bg-[#5d50e7]"
                />
              </label>
            ))}
          </RadioGroup>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
