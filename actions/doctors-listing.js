"use server";

import { db } from "@/lib/prisma";

/**
 * Get doctors by specialty
 */
export async function getDoctorsBySpeciality(specialty) {
  try {
    const doctors = await db.user.findMany({
      where: {
        role: "DOCTOR",
        verificationStatus: "VERIFIED",
        speciality: specialty.split("%20").join(" "),
      },
      orderBy: {
        name: "asc",
      },
    });

    return { doctors };
  } catch (error) {
    console.error("Failed to fetch doctors by speciality:", error);
    return { error: "Failed to fetch doctors" };
  }
}