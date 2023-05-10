import React, { useState, useEffect } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Stack, Pagination, Paper } from "@mui/material";

interface JobData {
  salary_min: number;

  location: {
    area: string[];
    display_name: string;
  };

  description: string;

  created: string;

  redirect_url: string;
  title: string;
  category: {
    label: string;
  };
  id: string;
  salary_max: number;
  company: {
    display_name: string;
  };
  contract_type: string;
}

const TableData = (props: {
  input: string;
  updatedLabel: string;
  secondUpdatedLabel: string;
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [JobPerPage] = useState<number>(20);
  const [data, setData] = useState<JobData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
const rapidApi= process.env.REACT_APP_RAPID_API_KEY

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://api.adzuna.com/v1/api/jobs/${
        props.updatedLabel || "us"
      }/search/1?app_id=07f707fd&app_key=${rapidApi}&results_per_page=300&what_phrase=${
        props.input
      }&content-type=application/json`
    );
    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      const data = await response.json().catch((e) => {
        console.log(e.message);
      });
      setIsLoading(false);
      setData(data.results);
    }
  };

  useEffect(() => {
    fetchData();
  }, [props.input, props.updatedLabel]);

  const indexOfLastJob = currentPage * JobPerPage;
  const indexOfFirstJob = indexOfLastJob - JobPerPage;
  const currentJob = data.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (event: any, value: any) => {
    setCurrentPage(value);

    window.scrollTo({ top: 760, behavior: "smooth" });
  };

  return (
    <>
      {isLoading ? (
        <div className="loader" />
      ) : (
        <TableContainer
          component={Paper}
          sx={{
            maxWidth: { md: "800px", sm: "600px", xs: "400px" },
            marginTop: "150px",
            backgroundColor: "#005a6a",
            padding: "0 30px",
          }}
        >
          <Table
            stickyHeader
            aria-label="sticky table"
            sx={{
              Width: { md: "350px", sm: "350px", xs: "350px" },
              "& td,th": { border: 0 },
            }}
          >
            <TableHead
              sx={{ "& th": { borderTop: "5px solid #007788 !important" } }}
            >
              <TableRow>
                <TableCell
                  align="left"
                  sx={{
                    backgroundColor: "#002228",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: { md: "1rem", sm: "1rem", xs: "0.65rem" },
                  }}
                >
                  {" "}
                  Role
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: "#002228",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: { md: "1rem", sm: "1rem", xs: "0.65rem" },
                  }}
                >
                  Team
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    backgroundColor: "#002228",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: { md: "1rem", sm: "1rem", xs: "0.65rem" },
                  }}
                >
                  Location
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {currentJob.map((row: any, idx: number) => (
                <TableRow
                  key={idx}
                  sx={{
                    "&:nth-of-type(even)": {
                      backgroundColor: "#008199",
                    },
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      color: "white",
                      fontSize: { md: "1rem", sm: "1rem", xs: "0.65rem" },
                      fontWeight: "bold",
                      cursor: "pointer",
                      "&:hover": {
                        color: "#151e3d",

                        textDecoration: "underline",
                      },
                    }}
                    onClick={() => {
                      window.location.replace(`${row.redirect_url}`);
                    }}
                  >
                    {row.title}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "white",
                      fontSize: { md: "1rem", sm: "1rem", xs: "0.65rem" },
                      fontWeight: "bold",
                      cursor: "pointer",
                      "&:hover": {
                        color: "#151e3d",

                        textDecoration: "underline",
                      },
                    }}
                    onClick={() => {
                      window.location.replace(`${row.redirect_url}`);
                    }}
                  >
                    {row.category.label}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "white",
                      fontSize: { md: "1rem", sm: "1rem", xs: "0.65rem" },
                      fontWeight: "bold",
                      cursor: "pointer",
                      "&:hover": {
                        color: "#151e3d",

                        textDecoration: "underline",
                      },
                    }}
                    onClick={() => {
                      window.location.replace(`${row.redirect_url}`);
                    }}
                  >
                    {row.location.area[0]}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Stack
        sx={{ mt: { lg: "10px", xs: "20px" }, mb: "50px" }}
        alignItems="center"
      >
        {data.length > 20 && (
          <Pagination
            sx={{
              ".MuiPaginationItem-root": {
                color: "white",
                fontSize: "1.1em",
              },
              ".MuiPaginationItem-root.Mui-selected": {
                backgroundColor: "#94a3b8",
              },
            }}
            defaultPage={1}
            count={Math.ceil(data.length / JobPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </>
  );
};

export default TableData;
