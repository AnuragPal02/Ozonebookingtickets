import "./searchitems.css";
export default function searchitems() {
  return (
    <div className="searchitemcontainer">
      <div className="imagediv">
        <img
          className="imgclass"
          src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWxzfGVufDB8fDB8fHww://www.booking.com/hotel/in/peninsula-suites-bengaluru.html?label=gen173bo-1FCAEoggI46AdIM1gDaGyIAQGYATG4ARfIAQzYAQHoAQH4AQOIAgGYAiGoAgO4AtSQ1q8GwAIB0gIkYWE0NTFiZjEtNmVhZi00N2FkLTkwNTItNmM2ZTNhYTFhODRk2AIF4AIB&sid=183eb0b9e8025bfbb533e4804229156e&aid=304142&ucfs=1&arphpl=1&checkin=2024-03-21&checkout=2024-03-23&dest_id=-2090174&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=1&req_children=1&age=15&req_age=15&hpos=16&hapos=16&sr_order=popularity&srpvid=68a353cee3d10014&srepoch=1710590137&all_sr_blocks=1004735404_382682994_3_2_0&highlighted_blocks=1004735404_382682994_3_2_0&matching_block_id=1004735404_382682994_3_2_0&sr_pri_blocks=1004735404_382682994_3_2_0__946818&from_sustainable_property_sr=1&from=searchresults#hotelTmpl"
          alt="img"
        />
      </div>
      <div className="textdiv">
        <label className="title">Tower street Apartments</label>
        <label className="distancetitle">500m from center</label>
        <label className="taxi">Free Airport-taxi</label>
        <label className="featuretext">
          Studio Apartment with air conditioning
        </label>
        <label className="cancel"> Free Cancellation</label>
        <lable className="lable">
          You can cancel later,so lock in this great price today
        </lable>
      </div>

      <div className="feedback">
        <div className="sirating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="sidetails">
          <span>$147</span>
          <span className="tax-and-fees">Includes Tax and fees</span>

          <button>see Availability</button>
        </div>
      </div>
    </div>
  );
}
