import React from 'react';
import { useEffect, useState } from "react";
import './electricForecast.css';
import mediaData from '../../assets/Media/ElectricalForecast.json'

const media = mediaData.map(item => item.url); 

const ElectricForecast = () => {


    const [bokehHTML, setBokehHTML] = useState("");

    useEffect(() => {
        fetch(media[1])
        .then(response => response.text())
        .then(html => setBokehHTML(html))
        .catch(error => console.error("Error fetching Bokeh plot:", error));
    }, []);


    return (
        <div className='bg-wrapper'>
            <div className='blogPage-ef'>
                {/* Title */}
                <div className='titleblock-ef'>

                    <p className='title-ef'> {"\u2013"} Predicting Energy Usage {"\u2013"}</p>
                </div>  

                {/* header - inspiration */}
                <div className='titleblock-ef'>

                    <p className='header-ef'> Inspiration </p>
                </div> 
                {/* text - inspiration */}
                <div className='pictureRow'>

                    <div className="picture-box" style={{ width: "60%" }}>
                        <p>
                        While paying my utility bills, I noticed fluctuations in my monthly costs.
                        This led me to explore whether I could forecast these changes and develop 
                        a budgeting tool to estimate expenses and provide a monthly budget.           
                        </p>
                    </div>
                </div>

                {/* header - Process */}
                <div className='titleblock-ef'>

                    <p className='header-ef'> Process </p>
                </div> 
                {/* text - Process */}
                <div className='pictureRow'>

                    <div className="picture-box" style={{ width: "60%" }}>
                        <p>
                        To analyze my electricity usage, I retrieved a year's worth of 30-minute interval
                        data from my provider. I cleaned and reformatted it for time series visualization,
                        ran basic statistical checks for missing and outlier values, and explored patterns
                        through distributions, averages by hour, day, and month, and a heatmap.           
                        </p>
                    </div>
                </div>

                {/* plots - dist& per hour */}
                <div className='pictureRow'>

                    <img src={media[5]} alt="ElectricalForecast" className="imagegul"/>     
                    <img src={media[3]} alt="ElectricalForecast" className="imagegul"/>               
                </div>
                {/* plots - per day & per month */}
                <div className='pictureRow'>

                    <img src={media[3]} alt="ElectricalForecast" className="imagegul"/>     
                    <img src={media[4]} alt="ElectricalForecast" className="imagegul"/>               
                </div>
                {/* plots - heatmap */}
                <div className='pictureRow'>

                    <img src={media[6]} alt="ElectricalForecast" className="imagegupl"/>                  
                </div>

                {/* text - Process continued*/}
                <div className='pictureRow'>

                    <div className="picture-box" style={{ width: "60%" }}>
                        <p>
                        I initially plotted daily electricity usage over the year with a 7-day trailing
                        average, but it felt too compressed. To provide a clearer, more focused view,
                        I switched to a bar plot using a 30-day rolling window.
                        </p>
                    </div>
                </div>

                {/* plots - scrolling time series */}
                <div className='bokeh'>
                    <iframe 
                        src= {media[1]}
                        width="100%" 
                        height="600px"
                        style={{ border: "none" }}
                    />
                </div>

                <div dangerouslySetInnerHTML={{ __html: bokehHTML }} />

                {/* text/plot - Process split with ts decop */}
                <div className='pictureRow'>

                    <div className="picture-box" style={{ width: "50%" }}>
                        <p>
                        The earlier visualizations suggested the presence of seasonal patterns,
                        so I conducted formal tests to check for stationarity. In addition,
                        I performed time series decomposition and analyzed autocorrelation and
                        partial autocorrelation plots to better understand the data's underlying structure.
                        Here is the time series decomposition. 
                        </p>
                    </div>
                    <img src={media[10]} alt="Guat" className="imagegup"/>
                </div>

                {/* text - Process continued 2*/}
                <div className='pictureRow'>

                    <div className="picture-box" style={{ width: "60%" }}>
                        <p>
                        To compare forecasting performance, I trained an ARIMA model on both 30-minute interval and daily data.
                        By analyzing summary statistics, Ljung-Box test results, and residual diagnostics
                        (autocorrelation plots, QQ plots, and histograms), I determined that the daily model
                        provided a better fit. Here are some of the outputs.
                        </p>
                    </div>
                </div>

                {/* plots - summary and autocorrelation */}
                <div className='pictureRow'>

                    <img src={media[11]} alt="ElectricalForecast" className="imagegul"/>     
                    <img src={media[0]} alt="ElectricalForecast" className="imagegul"/>               
                </div>
                {/* plots - qq and resid hist */}
                <div className='pictureRow'>

                    <img src={media[7]} alt="ElectricalForecast" className="imagegul"/>     
                    <img src={media[8]} alt="ElectricalForecast" className="imagegul"/>               
                </div>

                {/* text - Process forecast*/}
                <div className='pictureRow'>

                    <div className="picture-box" style={{ width: "60%" }}>
                        <p>
                        To evaluate the model, I forecasted kWh usage for the final month of data and compared it to actual values,
                        calculating MSE along the way. A sudden cold week in February caused a spike in electricity usage,
                        leading to an underprediction. To improve accuracy, I switched to a rolling forecast, which greatly
                        enhanced performance. The improved results are shown below.
                        </p>
                    </div>
                </div>

                {/* header - Results */}
                <div className='titleblock-ef'>

                    <p className='header-ef'> Results </p>
                </div> 
                {/* plots - pred vs actual */}
                <div className='pictureRow'>

                    <img src={media[9]} alt="ElectricalForecast" className="imagegul"/>     
                </div>
                {/* text - Results */}
                <div className='pictureRow'>

                    <div className="picture-box" style={{ width: "50%" }}>
                        <p>
                            Model 1: 
                            MSE: 234223    
                        </p>
                    </div>
                    <div className="picture-box" style={{ width: "50%" }}>
                        <p>
                            Model 2: 
                            MSE: 234223    
                        </p>
                    </div>
                </div>



                {/* header - Conclusion */}
                <div className='titleblock-ef'>

                    <p className='header-ef'> Conclusion </p>
                </div> 
                {/* text - Conclusion */}
                <div className='pictureRow'>

                    <div className="picture-box" style={{ width: "60%" }}>
                        <p>
                        While the first model performed decently, it struggled to capture sudden spikes.
                        The second model is an improvement, but it's not practical for use in a budgeting
                        tool. Although I considered using a SARIMA model to account for seasonality,
                        I only have one cycle of data, whereas SARIMA typically requires two or three.
                        Overall, I'm pleased with the results but recognize there's plenty of room for
                        improvement. I plan to retest the first model throughout the spring to evaluate
                        its performance over the coming months.
     
                        </p>
                    </div>
                </div>

                {/* header - NextSteps */}
                <div className='titleblock-ef'>

                    <p className='header-ef'> In Progress & Next Steps </p>
                </div> 
                {/* text - NextSteps */}
                <div className='pictureRow'>

                    <div className="text-box" style={{ width: "60%" }}>
                        <ul>
                            <li>Develop an LSTM ML model with additional input data, including:
                                <ul>
                                <li>Number of occupants</li>
                                <li>Weather data</li>
                                </ul>
                            </li>
                            <li>Gather local pricing information, including surge pricing, to convert kWh to dollar amounts</li>
                            <li>Apply the model to gas and water bills for a complete utility forecast</li>
                        </ul>
                    </div>
                </div>

                {/* text - disclaimer */}
                {/*
                <div className='pictureRow'>

                    <div className="picture-box" style={{ width: "60%" }}>
                        <p>
                            All code, print outs, and additional plots can be found on my github mneat
                        </p>
                    </div>
                </div> */}

            </div>
        </div>
    );
    }

export default ElectricForecast;