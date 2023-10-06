export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-12 lg:p-24">
      <div className="text-left p-4">
        <h1 className="text-xl md:text-2xl font-bold">Welcome</h1>
        <p className="mt-4">
          Assalaamu 'alaikum. Peace be upon you. السلام عليكم ورحمة الله وبركاته
        </p>
        <p className="mt-4">
          Welcome to the official website of Dar al-Islam of Boston (DIB).
        </p>
        <p className="mt-4">
          We are a non-profit organization dedicated to serving both Muslims in
          the Boston area and the entire Boston community at large. We invite
          you to learn more about us and the truth, beauty, righteousness, and
          peacefulness of the religion of Islam. We hope you find this website
          to be useful and welcome you to contact us with any questions that you
          may have.
        </p>
        <p className="mt-4">
          Our primary service is the weekly Juma prayer every Friday. The sermon
          starts at 12:45 PM and the prayer starts at 1:15 PM. Check{" "}
          <a
            href="http://diboston.org/our_services.html"
            className="text-blue-500 hover:underline"
          >
            Our Services
          </a>{" "}
          page for more details.
        </p>
      </div>
    </main>
  );
}
