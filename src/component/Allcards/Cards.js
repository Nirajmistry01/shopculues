import useFetch from "../../fetch/usefetch";
import "./cards.css";
export default function Cards() {
  const commentsData = useFetch({});
  return (
    <>
      <div className="col-100">
        {commentsData === null && <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>}
        {commentsData !== null &&
          commentsData.map((item, index) => (
            <div className="card" key={index}>
              <div className="col-15">
                <div className="img">
                  <a href="#">
                    <img src={item.image} alt="item" />
                  </a>
                </div>
                <div className="title">
                  <p>{item.title}</p>
                </div>
                <div className="price">
                  <p>{item.price}</p>
                </div>
                <div className="offer">
                  <p>{item.category}</p>
                </div>
                <div className="btn">
                  <button>Add to card</button>
                  <button>buy</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
