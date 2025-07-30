"use client";

import { useState } from "react";

export default function WebsiteCreationOptions() {
  const [imagesLoaded, setImagesLoaded] = useState({
    website: false,
    products: false,
    services: false,
  });

  const handleImageLoad = (imageType) => {
    setImagesLoaded((prev) => ({
      ...prev,
      [imageType]: true,
    }));
  };

  const cards = [
    {
      title: "Start designing your site",
      description: "Launch and personalize a site using our easy-to-learn website builder.",
      buttonText: "Set Up Your Site",
      imageSrc: "https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/language-agnostic-assets/in-app-pages/website/website.png",
      imageAlt: "Website builder interface",
      imageType: "website",
    },
    {
      title: "Start selling products",
      description: "Keep your customers shopping right from your website by integrating with one of our great commerce partners like Shopify!",
      buttonText: "Connect Your Store",
      imageSrc: "https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/landing-pages-surveys/website-explore-products.jpg",
      imageAlt: "Online store interface",
      imageType: "products",
    },
    {
      title: "Start offering services",
      description: "You can connect your scheduling service directly into your website using one of our partners.",
      buttonText: "Connect Your Appointments",
      imageSrc: "https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/language-agnostic-assets/in-app-pages/website/services.png",
      imageAlt: "Appointment scheduling interface",
      imageType: "services",
    },
  ];

  return (
    <div className="max-w-[1248px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Legal text */}
      <div className="text-xs sm:text-[14px] leading-5 text-[#4C555B] mb-8 sm:mb-10">
        <p className="mb-4">
          By clicking "Get started" and signing up for an Intuit Mailchimp × Wix account, you have read and agree to our{" "}
          <a href="#" className="text-[#277e89] hover:underline">Marketplace Terms of Use</a>, our{" "}
          <a href="#" className="text-[#277e89] hover:underline">Global Privacy Statement</a>, the{" "}
          <a href="#" className="text-[#277e89] hover:underline">Wix Terms of Use</a> and acknowledge the{" "}
          <a href="#" className="text-[#277e89] hover:underline">Wix Privacy Policy</a>. 
          Intuit Mailchimp and Wix will share your information with each other and also in accordance with their respective privacy policies.
        </p>
        <p>
          *Availability of features and functionality varies by plan type. For details, view plans and pricing. SMS Marketing: SMS is available as an add-on to paid plans in select countries. Application and agreement to terms is required before purchasing credits. Messages can only be delivered to contacts in the country selected. Australia messaging available only for contacts with +61 country code. SMS credits are added to your account after purchase and approval. Credits are issued monthly and unused credits expire and do not roll over. MMS only available for Standard and Premium plans sending to US and Canada contacts. Pricing varies. See terms for details.
        </p>
      </div>

      {/* Main heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-[550] text-[#241c15] mb-6 sm:mb-8">
        Create a website with Mailchimp
      </h2>

      {/* Three column layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {cards.map((card, index) => (
          <div key={index} className="bg-white border border-[#e6e6e6] rounded-lg overflow-hidden flex flex-col">
            <div className="p-4 sm:p-6 py-8 sm:py-14 flex-grow flex flex-col items-center text-center">
              <h3 className="text-lg sm:text-xl font-[550] text-[#241c15] mb-3">
                {card.title}
              </h3>
              <p className="text-sm sm:text-[14px] text-[#21262A] mb-4 sm:mb-6">
                {card.description}
              </p>
              <button className="bg-[#f2f2f2] hover:bg-[#e5e5e5] text-[#21262A] px-4 py-2 rounded-lg text-sm sm:text-[14px] font-medium transition-colors">
                {card.buttonText}
              </button>
            </div>

            <div className="h-48 sm:h-64 flex items-center justify-center bg-gray-50">
              <img
                src={card.imageSrc}
                alt={card.imageAlt}
                className="max-w-full max-h-full object-contain p-4"
                onLoad={() => handleImageLoad(card.imageType)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}