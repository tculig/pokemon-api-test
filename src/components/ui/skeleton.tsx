
import { TableCell, TableRow } from "./table";

interface Props {
  rows: number
}

const SkeletonLoader = ({ rows }: Props) => {
  return (
    Array.from({ length: rows }).map((_, index) => (
      <TableRow key={index}>
        <TableCell className="font-bold">  <div className="skeleton skeleton-text" /></TableCell>
        <TableCell>
          <div className="skeleton skeleton-image" />
        </TableCell>
        <TableCell>
          <div className="skeleton skeleton-text" />
        </TableCell>
      </TableRow>
    ))
  );
}

export { SkeletonLoader }
