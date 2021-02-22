import { useParams, Link } from "react-router-dom";
import {
  UseChargetpoint,
  UseDeleteChargetpoint,
} from "../../../hooks/api/index";
import { usePages } from "../../../hooks/usePages/Usepages";
import { editchargetpointof, organizationList } from "../../../constants/urls";

export const Onechargetpoint = () => {
  const { id } = useParams();
  const chargetpoint = UseChargetpoint(id);
  const { gotolistcharget } = usePages();
  const DeleteChargetpoint = UseDeleteChargetpoint(id);

  const handledelete = (id) => {
    DeleteChargetpoint(id).then((response) => gotolistcharget());
  };
  return (
    <div className="xs100 just_center">
      <div className="flex_dir_col centrado mt20">
        <div className="flex ali_center mb20">
          <h1 className="pl20 size30 font">Identify:</h1>
          <p className="pl20 size20 font">{chargetpoint.identify}</p>
        </div>
        <div className="flex ali_center mb20">
          <p>
            <Link className="pl20 font xs20" to={organizationList}>
              Organization property
            </Link>
          </p>
        </div>

        <div>
          <button className="font xs20" onClick={handledelete}>
            Delete
          </button>
          <Link className="xs20" to={editchargetpointof(id)}>
            <button className="font xs20">Edit</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
