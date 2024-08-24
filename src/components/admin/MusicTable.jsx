import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function MusicTable() {
  const tracks = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent tracks.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">#</TableHead>
            <TableHead className="w-[100px]">Track</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Album</TableHead>
            <TableHead className="text-right">Release Date</TableHead>
            <TableHead className="text-right">Artist</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tracks?.map((track, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">1</TableCell>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Aktivate</TableCell>
              <TableCell>Top Boy</TableCell>
              <TableCell className="text-right">01/01/2019</TableCell>
              <TableCell className="text-right">Kalman</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default MusicTable;
