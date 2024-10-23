import extra1 from "./images/extra1.jpeg"
import extra2 from "./images/extra2.jpg"
import extra3 from "./images/extra3.jpg"
import extra4 from "./images/extra4.jpeg"
const features = [
  { name: 'Find Your Perfect Match', description: 'Browse through profiles of fellow travelers based on interests, destinations, travel styles, and more. Our advanced matching algorithms ensure you find compatible travel buddies who share your passions and preferences.' },
  { name: 'Connect and Chat', description: "Once you've found someone who piques your interest, initiate a conversation through our secure messaging system. Get to know each other, discuss travel plans, and build a rapport before embarking on your adventure together." },
  { name: 'Plan Your Dream Trip', description: "Whether you're planning a weekend getaway or a round-the-world expedition, our platform provides all the tools you need to plan your trip seamlessly. Coordinate itineraries, share travel tips, and collaborate on making unforgettable memories." },
  { name: 'Safety and Security', description: ' Your safety is our top priority. Our platform employs robust safety measures to ensure a secure and trustworthy environment for all users. We verify user profiles and provide safety guidelines to help you make informed decisions when connecting with potential travel mates.' },
  { name: 'Join a Vibrant Community', description: "Travel Mate isn't just a platform—it's a community of passionate travelers from diverse backgrounds and cultures. Share your travel stories, exchange tips, and forge lifelong friendships with fellow adventurers from around the world." },
  { name: 'Budget friendly trips', description: 'Group trips or trips with mate can allow to slip expenses and have a budget friendly trips.' },
]

export default function Extra() {
  return (
    <div className="aboutus">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Who We Are?</h2>
          <p className="mt-4 text-gray-500">
          At Travel Mate, we understand that the journey is just as important as the destination. Whether you're an avid adventurer seeking a trekking companion, a culture enthusiast looking to explore new cities, or a solo traveler eager to make new friends along the way, our platform is designed to help you find your perfect travel companion.          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8" style={{paddingTop:50}}>
          <img
          style={{height:355}}
            src={extra1}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
          style={{height:355}}
            src={extra2}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
          style={{height:355}}
            src={extra3}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
          style={{height:355}}
            src={extra4}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  )
}
