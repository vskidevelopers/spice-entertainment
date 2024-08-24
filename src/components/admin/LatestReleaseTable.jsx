import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";

export default function LatestReleaseTable() {
  const tracks = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Table>
      <TableCaption>A list of your recent Tracks.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Track</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Latest Release</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tracks?.map((track, i) => (
          <TableRow key={i}>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Aktivate</TableCell>
            <TableCell>false</TableCell>

            <TableCell className="text-right">
              <Button>Mark as Latest Release</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
