"use server";

export async function formAction(formData: FormData) {
  const day = Number(formData.get("day"));
  const month = Number(formData.get("month"));
  const year = Number(formData.get("year"));

  const birthDate = new Date(year, month - 1, day);
  const now = new Date();

  if (isNaN(birthDate.getTime()) || birthDate > now) {
    console.error("Invalid date");
    return null;
  }

  let ageYears = now.getFullYear() - birthDate.getFullYear();
  let ageMonths = now.getMonth() - birthDate.getMonth();
  let ageDays = now.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    // Borrow days from the previous month
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    ageDays += prevMonth.getDate();
    ageMonths--;
  }

  if (ageMonths < 0) {
    ageMonths += 12;
    ageYears--;
  }

  return {
    ageYears,
    ageMonths,
    ageDays,
  };
}
