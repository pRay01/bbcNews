import todo from "../../assets/todo.gif";
import zenitsu from "../../assets/zenitsu.gif";
import pain from "../../assets/pain.gif"
import ace from "../../assets/ace.gif"
import "./sectionB.css";

function SectionB() {
  return (
    <div className="section-b">
      <div className="s-1">
        <div className="news">
          <img className="n-1" src={todo} />
        </div>
        <div>
          <h6 className="text1">"What CSS does to Html."</h6>
        </div>
        <div className="todoroki">
          <span className="t-1">Shoto Todoroki.</span>
          <br></br>
          <span className="t-2">UA.</span>
        </div>
        <div className="dash2">
          <span className="i-2">|</span>
        </div>
      </div>
      <div className="s-2">
      <div className="news-2">
          <img className="zen-1" src={zenitsu} />
        </div>
        <div>
          <h6 className="text-1">"Flash-Lite."</h6>
        </div>
        <div className="zen-2">
          <span className="tex-1">Zenitsu.</span>
          <br></br>
          <span className="tex-2">Japan</span>
        </div>
        <div className="dash3">
          <span className="i-3">|</span>
        </div>
      </div>
      <div >
      <div className="news">
          <img className="pain" src={pain} />
        </div>
        <div>
          <h6 className="text2">"Konoha:F"</h6>
        </div>
        <div className="naruto">
          <span className="p-1">Pain.</span>
          <br></br>
          <span className="p-2">Konoha.</span>
        </div>
        <div className="dash4">
          <span className="i-4">|</span>
        </div> 
       </div>
       <div>
       <div className="s-2">
      <div className="news-2">
          <img className="ace-1" src={ace} />
        </div>
        <div>
          <h6 className="text-2">"R.I.P Ace"</h6>
        </div>
        <div className="ace-2">
          <span className="a-1">Luffy.</span>
          <br></br>
          <span className="a-2">Marineford</span>
        </div>
        <div className="dash5">
          <span className="i-5">|</span>
        </div>
      </div>
       </div>
    </div>
  );
}
export default SectionB;
