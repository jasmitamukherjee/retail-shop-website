import React from "react";
import {
  FaBox,
  FaLaptop,
  FaMicrochip,
  FaFileAlt,
  FaShoppingBag,
  FaUtensils,
  FaRunning,
  FaTruck,
} from "react-icons/fa";

const Features = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        
        <h1 className="text-center text-4xl lg:text-5xl font-bold font-heading mb-24">
          Explore Our Specialties
        </h1>
        <div className="flex flex-wrap -mx-4">
          {/* Feature 1: Engineering Stationary */}
          <div className="w-full lg:w-1/3 px-4 mb-8">
            <div className="flex flex-col h-full">
              <div className="pb-4">
                <div className="rounded-full w-16 h-16 flex items-center justify-center bg-green-500 mx-auto mb-4">
                  <FaBox className="text-white" size="24" />
                </div>
              </div>
              <div className="relative pl-4 pb-12 border-l-4 border-green-500 flex-1">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Engineering Stationary
                </h2>
                <p className="text-gray-600">
                  Find all your stationary needs for engineering studies or work,
                  ensuring you're always prepared.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2: Computer and Mobile Accessories */}
          <div className="w-full lg:w-1/3 px-4 mb-8">
            <div className="flex flex-col h-full">
              <div className="pb-4">
                <div className="rounded-full w-16 h-16 flex items-center justify-center bg-blue-600 mx-auto mb-4">
                  <FaLaptop className="text-white" size="24" />
                </div>
              </div>
              <div className="relative pl-4 pb-12 border-l-4 border-blue-600 flex-1">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Computer and Mobile Accessories
                </h2>
                <p className="text-gray-600">
                  Enhance your devices with our range of accessories, from cables
                  to cases and more.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3: Engineering Electronics */}
          <div className="w-full lg:w-1/3 px-4 mb-8">
            <div className="flex flex-col h-full">
              <div className="pb-4">
                <div className="rounded-full w-16 h-16 flex items-center justify-center bg-yellow-500 mx-auto mb-4">
                  <FaMicrochip className="text-white" size="24" />
                </div>
              </div>
              <div className="relative pl-4 pb-12 border-l-4 border-yellow-500 flex-1">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Engineering Electronics
                </h2>
                <p className="text-gray-600">
                  Explore our selection of electronic components and devices,
                  tailored for engineering purposes.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 4: Papers and Plastic Items */}
          <div className="w-full lg:w-1/3 px-4 mb-8">
            <div className="flex flex-col h-full">
              <div className="pb-4">
                <div className="rounded-full w-16 h-16 flex items-center justify-center bg-purple-600 mx-auto mb-4">
                  <FaFileAlt className="text-white" size="24" />
                </div>
              </div>
              <div className="relative pl-4 pb-12 border-l-4 border-purple-600 flex-1">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Papers and Plastic Items
                </h2>
                <p className="text-gray-600">
                  Discover a variety of papers and plastic products suitable for
                  various uses, ensuring quality and reliability.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 5: Cosmetics and Deos */}
          <div className="w-full lg:w-1/3 px-4 mb-8">
            <div className="flex flex-col h-full">
              <div className="pb-4">
                <div className="rounded-full w-16 h-16 flex items-center justify-center bg-pink-500 mx-auto mb-4">
                  <FaShoppingBag className="text-white" size="24" />
                </div>
              </div>
              <div className="relative pl-4 pb-12 border-l-4 border-pink-500 flex-1">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Cosmetics and Deos
                </h2>
                <p className="text-gray-600">
                  Explore our beauty section, offering cosmetics and deodorants
                  from leading brands to enhance your daily routine.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 6: Food Items */}
          <div className="w-full lg:w-1/3 px-4 mb-8">
            <div className="flex flex-col h-full">
              <div className="pb-4">
                <div className="rounded-full w-16 h-16 flex items-center justify-center bg-orange-500 mx-auto mb-4">
                  <FaUtensils className="text-white" size="24" />
                </div>
              </div>
              <div className="relative pl-4 pb-12 border-l-4 border-orange-500 flex-1">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Food Items
                </h2>
                <p className="text-gray-600">
                  Discover a variety of food items ranging from snacks to pantry
                  staples, ensuring you're always stocked up.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 7: Sports Items */}
          <div className="w-full lg:w-1/3 px-4 mb-8">
            <div className="flex flex-col h-full">
              <div className="pb-4">
                <div className="rounded-full w-16 h-16 flex items-center justify-center bg-red-500 mx-auto mb-4">
                  <FaRunning className="text-white" size="24" />
                </div>
              </div>
              <div className="relative pl-4 pb-12 border-l-4 border-red-500 flex-1">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Sports Items
                </h2>
                <p className="text-gray-600">
                  Gear up for your sports activities with our range of sporting
                  goods and equipment for all enthusiasts.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 8: Courier Service */}
          <div className="w-full lg:w-1/3 px-4 mb-8">
            <div className="flex flex-col h-full">
              <div className="pb-4">
                <div className="rounded-full w-16 h-16 flex items-center justify-center bg-yellow-600 mx-auto mb-4">
                  <FaTruck className="text-white" size="24" />
                </div>
              </div>
              <div className="relative pl-4 pb-12 border-l-4 border-yellow-600 flex-1">
                <h2 className="text-2xl font-bold font-heading mb-4">
                  Courier Service
                </h2>
                <p className="text-gray-600">
                  Utilize our reliable courier services for delivering parcels and
                  documents locally and internationally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
