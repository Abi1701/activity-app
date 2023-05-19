import React from "react";
import styled from "./newItem.module.scss";
import Plus from "../../assets/plus.png";
import { Delete } from "@mui/icons-material";

export default function NewActivityPage() {
	return (
		<div className={styled.activityPage}>
			<div className={styled.activityContainer}>
				<div className={styled.activityBar}>
					<h1 className={styled.activityTittle}>Activity</h1>
					<a className={styled.activityPlus} href="/">
						<img className={styled.plusImg} src={Plus} alt="plus" />
						<p className={styled.plusTittle}>Tambah</p>
					</a>
				</div>
				<div className={styled.cardContainer}>
					<a href="/emptylist">
						<div className={styled.activityCard}>
							<h1 className={styled.activityTittle}>New Activity</h1>
							<p className={styled.dateTittle}>
								19 May 2023 <Delete />
							</p>
						</div>
					</a>
					<div className={styled.activityCard}>
						<h1 className={styled.activityTittle}>Daftar Belanja Bulanan</h1>
						<p className={styled.dateTittle}>
							19 May 2023 <Delete />
						</p>
					</div>
					<div className={styled.activityCard}>
						<h1 className={styled.activityTittle}>Mengerjakan Papper Works</h1>
						<p className={styled.dateTittle}>
							19 May 2023 <Delete />
						</p>
					</div>
					<div className={styled.activityCard}>
						<h1 className={styled.activityTittle}>Bertemu Dokter</h1>
						<p className={styled.dateTittle}>
							19 May 2023 <Delete />
						</p>
					</div>
					<div className={styled.activityCard}>
						<h1 className={styled.activityTittle}>Meeting dengan Client</h1>
						<p className={styled.dateTittle}>
							19 May 2023 <Delete />
						</p>
					</div>
					<div className={styled.activityCard}>
						<h1 className={styled.activityTittle}>
							Fixing Issues on Gallery App
						</h1>
						<p className={styled.dateTittle}>
							19 May 2023 <Delete />
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
