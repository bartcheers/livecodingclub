'use client';

import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { X, Menu as MenuIcon, User as UserIcon, GitHub } from 'react-feather';
import Image from 'next/image';
import type { User } from '@prisma/client';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const authenticatedUserNavigation = [
  { name: 'Your Profile', href: '/profile' },
  { name: 'Sign out', href: '/sign-out' },
];

const unauthenticatedUserNavigation = [{ name: 'Sign in', href: '/sign-in' }];

export default function LayoutHeader({ user }: { user?: User | null }) {
  const { data: session } = useSession();
  return (
    <div className='min-h-full'>
      <div className='bg-neutral-900'>
        <Disclosure as='nav' className='bg-neutral-900'>
          {({ open }) => (
            <>
              <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
                <div className='border-b border-neutral-700'>
                  <div className='flex h-16 items-center justify-between px-4 sm:px-0'>
                    <div className='flex items-center'>
                      <Link href='/' className='flex-shrink-0 text-xl font-black'>
                        Live Coding Club
                      </Link>
                    </div>
                    <div className='hidden md:block'>
                      <div className='ml-4 flex items-center md:ml-6'>
                        {/* Profile dropdown */}
                        <Menu as='div' className='relative ml-3'>
                          <div className='flex items-center gap-2'>
                            <Link
                              href='https://github.com/bartcheers/livecodingclub'
                              target='_blank'
                              rel='noreferrer nofollower'
                              className='w-8 h-8 rounded-full flex max-w-xs items-center justify-center bg-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-800'>
                              <GitHub className='h-5 w-5' />
                            </Link>
                            <Menu.Button className='flex max-w-xs items-center rounded-full bg-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-800'>
                              <span className='sr-only'>Open user menu</span>
                              {user?.image ? (
                                <Image
                                  className='h-8 w-8 rounded-full'
                                  src={user?.image}
                                  width={32}
                                  height={32}
                                  alt=''
                                  priority
                                />
                              ) : (
                                <UserIcon className='h-8 w-8 p-1 rounded-full' />
                              )}
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter='transition ease-out duration-100'
                            enterFrom='transform opacity-0 scale-95'
                            enterTo='transform opacity-100 scale-100'
                            leave='transition ease-in duration-75'
                            leaveFrom='transform opacity-100 scale-100'
                            leaveTo='transform opacity-0 scale-95'>
                            <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                              {(session
                                ? authenticatedUserNavigation
                                : unauthenticatedUserNavigation
                              ).map((item) => (
                                <Menu.Item key={item.name}>
                                  {({ active }) => (
                                    <a
                                      href={item.href}
                                      className={clsx(
                                        active ? 'bg-neutral-100' : '',
                                        'block px-4 py-2 text-sm text-neutral-700',
                                      )}>
                                      {item.name}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                    <div className='-mr-2 flex items-center gap-2 md:hidden'>
                      <Link
                        href='https://github.com/bartcheers/livecodingclub'
                        target='_blank'
                        rel='noreferrer nofollower'
                        className='w-10 h-10 rounded-lg flex max-w-xs items-center justify-center bg-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-800 text-neutral-400 hover:text-white transition-colors hover:bg-neutral-700'>
                        <GitHub className='h-5 w-5' />
                      </Link>
                      {/* Mobile menu button */}
                      <Disclosure.Button className='inline-flex items-center justify-center rounded-md bg-neutral-800 p-2 text-neutral-400 hover:bg-neutral-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-800 transition-colors'>
                        <span className='sr-only'>Open main menu</span>
                        {open ? (
                          <X className='block h-6 w-6' aria-hidden='true' />
                        ) : (
                          <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className='border-b border-neutral-700 md:hidden'>
                <div className='border-t border-neutral-700 pb-3 pt-4'>
                  <div className='flex items-center px-5'>
                    <div className='flex-shrink-0'>
                      {user?.image && (
                        <Image
                          width={40}
                          height={40}
                          className='h-10 w-10 rounded-full'
                          src={user.image}
                          alt=''
                        />
                      )}
                    </div>
                    <div className='ml-3'>
                      <div className='text-base font-medium leading-none text-white'>
                        {user?.name}
                      </div>
                      <div className='text-sm font-medium leading-none text-neutral-400'>
                        {user?.email}
                      </div>
                    </div>
                  </div>
                  <div className='mt-3 space-y-1 px-2'>
                    {(session ? authenticatedUserNavigation : unauthenticatedUserNavigation).map(
                      (item) => (
                        <Disclosure.Button
                          key={item.name}
                          as='a'
                          href={item.href}
                          className='block rounded-md px-3 py-2 text-base font-medium text-neutral-400 hover:bg-neutral-700 hover:text-white'>
                          {item.name}
                        </Disclosure.Button>
                      ),
                    )}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
