import React from 'react';
import { useEffect, useRef  } from "react";
import './electricForecast.css';
import mediaData from '../../assets/Media/ElectricalForecast.json'
import { embed } from '@bokeh/bokehjs';


const media = mediaData.map(item => item.url); 
const plotURL = media[1];

const ElectricForecast = () => {

    const isEmbeddedRef = useRef(false);
    useEffect(() => {
        const fetchAndEmbed = async () => {
            const res = await fetch(plotURL);
            const json = await res.json();
            const target = document.getElementById('bokeh-target');
            if (target && !isEmbeddedRef.current) {
                target.innerHTML = '';
                embed.embed_item(json, 'bokeh-target');
                isEmbeddedRef.current = true;
            }
        };

        fetchAndEmbed();

        return () => {
            const target = document.getElementById('bokeh-target');
            if (target) target.innerHTML = '';
            isEmbeddedRef.current = false;
        };
    }, []);

    return (
        <div className='bg-wrapper'>
            <div className='blogPage-ef'>
                {/* Title */}
                <div className='titleblock-ef'>

                    <p className='title-ef'> Predicting Energy Usage </p>
                </div>  

                {/* header - inspiration */}
                <div className='titleblock-ef'>

                    <p className='header-ef'> Inspiration </p>
                </div> 
                {/* text - inspiration */}
                <div className='pictureRow'>

                    <div className="picture-box-ef">
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

                    <div className="picture-box-ef">
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

                    <img src={media[2]} alt="ElectricalForecast" className="imagegul"/>     
                    <img src={media[4]} alt="ElectricalForecast" className="imagegul"/>               
                </div>
                {/* plots - heatmap */}
                <div className='pictureRow'>

                    <img src={media[6]} alt="ElectricalForecast" className="imageheat"/>                  
                </div>

                {/* text - Process continued*/}
                <div className='pictureRow'>

                    <div className="picture-box-ef">
                        <p>
                        I initially plotted daily electricity usage over the year with a 7-day trailing
                        average, but it felt too compressed. To provide a clearer, more focused view,
                        I switched to a bar plot using a 30-day rolling window.
                        </p>
                    </div>
                </div>


                {/* plot - Bokeh plot*/}
                <div className='bokehPlot'>
                    <div id="bokeh-target"></div>
                </div>

               


                {/* text - Process cont */}
                <div className='pictureRow'>

                    <div className="picture-box-ef">
                        <p>
                        The earlier visualizations suggested the presence of seasonal patterns,
                        so I conducted formal tests to check for stationarity. In addition,
                        I performed time series decomposition and analyzed autocorrelation and
                        partial autocorrelation plots to better understand the data's underlying structure.
                        Here is the time series decomposition. 
                        </p>
                    </div>
                </div>
                {/* plot - ts decop */}
                <div className='pictureRow'>

                    <img src={media[10]} alt="Guat" className="imageheat"/>
                </div>


                {/* text - Process continued 2*/}
                <div className='pictureRow'>

                    <div className="picture-box-ef">
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

                    <div className="picture-box-ef">
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

                    <img src={media[9]} alt="ElectricalForecast" className="imageheat"/>     
                </div>
                {/* text - Results */}
                <div className='pictureRow'>

                    <div className="picture-box-ef">
                        <p>
                            Model 1:  <br></br><br></br>
                            Mean Absolute Error (MAE): 7.0699<br></br>
                            Root Mean Squared Error (RMSE): 12.3489 <br></br>
                            Mean Absolute Percentage Error (MAPE): 24.2606<br></br>
                            Total Forecasted Usage for the month: 511.45 kWh<br></br>
                            Total Actual Usage for the month: 666.08 kWh <br></br><br></br>

                            Model 2:  <br></br><br></br>
                            Mean Absolute Error (MAE): 5.6073<br></br>
                            Root Mean Squared Error (RMSE): 8.1920 <br></br>
                            Mean Absolute Percentage Error (MAPE): 24.9710<br></br>
                            Total Forecasted Usage for the month: 656.77 kWh<br></br>
                            Total Actual Usage for the month: 666.08 kWh <br></br>
                        </p>
                    </div>
                </div>



                {/* header - Conclusion */}
                <div className='titleblock-ef'>

                    <p className='header-ef'> Conclusion </p>
                </div> 
                {/* text - Conclusion */}
                <div className='pictureRow'>

                    <div className="picture-box-ef">
                        <p>
                        While the analysis of the first model suggested it was a decent fit, 
                        it struggled to capture sudden spikes, leading to consistent underprojections. 
                        As a result, the model was off by approximately 150 kWh for the month, or about 
                        23%—a significant error. The second model showed a slight reduction in MAE and 
                        followed the trend more accurately, alternating between over and under projections.
                        This resulted in a much closer total forecast, 
                        with an error of only around 10 kWh, or 1%. <br></br> <br></br>

                        Although the second model is an improvement, it isn't practical for use in a 
                        budgeting tool. I considered using a SARIMA model to account for seasonality,
                        but with only one cycle of data, it's not feasible, as SARIMA typically requires
                        two or three.<br></br><br></br>
                        
                        Overall, I'm satisfied with the results given the unexpected data spike, 
                        but I recognize there is still room for improvement. I plan to retest the 
                        first model throughout the spring to assess its performance in the coming months.

     
                        </p>
                    </div>
                </div>

                {/* header - NextSteps */}
                <div className='titleblock-ef'>

                    <p className='header-ef'> In Progress & Next Steps </p>
                </div> 
                {/* text - NextSteps */}
                <div className='pictureRow'>

                    <div className="text-box" style={{ width: "80%" }}>
                        <ul>
                            <li>Develop an LSTM ML model with additional input data, including number of occupants & weather</li>
                            <li>Gather local pricing information, including surge pricing, to convert kWh to dollar amounts</li>
                            <li>Apply the model to gas and water bills for a complete utility forecast</li>
                        </ul>
                    </div>
                </div>

                {/* text - disclaimer */}
                {/*
                <div className='pictureRow'>

                    <div className="picture-box-ef">
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