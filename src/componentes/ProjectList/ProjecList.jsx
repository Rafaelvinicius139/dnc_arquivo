import { useState, useEffect } from "react";

import './projeto.css'

import gostei from '../../assets/Gostei.svg'
import Like from '../../assets/branco.svg'

// UTILS
import { getApiData } from '../../assets/services/apiServices'

function ProjectList (props){

    const [projects, setProject] = useState()

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const projectResponse = await getApiData('projects')
                setProject(projectResponse)
            }catch{
                setProject([])
            }
        }
        fetchData()
    },[])

    return(
        <div className='projects-section'>
          <div className='projects-hero'>
            <h2>fallow our projects</h2>
            <p>It is a long established fact that 
                a reader will be distracted by the 
                of readable content of page lookings
                at its layouts points.
            </p>

            <div className='projects-grid'>
           
                          {projects && projects.map((project) => (
                <div key={project.id} className='project-card d-flex jc-center al-center fd-column'>
                  <div 
                    className='thumb tertiary-background'
                    style={{backgroundImage:`url(${project.thumb})`}}
                  ></div>
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                  <img src={gostei} height="20px" />
                  <p>Bh, Brasil</p>
                  <img src={Like} height="20px" />
                </div>
              ))}
              
            </div>

          </div>
        </div>
    )
}

export default ProjectList
