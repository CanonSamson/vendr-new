export function stringToformatDate(inputDate: string): string {
  // Parse the input date string
  const date = new Date(inputDate);

  // Get the month, day, year, hour, and minute
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();
  let hour = date.getHours();
  const minute = ("0" + date.getMinutes()).slice(-2);
  const period = hour >= 12 ? "PM" : "AM";

  // Convert hour to 12-hour format
  if (hour > 12) {
    hour -= 12;
  }

  // Format the date in the desired format
  const formattedDate = `${month} ${day}, ${year} ${hour}:${minute} ${period}`;

  return formattedDate;
}

interface User {
  fullName?: string | null;
}

export function getUserFirstName(user: User): string {
  if (!user?.fullName) return "";
  const nameParts = user.fullName.split(" ");
  return nameParts.length > 0 ? nameParts[0] : user.fullName || "";
}

export function getFirstName(fullName: string | null): string {
  if (!fullName) return "";
  const nameParts = fullName.split(" ");
  return nameParts.length > 0 ? nameParts[0] : fullName || "";
}

export function getNameInitials(fullName: string): string {
  const fullnameArray = fullName.split(" ");

  if (fullnameArray.length >= 2) {
    const firstNameInitial = fullnameArray[0][0];
    const lastNameInitial = fullnameArray[1][0];

    return `${firstNameInitial}`;
  } else {
    return `${fullnameArray[0][0]} `;
  }
}

export function convertDateFormat(inputDate: string): string {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const date = new Date(inputDate);

  const monthIndex = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();

  const suffix = (day % 10 === 1 && day !== 11) ? "st" :
    (day % 10 === 2 && day !== 12) ? "nd" :
      (day % 10 === 3 && day !== 13) ? "rd" : "th";

  const formattedDate = `${months[monthIndex]} ${day}${suffix}, ${year}`;

  return formattedDate;
}
