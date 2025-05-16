
import React from "react";
import { Award, Book, HandHelping, Users, Lightbulb, Handshake } from "lucide-react";

const objectives = [
  {
    icon: <HandHelping className="text-hope-600" size={28} />,
    title: "Relief of Poverty",
    description:
      "BHI addresses multidimensional poverty affecting nearly half of Uganda’s children by providing direct support, sustainable income activities, and essentials like food, shelter, and financial aid.",
  },
  {
    icon: <Book className="text-hope-600" size={28} />,
    title: "Education and Training",
    description:
      "We combat NEET (Not in Education, Employment or Training) by offering educational opportunities, vocational training, and vital resources to empower youth towards a skilled, engaged future.",
  },
  {
    icon: <Lightbulb className="text-hope-600" size={28} />,
    title: "Health and Well-being",
    description:
      "We advocate for improved access to healthcare, mental health support and inclusive wellness programs that address critical health needs of children from marginalized communities.",
  },
  {
    icon: <Users className="text-hope-600" size={28} />,
    title: "Community Development",
    description:
      "We strengthen communities by promoting social inclusion, nurturing local businesses, and fostering shared resources to build a safe and supportive environment for vulnerable children.",
  },
  {
    icon: <Handshake className="text-hope-600" size={28} />,
    title: "Support for Vulnerable Groups",
    description:
      "We cater to children with disabilities, refugees, and separated children through protection, support, advocacy and resources for emotional well-being and development.",
  },
  {
    icon: <Award className="text-hope-600" size={28} />,
    title: "Advancement of Human Rights",
    description:
      "We foster equity, justice, and human rights so every child and family can live a life free from discrimination, exploitation, and neglect.",
  },
  {
    icon: <Book className="text-hope-600" size={28} />,
    title: "Promotion of the Arts and Culture",
    description:
      "We encourage artistic expression, conserve cultural heritage, and create platforms to celebrate creativity, culture, and shared artistic traditions.",
  },
  {
    icon: <Lightbulb className="text-hope-600" size={28} />,
    title: "Emergency Relief",
    description:
      "We deliver urgent aid—food, medical care, temporary shelter—during disasters so children and families can rebuild with dignity and hope.",
  },
];

const ObjectivesSection = () => (
  <section className="py-16 md:py-20 bg-white" id="objectives">
    <div className="container-custom">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
          Our Objectives
        </h2>
        <p className="text-foreground/80 text-base md:text-lg max-w-2xl mx-auto">
          At BHI, our objectives guide every project and intervention designed to uplift underprivileged children and their families in Uganda.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {objectives.map((obj, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-gray-200 bg-hope-50/50 shadow-sm p-6 hover:shadow-lg transition group"
          >
            <div className="flex items-center mb-3">{obj.icon}
              <span className="ml-3 font-semibold text-lg">{obj.title}</span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{obj.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ObjectivesSection;
