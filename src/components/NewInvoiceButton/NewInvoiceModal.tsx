import { Button, Input, Select } from "..";
import { DollarSign, Pencil, Repeat2 } from "lucide-react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  SelectItem,
} from "@nextui-org/react";

import { UseDisclosureReturn } from "@nextui-org/use-disclosure";
import { signal } from "@preact/signals-react";

const recurrence = signal("not-repeat");

type NewInvoiceModalProps = Pick<
  UseDisclosureReturn,
  "isOpen" | "onOpenChange"
>;

export function NewInvoiceModal({
  isOpen,
  onOpenChange,
}: NewInvoiceModalProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Nova Fatura
            </ModalHeader>
            <ModalBody>
              <Input
                label="Nome"
                placeholder="Nome da fatura"
                labelPlacement="outside"
                name="name"
                autoFocus
                isRequired
                startContent={<Pencil width="1.1em" />}
              />

              <Input
                label="Data de vencimento"
                placeholder="Data de vencimento"
                type="date"
                name="dueDate"
                isRequired
                labelPlacement="outside"
              />

              <Select
                label="Recorrencia"
                placeholder="Selecione a recorrencia da fatura"
                labelPlacement="outside"
                defaultSelectedKeys={[recurrence.value]}
                onChange={({ target }) => (recurrence.value = target.value)}
                isRequired
                startContent={<Repeat2 width="1.2em" />}
              >
                <SelectItem value="not-repeat" key={"not-repeat"}>
                  Nao se repete
                </SelectItem>
                <SelectItem value="weekly" key={"weekly"}>
                  Semanal
                </SelectItem>
                <SelectItem value="monthly" key={"monthly"}>
                  Mensal
                </SelectItem>
                <SelectItem value="Yearly" key={"Yearly"}>
                  Anual
                </SelectItem>
              </Select>

              <Input
                label="Valor"
                placeholder="Valor da fatura"
                type="number"
                name="amount"
                required
                labelPlacement="outside"
                isRequired
                startContent={<DollarSign width="1.1em" />}
              />
            </ModalBody>
            <ModalFooter>
              <Button variant="light" onPress={onClose}>
                Cancelar
              </Button>
              <Button color="primary" onPress={onClose}>
                Salvar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
