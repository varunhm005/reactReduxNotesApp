import React, {useState} from 'react'
import profileImage from "../../images/profile.png"
import {Link } from 'react-router-dom';

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('Home');

  const handleItemClick = (item) => {
    setActiveItem(item);
    // You can add additional logic here, like navigating to the selected item's page.
  };
  return (
    <div className="sidebar">
          <div className="row">
            <div className="col-md-4 col-sm-4 colMobLogo">
              <img className="profileImage" src={profileImage} alt=""></img>
            </div>
            <div className="col-md-8 col-sm-8 colMobContent">
              <div className="personName">John Doe</div>
              <div className="personEmail">johndoe@gmail.com</div>
            </div>
          </div>
          <Link className={activeItem === 'Home' ? 'active iconHead' : 'iconHead'} onClick={() => handleItemClick('Home')} to="/"><i className="fa fa-home ml-2" aria-hidden="true"></i> Home</Link>
          <Link className={activeItem === 'Search' ? 'active iconHead' : 'iconHead'} onClick={() => handleItemClick('Search')} to="/search"><i className="fa fa-search ml-2" aria-hidden="true"></i><span className="ml-2">Search</span></Link>
          <Link className={activeItem === 'Notes' ? 'active iconHead' : 'iconHead'} onClick={() => handleItemClick('Notes')} to="/notes"><i className="fa fa-file-text ml-2" aria-hidden="true"></i><span className="ml-2">Notes</span></Link>
          <Link className={activeItem === 'Task' ? 'active iconHead' : 'iconHead'} onClick={() => handleItemClick('Task')} to="/task"><i className="fa fa-tasks ml-2" aria-hidden="true"></i> Tasks</Link>
          <Link className={activeItem === 'Archive' ? 'active iconHead' : 'iconHead'} onClick={() => handleItemClick('Archive')} to="/archive"><i className="fa fa-archive ml-2" aria-hidden="true"></i><span className="ml-2">Archive</span></Link>
          <Link className={activeItem === 'Bin' ? 'active iconHead' : 'iconHead'} onClick={() => handleItemClick('Bin')} to="/bin"><i className="fa fa-trash ml-2" aria-hidden="true"></i><span className="ml-2">Bin</span></Link>
        </div>
  )
}
