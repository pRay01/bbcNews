import logo1 from "../../assets/logo.png";
import account from "../../assets/a.png"
import search from "../../assets/search.png"

import "./header.css";



function Header(){
    return(
       <div className="head">
          <div className="logo">
              <img className="l1" src={logo1} alt="logo"/>
          </div>
          <div>
               <img className="a1" src={account} alt="sign in" />
             </div>
             <div className="sign-in"><span className="a2">Sign in </span></div>
             <div>
                 <nav>
                    <ul className="list0">
                     <li className="list1"><a className="home" href="#">Home</a></li> 
                     <li className="list2"><a className="news" href="#">News</a></li>
                     <li className="list3"><a className="sports" href="#">Sports</a></li>
                     <li className="list4"><a className="reels" href="#">Reels</a></li>
                     <li className="list5"><a className="worklife" href="#">Worklife</a></li>  
                     <li className="list6"><a className="travel" href="#">Travel</a></li>
                     <li className="list7"><a className="future" href="#">Future</a></li>
                     <li className="list8"><a className="culture" href="#">culture</a></li>
                    </ul>
                 </nav>
             </div>
             <div className="more">
                    <span className="more1">More</span> 
                    <select className="select"></select>                                                                                                                                                                                                                                                                                                                       
             </div>
             <div className="search">
                 <input className="search1" type="text" placeholder="Search"/>
                 <img className="search2" src={search}   />
             </div>
        </div>
    )
}
export default Header