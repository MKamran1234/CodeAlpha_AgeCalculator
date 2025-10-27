document.getElementById("calculate").addEventListener("click", function () {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  // Input Validation
  if (!day || !month || !year) {
    document.getElementById("result").innerHTML = "Please enter a valid date.";
    return;
  }

  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  if (birthDate > today) {
    document.getElementById("result").innerHTML = "Birth date cannot be in the future!";
    return;
  }

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  // Adjust if current month/day is before birth month/day
  if (ageDays < 0) {
    ageMonths--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    ageDays += prevMonth;
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  document.getElementById("result").innerHTML = `
    You are <strong>${ageYears}</strong> years,
    <strong>${ageMonths}</strong> months, and
    <strong>${ageDays}</strong> days old.
  `;
});
