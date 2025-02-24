import "../../styles/TripStyles.css";
import TripData from "./TripData";
import Kandy from "../../assets/kandy.jpg";
import Colombo from "../../assets/colombo.jpg";
import Anuradhapura from "../../assets/anuradhapura.jpg";
import Polonnaruwa from "../../assets/polonnaruwa.jpg";
import Hikkaduwa from "../../assets/hikkaduwa.webp";
import Batticaloa from "../../assets/batticaloa.jpg";
import Galle from "../../assets/galle.webp";
import Nuwaraeliya from "../../assets/nuwaraeliya.jpg";
import Sigiriya from "../../assets/sigiriya.jpg";
import Jaffna from "../../assets/jaffna.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trip</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="trip-card">
        <TripData
          image={Kandy}
          heading="Trip in Kandy"
          text="Kandy holds immense cultural importance in Sri Lanka. It 
        was the last capital of the ancient Sinhalese kings, and it 
        remained the seat of the Kingdom of Kandy until the British 
        colonized Sri Lanka in 1815. The city's crown jewel is the 
        Temple of the Sacred Tooth Relic (Sri Dalada Maligawa), which 
        houses a tooth relic of the Buddha. This temple is not only an 
        architectural marvel but also a symbol of Sri Lanka's Buddhist 
        identity. Every year, Kandy hosts the Esala Perahera, a grand and 
        colorful festival that parades through the streets, celebrating 
        the sacred tooth relic. The procession features traditional dancers, 
        drummers, elephants, and beautifully decorated floats, drawing both 
        locals and tourists."
        />

        <TripData
          image={Colombo}
          heading="Trip in Colombo"
          text="Colombo history spans centuries and includes influences from 
        Portuguese, Dutch, and British colonial rulers, along with its 
        indigenous Sinhalese heritage. The city is a living testament to 
        Sri Lanka's evolution from a colonial port town to a thriving metropolis.
        One of the most iconic landmarks is the Galle Face Green, a large open 
        space along the seafront that offers both leisure and scenic beauty. 
        Another important historical site is the Colombo National Museum, which 
        showcases Sri Lanka's cultural heritage, including exhibits of ancient art, 
        royal regalia, and historical artifacts. Fort, the district's business and 
        commercial center, is home to colonial buildings like the Old Dutch Hospital 
        and Clock Tower. These sites offer a glimpse into Colombo past, while also 
        housing modern businesses and entertainment spaces."
        />

        <TripData
          image={Anuradhapura}
          heading="Trip in Anuradhapura"
          text="Anuradhapura was the capital of Sri Lanka from the 4th century BCE until 
        the 11th century CE, and it played a central role in the development of Sri Lankan 
        civilization. The city is home to some of the most impressive archaeological and 
        religious sites in the country, offering visitors a deep connection to the island's 
        Buddhist heritage and ancient Sri Lankan culture. One of the most iconic landmarks 
        of Anuradhapura is the Sri Maha Bodhi, a sacred fig tree that is believed to have 
        grown from a cutting of the original tree under which the Buddha attained 
        enlightenment in India. The Sri Maha Bodhi is the oldest living tree with a 
        recorded history, and pilgrims from around the world visit to pay their respects. 
        The temple complex surrounding it is a hub of spiritual activity, with locals 
        offering flowers and prayers in the peaceful, serene atmosphere."
        />
      </div>

      <div className="trip-card">
        <TripData
          image={Polonnaruwa}
          heading="Trip in Polonnaruwa"
          text="Polonnaruwa's historical significance dates back to the 10th century, 
        when it became the capital of Sri Lanka under the Chola dynasty, after their 
        conquest of the Anuradhapura kingdom. Later, it became the capital again under 
        the Sinhalese kings, particularly during the reign of King Parakramabahu I 
        (1153 - 1186 CE), one of Sri Lanka's most illustrious rulers.
        King Parakramabahu I is credited with consolidating the island's kingdoms and 
        overseeing major infrastructure projects, such as the construction of tanks, canals, 
        and roads that contributed to Polonnaruwa's agricultural prosperity. The architecture 
        and engineering feats from this era remain the heart of Polonnaruwa's archaeological appeal."
        />

        <TripData
          image={Hikkaduwa}
          heading="Trip in Hikkaduwa"
          text="One of the most famous attractions in Hikkaduwa is its beach, which stretches for 
        several kilometers, offering soft golden sand and clear waters perfect for swimming. The towns 
        beach is not only popular for relaxation but also for its range of water activities. Snorkeling 
        and scuba diving are some of the most popular activities in Hikkaduwa, thanks to its vibrant 
        coral reefs that are home to diverse marine life, including tropical fish, sea turtles, and 
        colorful coral formations. Visitors can also engage in surfing, with the surfable waves attracting 
        both beginners and experienced surfers. Hikkaduwa’s beaches are also a great place for a leisurely 
        stroll at sunset, when the skies transform into beautiful hues of orange and pink, creating a 
        stunning backdrop to the tranquil ocean."
        />

        <TripData
          image={Batticaloa}
          heading="Trip in Batticaloa"
          text="The beaches of Batticaloa are some of the most peaceful and untouched in Sri Lanka. 
        Kallady Beach, located near the city of Batticaloa, is a serene spot where visitors can enjoy the sun, 
        the sea breeze, and the gentle lapping of waves. It is perfect for a relaxing day by the water or a 
        peaceful evening watching the sunset over the ocean. Another stunning coastal area is Pasikuda, located 
        just to the north of Batticaloa. Pasikuda is known for its shallow waters, making it one of the safest 
        and most picturesque beaches for swimming in Sri Lanka. The long stretch of coastline and crystal-clear 
        water make it an ideal destination for those looking to indulge in water sports like snorkeling and diving, 
        or simply to relax and enjoy the tranquility."
        />
      </div>

      <div className="trip-card">
        <TripData
          image={Galle}
          heading="Trip in Galle"
          text="Galle has a rich history that dates back to the ancient kingdoms of Sri Lanka, but it is most famous 
        for its colonial past. The town became an important port during the 16th century, first under the Portuguese 
        and later the Dutch. The Galle Fort was originally built by the Portuguese in 1588 and later expanded by the 
        Dutch in the 17th century. The forts well-preserved walls, watchtowers, and cobbled streets provide a glimpse 
        into the colonial influence that shaped Galles identity. The fort is a fascinating mix of architectural styles, 
        with elements of Dutch, Portuguese, and British designs. Inside the fort, visitors can explore narrow streets 
        lined with colonial houses, museums, boutique shops, art galleries, and cafes. The Dutch Reformed Church, 
        the Galle Lighthouse, and the National Maritime Museum are among the key historical sites within the fort that 
        showcase the towns colonial heritage."
        />

        <TripData
          image={Nuwaraeliya}
          heading="Trip in Nuwaraeliya"
          text="Nuwara Eliya is one of Sri Lanka premier tea-producing regions. The surrounding hills are covered in tea 
        plantations, where the famous Ceylon tea is cultivated. Visitors can take guided tours of the tea estates and 
        factories, where they can learn about the traditional process of tea production, from picking the leaves to the 
        final packaging. The plantations themselves are a sight to behold, with lush green tea bushes stretching over the 
        rolling hills. A visit to a tea factory, such as the Glenloch Tea Factory or Pedro Tea Estate, allows you to see 
        the intricate steps involved in creating some of the world’s finest tea. After touring the factory, visitors can 
        sample freshly brewed cups of Ceylon tea while enjoying views of the sprawling plantations."
        />

        <TripData
          image={Sigiriya}
          heading="Trip in Sigiriya"
          text="Sigiriya stands tall in the middle of a vast plain, surrounded by lush greenery, tropical forests, and 
        sprawling rice fields. The Sigiriya Rock is a natural fortress, formed from a volcanic plug that has weathered over 
        time to create the towering structure we see today. The rock itself is a stunning sight, with steep sides and a flat 
        summit that once served as the site of a royal palace. The surrounding landscape is equally impressive, with thick 
        jungle and fertile plains stretching to the horizon. The area around Sigiriya is dotted with water gardens, which 
        were created by ancient engineers to harness water from nearby streams and ponds. These gardens, alongside the Moat 
        and Wall that surround the fortress, contribute to Sigiriya reputation as a paradise of the past."
        />
      </div>

      <div className="trip-card">
        <TripData
          image={Jaffna}
          heading="Trip in Jaffna"
          text="Jaffna is a historically significant region, particularly for the Tamil-speaking people of Sri Lanka. 
        It has been a cultural hub for Sri Lankan Tamils for centuries, with deep roots in literature, music, dance, and 
        religion. The area was a center of ancient kingdoms, with various Tamil dynasties, including the Chola dynasty, 
        influencing the region's development. The Jaffna Kingdom, which existed from the 13th to the 17th centuries, 
        left a significant impact on the culture and identity of the district. The district is steeped in historical 
        temples, fortresses, and palaces, some of which are still visible today."
        />
      </div>
    </div>
  );
}

export default Trip;
