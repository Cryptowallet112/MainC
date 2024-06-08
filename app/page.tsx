import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button"


export default function Home() {
    return (
        <body>
            <ModeToggle />
            <Button variant="link">https://discord.com/oauth2/authorize?client_id=1240801757555200090&permissions=8&scope=bot</Button>
            <div>
                <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-99999">
                        <AccordionTrigger>---- misc ----</AccordionTrigger>
                    </AccordionItem>
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
                    <AccordionItem value="item-100000">
                        <AccordionTrigger>---- economy ----</AccordionTrigger>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>/start - Lets you begin your economy account</AccordionTrigger>
                        <AccordionContent>
                            Subcommands - none
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>/balance - Shows the balance of a user</AccordionTrigger>
                        <AccordionContent>
                            Subcommands - user
                            <AccordionContent>
                              Use: /balance user: @exampleuser
                            </AccordionContent>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>/beg - Lets you beg for credits</AccordionTrigger>
                        <AccordionContent>
                            Subcommands - none
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>/claim - Lets you claim your daily credits</AccordionTrigger>
                        <AccordionContent>
                            Subcommands - none
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>/guess</AccordionTrigger>
                        <AccordionContent>
                            Subcommands - bet  guess
                            Use: /guess bet: 10 guess: 3
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>/lottery - Cost 25 credits to use it and gives you a 1/20 chance of getting 1000 in return</AccordionTrigger>
                        <AccordionContent>
                            Subcommands - none
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                        <AccordionTrigger>/</AccordionTrigger>
                        <AccordionContent>
                            Subcommands - none
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </body>
    );
}