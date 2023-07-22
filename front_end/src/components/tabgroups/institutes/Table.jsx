import React from "react";

function Table(props) {
    // console.log("props are",props.json)
  const DisplayData = props.json.map((info) => {
    return (
      <tr className="border-b dark:border-neutral-500" key={info.common_institute_division_id}>
        <td className="whitespace-nowrap px-6 py-4 font-medium">{info.common_institute_division_id}</td>
        <td className="whitespace-nowrap px-6 py-4">{info.division_name}</td>
        <td className="whitespace-nowrap px-6 py-4">{info.created_at}</td>
        <td className="whitespace-nowrap px-6 py-4">{info.created_by}</td>
      </tr>
    );
  });
  return (
    <div>
      <table className="min-w-full text-left text-sm font-light ">
        <thead className="border-b font-medium dark:border-neutral-500">
          <tr>
            <th className="px-6 py-4">Id</th>
            <th className="px-6 py-4">Division Name</th>
            <th className="px-6 py-4">created_at</th>
            <th className="px-6 py-4">created_by</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default Table;
