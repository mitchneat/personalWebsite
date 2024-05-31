import React from 'react';
import './resume.css';
import resume from "../../assets/Mitch_Neat_Resume.pdf";
// import { Document } from '@react-pdf/renderer';



const Resume = () => {
    const resumeUrl = resume;

    return (
        <div>
            <iframe
                src={ resumeUrl }
                width="100%"
                height="700px"
                title="PDF Viewer"
            />
        </div>
    );
    }

export default Resume;