
import { TableCell, TableRow } from "./table";

const SkeletonTableRow = () => {
  return (
      <TableRow>
        <TableCell className="font-bold">  <div className="skeleton skeleton-text" /></TableCell>
        <TableCell>
          <div className="skeleton skeleton-image" />
        </TableCell>
        <TableCell>
          <div className="skeleton skeleton-text" />
        </TableCell>
      </TableRow>
  );
}

const SkeletonTile = () => {
  return (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
  {/* Skeleton for image and badge */}
  <div className="relative justify-center items-center flex pt-4">
      {/* Skeleton image */}
    <div className="skeleton h-40 w-40 rounded-md m-4"></div>
      {/* Skeleton badge */}
    <div className="absolute top-2 left-2 skeleton h-6 w-12 rounded-full"></div>
  </div>
  
  <div className="px-4 pb-4">
      {/* Skeleton title */}
    <div className="skeleton h-6 w-32 mb-2"></div>
    
    <div className="flex justify-between items-center">
        {/*  Skeleton icons */}
      <div className="flex items-center space-x-2">
        <div className="skeleton h-5 w-5 rounded-full"></div>
        <div className="skeleton h-5 w-5 rounded-full"></div>
        <div className="skeleton h-5 w-5 rounded-full"></div>
      </div>
        {/* Skeleton button */}
      <div className="skeleton h-10 w-28 rounded-full"></div>
    </div>
  </div>
</div>);

}

export { SkeletonTableRow, SkeletonTile }
