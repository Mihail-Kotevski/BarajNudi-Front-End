import { useState } from "react";

// --- TYPE DEFINITIONS ---
interface Image {
  id: number;
  url: string;
  alt: string;
}

interface ContactInfo {
  email: string;
  phone: string;
}

interface BusinessInfo {
  mission: string;
  history: string;
}

// --- MOCK DATA ---
const PRODUCT_IMAGES: Image[] = [
  {
    id: 1,
    url: "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=2048x2048&w=is&k=20&c=oo7SGfjmPkybpqoNccDsYWG-4uxSmn8G79NiLA1mNvs=",
    alt: "Main product view",
  },
  {
    id: 2,
    url: "https://media.istockphoto.com/id/1458782106/photo/scenic-aerial-view-of-the-mountain-landscape-with-a-forest-and-the-crystal-blue-river-in.jpg?s=2048x2048&w=is&k=20&c=jbXMS_yFujUo29EIjPd8XBsEan-PAHUcPs0Zo1-HY_U=",
    alt: "Product detail 1",
  },
  {
    id: 3,
    url: "https://media.istockphoto.com/id/1296344118/photo/beautiful-happy-woman-enjoying-the-warm-sunlight-in-a-tropical-public-park.jpg?s=2048x2048&w=is&k=20&c=JwMVE8kaIBqMlGj_GogjLJMJsjoeXbOjeSHCbnTP05Y=",
    alt: "Product detail 2",
  },
  {
    id: 4,
    url: "https://media.istockphoto.com/id/1696167872/photo/aerial-view-of-forest-at-sunset-on-the-background-of-mountains-in-dolomites.jpg?s=2048x2048&w=is&k=20&c=uLAmWeg4couEsq_U62PY4mfUnM7Zut1RxGYDHhqYCNs=",
    alt: "Product detail 3",
  },
  {
    id: 5,
    url: "https://media.istockphoto.com/id/1696167872/photo/aerial-view-of-forest-at-sunset-on-the-background-of-mountains-in-dolomites.jpg?s=2048x2048&w=is&k=20&c=uLAmWeg4couEsq_U62PY4mfUnM7Zut1RxGYDHhqYCNs=",
    alt: "Product detail 3",
  },
  {
    id: 6,
    url: "https://media.istockphoto.com/id/1696167872/photo/aerial-view-of-forest-at-sunset-on-the-background-of-mountains-in-dolomites.jpg?s=2048x2048&w=is&k=20&c=uLAmWeg4couEsq_U62PY4mfUnM7Zut1RxGYDHhqYCNs=",
    alt: "Product detail 3",
  },
];

const BUSINESS_DETAILS: BusinessInfo = {
  mission:
    "Our mission is to blend artisanal craft with modern sustainability, providing high-quality, durable goods that enhance daily life while minimizing environmental impact.",
  history:
    "Founded in 2020 by two engineers, our company began as a small workshop focused on repairing vintage electronics. Today, we've grown into a brand dedicated to timeless design and responsible sourcing.",
};

const CONTACT_DETAILS: ContactInfo = {
  email: "hello@yourbusiness.com",
  phone: "+1 (555) 123-4567",
};

// --- COMPONENT ---

const CardInfo: React.FC = () => {
  const [mainImage, setMainImage] = useState<Image>(PRODUCT_IMAGES[0]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 bg-white">
      <div className="lg:grid lg:grid-cols-3 lg:gap-x-8">
        {/* --- Product Visuals (Poster & Gallery) --- */}
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-4 lg:hidden">
            The Signature Product
          </h1>

          {/* Poster (Main Image) */}
          <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg">
            <img
              src={mainImage.url}
              alt={mainImage.alt}
              className="h-full w-full object-cover object-center shadow-2xl"
            />
          </div>

          {/* Small Images (Gallery) */}
          <div className="mt-6 grid grid-cols-4 gap-4">
            {PRODUCT_IMAGES.map((image) => (
              <div
                key={image.id}
                className={`aspect-h-2 aspect-w-3 cursor-pointer overflow-hidden rounded-lg ring-2 transition-all duration-200 ${
                  image.id === mainImage.id
                    ? "ring-indigo-500 ring-offset-2"
                    : "ring-transparent hover:ring-gray-300"
                }`}
                onClick={() => setMainImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>

        {/* --- Product Info & Sidebar --- */}
        <div className="mt-10 lg:mt-0 lg:col-span-1">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-4 hidden lg:block">
            The Signature Product
          </h1>

          {/* --- Description About the Business --- */}
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Our Commitment
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-sm italic font-semibold text-indigo-600">
                Mission Statement:
              </p>
              <p className="text-base leading-relaxed">
                {BUSINESS_DETAILS.mission}
              </p>

              <p className="text-sm italic font-semibold text-indigo-600 pt-2">
                Our History:
              </p>
              <p className="text-base leading-relaxed">
                {BUSINESS_DETAILS.history}
              </p>
            </div>
          </div>

          {/* --- Contact Info --- */}
          <div className="mt-8 border-t border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h2>
            <dl className="space-y-2 text-gray-600">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-indigo-600">📧 Email:</span>
                <a
                  href={`mailto:${CONTACT_DETAILS.email}`}
                  className="text-base hover:text-indigo-500 transition"
                >
                  {CONTACT_DETAILS.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-indigo-600">📞 Phone:</span>
                <a
                  href={`tel:${CONTACT_DETAILS.phone}`}
                  className="text-base hover:text-indigo-500 transition"
                >
                  {CONTACT_DETAILS.phone}
                </a>
              </div>
              <p className="text-xs text-gray-400 pt-2">
                Available Monday - Friday, 9am - 5pm EST.
              </p>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
