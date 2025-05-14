import React,{Fragment,useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import Donut from '../Fasto/Home/Donut';
import { ThemeContext } from "../../../context/ThemeContext";
import {ProjectBlog, titleBlog} from '../Fasto/Home/IndexData';

//Images
import untital1 from './../../../assets/images/profile/Untitled-1.jpg';
import untital2 from './../../../assets/images/profile/Untitled-2.jpg';
import untital3 from './../../../assets/images/profile/Untitled-3.jpg';
import untital4 from './../../../assets/images/profile/Untitled-4.jpg';
import untital5 from './../../../assets/images/profile/Untitled-5.jpg';
import untital6 from './../../../assets/images/profile/Untitled-6.jpg';
import untital7 from './../../../assets/images/profile/Untitled-7.jpg';


const ChartTimeline = loadable(() =>
	pMinDelay(import("../Fasto/Home/ChartTimeline"), 1000)
);
const WidgetChart1 = loadable(() =>
	pMinDelay(import("../Fasto/Home/WidgetChart1"), 1000)
);
const RadialChart = loadable(() =>
	pMinDelay(import("../Fasto/Home/RadialChart"), 1000)
);
const WidgetChart2 = loadable(() =>
	pMinDelay(import("../Fasto/Home/WidgetChart2"), 1000)
);

const Index = () =>{
	const { changeBackground, background } = useContext(ThemeContext);
	useEffect(() => {
		changeBackground({ value: "light", label: "Light" });
	}, []);

	return(
		<Fragment>
			<div className="row">
				{titleBlog.map((item,index)=>(
					<div className="col-xl-3 col-xxl-3 col-lg-3 col-sm-3" key={index}>
						<div className="card card-bd">
							{item.border}
							<div className="card-body">
								<div className="media align-items-center">
									<div className="media-body me-3">
										<h2 className="num-text text-black font-w700">{item.title}</h2>
										<span className="fs-14">{item.subtitle}</span>
									</div>
									{item.icon}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>	
			<div className="row">
				<div className="col-xl-6 col-xxl-12">
					<div className="card">
						<div className="card-header d-block border-0 pb-0">
							<div className="d-flex justify-content-between pb-3">
								<h4 className="mb-0 text-black fs-20">Compliance Status</h4>
                                <Dropdown>
                                    <Dropdown.Toggle className="i-false" as={Link} to={"#"}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu-left" align="end">
                                        <Dropdown.Item>Edit</Dropdown.Item>
                                        <Dropdown.Item>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
							</div>
						
						</div>
						<div className="card-body pb-0 px-2 pt-2">
							<div id="chartTimeline" className="timeline-chart">
								<ChartTimeline />
							</div>
						</div>
					</div>		
				</div>
				<div className="col-xl-3 col-xxl-6 col-sm-6">
					<div className="card">	
						<div className="card-header border-0 pb-0">
							<h4 className="fs-20 mb-0 text-black">New Customers</h4>
                            <Dropdown>
                                <Dropdown.Toggle className="i-false" as={Link} to={"#"}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-left"  align="end">
                                    <Dropdown.Item>Edit</Dropdown.Item>
                                    <Dropdown.Item>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
						</div>
						<div className="card-body text-center pb-0 px-2 pt-2">
							<div className="dashboard-chart">
								<WidgetChart1 />
							</div>
						</div>
					</div>
				</div>		
				<div className="col-xl-3 col-xxl-6 col-sm-6">
					<div className="card">	
						<div className="card-header border-0 pb-0">
							<h4 className="fs-20 mb-0 text-black">Verification</h4>
							<Dropdown>
                                <Dropdown.Toggle className="i-false" as={Link} to={"#"}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu-left" >
                                    <Dropdown.Item>Edit</Dropdown.Item>
                                    <Dropdown.Item>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
						</div>
						<div className="card-body text-center pt-0">
							<div id="radialChart" className="monthly-project-chart">
								<RadialChart />
							</div>
							<span className="fs-14 text-black d-block op5"></span>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}
export default Index;	