import React from "react";
import Image from "next/image";

export default function ServicesPage() {
  // Sample data for classes
  const classSchedule = [
    {
      id: 1,
      time: "6:00 AM",
      monday: "HIIT Blast",
      tuesday: "Yoga Flow",
      wednesday: "CrossFit",
      thursday: "Pilates",
      friday: "HIIT Blast",
      saturday: "Yoga Flow",
      sunday: "Rest",
    },
    {
      id: 2,
      time: "7:00 AM",
      monday: "Strength",
      tuesday: "Cardio",
      wednesday: "Yoga Flow",
      thursday: "HIIT Blast",
      friday: "Strength",
      saturday: "CrossFit",
      sunday: "Yoga Flow",
    },
    {
      id: 3,
      time: "8:00 AM",
      monday: "Yoga Flow",
      tuesday: "CrossFit",
      wednesday: "Pilates",
      thursday: "Cardio",
      friday: "Yoga Flow",
      saturday: "HIIT Blast",
      sunday: "Rest",
    },
    {
      id: 4,
      time: "9:00 AM",
      monday: "Pilates",
      tuesday: "HIIT Blast",
      wednesday: "Strength",
      thursday: "Yoga Flow",
      friday: "Pilates",
      saturday: "Cardio",
      sunday: "Strength",
    },
    {
      id: 5,
      time: "10:00 AM",
      monday: "CrossFit",
      tuesday: "Yoga Flow",
      wednesday: "HIIT Blast",
      thursday: "Strength",
      friday: "CrossFit",
      saturday: "Pilates",
      sunday: "Yoga Flow",
    },
    {
      id: 6,
      time: "6:00 PM",
      monday: "Cardio",
      tuesday: "Strength",
      wednesday: "Yoga Flow",
      thursday: "CrossFit",
      friday: "Cardio",
      saturday: "HIIT Blast",
      sunday: "Rest",
    },
    {
      id: 7,
      time: "7:00 PM",
      monday: "HIIT Blast",
      tuesday: "Pilates",
      wednesday: "Cardio",
      thursday: "Yoga Flow",
      friday: "HIIT Blast",
      saturday: "Strength",
      sunday: "Pilates",
    },
    {
      id: 8,
      time: "8:00 PM",
      monday: "Yoga Flow",
      tuesday: "CrossFit",
      wednesday: "Strength",
      thursday: "HIIT Blast",
      friday: "Yoga Flow",
      saturday: "CrossFit",
      sunday: "Rest",
    },
  ];

  const classDetails = [
    {
      id: 1,
      name: "HIIT Blast",
      instructor: "Sarah Johnson",
      duration: "45 minutes",
      level: "Intermediate",
      difficulty: 4,
      description:
        "High-Intensity Interval Training that combines bursts of intense activity with periods of rest. Perfect for burning calories and improving cardiovascular fitness.",
      benefits: [
        "Burns up to 500 calories",
        "Improves cardiovascular health",
        "Increases metabolism",
        "Builds lean muscle",
      ],
      color: "from-red-400 to-red-600",
      icon: "🔥",
    },
    {
      id: 2,
      name: "Yoga Flow",
      instructor: "Emma Chen",
      duration: "60 minutes",
      level: "All Levels",
      difficulty: 2,
      description:
        "A flowing sequence of yoga poses that builds strength, flexibility, and mindfulness. Suitable for all fitness levels with modifications available.",
      benefits: [
        "Improves flexibility",
        "Reduces stress",
        "Builds core strength",
        "Enhances balance",
      ],
      color: "from-blue-400 to-blue-600",
      icon: "🧘‍♀️",
    },
    {
      id: 3,
      name: "CrossFit",
      instructor: "Mike Rodriguez",
      duration: "60 minutes",
      level: "Advanced",
      difficulty: 5,
      description:
        "Functional fitness program that combines weightlifting, cardio, and bodyweight exercises. Designed to improve overall fitness and athletic performance.",
      benefits: [
        "Builds functional strength",
        "Improves conditioning",
        "Develops power",
        "Enhances coordination",
      ],
      color: "from-gray-700 to-gray-900",
      icon: "💪",
    },
    {
      id: 4,
      name: "Pilates",
      instructor: "Lisa Park",
      duration: "50 minutes",
      level: "Beginner",
      difficulty: 3,
      description:
        "Low-impact exercise focusing on core strength, flexibility, and body awareness. Great for injury prevention and rehabilitation.",
      benefits: [
        "Strengthens core",
        "Improves posture",
        "Increases flexibility",
        "Reduces back pain",
      ],
      color: "from-green-400 to-green-600",
      icon: "🤸‍♀️",
    },
    {
      id: 5,
      name: "Strength Training",
      instructor: "David Kim",
      duration: "55 minutes",
      level: "Intermediate",
      difficulty: 4,
      description:
        "Traditional weightlifting focused on building muscle mass and strength. Learn proper form and progressive overload techniques.",
      benefits: [
        "Builds muscle mass",
        "Increases bone density",
        "Boosts metabolism",
        "Improves confidence",
      ],
      color: "from-purple-400 to-purple-600",
      icon: "🏋️‍♂️",
    },
    {
      id: 6,
      name: "Cardio Blast",
      instructor: "Rachel Green",
      duration: "40 minutes",
      level: "All Levels",
      difficulty: 3,
      description:
        "High-energy cardio workout using various equipment and bodyweight exercises. Great for heart health and endurance.",
      benefits: ["Improves heart health", "Burns calories", "Increases endurance", "Boosts energy"],
      color: "from-orange-400 to-orange-600",
      icon: "❤️",
    },
  ];

  const services = [
    {
      id: 1,
      name: "Personal Training",
      price: "$75/session",
      description:
        "One-on-one training with certified personal trainers tailored to your specific goals and fitness level.",
      features: [
        "Customized workout plans",
        "Nutritional guidance",
        "Progress tracking",
        "Flexible scheduling",
      ],
      popular: true,
      icon: "👨‍💼",
    },
    {
      id: 2,
      name: "Group Training",
      price: "$35/session",
      description:
        "Small group sessions (2-4 people) that combine the benefits of personal training with the motivation of group fitness.",
      features: ["Small group setting", "Shared costs", "Team motivation", "Variety of workouts"],
      popular: false,
      icon: "👥",
    },
    {
      id: 3,
      name: "Nutrition Coaching",
      price: "$120/month",
      description:
        "Comprehensive nutrition planning and coaching to support your fitness goals and lifestyle changes.",
      features: ["Custom meal plans", "Weekly check-ins", "Recipe database", "Supplement guidance"],
      popular: false,
      icon: "🥗",
    },
    {
      id: 4,
      name: "Online Training",
      price: "$45/month",
      description:
        "Access to live-streamed classes and on-demand workouts from the comfort of your home.",
      features: [
        "Live streaming classes",
        "On-demand library",
        "Mobile app access",
        "Community support",
      ],
      popular: false,
      icon: "💻",
    },
  ];

  const getDifficultyColor = (level) => {
    switch (level) {
      case 1:
        return "bg-green-100 text-green-800";
      case 2:
        return "bg-blue-100 text-blue-800";
      case 3:
        return "bg-yellow-100 text-yellow-800";
      case 4:
        return "bg-orange-100 text-orange-800";
      case 5:
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getDifficultyText = (level) => {
    switch (level) {
      case 1:
        return "Very Easy";
      case 2:
        return "Easy";
      case 3:
        return "Moderate";
      case 4:
        return "Hard";
      case 5:
        return "Very Hard";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 pt-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive range of fitness classes and personal services designed to
              help you achieve your goals
            </p>
          </div>
        </div>
      </section>

      {/* Class Schedule Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Class Schedule
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Check out our weekly class schedule and find the perfect time to join us
            </p>
          </div>

          {/* Desktop Schedule Table */}
          <div className="hidden lg:block overflow-x-auto bg-white rounded-2xl shadow-lg">
            <table className="w-full">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold">Time</th>
                  <th className="py-4 px-6 text-center font-semibold">Monday</th>
                  <th className="py-4 px-6 text-center font-semibold">Tuesday</th>
                  <th className="py-4 px-6 text-center font-semibold">Wednesday</th>
                  <th className="py-4 px-6 text-center font-semibold">Thursday</th>
                  <th className="py-4 px-6 text-center font-semibold">Friday</th>
                  <th className="py-4 px-6 text-center font-semibold">Saturday</th>
                  <th className="py-4 px-6 text-center font-semibold">Sunday</th>
                </tr>
              </thead>
              <tbody>
                {classSchedule.map((slot, index) => (
                  <tr key={slot.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-4 px-6 font-semibold text-gray-900">{slot.time}</td>
                    <td className="py-4 px-6 text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          slot.monday === "Rest"
                            ? "bg-gray-200 text-gray-600"
                            : "bg-red-100 text-red-800"
                        }`}>
                        {slot.monday}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          slot.tuesday === "Rest"
                            ? "bg-gray-200 text-gray-600"
                            : "bg-blue-100 text-blue-800"
                        }`}>
                        {slot.tuesday}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          slot.wednesday === "Rest"
                            ? "bg-gray-200 text-gray-600"
                            : "bg-green-100 text-green-800"
                        }`}>
                        {slot.wednesday}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          slot.thursday === "Rest"
                            ? "bg-gray-200 text-gray-600"
                            : "bg-yellow-100 text-yellow-800"
                        }`}>
                        {slot.thursday}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          slot.friday === "Rest"
                            ? "bg-gray-200 text-gray-600"
                            : "bg-purple-100 text-purple-800"
                        }`}>
                        {slot.friday}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          slot.saturday === "Rest"
                            ? "bg-gray-200 text-gray-600"
                            : "bg-orange-100 text-orange-800"
                        }`}>
                        {slot.saturday}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          slot.sunday === "Rest"
                            ? "bg-gray-200 text-gray-600"
                            : "bg-pink-100 text-pink-800"
                        }`}>
                        {slot.sunday}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Schedule Cards */}
          <div className="lg:hidden space-y-4">
            {classSchedule.map((slot) => (
              <div key={slot.id} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{slot.time}</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm font-medium text-gray-600">Mon:</span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        slot.monday === "Rest"
                          ? "bg-gray-200 text-gray-600"
                          : "bg-red-100 text-red-800"
                      }`}>
                      {slot.monday}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm font-medium text-gray-600">Tue:</span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        slot.tuesday === "Rest"
                          ? "bg-gray-200 text-gray-600"
                          : "bg-blue-100 text-blue-800"
                      }`}>
                      {slot.tuesday}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm font-medium text-gray-600">Wed:</span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        slot.wednesday === "Rest"
                          ? "bg-gray-200 text-gray-600"
                          : "bg-green-100 text-green-800"
                      }`}>
                      {slot.wednesday}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm font-medium text-gray-600">Thu:</span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        slot.thursday === "Rest"
                          ? "bg-gray-200 text-gray-600"
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                      {slot.thursday}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm font-medium text-gray-600">Fri:</span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        slot.friday === "Rest"
                          ? "bg-gray-200 text-gray-600"
                          : "bg-purple-100 text-purple-800"
                      }`}>
                      {slot.friday}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm font-medium text-gray-600">Sat:</span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        slot.saturday === "Rest"
                          ? "bg-gray-200 text-gray-600"
                          : "bg-orange-100 text-orange-800"
                      }`}>
                      {slot.saturday}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm font-medium text-gray-600">Sun:</span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        slot.sunday === "Rest"
                          ? "bg-gray-200 text-gray-600"
                          : "bg-pink-100 text-pink-800"
                      }`}>
                      {slot.sunday}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Class Details
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn more about each of our fitness classes and find the perfect fit for your goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {classDetails.map((classItem) => (
              <div
                key={classItem.id}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div
                  className={`h-32 bg-gradient-to-r ${classItem.color} flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">{classItem.icon}</div>
                    <h3 className="text-2xl font-bold">{classItem.name}</h3>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(
                        classItem.difficulty
                      )}`}>
                      {getDifficultyText(classItem.difficulty)}
                    </span>
                    <span className="text-sm text-gray-600">
                      <span className="font-medium">Instructor:</span> {classItem.instructor}
                    </span>
                    <span className="text-sm text-gray-600">
                      <span className="font-medium">Duration:</span> {classItem.duration}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{classItem.description}</p>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {classItem.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <svg
                            className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="mt-6 w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200">
                    Book This Class
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Personal Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take your fitness journey to the next level with our personalized services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${
                  service.popular ? "ring-2 ring-red-500" : ""
                }`}>
                {service.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-red-500 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className={`p-8 ${service.popular ? "pt-16" : ""}`}>
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <div className="text-3xl font-bold text-red-600 mb-4">{service.price}</div>
                  </div>

                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, index) => (
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
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                      service.popular
                        ? "bg-red-600 text-white hover:bg-red-700"
                        : "bg-gray-900 text-white hover:bg-gray-700"
                    }`}>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us today and start your transformation journey with expert guidance and support
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
