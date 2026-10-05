import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

function ShadcnComparison() {
  return (
    <section className="shadcn-comparison">
      <h2>shadcn/ui comparison</h2>
      <p>
        These generated components are included for comparison; the custom
        Modal and Tabs above remain unchanged.
      </p>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open shadcn Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>shadcn Dialog</DialogTitle>
            <DialogDescription>
              This Dialog is composed from the generated shadcn primitives.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close dialog</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Tabs defaultValue="overview" className="shadcn-tabs">
        <TabsList aria-label="shadcn examples">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="keyboard">Keyboard</TabsTrigger>
          <TabsTrigger value="implementation">Implementation</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          Radix provides the tab selection and keyboard behavior.
        </TabsContent>
        <TabsContent value="keyboard">
          Arrow keys move focus and selection; Home and End move to the edges.
        </TabsContent>
        <TabsContent value="implementation">
          shadcn/ui exposes the source locally so it can be inspected and changed.
        </TabsContent>
      </Tabs>
    </section>
  );
}

export default ShadcnComparison;
