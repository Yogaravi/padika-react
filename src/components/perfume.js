// perfume list
import one from "../images/perfume2.jpg"
import two from "../images/perfume3.jpg"
function Perfume()
{
  return(
    <div class="products">
 
    <div class="box">
        
                <img src={two}/>
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
    </div>
    
    <div class="box">
        <img src={one} alt="villain"/>
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
    </div>
    <div class="box">
        <img src={two} alt="Designs Club"/>
        <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
    </div>

    
</div>
  )
}
export default Perfume
