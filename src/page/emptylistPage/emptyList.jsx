import React from "react";
import styled from "./emptyList.module.scss";
import Plus from "../../assets/plus.png";
import Body from "../../assets/lady/body.png";
import Hair from "../../assets/lady/hair.png";
import Poni from "../../assets/lady/poni.png";
import Head from "../../assets/lady/head.png";
import LeftArms from "../../assets/lady/leftArms.png";
import RightArms from "../../assets/lady/rightArms.png";
import RightShoulder from "../../assets/lady/leftShoulder.png";
import LeftShoulder from "../../assets/lady/rightShoulder.png";
import Pants from "../../assets/lady/pants.png";
import Shoes1 from "../../assets/lady/shoes1.png";
import Shoes2 from "../../assets/lady/shoes2.png";
import Border from "../../assets/border.png";
import Leaf from "../../assets/leaf1.png";
import Leaf2 from "../../assets/leaf2.png";
import { ArrowBackIos, Circle, Create } from "@mui/icons-material";

export default function EmptyList() {
	return (
		<div className={styled.emptyList}>
			<div className={styled.emptyListContainer}>
				<div className={styled.activityBar}>
					<h1 className={styled.activityTittle}>
						<a href="/">
							<ArrowBackIos />
						</a>
						New Activity
						<a href="/">
							<Create />
						</a>
					</h1>
					<a className={styled.activityPlus} href="/itemlist">
						<img className={styled.plusImg} src={Plus} alt="plus" />
						<p className={styled.plusTittle}>Tambah</p>
					</a>
				</div>
				<div className={styled.personContent}>
					<img className={styled.hair} src={Hair} alt="hair" />
					<img className={styled.head} src={Head} alt="head" />
					<img className={styled.poni} src={Poni} alt="poni" />
					<img className={styled.body} src={Body} alt="body" />
					<img className={styled.leftArms} src={LeftArms} alt="LA" />
					<img className={styled.rightArms} src={RightArms} alt="RA" />
					<img className={styled.leftShoulder} src={LeftShoulder} alt="LS" />
					<img className={styled.rightShoulder} src={RightShoulder} alt="RS" />
					<img className={styled.body} src={Body} alt="body" />
					<img className={styled.pants} src={Pants} alt="pants" />
					<img className={styled.shoes1} src={Shoes1} alt="shoes1" />
					<img className={styled.shoes2} src={Shoes2} alt="shoes2" />
				</div>
				<div className={styled.illustrationContainer}>
					<a href="/itemlist">
						<div className={styled.boxIllustration}>
							<Circle sx={{ color: "#E6E6E6" }} />
							<div className={styled.barIllustration}></div>
						</div>
						<div className={styled.boxIllustration}>
							<Circle sx={{ color: "#E6E6E6" }} />
							<div className={styled.barIllustration}></div>
						</div>
						<div className={styled.boxIllustration}>
							<Circle sx={{ color: "#E6E6E6" }} />
							<div className={styled.barIllustration}></div>
						</div>
					</a>
					<h1>Buat List Item Kamu</h1>
				</div>
				<img className={styled.border} src={Border} alt="border" />
				<img src={Leaf} className={styled.leaf1} alt="leaf" />
				<img src={Leaf2} className={styled.leaf2} alt="leaf" />
			</div>
		</div>
	);
}
