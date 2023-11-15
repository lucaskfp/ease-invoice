import { Button } from "..";
import { NewInvoiceModal } from "./NewInvoiceModal";
import { Plus } from "lucide-react";
import { useDisclosure } from "@nextui-org/use-disclosure";

export function NewInvoiceButton() {
  const { onOpen, isOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        color="primary"
        variant="shadow"
        startContent={<Plus />}
        className="hidden sm:inline-flex"
        onPress={onOpen}
      >
        <span>Nova Fatura</span>
      </Button>

      <Button
        color="primary"
        variant="shadow"
        isIconOnly
        aria-label="Nova Fatura"
        className="inline-flex sm:hidden"
        onPress={onOpen}
      >
        <Plus />
      </Button>

      <NewInvoiceModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
