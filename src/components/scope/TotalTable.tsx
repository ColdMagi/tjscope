import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import User from "components/User";
import type { Osnova } from "types/osnova";

function TotalTable({ likers }: { likers: Osnova.Likers.Likers }) {
  return (
    <TableContainer>
      <Table variant="simple" size={{ base: "sm", md: "md", lg: "lg" }}>
        <TableCaption>Статистика оценок по пользователям</TableCaption>
        <Thead>
          <Tr>
            <Th>Пользователь</Th>
            <Th isNumeric color="green.300">
              +
            </Th>
            <Th isNumeric color="red.300">
              -
            </Th>
            <Th isNumeric>Всего</Th>
          </Tr>
        </Thead>
        <Tbody>
          {[...Object.entries(likers)]
            .sort(([_, a], [_0, b]) => b.plus + b.minus - (a.plus + a.minus))
            .map(([id, { name, avatar_url, minus, plus }]) => (
              <Tr key={id}>
                <Td>
                  <User name={name} avatar_url={avatar_url} id={id} />
                </Td>
                <Td>{plus}</Td>
                <Td>{minus}</Td>
                <Td>{minus + plus}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default TotalTable;
