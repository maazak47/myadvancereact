import Carousel from 'react-bootstrap/Carousel';



    const cityDetails = [
        {
          cityName: "New York",
          description: "New York City, often simply referred to as New York, is the most populous city in the 0United States. It is known for its iconic skyline, cultural diversity, and a vibrant arts scene. The city is home to landmarks such as the Statue of Liberty, Times Square, Central Park, and the Empire State Building.",
          img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/aa/b0/fd/caption.jpg?w=600&h=-1&s=1"
        },
        {
          cityName: "Los Angeles",
          description: "Los Angeles, often called LA, is a major city in California known for its entertainment industry, including Hollywood. It boasts a Mediterranean climate and beautiful beaches. LA is also famous for its cultural attractions, like the Getty Center, Griffith Observatory, and the Los Angeles County Museum of Art (LACMA).",
          img : "https://media.california.com/media/_versions_jpg/articles/best_views_in_los_angeles__4087x2728____v1222x580__.jpg"
          
        },
        {
          cityName: "Chicago",
          description: "Chicago is the third-largest city in the United States and is known for its architecture, deep-dish pizza, and vibrant music scene, particularly in jazz and blues. The city offers a mix of modern skyscrapers and historic landmarks, such as the Willis Tower, Millennium Park, and the Art Institute of Chicago.",
          img: "https://hotelemc2.com/wp-content/uploads/2018/02/Why-Chicago-is-the-Best-City-in-the-World.png"
        },
        
      
      ];

      cityDetails.map((value,index)=>{
        return (value);
    })
    

 function CarouselCIty (){
    return (
    
      <>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          cityName= {cityname}
          src="holder.js/800x400?text=First slide&bg=f5f5f5https://hotelemc2.com/wp-content/uploads/2018/02/Why-Chicago-is-the-Best-City-in-the-World.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
     
    
    </Carousel>
  
      </>
    );
     
 };
 
 export default CarouselCIty;

