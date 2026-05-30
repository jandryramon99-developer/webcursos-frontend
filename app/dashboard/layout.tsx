import { cookies }
from "next/headers";

import { redirect }
from "next/navigation";

import {
  getCurrentUser
}
from "@/services/user.service";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const cookieStore =
    await cookies();

  const cookieHeader =
    cookieStore
      .getAll()
      .map(
        cookie =>
          `${cookie.name}=${cookie.value}`
      )
      .join("; ");

  const user =
    await getCurrentUser(
      cookieHeader
    );

  if (!user) {

    redirect("/login");
  }

  return children;
}