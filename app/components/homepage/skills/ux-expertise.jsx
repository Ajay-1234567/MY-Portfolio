"use client";

import Image from "next/image";

const expertiseData = [
    {
        title: "UX Design Process",
        description: "End-to-end design methodology from Empathy to Implementation.",
        image: "/design/ux-process.png", // Path where we'll put the image
    },
    {
        title: "Wireframing & Prototyping",
        description: "Low to high-fidelity wireframes and interactive prototypes.",
        image: "/design/wireframes.png",
    },
    {
        title: "Information Architecture",
        description: "Complex system mapping and user flow optimization.",
        image: "/design/information-architecture.png",
    }
];

function UXExpertise() {
    return (
        <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center uppercase tracking-widest">
                Design <span className="text-orange-500">Expertise</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {expertiseData.map((item, index) => (
                    <div key={index} className="group bg-gray-50 rounded-3xl p-6 border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300">
                        <div className="relative w-full aspect-video mb-6 rounded-2xl overflow-hidden bg-white shadow-inner">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UXExpertise;
