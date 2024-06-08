import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
    return (
        <body>
            <ModeToggle />
            <div>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>/gif - Sends a random gif</AccordionTrigger>
                        <AccordionContent>
                            Subcommands - none
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>/help - Shows a list of commands</AccordionTrigger>
                        <AccordionContent>
                            Subcommands - none
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </body>
    );
}