import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  HomeIcon,
  PlayIcon,
  ChartBarIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import "./layout.scss";

const Layout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="columns is-gapless" style={{ minHeight: "100vh" }} >
      <aside className={`layout-sidebar ${collapsed ? "collapsed" : ""}`}>
        <div className="sidebar-header">
          {!collapsed && <h1 className="menu-header">Menu</h1>}
          <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? (
              <ChevronDoubleRightIcon className="icon" />
            ) : (
              <ChevronDoubleLeftIcon className="icon" />
            )}
          </button>
        </div>

        <ul className={`${collapsed ? "collapsed-menu" : "menu-list"}`}>
          <li className="sidebar-btn">
            <Link to="/" className={`${collapsed ? "collapsed-sidebar-btn" : "expanded-sidebar-btn"}`}>
              {collapsed ? <HomeIcon className="icon" /> : "Home"}
            </Link>
          </li>
          <li className="sidebar-btn">
            <Link to="/duel" className={`${collapsed ? "collapsed-sidebar-btn" : "expanded-sidebar-btn"}`}>
              {collapsed ? <PlayIcon className="icon" /> : "Let's Duel"}
            </Link>
          </li>
          <li className="sidebar-btn">
            <Link to="/statistics" className={`${collapsed ? "collapsed-sidebar-btn" : "expanded-sidebar-btn"}`}>
              {collapsed ? <ChartBarIcon className="icon" /> : "Statistics"}
            </Link>
          </li>
          <li className="sidebar-btn">
            <Link to="/help" className={`${collapsed ? "collapsed-sidebar-btn" : "expanded-sidebar-btn"}`}>
              {collapsed ? <QuestionMarkCircleIcon className="icon" /> : "Need Help?"}
            </Link>
          </li>
        </ul>
      </aside>

      <div className="column is-flex is-10 p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;