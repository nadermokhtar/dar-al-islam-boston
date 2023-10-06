export default function AboutUs() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-12 lg:p-24">
      <div className="text-left p-4">
        <h2 className="text-xl font-bold mb-4">About Us</h2>

        <p className="mb-4">
          Dar Al-Islam of Boston, Inc. (DIB) helps Muslims fulfill their
          obligatory Juma'a Prayers every Friday in Downtown Boston. DIB started
          organizing the Friday congregation in December 1999. Its sole
          objective is to provide a convenient prayer place in Downtown Boston
          to enable Muslims fulfill their obligation.
        </p>

        <p className="mb-4">
          Prior to the establishment of this organization, Muslims working in
          the Downtown Boston area had no place to perform their obligatory
          Friday prayers in a congregation. On average, 300 - 350 people attend
          the weekly congregation. The prayers currently take place in the hall
          at:
        </p>

        <address className="bg-gray-100 p-3 border rounded-md mb-4">
          Cathedral Church of St. Paul
          <br />
          138 Tremont Street
          <br />
          Boston, MA 02111
        </address>

        <p className="mb-4">
          The organization provides an exclusively religious activity. The
          organization has no membership and is open to all Muslims. The
          congregation is also open to the general public for observation. The
          organization has no employees. The organization’s only source of
          financial support is voluntary donations from the congregation
          attendees.
        </p>
      </div>
    </main>
  );
}
