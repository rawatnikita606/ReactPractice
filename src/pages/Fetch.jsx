import React, { useState } from "react";

const Fetch = () => {
    const initialData = [
        { ID: "101", NAME: "NIKITA", AGE: 19, CITY: "DELHI" },
        { ID: "102", NAME: "ROHAN", AGE: 25, CITY: "MUMBAI" },
        { ID: "103", NAME: "PRIYA", AGE: 22, CITY: "BANGALORE" },
        { ID: "104", NAME: "ANIL", AGE: 30, CITY: "CHENNAI" }
        
    ];

    const [data, setData] = useState(initialData);
    const [ageFilter, setAgeFilter] = useState("");

    const handleFilter = () => {
        if (ageFilter) {
            const filteredData = initialData.filter(
                (item) => item.AGE && item.AGE.toString() === ageFilter
            );
            setData(filteredData);
        } else {
            setData(initialData);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Data Table</h1>
            <div style={{ marginBottom: "20px" }}>
                <input
                    type="number"
                    placeholder="Enter age"
                    value={ageFilter}
                    onChange={(e) => setAgeFilter(e.target.value)}
                    style={{ padding: "8px", width: "200px", marginRight: "10px" }}
                />
                <button onClick={handleFilter} style={{ padding: "8px 16px" }}>
                    Search
                </button>
            </div>
            <table
                style={{
                    margin: "0 auto",
                    borderCollapse: "collapse",
                    width: "50%",
                }}
            >
                <thead>
                    <tr>
                        <th style={tableHeaderStyle}>ID</th>
                        <th style={tableHeaderStyle}>Name</th>
                        <th style={tableHeaderStyle}>Age</th>
                        <th style={tableHeaderStyle}>City</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((item, index) => (
                            <tr key={index}>
                                <td style={tableCellStyle}>{item.ID || "Not Available"}</td>
                                <td style={tableCellStyle}>{item.NAME || "Not Available"}</td>
                                <td style={tableCellStyle}>{item.AGE || "Not Available"}</td>
                                <td style={tableCellStyle}>{item.CITY || "Not Available"}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" style={tableCellStyle}>
                                No Data Found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

const tableHeaderStyle = {
    border: "1px solid #000",
    padding: "10px",
    backgroundColor: "#f4f4f4",
    textAlign: "center",
};

const tableCellStyle = {
    border: "1px solid #000",
    padding: "8px",
    textAlign: "center",
};

export default Fetch;
