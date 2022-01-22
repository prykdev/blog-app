import './sidebar.css'

export default function sidebar() {
    return (
        
        <div className="sidebar">
           <div className="sidebarItem">
               <span className='sidbarTitle'>ABOUT ME</span>
               <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
    
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, sit odio saepe quis odit ducimus, accusantium perspiciatis nostrum error vitae nulla. Molestiae dolorem deleniti vel officiis quos delectus, deserunt et.</p>
           </div>
           <div className="sidebarItem">
               <span className='sidbarTitle'>CATEGORIES</span>
               <ul className='sidebarList'>
               <li className="sidebarListItem">Life</li>
               <li className="sidebarListItem">Music</li>
               <li className="sidebarListItem">Style</li>
               <li className="sidebarListItem">Sport</li>
               <li className="sidebarListItem">Tech</li>
               <li className="sidebarListItem">Cinema</li>
               </ul>
           </div>

           <div className='sidebarItem'>
               <span className='sidbarTitle'>Follow</span>

               <div className="sidebarSocials">
                  <i className="sidebarIcon fab fa-facebook-square"></i>
                  <i className="sidebarIcon fab fa-twitter-square"></i>
                  <i className="sidebarIcon fab fa-instagram-square"></i>
                  <i className="sidebarIcon fab fa-discord"></i>
               </div>
           </div>
        </div>
    )
}
