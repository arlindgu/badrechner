"use client";

import StyleStep from "@/components/steps/01-stylestep";
import EquipmentStep from "@/components/steps/02-equipmentstep";
import ProjectTypeStep from "@/components/steps/03-projecttypestep";
import BathroomAgeStep from "@/components/steps/04-bathroomagestep";
import DimensionsStep from "@/components/steps/05-dimensionsstep";
import QualityStep from "@/components/steps/06-qualitystep";
import LocationStep from "@/components/steps/07-locationstep";
import ElevatorStep from "@/components/steps/08-elevatorstep";
import FormStep from "@/components/steps/09-form";
import { useStepStore } from "@/stores/useStepStore";
import { useProjectTypeStore } from "@/stores/useProjectTypeStore";
import { useLocationStore } from "@/stores/useLocationStore";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  const step = useStepStore((state) => state.step);
  const incrementStep = useStepStore((state) => state.incrementStep);
  const projectType = useProjectTypeStore((state) => state.projectType);
  const location = useLocationStore((state) => state.location);

  /*
  async function handleSendEmail() {
    try {
      console.log("Sende E-Mail...");

      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "arlind.gurgurovci@gmail.com",
          cc: "arlind.gurgurovci@generics.studio",
          subject: "Test E-Mail",
          body: `
          <!doctype html>
<html>
  <body>
    <div
      style='background-color:#F2F5F7;color:#242424;font-family:"Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0.15008px;line-height:1.5;margin:0;padding:32px 0;min-height:100%;width:100%'
    >
      <table
        align="center"
        width="100%"
        style="margin:0 auto;max-width:600px;background-color:#FFFFFF"
        role="presentation"
        cellspacing="0"
        cellpadding="0"
        border="0"
      >
        <tbody>
          <tr style="width:100%">
            <td>
              <div style="padding:24px 24px 24px 24px">
                <a
                  href="https://marketbase.app"
                  style="text-decoration:none"
                  target="_blank"
                  ><img
                    alt="Marketbase"
                    src="https://d1iiu589g39o6c.cloudfront.net/live/platforms/platform_A9wwKSL6EV6orh6f/images/wptemplateimage_JTNBBPGrNs2Ph4JL/marketbase.png"
                    style="outline:none;border:none;text-decoration:none;vertical-align:middle;display:inline-block;max-width:100%"
                /></a>
              </div>
              <div style="font-weight:normal;padding:0px 24px 16px 24px">
                Hi Anna 👋,
              </div>
              <div style="font-weight:normal;padding:0px 24px 16px 24px">
                Welcome to Marketbase! Marketbase is how teams within fast
                growing marketplaces effortlessly monitor conversations to
                prevent disintermediation, identify problematic users, and
                increase trust &amp; safety within their community.
              </div>
              <div style="font-weight:normal;padding:0px 24px 16px 24px">
                Best of all, you can connect your existing messaging services in
                minutes:
              </div>
              <div style="padding:16px 24px 16px 24px">
                <a
                  href="https://capture.dropbox.com/NBQEmoCKKP9RGBWr"
                  style="text-decoration:none"
                  target="_blank"
                  ><img
                    alt="Video thumbnail"
                    src="https://d1iiu589g39o6c.cloudfront.net/live/platforms/platform_A9wwKSL6EV6orh6f/images/wptemplateimage_oWB821TUkDXvr2f4/Screenshot%202023-11-22%20at%2011.51.30%20AM.png"
                    style="outline:none;border:none;text-decoration:none;vertical-align:middle;display:inline-block;max-width:100%"
                /></a>
              </div>
              <div style="font-weight:normal;padding:16px 24px 16px 24px">
                If you ever need help, just reply to this email and one of us
                will get back to you shortly. We’re here to help.
              </div>
              <div style="padding:16px 24px 24px 24px">
                <a
                  href="https://www.usewaypoint.com"
                  style="color:#FFFFFF;font-size:14px;font-weight:bold;background-color:#0079cc;display:inline-block;padding:12px 20px;text-decoration:none"
                  target="_blank"
                  ><span
                    ><!--[if mso
                      ]><i
                        style="letter-spacing: 20px;mso-font-width:-100%;mso-text-raise:30"
                        hidden
                        >&nbsp;</i
                      ><!
                    [endif]--></span
                  ><span>Open dashboard</span
                  ><span
                    ><!--[if mso
                      ]><i
                        style="letter-spacing: 20px;mso-font-width:-100%"
                        hidden
                        >&nbsp;</i
                      ><!
                    [endif]--></span
                  ></a
                >
              </div>
              <div style="padding:16px 24px 40px 24px">
                <img
                  alt="Illustration"
                  src="https://d1iiu589g39o6c.cloudfront.net/live/platforms/platform_A9wwKSL6EV6orh6f/images/wptemplateimage_cAK8FpmBEGoSRNi3/Screenshot%202023-11-22%20at%2011.48.53%20AM.png"
                  style="outline:none;border:none;text-decoration:none;vertical-align:middle;display:inline-block;max-width:100%"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>
`,
        }),
      });
      

      console.log("Response Status:", response.status);
      const responseText = await response.text();
      console.log("Raw Response:", responseText);

      if (!response.ok) {
        console.error("API Error:", responseText);
        alert(`Fehler: ${response.status}`);
        return;
      }

      const data = JSON.parse(responseText);
      console.log("Erfolgreich versendet:", data);
      alert("E-Mail erfolgreich versendet!");
    } catch (error) {
      console.error("Fehler beim E-Mail-Versand:", error);
      alert(
        `Fehler: ${
          error instanceof Error ? error.message : "Unbekannter Fehler"
        }`
      );
    }
  }

  */

  return (
    <section>
      <div className="container mx-auto">
        <div>
          {step === 0 && (
            <div className="h-full flex flex-col items-center justify-center gap-6">
              <h1>Willkommen beim Baderechner</h1>
              <p>Hier können Sie Ihr Traumbad planen und berechnen.</p>
              <Button onClick={incrementStep}>Starten</Button>
            </div>
          )}
          {step === 1 && <StyleStep />}
          {step === 2 && <EquipmentStep />}
          {step === 3 && <ProjectTypeStep />}
          {step === 4 &&
            (projectType?.newBuild === false ? (
              <BathroomAgeStep />
            ) : (
              <DimensionsStep />
            ))}
          {step === 5 && <QualityStep />}
          {step === 6 && <LocationStep />}
          {step === 7 &&
            (location?.item.needsElevator === true ? (
              <ElevatorStep />
            ) : (
              <FormStep />
            ))}
          {step === 8 && <FormStep />}
        </div>
      </div>
    </section>
  );
}
