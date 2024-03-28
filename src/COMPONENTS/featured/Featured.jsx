import place1 from "../../IMAGES/place1.jpg";
import "./featured.css";
export default function Featured() {
  return (
    <div className="featured">
      <div className="featureitem">
        <img
          className="imageclass"
          src="https://th.bing.com/th?id=OIP.8qG5VU0FN4c1NoAqGdJ6vAHaE-&w=304&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
          alt="img"
        />
        <div className="featuredtexts">
          <h1>Name</h1>
          <h2>carriage</h2>
        </div>
      </div>
      <div className="featureitem">
        <img
          className="imageclass"
          src="https://th.bing.com/th?id=OIP.T3wowH5M4uQl_ksIAhOqKgHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
          alt="img"
        />
        <div className="featuredtexts">
          <h1>Name</h1>
          <h2>carriage</h2>
        </div>
      </div>
    </div>
  );
}
