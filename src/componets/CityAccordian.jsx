import { Accordion } from "react-bootstrap";
import {cityDetails} from "./Carousels"

function CityAccordian (){

  

    return  (
      <>
        <Accordion defaultActiveKey={0}>
            {cityDetails.map((value, index)=>{
                return(
                    <Accordion.Item eventKey={index}>
                    <Accordion.Header>{value.cityName}</Accordion.Header>
                    <Accordion.Body>
                      {value.description}
                    </Accordion.Body>
                  </Accordion.Item>
                 
                   
                )
            })}
            </Accordion>
     </>
     
    )
    
};

export default CityAccordian;