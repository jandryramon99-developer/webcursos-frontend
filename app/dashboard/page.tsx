
import DashboardHeader from "@/components/dashboard/DashboardHeader";

import DashboardStats from "@/components/dashboard/DashboardStats";

import UserSidebar from "@/components/dashboard/UserSidebar";

import MobileSidebar from "@/components/dashboard/MobileSidebar";

import WelcomeModal from "@/components/dashboard/WelcomeModal";

import { cookies } from "next/headers";
import { getCurrentUser }
from "@/services/auth.service";

import { getCourses }
from "@/services/course.service";
import RecommendedCourses from "@/components/dashboard/RecommendedCourses";
import { redirect } from "next/navigation";

import VerifyEmailBanner from "@/components/dashboard/VerifyEmailBanner";

/*
|--------------------------------------------------------------------------
| DASHBOARD PAGE
|--------------------------------------------------------------------------
*/

export default async function DashboardPage() {

  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString(); 

  const user =
    await getCurrentUser(cookieHeader);

  const courses =
    await getCourses();

  if (!user) {

    redirect("/login");
    
  }
  return (

    <main className="min-h-screen bg-black">

      {/* MOBILE */}

      <MobileSidebar />

      <div className="flex">

        {/* DESKTOP */}

        <UserSidebar />

        {/* CONTENT */}

        <section className="flex-1 min-h-screen pt-28 lg:pt-10 p-6 lg:p-10">

          {/* HEADER */}
          {
            !user.emailVerified && (

              <VerifyEmailBanner
                email={user.email}
              />
            )
          }
          <DashboardHeader
            user={user}
          />
          <WelcomeModal
            userName={user.name}
          />
          {/* STATS */}

          <DashboardStats />

          {/* COURSES */}

          <section className="mt-12">

            {/* <div className="mb-6">

              <h2 className="text-2xl font-bold text-white">

                Cursos disponibles

              </h2>

              <p className="text-zinc-400 mt-1">

                Descubre nuevos cursos.

              </p>

            </div> */}
            {/* <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

              <ContinueLearning
                courses={courses}
              />

            </div> */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

              <RecommendedCourses
                courses={courses}
              />

            </div>

          </section>

        </section>

      </div>

    </main>
  );
}