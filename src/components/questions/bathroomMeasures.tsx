import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function BathroomMeasures() {
    return (
        <section>
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl mb-6">Welche Masse hat Ihr Badezimmer?</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="length">Länge in Meter</Label>
              <Input id="length" type="number" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="width">Breite in Meter</Label>
              <Input id="width" type="number" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="height">Höhe in Meter</Label>
              <Input id="height" type="number" />
            </div>
          </div>
        </div>
      </section>
    )
}