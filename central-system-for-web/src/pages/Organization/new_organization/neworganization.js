import { useRef } from "react";
import { UseCreateOrganization } from "../../../hooks/api/index";
import { usePages } from "../../../hooks/usePages/Usepages";
export const Createorganization = () => {
  const { gotoOrganizationpage} = usePages();
  const nameref = useRef();
  const legalentityref = useRef();
  const { loading, createorganization } = UseCreateOrganization();
  const handlecreate = () => {
    const body = {
      name: nameref.current.value,
      legalentity: legalentityref.current.value,
    };
    createorganization(body).then((response) => gotoOrganizationpage(response._id));
  };
  return (
    <div className="xs100 just_center">
      <div className="flex_dir_col centrado ali_center">
        <h1 className="font mt20 mb20">New Organization</h1>
        <div className="xs70 flex_dir_col ali_center">
          <input
            className="xs50 mb20"
            type="text"
            placeholder="Name"
            ref={nameref}
          ></input>
          <input
            className="xs50 mb20"
            type="text"
            placeholder="Legalentity"
            ref={legalentityref}
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
