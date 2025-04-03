import React from 'react';
import './puzzle.css';
import mediaData from '../../assets/Media/puzzle-matcher.json'

const media = mediaData.map(item => item.url); 

const Puzzle = () => {
    return (
        <div className='bg-wrapper-pm'>
            <div className='blogPage-pm'>
                {/* Title */}
                <div className='titleblock-pm'>

                    <p className='title-pm'> Puzzle Solver </p>
                </div>  

                {/* pics - puzzle picture */}
                <div className='pictureRow-pm'>
  
                    <img src={media[11]} alt="puzz" className="imagepmL"/>                
                </div>

                {/* header - inspiration */}
                <div className='titleblock-pm'>

                    <p className='header-pm'> Inspiration </p>
                </div> 
                {/* text - inspiration */}
                <div className='pictureRow-pm'>

                    <div className="picture-box-pm">
                        <p>
                        In early 2025 I had shoulder surgery, and my uncle sent me a custom puzzle to keep me busy during my recovery.
                        It was a drone shot I had taken of our families hiking in the woods in Maine (pictured above).
                        With my mom's help, it took days just to complete the edges, and I quickly realized 
                        this would be an uphill battle. 
                        <br></br> 
                        <br></br> 
                        Roughly half of the pieces had unique connectors, which allowed me to brute-force some 
                        pairs. For the rest, I carefully analyzed small details to match each piece to the 
                        original image, gradually filling in the gaps. After two months of slow progress, 
                        I still had about 150 nearly identical pieces left. With no clear visual cues remaining, 
                        brute-force solving became tedious. Frustrated with trial and error, I turned to the 
                        computer for help and this project was born.        
                        <br></br>  
                        <br></br> 
                        My initial goal was simple: solve the puzzle faster. At my current pace of about seven 
                        pieces per hour, I estimated I had roughly 21 hours left. While my speed would naturally 
                        increase as fewer pieces remained, I was only working an hour a day, meaning it would 
                        still take over two weeks to finish. If I could cut that time down, I'd consider it a win.
                        Theorizing time for model development, training, and countless iterations of 
                        troubleshooting, I realize I may not be saving any time. But at that point, my goal 
                        had evolved as the challenge may be more interesting than the solution. Now I wanted 
                        to build a tool to help finish the puzzle and learn something new in the process.
                        </p>
                    </div>
                </div>

                {/* pics - manual solving */}
                <div className='pictureRow-pm'>

                    <img src={media[7]} alt="puzz" className="imagepmP"/>        
                    <img src={media[4]} alt="puzz" className="imagepmP"/>                
                    <img src={media[9]} alt="puzz" className="imagepmL"/>  
                </div>


                
                {/* header - Process */}
                <div className='titleblock-pm'>

                    <p className='header-pm'> Process </p>
                </div> 

                {/* text - Process */}
                <div className='pictureRow-pm'>

                    <div className="picture-box-pm">
                        <p>
                        With most of the puzzle completed, I was left with individual missing pieces. 
                        There were several ways I could extract their outlines, but since I enjoy 
                        experimenting with computer vision, I chose to build a model using Roboflow. 
                        I meticulously annotated images and trained the model to detect both loose pieces 
                        and puzzle holes. Once trained, I used the model's predictions to extract polygon 
                        shapes for new images. On the left I am labeling an image and on the right is a test 
                        image the model properly outlined. 
                        </p>
                    </div>
                </div>

                {/* pics - roboflow */}
                <div className='pictureRow-pm'>

                    <img src={media[0]} alt="puzz" className="imagepmP"/>        
                    <img src={media[1]} alt="puzz" className="imagepmP"/>                
                    
                </div>


                {/* text - Process */}
                <div className='pictureRow-pm'>

                    <div className="picture-box-pm">
                        <p>
                        From there, I designed a matching algorithm to pair pieces 
                        with their corresponding gaps. For my initial test, I used five pieces and five holes. 
                        After the first training run with limited data, the model correctly matched only 
                        2 out of 5 pieces, not very effective. After refining the matching algorithm and 
                        running a second round of training, I improved the results to 3 out of 5. The model performed 
                        reasonably well at matching uniquely shaped pieces but struggled to 
                        distinguish the subtle differences in standard jigsaw pieces.
                        </p>
                    </div>
                </div>

                {/* pics - first model matching */}
                <div className='pictureRow-pm'>

                    <img src={media[5]} alt="puzz" className="imagepmP"/>        
                    <img src={media[6]} alt="puzz" className="imagepmP"/>                
                    
                </div>
                
                {/* text - Process */}
                <div className='pictureRow-pm'>

                    <div className="picture-box-pm">
                        <p>
                        Knowing the real use case 
                        wouldn't have the same number of matching pairs in every picture, I realized I needed to 
                        rethink my design. Instead of matching pairs directly, I wanted to create a repository of 
                        loose pieces and allow a user to take a picture of a puzzle hole to receive a 
                        recommended match.
                        <br></br>
                        <br></br>
                        This highlighted the most challenging constraint—extreme precision in 
                        photographing the pieces. Initially, I planned to capture an aerial view of 
                        multiple pieces at once and extract their shapes from there. However, I quickly 
                        realized that even a slight misalignment with the camera created small shadows from 
                        the puzzle's thickness, distorting the shape enough to throw off the calculations.
                        I envisioned building an app to use this for future puzzles, but this 
                        limitation made that goal more challenging. I couldn't find a way around 
                        the need for well-lit, precisely aligned photos of each puzzle piece, so I 
                        ultimately had to accept it as part of the process.
                        <br></br>
                        <br></br>
                        To account for potential errors in the pictures, I revisited my matching approach 
                        again to return the top recommendations instead of a single match. This not only 
                        helped compensate for minor inaccuracies but also added a human element, allowing 
                        for some puzzle-solving fun while dramatically narrowing down the options. Here you 
                        can see the model output suggesting which pieces to try as well as the matching score
                        with closer to 0 being better. 
                        </p>
                    </div>
                </div>

                {/* pics - model output */}
                <div className='pictureRow-pm'>

                    <img src={media[3]} alt="puzz" className="imagepmP"/>                            
                </div>

                {/* text - Process */}
                <div className='pictureRow-pm'>

                    <div className="picture-box-pm">
                        <p>
                        As I delved deeper into the project and my research, I came across videos by renowned 
                        engineers and scientists Mark Rober and Shane Wighton (Youtube channel: Stuff Made Here). 
                        Both described this as one of the most challenging projects they had ever worked on, 
                        a significant statement given their impressive accomplishments. 
                        Their approaches involved developing algorithms to extract puzzle edges and systematically 
                        test every possible combination to reconstruct the entire puzzle. While they optimized 
                        the comparisons and solution trees, the weakest link remained the precision of the 
                        images. Their solution was essential for assembling a puzzle from scratch, but since 
                        I was focused on the final steps, I hoped there was a little more wiggle room for slight inaccuracies.
                        <br></br>
                        <br></br>
                        With my new training and model design I was able to get all 5 pieces correctly 
                        recommended for their respective holes. For 4 out 5 holes the correct piece was 
                        the top recommendation with the last hole having its piece be the second recommendation. 
                        This was compared against a sample of 25 pieces. Pleased with these results I moved on 
                        to the final step of completing the puzzle! I photographed each piece and lined them up.
                        Then I took a picture of hole and ran it through the model. I had added the correct piece
                        to the list of used pieces and moved on to the next piece. 
                        </p>
                    </div>
                </div>

                {/* pics - all the pieces */}
                <div className='pictureRow-pm'>

                    <img src={media[8]} alt="puzz" className="imagepmL"/>                            
                </div>

                {/* header - Results */}
                <div className='titleblock-pm'>

                    <p className='header-pm'> Results </p>
                </div> 

                {/* pics - all the pieces */}
                <div className='pictureRow-pm'>

                    <img src={media[2]} alt="puzz" className="imagepmL"/>                            
                </div>

                {/* text - Results */}
                <div className='pictureRow-pm'>

                    <div className="picture-box-pm">
                        <p>
                        Infuriatingly a piece went missing over the 2.5 months of work, I have a 
                        sneaking suspicion my roommate's curious cat who frequented the puzzle 
                        table may be to blame. Nonetheless I was thrilled to have solved the puzzle! 
                        The balance between human problem-solving and computer assistance worked well, 
                        as it was exciting to quickly place pieces. When the model performed correctly, 
                        it was highly effective. The correct piece was the top suggestion 50% of the time 
                        and ranked within the top three 72% of the time. However, some images lacked sufficient 
                        quality, leading to improper outlines for certain pieces and holes, which resulted 
                        in occasional false matches.
                        <br></br>
                        <br></br>
                        I'd say I successfully achieved my goal—building a tool to help solve a puzzle—while 
                        learning a few things along the way. This tool has a very specific use case, so it 
                        won't work for solving future puzzles from scratch, but that was never my objective. 
                        General puzzle-solving models already exist, with plenty of GitHub codebases available, 
                        but they wouldn't have been useful for my nearly completed puzzle.
                        <br></br>
                        <br></br>
                        Did I accomplish my original goal of saving time? I finished in less than two weeks, 
                        but in terms of total hours, probably not. I stopped tracking, but the final hours were 
                        likely closer than I initially expected. However, I was able to work in small increments, 
                        which was difficult when solving the puzzle manually, it required great lighting and 
                        intense focus just to place a single piece.
                        <br></br>
                        <br></br>
                        Overall, this was a fun project, and it helped me complete a puzzle I wondered 
                        if I'd ever finish. All the code is available on my GitHub. Feel free to reach 
                        out with any questions, thanks for reading!
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
    }

export default Puzzle;