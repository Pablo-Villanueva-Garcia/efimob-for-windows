import { useParams, Link } from "react-router-dom";
import {
  UseOrganization,
  UseDeleteOrganization,
} from "../../../hooks/api/index";
import { usePages } from "../../../hooks/usePages/Usepages";
import { editorganizationof } from "../../../constants/urls";

export const Oneorganization = () => {
  const { id } = useParams();
  const organization = UseOrganization(id);
  const { gotolist } = usePages();
  const Deleteorganization = UseDeleteOrganization(id);

  const handledelete = (id) => {
    Deleteorganization(id).then((response) => gotolist());
  };
  return (
    <div className="xs100 just_center">
      <div className="flex_dir_col centrado mt20">
        <div className="flex ali_center mb20">
          <h1 className="pl20 size20 font">Name:</h1>
          <p className="pl20 size20 font">{organization.name}</p>
        </div>
        <div className="flex ali_center font mb20">
          <h1 className="pl20 size20 font">Legalentity:</h1>
          <p className="pl20 size20">{organization.legalentity}</p>
        </div>
        <div>
          <button className="xs20 font" onClick={handledelete}>
            Delete
          </button>
          <Link className="xs20" to={editorganizationof(id)}>
            <button className="xs20 font">Edit</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
