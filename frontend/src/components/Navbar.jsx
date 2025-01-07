import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ArrowRightEndOnRectangleIcon, Bars3Icon, ChevronDownIcon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Staff Hours', href: '#', current: false, id: 0 },
  { name: 'Documentation', href: '#', current: false, id: 1 },
  { name: 'Services', href: '#', current: false, id: 2 },
  { name: 'About', href: '#', current: false, id: 3 },
  { name: 'Contact Us', href: '#', current: false, id: 4 },
]

const dropdown = [
  [],
  [],
  [
    { name: 'Computer Lab', href: '#' },
    { name: 'Printing', href: '#' },
    { name: 'Personal Website Hosting', href: '#' },
    { name: 'Group Website Hosting', href: '#' },
    { name: 'SSH/SFTP (Shell)', href: '#' },
    { name: 'Email Hosting', href: '#' },
    { name: 'MySQL Database', href: '#' },
    { name: 'Software Mirrors', href: '#' },
    { name: 'High Performance Computing', href: '#' },
  ],
  [
    { name: 'What We Do', href: '#' },
    { name: 'Officers', href: '#' },
    { name: 'Meet Our Staff', href: '#' },
  ],
  [],
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const bg_color = "bg-zinc-800 ";
const hover_color = "hover:bg-zinc-700 ";

export default function Example() {
  return (
    <Disclosure as="nav" className={bg_color + " fixed sticky top-0 left-0 right-0"}>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className={hover_color + "group inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"}>
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="ocf logo"
                src="../src/assets/penguin.svg"
                className="mx-5 h-8 w-auto"
              />
              <a href="/" className="transition text-gray-300 hover:text-white"><b>Open Computing Facility</b></a>
            </div>
            
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  dropdown[item.id].length == 0 ?
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : hover_color + 'transition text-gray-300 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a> : 
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton 
                        className={classNames(bg_color + hover_color + ' text-gray-300 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                        aria-expanded="open"
                      >
                        {item.name}
                      </MenuButton>
                    </div>
                    <MenuItems
                      transition
                      className="absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      {dropdown[item.id].map((subitem) => (
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                          >
                            {subitem.name}
                          </a>
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                ))}
              </div>
            </div>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className={classNames(bg_color + "relative rounded-full mr-10 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800")}>
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <ArrowRightEndOnRectangleIcon aria-hidden="true" className="size-6" />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Change Password
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Logout
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
