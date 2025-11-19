// PostCard.js
//👍 likes | 👎 dislikes | 👁️ views
export default function PostCard({title,body,tags,reactions,views}) {
    return (
    <div style={{
    display: "flex",
    flexDirection: "column",
    backgroundColor: "lightgray",
    borderRadius: "5px",
    padding: "15px",
    flexWrap: "wrap"
  }}>
    
    <h2>{title}</h2>
    <p>{body}</p>
  
    <div style={{ display: "flex", gap: "5px", color: "blue" }}>
      {tags.map((item, index) => (
        <p key={index}>#{item}</p>
      ))}
    </div>
  
   
    <div style={{
      display: "flex",
      gap: "15px",
      color: "gray",
      marginTop: "8px",
      alignItems: "center"
    }}>
  
      <p>👍 {reactions.likes}</p>
  
      <div style={{
        width: "1px",
        height: "20px",
        backgroundColor: "gray"
      }}></div>
  
      <p>👎 {reactions.unlikes}</p>
  
      <div style={{
        width: "1px",
        height: "20px",
        backgroundColor: "gray"
      }}></div>
  
      <p>👁️ {views}</p>
  
    </div>
  
  </div>
  
    );
  }
  

  // App.js
import "./styles.css";
import PostCard from "./PostCard.js";

export default function BlogPosts() {
  return (
    <div>
      <h2>Blog Posts </h2>
      <PostCard title={"Ronaldo"} body={"jfadfkadjfkafjajfdklfjdfkwadkfdfjadkfjadkfj"}
        tags={["history", "geog"]}
        reactions={{
          likes: 1,
          unlikes: 10,
        }}
        views={34}
      />
    </div>
  );
}
