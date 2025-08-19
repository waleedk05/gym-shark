"use client";
import React from "react";
import Image from "next/image";

export default function AboutPage() {
  const instructors = [
    {
      id: 1,
      name: "Sarah Johnson",
      specialty: "HIIT & Functional Training",
      experience: "8 years",
      certifications: ["NASM-CPT", "HIIT Specialist", "Functional Movement"],
      bio: "Sarah is passionate about high-intensity training and helping clients achieve breakthrough results. With over 8 years of experience, she specializes in functional movements that translate to real-world strength and conditioning.",
      image: "/instructors/sarah.jpg", // Placeholder
      achievements: [
        "500+ clients transformed",
        "Former competitive athlete",
        "Nutrition certified",
      ],
      favoriteWorkout: "Tabata circuits with kettlebells",
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      specialty: "CrossFit & Strength Training",
      experience: "10 years",
      certifications: ["CrossFit Level 3", "USAPL Powerlifting", "Olympic Lifting"],
      bio: "Mike brings a decade of elite athletic training to Gym Shark. As a former competitive powerlifter, he understands the dedication required to reach peak performance and loves sharing that knowledge with members.",
      image: "/instructors/mike.jpg", // Placeholder
      achievements: [
        "Regional CrossFit competitor",
        "600lb deadlift PR",
        "Youth coaching specialist",
      ],
      favoriteWorkout: "Heavy compound movements followed by metabolic conditioning",
    },
    {
      id: 3,
      name: "Emma Chen",
      specialty: "Yoga & Mindfulness",
      experience: "6 years",
      certifications: ["RYT-500", "Yin Yoga Certified", "Meditation Teacher"],
      bio: "Emma discovered yoga during a stressful period in her corporate career and never looked back. She brings a calming presence and deep understanding of mind-body connection to every class she teaches.",
      image: "/instructors/emma.jpg", // Placeholder
      achievements: ["1000+ hours teaching", "Retreat leader", "Mindfulness advocate"],
      favoriteWorkout: "Vinyasa flow with meditation",
    },
    {
      id: 4,
      name: "David Kim",
      specialty: "Personal Training & Rehabilitation",
      experience: "12 years",
      certifications: ["ACSM-CPT", "Corrective Exercise", "Sports Medicine"],
      bio: "David combines his background in sports medicine with personalized training to help clients overcome injuries and achieve their fitness goals safely. His methodical approach ensures long-term success.",
      image: "/instructors/david.jpg", // Placeholder
      achievements: [
        "Physical therapy background",
        "300+ injury recoveries",
        "Continuing education leader",
      ],
      favoriteWorkout: "Progressive strength training with mobility work",
    },
    {
      id: 5,
      name: "Lisa Park",
      specialty: "Pilates & Core Conditioning",
      experience: "7 years",
      certifications: ["PMA-CPT", "Barre Instructor", "Pre/Postnatal Specialist"],
      bio: "Lisa fell in love with Pilates after it helped her recover from a back injury. She now helps others discover the transformative power of controlled movement and core strength.",
      image: "/instructors/lisa.jpg", // Placeholder
      achievements: ["Dance background", "Injury prevention specialist", "Workshop presenter"],
      favoriteWorkout: "Mat Pilates with resistance bands",
    },
    {
      id: 6,
      name: "Rachel Green",
      specialty: "Cardio & Group Fitness",
      experience: "5 years",
      certifications: ["ACE-GFI", "Spin Instructor", "Dance Fitness"],
      bio: "Rachel brings infectious energy and creativity to every group fitness class. Her background in dance and passion for music creates workouts that feel more like parties than exercise sessions.",
      image: "/instructors/rachel.jpg", // Placeholder
      achievements: [
        "Former professional dancer",
        "Choreography specialist",
        "Community fitness advocate",
      ],
      favoriteWorkout: "High-energy dance cardio with live DJ",
    },
  ];

  const stats = [
    {number: "10+", label: "Years Serving Community"},
    {number: "2,500+", label: "Members Strong"},
    {number: "15", label: "Expert Trainers"},
    {number: "50+", label: "Weekly Classes"},
  ];

  const values = [
    {
      icon: "💪",
      title: "Strength & Empowerment",
      description: "We believe fitness is about building both physical and mental strength",
    },
    {
      icon: "🤝",
      title: "Community First",
      description: "Every member is part of our fitness family, supporting each other's journey",
    },
    {
      icon: "🎯",
      title: "Goal-Oriented",
      description: "We help you set realistic goals and provide the tools to achieve them",
    },
    {
      icon: "🌟",
      title: "Excellence",
      description: "From equipment to instruction, we maintain the highest standards",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 pt-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Gym Shark</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              More than a gym - we're a community dedicated to transforming lives through fitness
            </p>
          </div>
        </div>
      </section>

      {/* About Us Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Founded in 2014, Gym Shark began with a simple belief: fitness should be
                  accessible, supportive, and transformative for everyone. What started as a small
                  neighborhood gym has evolved into a thriving fitness community where thousands of
                  members have discovered their strength, built lasting friendships, and achieved
                  goals they never thought possible.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We're not just about building stronger bodies - we're about building stronger
                  communities. Our state-of-the-art facility, expert trainers, and diverse class
                  offerings create an environment where every fitness level feels welcome and
                  challenged.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  From the first-time gym-goer to the seasoned athlete, we provide the tools,
                  knowledge, and motivation needed to unlock your potential. Because at Gym Shark,
                  we believe that when you invest in your fitness, you're investing in your best
                  life.
                </p>
              </div>

              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200">
                  Join Our Community
                </button>
                <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors duration-200">
                  Take a Tour
                </button>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                {/* Placeholder for gym photo - you can replace with actual image */}
                <div className="h-[500px] bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🏋️‍♂️</div>
                    <p className="text-xl font-semibold">Professional Gym Photo</p>
                    <p className="text-sm opacity-75">Replace with actual facility image</p>
                  </div>
                </div>
                {/* When you have the actual image, replace above div with: */}
                {/* <Image 
                  src="/gym-facility.jpg" 
                  alt="Gym Shark Facility" 
                  width={600}
                  height={500}
                  className="object-cover w-full h-[500px]"
                  priority
                /> */}
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-red-100 rounded-full -z-10 opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-gray-100 rounded-full -z-10 opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Gym Shark
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Profiles Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Expert Trainers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our certified trainers are passionate about helping you achieve your fitness goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor) => (
              <div
                key={instructor.id}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Instructor Photo */}
                <div className="h-64 bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center">
                  {/* Placeholder for instructor photo */}
                  <div className="text-center text-white">
                    <div className="text-5xl mb-2">👤</div>
                    <p className="text-sm font-semibold">{instructor.name}</p>
                    <p className="text-xs opacity-75">Professional Headshot</p>
                  </div>
                  {/* When you have actual photos, replace above div with: */}
                  {/* <Image 
                    src={instructor.image} 
                    alt={instructor.name} 
                    width={300}
                    height={256}
                    className="object-cover w-full h-64"
                  /> */}
                </div>

                {/* Instructor Info */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{instructor.name}</h3>
                    <p className="text-red-600 font-semibold mb-2">{instructor.specialty}</p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Experience:</span> {instructor.experience}
                    </p>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed mb-4">{instructor.bio}</p>

                  {/* Certifications */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Certifications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {instructor.certifications.map((cert, index) => (
                        <span
                          key={index}
                          className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Achievements:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {instructor.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-center">
                          <svg
                            className="w-3 h-3 text-green-500 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Favorite Workout */}
                  <div className="bg-white p-3 rounded-lg">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">Favorite Workout:</h4>
                    <p className="text-xs text-gray-600 italic">"{instructor.favoriteWorkout}"</p>
                  </div>

                  {/* Contact Button */}
                  <button className="w-full mt-4 bg-gray-900 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200 text-sm">
                    Train with {instructor.name.split(" ")[0]}
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
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community and experience the difference of training with passionate
            professionals
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => (window.location.href = "tel:+15551234567")}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 transform hover:scale-105">
              Schedule a Tour
            </button>
            <button
              onClick={() => (window.location.href = "mailto:info@gymshark.com")}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
