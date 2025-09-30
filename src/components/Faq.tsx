import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faq() {
  return (
    <div className="bg-white p-6">
      <h2 className="text-2xl font-bold text-purple-800 mb-4">FAQS</h2>
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm border border-gray-200 p-1.5 ">
          <AccordionTrigger className="text-gray-800 text-[13px] md:text-md flex items-center">Can we pay education fees through credit card?</AccordionTrigger>
          <AccordionContent className="text-gray-600 mt-2">
            User can choose either UPI or credit card for school/college/education fees payment.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm border border-gray-200 p-1.5 ">
          <AccordionTrigger className="text-gray-800 text-[13px] md:text-md flex items-center">Is it safe to pay education fee online?</AccordionTrigger>
          <AccordionContent className="text-gray-600 mt-2">
            {/* Add safety-related content here if available */}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm border border-gray-200 p-1.5 ">
          <AccordionTrigger className="text-gray-800 text-[13px] md:text-md flex items-center">Do we earn cashbacks on education payments?</AccordionTrigger>
          <AccordionContent className="text-gray-600 mt-2">
            {/* Add cashback-related content here if available */}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm border border-gray-200 p-1.5 ">
          <AccordionTrigger className="text-gray-800 text-[13px] md:text-md flex items-center">Can I download the bill after payment is completed?</AccordionTrigger>
          <AccordionContent className="text-gray-600 mt-2">
            {/* Add bill download-related content here if available */}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="bg-white rounded-lg shadow-sm border border-gray-200 p-1.5 ">
          <AccordionTrigger className="text-gray-800 text-[13px] md:text-md flex items-center">What happens if my education payment does not get processed?</AccordionTrigger>
          <AccordionContent className="text-gray-600 mt-2">
            {/* Add payment processing failure content here if available */}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}