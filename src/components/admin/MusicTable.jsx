/* eslint-disable react/prop-types */
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function MusicTable({ tracks, albums }) {
  console.log(`tracks : ${tracks} || albums : ${albums}`);

  return (
    <div>
      <Tabs defaultValue="tracks" className="w-full">
        <TabsList>
          <TabsTrigger value="tracks">Tracks</TabsTrigger>
          <TabsTrigger value="Albums">Albums</TabsTrigger>
        </TabsList>
        <TabsContent value="tracks">
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
                  <TableCell className="font-medium">{i + 1}</TableCell>
                  <TableCell className="font-medium">
                    <img
                      alt="track cover image"
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      src={
                        track?.image ||
                        "https://i.etsystatic.com/38971702/r/il/81a29f/4464418480/il_794xN.4464418480_c870.jpg"
                      }
                      width="64"
                    />
                  </TableCell>
                  <TableCell>{track?.trackName}</TableCell>
                  <TableCell>{track?.album}</TableCell>
                  <TableCell className="text-right">
                    {track?.releaseDate}
                  </TableCell>
                  <TableCell className="text-right">{track?.artists}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="Albums">
          <Table>
            <TableCaption>A list of your recent albums.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">#</TableHead>
                <TableHead className="w-[100px]">Album</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="text-right">Release Date</TableHead>
                <TableHead className="text-right">Artist</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {albums?.map((album, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">1</TableCell>
                  <TableCell className="font-medium">
                    <img
                      alt="album cover image"
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      src={
                        album?.image ||
                        "https://i.etsystatic.com/38971702/r/il/81a29f/4464418480/il_794xN.4464418480_c870.jpg"
                      }
                      width="64"
                    />
                  </TableCell>
                  <TableCell>{album?.albumName}</TableCell>
                  <TableCell className="text-right">
                    {album?.releaseDate}
                  </TableCell>
                  <TableCell className="text-right">{album?.artists}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default MusicTable;
