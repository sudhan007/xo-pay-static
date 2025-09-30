import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Faq() {
  return (
    <div className="bg-white p-6">
      <h2 className="text-2xl font-bold text-secondary-foreground mb-4">
        FAQS
      </h2>
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem
          value="item-1"
          className="bg-white rounded-lg shadow-sm  p-1.5 ">
          <AccordionTrigger className="text-secondary-foreground flex items-center md:text-base">
            Can I pay education fees using a credit card?
          </AccordionTrigger>
          <AccordionContent className="text-muted mt-2">
            Yes, you can pay school, college, or tuition fees using either UPI
            or a credit card.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="bg-white rounded-lg shadow-sm  p-1.5 ">
          <AccordionTrigger className="text-secondary-foreground flex items-center md:text-base">
            Is it secure to pay education fees online?
          </AccordionTrigger>
          <AccordionContent className="text-muted mt-2">
            Absolutely. Payments are processed through trusted and secure
            gateways to ensure complete safety.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="bg-white rounded-lg shadow-sm  p-1.5 ">
          <AccordionTrigger className="text-secondary-foreground flex items-center md:text-base">
            Do I get rewards or cashback on education payments?
          </AccordionTrigger>
          <AccordionContent className="text-muted mt-2">
            Yes, you may receive cashback or rewards on eligible education fee
            payments. Please refer to the terms and conditions for details.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className="bg-white rounded-lg shadow-sm  p-1.5 ">
          <AccordionTrigger className="text-secondary-foreground flex items-center md:text-base">
            Can I download a receipt after making the payment?
          </AccordionTrigger>
          <AccordionContent className="text-muted mt-2">
            Yes, once the payment is completed, registered users can instantly
            download their digital receipt.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-5"
          className="bg-white rounded-lg shadow-sm  p-1.5 ">
          <AccordionTrigger className="text-secondary-foreground flex items-center md:text-base">
            What should I do if my education fee payment fails?
          </AccordionTrigger>
          <AccordionContent className="text-muted mt-2">
            If a payment does not go through, you can contact our support team
            for quick assistance and resolution.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
