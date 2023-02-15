import Card from "@/components/Card";
import SidebarLink from "@/components/SidebarLink";

type LinkOptions = {
    label: string,
    icon: 'Grid' | 'Calendar' | 'Settings' | 'User',
    link: string
}

const links: LinkOptions[] = [
    {label: "Home", icon: "Grid", link: '/home'},
    {label: "Calendar", icon: "Calendar", link: '/calendar'},
    {label: "Settings", icon: "Settings", link: '/settings'},
]

const Sidebar = () => {
    return (
        <Card className="h-full w-40 flex items-center justify-between flex-wrap">
            {links.map((link) => (
                <SidebarLink link={link}/>
            ))}
        </Card>
    )
}

export default Sidebar
