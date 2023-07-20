import {
  CloudIcon,
  UserCircleIcon,
  BookOpenIcon,
  LightBulbIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid';
import { BookOpen, CloudLightning, Feather, PieChart, User, Users } from 'react-feather';

const features = [
  {
    name: 'Low pressure.',
    description: 'Our club fosters a relaxed, inviting environment for seamless knowledge sharing.',
    icon: Feather,
  },
  {
    name: 'You are in control.',
    description: 'Take charge of your learning journey, control the pace, and choose your topics.',
    icon: User,
  },
  {
    name: 'Stop missing out.',
    description: 'Unlock collective learning and tap into wisdom from remote teams worldwide.',
    icon: BookOpen,
  },
  {
    name: 'Tips & tricks.',
    description: 'Get insider access to secrets that fast-track your development skills.',
    icon: CloudLightning,
  },
  {
    name: 'Get a second opinion.',
    description: 'Stuck? Engage with our community and get a fresh perspective.',
    icon: PieChart,
  },
  {
    name: 'Connect with others.',
    description: 'Network with like-minded individuals while you learn and grow.',
    icon: Users,
  },
];

export function Features() {
  return (
    <div className='py-6 md:max-w-md'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8 md:pr-0 lg:pr-0'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-base font-semibold leading-7 text-turquoise-200'>
            Learn from others
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Live Coding Club
          </p>
          <p className='mt-6 text-md leading-8 text-gray-300'>
            👋🏻 Hi and Welcome! Pair programming has taught me so much in such a short time. Now, I
            want to share that experience with you. Join our fun and relaxed environment where
            developers come together to learn and level up their coding skills.
          </p>
        </div>
        <dl className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:mx-0 lg:max-w-none lg:gap-x-16'>
          {features.map((feature) => (
            <div key={feature.name} className='relative pl-9'>
              <dt className='inline font-semibold text-white'>
                {
                  <feature.icon
                    className='absolute left-1 top-1 h-5 w-5 text-turquoise-900'
                    aria-hidden='true'
                  />
                }
                {feature.name}
              </dt>{' '}
              <dd className='inline'>{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
