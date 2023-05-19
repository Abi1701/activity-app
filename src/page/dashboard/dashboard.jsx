import React from "react";
import styled from "./dashboard.module.scss";
import Hair from "../../assets/body/hair.png";
import Head from "../../assets/body/head.png";
import BodyWhite from "../../assets/body/body.png";
import HandRight from "../../assets/body/handright.png";
import HandLeft from "../../assets/body/handleft.png";
import ArmsLeft from "../../assets/body/armsright.png";
import ArmsRight from "../../assets/body/armsleft.png";
import Pants from "../../assets/body/pants.png";
import Leg from "../../assets/body/leg1.png";
import Leg2 from "../../assets/body/leg2.png";
import Shoes from "../../assets/body/shoes1.png";
import Shoes2 from "../../assets/body/shoes2.png";
import Plus from "../../assets/plus.png";
import Border from "../../assets/border.png";
import Leaf1 from "../../assets/leaf1.png";
import Leaf2 from "../../assets/leaf2.png";
import { Link } from "react-router-dom";

export default function DashboardPage() {
	return (
		<div className={styled.dashboardPage}>
			<div className={styled.dashboardContainer}>
				<div className={styled.activityBar}>
					<h1 className={styled.activityTittle}>Activity</h1>
					<a className={styled.activityPlus} href="/">
						<img className={styled.plusImg} src={Plus} alt="plus" />
						<p className={styled.plusTittle}>Tambah</p>
					</a>
				</div>
				<div className={styled.personContent}>
					<img className={styled.head} src={Head} alt="head" />
					<img className={styled.hair} src={Hair} alt="hair" />
					<img className={styled.leg} src={Leg} alt="Leg" />
					<img className={styled.leg2} src={Leg2} alt="Leg2" />
					<img className={styled.shoes} src={Shoes} alt="Shoes" />
					<img className={styled.shoes2} src={Shoes2} alt="Shoes2" />
					<img className={styled.pants} src={Pants} alt="Pants" />
					<img className={styled.body} src={BodyWhite} alt="body" />
					<img className={styled.handRight} src={HandRight} alt="HR" />
					<img className={styled.armsRight} src={ArmsRight} alt="AR" />
					<img className={styled.handLeft} src={HandLeft} alt="HL" />
					<img className={styled.armsLeft} src={ArmsLeft} alt="AL" />
					<img className={styled.border} src={Border} alt="border" />
					<img className={styled.leaf2} src={Leaf2} alt="leaf2" />
					<img className={styled.leaf1} src={Leaf1} alt="leaf1" />
				</div>
				<div className={styled.activityContainer}>
					<div className={styled.boxActivity}>
						<div className={styled.plusActivity}>
							<Link to="/activity">
								<img src={Plus} alt="plus" />
							</Link>
						</div>
					</div>
					<h1>Buat Aktifitas Pertama Mu</h1>
				</div>
			</div>
		</div>
	);
}
