import {
  CloudIcon,
  UserCircleIcon,
  BookOpenIcon,
  LightBulbIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserGroupIcon
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Low pressure.',
    description: 'Our platform fosters a relaxed, inviting environment for seamless knowledge sharing.',
    icon: CloudIcon,
  },
  {
    name: 'You are in control.',
    description: 'Take charge of your learning journey, control the pace, and choose your topics.',
    icon: UserCircleIcon,
  },
  {
    name: 'Stop missing out on knowledge.',
    description: 'Unlock collective learning and tap into wisdom from remote teams worldwide.',
    icon: BookOpenIcon,
  },
  {
    name: 'Tips & tricks.',
    description: 'Get insider access to secrets that fast-track your development skills.',
    icon: LightBulbIcon,
  },
  {
    name: 'Get a second opinion.',
    description: 'Stuck? Engage with our community and get a fresh perspective.',
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
  {
    name: 'Connect with others.',
    description: 'Network with like-minded individuals while you learn and grow.',
    icon: UserGroupIcon,
  },
]



export function Features() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Learn from others</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Never really pair? No problem.</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Stack Overflow&apos;s 2023 survey reveals 85% of developers work in at least partially remote organizations. Despite the prevalence of remote work, pair programming is rare, meaning many miss out on shared knowledge.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                {feature.name}
              </dt>{' '}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
