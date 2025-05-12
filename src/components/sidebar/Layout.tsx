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

const Layout = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <div className="columns is-gapless layout-container">
      <aside className={`layout-sidebar ${collapsed ? "collapsed" : ""}`}>
        <div className="sidebar-header">
          {!collapsed && <h1 className="menu-header">Menu</h1>}
          <button
            className="collapse-btn"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? (
              <ChevronDoubleRightIcon className="icon" />
            ) : (
              <ChevronDoubleLeftIcon className="icon" />
            )}
          </button>
        </div>

        <ul className={`${collapsed ? "collapsed-menu" : "menu-list"}`}>
          <li className="">
            <Link
              to="/"
              className={`${collapsed ? "collapsed-sidebar-btn" : "expanded-sidebar-btn"}`}
            >
              {collapsed ? (
                <HomeIcon className="icon" />
              ) : (
                <span className="label-btn">Home</span>
              )}
            </Link>
          </li>
          <li className="">
            <Link
              to="/duel"
              className={`${collapsed ? "collapsed-sidebar-btn" : "expanded-sidebar-btn"}`}
            >
              {collapsed ? (
                <PlayIcon className="icon" />
              ) : (
                <span className="label-btn">Let's Duel</span>
              )}
            </Link>
          </li>
          <li className="">
            <Link
              to="/statistics"
              className={`${collapsed ? "collapsed-sidebar-btn" : "expanded-sidebar-btn"}`}
            >
              {collapsed ? (
                <ChartBarIcon className="icon" />
              ) : (
                <span className="label-btn">Statistics</span>
              )}
            </Link>
          </li>
          <li className="">
            <Link
              to="/help"
              className={`${collapsed ? "collapsed-sidebar-btn" : "expanded-sidebar-btn"}`}
            >
              {collapsed ? (
                <QuestionMarkCircleIcon className="icon" />
              ) : (
                <span className="label-btn">Need Help?</span>
              )}
            </Link>
          </li>
        </ul>
      </aside>

      <div className="column is-10 p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
