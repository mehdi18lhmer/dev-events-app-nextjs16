import React from 'react'
import ExploreBTN from "@/Components/ExploreBTN";
import EventCard from "@/Components/EventCard";
import { events } from "@/lib/constants";



const Page = () => {
    return (
        <section>
           <h1 className="text-center">The Hub for Every Dev<br/>Event you Can&apos;t Miss</h1>
             <p className="text-center mt-5">Hackathons, Meetups, and Conferences  All in One Place</p>
             <ExploreBTN />
               <div className="mt-20 space-y-7">
                   <h3 > Featured Events</h3>

                    <ul className="events">
                        {events.map((event) => (
                            <li key={event.title}>
                                <EventCard {...event} />
                            </li>
                        ))}
                    </ul>
               </div>
        </section>
    )
}
export default Page
