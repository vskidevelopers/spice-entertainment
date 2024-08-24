import AddAlbumForm from "@/components/admin/AddAlbumForm";
import AddTrackForm from "@/components/admin/AddTrackForm";
import LatestReleaseTable from "@/components/admin/LatestReleaseTable";
import MusicTable from "@/components/admin/MusicTable";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AdminMusic() {
  return (
    <div>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        {/* Left Main Div */}
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
              <Dialog>
                <CardHeader className="pb-3">
                  <CardTitle>Latest Release</CardTitle>
                  <CardDescription className="max-w-lg text-balance leading-relaxed">
                    Experience the Rhythm of Innovation with Our Music Dashboard
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <DialogTrigger asChild>
                    <Button>Add new Release</Button>
                  </DialogTrigger>
                </CardFooter>
                <DialogContent>
                  <LatestReleaseTable />
                </DialogContent>
              </Dialog>
            </Card>

            <Dialog>
              <Card x-chunk="dashboard-05-chunk-1">
                <CardHeader className="pb-2">
                  <CardDescription> 🎶 All Music</CardDescription>
                  <CardTitle className="text-4xl">123 </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    🐐 goat music
                  </div>
                </CardContent>
                <CardFooter>
                  <DialogTrigger asChild>
                    <Button>Add New Track</Button>
                  </DialogTrigger>
                </CardFooter>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-center py-9">
                      Add New Track Form
                    </DialogTitle>
                  </DialogHeader>
                  {/* Add Track Form will be used here */}
                  <AddTrackForm />
                </DialogContent>
              </Card>
            </Dialog>

            <Card x-chunk="dashboard-05-chunk-2">
              <Dialog>
                <CardHeader className="pb-2">
                  <CardDescription> 🎶 All Albums</CardDescription>
                  <CardTitle className="text-4xl">15</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    🐐 goat music
                  </div>
                </CardContent>

                <CardFooter>
                  <DialogTrigger asChild>
                    <Button>Add New Album</Button>
                  </DialogTrigger>
                </CardFooter>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className=" text-2xl text-center py-6">
                      Add New Album Form
                    </DialogTitle>
                  </DialogHeader>
                  {/* Add Track Form will be used here */}
                  <AddAlbumForm />
                </DialogContent>
              </Dialog>
            </Card>
          </div>

          {/* Table DIV */}
          <div className="w-full h-full">
            <MusicTable />
          </div>
        </div>

        {/* Roght full div */}

        <div className="w-full h-full">
          <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
            <CardHeader className="pb-3">
              <CardTitle>Latest Release</CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                Introducing Our Dynamic Orders Dashboard for Seamless Management
                and Insightful Analysis.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button>Add new Release</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
