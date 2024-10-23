const posts = [
    {
      id: 1,
      title: ' Enhancing Explores',
      href: '#',
      description:
        "Embarking on solo adventures has always been a passion of mine, but there are times when the experience feels incomplete without a companion to share it with. That's where [Travel Mate Website] comes in, and let me tell you, it's been a game-changer.",
      datetime: '2020-03-16',
      category: { title: 'Explorer', href: '#' },
      author: {
        name: 'Shivani Raut',
       
        href: '#',
        imageUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 1,
      title: ' A Game-Changer for Solo Travelers',
      href: '#',
      description:
        "As a frequent solo traveler, I've often craved the companionship and camaraderie that comes with exploring new destinations with like-minded individuals. Thankfully, I stumbled upon [Travel Mate Website], and it's been a game-changer for my travel experiences.",
      date: 'Mar 16, 2024',
      datetime: '2020-03-16',
      category: { title: 'Excited', href: '#' },
      author: {
        name: 'Rahul Arora',
        
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 1,
      title: 'Connecting Adventurers',
      href: '#',
      description:
      "As a solo traveler with a penchant for exploration, I've often sought companions to share in the thrill of discovery. Enter [Travel Mate Website], a platform that has revolutionized the way I approach travel",
      date: 'Jan 6, 2024',
      datetime: '2020-03-16',
      category: { title: 'Adventurer', href: '#' },
      author: {
        name: 'Neha Rathod',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    // More posts...
  ]
  
  export default function Review() {
    return (
      <div className="bg-white py-24 sm:py-32" style={{paddingTop:50}}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div style={{ paddingRight:0,paddingleft:500,marginLeft:250}}className="mx-auto max-w-2xl lg:mx-0">
            <h2  className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Memories</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Take a Look what traveller's say!!
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  