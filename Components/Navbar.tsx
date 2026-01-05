'use client';

import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";

const Navbar = () => {
    const handleLogoClick = () => {
        posthog.capture('logo_clicked', {
            navigation_source: 'navbar',
        });
    };

    const handleNavClick = (linkName: string) => {
        posthog.capture(`navbar_${linkName}_clicked`, {
            navigation_source: 'navbar',
            link_name: linkName,
        });
    };

    return (
           <header>
              <nav>
                 <Link href='/' className="logo" onClick={handleLogoClick}>
                  <Image src="/icons/logo.png" alt="logo" width={25} height={25}></Image>
                    <p>DevEvent</p>
                 </Link>

                  <ul>
                      <Link href="/" onClick={() => handleNavClick('home')}>Home</Link>
                      <Link href="/" onClick={() => handleNavClick('events')}>Events</Link>
                      <Link href="/" onClick={() => handleNavClick('create_event')}>Create Event</Link>

                  </ul>
              </nav>

           </header>
    )
}
export default Navbar
