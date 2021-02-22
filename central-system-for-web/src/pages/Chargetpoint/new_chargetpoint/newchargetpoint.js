import { useRef } from "react";
import { UseCreateChargetpoint } from "../../../hooks/api/index";
import { usePages } from "../../../hooks/usePages/Usepages";
export const Createchargetpoint = () => {
  const { gotochargetpointpage } = usePages();
  const identifyref = useRef();
  const { loading, createchargetpoint } = UseCreateChargetpoint();
  const handlecreate = () => {
    const body = {
      identify: identifyref.current.value,
    };
    createchargetpoint(body).then((response) =>
      gotochargetpointpage(response._id)
    );
  };
  return (
    <div className="xs100 just_center">
      <div className="flex_dir_col centrado ali_center">
        <h1 className="font mt20 mb20">New Chargetpoint</h1>
        <div className="xs70 flex_dir_col ali_center">
          <input
            className="xs50 mb20"
            type="text"
            placeholder="Name"
            ref={identifyref}
          ></input>
          <button
            className="xs30 font"
            onClick={handlecreate}
            disabled={loading}
          >
            {loading ? "Loading" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
};
