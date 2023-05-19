import React from "react";
import styled from "./itemList.module.scss";
import {
	ArrowBackIos,
	Circle,
	Close,
	Create,
	Delete,
	ImportExport,
	Sort,
} from "@mui/icons-material";
import Plus from "../../assets/plus.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import Modal from "react-modal";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		width: "800px",
		height: "500px",
		display: "flex",
		flexDirection: "column",
	},
};
export default function ItemList() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	let subtitle;
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		subtitle.style.color = "#00000";
	}

	function closeModal() {
		setIsOpen(false);
	}
	return (
		<div className={styled.itemList}>
			<div className={styled.itemListContainer}>
				<div className={styled.activityBar}>
					<h1 className={styled.activityTittle}>
						<a href="/">
							<ArrowBackIos />
						</a>
						Daftar Belanja Bulanan
						<a href="/">
							<Create />
						</a>
					</h1>
					<div className={styled.buttonSort}>
						<Button
							id="fade-button"
							aria-controls={open ? "fade-menu" : undefined}
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}
							onClick={handleClick}>
							<ImportExport />
						</Button>
						<Menu
							id="fade-menu"
							MenuListProps={{
								"aria-labelledby": "fade-button",
							}}
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							TransitionComponent={Fade}>
							<MenuItem onClick={handleClose}>
								<Sort />
								Terbaru
							</MenuItem>
							<MenuItem onClick={handleClose}>
								<Sort />
								Terlama
							</MenuItem>
							<MenuItem onClick={handleClose}>
								<ImportExport />A - Z
							</MenuItem>
							<MenuItem onClick={handleClose}>
								<ImportExport />Z - A
							</MenuItem>
							<MenuItem onClick={handleClose}>
								<ImportExport />
								Belum Selesai
							</MenuItem>
						</Menu>
						<button
							onClick={openModal}
							className={styled.activityPlus}
							href="/">
							<img className={styled.plusImg} src={Plus} alt="plus" />
							<p className={styled.plusTittle}>Tambah</p>
							<Modal
								isOpen={modalIsOpen}
								onAfterOpen={afterOpenModal}
								onRequestClose={closeModal}
								style={customStyles}
								contentLabel="Example Modal">
								<div className={styled.modalTittle}>
									<h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
									<button onClick={closeModal} className={styled.closeModal}>
										<Close />
									</button>
								</div>
								<form className={styled.formModal}>
									<div className={styled.modalListItem}>
										Nama List Item
										<input
											placeholder="Tambahkan Nama List Item"
											className={styled.modalInput}
											type="text"
										/>
									</div>
									<div>
										<div>Priority:</div>
										<select
											className={styled.modalSelect}
											placeholder="Priority"
											name="Priority"
											id="">
											<option className={styled.modalOption} value="">
												<h1>
													<Circle sx={{ color: "red" }} />
													Very High
												</h1>
											</option>
											<option className={styled.modalOption} value="">
												<h1>
													<Circle sx={{ color: "red" }} />
													High
												</h1>
											</option>
											<option className={styled.modalOption} value="">
												<h1>
													<Circle sx={{ color: "red" }} />
													Medium
												</h1>
											</option>
											<option className={styled.modalOption} value="">
												<h1>
													<Circle sx={{ color: "red" }} />
													Low
												</h1>
											</option>
											<option className={styled.modalOption} value="">
												<h1>
													<Circle sx={{ color: "red" }} />
													Very Low
												</h1>
											</option>
										</select>
									</div>
								</form>
								<button className={styled.buttonSubmit}>Simpan</button>
							</Modal>
						</button>
					</div>
				</div>
				<div className={styled.itemListContent}>
					<div className={styled.itemListBox}>
						<input type="checkbox" name="" id="" />
						<Circle style={{ fontSize: 16, color: "red" }} />
						<div>
							<p className={styled.itemTittle}>Telur</p>
						</div>
						<Create style={{ fontSize: 16 }} />
						<Delete sx={{ ml: 22 }} />
					</div>
					<div className={styled.itemListBox}>
						<input type="checkbox" name="" id="" />
						<Circle style={{ fontSize: 16, color: "red" }} />
						<div className={styled.itemTittle}>
							<p className={styled.itemTittle}>Beras 5 Kg</p>
						</div>
						<Create style={{ fontSize: 16 }} />
						<Delete sx={{ ml: 22 }} />
					</div>
					<div className={styled.itemListBox}>
						<input type="checkbox" name="" id="" />
						<Circle style={{ fontSize: 16, color: "#FFCE31" }} />
						<div className={styled.itemTittle}>
							<p className={styled.itemTittle}>Daging</p>
						</div>
						<Create style={{ fontSize: 16 }} />
						<Delete sx={{ ml: 22 }} />
					</div>
					<div className={styled.itemListBox}>
						<input type="checkbox" name="" id="" />
						<Circle style={{ fontSize: 16, color: "#00A790" }} />
						<div className={styled.itemTittle}>
							<p className={styled.itemTittle}>Penyedap Rasa</p>
						</div>
						<Create style={{ fontSize: 16 }} />
						<Delete sx={{ ml: 22 }} />
					</div>
					<div className={styled.itemListBox}>
						<input type="checkbox" name="" id="" />
						<Circle style={{ fontSize: 16, color: "#00A790" }} />
						<div className={styled.itemTittle}>
							<p className={styled.itemTittle}>Minyak Goreng</p>
						</div>
						<Create style={{ fontSize: 16 }} />
						<Delete sx={{ ml: 22 }} />
					</div>
					<div className={styled.itemListBox}>
						<input type="checkbox" name="" id="" />
						<Circle style={{ fontSize: 16, color: "#B01AFF" }} />
						<div className={styled.itemTittle}>
							<p className={styled.itemTittle}>Sosis</p>
						</div>
						<Create style={{ fontSize: 16 }} />
						<Delete sx={{ ml: 22 }} />
					</div>
				</div>
			</div>
		</div>
	);
}
