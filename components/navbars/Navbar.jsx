import Link from 'next/link'
import { Fragment, useState, useEffect } from 'react'
import Register from '../auth/registration/Register'
import Login from '../auth/authentication/Login'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
  ShieldCheckIcon,
  SupportIcon,
  XIcon,
  CodeIcon
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { toast } from 'react-toastify'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import UserOptions from './navbar_components/UserOptions'
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered via Facebook Messenger.',
    href: 'https://www.facebook.com/PhotoBytes999',
    icon: SupportIcon,
  },
  {
    name: 'Facebook Page',
    description: 'Take a look at our Facebook page to see what projects we are working on.',
    href: 'https://www.facebook.com/PhotoBytes999',
    icon: CodeIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '/privacy', icon: ShieldCheckIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const router = useRouter()
  const { data, status } = useSession()
  const [visibleRegistrationModal, setVisibleRegistrationModal] = useState(false)
  const [visibleLoginModal, setVisibleLoginModal] = useState(false)
  function handlerRegistration () {
    setVisibleRegistrationModal(true)
  }
  function handlerLogin () {
    setVisibleLoginModal(true)
  }
  function sCallback () {
    router.reload()
  }
  return (
    <Fragment>
      <Popover className="relative bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <a>
                  <span className="sr-only">PhotoBytes Studios</span>
                  <img
                    className="min-h-[62px] text-center sm:h-[60px] bg-black rounded-full p-0.5"
                    src="./final.svg"
                    alt=""
                  />
                </a>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Link href="/privacy">
                <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Privacy
                </a>
              </Link>
              <Link href="/about">
                <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                  About Us
                </a>
              </Link>
              <Link href="/contact">
                <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Contact
                </a>
              </Link>
              <a className="text-base font-medium text-gray-500 hover:text-gray-900" target="_blank" href="https://www.facebook.com/PhotoBytes999" rel="noopenner noreferrer">
                Order
              </a>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                      )}
                    >
                      <span>More</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {resources.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-red-600" aria-hidden="true" />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              {
                data
                  ? (
                    <Fragment>
                      <UserOptions username={data.user.name} />
                    </Fragment>
                  )
                  : (
                    <Fragment>
                      <button 
                        className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                        onClick={handlerLogin}
                      >
                        Login
                      </button>
                      <button
                        className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
                        onClick={handlerRegistration}
                      >
                        Register
                      </button>
                    </Fragment>
                  )
              }
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-[62px] w-auto"
                      src="./final.svg"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <Link href="/about">
                    <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                      About
                    </a>
                  </Link>
                  <Link href="/contact">     
                    <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                      Contact
                    </a>
                  </Link>   
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700" target="_blank" href="https://www.facebook.com/PhotoBytes999" rel="noopener noreferrer">
                    Order
                  </a>
                  {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div>
                  {
                    data
                      ? (
                        <Fragment>
                          <div className="container min-w-full flex flex-row justify-center align-middle">
                            <UserOptions username={data.user.name} btnLength="160px" />
                          </div>
                        </Fragment>
                      )
                      : (
                        <Fragment>
                          <button
                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-rose-500 hover:bg-rose-700"
                            onClick={handlerRegistration}
                          >
                            Register
                          </button>
                          <p className="mt-6 text-center text-base font-medium text-gray-500">
                            Existing customer?{' '}
                            <button 
                              className="text-red-600 hover:text-red-500"
                              onClick={handlerLogin}  
                            >
                              Login
                            </button>
                          </p>
                        </Fragment>
                      )
                  }
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      <Register visible={visibleRegistrationModal} setVisible={setVisibleRegistrationModal} />
      <Login visible={visibleLoginModal} setVisible={setVisibleLoginModal} successCallback={sCallback} />
    </Fragment>
  )
}
