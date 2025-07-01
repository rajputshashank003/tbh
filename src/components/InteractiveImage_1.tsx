import { useState } from "react";

const InteractiveImage_1 = () => {
    const images = [
        '/InteractiveImage_1/i1.jpg',
        '/InteractiveImage_1/i2.jpg',
        '/InteractiveImage_1/i3.jpg',
        '/InteractiveImage_1/i4.jpg'
    ];
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const handleImageChange = (index: any) => {
        setFade(false);
        setTimeout(() => {
            setSelectedImageIndex(index);
            setFade(true);
        }, 200);
    };

    const features = [
        {
            text: "Personalized, therapist-led support groups",
            icon: "/InteractiveImage_1/smily1.png"
        },
        {
            text: "1:1 check-ins with culturally-competent therapists",
            icon: "/InteractiveImage_1/page2_smily2.png",
            description: [
                "Live one-on-one counseling sessions with a licensed therapist, providing students with the help they need from the privacy and comfort of their own devices.",
                "We provide on-demand access to a roster of diverse clinicians, specialized in a variety of therapeutic techniques and populations, that students can select from based on their personal preferences."
            ]
        },
        {
            text: "Real-time SMS support",
            icon: "/InteractiveImage_1/chat_1.png"
        },
        {
            text: "Interactive mental health resource library",
            icon: "/InteractiveImage_1/interactive-library.png"
        }
    ];

    return (
        <div className="px-[20px] md:mx-[8%] lg:mx-[10%] pb-[20px]">
            <div style={{ fontFamily: 'f1, serif' }} className="text-[26px] pb-[50px]">
                One platform, multiple touchpoints.
            </div>
            <div className="lg:grid lg:grid-cols-5 flex flex-col gap-6">
                <div className="flex flex-col gap-[16px] lg:col-span-2">
                    <div style={{ fontFamily: 'f5, serif' }} className="text-[36px] leading-10">
                        We support students, no matter what they’re dealing with.
                    </div>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            onClick={() => handleImageChange(index)}
                            className="cursor-pointer text-[17px] group flex flex-col gap-[8px] items-start"
                            style={{ fontFamily: 'f2, serif' }}
                        >
                            <div className="flex flex-row gap-[16px] items-center">
                                <img
                                    src={feature.icon}
                                    className="h-[40px] w-[40px] relative left-0 group-hover:left-[6px] transition-all duration-200"
                                    alt=""
                                />
                                <span>{feature.text}</span>
                            </div>
                            {feature.description && (
                                <>
                                    <span className="text-[16px] ml-[56px]" style={{ color: 'rgb(132, 126, 124)' }}>
                                        {feature.description[0]}
                                    </span>
                                    <ul className="list-disc pl-5 marker:text-black marker:text-xl text-[16px] ml-[56px] space-y-2" style={{ color: 'rgb(132, 126, 124)' }}>
                                        <li>{feature.description[1]}</li>
                                    </ul>
                                </>
                            )}
                        </div>
                    ))}
                </div>
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-auto lg:col-span-3">
                    <img
                        src={images[selectedImageIndex]}
                        className={`h-full w-full object-contain absolute top-0 left-0 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default InteractiveImage_1;
