import React, {FC} from "react";
import {Nav, Sidenav} from "rsuite";
import {useLocation, useNavigate} from "react-router-dom";

const Navigation: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  function handleSelect(eventKey: string) {
    navigate(eventKey);
  }

  return (
    <div style={{width: 240, height: "100%"}}>
      <Sidenav style={{height: "100%"}}>
        <Sidenav.Body>
          <Nav onSelect={handleSelect}>
            {Object.keys(navigationItems).map((key) => (
              <Nav.Item key={key} eventKey={key} active={location.pathname === key}>
                {navigationItems[key]}
              </Nav.Item>
            ))}
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  )
};
export default Navigation

const navigationItems: Dict<string> = {
  "/app/products": "Products",
  "/app/forms": "Forms",
}