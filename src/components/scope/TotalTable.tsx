import {
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  chakra,
} from "@chakra-ui/react";
import User from "components/User";
import type { Osnova } from "types/osnova";
import { useTable, useSortBy, Column } from "react-table";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { useMemo } from "react";

const columns: Column<Osnova.Likers.Liker>[] = [
  {
    Header: "Пользователь",
    accessor: (d) => d,
    Cell: ({
      value: { name, avatar_url, id },
    }: {
      value: Osnova.Likers.Liker;
    }) => <User name={name} avatar_url={avatar_url} id={id} />,
  },
  {
    Header: "+",
    accessor: "plus",
    isNumeric: true,
  },
  {
    Header: "-",
    accessor: "minus",
    isNumeric: true,
  },
  {
    Header: "Всего",
    accessor: "total",
    isNumeric: true,
  },
];

function TotalTable({ likers }: { likers: Osnova.Likers.Likers }) {
  const data = useMemo(() => [...Object.values(likers)], [likers]);
  // https://codesandbox.io/s/fxx0v?file=/src/App.js:968-998
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, row } =
    useTable({ columns, data }, useSortBy);

  return (
    <Table size="sm" {...getTableProps()}>
      <TableCaption>Статистика оценок по пользователям</TableCaption>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                isNumeric={column.isNumeric}
              >
                {column.render("Header")}
                <chakra.span pl="4">
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <TriangleDownIcon aria-label="sorted descending" />
                    ) : (
                      <TriangleUpIcon aria-label="sorted ascending" />
                    )
                  ) : null}
                </chakra.span>
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {row.map((row) => {
          prepareRow(row);
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                  {cell.render("Cell")}
                </Td>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}

export default TotalTable;
