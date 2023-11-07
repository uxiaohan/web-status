import { useMemo } from "react";
import Link from "./link";
import Header from "./header";
import UptimeRobot from "./uptimerobot";
import Package from "../../package.json";

function App() {
  const apikeys = useMemo(() => {
    const { ApiKeys } = window.Config;
    if (Array.isArray(ApiKeys)) return ApiKeys;
    if (typeof ApiKeys === "string") return [ApiKeys];
    return [];
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div id="uptime">
          {apikeys.map(key => (
            <UptimeRobot key={key} apikey={key} />
          ))}
        </div>
        <div id="footer">
          <p>
            <span>
              &copy; 2023 <Link to="https://beian.miit.gov.cn/" text="浙ICP备2022035705号-2" />
            </span>
            <span>
              基于 <Link to="https://www.vvhan.com/" text="WWW.VVHAN.COM" />
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
