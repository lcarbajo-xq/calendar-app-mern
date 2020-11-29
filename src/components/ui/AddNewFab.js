import React from "react";
import { useDispatch } from "react-redux";
import { eventClearActive } from "../../actions/events";
import { uiOpenModal } from "../../actions/ui";

export const AddNewFab = () => {
  const dispatch = useDispatch();

  const handleFabClick = () => {
    dispatch(eventClearActive());
    dispatch(uiOpenModal());
  };

  return (
    <button className="btn btn-primary fab" onClick={handleFabClick}>
      <i className="fas fa-plus"></i>
    </button>
  );
};
