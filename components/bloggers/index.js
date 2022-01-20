import styles from './main.module.css'
import Blogcard from './blogCard'
import BlogCard from './blogCard'

function Blogger(){
    var blogContent = [
        {
            "title" : "Doughnuts(Veg)",
            "image" : "https://images.unsplash.com/photo-1618411640018-972400a01458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG91Z2hudXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            "url" : "#"
        },
        {
            "title" : "Butter Naan(Veg)",
            "image" : "https://media.istockphoto.com/photos/indian-naan-bread-picture-id1271561458?b=1&k=20&m=1271561458&s=170667a&w=0&h=xmYaCHVtXGUPjWl2jmWFmi-0IjOFewjl_gJN0uM9oD8=",
            "url" : "#"
        },
        {
            "title" : "Butter Chicken",
            "image" : "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnV0dGVyJTIwY2hpY2tlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            "url" : "#"
        },
    ]
    return(
        <>
            {blogContent.map((data, i)=>{
                return(<BlogCard count={i+1} content={data} />)
            })}
        </>
    )
}

export default Blogger;