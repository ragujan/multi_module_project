import React from "react";

function Table(props) {
  // console.log("props are",props.json)
  const { setPrevName, setUpdateState, onSortChange, json } = props;

  const handleSortClick = (sort) => {
    onSortChange(sort);
  };
  const handleUpdateState = (id, name) => {
    setPrevName(name);
    setUpdateState({
      status: true,
      id: id,
      name: name,
    });
  };
  const DisplayData = json.map((info) => {
    return (
      <tr
        className="border-b dark:border-neutral-500"
        key={info.common_institute_division_id}
      >
        <td className="px-6 py-4 font-medium whitespace-nowrap">
          {info.common_institute_division_id}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">{info.division_name}</td>
        <td className="px-6 py-4 whitespace-nowrap">
          {info.created_at.slice(0, 19)}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">{info.created_by}</td>
        <td className="px-6 py-4 whitespace-nowrap">{info.updated_at.slice(0, 19)}</td>
        <td className="px-6 py-4 whitespace-nowrap">{info.updated_by}</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <button
            onClick={() => {
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
              handleUpdateState(
                info.common_institute_division_id,
                info.division_name
              );
            }}
            className="px-2 pb-1 rounded-md bg-secondary-blue dark:bg-secondary-lightMode"
          >
            Update
          </button>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <table className="min-w-full text-sm font-light text-left ">
        <thead className="font-medium border-b dark:border-neutral-500">
          <tr>
            <th
              onClick={() => {
                handleSortClick("common_institute_division_id");
              }}
              className="px-6 py-4 cursor-pointer"
            >
              Id
            </th>
            <th
              onClick={() => {
                handleSortClick("division_name");
              }}
              className="px-6 py-4 cursor-pointer"
            >
              Division Name
            </th>
            <th
              onClick={() => {
                handleSortClick("created_at");
              }}
              className="px-6 py-4 cursor-pointer"
            >
              created_at
            </th>
            <th
              onClick={() => {
                handleSortClick("created_by");
              }}
              className="px-6 py-4 cursor-pointer"
            >
              created_by
            </th>
            <th
              onClick={() => {
                handleSortClick("upated_at");
              }}
              className="px-6 py-4 cursor-pointer"
            >
              updated_at
            </th>

            <th
              onClick={() => {
                handleSortClick("updated_by");
              }}
              className="px-6 py-4 cursor-pointer"
            >
              updated_by
            </th>
            <th className="px-6 py-4">Action</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default Table;
