import { Widgets } from "@mui/icons-material";
import { Table } from "@mui/material";
import Chart from "../../../Components/admin/components/chart/Chart";
import Featured from "../../../Components/admin/components/featured/Featured";
import Navbar from "../../../Components/admin/components/navbar/Navbar";
import Sidebar from "../../../Components/admin/components/sidebar/Sidebar";
import Widget from "../../../Components/admin/components/widget/Widget";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
