import React, { useEffect, useState, useMemo } from "react";
import Table from "../Table";

function Tab1() {
  const [instituteName, setInsituteName] = useState("");
  const [jsonData, setJsonData] = useState([]);
  const [updateState, setUpdateState] = useState({
    status: false,
    id: "",
    name: "",
  });
  const [prevName,setPrevName] = useState("");
  const [sortState, setSortState] = useState({
    sort: "common_institute_division_id",
    ascending: false,
  });

  const sortedData = useMemo(() => {
    const field = sortState.sort;
    const ascending = sortState.ascending;

    return [...jsonData].sort((a, b) => {
      if (a[field] < b[field]) {
        return ascending ? -1 : 1;
      }
      if (a[field] > b[field]) {
        return ascending ? 1 : -1;
      }
      return 0;
    });
  }, [sortState, jsonData]);

 

  const handleSortChange = (sort) => {
    if (sortState.sort === sort) {
      setSortState((prevState) => {
        return {
          ...prevState,
          ascending: !prevState.ascending,
        };
      });
    } else {
      setSortState({
        sort: sort,
        ascending: true,
      });
    }
  };

  const add = async () => {
    let url = "http://localhost:8080/add_common_institute";

    if (instituteName === "" || instituteName === NaN) {
      return;
    }
    const formData = new FormData();
    formData.append("name", instituteName);
    await fetch(url, { method: "POST", body: formData })
      .then((res) => res.text())
      .then((text) => {
        console.log(text);
        if (text === "Success") {
          setInsituteName("");
          loadTable();
        }
      });
  };

  const update = async () => {
    let url = "http://localhost:8080/update_common_institute_table";

    const formData = new FormData();
    formData.append("name", updateState.name);
    formData.append("id", updateState.id);
    await fetch(url, { method: "POST", body: formData })
      .then((res) => res.text())
      .then((text) => {
        console.log(text);
      });

    setUpdateState({
      state: false,
      name: "",
      id: "",
    });
    setPrevName("")
    loadTable()
  };
  const loadTable = async () => {
    let url = "http://localhost:8080/view_common_institutes";

    await fetch(url, { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        setJsonData(json["rows"]);
      });
  };

  useEffect(() => {
    loadTable();
  }, []);

  useEffect(() => {
    console.log("sorted data ", sortedData);
  }, []);
  useEffect(() => {
    console.log(updateState);
  }, [updateState]);

  return (
    <div className="h-[100%] w-full flex flex-col ">
      {/* form */}
      <div className="grid grid-cols-5">
        <div className="flex flex-col gap-y-3">
          <span>Name</span>
          <div className="flex flex-row gap-x-4">
            {/* when updating state is on, a different input */}
            {updateState.status ? (
              <input
                type="text"
                placeholder="name"
                className="px-3 pb-0 font-bold text-black bg-gray-500"
                onChange={(event) => {
                  // if(event.target.value === )
                  setPrevName(event.target.value)
                  setUpdateState(() => ({
                    name: event.target.value,
                    id:updateState.id,
                    status:updateState.status
                  }));
                }}
                value={prevName}
              />
            ) : (
              <input
                type="text"
                placeholder="name"
                className="px-3 pb-0 text-black"
                onChange={(event) => {
                  setInsituteName(event.target.value);
                }}
                value={instituteName}
              />
            )}

            {updateState.status ? (
              <button
                onClick={() => update()}
                className="px-3 pb-1 rounded-lg bg-secondary-blue dark:bg-secondary-lightMode"
              >
                Update
              </button>
            ) : (
              <button
                onClick={() => add()}
                className="px-3 pb-1 rounded-lg bg-secondary-blue dark:bg-secondary-lightMode"
              >
                Add
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="py-3">
        <Table
          onSortChange={handleSortChange}
          json={sortedData}
          setUpdateState={setUpdateState}
          setPrevName={setPrevName}
        />
      </div>
    </div>
  );
}

export default Tab1;
