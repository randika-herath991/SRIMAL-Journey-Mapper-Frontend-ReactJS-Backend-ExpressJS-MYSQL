import Kandy1 from "../../assets/kandy1.jpg";
import Kandy2 from "../../assets/kandy2.jpg";
import Colombo1 from "../../assets/colombo1.jpg";
import Colombo2 from "../../assets/colombo2.jpg";
import Anuradhapura1 from "../../assets/Anuradhapura1.jpg";
import Anuradhapura2 from "../../assets/Anuradhapura2.jpg";
import Polonnaruwa1 from "../../assets/polonnaruwa1.jpg";
import Polonnaruwa2 from "../../assets/polonnaruwa2.jpg";
import Hikkaduwa1 from "../../assets/hikkaduwa1.jpg";
import Hikkaduwa2 from "../../assets/hikkaduwa2.jpg";
import Batticaloa1 from "../../assets/batticaloa1.jpg";
import Batticaloa2 from "../../assets/batticaloa2.jpg";
import Galle1 from "../../assets/galle1.jpg";
import Galle2 from "../../assets/galle2.jpg";
import Nuwaraeliya1 from "../../assets/nuwaraeliya1.jpg";
import Nuwaraeliya2 from "../../assets/nuwaraeliya2.jpg";
import Sigiriya1 from "../../assets/sigiriya1.jpg";
import Sigiriya2 from "../../assets/sigiriya2.jpg";
import Jaffna1 from "../../assets/jaffna1.jpg";
import Jaffna2 from "../../assets/jaffna2.jpg";
import DestinationData from "./DestinationData";
import "../../styles/DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>

      <DestinationData
        className="first-description"
        heading="Kandy District"
        text=" Kandy City tour package ( 2 days package ) 
         Private air-conditioned car for the duration of the tour. 
         1-night stay at a 3-star hotel or guesthouse in Kandy. 
         Breakfast included at the hotel. 
         Traditional Sri Lankan lunch at a local restaurant. 
         Travel destinations  
           ● Temple of the Sacred Tooth Relic 
           ● Royal Botanical Gardens, Peradeniya 
           ● Kandy Lake 
           ● Kandy View Point 
           ● Cultural Show 
        Price: $90  (LKR 27000)  per person (Includes transportation, meals, and entrance fees for 
        activities) "
        firstImage={Kandy1}
        secondImage={Kandy2}
      />

      <DestinationData
        className="first-description-reverse"
        heading="Colombo District"
        text="Colombo City tour package ( 1 day package ) 
        Private air-conditioned car for the duration of the tour. 
        Breakfast at the hotel (if needed) 
        Lunch at a popular local restaurant serving Sri Lankan cuisine. 
            Travel destinations  
            ● Galle Face Green:  
            ● Gangaramaya Temple:  
            ● Independence Square:  
            ● National Museum of Colombo:  
            ● Pettah Market: 
        Price: $80 (LKR 24000) per person (Includes transportation, meals, and entrance fees for 
        activities)"
        firstImage={Colombo1}
        secondImage={Colombo2}
      />

      <DestinationData
        className="first-description"
        heading="Anuradhapura District"
        text="Anuradhapura City tour package ( 2 days package ) 
         Private air-conditioned car for the duration of the tour. 
         1-night stay at a 3-star hotel or guesthouse in Anuradhapura. 
         Breakfast included at the hotel. 
         Traditional Sri Lankan lunch at a local restaurant. 
            Travel destinations  
             ● Sri Maha Bodhi 
             ● Ruwanwelisaya Stupa 
             ● Jetavanaramaya 
             ● Isurumuniya Vihara 
             ● Abhayagiri Monastery 
          Price: $80 (LKR 24000) per person (Includes transportation, meals, and entrance fees for 
          activities)"
        firstImage={Anuradhapura1}
        secondImage={Anuradhapura2}
      />

      <DestinationData
        className="first-description-reverse"
        heading="Polonnaruwa District"
        text="Polonnaruwa City tour package ( 2 days package ) 
         Private air-conditioned car for the duration of the tour. 
         1-night stay at a 3-star hotel or guesthouse in Polonnaruwa. 
         Breakfast included at the hotel. 
         Traditional Sri Lankan lunch at a local restaurant. 
             Travel destinations  
               ● Royal Palace 
               ● Gal Vihara 
               ● Parakrama Samudra 
               ● Lankatilaka Vihara 
               ● Polonnaruwa Archaeological Museum 
         Price: $80 (LKR 24000) per person (Includes transportation, meals, and entrance fees for 
         activities) "
        firstImage={Polonnaruwa1}
        secondImage={Polonnaruwa2}
      />

      <DestinationData
        className="first-description"
        heading="Hikkaduwa"
        text="Hikkaduwa City tour package ( 1 day package ) 
         Pick-up and drop-off from your hotel or Hikkaduwa Railway Station. 
         Private air-conditioned car for the duration of the tour. 
         Breakfast included at the hotel. 
         Traditional Sri Lankan lunch at a local restaurant. 
            Travel destinations  
            ● Hikkaduwa Beach 
            ● Coral Sanctuary 
            ● Turtle Hatchery 
            ● Hikkaduwa National Park  
            ● Seenigama Temple 
        Price: $85  (LKR 25500) per person (Includes transportation, meals, and entrance fees for 
        activities) "
        firstImage={Hikkaduwa1}
        secondImage={Hikkaduwa2}
      />

      <DestinationData
        className="first-description-reverse"
        heading="Batticaloa District"
        text="Batticaloa City tour package ( 2 days package ) 
         Private air-conditioned car for the duration of the tour. 
         1-night stay at a 3-star hotel or guesthouse in Batticaloa. 
         Breakfast included at the hotel. 
         Traditional Sri Lankan lunch at a local restaurant. 
            Travel destinations  
            ● Batticaloa Fort 
            ● Kallady Bridge 
            ● Batticaloa Lagoon 
            ● Sittandy Beach 
            ● St. Mary's Cathedral 
         Price: $85  (LKR 25500) per person (Includes transportation, meals, and entrance fees for 
         activities) "
        firstImage={Batticaloa1}
        secondImage={Batticaloa2}
      />

      <DestinationData
        className="first-description"
        heading="Galle District"
        text="Galle City tour package ( 2 days package ) 
         Private air-conditioned car for the duration of the tour. 
         1-night stay at a 3-star hotel or guesthouse in Galle. 
         Breakfast included at the hotel. 
         Traditional Sri Lankan lunch at a local restaurant. 
            Travel destinations  
             ● Galle Fort 
             ● Dutch Reformed Church 
             ● National Maritime Museum 
             ● Galle Lighthouse 
             ● Unawatuna Beach 
         Price: $90  (LKR 27000) per person (Includes transportation, meals, and entrance fees for 
         activities)"
        firstImage={Galle1}
        secondImage={Galle2}
      />

      <DestinationData
        className="first-description-reverse"
        heading="Nuwaraeliya District"
        text="Nuwara Eliya City tour package ( 2 days package ) 
         Private air-conditioned car for the duration of the tour. 
         1-night stay at a 3-star hotel or guesthouse in Nuwara Eliya . 
         Breakfast included at the hotel. 
         Traditional Sri Lankan lunch at a local restaurant. 
             Travel destinations  
             ● Gregory Lake 
             ● Hakgala Botanical Gardens 
             ● Nuwara Eliya Golf Course 
             ● Pedro Tea Estate 
             ● Seetha Amman Temple 
         Price: $100 (LKR 30000) per person (Includes transportation, meals, and entrance fees for 
         activities)"
        firstImage={Nuwaraeliya1}
        secondImage={Nuwaraeliya2}
      />

      <DestinationData
        className="first-description"
        heading="Sigiriya"
        text="Sigiriya City tour package ( 1 day package ) 
         Pick-up and drop-off from your hotel or Sigiriya Bus Station. 
         Private air-conditioned car for the duration of the tour. 
         Breakfast included at the hotel. 
         Traditional Sri Lankan lunch at a local restaurant. 
              Travel destinations  
              ● Sigiriya Rock Fortress 
              ● Sigiriya Frescoes 
              ● Pidurangala Rock  
              ● Sigiriya Museum 
              ● Water Garden 
         Price: $80 (LKR 24000) per person (Includes transportation, meals, and entrance fees for 
         activities) "
        firstImage={Sigiriya1}
        secondImage={Sigiriya2}
      />

      <DestinationData
        className="first-description-reverse"
        heading="Jaffna District"
        text=" Jaffna City tour package ( 2 days package ) 
         Private air-conditioned car for the duration of the tour. 
         1-night stay at a 3-star hotel or guesthouse in Jaffna. 
         Breakfast included at the hotel. 
         Traditional Sri Lankan lunch at a local restaurant. 
            Travel destinations  
            ● Jaffna Fort 
            ● Nallur Kandaswamy Kovil 
            ● Jaffna Library 
            ● Casuarina Beach  
            ● Keerimalai Hot Springs  
         Price: $70 (LKR 21000) per person (Includes transportation, meals, and entrance fees for 
         activities) "
        firstImage={Jaffna1}
        secondImage={Jaffna2}
      />
    </div>
  );
};

export default Destination;
