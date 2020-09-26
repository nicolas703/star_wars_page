import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<button className="fas fa-trash-alt trash nose" onClick={item => actions.borrarFavs(item)} />

			{!!store.favs &&
				store.favs.map(item => {
					return (
						<div className="favs" key="i">
							<h5 key="i">{item}</h5>
							<br />
						</div>
					);
				})}
			<br />
			<Link to="/">
				<button className="btn btn-primary nose">Back home</button>
			</Link>
		</div>
	);
};
