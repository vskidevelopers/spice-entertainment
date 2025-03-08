
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
    DialogTrigger,
} from "@/components/ui/dialog";
function AdminEvents() {

    const eventExample = [1, 2, 3, 4, 5, 6, 7]
    return (
        <div>
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                {/* Left Main Div */}
                <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                        <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
                            <Dialog>
                                <CardHeader className="pb-3">
                                    <CardTitle>Spice Events</CardTitle>
                                    <CardDescription className="max-w-lg text-balance leading-relaxed">
                                        Experience the Rhythm of Innovation with Our Music Dashboard
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <DialogTrigger asChild>
                                        <Button>Add new Event</Button>
                                    </DialogTrigger>
                                </CardFooter>
                                <DialogContent>
                                    {/* new event form space */}

                                </DialogContent>
                            </Dialog>
                        </Card>

                        <Dialog>
                            <Card x-chunk="dashboard-05-chunk-1" className="col-span-2">
                                <CardHeader className="pb-2">
                                    <CardDescription> 🗓️ All Events</CardDescription>
                                    <CardTitle className="text-4xl">11 </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-xs text-muted-foreground">
                                        🐐 goat events
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <DialogTrigger asChild>
                                        <Button>View All Events</Button>
                                    </DialogTrigger>
                                </CardFooter>
                                <DialogContent>
                                    <DialogHeader>

                                    </DialogHeader>
                                    {/* Add Track Form will be used here */}
                                    {/* sum Form space */}
                                </DialogContent>
                            </Card>
                        </Dialog>


                    </div>

                    {/* Table DIV */}
                    <div className="w-full h-full">
                        {/* sum table space */}
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

                {/* Events DIV */}
                <div className="w-full h-full bg-green-700 p-6">
                    <div className="grid w-full grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {eventExample?.map((i) => (
                            <Card className="w-full" key={i}>
                                <Dialog>
                                    <CardHeader className="pb-3">
                                        {/* Image at the top of the card */}
                                        <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg">
                                            <img
                                                src="https://via.placeholder.com/150"
                                                alt="Event"
                                                className="object-cover rounded-lg"
                                            />
                                        </div>

                                        <CardTitle className="mt-4">Event Conference 2019</CardTitle>

                                        <CardDescription className="max-w-lg text-balance leading-relaxed mt-2">
                                            Sunday, 12 April | 10:00 AM
                                        </CardDescription>

                                        <p className="text-gray-500 text-sm mt-1">Ahmedabad, India</p>
                                    </CardHeader>

                                    <CardFooter className="flex justify-between items-center mt-4">
                                        {/* Event action icons */}
                                        <div className="flex space-x-4">
                                            <Button variant="icon">
                                                <i className="icon-play"></i>
                                            </Button>
                                            <Button variant="icon">
                                                <i className="icon-users"></i>
                                            </Button>
                                            <Button variant="icon">
                                                <i className="icon-bar-chart"></i>
                                            </Button>
                                        </div>

                                        <DialogTrigger asChild>
                                            <Button>Edit Event</Button>
                                        </DialogTrigger>
                                    </CardFooter>

                                    <DialogContent>
                                        {/* new event form space */}
                                    </DialogContent>
                                </Dialog>
                            </Card>
                        ))}
                    </div>
                </div>

            </main>
        </div>
    )
}

export default AdminEvents