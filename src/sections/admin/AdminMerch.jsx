import AddMerchForm from "@/components/admin/forms/AddMerchForm";
import MerchTable from "@/components/admin/MerchTable";
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
import { useMerchFunctions } from "@/firebase/firebase";
import { useEffect, useState } from "react";

function AdminMerch() {
  const { getMerchRecordsByType } = useMerchFunctions();

  const [capsData, setCapsData] = useState(null);
  const [teesData, setTeesData] = useState(null);
  const [hoodiesData, setHoodiesData] = useState(null);

  const merchTypesArray = ["cap", "tee", "hoodie"];

  const fetchAvailableMerchs = async () => {
    const fetchPromises = merchTypesArray.map(async (merchType) => {
      const response = await getMerchRecordsByType(merchType);
      console.log(`available_${merchType}_response >> `, response);

      // Update the respective state based on the merchType
      if (merchType === "cap") {
        setCapsData(response?.data);
      } else if (merchType === "tee") {
        setTeesData(response?.data);
      } else if (merchType === "hoodie") {
        setHoodiesData(response?.data);
      }
    });

    // Wait for all the fetches to complete
    await Promise.all(fetchPromises);
  };

  useEffect(() => {
    fetchAvailableMerchs();
  }, []);

  return (
    <div>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-2 xl:grid-cols-2">
        {/* Left Main Div */}
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
            <Card x-chunk="dashboard-05-chunk-1">
              <Dialog>
                <CardHeader className="pb-2">
                  <CardDescription className="text-lg font-bold">
                    {" "}
                    👕 All Tees
                  </CardDescription>
                  <CardTitle className="text-4xl">{teesData?.length}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    🐐👕 goat Tees
                  </div>
                </CardContent>
                <CardFooter>
                  <DialogTrigger asChild>
                    <Button>Add New Tee</Button>
                  </DialogTrigger>
                </CardFooter>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-center py-3">
                      Add New Tee Form
                    </DialogTitle>
                  </DialogHeader>
                  {/* Add Track Form will be used here */}
                  <AddMerchForm merchType={"tee"} />
                </DialogContent>
              </Dialog>
            </Card>

            <Card x-chunk="dashboard-05-chunk-2">
              <Dialog>
                <CardHeader className="pb-2">
                  <CardDescription className="text-lg font-bold">
                    {" "}
                    🧥 All Hoodies
                  </CardDescription>
                  <CardTitle className="text-4xl">
                    {hoodiesData?.length}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    🐐🧥 goat Hoodies
                  </div>
                </CardContent>

                <CardFooter>
                  <DialogTrigger asChild>
                    <Button>Add New Hoodie</Button>
                  </DialogTrigger>
                </CardFooter>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className=" text-2xl text-center py-3">
                      Add New Hoodie Form
                    </DialogTitle>
                  </DialogHeader>
                  {/* Add Track Form will be used here */}
                  <AddMerchForm merchType={"hoodie"} />
                </DialogContent>
              </Dialog>
            </Card>

            <Card x-chunk="dashboard-05-chunk-3">
              <Dialog>
                <CardHeader className="pb-2">
                  <CardDescription className="text-lg font-bold">
                    {" "}
                    🧢 All Caps
                  </CardDescription>
                  <CardTitle className="text-4xl">{capsData?.length}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    🐐🧢 goat Caps
                  </div>
                </CardContent>

                <CardFooter>
                  <DialogTrigger asChild>
                    <Button>Add New Cap</Button>
                  </DialogTrigger>
                </CardFooter>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className=" text-2xl text-center py-3">
                      Add New Cap Form
                    </DialogTitle>
                  </DialogHeader>
                  {/* Add Track Form will be used here */}
                  <AddMerchForm merchType={"cap"} />
                </DialogContent>
              </Dialog>
            </Card>
          </div>

          {/* Table DIV */}
          <div className="w-full h-full">
            <MerchTable tees={teesData} hoodies={hoodiesData} caps={capsData} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminMerch;
