export default function Directions() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-12 lg:p-24">
      <div className="text-left p-4">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Directions</h2>

        <h3 className="text-lg font-semibold mt-4">Location</h3>
        <p className="mt-4">
          Weekly Friday prayers and occasional other events are held in a large
          room at the basement level of the Cathedral of St. Paul, located at:
        </p>
        <address className="bg-gray-100 p-3 border rounded-md mt-4 mb-4">
          138 Tremont Street, Boston, MA 02111
        </address>
        <p className="mt-4 italic">
          Note: Please enter from the side door (on the right of the steps),
          proceed down the long corridor, then turn left and go down the stairs
          to the basement level.
        </p>

        <h3 className="text-lg font-semibold mb-2">Maps & Directions</h3>
        <p className="mb-4">
          This location is in the heart of Boston, and conveniently situated
          next to the Park Street subway station, across the street from Boston
          Common.
        </p>
        <p className="mb-4">
          For detailed driving directions, you may wish to use the following
          links:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Mapquest</li>
          <li>Google</li>
        </ul>
        <h4 className="text-base font-semibold mb-2">Subway</h4>
        <p className="mb-4">
          If coming via subway on either the Green or Red Lines, exit at the
          Park Street station, which is at the intersection of the Green Line
          and the Red Line. The walk from this station is less than a minute.
        </p>
        <p className="mb-4">
          If traveling by the Orange Line, you can exit at the Downtown Crossing
          station, which is also very close – only a three-minute walk.
        </p>
        <p className="mb-4">
          For more information on the subway system, please refer to the{" "}
          <a href="http://www.mbta.com" className="text-blue-500 underline">
            MBTA website
          </a>
          .
        </p>

        <h3 className="text-lg font-semibold mb-2">Parking</h3>
        <p className="mb-4">
          There is very little street parking in the area (if you intend to park
          in the street, allow yourself extra time to find an available spot!),
          but there are many parking garages in walking distance, some of which
          are listed below:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>
            33 Arch Street Garage (Downtown Crossing shopping district - the
            entrance is on Hawley Street) -- 617-204-9268
          </li>
          <li>
            Lafayette Garage (1 Avenue De Lafayette, Boston) -- 617-357-1987
            <br />
            <a
              href="http://www.pilgrimparking.com/facilities/lafayette/index.php"
              className="text-blue-500 underline"
            >
              See website for more info
            </a>
          </li>
          <li>
            Boston Common Garage (on Charles Street, across from the Public
            Garden)
          </li>
          <li>One Beacon Garage (on Cambridge Street)</li>
          <li>
            99 Summer Street Garage (the entrance is on Kingston Street) --
            617-439-9606
          </li>
          <li>
            First Federal Parking (240 Devonshire Street, adjacent to 101
            Federal Street)
          </li>
        </ul>
      </div>
    </main>
  );
}
