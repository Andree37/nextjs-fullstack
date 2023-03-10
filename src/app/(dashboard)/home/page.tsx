import Greetings from "@/components/Greetings";
import {Suspense} from "react";
import GreetingsSkeleton from "@/components/GreetingsSkeleton";
import {getUserFromCookie} from "@/lib/auth";
import {cookies} from "next/headers";
import {db} from "@/lib/db";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import TasksCard from "@/components/TasksCard";


const getData = async () => {
    const user = await getUserFromCookie(cookies())

    return db.project.findMany({
        where: {
            ownerId: user?.id,
        },
        include: {
            tasks: true
        }
    })
}

export default async function Home() {
    const projects = await getData()

    return (
        <div className="h-full min-h-full overflow-y-auto pr-6 w-full">
            <div className=" h-full  items-stretch justify-center min-h-[content]">
                <div className="flex-1 grow flex">
                    <Suspense fallback={<GreetingsSkeleton/>}>
                        {/* @ts-expect-error Server Component */}
                        <Greetings/>
                    </Suspense>
                </div>
                <div className="flex flex-2 grow items-center flex-wrap mt-3 -m-3 ">
                    {projects.map((project) => (
                        <div className="w-1/3 p-3" key={project.id}>
                            <Link href={`/project/${project.id}`}>
                                <ProjectCard project={project}/>
                            </Link>
                        </div>
                    ))}
                    <div className="w-1/3 p-3">{/* new project here */}</div>
                </div>
                <div className="mt-6 flex-2 grow w-full flex">
                    <div className="w-full">
                        {/* @ts-expect-error Server Component */}
                        <TasksCard title="Tasks"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
