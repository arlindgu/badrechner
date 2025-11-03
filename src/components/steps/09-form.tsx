import { SubmitForm } from "../submitform";

export default function FormStep() {
  return (
    <section className="my-12">
      <div className="px-4 container mx-auto">
        <h2 className="text-2xl col-span-full font-bold mb-6">
          Fast geschafft! Bitte füllen Sie das Formular aus.
        </h2>
            <SubmitForm />          
      </div>
    </section>
  );
}
