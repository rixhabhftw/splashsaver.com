import { Button, Text } from "@splashsaver/ui";
import { SecondaryHeading } from "../../ui/SecondaryHeading";

export const Pricing = () => {
  const PRICING_MODELS = [
    {
      id: 1,
      tier: "free",
      title: "Free",
    },
    {
      id: 2,
      tier: "pro",
      title: "Pro",
    },
  ];

  return (
    <section
      className="flex items-center h-full justify-center flex-col mt-36"
      id="pricing"
    >
      <SecondaryHeading href="#pricing">Pricing</SecondaryHeading>
      <div className="flex flex-col md:flex-row w-full mt-16 items-center justify-between">
        {PRICING_MODELS.map((pricingModel) => (
          <div
            key={pricingModel.id}
            className="flex flex-col mb-10 md:mb-0 w-full h-[35rem] mx-5 p-5 shadow justify-center items-center"
          >
            {/* <h1 className="text-2xl font-bold">{pricingModel.title}</h1> */}
            <div className="max-w-sm text-center">
              <Text>
                We don&apos;t currently have a pricing model since
                splashsaver.com is still in development, check this page again
                later.
              </Text>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
