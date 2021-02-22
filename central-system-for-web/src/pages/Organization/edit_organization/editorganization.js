import { useEffect, useState } from "react";
import { UseOrganization, UseEditOrganization } from "../../../hooks/api/index";
import { usePages } from "../../../hooks/usePages/Usepages";
import { useParams } from "react-router-dom";

export const Editorganization = () => {
  const { id } = useParams();
  const organization = UseOrganization(id);
  const { gotoOrganizationpage } = usePages();
  const [name, setname] = useState();
  const [legalentity, setlegalentity] = useState();
  useEffect(() => {
    if (organization) {
      setname(organization.name);
      setlegalentity(organization.legalentity);
    }
  }, [organization]);

  const { loading, editorganization } = UseEditOrganization(id);

  const handle_edit = () => {
    const body = {
      name,
      legalentity,
    };
    editorganization(body).then((response) => {
      gotoOrganizationpage(response._id);
     
    });
  };
  return (
    <div className="xs100 just_center">
      <div className="flex_dir_col centrado ali_center">
        <h1 className="font mt20 mb20">Edit Organization</h1>
        <div className="xs70 flex_dir_col ali_center">
          <input
            className="xs50 mb20"
            type="text"
            placeholder="edit organization"
            onChange={(e) => setname(e.target.value)}
            value={name}
          ></input>
          <input
            className="xs50 mb20"
            type="text"
            placeholder="edit Legalentity"
            onChange={(e) => setlegalentity(e.target.value)}
            value={legalentity}
          ></input>
          <button
            className="font xs30"
            onClick={handle_edit}
            disabled={loading}
          >
            {loading ? "Loading" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
};
