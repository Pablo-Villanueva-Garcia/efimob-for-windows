import { useEffect, useState } from "react";
import { UseChargetpoint, UseEditChargetpoint } from "../../../hooks/api/index";
import { usePages } from "../../../hooks/usePages/Usepages";
import { useParams } from "react-router-dom";

export const Editchargetpoint = () => {
  const { id } = useParams();
  const chargetpoint = UseChargetpoint(id);
  const { gotolistcharget } = usePages();
  const [identify, setidentify] = useState();
  useEffect(() => {
    if (chargetpoint) {
      setidentify(chargetpoint.identify);
    }
  }, [chargetpoint]);

  const { loading, editchargetpoint } = UseEditChargetpoint(id);

  const handle_edit = () => {
    const body = {
      identify,
    };
    editchargetpoint(body).then((response) => gotolistcharget(response.id));
  };
  return (
    <div className="xs100 just_center">
      <div className="flex_dir_col centrado ali_center">
        <h1 className="font mt20 mb20">Edit Chargetpoint</h1>
        <div className="xs70 flex_dir_col ali_center">
          <input
            className="xs50 mb20"
            type="text"
            placeholder="editar receta"
            onChange={(e) => setidentify(e.target.value)}
            value={identify}
          ></input>
          <button
            className="font xs30"
            onClick={handle_edit}
            disabled={loading}
          >
            {loading ? "Loading" : "Editar"}
          </button>
        </div>
      </div>
    </div>
  );
};
