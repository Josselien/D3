//var canvas1 = d3.select("body")
					//.append("svg")
					//.attr("width",700)
					//.attr("height",300);
					
var canvas1 = d3.select('#canvas1');
					
var canvas2 = d3.select('#canvas2');				
					
var canvas3 = d3.select('#canvas3');	

				
					//barchart



					
var barcharttext = canvas1.append("text")
					.attr("x", 450)             
					.attr("y", 40)
					.attr("text-anchor", "middle")  
					.style("font-size", "18px") 
					.text("Aantal seconden over 200 meter op 15-3-2013");
					
var barcharttext1 = canvas1.append("text")
					.attr("x", 70)             
					.attr("y", 300)
					.attr("text-anchor", "middle")  
					.style("font-size", "18px") 
					.text("0");
					
var barcharttext1 = canvas1.append("text")
					.attr("x", 335)             
					.attr("y", 300)
					.attr("text-anchor", "middle")  
					.style("font-size", "18px") 
					.text("30");
					
var barcharttext1 = canvas1.append("text")
					.attr("x", 600)             
					.attr("y", 300)
					.attr("text-anchor", "middle")  
					.style("font-size", "18px") 
					.text("60");
					
var barcharttext1 = canvas1.append("text")
					.attr("x", 600)             
					.attr("y", 90)
					.attr("text-anchor", "middle")  
					.style("font-size", "18px") 
					.text("Anne");
					
var barcharttext1 = canvas1.append("text")
					.attr("x", 600)             
					.attr("y", 160)
					.attr("text-anchor", "middle")  
					.style("font-size", "18px") 
					.text("Mieke");
					
var barcharttext1 = canvas1.append("text")
					.attr("x", 600)             
					.attr("y", 230)
					.attr("text-anchor", "middle")  
					.style("font-size", "18px") 
					.text("Rachel");
				
var barchart = canvas1.append("rect")
					.attr("x",60)
					.attr("y",60)
					.attr("width",400)
					.attr("height",60)
					.attr("fill", "orange");					
				
					
var barchart1 = canvas1.append("rect")
					.attr("x",60)
					.attr("y",130)
					.attr("width",500)
					.attr("height",60)
					.attr("fill", "orange");
					
var barchart2 = canvas1.append("rect")
					.attr("x",60)
					.attr("y",200)
					.attr("width",450)
					.attr("height",60)
					.attr("fill", "orange");
					
					
					d3.select('#rechthoeken').on('click', function() {
					barchart.transition()
					.attr("width", 350)
					.duration(1000) 
					.delay(100)  
					.ease("elastic")
					barchart1.transition()
					.attr("width", 370)
					.duration(1000) 
					.delay(100)  
					.ease("elastic")
					barchart2.transition()
					.attr("width", 400)
					.duration(1000) 
					.delay(100)  
					.ease("elastic")
					barcharttext.transition()
					.text("Aantal seconden over 200 meter op 15-3-2014");
					})
			

					//vierkant
					
var vierkant = canvas2.append("rect")
					.attr("x",300)
					.attr("y",80)
					.attr("width",60)
					.attr("height",60)
					.attr("fill", "white");
					
var vierkanttext = canvas2.append("text")
					.attr("x", 350)             
					.attr("y", 50)
					.attr("text-anchor", "middle")  
					.style("font-size", "18px") 
					.text("Hoe moeilijk vond ik deze opdracht?");
					
var vierkanttext = canvas2.append("text")
					.attr("x", 550)             
					.attr("y", 180)
					.attr("text-anchor", "middle")  
					.style("font-size", "18px") 
					.text("Heel moeilijk");
					
var vierkanttext = canvas2.append("text")
					.attr("x", 100)             
					.attr("y", 180)
					.attr("text-anchor", "middle")  
					.style("font-size", "18px") 
					.text("Heel makkelijk");
					
					d3.select('#vierkant').on('click', function() {
					vierkant.transition()
					.attr("x",200)
					.attr("fill","green")
					.duration(1000)  
					.ease("elastic")
					.each("end",function() { 
					//d3.select('#vierkant').       
					vierkant.transition()         
					.attr("x",400)
					.attr("fill","red")
					.duration(2000) 
					.delay(100)  
					.ease("elastic");    
					})              
					});
					
					
					//cirkels
					
					
var cirkel = canvas3.append("circle")
					.attr("cx", 400)
					.attr("cy", 100)
					.attr("r", 70)
					.attr("fill", "black");
				
		
var cirkel1 = canvas3.append("circle")
					.attr("cx", 300)
					.attr("cy", 250)
					.attr("r", 70)
					.attr("fill", "black");				
					
					
var cirkel2 = canvas3.append("circle")
					.attr("cx", 500)
					.attr("cy", 250)
					.attr("r", 70)
					.attr("fill", "black");
					
var cirkels = canvas3.append("text")
					.attr("x", 370)             
					.attr("y", 15)
					.attr("text-anchor", "middle")  
					.style("font-size", "18px") 
					.text("Animatie");
				
					
function animate() {
					if (counter % 5 === 0) {
					cirkel.transition()
					.duration(500)
					.attr('fill', 'red')
					.attr("cx", 270)
					.attr("cy", 250);
					
					cirkel1.transition()
					.duration(500)
					.attr("cx", 470)
					.attr("cy", 250)
					.attr('fill', 'orange');
					
					cirkel2.transition()
					.duration(500)
					.attr("cx", 370)
					.attr("cy", 100)
					.attr('fill', 'yellow');
					
					}else {
					
					cirkel.transition()
					.duration(400)
					.attr("cx", 470)
					.attr("cy", 250)
					.attr('fill', 'purple');
				   
				   cirkel1.transition()
					.duration(400)
					.attr('fill', 'pink')
					.attr("cx", 370)
					.attr("cy", 100);
					
					cirkel2.transition()
					.duration(400)
					.attr('fill', 'blue')
					.attr("cx", 270)
					.attr("cy", 250);
					}
					
					counter++;
					setTimeout(animate, 500);				
						
					}
					
					var counter = 1;
					animate();
					
					
					//lijngrafiek
					
/*var lijndata = 	[ 	{ "x": 1,   "y": 5},  { "x": 20,  "y": 20},
					{ "x": 40,  "y": 10}, { "x": 60,  "y": 40},
					{ "x": 80,  "y": 5},  { "x": 100, "y": 60}];
					
var lijnFunction = d3.svg.line()
                        .x(function(d) { return d.x; })
                        .y(function(d) { return d.y; })
                        .interpolate("linear");
						
var lijngrafiek = canvas4.append("path")
                           .attr("d", lijnFunction(lijndata))
                           .attr("stroke", "blue")
                           .attr("stroke-width", 2)
                           .attr("fill", "none");
						   
						   
					d3.select('#lijngrafiek').on('click', function() {
					lijngrafiek.transition()
					.attr("stroke","black")
					.duration(1000) 
					.delay(100)  
					.ease("elastic")
					})*/
					
					