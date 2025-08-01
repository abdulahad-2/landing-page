"use client";

import { useMemo, useCallback } from "react";

// Type definitions
interface ProfileCardProps {
  name: string;
  title: string;
  handle: string;
  status: string;
  contactText: string;
  avatarUrl: string;
  behindGradient: string;
  innerGradient: string;
  miniAvatarUrl: string;
  showUserInfo: boolean;
  enableTilt: boolean;
  onContactClick: () => void;
}

interface FloatingElementProps {
  delay: number;
  duration: number;
  className: string;
}

interface StatItem {
  label: string;
  value: string;
}

// Import your actual ProfileCard component
import ProfileCard from "./../src/blocks/Components/ProfileCard/ProfileCard";

export function HeroSection() {
  const textLines = useMemo(
    () => ["Full Stack?", "Low Code?", "High Impact?", "Let's Build."],
    []
  );

  const colors = useMemo(
    () => [
      "text-blue-500",
      "text-purple-500",
      "text-pink-500",
      "text-yellow-500",
    ],
    []
  );

  const stats: StatItem[] = useMemo(
    () => [
      { label: "Projects", value: "50+" },
      { label: "Experience", value: "3+ Yrs" },
      { label: "Technologies", value: "15+" },
    ],
    []
  );

  const handleSendEmail = useCallback(() => {
    window.location.href = "mailto:abdul.ahadt732@gmail.com";
  }, []);

  const FloatingElement = ({
    delay,
    duration,
    className,
  }: FloatingElementProps) => (
    <div
      className={`absolute opacity-10 ${className}`}
      style={{
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      <div className="w-12 h-12 bg-gray-500 rounded-full blur-sm"></div>
    </div>
  );

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(147, 51, 234, 0.8),
              0 0 60px rgba(236, 72, 153, 0.3);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slide-in-up {
          animation: slideInUp 0.8s ease-out forwards;
        }
        .animate-fade-in-scale {
          animation: fadeInScale 1s ease-out forwards;
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .text-foreground {
          color: var(--foreground);
        }
      `}</style>

      <section
        id="about"
        className="py-8 sm:py-12 md:py-16 lg:py-20 min-h-screen flex items-center relative overflow-hidden"
      >
        <div className="hidden md:block">
          <FloatingElement
            delay={0}
            duration={6}
            className="top-1/4 left-1/4"
          />
          <FloatingElement
            delay={2}
            duration={8}
            className="top-3/4 right-1/4"
          />
          <FloatingElement
            delay={4}
            duration={7}
            className="bottom-1/4 left-3/4"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center min-h-[80vh] lg:min-h-0">
            {/* Text Column */}
            <div className="space-y-4 order-1 lg:order-2 text-center lg:text-left px-2">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-4 leading-tight whitespace-pre-line">
                  <span className="block mb-1">
                    <span className="text-foreground transition-all inline-block">Full Stack?</span>
                  </span>
                  <span className="block mb-1">
                    <span className="text-foreground transition-all inline-block">Low Code?</span>
                  </span>
                  <span className="block mb-1">
                    <span className="text-foreground transition-all inline-block">High Impact?</span>
                  </span>
                  <span className="block mb-1">
                    <span className="text-foreground transition-all inline-block">Let's Build.</span>
                  </span>
                </h2>

                <p className="text-lg sm:text-xl md:text-2xl font-playfair italic font-bold transition-all duration-1000 opacity-100 translate-y-0">
                  <span className="text-foreground">I got you</span>
                  <span className="inline-block ml-2 animate-bounce">✨</span>
                </p>
              </div>

              <div
                className={`transition-all duration-1000 delay-300 ${
                  // isTypingComplete
                    "opacity-100 translate-y-0"
                    // : "opacity-0 translate-y-4"
                }`}
              >
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed font-inconsolata mb-6">
                  Transforming ideas into digital experiences through code,
                  creativity, and innovation. From full-stack development to
                  no-code solutions, I bridge the gap between imagination and
                  reality.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <button
                    onClick={handleSendEmail}
                    className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 animate-glow text-sm"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>Let&apos;s Connect</span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </span>
                  </button>

                  <button className="px-6 py-3 border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white font-semibold rounded-full transition-all transform hover:scale-105 text-sm">
                    View My Work
                  </button>
                </div>
              </div>
            </div>

            {/* Profile Card Column */}
            <div className="flex flex-col items-center lg:items-start space-y-4 order-2 lg:order-1">
              <div className="animate-fade-in-scale w-full max-w-sm">
                <ProfileCard
                  name="Abdul Ahad"
                  title="Aspiring Developer and Entrepreneur"
                  handle="Abdulahad"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl="/photos/tiltedcard.svg"
                  behindGradient="to-br from-blue-400 via-purple-500 to-pink-600"
                  innerGradient="to-r from-blue-500 to-purple-500"
                  miniAvatarUrl="/photos/tiltedcard.svg"
                  showUserInfo={true}
                  enableTilt={true}
                  onContactClick={handleSendEmail}
                />
              </div>

              <div
                className={`transition-all duration-1000 delay-700 ${
                  // isTypingComplete
                    "opacity-100 translate-y-0"
                    // : "opacity-0 translate-y-4"
                }`}
              >
                <div className="grid grid-cols-3 gap-3">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-3 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all"
                    >
                      <div className="text-xl font-bold text-purple-600">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden sm:block absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  );
}
