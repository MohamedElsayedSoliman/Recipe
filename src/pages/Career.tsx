import React, { useState } from "react";

import { Box, Stack, Typography } from "@mui/material";
import SelectGroup from "../components/SelectGroup";
import TableData from "../components/TableData";
import SelectContract from "../components/SelectContract";

const data = [
  {
    id: 499,
    name: "Europe",
    typeOfContract: [
      { name: "Full Time", label: 1, id: 50 },
      { name: "Part Time", label: 1, id: 60 },
      { name: "Contract", label: 1, id: 70 },
      { name: "Permanent", label: 1, id: 80 },
    ],
    state: [
      { name: "France", label: "fr", id: 90 },
      { name: "United kindom", label: "gb", id: 100 },
      { name: "Germany", label: "de", id: 110 },
      { name: "Italy", label: "it", id: 120 },
      { name: "Netherland", label: "nl", id: 130 },
      { name: "Poland", label: "pl", id: 140 },
      { name: "Russia", label: "ru", id: 150 },
      { name: "Austria", label: "at", id: 160 },
    ],
  },
  {
    id: 500,
    name: "North America",
    typeOfContract: [
      { name: "Full Time", label: 1, id: 170 },
      { name: "Part Time", label: 1, id: 180 },
      { name: "Contract", label: 1, id: 190 },
      { name: "Permanent", label: 1, id: 200 },
    ],
    state: [
      { name: "USA", label: "us", id: 9 },
      { name: "Canada", label: "ca", id: 10 },
    ],
  },
  {
    id: 501,
    name: "South America",
    typeOfContract: [
      { name: "Full Time", label: 1, id: 210 },
      { name: "Part Time", label: 1, id: 220 },
      { name: "Contract", label: 1, id: 230 },
      { name: "Permanent", label: 1, id: 240 },
    ],
    state: [{ name: "Brazil", label: "br", id: 11 }],
  },
  {
    id: 502,
    name: "Asia",
    typeOfContract: [
      { name: "Full Time", label: 1, id: 250 },
      { name: "Part Time", label: 1, id: 260 },
      { name: "Contract", label: 1, id: 270 },
      { name: "Permanent", label: 1, id: 280 },
    ],
    state: [
      { name: "India", label: "in", id: 12 },
      { name: "Singapore", label: "sg", id: 13 },
    ],
  },
  {
    id: 503,
    name: "Oceania",
    typeOfContract: [
      { name: "Full Time", label: 1, id: 290 },
      { name: "Part Time", label: 1, id: 300 },
      { name: "Contract", label: 1, id: 310 },
      { name: "Permanent", label: 1, id: 320 },
    ],
    state: [
      { name: "Australia", label: "au", id: 14 },
      { name: "New Zealand", label: "nz", id: 15 },
    ],
  },
];
const Career: React.FC = () => {
  const [selected, setSelected] = useState<string[] | any>([]);
  const [select, setSelect] = useState<string[] | any>([]);

  const [input, setInput] = useState("");

  let result: any = data.map(({ state }) => state);

  let updatedResult = result.flat(2);
  let res: any = data.map(({ typeOfContract }) => typeOfContract);

  let updatedRes = res.flat(2);

  const country = updatedResult.map((item: any) => item.name);

  const findLabel = updatedResult.filter((item: any) =>
    selected.includes(item.name)
  );
  const updatedLabel = findLabel.slice(-1).map((item: any) => item.label);

  const typeOfContract = updatedRes.map((item: any) => item.name);
  const labelOfContract = updatedRes.filter((item: any) =>
    select.includes(item.name)
  );
  const secondUpdatedLabel = labelOfContract
    .slice(-1)
    .map((item: any) => item.label);

  const handleEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#002228",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        mt="50px"
      >
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "0.65rem", sm: "1.5rem", md: "2rem" },
            fontWeight: "bold",
          }}
        >
          {" "}
          Expand economic access across the globe
        </Typography>
      </Stack>

      <input
        type="text"
        placeholder="Search for role"
        value={input}
        onChange={handleEvent}
        className="input-Bar"
      />
      <span className="search"></span>

      <Stack
        direction={{ md: "row", sm: "column" }}
        gap={{ md: "200px", sm: "50px" }}
        mt="170px"
      >
        <SelectGroup
          selected={selected}
          setSelected={setSelected}
          country={country}
          data={data}
        />

        <SelectContract
          select={select}
          setSelect={setSelect}
          typeOfContract={typeOfContract}
          data={data}
        />
      </Stack>

      <Stack mt="100px">
        <Typography
          color="white"
          fontSize={{ xs: "0.65rem", sm: "1.2rem" }}
          fontWeight="bold"
        >
          Showing roles across all locations and all teams.
        </Typography>
      </Stack>
      <TableData
        input={input.toString()}
        updatedLabel={updatedLabel.toString()}
        secondUpdatedLabel={secondUpdatedLabel.toString()}
      />
    </Box>
  );
};

export default Career;
