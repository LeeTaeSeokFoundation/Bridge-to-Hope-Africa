"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Heart, BookOpen, Users } from "lucide-react"

export default function Home() {
  // 히어로 섹션 텍스트 표시 여부를 제어하는 상태 변수
  // 이 변수를 true/false로 변경하여 텍스트 표시 여부를 조정할 수 있습니다.
  // true: 텍스트 표시, false: 텍스트 숨김
  const [showHeroText, setShowHeroText] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo-1.png" alt="Foundation Logo" width={200} height={50} className="h-10 w-auto" />
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-slate-800">Bridge to Hope Africa</span>
            </div>
          </div>
          <nav className="hidden md:flex md:items-center md:gap-6">
            <Link href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              About Us
            </Link>
            <Link href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              News
            </Link>
            <Link href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Programs
            </Link>
            <Link href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Updates
            </Link>
            <Link href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Support & Volunteer
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Mobile Optimized */}
        <section className="relative">
          <div className="relative w-full overflow-hidden bg-slate-100">
            {/* 모바일에서는 이미지가 전체 보이도록 조정 */}
            <div className="mx-auto max-w-6xl">
              <Image
                src="/hero-image.jpg"
                alt="Foundation Activities"
                width={1920}
                height={800}
                className="h-auto w-full object-contain md:object-cover"
                priority
              />
            </div>

            {/* 텍스트 컨테이너 - showHeroText 상태에 따라 표시/숨김 */}
            {showHeroText && (
              <div className="absolute bottom-0 left-0 right-0">
                <div className="container px-4 py-4 md:py-8">
                  <div className="mx-auto max-w-3xl rounded-t-xl bg-black/20 p-4 text-center md:p-8">
                    <h1 className="mb-2 text-2xl font-bold leading-tight text-white drop-shadow-md sm:text-3xl md:mb-4 md:text-5xl lg:text-6xl">
                      Building a Better World Together
                    </h1>
                    <p className="mb-4 text-sm text-white drop-shadow-md md:mb-8 md:text-lg">
                      The Bridge to Hope Africa creates a better future through education, healthcare, and cultural
                      support. Your small help makes a big difference.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                      <Button className="rounded-full bg-white px-4 py-1 text-sm text-amber-800 hover:bg-white/90 md:px-6 md:py-2 md:text-base">
                        Learn About Us
                      </Button>
                      <Button
                        variant="outline"
                        className="rounded-full border-white bg-transparent px-4 py-1 text-sm text-white hover:bg-white/30 md:px-6 md:py-2 md:text-base"
                      >
                        Get Involved
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-white py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold text-slate-800 sm:text-4xl">Our Mission</h2>
              <p className="mb-10 text-lg text-slate-600">
                The Bridge to Hope Africa contributes to community development through leadership education and
                medical support in areas with limited educational opportunities. We help everyone dream of a better
                future with dignity.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-amber-50 p-6 transition-all hover:shadow-md">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-800">Education Support</h3>
                <p className="text-slate-600">
                  We nurture future talent through leadership schools and educational programs.
                </p>
              </div>
              <div className="rounded-lg bg-amber-50 p-6 transition-all hover:shadow-md">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-800">Healthcare Support</h3>
                <p className="text-slate-600">
                  We provide medical support and health education in areas with limited medical services.
                </p>
              </div>
              <div className="rounded-lg bg-amber-50 p-6 transition-all hover:shadow-md">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-800">Cultural Exchange</h3>
                <p className="text-slate-600">
                  We promote mutual understanding and cooperation through various cultural exchange programs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="bg-slate-50 py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold text-slate-800 sm:text-4xl">Our Impact</h2>
              <p className="mb-10 text-lg text-slate-600">
                The Bridge to Hope Africa has brought positive changes to many people's lives through various projects
                over the years.
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-white p-6 text-center shadow-sm">
                <div className="mb-2 text-3xl font-bold text-amber-700">554 Students</div>
                <p className="text-slate-600">Lee Tae Seok Primary School</p>
              </div>
              <div className="rounded-lg bg-white p-6 text-center shadow-sm">
                <div className="mb-2 text-3xl font-bold text-amber-700">Four times a year</div>
                <p className="text-slate-600">Providing Food and Medical Aid to Lychok Village</p>
              </div>
              <div className="rounded-lg bg-white p-6 text-center shadow-sm">
                <div className="mb-2 text-3xl font-bold text-amber-700">48</div>
                <p className="text-slate-600">Lee Tae Seok Scholar</p>
              </div>
              <div className="rounded-lg bg-white p-6 text-center shadow-sm">
                <div className="mb-2 text-3xl font-bold text-amber-700">5,000+</div>
                <p className="text-slate-600">Medical Support Cases</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Activities */}
        <section className="bg-white py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold text-slate-800 sm:text-4xl">Recent Activities</h2>
              <p className="mb-10 text-lg text-slate-600">
                Check out the recent activities and achievements of the Bridge to Hope Africa.
              </p>
            </div>

            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/activity-1.jpg"
                    alt="Leadership School Graduation"
                    width={400}
                    height={200}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 text-sm font-medium text-amber-700">Education</div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-800">Leadership School Graduation</h3>
                  <p className="mb-4 text-slate-600">
                    On December 7, 2024, the graduation ceremony of the 4th class of the Lee Tae Seok Leadership School was held.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-amber-700 hover:text-amber-800"
                  >
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/activity-2.jpg"
                    alt="Medical Volunteer Work"
                    width={400}
                    height={200}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 text-sm font-medium text-amber-700">Healthcare</div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-800">Medical Volunteer Work</h3>
                  <p className="mb-4 text-slate-600">We conducted medical volunteer work for local residents.</p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-amber-700 hover:text-amber-800"
                  >
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/activity-3.jpg"
                    alt="Cultural Exchange Program"
                    width={400}
                    height={200}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 text-sm font-medium text-amber-700">Culture</div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-800">Cultural Exchange Program</h3>
                  <p className="mb-4 text-slate-600">
                    We conducted a cultural exchange program between Korean and local students.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-amber-700 hover:text-amber-800"
                  >
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" className="rounded-full border-amber-700 px-6 text-amber-700 hover:bg-amber-50">
                View More Activities
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-amber-700 py-16 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Create Change Together</h2>
              <p className="mb-10 text-lg text-white/90">
                Your support brings hope to more people. Small contributions come together to make big changes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="rounded-full bg-white px-8 py-6 text-amber-700 hover:bg-white/90">
                  Get Involved Now
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-white bg-transparent px-8 py-6 text-white hover:bg-white/10"
                >
                  Volunteer With Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 py-12 text-slate-300">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-white">Bridge to Hope Africa</span>
              </div>
              <p className="mt-4 text-sm text-slate-400">
                The Bridge to Hope Africa is a non-profit organization creating a better world through education,
                healthcare, and cultural support.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>8th Floor, Gwangbok Hall, 15, Gukhoe daero 62 gil, Yeouido dong, Yeongdeungpo gu, Seoul, Republic of Korea</li>
                <li>Phone: +82-2-595-9093</li>
                <li>Email: contact@leetaeseok.org</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Newsletter</h3>
              <p className="mb-4 text-sm text-slate-400">Receive the latest news from the foundation by email.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-l-md border-0 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <Button className="rounded-l-none bg-amber-600 hover:bg-amber-700">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
            <p>© 2025 Bridge to Hope Africa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

