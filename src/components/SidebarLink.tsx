'use client'
import {Calendar, Grid, Link, Settings, User} from 'react-feather'
import {usePathname} from "next/navigation";
import clsx from "clsx";
import {FC} from "react";

const icons = {Settings, User, Grid, Calendar}

type SidebarLinkProps = {
    link: {
        link: string,
        icon: "Settings" | "User" | "Grid" | "Calendar"
    }
}

const SidebarLink: FC<SidebarLinkProps> = ({link}) => {
    const pathname = usePathname()
    const isActive = pathname === link.link

    const Icon = icons[link.icon]

    return (
        <Link href={link.link}>
            <Icon size={40}
                  className={clsx("stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out",
                      isActive && "stroke-violet-600")}/>
        </Link>
    )
}

export default SidebarLink
