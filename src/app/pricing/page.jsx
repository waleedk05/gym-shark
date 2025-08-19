"use client";
import React, {useState} from "react";

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [showClassModal, setShowClassModal] = useState(false);

  const pricingPlans = [
    {
      id: 1,
      name: "Basic",
      price: "$29",
      period: "/month",
      description: "Perfect for beginners looking to start their fitness journey",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Basic fitness assessment",
        "Mobile app access",
        "Community support",
      ],
      popular: false,
      color: "from-gray-600 to-gray-800",
    },
    {
      id: 2,
      name: "Premium",
      price: "$59",
      period: "/month",
      description: "Our most popular plan with unlimited classes and perks",
      features: [
        "Everything in Basic",
        "Unlimited group classes",
        "Guest pass (2 per month)",
        "Nutrition consultation",
        "Personal training discount",
        "Priority booking",
      ],
      popular: true,
      color: "from-red-500 to-red-700",
    },
    {
      id: 3,
      name: "Elite",
      price: "$99",
      period: "/month",
      description: "Premium experience with personal training and exclusive perks",
      features: [
        "Everything in Premium",
        "4 personal training sessions",
        "Custom nutrition plan",
        "Recovery services access",
        "VIP locker room",
        "Exclusive member events",
        "Supplement discounts",
      ],
      popular: false,
      color: "from-purple-600 to-purple-800",
    },
  ];

  const classPackages = [
    {
      id: 1,
      name: "Drop-in Class",
      price: "$25",
      period: "/class",
      description: "Try any class without commitment",
      features: ["Single class access", "All class types available", "No membership required"],
    },
    {
      id: 2,
      name: "Class Package",
      price: "$200",
      period: "/10 classes",
      description: "Save with our 10-class package",
      features: ["10 class credits", "3-month expiry", "20% savings", "Flexible scheduling"],
    },
    {
      id: 3,
      name: "Unlimited Classes",
      price: "$149",
      period: "/month",
      description: "Unlimited access to all group classes",
      features: [
        "Unlimited group classes",
        "Priority booking",
        "Guest passes",
        "Mobile app access",
      ],
    },
  ];

  const personalTraining = [
    {
      id: 1,
      name: "Single Session",
      price: "$75",
      period: "/session",
      description: "One-on-one personal training session",
      features: [
        "60-minute session",
        "Customized workout",
        "Progress tracking",
        "Nutritional guidance",
      ],
    },
    {
      id: 2,
      name: "4-Session Package",
      price: "$280",
      period: "/package",
      description: "Save with our 4-session package",
      features: ["4 training sessions", "10% discount", "Flexible scheduling", "Goal assessment"],
    },
    {
      id: 3,
      name: "8-Session Package",
      price: "$520",
      period: "/package",
      description: "Best value for committed fitness goals",
      features: [
        "8 training sessions",
        "15% discount",
        "Custom meal plan",
        "Body composition analysis",
      ],
    },
  ];

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setShowBookingModal(true);
  };

  const handleBookClass = (classPackage) => {
    setSelectedClass(classPackage);
    setShowClassModal(true);
  };

  const closeModal = () => {
    setShowBookingModal(false);
    setShowClassModal(false);
    setSelectedPlan(null);
    setSelectedClass(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 pt-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Pricing Plans</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your fitness journey. No hidden fees, cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Membership Plans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All plans include access to our state-of-the-art facilities and expert support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  plan.popular ? "ring-2 ring-red-500 scale-105" : ""
                }`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-red-500 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div
                  className={`h-32 bg-gradient-to-r ${plan.color} ${
                    plan.popular ? "mt-10" : ""
                  }`}></div>

                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <svg
                          className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleSelectPlan(plan)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${
                      plan.popular
                        ? "bg-red-600 text-white hover:bg-red-700"
                        : "bg-gray-900 text-white hover:bg-gray-700"
                    }`}>
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Class Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible options for group fitness classes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {classPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-gray-600">{pkg.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{pkg.description}</p>
                </div>

                <ul className="space-y-2 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 text-green-500 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleBookClass(pkg)}
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Training */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Personal Training
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              One-on-one training sessions with certified personal trainers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {personalTraining.map((training) => (
              <div
                key={training.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{training.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl font-bold text-gray-900">{training.price}</span>
                    <span className="text-gray-600">{training.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{training.description}</p>
                </div>

                <ul className="space-y-2 mb-8">
                  {training.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 text-green-500 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleBookClass(training)}
                  className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200">
                  Book Session
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Selection Modal */}
      {showBookingModal && selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Join {selectedPlan.name} Plan
              </h3>
              <p className="text-gray-600">
                You've selected the {selectedPlan.name} membership plan
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">Plan:</span>
                <span>{selectedPlan.name}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">Price:</span>
                <span className="text-xl font-bold">
                  {selectedPlan.price}
                  {selectedPlan.period}
                </span>
              </div>
              <div className="text-sm text-gray-600">No setup fees • Cancel anytime</div>
            </div>

            <p className="text-sm text-gray-600 mb-6 text-center">
              To complete your membership signup, please visit our gym or call us at (555) 123-4567
            </p>

            <div className="flex gap-4">
              <button
                onClick={closeModal}
                className="flex-1 bg-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-400 transition-colors duration-200">
                Close
              </button>
              <button
                onClick={() => (window.location.href = "tel:+15551234567")}
                className="flex-1 bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200">
                Call Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Class/Training Booking Modal */}
      {showClassModal && selectedClass && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Book {selectedClass.name}</h3>
              <p className="text-gray-600">
                Ready to get started? Contact us to schedule your session.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">Service:</span>
                <span>{selectedClass.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Price:</span>
                <span className="text-xl font-bold">
                  {selectedClass.price}
                  {selectedClass.period}
                </span>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <button
                onClick={() => (window.location.href = "tel:+15551234567")}
                className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call (555) 123-4567
              </button>

              <button
                onClick={() =>
                  (window.location.href =
                    "mailto:bookings@gymshark.com?subject=Book " + selectedClass.name)
                }
                className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Send Email
              </button>
            </div>

            <button
              onClick={closeModal}
              className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-400 transition-colors duration-200">
              Close
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Questions About Our Pricing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team is here to help you find the perfect plan for your fitness goals
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location.href = "tel:+15551234567")}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 transform hover:scale-105">
              Call Us Now
            </button>
            <button
              onClick={() => (window.location.href = "mailto:info@gymshark.com")}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105">
              Email Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
