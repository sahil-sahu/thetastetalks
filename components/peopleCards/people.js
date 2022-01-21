 import styles from "./people.module.css"
 import PeopleCard from "./peopleCard"

 function Profile(){

   var json = [
      {
            "name":"ap_foodiaries",
            "description":"Trying our best to serve the best of food with genuiene reviews and proper food analysis",
            "image": "https://images.pexels.com/photos/4910931/pexels-photo-4910931.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "url":"ap_foodiaries"
         },
      {
         "name":"FOODALICIOUS",
         "description":"Trying our best to serve the best of food with genuiene reviews and proper food analysis",
         "image": "https://images.pexels.com/photos/4911191/pexels-photo-4911191.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
         "url":"foodalicous"
      },
      {
         "name":"_foodie.phenomenal_15",
         "description":"Trying our best to serve the best of food with genuiene reviews and proper food analysis",
         "image": "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
         "url":"_foodie.phenomenal_15"
      },
      {
         "name":"thetastetalks",
         "description":"Trying our best to serve the best of food with genuiene reviews and proper food analysis",
         "image": "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
         "url":"thetastetalks"
      },
      {
         "name":"pepper_pots",
         "description":"Trying our best to serve the best of food with genuiene reviews and proper food analysis",
         "image": "https://images.pexels.com/photos/3094219/pexels-photo-3094219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
         "url":"pepper_pots"
      }       
   ]

    return(
      <div className={styles.peopleCards}>
         {json.map((Object, i)=> {
            return (<PeopleCard obj={Object} count={i}/>)
         })}
      </div>
    )

 }

 export default Profile;