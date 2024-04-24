import React from 'react';
// import React, { useState, useEffect } from 'react';
import './greece.css'; // Import CSS file for styling

const Greece = () => {
    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     const importImages = async () => {
    //         try {
    //             const files = await importAll(require.context('../../assets/Thailand', false, /\.(jpg|jpeg|png)$/));
    //             setImages(files);
    //             console.log('test')
    //             console.log(files.map(file => file.default));
    //             console.log(files.length);
    //             console.log(files);
    //         } catch (error) {
    //             console.error('Error loading images:', error);
    //         }
    //     };

    //     importImages();
    // }, []);

    // const importAll = (context) => {
    //     return context.keys().map(context);
    // };

    return (
        <div className="image-gallery">
            <div className="gallery-text">Wicked cool pics coming soon...</div>
            {/* <div className="imageGalcontainer">
                {images.map((image, index) => {
                    console.log(image.default); 
                    return (
                        <img key={index} src={image.default} alt={`${index + 1}`} className="image" />
                    );
                })}
            </div> */}
        </div>
    );
};

export default Greece;
