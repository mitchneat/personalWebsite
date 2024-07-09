import React from 'react';
import './kmeans.css';
import reg from '../../assets/parallel/reg.jpg';
import o1 from '../../assets/parallel/o1.jpg';
import o2 from '../../assets/parallel/o2.jpg';
import o3 from '../../assets/parallel/o3.jpg';
import kmeans from '../../assets/parallel/kmeans.jpg';
import parallelexpl from '../../assets/parallel/parallelCover3.png';


const speedUpTable = [
    { optimization: 'None', compiler: 'mpicc', runtime: '0.005514', speedup: '1' },
    { optimization: '-O1', compiler: 'mpicc', runtime: '0.001406', speedup: '3.92176' },
    { optimization: '-O2', compiler: 'mpicc', runtime: '0.001324', speedup: '4.16465' },
    { optimization: '-O3', compiler: 'mpicc', runtime: '0.001277', speedup: '4.31793' },
    { optimization: 'None', compiler: 'icpc', runtime: '0.006201', speedup: '0.8892' },
    { optimization: '-O1', compiler: 'icpc', runtime: '0.001810', speedup: '3.0464' },
    { optimization: '-O2', compiler: 'icpc', runtime: '0.001796', speedup: '3.070155' },
    { optimization: '-O3', compiler: 'icpc', runtime: '0.001764', speedup: '3.125850' },
  ];

  const Table = () => {
    return (
      <table border="1">
        <thead>
          <tr>
            <th>Optimization</th>
            <th>Compiler</th>
            <th>Runtime (seconds)</th>
            <th>Speedup</th>
          </tr>
        </thead>
        <tbody>
          {speedUpTable.map((row, index) => (
            <tr key={index}>
              <td>{row.optimization}</td>
              <td>{row.compiler}</td>
              <td>{row.runtime}</td>
              <td>{row.speedup}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };


const Kmeans = () => {
  return (

    

    <div className='resultsPage'>
        <div className='imageGrid'>
            <figure className="imageContainer">
            <img src={parallelexpl} alt="parallelexpl" className="imagekm"/>
            <figcaption>Simple Parallel Coding Explanation</figcaption>
            </figure>
        </div>

        <div className="paragraphsPartPara"> 

            <div class="bottom-section-km">
                    <h2>Details</h2>
            </div>
            
            <p> This project was the accumulation and compilation of skills I learned including learning C++, writing my own version of Lloyd's k-Means algorithm, 
                checking memory issues with Valgrind, using MPI and CUDA to parallelize the code to improve efficiency, and experimenting with optimization flags. 
                The first table illustrates the speed up using two different compilers with different optimization flags. The graphs below illustrate the results of 
                a strong scaling study identifying the speed up ratio: Number of MPI processes vs Speed up (T1 / Tp) with T1 being time for one processor and Tp being 
                the time for T processors. The blue line is the theoretical perfect speed up rate and the orange line is the measured value. This was run on the Virginia 
                Tech Cascade compute cluster to access higher end computing as I unfortunately do not own a computer with 28+ cores. I have also included one of the simple 
                datasets for testing my k-Means algorithm script. You can see each symbol in mneat21 is a separate cluster. There is one point that is misclassified 
                but uh don't look at that. The code for this and more of my work with k-Means and parallel coding can be found on my github. 
            </p>
        </div>

        <div class="bottom-section-km">
                <h2>Results</h2>
        </div>


        <div className='tableDiv'>
            
            < Table />
            <figcaption>Compiler Comparison Table</figcaption>
        </div>

        <div className='imageGrid'>
        <figure className="imageContainer">
          <img src={reg} alt="reg" className="imagekm"/>
          <figcaption>Regular Compiler</figcaption>
        </figure>
        <figure className="imageContainer">
          <img src={o1} alt="o1" className="imagekm"/>
          <figcaption>Using -O1 flag</figcaption>
        </figure>
      </div>
      <div className='imageGrid'>
        <figure className="imageContainer">
          <img src={o2} alt="o2" className="imagekm"/>
          <figcaption>Using -O2 flag</figcaption>
        </figure>
        <figure className="imageContainer">
          <img src={o3} alt="o3" className="imagekm"/>
          <figcaption>Using -O3 flag</figcaption>
        </figure>
      </div>

      <div className='imageGrid'>
        <figure className="imageContainer">
          <img src={kmeans} alt="kmeans" className="imagekm"/>
          <figcaption>k-Means Test Clustering</figcaption>
        </figure>
      </div>

    </div>
  );
}

export default Kmeans;
