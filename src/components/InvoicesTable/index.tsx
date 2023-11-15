import { Button, Input, Select } from "..";
import {
  Card,
  CardBody,
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  SelectItem,
  Spacer,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";
import { DollarSign, Pencil, Plus, Repeat2, Search } from "lucide-react";

import db from "../../db.json";
import { signal } from "@preact/signals-react";

const recurrence = signal("not-repeat");

export function InvoicesTable() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Card as="section" className="shadow-none">
        <CardBody>
          <div className="flex gap-4 items-center">
            <Input
              placeholder="Procurar fatura"
              className="max-w-xs mr-auto"
              startContent={<Search className="pointer-events-none" />}
              variant="bordered"
              color="primary"
            />

            <Input
              value={`${new Date().getFullYear()}-${new Date().getMonth() + 1}`}
              type="month"
              className="max-w-[200px]"
              variant="bordered"
              color="primary"
            />

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
          </div>

          <Spacer y={6} />

          <Table
            aria-label="Lista de faturas"
            className="[&_div]:shadow-none [&_div]:p-0"
            selectionMode="single"
          >
            <TableHeader className="font-bold">
              <TableColumn>Nome</TableColumn>
              <TableColumn>Valor</TableColumn>
              <TableColumn>Vencimento</TableColumn>
              <TableColumn className="text-right pr-10">Status</TableColumn>
            </TableHeader>

            <TableBody items={db}>
              {(item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(item.amount / 100)}
                  </TableCell>
                  <TableCell>
                    {new Intl.DateTimeFormat("pt-BR", {
                      dateStyle: "short",
                    }).format(new Date(item.due_date))}
                  </TableCell>
                  <TableCell className="text-right">
                    {item.paid ? (
                      <Chip
                        size="sm"
                        variant="flat"
                        color="success"
                        className="[&_>_*]:font-semibold [&_>_*]:px-3 min-w-[70px] text-center"
                      >
                        Paga
                      </Chip>
                    ) : (
                      <Chip
                        size="sm"
                        variant="flat"
                        color="danger"
                        className="[&_>_*]:font-semibold [&_>_*]:px-3 min-w-[70px] text-center"
                      >
                        Vencida
                      </Chip>
                    )}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardBody>
      </Card>

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
    </>
  );
}
