import edward from "../../assets/fma.gif"
import isagi from "../../assets/isagi.gif"
import yaguchi from "../../assets/yaguchi.gif"
import ema from "../../assets/ema.gif"

import "./sectionC.css"

function SectionC(){
    return(
        <div className="sec-c">
          <div>
             <img className="ed-1" src={edward} />
            </div>
            <div><p className="ed-text">"Brotherhood 100"</p>
          </div>
          <div className="edward">
          <span className="e-1">Edward elric.</span><br/>
          <span className="e-2">Amestris.</span>
        </div>
        <div className="dash7">
          <span className="i-7">|</span>
        </div>
          <div>
              <img  className="isagi-1" src={isagi} />
          </div>
          <div><p className="isagi-text">"Ego is not the enemy"</p>
          </div>
          <div className="isagi">
          <span className="is-1">Isagi.</span><br/>
          <span className="is-2">Blue lock.</span>
        </div>
        <div className="dash8">
          <span className="i-8">|</span>
        </div>
        <div>
              <img  className="yaguchi-1" src={yaguchi} />
          </div>
          <div><p className="yaguchi-text">"Art is subjective"</p>
          </div>
          <div className="yaguchi">
          <span className="ya-1">Yatora.</span><br/>
          <span className="ya-2">Japan.</span>
        </div>
        <div className="dash9">
          <span className="i-9">|</span>
        </div>
        <div>
              <img  className="ema-1" src={ema} />
          </div>
          <div><p className="ema-text">"GO Vegan"</p>
          </div>
          <div className="ema">
          <span className="em-1">Ema.</span><br/>
          <span className="em-2">Farm.</span>
        </div>
        <div className="dash10">
          <span className="i-10">|</span>
        </div>
        </div>

    )
}
 export default SectionC