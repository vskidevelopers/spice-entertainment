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

export default function MerchTable({ tees, hoodies, caps }) {
  return (
    <div>
      <Tabs defaultValue="tees" className="w-full">
        <TabsList>
          <TabsTrigger value="tees">Tees</TabsTrigger>
          <TabsTrigger value="hoodies">Hoodies</TabsTrigger>
          <TabsTrigger value="caps">Caps</TabsTrigger>
        </TabsList>
        <TabsContent value="tees">
          <Table>
            <TableCaption>A list of your recent tees.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">#</TableHead>
                <TableHead className="w-[100px]">Product </TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Discount Price</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Colors</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tees?.map((tee, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{i + 1}</TableCell>
                  <TableCell className="font-medium">
                    <img
                      alt="tee cover image"
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      src={
                        tee?.image ||
                        "https://i.etsystatic.com/38971702/r/il/81a29f/4464418480/il_794xN.4464418480_c870.jpg"
                      }
                      width="64"
                    />
                  </TableCell>

                  <TableCell>{tee?.productName}</TableCell>
                  <TableCell>{tee?.price}</TableCell>
                  <TableCell>
                    {tee?.discountPrice ? tee?.discountPrice : "Nill"}
                  </TableCell>
                  <TableCell className="text-right">
                    {tee?.description}
                  </TableCell>
                  <TableCell className="text-right">{tee?.colors}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent value="hoodies">
          <Table>
            <TableCaption>A list of your recent Hoodies.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">#</TableHead>
                <TableHead className="w-[100px]">Product</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Discount Price</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Colors</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {hoodies?.map((hoodie, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{i + 1}</TableCell>
                  <TableCell className="font-medium">
                    <img
                      alt="hoodie cover image"
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      src={
                        hoodie?.image ||
                        "https://i.etsystatic.com/38971702/r/il/81a29f/4464418480/il_794xN.4464418480_c870.jpg"
                      }
                      width="64"
                    />
                  </TableCell>
                  <TableCell>{hoodie?.productName}</TableCell>
                  <TableCell>{hoodie?.price}</TableCell>
                  <TableCell>
                    {hoodie?.discountPrice ? hoodie?.discountPrice : "Nill"}
                  </TableCell>
                  <TableCell className="text-right">
                    {hoodie?.description}
                  </TableCell>
                  <TableCell className="text-right">{hoodie?.colors}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent value="caps">
          <Table>
            <TableCaption>A list of your recent Caps.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">#</TableHead>
                <TableHead className="w-[100px]">Product </TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Discount Price</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Colors</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {caps?.map((cap, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{i + 1}</TableCell>
                  <TableCell className="font-medium">
                    <img
                      alt="cap cover image"
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      src={
                        cap?.image ||
                        "https://i.etsystatic.com/38971702/r/il/81a29f/4464418480/il_794xN.4464418480_c870.jpg"
                      }
                      width="64"
                    />
                  </TableCell>
                  <TableCell>{cap?.productName}</TableCell>
                  <TableCell>{cap?.price}</TableCell>
                  <TableCell>
                    {cap?.discountPrice ? cap?.discountPrice : "Nill"}
                  </TableCell>
                  <TableCell className="text-right">
                    {cap?.description}
                  </TableCell>
                  <TableCell className="text-right">{cap?.colors}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
}
