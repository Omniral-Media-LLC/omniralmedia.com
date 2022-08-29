import { useEffect } from "react";
import ReactGA from "react-ga";

const Analytics = () => {
  useEffect(() => {
    ReactGA.initialize('G-H71N4W0SWF');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
}

export default Analytics;