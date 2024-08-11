"use client";
import Title from './small/title';
import ProjectCard from './small/projectcard';
import { useEffect, useState } from 'react';


const ProjectSection = () => {
    

    const [data, setData] = useState([]);
    console.log(data);
    

    useEffect(() => {
        fetch('/data-static/projects.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
    

    return (
        <>
            <Title titleName="Top Projects" model={2} />
            <section className='py-8'>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                    {data.map((project,index) => {
                        return <ProjectCard key={index} projectData={project} />
                    })}
                </div>

                

            </section>
        
        </>
    );

}

export default ProjectSection;