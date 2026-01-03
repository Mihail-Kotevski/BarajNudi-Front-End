import { Link } from "react-router-dom";

const steps = [
  {
    icon: "📝",
    title: "Sign Up & Define",
    description:
      "Create your account in minutes. Tell us exactly what you need, setting clear goals and expectations for our service.",
  },
  {
    icon: "🛠️",
    title: "Process & Build",
    description:
      "Our system automatically processes your request. Our specialized team then takes over to build and refine your solution.",
  },
  {
    icon: "✅",
    title: "Launch & Succeed",
    description:
      "Review the final product, approve, and deploy! We provide ongoing support to ensure your continued success.",
  },
];

function About() {
  return (
    <div className=" py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-base font-semibold leading-7 text-indigo-600">
            Our Simple Process
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            See how it works in 3 easy steps
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We've streamlined our workflow to be fast, transparent, and highly
            effective. From idea to launch, here's our proven path to success.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {steps.map((step, index) => (
              <div key={step.title} className="relative pl-16">
                {/* Step Number Badge */}
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600">
                    <span className="text-xl font-bold text-white">
                      {index + 1}
                    </span>
                  </div>
                  {/* Icon and Title */}
                  <span className="ml-1 flex items-center">
                    <span className="text-2xl mr-2">{step.icon}</span>
                    {step.title}
                  </span>
                </dt>
                {/* Description */}
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {step.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Call to Action (Optional) */}
      <div className="mt-20 text-center">
        <Link
          to={"/login"}
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
        >
          Get Started Now
        </Link>
      </div>
    </div>
  );
}

export default About;
