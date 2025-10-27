import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function BathroomAttachements() {
    return (
      <section>
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl mb-6">Laden Sie Ihre Pläne und Fotos hoch</h2>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="length">Bilder hochladen</Label>
            <Input id="length" type="file" />
          </div>
        </div>
      </section>
    );
}