import { CheckIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'

const tiers = [
  {
    name: 'Monthly',
    id: 'monthly',
    href: '#',
    price: '$9',
    description: 'Full access to unlimited 1-on-1 calls.',
    features: ['Unlimited 1-on-1 calls',
      'Meet with up to 10 people a month',
      'Learn pressure-free',
      'Get matched with a new dev every week'
    ],
    mostPopular: false,
    frequency: 'monthly',
  },
  {
    name: 'Annually',
    id: 'annually',
    href: '#',
    price: '$90',
    description: 'Save by choosing an annual plan.',
    features: [
      'Unlimited 1-on-1 calls',
      'Meet with up to 10 people a month',
      'Learn pressure-free',
      'Get matched with a new dev every week',
      'Save 2 months by paying annually'
    ],
    mostPopular: false,
    frequency: 'annually',
  },
  {
    name: 'Life-time',
    id: 'life-time',
    href: '#',
    price: '$19',
    description: 'Life-time access for early adopters.',
    features: [
      'Unlimited 1-on-1 calls',
      'Meet with up to 10 people a month',
      'Learn pressure-free',
      'Get matched with a new dev every week',
      'Get in early for the price of 3 coffees'
    ],
    mostPopular: true,
    frequency: 'one-time',
  },
]

export function Pricing() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Get in early and save
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
          To celebrate our launch, we're offering a life-time plan for early adopters.
        </p>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={clsx(
                tier.mostPopular ? 'bg-white/5 ring-2 ring-indigo-500' : 'ring-1 ring-white/10',
                'rounded-3xl p-8 xl:p-10'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 id={tier.id} className="text-lg font-semibold leading-8 text-white">
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                    Limited Availability
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">{tier.price}</span>
                <span className="text-sm font-semibold leading-6 text-gray-300">{tier.frequency === 'monthly' && '/month'}{tier.frequency === 'annually' && '/year'}{tier.frequency === 'one-time' && 'one time'}</span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={clsx(
                  tier.mostPopular
                    ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                    : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                )}
              >
                Buy plan
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
