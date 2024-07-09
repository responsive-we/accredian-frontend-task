import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSection, setActiveSection] = useState('Eligibility');

  const faqs = {
    Eligibility: [
      {
        question: "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
        answer: "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work."
      },
      {
        question: "What is the minimum system configuration required?",
        answer: "The minimum system configuration required is a computer with at least 4GB RAM, a modern processor, and a stable internet connection."
      }
    ],
    'How To Use?': [
      {
        question: "How do I access the course materials?",
        answer: "Course materials can be accessed through the online portal provided after enrollment."
      }
    ],
    'Terms & Conditions': [
      {
        question: "What is the refund policy?",
        answer: "You can request a refund within the first 14 days of enrollment if you are not satisfied with the course."
      }
    ]
  };

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Frequently Asked <span className="text-primary">Questions</span></h1>
      <div className="flex">
        <div className="w-1/4">
          {Object.keys(faqs).map((section) => (
            <Button
              key={section}
              onClick={() => {
                setActiveSection(section);
                setActiveIndex(null);
              }}
              className={`w-full p-6 mb-2`}
              variant={activeSection === section ? '' : 'outline'}
            >
              {section}
            </Button>
          ))}
        </div>
        <div className="w-3/4 pl-4 ml-">
          {faqs[activeSection].map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left text-primary font-semibold"
              >
                {faq.question}
                <FaPlus className="text-primary" />
              </button>
              {activeIndex === index && (
                <div className="mt-2 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
